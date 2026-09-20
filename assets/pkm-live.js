/* pkm-live.js - the retrieval bench for learn-pkm-with-phoebe.
 *
 * One note collection, organised five ways. Every number the bench reports is computed
 * from the graph: a real breadth-first search over real links, a real folder walk, and a
 * real keyword match against each note's own title and tags. Nothing is looked up from a
 * table of "what a good system scores".
 *
 * The question the bench asks is not "is your system tidy". It is: when you need this
 * note in eight months, can you get to it? A note is FOUND BY LOOKING if navigation
 * reaches it within two hops of somewhere you already go. It is FOUND BY SEARCHING if a
 * plausible query's words appear in its own title or tags. It is LOST if neither is true,
 * and the lost count is the only number in here that matters.
 *
 * Two kinds of number, and the widget labels each one:
 *   measured  - computed from the graph and the queries
 *   heuristic - the one-line verdict, which is a rule of thumb and says so
 *
 * THE CORPUS IS CONSTRUCTED. It is 48 notes written for this course to be realistic, not
 * a sample of anyone's real collection, and the widget says so. What is real is the
 * measurement: the search, the traversal and the matching all actually run.
 */
(function () {
  "use strict";

  /* ---------- the collection ------------------------------------------ */
  /* Eighteen months of one person's notes at Daybreak, the coffee subscription company
     from the sibling courses. The same 48 notes appear in every preset. Only the
     organisation changes: which folder a note sits in, what links out of it, what tags
     are on it. */

  var NOTES = [
    // --- live project: autumn roast launch
    { id: "n01", t: "Autumn roast launch plan", k: "autumn roast launch plan october" },
    { id: "n02", t: "Launch meeting 14 Mar", k: "launch meeting march notes" },
    { id: "n03", t: "Notes", k: "notes" },
    { id: "n04", t: "Guji supply shortfall - supplier call", k: "guji supply shortfall supplier call sidamo" },
    { id: "n05", t: "Sidamo cupping scores", k: "sidamo cupping scores flavour" },
    { id: "n06", t: "Sleeve copy v3", k: "sleeve copy packaging" },
    { id: "n07", t: "Origin claim - legal sign-off thread", k: "origin claim legal sign-off" },
    { id: "n08", t: "Roastery capacity: 4000 bags", k: "roastery capacity bags batch" },
    { id: "n09", t: "Seasonal pricing model", k: "seasonal pricing model margin" },
    { id: "n10", t: "Launch email draft", k: "launch email draft copy" },
    { id: "n11", t: "FAQ for support", k: "faq support questions" },
    { id: "n12", t: "Who owns the checklist?", k: "checklist owner" },

    // --- live project: subscription retention
    { id: "n13", t: "Retention project brief", k: "retention project brief churn" },
    { id: "n14", t: "Churn by cohort - March pull", k: "churn cohort march data" },
    { id: "n15", t: "Win-back offer ideas", k: "win-back offer lapsed" },
    { id: "n16", t: "Why people cancel - 20 interviews", k: "cancel interviews reasons customers" },
    { id: "n17", t: "Untitled", k: "untitled" },
    { id: "n18", t: "Pricing experiment results", k: "pricing experiment results test" },

    // --- ongoing area: suppliers
    { id: "n19", t: "Supplier list and contacts", k: "supplier list contacts" },
    { id: "n20", t: "Yirgacheffe co-op - first contact", k: "yirgacheffe co-op contact ethiopia" },
    { id: "n21", t: "Shipping lead times by origin", k: "shipping lead times origin logistics" },
    { id: "n22", t: "Harvest calendar", k: "harvest calendar seasons" },
    { id: "n23", t: "Fair trade certification - what it costs", k: "fair trade certification cost" },

    // --- ongoing area: the roastery
    { id: "n24", t: "Roast profiles - current", k: "roast profiles curve temperature" },
    { id: "n25", t: "Machine service log", k: "machine service log maintenance" },
    { id: "n26", t: "Batch sizes and timing", k: "batch sizes timing schedule" },

    // --- ongoing area: the team
    { id: "n27", t: "One-to-ones - running notes", k: "one-to-ones team notes" },
    { id: "n28", t: "Hiring: roaster role", k: "hiring roaster role job" },
    { id: "n29", t: "Shift patterns that worked", k: "shift patterns rota" },

    // --- reference: saved reading
    { id: "n30", t: "Article: why subscriptions churn in month 3", k: "article subscription churn month three" },
    { id: "n31", t: "Podcast notes - specialty coffee margins", k: "podcast specialty coffee margins" },
    { id: "n32", t: "Interesting", k: "interesting" },
    { id: "n33", t: "Thread on packaging sustainability", k: "thread packaging sustainability" },
    { id: "n34", t: "Book notes: The Coffee Atlas", k: "book notes coffee atlas" },
    { id: "n35", t: "Competitor teardown - Bluewater", k: "competitor teardown bluewater" },
    { id: "n36", t: "Saved: email design examples", k: "saved email design examples" },
    { id: "n37", t: "Read later", k: "read later" },
    { id: "n38", t: "Cupping vocabulary cheatsheet", k: "cupping vocabulary flavour wheel" },

    // --- reference: how we do things
    { id: "n39", t: "How to run a cupping session", k: "how to run cupping session" },
    { id: "n40", t: "Photography setup for product shots", k: "photography setup product shots" },
    { id: "n41", t: "Our brand voice, one page", k: "brand voice tone" },
    { id: "n42", t: "Invoice process", k: "invoice process finance" },

    // --- archive: done and gone
    { id: "n43", t: "Spring blend launch - post mortem", k: "spring blend launch post mortem" },
    { id: "n44", t: "Old pricing page copy", k: "old pricing page copy" },
    { id: "n45", t: "2025 supplier contract - superseded", k: "2025 supplier contract superseded" },
    { id: "n46", t: "Misc", k: "misc" },
    { id: "n47", t: "Stuff from old laptop", k: "stuff old laptop" },
    { id: "n48", t: "Ideas", k: "ideas" }
  ];

  /* The queries a person actually arrives with, eight months later, and the note that
     answers each. Written as the question, not as keywords. */
  var QUERIES = [
    { q: "what did the Guji supplier actually say?", target: "n04" },
    { q: "why did we pick Sidamo for the blend?", target: "n05" },
    { q: "did legal ever sign the origin claim?", target: "n07" },
    { q: "what was the roastery's max batch?", target: "n08" },
    { q: "who was supposed to own the launch checklist?", target: "n12" },
    { q: "what did the 20 cancellation interviews say?", target: "n16" },
    { q: "what were the pricing experiment results?", target: "n18" },
    { q: "what are the shipping lead times from Ethiopia?", target: "n21" },
    { q: "how do we run a cupping session?", target: "n39" },
    { q: "what went wrong at the spring launch?", target: "n43" },
    { q: "that article about month-three churn", target: "n30" },
    { q: "the thing about packaging I saved", target: "n33" },
    // the four nobody titled properly: these are the questions that decide a system
    { q: "the meeting where we agreed the October date", target: "n03" },
    { q: "that retention idea I jotted down in the summer", target: "n17" },
    { q: "the competitor thing somebody sent me", target: "n32" },
    { q: "the half-formed idea about a subscriber tier", target: "n48" }
  ];

  /* Entry points: the places this person actually opens each week. Navigation starts
     here and nowhere else, which is the honest model of how anyone uses a collection. */
  var ENTRIES_DEFAULT = ["n01", "n13"];

  /* ---------- the five organisations ---------------------------------- */
  /* Each preset supplies: folders (note -> folder), links (note -> [notes]), tags
     (note -> [tags]), and which notes are entry points. Same 48 notes throughout. */

  function noLinks() { return {}; }
  function allIn(folder) { var o = {}; NOTES.forEach(function (n) { o[n.id] = folder; }); return o; }

  var TOPIC_FOLDERS = {
    n01: "Launch", n02: "Launch", n03: "Inbox", n04: "Coffee", n05: "Coffee", n06: "Launch",
    n07: "Launch", n08: "Roastery", n09: "Money", n10: "Launch", n11: "Launch", n12: "Inbox",
    n13: "Customers", n14: "Customers", n15: "Customers", n16: "Customers", n17: "Inbox",
    n18: "Money", n19: "Coffee", n20: "Coffee", n21: "Coffee", n22: "Coffee", n23: "Coffee",
    n24: "Roastery", n25: "Roastery", n26: "Roastery", n27: "Team", n28: "Team", n29: "Team",
    n30: "Reading", n31: "Reading", n32: "Inbox", n33: "Reading", n34: "Reading", n35: "Reading",
    n36: "Reading", n37: "Inbox", n38: "Coffee", n39: "Roastery", n40: "Reading", n41: "Reading",
    n42: "Money", n43: "Launch", n44: "Money", n45: "Coffee", n46: "Inbox", n47: "Inbox", n48: "Inbox"
  };

  var PARA_FOLDERS = {
    // Projects: things with a deadline and an outcome
    n01: "1 Projects/Autumn roast", n02: "1 Projects/Autumn roast", n04: "1 Projects/Autumn roast",
    n05: "1 Projects/Autumn roast", n06: "1 Projects/Autumn roast", n07: "1 Projects/Autumn roast",
    n08: "1 Projects/Autumn roast", n09: "1 Projects/Autumn roast", n10: "1 Projects/Autumn roast",
    n11: "1 Projects/Autumn roast", n12: "1 Projects/Autumn roast", n03: "1 Projects/Autumn roast",
    n13: "1 Projects/Retention", n14: "1 Projects/Retention", n15: "1 Projects/Retention",
    n16: "1 Projects/Retention", n17: "1 Projects/Retention", n18: "1 Projects/Retention",
    // Areas: ongoing responsibilities with no end date
    n19: "2 Areas/Suppliers", n20: "2 Areas/Suppliers", n21: "2 Areas/Suppliers",
    n22: "2 Areas/Suppliers", n23: "2 Areas/Suppliers",
    n24: "2 Areas/Roastery", n25: "2 Areas/Roastery", n26: "2 Areas/Roastery",
    n27: "2 Areas/Team", n28: "2 Areas/Team", n29: "2 Areas/Team",
    // Resources: topics of interest, useful later
    n30: "3 Resources/Subscriptions", n31: "3 Resources/Business", n32: "3 Resources/Business",
    n33: "3 Resources/Packaging", n34: "3 Resources/Coffee", n35: "3 Resources/Competitors",
    n36: "3 Resources/Design", n37: "3 Resources/Business", n38: "3 Resources/Coffee",
    n39: "3 Resources/How we do things", n40: "3 Resources/How we do things",
    n41: "3 Resources/How we do things", n42: "3 Resources/How we do things",
    // Archives: done, dead, superseded
    n43: "4 Archive", n44: "4 Archive", n45: "4 Archive", n46: "4 Archive",
    n47: "4 Archive", n48: "4 Archive"
  };

  /* Links a person would actually make: a project note points at the things it depends on. */
  var PROJECT_LINKS = {
    n01: ["n02", "n04", "n06", "n08", "n09", "n10", "n12"],
    n02: ["n04", "n08", "n12"],
    n04: ["n05", "n19"],
    n06: ["n07"],
    n09: ["n18"],
    n10: ["n11", "n36"],
    n13: ["n14", "n15", "n16", "n18"],
    n16: ["n30"]
  };

  /* The same, plus the links into reference material that make a collection compound. */
  var FULL_LINKS = {
    n01: ["n02", "n04", "n06", "n08", "n09", "n10", "n12", "n43"],
    n02: ["n03", "n04", "n08", "n12"],
    n04: ["n05", "n19", "n21"],
    n05: ["n38"],
    n06: ["n07", "n33"],
    n08: ["n24", "n26"],
    n09: ["n18", "n31"],
    n10: ["n11", "n36", "n41"],
    n13: ["n14", "n15", "n16", "n17", "n18", "n35"],
    n16: ["n30"],
    n19: ["n20", "n22", "n23"],
    n24: ["n39"],
    n43: ["n44"]
  };

  var TAGS_LIGHT = {
    n04: ["supply"], n05: ["coffee"], n07: ["legal"], n18: ["pricing"],
    n21: ["supply"], n30: ["churn"], n33: ["packaging"], n39: ["howto"]
  };

  /* What over-tagging looks like: many tags, applied loosely, several meaning the same
     thing (idea/ideas/thinking, todo/next/action). */
  var TAG_VOCAB = ["idea", "ideas", "thinking", "todo", "next", "action", "important", "urgent",
    "reference", "ref", "resource", "reading", "toread", "read", "coffee", "supply", "supplier",
    "money", "pricing", "cost", "team", "people", "legal", "admin", "project", "work", "inbox",
    "maybe", "someday", "review", "draft", "wip", "done", "archive", "misc", "other", "notes",
    "meeting", "research", "insight"];

  function heavyTags() {
    var o = {}, i = 0;
    NOTES.forEach(function (n, idx) {
      var t = [];
      for (var j = 0; j < 4; j++) { t.push(TAG_VOCAB[(idx * 7 + j * 11 + i) % TAG_VOCAB.length]); }
      i += 3;
      o[n.id] = t.filter(function (x, k, a) { return a.indexOf(x) === k; });
    });
    return o;
  }

  var PRESETS = [
    { id: "dump", label: "One big folder",
      note: "Eighteen months of notes in a single place, no links, a handful of tags. The default state of almost every collection.",
      folders: allIn("Notes"), links: noLinks(), tags: TAGS_LIGHT, entries: ENTRIES_DEFAULT },

    { id: "topics", label: "Sorted into topic folders",
      note: "The same notes filed by subject: Coffee, Money, Team, Reading. Tidier, and nothing is linked.",
      folders: TOPIC_FOLDERS, links: noLinks(), tags: TAGS_LIGHT, entries: ENTRIES_DEFAULT },

    { id: "para", label: "PARA, one home each",
      note: "Filed by how actionable it is: Projects, Areas, Resources, Archive. Still no links between notes.",
      folders: PARA_FOLDERS, links: noLinks(), tags: TAGS_LIGHT, entries: ENTRIES_DEFAULT },

    { id: "linked", label: "PARA, and the project notes link out",
      note: "Each project note points at what it depends on, and a few point into the reference shelf.",
      folders: PARA_FOLDERS, links: FULL_LINKS, tags: TAGS_LIGHT, entries: ENTRIES_DEFAULT },

    { id: "tagged", label: "Tag everything", anti: true,
      note: "PARA, the same links, and four tags on every note from a forty-tag vocabulary. It feels like the most organised the collection has ever been.",
      folders: PARA_FOLDERS, links: FULL_LINKS, tags: null, entries: ENTRIES_DEFAULT }
  ];

  /* ---------- the measurements ---------------------------------------- */
  var BY_ID = {}; NOTES.forEach(function (n) { BY_ID[n.id] = n; });

  function stop(w) { return /^(what|did|the|that|about|a|an|of|to|for|from|and|was|were|is|are|we|our|i|my|how|do|does|ever|actually|thing|saved|at|in|on|it|its|they|their|you|your)$/.test(w); }
  function words(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean); }

  /* A folder you can scan is a folder you can find things in. Past about a dozen notes you
     are not looking any more, you are reading a list, and the list is where notes go to be
     forgotten. This is the whole reason a single "Notes" folder fails: it is not untidy,
     it is unscannable. */
  var SCAN_LIMIT = 12;

  function folderSizes(p) {
    var c = {};
    NOTES.forEach(function (n) { var f = p.folders[n.id]; c[f] = (c[f] || 0) + 1; });
    return c;
  }

  /* Navigation: breadth-first over links, plus the contents of any folder you land in that
     is small enough to scan. Two hops, because nobody clicks further than that. */
  function navigable(p, maxHops) {
    var sizes = folderSizes(p);
    var seen = {}, frontier = p.entries.slice();
    frontier.forEach(function (id) { seen[id] = 0; });
    for (var hop = 1; hop <= maxHops; hop++) {
      var next = [];
      frontier.forEach(function (id) {
        // a link out is one hop
        (p.links[id] || []).forEach(function (to) {
          if (!(to in seen)) { seen[to] = hop; next.push(to); }
        });
        // opening the folder you are in is one hop, and only helps if you can scan it
        var f = p.folders[id];
        if (sizes[f] <= SCAN_LIMIT) {
          NOTES.forEach(function (n) {
            if (p.folders[n.id] === f && !(n.id in seen)) { seen[n.id] = hop; next.push(n.id); }
          });
        }
      });
      frontier = next;
      if (!frontier.length) break;
    }
    return seen;
  }

  /* Search: the query's meaningful words against the note's own title and tags. A note
     titled "Notes" is not findable by searching, whatever is inside it.
     A tag only counts as a hit if it narrows: a tag sitting on twenty notes returns twenty
     notes, which is a list, not an answer. */
  var TAG_USEFUL = 8;

  function tagCounts(p) {
    var c = {};
    NOTES.forEach(function (x) { (p.tags[x.id] || []).forEach(function (t) { c[t] = (c[t] || 0) + 1; }); });
    return c;
  }

  function searchable(p, note, query, tc) {
    var q = words(query).filter(function (w) { return !stop(w); });
    var hit = function (hay) {
      return q.some(function (w) {
        return hay.some(function (h) { return h === w || (w.length > 4 && h.indexOf(w) === 0) || (h.length > 4 && w.indexOf(h) === 0); });
      });
    };
    if (hit(words(note.t))) return true;
    var narrow = (p.tags[note.id] || []).filter(function (t) { return tc[t] <= TAG_USEFUL; });
    return hit(narrow);
  }

  /* Tag ambiguity: how many notes share a tag with this note. A tag that points at
     thirty notes has not narrowed anything down. */
  function tagSpread(p) {
    var count = {}, total = 0, n = 0;
    NOTES.forEach(function (x) { (p.tags[x.id] || []).forEach(function (t) { count[t] = (count[t] || 0) + 1; }); });
    NOTES.forEach(function (x) {
      var ts = p.tags[x.id] || [];
      if (!ts.length) return;
      var best = Math.min.apply(null, ts.map(function (t) { return count[t]; }));
      total += best; n++;
    });
    return { perNote: n ? Math.round(10 * total / n) / 10 : 0, vocab: Object.keys(count).length };
  }

  function measure(p) {
    var reach = navigable(p, 2);
    var fsz = folderSizes(p);
    var biggest = Math.max.apply(null, Object.keys(fsz).map(function (k) { return fsz[k]; }));
    var reached = Object.keys(reach).length;
    var depthSum = 0, depthN = 0;
    Object.keys(reach).forEach(function (id) { depthSum += reach[id]; depthN++; });

    var inbound = {};
    NOTES.forEach(function (n) { inbound[n.id] = 0; });
    Object.keys(p.links).forEach(function (from) {
      (p.links[from] || []).forEach(function (to) { inbound[to] = (inbound[to] || 0) + 1; });
    });
    var orphans = NOTES.filter(function (n) { return !inbound[n.id] && !(n.id in reach); }).length;

    var tc = tagCounts(p);
    var byLook = 0, bySearch = 0, lost = [];
    QUERIES.forEach(function (Q) {
      var note = BY_ID[Q.target];
      if (Q.target in reach) byLook++;
      else if (searchable(p, note, Q.q, tc)) bySearch++;
      else lost.push(Q.q);
    });

    var ts = tagSpread(p);
    var decisions = NOTES.reduce(function (a, n) { return a + (p.tags[n.id] || []).length; }, 0);
    return {
      tagDecisions: decisions,
      notes: NOTES.length,
      reached: reached,
      reachPct: Math.round(100 * reached / NOTES.length),
      depth: depthN ? Math.round(10 * depthSum / depthN) / 10 : 0,
      orphans: orphans,
      links: Object.keys(p.links).reduce(function (a, k) { return a + p.links[k].length; }, 0),
      byLook: byLook, bySearch: bySearch, lost: lost.length, lostList: lost,
      queries: QUERIES.length,
      tagVocab: ts.vocab, tagNarrow: ts.perNote,
      biggestFolder: biggest, folders: Object.keys(fsz).length
    };
  }

  function grade(o) {
    if (o.lost > 4) return ["bad", o.lost + " of " + o.queries + " questions have no answer you could reach"];
    if (o.lost > 2) return ["bad", o.lost + " questions lost, and the collection keeps growing"];
    if (o.lost > 0 && o.tagNarrow > 12) return ["ok", "Tags that point at " + o.tagNarrow + " notes have not narrowed anything"];
    if (o.lost > 0) return ["ok", o.lost + " lost, the rest reachable"];
    if (o.reachPct >= 60) return ["good", "Everything asked for, reachable"];
    return ["ok", "Nothing lost, and most of the shelf is still dark"];
  }

  /* ---------- widget --------------------------------------------------- */
  var root, readout, lostBox, presetBtns = {}, current = null, out = {};

  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function metric(label, value, unit, kind) {
    return '<div class="mb-metric"><span class="mb-mlabel">' + label + "</span>" +
           '<span class="mb-mvalue">' + value + "</span>" +
           '<span class="mb-munit">' + unit + "</span>" +
           '<span class="mb-mkind is-' + kind + '">' + kind + "</span></div>";
  }

  function render() {
    var g = grade(out);
    readout.innerHTML =
      '<div class="mb-verdict is-' + g[0] + '">' + esc(g[1]) + ' <span class="mb-mkind is-heuristic">heuristic</span></div>' +
      '<div class="mb-metrics">' +
        metric("Questions answered by looking", out.byLook + " / " + out.queries, "reached in two hops", "measured") +
        metric("Answered only by searching", out.bySearch, "the title or a tag matched", "measured") +
        metric("Lost", out.lost, "neither reachable nor searchable", "measured") +
        metric("Notes reachable in two hops", out.reached + " / " + out.notes, out.reachPct + "% of the collection", "measured") +
        metric("Orphans", out.orphans, "nothing links in, nothing reaches them", "measured") +
        metric("Links in the collection", out.links, "note to note", "measured") +
        metric("Tag vocabulary", out.tagVocab, "distinct tags in use", "measured") +
        metric("Filing decisions spent on tags", out.tagDecisions, "one per tag, per note", "measured") +
        metric("Narrowest tag", out.tagNarrow, "notes it points at, on average", "measured") +
        metric("Biggest folder", out.biggestFolder, "notes, of " + out.folders + " folders; " + SCAN_LIMIT + "+ is a list, not a place", "measured") +
      "</div>";
    lostBox.innerHTML = out.lost
      ? '<div class="pk-lost"><h5>What you could not get back</h5><ul>' +
        out.lostList.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></div>"
      : '<div class="pk-lost is-clear"><h5>Every question answered</h5><p>All ' + out.queries +
        ' questions reached their note by looking or by searching.</p></div>';
  }

  function setPreset(id) {
    var p = PRESETS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var use = { folders: p.folders, links: p.links, tags: p.tags || heavyTags(), entries: p.entries };
    current = id;
    Object.keys(presetBtns).forEach(function (k) {
      presetBtns[k].classList.toggle("is-on", k === id);
      presetBtns[k].querySelector("input").checked = (k === id);
    });
    out = measure(use);
    render();
  }

  function build() {
    var panel = document.createElement("div");
    panel.className = "mb-presets";
    PRESETS.forEach(function (p) {
      var lab = document.createElement("label");
      lab.className = "mb-preset" + (p.anti ? " is-anti" : "");
      lab.innerHTML = '<input type="radio" name="pk-preset" value="' + p.id + '">' +
        '<span class="mb-pname">' + esc(p.label) +
        (p.anti ? ' <em class="mb-anti">the one that feels organised</em>' : "") + "</span>" +
        '<span class="mb-pnote">' + esc(p.note) + "</span>";
      panel.appendChild(lab);
      presetBtns[p.id] = lab;
      lab.querySelector("input").addEventListener("change", function () { setPreset(p.id); });
    });

    var intro = document.createElement("p");
    intro.className = "mb-hint";
    intro.textContent = "48 notes, 12 questions asked eight months later, 2 places this person opens each week. " +
      "The notes are the same in every preset; only the filing changes. The collection is written for this course, not sampled from anyone's real one.";

    readout = document.createElement("div");
    readout.className = "mb-readout";
    lostBox = document.createElement("div");
    lostBox.className = "pk-lostwrap";

    root.appendChild(panel);
    root.appendChild(intro);
    root.appendChild(readout);
    root.appendChild(lostBox);
    setPreset("dump");
  }

  function init() {
    root = document.getElementById("retrieval-bench");
    if (!root) return;
    build();
    window.PKM_LIVE = {
      presets: PRESETS.map(function (p) { return p.id; }),
      preset: setPreset,
      get current() { return current; },
      get metrics() { return out; },
      notes: NOTES.length,
      queries: QUERIES.map(function (q) { return q.q; })
    };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
