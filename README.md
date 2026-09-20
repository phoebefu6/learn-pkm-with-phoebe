<!-- learn-with-phoebe hub banner -->
> ### 📚 Part of [**Learn with Phoebe**](https://phoebefu6.github.io/learn-with-phoebe/)
> The shelf of free, hands-on courses on AI, data, and the craft around them. **[Browse every course ↗](https://phoebefu6.github.io/learn-with-phoebe/)**
<!-- /learn-with-phoebe hub banner -->

# Learn PKM with Phoebe

Six 45-minute sessions on the loop that makes a note collection pay: capture, organize,
retrieve, review. Tool-agnostic, and honest about what the evidence does and does not support.

**Live site:** https://phoebefu6.github.io/learn-pkm-with-phoebe/

| # | Session | Signature thing |
|---|---|---|
| 1 | The collection problem | Why the pile stops paying, and the controlled study of PARA that does not exist |
| 2 | Capture that survives | A four-second keep rule, one inbox, and the title that decides findability |
| 3 | PARA, and one home per note | The four categories in the author's own words; organize by actionability |
| 4 | The retrieval bench | One collection, five filings, sixteen questions asked eight months later |
| 5 | Review that actually happens | Recall before you look; the gap that grows; a fifteen-minute weekly pass |
| 6 | A system you keep | The bad-week floor, the way back after a month, final scorecard |

The bench in session 4 (`assets/pkm-live.js`) takes one collection of 48 notes, files it five
ways, and asks it sixteen real questions. Every number is computed: a breadth-first traversal
over real links, a folder walk that refuses to call a 48-note folder "somewhere you look", and
a keyword match against each note's own title and tags. Each question lands in one of three
buckets - found by looking, found by searching, or gone.

What it finds: one big folder answers **zero of sixteen** by looking. Sorting into topic folders
triples reachability and leaves the lost count exactly where it was. Adding 37 links takes it to
**14 of 16** and 73% reachable. Tagging all 48 notes costs **192 filing decisions and buys zero
additional answers**. And one question stays lost in all five filings, because its note is
titled "Interesting" and nothing points at it.

The corpus is constructed and labelled as such: no published figures exist on real collection
size, orphan rate or link density, so the numbers describe this collection and nothing else.
What is real is the measurement.

Every fact, its verification tier, and the two summariser fabrications caught during research
are in `materials/official-course-map.md`.

Static HTML, CSS and JS. No build step. by Phoebe Fu.
