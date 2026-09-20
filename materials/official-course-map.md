# learn-pkm-with-phoebe · source map

Every fact the pages state, where it came from, how far it was verified, and the honest
limits of the evidence. by Phoebe Fu

Research date: 2026-09-20. Fetch method: every Forte Labs quote came from raw HTML pulled
with `curl` (Safari user-agent) and stripped of markup with a Python script, not a
summariser. Every research-paper number came from PDF text extracted with PyMuPDF (`fitz`)
and grepped directly, or from a publisher/OpenAlex abstract record when the full PDF was
blocked. Two summariser traps were caught and must not be repeated:

1. A WebSearch summary of the Bergman et al. PIM literature asserted "345 long-term users,
   85,000 refinding actions, navigation used in 86% of retrievals" — a fluent, specific,
   fully invented composite. The real Bergman et al. (2008) abstract, read directly from
   OpenAlex's indexed record, says navigation was used for **56-68%** of retrieval events
   and search for **4-15%**, self-estimated by questionnaire, not logged. The 86%/345/85,000
   claim is **not stated anywhere in the source and must not be used.**
2. A WebSearch summary offered a "study testing 9 note-taking apps" with an 18-61% note
   reuse rate as if it were research. It is a Medium personal-blog post (one author, no
   participants, no method section) — not a study. It is listed below as **not evidence**
   and excluded from the evidence table.

---

## The course in one line

PARA is a filing cabinet, not a finding. Capture, organize, retrieve, review — the loop
that works in any tool — plus an honest accounting of what is and is not known about
whether any of it actually helps you remember or produce more.

---

## Sessions

| # | Title | Signature thing |
|---|---|---|
| 1 | The collection problem | Why the pile stops paying; the evidence read honestly, including the study that does not exist |
| 2 | Capture that survives | A capture rule you can apply in four seconds, and the title that makes a note findable |
| 3 | PARA, and one home per note | Organize by actionability; Forte's four categories in his own words, and their limits |
| 4 | **The retrieval bench** | **One collection, five filings, sixteen questions asked eight months later** |
| 5 | Review that actually happens | Retrieval practice and spacing applied to your own notes, not to flashcards |
| 6 | A system you keep | The smallest loop that survives a bad week; final scorecard |

---

## Scope boundaries (decided before the first page is written)

| Question | Owning course |
|---|---|
| Zettelkasten, Luhmann's slip-box, linked-note graphs, Ahrens's *How to Take Smart Notes* | `learn-obsidian-with-phoebe` |
| Reading technique, book notes, highlighting-to-notes workflows | `learn-reading-with-phoebe` |
| Notion databases as a PKM backend | a separate planned Notion course |
| Zapier/n8n automation of a PKM pipeline | a separate planned automation course |
| LLM agents doing PKM work (auto-tagging, auto-summarizing a vault) | a separate planned LLM-workflow course |
| **Capture, PARA-style organizing, retrieval, and the weekly/monthly review loop, tool-agnostic** | **here** |

Two name-checks and no deeper, per the brief:

- **Sönke Ahrens, *How to Take Smart Notes*** (2017, self-published via CreateSpace) —
  systematizes Niklas Luhmann's Zettelkasten. Luhmann kept a physical slip-box reported at
  roughly 90,000 cards (widely reported as "70,000" in older secondary sources) and used it
  to write more than 70 books and close to 400 articles. **Tier C** for the exact card count;
  every source repeating it cites Luhmann's own later remarks or Ahrens's paraphrase of them,
  and neither was reached directly in this pass. Owned by `learn-obsidian-with-phoebe`.
- **Niklas Luhmann's Zettelkasten** as a linked-note method (atomic notes, permanent
  addresses, note-to-note links instead of folders) — the entire mechanism this course does
  **not** teach. PARA files by actionability; Zettelkasten links by idea. Session 1 says so
  in one line.

---

## Verified facts, by tier

Tier A = read the primary source's own text (raw HTML or PDF). Tier B = a reliable secondary
citing the primary, primary itself unreached. Tier C = search-snippet corroboration only.

### The practitioner canon — Tiago Forte

