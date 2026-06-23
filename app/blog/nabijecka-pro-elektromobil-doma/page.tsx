import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Nabíjecí stanice pro elektromobil doma – jak ji vybrat a nainstalovat",
  description: "Wallbox vs. běžná zásuvka, jaký výkon zvolit, nutnost revize elektroinstalace, instalace v domě i bytovém domě a orientační ceny a dotace.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma" },
  openGraph: {
    title: "Nabíjecí stanice pro elektromobil doma – jak ji vybrat a nainstalovat",
    description: "Wallbox vs. běžná zásuvka, jaký výkon zvolit, nutnost revize elektroinstalace, instalace v domě i bytovém domě a orientační ceny a dotace.",
    url: "https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Nab%C3%ADjec%C3%AD%20stanice%20pro%20elektromobil%20doma%20%E2%80%93%20jak%20ji%20vybrat%20a%20nainstalovat&cat=blog", width: 1200, height: 630, alt: "Nabíjecí stanice pro elektromobil doma – jak ji vybrat a nainstalovat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabíjecí stanice pro elektromobil doma",
    description: "Jak vybrat výkon wallboxu, revizi a orientační cenu instalace.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma#article",
      "headline": "Nabíjecí stanice pro elektromobil doma – jak ji vybrat a nainstalovat",
      "description": "Wallbox vs. běžná zásuvka, jaký výkon zvolit, nutnost revize elektroinstalace, instalace v domě i bytovém domě a orientační ceny a dotace.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma" },
      "inLanguage": "cs",
      "keywords": ["nabíjecí stanice pro elektromobil", "wallbox doma", "nabíječka elektromobil rodinný dům", "instalace wallboxu", "dotace na wallbox"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" },
        { "@type": "ListItem", "position": 4, "name": "Nabíjecí stanice pro elektromobil doma", "item": "https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Můžu elektromobil nabíjet jen z běžné zásuvky?", "acceptedAnswer": { "@type": "Answer", "text": "Z běžné zásuvky 230 V lze nabíjet pouze příležitostně a krátkodobě, nabíjení je výrazně pomalejší (typicky kolem 2 kW) a běžná zásuvka ani okruh nejsou na takové dlouhodobé zatížení konstruovány. Pro pravidelné domácí nabíjení je bezpečnější a rychlejší instalovat wallbox na samostatném okruhu." } },
        { "@type": "Question", "name": "Jaký výkon wallboxu mám zvolit?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastěji se instalují wallboxy o výkonu 7,4 kW (jednofázové) nebo 11–22 kW (třífázové). Volba závisí na maximálním příkonu, který palubní nabíječka auta zvládne přijmout, a na rezervě, kterou má domovní přípojka a hlavní jistič bytu nebo domu." } },
        { "@type": "Question", "name": "Potřebuji revizi elektroinstalace před instalací wallboxu?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Instalace nového silového okruhu pro wallbox je zásah do elektroinstalace, který musí provést elektrikář s odpovídající kvalifikací, a po dokončení je ze zákona nutná revizní zpráva od revizního technika potvrzující bezpečnost nového obvodu." } },
        { "@type": "Question", "name": "Jak se liší instalace v rodinném domě a v bytovém domě?", "acceptedAnswer": { "@type": "Answer", "text": "V rodinném domě je instalace jednodušší, řeší se jen kapacita domovní přípojky a umístění wallboxu v garáži nebo na fasádě. V bytovém domě je nutné řešit i souhlas SVJ nebo družstva, kapacitu společné přípojky pro celý dům a často sdílené řešení s rozdělováním výkonu mezi více nabíjecích míst." } },
        { "@type": "Question", "name": "Kolik stojí instalace wallboxu doma?", "acceptedAnswer": { "@type": "Answer", "text": "Orientační cena samotného wallboxu se pohybuje od přibližně 15 000 do 40 000 Kč podle výkonu a funkcí, instalace elektrikářem včetně kabelu a revize pak přidá dalších 10 000 až 30 000 Kč v závislosti na vzdálenosti od rozváděče a stavebních úpravách." } },
        { "@type": "Question", "name": "Existují v Česku dotace na domácí wallbox?", "acceptedAnswer": { "@type": "Answer", "text": "Dotační programy na domácí wallboxy se v čase mění a liší podle aktuální nabídky (např. programy Nová zelená úsporám nebo regionální výzvy). Před instalací je vhodné ověřit aktuální podmínky na stránkách Státního fondu životního prostředí nebo u svého elektrikáře, který bývá s aktuálními dotacemi obeznámen." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma#howto",
      "name": "Nabíjecí stanice pro elektromobil doma – jak ji vybrat a nainstalovat",
      "description": "Wallbox vs. běžná zásuvka, jaký výkon zvolit, nutnost revize elektroinstalace, instalace v domě i bytovém domě a orientační ceny a dotace.",
      "step": [
        { "@type": "HowToStep", "name": "Posouzení kapacity domovní přípojky", "text": "Elektrikář ověří, jakou rezervu má hlavní jistič a přípojka domu, a podle toho doporučí maximální výkon wallboxu." },
        { "@type": "HowToStep", "name": "Výběr výkonu a typu wallboxu", "text": "Zvol mezi jednofázovým (typicky 7,4 kW) a třífázovým (11–22 kW) wallboxem podle možností vozu i domovní přípojky." },
        { "@type": "HowToStep", "name": "Řešení v bytovém domě", "text": "V bytovém domě nebo garáži si vyžádej souhlas SVJ nebo družstva a prověř kapacitu společné přípojky pro více nabíjecích míst." },
        { "@type": "HowToStep", "name": "Instalace samostatného okruhu elektrikářem", "text": "Nech elektrikáře zřídit samostatný okruh s vlastním jističem a proudovým chráničem dimenzovaným na výkon wallboxu." },
        { "@type": "HowToStep", "name": "Revize nové instalace", "text": "Po dokončení instalace si vyžádej revizní zprávu od revizního technika, která potvrdí bezpečnost nového obvodu." },
        { "@type": "HowToStep", "name": "Ověření dotačních možností", "text": "Před nákupem zkontroluj aktuální dotační programy na domácí nabíjecí stanice a podmínky pro jejich čerpání." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak funguje proudový chránič (RCD)", href: "/blog/jak-funguje-proudovy-chranic", read: "5 min" },
  { title: "Záložní zdroj a generátor pro domácnost", href: "/blog/zalozni-zdroj-generator-pro-domacnost", read: "6 min" },
  { title: "Jak vybrat dodavatele elektřiny", href: "/blog/jak-vybrat-dodavatele-elektriny", read: "5 min" },
  { title: "Instalace venkovní zásuvky a osvětlení", href: "/blog/instalace-venkovni-zasuvky-a-osvetleni", read: "5 min" },
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
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Nabíjecí stanice pro elektromobil doma</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Nabíjecí stanice pro elektromobil doma – jak ji vybrat a nainstalovat</h1>
              <p className="article-lead">Nabíjení elektromobilu z běžné zásuvky funguje jen jako nouzové řešení – pro pravidelné dobíjení doma potřebuješ vlastní nabíjecí stanici, takzvaný wallbox, napojenou na samostatný okruh s odpovídající revizí. Ukážeme, jak zvolit výkon, na co si dát pozor v bytovém domě a s jakými náklady počítat.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma" title="Nabíjecí stanice pro elektromobil doma – jak ji vybrat a nainstalovat" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zasuvka-vs-wallbox">Běžná zásuvka, nebo wallbox</a></li>
                <li><a href="#vykon">Jaký výkon zvolit</a></li>
                <li><a href="#revize">Revize a samostatný okruh</a></li>
                <li><a href="#dum">Instalace v rodinném domě</a></li>
                <li><a href="#bytovka">Instalace v bytovém domě a garáži</a></li>
                <li><a href="#cena">Orientační cena a dotace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zasuvka-vs-wallbox">
              <h2>Běžná zásuvka, nebo wallbox</h2>
              <p>První otázka, kterou si majitelé elektromobilu kladou, je, jestli vůbec potřebují speciální nabíjecí stanici, když auto lze v nouzi nabít i z obyčejné zásuvky.</p>
              <h3>Nabíjení z běžné zásuvky</h3>
              <p>Standardní zásuvka 230 V/16 A zvládne dodávat výkon kolem 2 až 2,3 kW, což na plné dobití velké baterie znamená i přes 24 hodin. Navíc běžné zásuvkové okruhy nejsou konstruovány na mnohahodinové zatížení blízké jejich maximu – při dlouhodobém vysokém zatížení hrozí přehřátí zásuvky a kabelu, zejména u starších rozvodů.</p>
              <h3>Proč zvolit wallbox</h3>
              <p>Wallbox je nabíjecí stanice připojená na samostatný, správně dimenzovaný okruh s vlastním jističem a proudovým chráničem. Nabíjí výrazně rychleji, komunikuje s autem a hlídá bezpečné parametry nabíjení – proudové i teplotní. Pro pravidelné každodenní nabíjení je to jediné rozumné a bezpečné řešení.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud elektromobil dobíháš jen výjimečně a malým množstvím kilometrů týdně, lze zvážit přechodné nabíjení z prodlužovacího kabelu určeného přímo pro elektromobily (tzv. mode 2 kabel) – ale i to by mělo jít přes okruh prověřený elektrikářem, ne přes starou zásuvku v garáži nejasného stáří.</div>
            </section>

            <section id="vykon">
              <h2>Jaký výkon zvolit</h2>
              <p>Výkon wallboxu by měl odpovídat tomu, co dokáže přijmout palubní nabíječka vozu, a současně tomu, co unese domovní přípojka.</p>
              <h3>Jednofázové wallboxy</h3>
              <p>Nejběžnější domácí výkon je 7,4 kW na jedné fázi. Hodí se tam, kde má dům jen jednofázovou přípojku nebo omezenou rezervu hlavního jističe, a stačí na dobití běžné baterie elektromobilu přes noc.</p>
              <h3>Třífázové wallboxy</h3>
              <p>Výkony 11 kW a 22 kW vyžadují třífázové připojení a odpovídající rezervu na hlavním jističi. Rychlejší nabíjení je výhodné u vozů s větší baterií nebo u domácností s více elektromobily, ale je potřeba ověřit, že to přípojka domu skutečně unese bez rizika přetížení ostatních spotřebičů.</p>
              <h3>Jak výkon správně posoudit</h3>
              <p>Konkrétní doporučený výkon by měl vždy posoudit elektrikář na základě technické dokumentace domu, velikosti hlavního jističe a dalších spotřebičů v domácnosti – například tepelného čerpadla nebo elektrického vaření, které mohou rezervu výrazně omezit.</p>
            </section>

            <section id="revize">
              <h2>Revize a samostatný okruh</h2>
              <p>Wallbox není spotřebič, který se jen zapojí do zásuvky – jde o trvalou součást elektroinstalace domu.</p>
              <h3>Proč je nutný samostatný okruh</h3>
              <p>Wallbox musí mít vlastní jistič dimenzovaný na jeho výkon a vlastní proudový chránič, ideálně typu A nebo B podle doporučení výrobce nabíječky, protože nabíjení elektromobilu může vykazovat specifické stejnosměrné svodové proudy, na které běžný chránič typu AC nemusí spolehlivě reagovat.</p>
              <h3>Revizní zpráva je povinná</h3>
              <p>Jakýkoliv nový silový okruh v domě musí po instalaci zkontrolovat a potvrdit revizní technik formální revizní zprávou. Bez ní nelze prokázat, že je instalace v souladu s bezpečnostními normami, a v případě pojistné události (požár, úraz) může chybějící revize znamenat problém s pojistným plněním.</p>
              <h3>Proč si nedělat instalaci sám</h3>
              <p>Zapojení nového silového okruhu v rozváděči vyžaduje práci s živými částmi pod napětím a správné dimenzování vodičů na vysoký zatěžovací proud. Tohle není úkol pro laika – svěř instalaci výhradně elektrikáři s revizí, riziko požáru nebo úrazu elektrickým proudem je při amatérském zapojení vysoké.</p>
            </section>

            <section id="dum">
              <h2>Instalace v rodinném domě</h2>
              <p>U rodinného domu je instalace wallboxu obvykle nejjednodušší, protože celá elektroinstalace patří jedinému vlastníkovi.</p>
              <h3>Umístění</h3>
              <p>Wallbox se nejčastěji instaluje v garáži, na fasádě domu poblíž parkovacího stání nebo pod přístřeškem. Důležité je zvolit místo s rozumnou vzdáleností od rozváděče, aby nebylo nutné táhnout příliš dlouhý a tedy dražší silový kabel.</p>
              <h3>Kapacita přípojky</h3>
              <p>Elektrikář při návštěvě posoudí, jakou rezervu má hlavní jistič domu. Pokud je rezerva nedostatečná, řešením může být buď navýšení jističe u distributora (vyžaduje žádost a často i poplatek), nebo instalace wallboxu s funkcí dynamického řízení výkonu, který automaticky snižuje nabíjecí proud při vysokém odběru ostatních spotřebičů.</p>
            </section>

            <section id="bytovka">
              <h2>Instalace v bytovém domě a garáži</h2>
              <p>V bytových domech a sdílených garážích je instalace komplikovanější, protože se týká společné elektroinstalace celého domu.</p>
              <h3>Souhlas SVJ nebo družstva</h3>
              <p>Před instalací wallboxu je nutné získat souhlas společenství vlastníků jednotek nebo bytového družstva, protože zásah do společných rozvodů ovlivňuje i ostatní obyvatele domu.</p>
              <h3>Kapacita společné přípojky</h3>
              <p>Společná přípojka bytového domu má omezenou kapacitu, kterou si dělí všichni obyvatelé. Pokud se má instalovat více nabíjecích míst, je vhodné zvážit systém s dynamickým řízením výkonu mezi jednotlivými wallboxy, který přerozděluje dostupný výkon podle aktuální potřeby a zatížení domu.</p>
              <h3>Společné řešení vs. individuální stanice</h3>
              <p>U větších bytových domů se čím dál častěji řeší centralizovaný systém správy nabíjecích bodů, který umožní postupně přidávat další nabíjecí místa bez nutnosti znovu posuzovat celou kapacitu přípojky. Konzultace s odborníkem na elektroinstalace je zde nezbytná už ve fázi plánování.</p>
            </section>

            <section id="cena">
              <h2>Orientační cena a dotace</h2>
              <p>Celkové náklady na domácí nabíjecí stanici se skládají z cen samotného wallboxu a z práce elektrikáře.</p>
              <h3>Cena wallboxu</h3>
              <p>Základní jednofázové modely vyjdou přibližně na 15 000 až 25 000 Kč, výkonnější třífázové stanice s chytrými funkcemi (aplikace, plánování nabíjení, dynamické řízení výkonu) se pohybují od 25 000 do 40 000 Kč a více.</p>
              <h3>Cena instalace</h3>
              <p>Práce elektrikáře včetně kabelu, jističe, chrániče a revize se obvykle pohybuje v rozmezí 10 000 až 30 000 Kč, podle vzdálenosti od rozváděče, nutnosti stavebních úprav (sekání drážek, protahování kabelu) a případného navýšení jističe u distributora.</p>
              <h3>Dotační programy</h3>
              <p>V Česku se čas od času objevují dotační programy na domácí nabíjecí stanice, například v rámci Nové zelené úsporám nebo regionálních výzev. Podmínky a výše dotace se v čase měnily, proto je vhodné si před nákupem ověřit aktuální nabídku na stránkách Státního fondu životního prostředí ČR nebo se zeptat dodavatele wallboxu, který bývá s aktuální situací obeznámen.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při srovnávání nabídek elektrikářů si vyžádej rozpis ceny zvlášť za materiál, práci a revizi – usnadní to porovnání nabídek a ověření, že revize skutečně proběhne a nebude jen formálně přiznaná.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Můžu elektromobil nabíjet jen z běžné zásuvky?", a: "Z běžné zásuvky 230 V lze nabíjet pouze příležitostně a krátkodobě, nabíjení je výrazně pomalejší (typicky kolem 2 kW) a běžná zásuvka ani okruh nejsou na takové dlouhodobé zatížení konstruovány. Pro pravidelné domácí nabíjení je bezpečnější a rychlejší instalovat wallbox na samostatném okruhu." },
                  { q: "Jaký výkon wallboxu mám zvolit?", a: "Nejčastěji se instalují wallboxy o výkonu 7,4 kW (jednofázové) nebo 11–22 kW (třífázové). Volba závisí na maximálním příkonu, který palubní nabíječka auta zvládne přijmout, a na rezervě, kterou má domovní přípojka a hlavní jistič bytu nebo domu." },
                  { q: "Potřebuji revizi elektroinstalace před instalací wallboxu?", a: "Ano. Instalace nového silového okruhu pro wallbox je zásah do elektroinstalace, který musí provést elektrikář s odpovídající kvalifikací, a po dokončení je ze zákona nutná revizní zpráva od revizního technika potvrzující bezpečnost nového obvodu." },
                  { q: "Jak se liší instalace v rodinném domě a v bytovém domě?", a: "V rodinném domě je instalace jednodušší, řeší se jen kapacita domovní přípojky a umístění wallboxu v garáži nebo na fasádě. V bytovém domě je nutné řešit i souhlas SVJ nebo družstva, kapacitu společné přípojky pro celý dům a často sdílené řešení s rozdělováním výkonu mezi více nabíjecích míst." },
                  { q: "Kolik stojí instalace wallboxu doma?", a: "Orientační cena samotného wallboxu se pohybuje od přibližně 15 000 do 40 000 Kč podle výkonu a funkcí, instalace elektrikářem včetně kabelu a revize pak přidá dalších 10 000 až 30 000 Kč v závislosti na vzdálenosti od rozváděče a stavebních úpravách." },
                  { q: "Existují v Česku dotace na domácí wallbox?", a: "Dotační programy na domácí wallboxy se v čase mění a liší podle aktuální nabídky (např. programy Nová zelená úsporám nebo regionální výzvy). Před instalací je vhodné ověřit aktuální podmínky na stránkách Státního fondu životního prostředí nebo u svého elektrikáře, který bývá s aktuálními dotacemi obeznámen." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/nabijecka-pro-elektromobil-doma" title="Nabíjecí stanice pro elektromobil doma – jak ji vybrat a nainstalovat" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#zasuvka-vs-wallbox">Zásuvka, nebo wallbox</a></li>
                <li><a href="#vykon">Jaký výkon zvolit</a></li>
                <li><a href="#revize">Revize a samostatný okruh</a></li>
                <li><a href="#dum">Rodinný dům</a></li>
                <li><a href="#bytovka">Bytový dům a garáž</a></li>
                <li><a href="#cena">Cena a dotace</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>Více článků →</span></Link>
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
