---
title: "HUGO PUBLIC & CONTENT GIT"
date: 2019-11-05T11:06:55+01:00
---

<h3>Hvad er poiten?</h3>
Poiten er altså at vi bruger GITHUB pages for at folk skal kunne se vores hjemmeside (uden vi betaler), hurtigt, nemt, og fra overalt.

<h3>Hvordan fungere det?</h3>
Vi vil gerne have vores HUGO site op på github, mest for os selv sådan vi kan få en fuld kopi af vores kildekode hvad end der sker - MEN, vi kunne også tænke os en live version af siden, en statisk version af samme hjemmeside. Til det kan vi bruge GITHUB pages, gratis hosting af html filer fra Github til et domaine. Siden Hele vores HUGO server / side er en generator og en server i sig selv, kan vi ikke blot uploade den til GITHUB pages (eftersom den kun fatter html og css (og ikke kan køre en server)).

```mermaid
graph TD
A[INPUT ARR] --> B(Round)
B[LOOP START] --> C{Decision}
C[RUN UNTILL ARRAY LENGHT] --> D[Result 1]
D[MAKE FIRST CHOICE COPY TEMP] --> E
E[ASS]
```

<h3>Kode</h3>

SE LIVE DEMO [HER](content/algorithms/P5-sorting/ "TRYK")
{{< highlight js >}}
{{< readFileRaw file="content/algorithms/P5-Sorting/sketch.js" >}}
{{< /highlight >}}