| Fact | Tier | Source |
|---|---|---|
| *Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential*, Tiago Forte, Atria Books (Simon & Schuster imprint), published **June 14, 2022**, 272 pp, ISBN **978-1-9821-6738-7**. | B | Publisher's own product page (simonandschuster.com) returned HTTP 403 to automated fetch on this run; AbeBooks, NetGalley and Amazon bookseller listings agree on publisher, date, page count and ISBN; the ISBN was independently confirmed against `fortelabs.com/blog/book` raw HTML (`9781982167387` appears in the page source). |
| **PARA**, in Forte's own words: "Projects" = "projects you're actively working on – short-term efforts (in your work or personal life) that you take on with a certain goal in mind." "Areas" = "areas of responsibility – important parts of your work and life that require ongoing attention." "Resources" = "resources on a range of topics you're interested in and learning about." "Archives" = "anything from the previous three categories that is no longer active, but you might want to save for future reference." | A | `fortelabs.com/blog/para/`, published 2023-02-24, last modified 2026-04-15 (still the current live page as of this research date) |
| Forte's stated organizing mantra, verbatim: **"organize by actionability."** He contrasts it explicitly with organizing "by broad subjects like in school" (e.g. filing everything under "Psychology" or "Marketing"). | A | same page |
| PARA's origin story as told by Forte: developed from "more than a decade of personal experimentation, teaching thousands of students, and coaching world-class professionals" as a Bay Area productivity coach; the page opens with an anecdote about a biotech Senior Director whose "project list" was actually a list of Areas (Hiring, Strategic Planning, Vacations — none had a finish line). | A | same |
| **CODE** = Capture, Organize, Distill, Express. Forte's own one-line summary of each, verbatim: Capture = **"capturing the ideas and insights you think are worth saving."** Organize = organizing "for actionability." Distill = **"distill down to the essence"** once patterns emerge in collected notes. Express = **"All of this capturing, organizing, and distilling has one ultimate purpose: creating tangible results in the real world."** | A | `fortelabs.com/blog/basboverview/`, "Building a Second Brain: The Definitive Introductory Guide," published 2023-05-01, updated 2023-11-23 |
| Forte's own capture criterion, verbatim: **"Keep only what resonates."** He explicitly rejects an analytical checklist: "don't make it a highly intellectual, analytical decision. Instead, your rule of thumb should be to save anything that 'resonates' with you on an intuitive level." | A | same |
| Forte's definition of "Second Brain," verbatim: "an external, centralized, digital repository for the things you learn and the resources from which they come. A Second Brain ultimately expands our memory and our intellect using modern tools of technology." | A | same |
| **Progressive Summarization**, Forte's own layer definitions, verbatim: Layer 0 = "the original, full-length source text." Layer 1 = "the content that I initially bring into my note-taking program... I don't have an explicit set of criteria on what to keep. I just capture anything that feels insightful, interesting, or useful." Layer 2 = "the first round of true summarization, in which I bold only the best parts." Layer 3 = switch to highlighting "the 'best of the best'." Layer 4 = "recording my own [words]... an informal executive summary at the top of the note." Beyond Layer 4, a small minority get "remixed" into original output (a blog post, a sketch, a slide). | A | `fortelabs.com/blog/progressive-summarization-a-practical-technique-for-designing-discoverable-notes/`, published 2017-12-27, updated 2023-05-16 |
| Forte's stated design tension behind Progressive Summarization, verbatim: balancing **"discoverability and understanding."** Compression buys discoverability; detail buys understanding; "you cannot compress something without losing some of its context." | A | same |
| Forte explicitly argues against **both** pure tagging-first and pure notebook-first systems, proposing a third, "note-first" approach where the design of the individual note (not tags, not folders) carries the weight. PARA is described in this same essay as "on its own... a notebook-first system" that is "woefully inadequate" without note-level design on top of it. | A | same |

### Where Forte's own definition differs from how the internet repeats it

| Internet-repeated version | Forte's own correction, verbatim | Tier | Source |
|---|---|---|---|
| "Build a Second Brain" = a single app/setup you install once, like Notion or Obsidian | "A 'Second Brain' isn't a thing you either have or don't have... It is a distributed system made up of apps, devices, websites, social media platforms, cloud and storage drives, organizations, and people... In today's world, we all have Second Brains." Myth #1 in his own list of the "9 Biggest Myths and Misconceptions about Building a Second Brain." | A | `fortelabs.com/blog/9-biggest-myths-and-misconceptions-about-basb/`, published and last modified 2021-04-27 |
| CODE/PARA must be fully, perfectly implemented before it "counts" | "A Second Brain is adaptive, like a living organism... any incremental improvement immediately makes a difference, whether or not the other parts of the system are already in place." Myth #2 on the same page. | A | same |

