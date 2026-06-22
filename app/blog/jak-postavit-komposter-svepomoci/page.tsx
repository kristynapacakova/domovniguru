import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak postavit kompostér svépomocí – materiály a postup",
  description: "Návod na stavbu dřevěného kompostéru z palet nebo prken – vhodné rozměry, větrání, umístění na zahradě i odhad nákladů na materiál.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci" },
  openGraph: {
    title: "Jak postavit kompostér svépomocí – materiály a postup",
    description: "Návod na stavbu dřevěného kompostéru z palet nebo prken – vhodné rozměry, větrání, umístění na zahradě i odhad nákladů na materiál.",
    url: "https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20postavit%20kompost%C3%A9r%20sv%C3%A9pomoc%C3%AD%20%E2%80%93%20materi%C3%A1ly%20a%20postup&cat=blog", width: 1200, height: 630, alt: "Jak postavit kompostér svépomocí – materiály a postup" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak postavit kompostér svépomocí",
    description: "Stavba dřevěného kompostéru z palet nebo prken – rozměry, větrání, umístění a náklady.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci#article",
      "headline": "Jak postavit kompostér svépomocí – materiály a postup",
      "description": "Návod na stavbu dřevěného kompostéru z palet nebo prken – vhodné rozměry, větrání, umístění na zahradě i odhad nákladů na materiál.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci" },
      "inLanguage": "cs",
      "keywords": ["jak postavit kompostér", "kompostér z palet", "stavba kompostéru svépomocí", "dřevěný kompostér rozměry", "třídílný kompostér"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
        { "@type": "ListItem", "position": 4, "name": "Jak postavit kompostér svépomocí", "item": "https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jaké rozměry by měl mít dřevěný kompostér?", "acceptedAnswer": { "@type": "Answer", "text": "Pro běžnou zahradu se osvědčuje kompostér o rozměrech přibližně 100×100 cm a výšce 80–100 cm. Menší objem se hůř zahřívá a rozkládá pomaleji, větší než 1,5×1,5 m je zase těžké přehazovat." } },
        { "@type": "Question", "name": "Musí mít kompostér dno?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, dřevěný kompostér by měl stát přímo na zemi bez dna. Kontakt s půdou umožňuje přístup žížal a půdních mikroorganismů, které rozklad výrazně urychlují, a zároveň odtéká přebytečná voda." } },
        { "@type": "Question", "name": "Z jakých palet se dá kompostér postavit?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlepší jsou standardní europalety bez chemického značení MB (methylbromid), naopak palety s razítkem HT (heat treated) jsou bezpečné. Palety se spojí do tvaru krabice šrouby nebo úhelníky." } },
        { "@type": "Question", "name": "Jak velké mezery mezi prkny má kompostér mít?", "acceptedAnswer": { "@type": "Answer", "text": "Mezery mezi prkny by měly být přibližně 1–2 cm po celém obvodu. Zajistí dostatečné proudění vzduchu, které je nezbytné pro aerobní rozklad a zabraňuje zahnívání a zápachu." } },
        { "@type": "Question", "name": "Kde na zahradě má kompostér stát?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální je polostín, mírně vyvýšené a dobře odvodněné místo, ne příliš blízko domu ani sousedního plotu. Plné slunce kompost rychle vysušuje, hluboký stín naopak rozklad zpomaluje." } },
        { "@type": "Question", "name": "Vyplatí se třídílný kompostér oproti jednoduchému?", "acceptedAnswer": { "@type": "Answer", "text": "Pro domácnost s větší zahradou ano – umožňuje mít současně čerstvý odpad, zrající kompost a hotovou hlínu ve třech oddělených sekcích. Pro malou zahradu s menším objemem odpadu stačí jeden box." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci#howto",
      "name": "Jak postavit kompostér svépomocí",
      "description": "Návod na stavbu dřevěného kompostéru z palet nebo prken – vhodné rozměry, větrání, umístění na zahradě i odhad nákladů na materiál.",
      "step": [
        { "@type": "HowToStep", "name": "Výběr typu a materiálu", "text": "Rozhodni se mezi kompostérem z palet nebo z prken a obstarej dostatek nepoškozeného, ideálně neošetřeného dřeva." },
        { "@type": "HowToStep", "name": "Volba rozměrů a umístění", "text": "Naplánuj rozměry kolem 100×100 cm a vyber polostinné, odvodněné místo na zahradě s dostatkem odstupu od plotu a domu." },
        { "@type": "HowToStep", "name": "Stavba konstrukce a větrání", "text": "Sestav boční stěny s mezerami mezi prkny pro proudění vzduchu, kompostér postav bez dna přímo na zem." },
        { "@type": "HowToStep", "name": "Volba jednoduchého nebo třídílného systému", "text": "Zvol jeden box, nebo postav třídílný systém pro postupné zrání kompostu ve třech fázích." },
        { "@type": "HowToStep", "name": "Dokončení a ochrana dřeva", "text": "Ošetři viditelné dřevěné části přírodním olejem nebo voskem a přidej odnímatelnou přední stěnu pro snadné vybírání." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak kompostovat – kompletní návod", href: "/blog/jak-kompostovat", read: "6 min" },
  { title: "Zahradní plot ze dřeva – stavba a údržba", href: "/blog/zahradni-plot-ze-dreva", read: "6 min" },
  { title: "Zahradní nástroje a jejich péče", href: "/blog/zahradni-nastroje-pece", read: "5 min" },
  { title: "Jak navrhnout zahradu od základu", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
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
              <span>Jak postavit kompostér svépomocí</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak postavit kompostér svépomocí – materiály a postup</h1>
              <p className="article-lead">Kompostování na volné hromadě má svá omezení – pomalejší rozklad, neuspořádaný vzhled i přístup škůdců. Vlastnoručně postavený dřevěný kompostér z palet nebo prken vyřeší obě věci a postavíš ho během jednoho víkendu i s minimální zkušeností s dřevem.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci" title="Jak postavit kompostér svépomocí – materiály a postup" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc">Proč si postavit vlastní kompostér</a></li>
                <li><a href="#material">Výběr materiálu</a></li>
                <li><a href="#rozmery">Vhodné rozměry a tvar</a></li>
                <li><a href="#vetrani">Větrání a umístění na zahradě</a></li>
                <li><a href="#typy">Jednoduchý vs. třídílný systém</a></li>
                <li><a href="#naklady">Odhad nákladů</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="proc">
              <h2>Proč si postavit vlastní kompostér</h2>
              <p>Kompostování na volně navršené hromadě funguje, ale má své nevýhody – materiál se rozkládá nerovnoměrně, hromada vysychá po krajích a do zahrady se snadno dostávají hlodavci. Ohraničený dřevěný kompostér tyto problémy řeší a zároveň zlepšuje vzhled zahrady, protože organický odpad není volně rozházený.</p>
              <h3>Výhody oproti volné hromadě</h3>
              <p>Stěny kompostéru udržují vlhkost a teplo uvnitř, takže se rozklad urychlí. Konstrukce navíc umožňuje snadnější přehazování a provzdušňování obsahu, což je klíčové pro rychlý vznik kvalitního kompostu bez zápachu.</p>
              <h3>Co budeš potřebovat</h3>
              <p>Na stavbu základního kompostéru stačí ruční nebo akumulátorová vrtačka, pilka, metr, úhelník a sada vrutů. Pro paletový kompostér navíc oceníš pákové kleště na vytahování hřebíků, pokud palety rozebíráš.</p>
            </section>

            <section id="material">
              <h2>Výběr materiálu</h2>
              <p>Nejčastější volbou jsou dva přístupy – recyklované europalety, nebo nová prkna z neošetřeného dřeva.</p>
              <h3>Kompostér z palet</h3>
              <p>Europalety jsou levné, často dostupné zadarmo a mají už hotovou mřížovou strukturu vhodnou pro větrání. Pro stavbu kompostéru použij vždy palety s razítkem HT (heat treated, tepelně ošetřené), nikdy ne s označením MB, které značí ošetření methylbromidem a do kontaktu s organickým odpadem nepatří. Čtyři palety postavené do čtverce a spojené úhelníky tvoří základní konstrukci za pár desítek minut.</p>
              <h3>Kompostér z prken</h3>
              <p>Prkna dávají větší volnost v designu i rozměrech a vypadají uhlazeněji. Vhodné je tlakově impregnované smrkové nebo borovicové dřevo o tloušťce alespoň 20 mm, případně odolnější modřín, který vydrží venku bez ošetření déle. Prkna se připevňují na rohové sloupky o průřezu zhruba 7×7 cm zasazené do země nebo kotvené k podkladu.</p>
              <h3>Na co si dát pozor</h3>
              <p>Nikdy nepoužívej dřevo ošetřené starými nátěry s obsahem těžkých kovů ani lakované kusy nábytku – chemikálie se mohou vyplavovat do kompostu a následně do půdy, kam kompost rozhrneš.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud sháníš palety zdarma, ptej se ve stavebninách nebo zahradních centrech – po vyložení zboží se palety často jen hromadí a rádi se jich zbaví.</div>
            </section>

            <section id="rozmery">
              <h2>Vhodné rozměry a tvar</h2>
              <p>Velikost kompostéru přímo ovlivňuje, jak rychle a kvalitně se odpad rozloží.</p>
              <h3>Optimální velikost boxu</h3>
              <p>Pro běžnou domácí zahradu se osvědčil čtvercový půdorys o straně 100–120 cm a výška 80–100 cm. Menší objem se hůř zahřívá do teplot potřebných pro rychlý rozklad, zatímco výrazně větší box je nepraktický na přehazování obsahu lopatou nebo vidlemi.</p>
              <h3>Tvar a přístup</h3>
              <p>Přední stěnu řeš jako odnímatelnou nebo skládanou z volných prken zasunutých do svislých drážek – umožní to postupně přidávat odpad shora a zároveň snadno vybírat hotový kompost zespodu, aniž bys musel rozebírat celou konstrukci.</p>
              <h3>Bez dna, vždy na zemi</h3>
              <p>Kompostér nikdy nestaví na betonový nebo dlážděný podklad s uzavřeným dnem. Přímý styk se zemí umožňuje žížalám a půdním mikroorganismům vstup do hromady a zároveň odtok přebytečné vody do podloží.</p>
            </section>

            <section id="vetrani">
              <h2>Větrání a umístění na zahradě</h2>
              <p>Provzdušnění a správné umístění rozhodují o tom, jestli kompost příjemně voní hlínou, nebo nepříjemně zahnívá.</p>
              <h3>Mezery pro proudění vzduchu</h3>
              <p>Mezi jednotlivými prkny boční stěny nech mezery zhruba 1–2 cm po celém obvodu konstrukce. Vzduch proudící skrz tyto mezery zajišťuje aerobní rozklad – ten je rychlejší, nezapáchá a nepřitahuje mouchy, na rozdíl od uzavřené, nevětrané hromady.</p>
              <h3>Výběr stanoviště</h3>
              <p>Nejlepší je polostinné, mírně vyvýšené místo s dobrým odtokem srážkové vody. Plné slunce hromadu rychle vysušuje a vyžaduje častější zálivku, hluboký stín naopak rozklad zpomaluje, protože hromada se nedostatečně zahřívá.</p>
              <h3>Odstup od domu a plotu</h3>
              <p>Kompostér umísti s odstupem alespoň 1–2 metry od sousedního plotu, pokud to dovolují místní vyhlášky nebo dobré sousedské vztahy, a v rozumné vzdálenosti od oken a teras, aby případný zápach z nesprávně vedeného kompostu nerušil v obytné části zahrady.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud zahrada svah, postav kompostér na rovinatější část – na svahu odtéká voda nerovnoměrně a hromada na jedné straně rychle vysychá.</div>
            </section>

            <section id="typy">
              <h2>Jednoduchý vs. třídílný systém</h2>
              <p>Volba mezi jedním boxem a třídílným systémem závisí na velikosti zahrady a množství organického odpadu, který produkuješ.</p>
              <h3>Jednoduchý jednodílný kompostér</h3>
              <p>Pro malou zahradu nebo domácnost s menším množstvím odpadu plně stačí jeden box. Nevýhodou je, že čerstvý a již zralý kompost se míchají pohromadě, takže si nikdy nejsi úplně jistý, kdy je spodní vrstva hotová k použití.</p>
              <h3>Třídílný systém</h3>
              <p>Tři propojené sekce vedle sebe umožňují postupný cyklus – do první sekce přidáváš čerstvý odpad, druhá zraje a třetí obsahuje hotovou kompostovou hlínu připravenou k použití na záhonech. Tento systém je výrazně efektivnější u zahrad nad 500 m², kde vzniká odpadu víc.</p>
              <h3>Jak postavit třídílnou variantu</h3>
              <p>Postav tři stejně velké boxy vedle sebe se společnými sousedními stěnami, čímž ušetříš materiál i prostor. Každá sekce by měla mít vlastní odnímatelnou přední stěnu pro snadné přehazování obsahu z jedné sekce do druhé.</p>
            </section>

            <section id="naklady">
              <h2>Odhad nákladů</h2>
              <p>Náklady na stavbu se výrazně liší podle zvoleného materiálu a velikosti konstrukce.</p>
              <h3>Kompostér z palet</h3>
              <p>Pokud palety získáš zdarma nebo za symbolickou cenu, zaplatíš v podstatě jen za spojovací materiál – vruty, úhelníky a případně pant na přední stěnu. Celkové náklady se obvykle vejdou do 300–600 Kč.</p>
              <h3>Kompostér z nových prken</h3>
              <p>Nová impregnovaná prkna a sloupky pro jeden box o straně 100 cm vyjdou na přibližně 1500–2500 Kč v závislosti na tloušťce dřeva a regionu. Třídílný systém srovnatelné kvality se pohybuje kolem 3500–5500 Kč za materiál.</p>
              <h3>Doplňkové náklady</h3>
              <p>Připočítej drobné položky jako přírodní olej na dřevo, kompostovací urychlovač nebo síťku proti hlodavcům na dno, pokud máš na zahradě problém s myšmi – tyto doplňky obvykle nepřesáhnou pár stovek korun.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaké rozměry by měl mít dřevěný kompostér?", a: "Pro běžnou zahradu se osvědčuje kompostér o rozměrech přibližně 100×100 cm a výšce 80–100 cm. Menší objem se hůř zahřívá a rozkládá pomaleji, větší než 1,5×1,5 m je zase těžké přehazovat." },
                  { q: "Musí mít kompostér dno?", a: "Ne, dřevěný kompostér by měl stát přímo na zemi bez dna. Kontakt s půdou umožňuje přístup žížal a půdních mikroorganismů, které rozklad výrazně urychlují, a zároveň odtéká přebytečná voda." },
                  { q: "Z jakých palet se dá kompostér postavit?", a: "Nejlepší jsou standardní europalety bez chemického značení MB (methylbromid), naopak palety s razítkem HT (heat treated) jsou bezpečné. Palety se spojí do tvaru krabice šrouby nebo úhelníky." },
                  { q: "Jak velké mezery mezi prkny má kompostér mít?", a: "Mezery mezi prkny by měly být přibližně 1–2 cm po celém obvodu. Zajistí dostatečné proudění vzduchu, které je nezbytné pro aerobní rozklad a zabraňuje zahnívání a zápachu." },
                  { q: "Kde na zahradě má kompostér stát?", a: "Ideální je polostín, mírně vyvýšené a dobře odvodněné místo, ne příliš blízko domu ani sousedního plotu. Plné slunce kompost rychle vysušuje, hluboký stín naopak rozklad zpomaluje." },
                  { q: "Vyplatí se třídílný kompostér oproti jednoduchému?", a: "Pro domácnost s větší zahradou ano – umožňuje mít současně čerstvý odpad, zrající kompost a hotovou hlínu ve třech oddělených sekcích. Pro malou zahradu s menším objemem odpadu stačí jeden box." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-postavit-komposter-svepomoci" title="Jak postavit kompostér svépomocí – materiály a postup" />

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
                <li><a href="#proc">Proč vlastní kompostér</a></li>
                <li><a href="#material">Výběr materiálu</a></li>
                <li><a href="#rozmery">Rozměry a tvar</a></li>
                <li><a href="#vetrani">Větrání a umístění</a></li>
                <li><a href="#typy">Jednoduchý vs. třídílný</a></li>
                <li><a href="#naklady">Odhad nákladů</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>Více článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}
        .article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}
        .article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#fff}
        .faq-summary{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:background 120ms}
        .faq-summary:hover{background:var(--surface)}
        .faq-icon{font-size:14px;font-weight:400;flex-shrink:0;margin-left:12px;transition:transform 150ms}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{font-size:14px;line-height:1.65;color:var(--muted);font-weight:300;padding:0 20px 16px}
        .related-section{margin-top:56px}
        .related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}
        .sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}
        .sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}
        .sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}
        .sidebar-cat-link:hover{color:var(--muted)}
        .sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
        @media(max-width:600px){.article-layout{padding:32px 0 60px}}
      `}</style>
    </>
  );
}
