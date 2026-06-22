import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pěstovat bylinky a zeleninu na balkoně bez zahrady",
  description: "Truhlíky, samozavlažovací nádoby, vhodné odrůdy a péče – jak si na balkoně vypěstovat vlastní bylinky a zeleninu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/bylinky-a-zelenina-na-balkone" },
  openGraph: { title: "Jak pěstovat bylinky a zeleninu na balkoně bez zahrady", description: "Truhlíky, samozavlažovací nádoby, vhodné odrůdy a péče na balkoně.", url: "https://www.domovniguru.cz/blog/bylinky-a-zelenina-na-balkone", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C4%9Bstovat%20bylinky%20a%20zeleninu%20na%20balkon%C4%9B%20bez%20zahrady&cat=blog", width: 1200, height: 630, alt: "Jak pěstovat bylinky a zeleninu na balkoně bez zahrady" }] },
  twitter: { card: "summary_large_image", title: "Jak pěstovat bylinky a zeleninu na balkoně bez zahrady", description: "Truhlíky, samozavlažovací nádoby, vhodné odrůdy a péče na balkoně." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/bylinky-a-zelenina-na-balkone#article", "headline": "Jak pěstovat bylinky a zeleninu na balkoně bez zahrady", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["bylinky na balkoně", "zelenina na balkoně", "pěstování v truhlících", "samozavlažovací truhlík", "balkonová zahrada"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Bylinky a zelenina na balkoně", "item": "https://www.domovniguru.cz/blog/bylinky-a-zelenina-na-balkone" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaké bylinky zvládnou i stínový balkon?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlépe snáší stín máta, meduňka a petržel – vystačí si se 3–4 hodinami slunce denně. Bazalka, rozmarýn a tymián potřebují alespoň 5–6 hodin přímého slunce, jinak budou slabé a náchylné k chorobám." } }, { "@type": "Question", "name": "Jakou zeleninu lze pěstovat v truhlíku na balkoně?", "acceptedAnswer": { "@type": "Answer", "text": "Nejspolehlivější jsou cherry rajčata (keříčkové odrůdy), papriky, listový salát, ředkvičky a špenát. Důležitá je hloubka nádoby – u rajčat a paprik minimálně 25–30 cm substrátu." } }, { "@type": "Question", "name": "Jak často zalévat bylinky a zeleninu v truhlíku?", "acceptedAnswer": { "@type": "Answer", "text": "V létě obvykle jednou denně, za horkých dní i dvakrát – truhlík vysychá mnohem rychleji než záhon, protože má malý objem substrátu a je vystavený slunci a větru ze všech stran." } }, { "@type": "Question", "name": "Vydrží bazalka a rozmarýn na balkoně přes zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Bazalka mráz nepřežije a je nutné ji každý rok pěstovat znovu ze semínek nebo sazenic. Rozmarýn, tymián a šalvěj jsou trvalky, ale v truhlíku jim mráz více ublíží než v zemi – truhlík je vhodné přesunout k fasádě nebo zabalit netkanou textilií." } }, { "@type": "Question", "name": "Lze v jedné truhlici kombinovat bylinky a zeleninu?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, pokud mají podobné nároky na vodu a slunce. Osvědčená je kombinace rajčete s bazalkou, nebo papriky s petrželí. Naopak mátu je lepší pěstovat samostatně, protože svými výběžky rychle zabere celý prostor." } }] }] };

const RELATED = [
  { title: "Jak si vybudovat bylinkovou zahrádku", href: "/blog/bylinkova-zahradka", read: "6 min" },
  { title: "Jak pěstovat rajčata", href: "/blog/jak-pestovat-rajcata", read: "6 min" },
  { title: "Jak pěstovat papriky", href: "/blog/jak-pestovat-papriky", read: "6 min" },
  { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", read: "5 min" },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog">Blog</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Bylinky a zelenina na balkoně</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat bylinky a zeleninu na balkoně bez zahrady</h1>
              <p className="article-lead">Nemáš zahradu, ale chtěl/a bys čerstvou bazalku na pizzu nebo rajčata k snídani? Balkon na to bohatě stačí. Stačí vybrat správné místo, nádoby a odrůdy – a péče už je jen detail.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#misto">Výběr vhodného místa na balkoně</a></li>
                <li><a href="#nadoby">Nádoby a substrát pro balkon</a></li>
                <li><a href="#bylinky">Vhodné bylinky pro balkon</a></li>
                <li><a href="#zelenina">Drobná zelenina do truhlíků</a></li>
                <li><a href="#zalevani">Zalévání a hnojení v truhlících</a></li>
                <li><a href="#kombinace">Kombinace rostlin a přezimování</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="misto">
              <h2>Výběr vhodného místa na balkoně</h2>
              <p>Než koupíš první truhlík, projdi si balkon a všímej si, kolik slunce a jaký vítr na jednotlivá místa dopadá. Tohle rozhodne o tom, co tam bude prospívat a co bude jen chřadnout.</p>
              <h3>Orientace balkonu</h3>
              <ul>
                <li><strong>Jih a jihozápad</strong> – nejvíc slunce, ideální pro rajčata, papriky, bazalku, rozmarýn a tymián. Pozor na přehřívání substrátu v létě.</li>
                <li><strong>Východ</strong> – ranní slunce, mírnější teplo. Vyhovuje petrželi, salátu, ředkvičkám i většině bylinek.</li>
                <li><strong>Severní balkon</strong> – nejméně slunce, ale ne nepoužitelné. Zvládneš tu mátu, meduňku, pažitku, petrželku a listovou zeleninu, která vyhledává stín.</li>
              </ul>
              <h3>Vítr a výška budovy</h3>
              <p>Vyšší patra mají často silnější vítr, který rostliny vysušuje a může polámat stonky rajčat nebo paprik. Pomůže umístit truhlíky blíž ke zdi nebo k zábradlí, případně použít nižší a kompaktnější odrůdy. U závěsných kapsáčů a truhlíků na zábradlí vždy zkontroluj, že jsou pořádně ukotvené – plný truhlík s mokrou hlínou váží i přes 10 kg.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud má balkon sklo nebo zastřešení, počítej s tím, že se prostor v létě výrazně přehřívá. Rostlinám pak hrozí spíš úžeh než nedostatek slunce.</div>
            </section>

            <section id="nadoby">
              <h2>Nádoby a substrát pro balkonové pěstování</h2>
              <p>Na balkoně máš na rozdíl od záhonu k dispozici jen omezený objem zeminy, takže volba nádoby výrazně ovlivní, jak rostlinám bude. Obecně platí: čím větší nádoba, tím stabilnější vlhkost a méně práce se zaléváním.</p>
              <h3>Truhlíky</h3>
              <p>Klasické balkonové truhlíky (60–80 cm) jsou univerzální základ. Pro bylinky stačí hloubka kolem 15–20 cm, pro zeleninu jako rajčata, papriky nebo ředkvičky je lepší sáhnout po hlubších nádobách, ideálně 25–30 cm. Vždy zkontroluj, že má truhlík odtokové otvory – bez nich se substrát rychle zamokří a kořeny začnou hnít.</p>
              <h3>Samozavlažovací nádoby</h3>
              <p>Pro balkon jsou téměř ideální – mají spodní zásobník vody, ze kterého si rostlina bere podle potřeby, a vydrží bez doplňování i 3–5 dní. Hodí se zejména pro rajčata a papriky, které na výkyvy ve vlhkosti reagují praskáním plodů nebo opadem květů.</p>
              <h3>Závěsné kapsáče a vertikální systémy</h3>
              <p>Pokud je balkon malý, nahoru se dá vypěstovat víc, než se zdá. Závěsné kapsáče na zábradlí nebo zeď jsou ideální pro jahody, salát, petrželku nebo pažitku – mají ale malý objem substrátu a vysychají rychleji než truhlíky.</p>
              <h3>Substrát</h3>
              <p>Do truhlíků nepatří zahradní hlína natěžko – v nádobě se rychle zhutní a zadržuje příliš vody. Lepší je kvalitní zahradnický substrát s příměsí kompostu a perlitu nebo kokosových vláken, který je vzdušný a dlouho si udrží vlhkost. Kolik substrátu na konkrétní počet a velikost truhlíků potřebuješ, snadno zjistíš v <Link href="/kalkulacky/kolik-hliny" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce hlíny a substrátu</Link>.</p>
            </section>

            <section id="bylinky">
              <h2>Vhodné bylinky pro balkon</h2>
              <p>Pokud chceš vědět víc o pěstování bylinek obecně, podívej se na náš článek o <Link href="/blog/bylinkova-zahradka" style={{ color: "#2a6496", textDecoration: "underline" }}>bylinkovou zahrádku</Link>. Tady se zaměříme na to, co se nejlépe hodí přímo do truhlíku na balkoně.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Bylinka</th><th>Nároky na slunce</th><th>Nároky na vodu</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Bazalka</td><td>Hodně slunce (5–6 h)</td><td>Vyšší, ne přemokřit</td><td>Citlivá na chlad, jednoletka</td></tr>
                    <tr><td>Petržel</td><td>Slunce i polostín</td><td>Pravidelná, ne přemokřit</td><td>Zvládne i severní balkon</td></tr>
                    <tr><td>Tymián</td><td>Hodně slunce</td><td>Nízká, snáší sucho</td><td>Nesnáší těžký, mokrý substrát</td></tr>
                    <tr><td>Máta</td><td>Slunce i polostín</td><td>Vyšší, nesmí vyschnout</td><td>Pěstuj samostatně – rychle se šíří</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Bazalka a tymián mají protichůdné nároky na vodu – bazalka chce mít substrát stále vlhký, tymíř naopak vyžaduje proschnutí mezi zálivkami. Proto je lepší je nesázet do stejné nádoby. Naopak petržel snese kolísání lépe a dá se kombinovat téměř s čímkoli.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Mátu nikdy nesaď přímo do truhlíku se zeminou bez bariéry – její výběžky během jedné sezóny zaberou celý prostor a vytlačí ostatní rostliny.</div>
            </section>

            <section id="zelenina">
              <h2>Vhodná drobná zelenina do truhlíků</h2>
              <p>Na balkon se nehodí každá zelenina, ale několik druhů v truhlíku funguje překvapivě dobře a dají se z nich během sezóny sklízet pěkné výnosy.</p>
              <ul>
                <li><strong>Cherry rajčata</strong> – vybírej keříčkové (balkonové) odrůdy, které nepotřebují vysoké opěry. Hlubší nádoba (alespoň 25–30 cm) a samozavlažovací zásobník výrazně zlepší výsledek. Více se dozvíš v článku <Link href="/blog/jak-pestovat-rajcata" style={{ color: "#2a6496", textDecoration: "underline" }}>jak pěstovat rajčata</Link>.</li>
                <li><strong>Papriky</strong> – potřebují hodně slunce a teplo, hodí se na jižní nebo jihozápadní balkon. Podrobnosti najdeš v článku <Link href="/blog/jak-pestovat-papriky" style={{ color: "#2a6496", textDecoration: "underline" }}>jak pěstovat papriky</Link>.</li>
                <li><strong>Listový salát</strong> – rychlokvaška, kterou lze sklízet postupně list po listu. Vyhovuje mu i polostín, takže je ideální do méně slunných míst.</li>
                <li><strong>Ředkvičky</strong> – jedna z nejrychlejších plodin (sklizeň za 4–6 týdnů), vystačí si i s nízkou truhlicí (10–15 cm substrátu).</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro malé balkony jsou rajčata a papriky náročnější na prostor i péči. Pokud chceš jistý výsledek s minimem práce, začni se salátem a ředkvičkami – během prvního měsíce uvidíš výsledky a získáš jistotu, jak rostliny na balkoně reagují.</div>
            </section>

            <section id="zalevani">
              <h2>Zalévání a hnojení v truhlících</h2>
              <p>Hlavní rozdíl oproti záhonu je rychlost vysychání. Truhlík má malý objem substrátu, je obklopený vzduchem ze všech stran a na slunném balkoně se navíc zahřívá i samotná nádoba. Výsledek je, že substrát v truhlíku může vyschnout za jediný horký den, zatímco záhon vydrží klidně několik dní.</p>
              <h3>Jak zalévat</h3>
              <ul>
                <li>V létě zalévej zpravidla jednou denně, za extrémních veder i dvakrát (ráno a večer).</li>
                <li>Zalévej vždy k zemi, ne na listy – mokré listy na slunci snáz spálíš nebo podpoříš houbové choroby.</li>
                <li>Před zaléváním zkontroluj prst v zemině do hloubky 2–3 cm – pokud je tam ještě vlhko, zálivku vynech.</li>
                <li>Samozavlažovací nádoby tuto starost výrazně zmenší, ale i u nich je potřeba pravidelně doplňovat zásobník.</li>
              </ul>
              <p>Detailní postup a tipy na úsporu vody najdeš v článku <Link href="/blog/jak-spravne-zalevat" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně zalévat</Link>.</p>
              <h3>Hnojení</h3>
              <p>Protože je objem substrátu malý a živiny se rychle vyplavují při častém zalévání, je potřeba hnojit pravidelněji než na zahradě. U zeleniny (rajčata, papriky) je vhodné přihnojovat tekutým hnojivem na rajčata jednou za 1–2 týdny v období růstu a tvorby plodů. Bylinky obecně potřebují méně hnojiva – přehnojená bazalka nebo tymián ztrácí na intenzitě vůně a chuti.</p>
            </section>

            <section id="kombinace">
              <h2>Kombinace rostlin v jedné truhlici a přezimování</h2>
              <h3>Společenstevní výsadba</h3>
              <p>Pokud máš na balkoně omezený prostor, vyplatí se kombinovat rostliny, které si vzájemně prospívají nebo si alespoň neškodí. Mezi osvědčené dvojice patří:</p>
              <ul>
                <li><strong>Rajče + bazalka</strong> – klasická kombinace, oba mají rády slunce a podobné zalévání, bazalka navíc údajně odpuzuje některé škůdce.</li>
                <li><strong>Paprika + petržel</strong> – petržel jako nižší rostlina dobře vyplní prostor kolem výškové papriky a nevadí jí mírný stín od ní.</li>
                <li><strong>Salát + ředkvičky</strong> – obě rychle rostou, ředkvičky se sklidí dřív, než salát potřebuje víc místa.</li>
              </ul>
              <p>Nevhodné je kombinovat rostliny s velmi odlišnými nároky na vodu (například tymián a mátu) nebo silně rozrůstavé druhy (máta, meduňka) s čímkoli – ty je lepší pěstovat samostatně, případně v menší nádobě ponořené do většího truhlíku, která omezí jejich kořeny.</p>
              <h3>Přezimování trvalých bylinek</h3>
              <p>Bazalka je jednoletka a mráz nepřežije – na konci sezóny ji sklidíš celou a napřesrok zaseješ znovu. Trvalky jako rozmarýn, tymián, šalvěj nebo oregano ale mohou na balkoně přezimovat, i když v truhlíku jsou na mráz citlivější než v zemi, protože kořeny nejsou chráněné okolní zeminou.</p>
              <ul>
                <li>Před prvními mrazy přesuň truhlík blíž ke zdi domu, ideálně do míst, kde je o trochu tepleji.</li>
                <li>Truhlík oviň netkanou textilií nebo jutou, případně ho zabal i ze spodu, kde dochází k největším ztrátám tepla.</li>
                <li>Přes zimu omez zálivku na minimum – jen tolik, aby substrát úplně nevyschl.</li>
                <li>Pokud máš zaskleněný balkon nebo lodžii, je to pro přezimování ideální místo.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Na jaře po zimě trvalky prořízni a odstraň odumřelé části – brzy poté vyraší nový, hustší porost.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaké bylinky zvládnou i stínový balkon?", a: "Nejlépe snáší stín máta, meduňka a petržel – vystačí si se 3–4 hodinami slunce denně. Bazalka, rozmarýn a tymián potřebují alespoň 5–6 hodin přímého slunce, jinak budou slabé a náchylné k chorobám." },
                  { q: "Jakou zeleninu lze pěstovat v truhlíku na balkoně?", a: "Nejspolehlivější jsou cherry rajčata (keříčkové odrůdy), papriky, listový salát, ředkvičky a špenát. Důležitá je hloubka nádoby – u rajčat a paprik minimálně 25–30 cm substrátu." },
                  { q: "Jak často zalévat bylinky a zeleninu v truhlíku?", a: "V létě obvykle jednou denně, za horkých dní i dvakrát – truhlík vysychá mnohem rychleji než záhon, protože má malý objem substrátu a je vystavený slunci a větru ze všech stran." },
                  { q: "Vydrží bazalka a rozmarýn na balkoně přes zimu?", a: "Bazalka mráz nepřežije a je nutné ji každý rok pěstovat znovu ze semínek nebo sazenic. Rozmarýn, tymián a šalvěj jsou trvalky, ale v truhlíku jim mráz více ublíží než v zemi – truhlík je vhodné přesunout k fasádě nebo zabalit netkanou textilií." },
                  { q: "Lze v jedné truhlici kombinovat bylinky a zeleninu?", a: "Ano, pokud mají podobné nároky na vodu a slunce. Osvědčená je kombinace rajčete s bazalkou, nebo papriky s petrželí. Naopak mátu je lepší pěstovat samostatně, protože svými výběžky rychle zabere celý prostor." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
                    <div className="card-h" style={{ fontSize: 15 }}>{r.title}</div>
                    <div className="card-arrow">Číst →</div>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav><ul className="sidebar-toc">
                <li><a href="#misto">Výběr místa na balkoně</a></li>
                <li><a href="#nadoby">Nádoby a substrát</a></li>
                <li><a href="#bylinky">Vhodné bylinky</a></li>
                <li><a href="#zelenina">Drobná zelenina</a></li>
                <li><a href="#zalevani">Zalévání a hnojení</a></li>
                <li><a href="#kombinace">Kombinace a přezimování</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; }
        .article-body h3 { font-family: var(--font-sans); font-size: 16px; font-weight: 600; margin-top: 24px; margin-bottom: 10px; color: var(--text); }
        .article-body p { font-size: 16px; line-height: 1.75; color: #2a2a28; font-weight: 300; margin-bottom: 14px; }
        .article-body ul, .article-body ol { padding-left: 22px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
        .article-body li { font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300; }
        .article-body strong { font-weight: 600; color: var(--text); }
        .article-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #78716c; margin: 20px 0; }
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table { width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.5; }
        .article-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); background: var(--surface); }
        .article-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; color: #2a2a28; font-weight: 300; }
        .article-table tr:last-child td { border-bottom: none; }
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; }
        .faq-q { font-size: 15px; font-weight: 600; padding: 16px 20px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: background 120ms; }
        .faq-q:hover { background: var(--surface); }
        .faq-q::after { content: "+"; font-size: 18px; font-weight: 300; flex-shrink: 0; margin-left: 12px; }
        details[open] .faq-q::after { content: "−"; }
        .faq-a { font-size: 14px; line-height: 1.65; color: var(--muted); font-weight: 300; padding: 0 20px 16px; }
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .article-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }
        .sidebar-widget { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .sidebar-widget-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .sidebar-toc { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sidebar-toc li a { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; line-height: 1.4; display: block; }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