This is a genuinely useful finding for session 1: the internet's summary of PARA/CODE is
largely accurate to Forte's own wording (the four categories and four steps quoted above
match what every third-party blog says), but the internet's framing of "Second Brain" as a
single tool/app is the thing Forte himself calls the #1 myth about his own work.

### CODE/PARA as reported by third-party sites (Tier C, cross-checked and found accurate)

Multiple third-party blogs (Taskade, Arvora, Workflowy help docs, EvyOS) paraphrase CODE and
PARA in terms that match the Tier A quotes above closely enough that no correction is
needed. The one place third-party paraphrase runs ahead of the primary source: several
sites describe "Organize" as "file it by where it is useful" — this is a fair paraphrase of
"organize by actionability" but is **not** Forte's own phrase; the pages should use his
verbatim phrase, not the paraphrase, when quoting.

---

## The evidence question — the spine of session 1

### Is there a controlled study of PARA, "second brain," or a similar PKM system improving retrieval, output or learning?

**No such study was found, and a real search was made for one** (not just "no first hit").
Search terms tried: PARA method + randomized controlled trial; "Building a Second Brain" +
empirical evaluation / peer-reviewed; personal knowledge management system + controlled
study + retrieval/productivity outcome. Every hit returned was a blog post, a course-seller
comparison page, a Medium personal account, or a LinkedIn post by Forte himself — never a
peer-reviewed outcome study naming PARA, CODE, or "second brain" as the tested intervention.

**This absence is the finding, stated precisely:** there is a broader academic PKM
literature (survey-based, self-report scales such as PKIM instruments, and Harold Jarche's
correlational Seek-Sense-Share framework linking self-reported PKM activity to self-reported
learning outcomes), but it is a different literature — organizational-KM framing,
self-assessment scales, correlational, not experimental — and none of it names or tests
Forte's PARA/CODE or any "second brain" methodology specifically. **Tier: the absence itself
is Tier B** (a real, repeated search across multiple query angles came back empty of the
target study type; corroborated independently by a search-engine synthesis stating the same
absence). Do not state "PARA is proven to work" or "second brain has evidence behind it" —
state instead that the mechanism it borrows from (retrieval practice, generation, spacing)
has evidence; the packaging (PARA/CODE) does not have its own outcome study.

### What IS well-evidenced and adjacent — what the course can honestly stand on

**Retrieval practice / the testing effect — Roediger & Karpicke 2006, *Psychological
Science* 17(3), 249-255.** Tier A, full PDF text read directly.

| Fact | Numbers |
|---|---|
| Experiment 1: N = 120 Washington University undergraduates. Two TOEFL-prep prose passages (256 and 275 words), studied for 7 min, then either restudied or tested (free recall, no feedback), then a final recall test at 5 min, 2 days, or 1 week later (between-subjects for delay) | — |
| Initial 7-min test: subjects recalled ~70% of the passage on average (20.9 of 30 idea units) | — |
| **5-min final test:** restudy group recalled **81%** vs. tested group **75%** — restudying wins short-term, t(39) = 3.22, d = 0.52 | — |
| **2-day final test:** tested group **68%** vs. restudy group **54%** — testing wins, t(39) = 6.97, d = 0.95 | — |
| **1-week final test:** tested group **56%** vs. restudy group **42%** — testing wins, t(39) = 6.41, d = 0.83. The tested group at 1 week recalled as much as the restudy group did after only 2 days | — |
| Experiment 2: N = 180. Three between-subjects conditions: study x4 (SSSS), study x3 + test x1 (SSST), study x1 + test x3 (STTT); final test at 5 min or 1 week (30 per cell, 6 cells) | — |
| **5-min final test:** SSSS **83%** > SSST **78%** > STTT **71%** — more studying wins short-term | — |
| **1-week final test:** STTT **61%** > SSST **56%** > SSSS **40%** — more *testing* wins long-term, a reversal of the 5-min ordering | — |
| SSSS subjects were significantly *more confident* they'd remember the passage in a week than SSST or STTT subjects, despite recalling the least a week later — the metacognitive illusion runs opposite to the actual effect | — |

**The meta-analytic confirmation — Rowland 2014, *Psychological Bulletin* 140(6),
1432-1463.** Tier A, full PDF text read directly.

| Fact | Numbers |
|---|---|
| **159 effect sizes from 61 studies**, published 1975-2013, meeting strict inclusion criteria (restudy control condition equating time-on-task, no criterion-learning designs, no classroom studies) | — |
| Overall weighted mean effect (random-effects model): **Hedges' g = 0.50**, 95% CI [0.42, 0.58] — a medium effect, reliably above zero | — |
| Published studies showed a larger effect (g = 0.58, CI [0.49, 0.67], k=122) than unpublished ones (g = 0.25, CI [0.10, 0.41], k=37) — some publication-bias inflation is likely | — |
| Prose stimuli: g = 0.58; paired associates: g = 0.59; single words: g = 0.39 — the effect is not uniform across material type | — |
| Between-subjects designs showed a larger effect (g = 0.69) than within-subjects (g = 0.43) | — |

**The generation effect — Slamecka & Graf 1978 (primary, unreached this pass) and Bertsch,
Pesta, Wiscott & McDaniel 2007 meta-analysis.** Tier B — the 2007 meta-analysis's exact
sentence appeared verbatim in a search-engine result quoting the author's own PDF, but the
PDF itself (people.vcu.edu, the author's own mirror) failed DNS resolution repeatedly on
this run and was not read directly; flagged Tier B rather than A for that reason.

| Fact | Numbers | Tier |
|---|---|---|
| Slamecka & Graf (1978), *JEP: Human Learning & Memory* 4(6), 592-604: five experiments; self-generated words (e.g., completing "hot : c___" for "cold") were recalled/recognized better than read word pairs, across free recall, cued recall, recognition and confidence measures | qualitative pattern only, no primary numbers reached | B (via secondary summaries agreeing closely; primary PDF blocked) |
| Bertsch, Pesta, Wiscott & McDaniel (2007), *Memory & Cognition* 35, 201-210: meta-analysis, **445 effect sizes from 86 studies** | overall effect **d ≈ 0.40** | B |

**Spacing / distributed practice — Cepeda, Pashler, Vul, Wixted & Rohrer 2006, *Psychological
Bulletin* 132(3), 354-380.** Tier A, full PDF text read directly.

| Fact | Numbers |
|---|---|
| Meta-analysis: **839 assessments of distributed practice across 317 experiments in 184 articles** | — |
| Massed-vs-spaced subset: **271 comparisons of retention accuracy plus 23 effect sizes** (most studies didn't report enough for an effect size, only raw accuracy) | — |
| At retention intervals under 1 minute, spaced presentation improved final-test performance by **9%** over massed, and the benefit held (no reversal) at every retention-interval band tested up to 30+ days | — |
| Only **12 of 271** comparisons showed no effect or a negative effect from spacing — "the spacing effect [is] quite robust" in the authors' own words | — |
| The paper's central finding is more nuanced than "space everything": the interstudy interval that maximizes final retention **increases** as the retention interval (how long until you need it) increases — there's an optimal gap, not "more spacing is always better" | — |
| **Caution: the commonly repeated claim that this paper shows spacing "nearly doubles recall" or gives "2-3x better retention" was searched for directly in the raw text and is not present anywhere in the paper.** It is a summariser confection and must not be stated. | — |

**Cognitive offloading / external memory — Sparrow, Liu & Wegner 2011, "Google Effects on
Memory," *Science* 333(6043), 776-778.** Tier A, full PDF text read directly.

| Fact | Numbers |
|---|---|
| Experiment 1 (N=69 completing the relevant comparison): after **hard** trivia questions, color-naming RT for computer-related words (M=712ms, SD=413) was slower than general words (M=591ms, SD=204), t(68)=3.26, p<.003 — people are primed to think of computers when they hit a knowledge gap | — |
| Experiment 2 (small between-subjects cells, omnibus F(3,56), total N≈60): participants told their typed trivia statements would be **erased** recalled more (Erase M=0.31, SD=0.04; Erase+explicit-remember M=0.29, SD=0.07) than those told the statements would be **saved** (Save M=0.22, SD=0.07; Save+explicit-remember M=0.19, SD=0.09), omnibus F(3,56)=2.80, p<.05 | — |
| The effect of being told to explicitly try to remember was **not significant** — expecting future access to the information mattered more than being told to memorize it | — |
| **What this licenses, precisely:** in a single small lab study using trivia facts typed into a computer, believing a fact was externally saved reduced immediate free recall of that fact's *content*. **What it does not license:** any claim about long-term memory decline from habitual note-taking, about "PARA makes you dumber," or about real-world knowledge work (the task was memorizing decontextualized trivia sentences, not retrieving your own project notes) | — |

**Digital hoarding — Neave, Briggs, McKellar & Sillence 2019, "Digital hoarding behaviours:
measurement and evaluation," *Computers in Human Behavior* 96, 72-77.** Tier A, full PDF
text read directly (institutional repository mirror).

| Fact | Numbers |
|---|---|
| Study 1: N = 424 adults, principal component analysis of a new Digital Hoarding Questionnaire; two-factor structure ("difficulty deleting," 6 items, α=.905; "accumulating," 4 items, α=.824), factors correlated r=.736; two items dropped, yielding a final **10-item DHQ** | — |
| Study 2: a fresh sample of N = 203 (97 male, 105 female; ages 20-79) confirmed the 10-item DHQ's validity and reliability; **72.9%** of this sample (148/203) reported having "data protection responsibilities" at work | — |
| Digital hoarding scores correlated with workplace hoarding behaviour: difficulty-deleting and accumulating sub-scales each correlated r=.416 (p<.001) with the total number of digital files retained at work | — |
| Both studies found digital hoarding "common," with **emails the most commonly hoarded item type** | — |
| Precursor qualitative study, Sweeten, Sillence & Neave (2018), *Computers in Human Behavior* 85, 54-60: N=45 interviews identified themes shared with physical hoarding — over-accumulation, difficulty discarding, anxiety about digital possessions — but this was qualitative and thematic, not a quantified prevalence figure | — |

**Digital data preservation (qualitative, not hoarding-scale) — Vitale, Janzen & McGrenere
2018, CHI '18, "Hoarding and Minimalism: Tendencies in Digital Data Preservation."** Tier A,
full PDF text read directly.

| Fact | Numbers |
|---|---|
| N = 23 semi-structured interviews, diverse backgrounds; iterative qualitative analysis (not a scale, no statistics) | — |
| Found a **spectrum** from "hoarding" (accumulating data of "little value") to "minimalism" (keeping as little as possible, regular cleaning) — a continuum, not a binary, and explicitly not framed as pathological the way the Neave/Sweeten hoarding-scale work is | — |

### Note re-access rates — what is and is not known

No peer-reviewed, methodologically described study of how often people return to their own
saved notes was located in this pass. The one number that surfaces repeatedly in
search results (an "18-61% reuse rate across 9 apps") **traces to a single-author Medium
blog post testing personal workflows on the author's own projects — not a study with
disclosed participants or method.** It is excluded from the evidence table and must not be
cited as research. **If the course needs a number here, it must be labelled as the personal
observation of one blogger, not research, or omitted.**

---

## PARA and organising, critically — the PIM literature

**Folders vs. search — Bergman, Beyth-Marom, Nachmias, Gradovitch & Whittaker (2008),
"Improved Search Engines and Navigation Preference in Personal Information Management,"
*ACM Transactions on Information Systems* 26(4), article 20.** Tier A-abstract (the
publisher's own indexed abstract, read via OpenAlex's stored record; the 24-page full PDF
itself sat behind ACM's paywall and was not reached).

| Fact | Numbers |
|---|---|
| Two studies: (a) a longitudinal comparison of Google Desktop vs. Windows XP Search Companion users, (b) a large-scale comparison of Mac Spotlight vs. Sherlock users — both self-report questionnaires, not logged behaviour | — |
| Across both: users estimated they used **navigation (folder-browsing) for 56-68% of file-retrieval events**, and **search for only 4-15%** | — |
| Improving the search engine's quality had a "limited and inconsistent" effect on how often people actually searched | — |
| Search was used "mainly as a last resort when users could not remember file location" | — |
| No evidence that better search engines made people rely less on folder hierarchies | — |
| **Correction of a summariser fabrication:** a WebSearch result during this research asserted "345 long-term users, 85,000 refinding actions, 86% navigation" for this literature. That figure is **not in this paper's abstract or any reached source** and must not be used; the real, sourced figures are 56-68% / 4-15% above. |

**Folders vs. tags — Bergman et al. (2008), "Better to organize personal information by
folders or by tags? The devil is in the details," *ASIS&T Proceedings* 45(1).** Tier
A-abstract (OpenAlex indexed abstract).

| Fact | Finding |
|---|---|
| Participants used both folders and tags on comparable information sets over time | "Each model has its strengths and weaknesses" for keeping, organizing and re-finding — **no clean winner is reported.** The paper's own framing rejects a simple "tags beat folders" or "folders beat tags" claim. |

**Tag proliferation specifically hurting refinding:** a targeted search (tag proliferation +
over-categorization + refinding) surfaced related PIM papers on tagging *inconsistency* and
tag *attributes* (commonness, frequency, position affecting browsing), but **no study was
located that quantifies a proliferation threshold or measures over-tagging's harm to
refinding as its own effect.** This must be stated as **UNVERIFIED — do not state a number**
if the course wants to make this point; the closest honest claim is "tagging systems show
inconsistency problems in PIM studies," not "too many tags measurably slows you down by X%."

Name-check only, one line each, not read past the abstract: Bergman & Whittaker's 2016 MIT
Press book *The Science of Managing Our Digital Stuff* synthesizes this line of research and
proposes a "user-subjective" PIM approach; William Jones's *Keeping Found Things Found* and
Jaime Teevan's web-refinding work are the other names most cited in this literature (Tier C,
name-check only — not independently read in this pass).

---

## Facts useful for the retrieval bench (session 4)

**No published figures on typical personal-note-collection size, orphan-note rate, link
density, or "percent of a personal wiki never revisited" were located.** This was searched
for directly (Obsidian vault statistics + orphan notes + academic study) and the search
returned only *tooling* (community plugins that let a single user compute their own vault's
stats) — never an aggregated study across users. **This must be stated plainly on the
bench's page: the corpus is a constructed teaching corpus, not a sampled real one, and any
number the bench reports (orphan count, reachability, hit rate) describes only the
constructed corpus, not "how real vaults look."**

---

## What is contested

- **Whether PARA's "organize by actionability" is actually easier to maintain than
  topic-based filing.** Forte asserts this as the system's core selling point in his own
  words ("if your organizational system is as complex as your life... it will end up
  robbing you of the time and energy"), but this is asserted, not measured — no controlled
  comparison of actionability-based vs. topic-based filing on real users' maintenance
  behaviour was found.
- **Whether "keep only what resonates" (Forte's capture criterion) is a defensible filter or
  a licence for the digital hoarding this course's own session 1 evidence describes.**
  Forte's own criterion is explicitly intuitive/non-analytical; the digital-hoarding
  literature (Neave et al. 2019, Sweeten et al. 2018) describes "difficulty discarding" as a
  measured trait correlated with over-accumulation. The course should surface this tension
  rather than resolve it for the learner.
- **Folders vs. tags** — genuinely unresolved in the PIM literature itself (Bergman et al.
  2008 above), not merely under-researched.

---

## Claims deliberately NOT stated (UNVERIFIED)

- Any specific percentage of notes that are "never revisited" (traces to a single
  unverifiable blog post, not research — see above).
- Any quantified harm from tag proliferation specifically (the PIM literature covers tagging
  inconsistency broadly, not a proliferation threshold).
- Any claim that PARA, CODE, or "second brain" as a packaged system has been shown in a
  controlled study to improve retrieval, output, or learning (searched for directly; none
  found — the absence is the finding, stated above).
- The exact number of slips in Luhmann's Zettelkasten (commonly given as either ~70,000 or
  ~90,000 across secondary sources; not independently verified in this pass, and out of
  scope for this course regardless — owned by `learn-obsidian-with-phoebe`).
- Any claim that Sparrow et al. 2011 shows note-taking or PARA-style capture "makes you
  forget things you'd otherwise remember" in real-world knowledge work — the study used
  decontextualized trivia sentences typed into a computer under lab conditions, not a
  learner's own project notes.
- Any single overall effect-size number for Cepeda et al. 2006 (the paper reports raw
  accuracy differences and a 271-comparison/23-effect-size split, not one pooled d/g for the
  whole meta-analysis, and the widely repeated "d=0.60" / "nearly doubles recall" figures
  were searched for in the raw text and are not there).

---

## Fetched sources appendix

| URL | Gave |
|---|---|
| fortelabs.com/blog/para/ (raw HTML) | verbatim PARA category definitions, "organize by actionability," publish/modified dates |
| fortelabs.com/blog/basboverview/ (raw HTML) | verbatim CODE step definitions, "keep only what resonates," Second Brain definition |
| fortelabs.com/blog/progressive-summarization-a-practical-technique-for-designing-discoverable-notes/ (raw HTML) | Layer 0-4 definitions verbatim, tagging-first vs. notebook-first vs. note-first argument |
| fortelabs.com/blog/9-biggest-myths-and-misconceptions-about-basb/ (raw HTML) | Myth #1 and #2 verbatim, the "Second Brain is distributed, not a single app" correction |
| fortelabs.com/blog/book (raw HTML) | confirmed ISBN 9781982167387 in page source |
| colinallen.dnsalias.org/Readings/2006_Roediger_Karpicke_PsychSci.pdf | full Roediger & Karpicke 2006 text, both experiments, all numbers above |
| courseware.epfl.ch .../Rowland2014-meta-analysis.pdf | full Rowland 2014 meta-analysis text, overall g=0.50 and moderator table |
| augmentingcognition.com/assets/Cepeda2006.pdf | full Cepeda et al. 2006 text; confirmed "doubles"/"2-3x" claims are absent from the raw text |
| dtg.sites.fas.harvard.edu/DANWEGNER/pub/Sparrow et al. 2011.pdf | full Sparrow, Liu & Wegner 2011 text, all three experiments' numbers |
| researchportal.northumbria.ac.uk .../Neave.pdf | full Neave et al. 2019 digital-hoarding text, both studies' samples and stats |
| cs.ubc.ca/labs/edapt/papers/vitale2018.pdf | full Vitale, Janzen & McGrenere 2018 text, N=23, spectrum framing |
| api.openalex.org indexed abstracts | Bergman et al. 2008 navigation-vs-search abstract (56-68%/4-15%), Bergman et al. 2008 folders-vs-tags abstract, Cepeda et al. 2006 abstract, Sweeten et al. 2018 title/venue confirmation |
| learninglab.psych.purdue.edu/downloads/2007/2007_Karpicke_Roediger_JML.pdf | a related but distinct Karpicke & Roediger 2007 word-list study (not used for headline numbers; correctly distinguished from the 2006 prose-passage paper) |

## Unfetchable on this pass

- simonandschuster.com book page (403 to automated fetch) — publisher/date/ISBN triangulated
  via AbeBooks/Amazon/NetGalley listings instead (Tier B).
- abebooks.com (returned empty 202, likely a bot-check interstitial).
- people.vcu.edu/~mamcdani/Publications/Bertsch et al. 2007.pdf (DNS resolution failed
  repeatedly) — Bertsch et al. 2007 generation-effect meta-analysis numbers (445 effect
  sizes/86 studies, d≈0.40) therefore graded Tier B via a search-engine quote of the paper,
  not independently read.
- researchgate.net (403 on every attempt — Slamecka & Graf 1978 primary, Bergman & Whittaker
  2016 book chapter, Cepeda et al. 2006 alternate mirror).
- apps.dtic.mil (403 on the Slamecka & Graf 1978 DTIC mirror).
- e-space.mmu.ac.uk PIM review article (202 empty / redirect loop) — would have been useful
  for tag-proliferation specifics; not reached, hence that claim stays UNVERIFIED.
- Medium (b2bsalesguru.medium.com, "I Tested 9 Note-Taking Apps") — 403, but irrelevant
  regardless since it is not a study (see note re-access section above).


---

## The bench (`assets/pkm-live.js`)

One constructed collection of 48 notes, filed five ways, with 16 questions asked eight
months later and two entry points the person actually opens each week. Every number is
computed: a real breadth-first traversal over real links, a real folder walk, and a real
keyword match against each note's own title and tags.

### The model, and why each rule is what it is

| Rule | Value | Why |
|---|---|---|
| Navigation horizon | 2 hops | Nobody clicks further than that to find a note they half-remember |
| Scannable folder | 12 notes | Past about a dozen you are reading a list, not looking at a place. A 48-note folder is a haystack, and the bench refuses to call reaching it "finding" |
| Useful tag | points at 8 notes or fewer | A tag on twenty notes returns twenty notes, which is a list, not an answer |
| Found by looking | reached in 2 hops from an entry point | Bergman et al. found people self-report navigating for 56-68% of retrievals and searching for 4-15%; navigation is the default path, so it is the one the bench scores first |
| Found by searching | a query word matches the note's own title, or a narrow tag | A note titled "Notes" is not findable by search, whatever is inside it |
| Lost | neither | The only number in the bench that matters |

### Verified ladder

Derived headlessly (Playwright) on 2026-09-20 via `window.PKM_LIVE`, before any page quoted
a number.

| Filing | Found by looking | By searching | **Lost** | Reachable | Orphans | Links | Biggest folder | Tag decisions |
|---|---|---|---|---|---|---|---|---|
| One big folder | **0** / 16 | 12 | **4** | 4% | 46 | 0 | 48 | 8 |
| Sorted into topic folders | 3 | 9 | **4** | 23% | 37 | 0 | 9 | 8 |
| PARA, one home each | 9 | 5 | 2 | 38% | 30 | 0 | 12 | 8 |
| PARA, and project notes link out | **14** | 1 | 1 | 73% | 9 | 37 | 12 | 8 |
| **ANTI** Tag everything | 14 | 1 | 1 | 73% | 9 | 37 | 12 | **192** |

Four rows carry the course's hardest lessons:

- **One big folder finds nothing by looking.** Every note recovered is recovered by search,
  and the four questions search cannot answer are simply gone.
- **Sorting into topic folders fixed tidiness and not retrieval.** Lost stays at 4. It is the
  step that feels like progress and moves the number that does not matter.
- **Links, not filing, are what move it.** PARA alone gets 9 of 16 by looking; adding the
  links a person would actually make gets 14, and reachability goes 38% to 73%.
- **The anti-preset spends 192 filing decisions to buy zero additional answers.** Identical
  14 / 1 / 1. The tag vocabulary grows from 7 to 16 and the narrowest tag now points at 12
  notes. This is **not** a claim that tagging harms retrieval - the PIM literature does not
  support a quantified harm (see UNVERIFIED above) - it is a measurement of what this
  organisation costs and returns in this corpus.

**The residue.** One question is lost in all five filings: *"the competitor thing somebody
sent me."* Its note is titled "Interesting" and nothing links to it. A note with a vague
title and no inbound link is unrecoverable by any filing system, which is the course's
argument in a single row.

### Honest limits

- **The corpus is constructed.** 48 notes written for this course to be realistic, not
  sampled from anyone's collection. No published figures on real vault size, orphan rate or
  link density were found (see above), so every number here describes this corpus only and
  the widget says so.
- **The thresholds are judgement.** 12 notes for a scannable folder, 8 for a useful tag, 2
  hops for navigation. They are stated on this page and in the source so they can be argued
  with, and the verdict line is badged "heuristic".
- **Two entry points** models someone with two live projects. A person with eight would
  reach more of their collection and maintain more of it.
- **It measures retrieval, not value.** A collection can score well and be full of notes
  that were never worth keeping.

---

## Design system

| Token | Value | Role |
|---|---|---|
| `--indigo` | `#5C4433` | Walnut accent, page chrome |
| `--indigo-deep` | `#3E2D21` | Headings |
| `--indigo-mid` | `#7A5C45` | Agenda band 2 (white text, 6.10:1) |
| `--indigo-soft` | `#D9C9B8` | Agenda band 4 (ink text, 9.76:1) |
| `--amber` / `--jade` | `#0F766E` | Jade flagship: measured badges, agenda band 3 (white text, 5.47:1) |
| `--ink` | `#2A211B` | Body text (15.13:1 on paper) |
| `--paper` | `#FCFAF7` | Surface |

Every colour recomputed from the `learn-sketchnoting` donor on scaffold day and contrast
checked before the first page. Body line-height 1.85. Attribution "by Phoebe Fu". Hyphens
only. `?v=` bumped on every css/js change.
