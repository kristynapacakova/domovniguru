import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat materiál na kuchyňskou pracovní desku",
  description: "Laminát, masivní dřevo, kompaktní deska, kámen i nerez – srovnání odolnosti, údržby a ceny, aby pracovní deska v kuchyni vydržela roky bez problémů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky" },
  openGraph: {
    title: "Jak vybrat materiál na kuchyňskou pracovní desku",
    description: "Laminát, masivní dřevo, kompaktní deska, kámen i nerez – srovnání odolnosti, údržby a ceny, aby pracovní deska v kuchyni vydržela roky bez problémů.",
    url: "https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20vybrat%20materi%C3%A1l%20na%20kuchy%C5%88skou%20pracovn%C3%AD%20desku&cat=blog", width: 1200, height: 630, alt: "Jak vybrat materiál na kuchyňskou pracovní desku" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak vybrat materiál na kuchyňskou pracovní desku",
    description: "Srovnání laminátu, dřeva, kamene, kompaktní desky a nerezu.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky#article",
      "headline": "Jak vybrat materiál na kuchyňskou pracovní desku",
      "description": "Laminát, masivní dřevo, kompaktní deska, kámen i nerez – srovnání odolnosti, údržby a ceny, aby pracovní deska v kuchyni vydržela roky bez problémů.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky" },
      "inLanguage": "cs",
      "keywords": ["kuchyňská pracovní deska", "materiál na pracovní desku", "kamenná pracovní deska", "dřevěná pracovní deska", "kompaktní deska do kuchyně"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak vybrat materiál na kuchyňskou pracovní desku", "item": "https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jaký materiál pracovní desky je nejodolnější vůči poškrábání?", "acceptedAnswer": { "@type": "Answer", "text": "Nejodolnější jsou desky z křemenného kompozitu a kompaktní desky, které snesou i přímý kontakt s nožem bez výraznějšího poškození. Naopak laminát a dřevo se škrábou snadno a vyžadují používání prkénka při každém krájení." } },
        { "@type": "Question", "name": "Snese pracovní deska z laminátu horký hrnec?", "acceptedAnswer": { "@type": "Answer", "text": "Krátký kontakt zvládne, ale opakované pokládání horkých nádob bez podložky postupně poškodí povrchovou laminátovou vrstvu a může způsobit boule nebo praskliny. Vždy je lepší použít podložku pod hrnce a pánve." } },
        { "@type": "Question", "name": "Je kamenná deska těžká na instalaci?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, granitové a křemenné desky jsou výrazně těžší než laminát nebo dřevo a montáž obvykle vyžaduje zpevněnou spodní konstrukci kuchyňské linky a odbornou instalaci se speciálním vybavením pro manipulaci s těžkými deskami." } },
        { "@type": "Question", "name": "Jak často se musí ošetřovat dřevěná pracovní deska?", "acceptedAnswer": { "@type": "Answer", "text": "Masivní dřevo je vhodné ošetřit olejem nebo voskem alespoň dvakrát až čtyřikrát do roka, u intenzivně používaných ploch i častěji. Bez pravidelné údržby dřevo ztrácí odolnost vůči vlhkosti a může se začít kroutit nebo praskat." } },
        { "@type": "Question", "name": "Hodí se nerezová deska do běžné domácí kuchyně?", "acceptedAnswer": { "@type": "Answer", "text": "Nerez je velmi odolný vůči horku, vlhkosti i bakteriím, ale viditelně se na něm projevují škrábance a otisky prstů, což některým uživatelům v domácí kuchyni nevyhovuje. Často se kombinuje jen na části desky kolem varné desky nebo dřezu." } },
        { "@type": "Question", "name": "Která pracovní deska má nejlepší poměr cena a odolnost?", "acceptedAnswer": { "@type": "Answer", "text": "Pro běžnou domácnost je obvykle nejvýhodnější kompaktní deska nebo kvalitní laminát s odolnou povrchovou úpravou – nabízí solidní odolnost za rozumnou cenu. Kámen a masivní dřevo jsou dražší, ale vydrží déle a působí prémiověji." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky#howto",
      "name": "Jak vybrat materiál na kuchyňskou pracovní desku",
      "description": "Laminát, masivní dřevo, kompaktní deska, kámen i nerez – srovnání odolnosti, údržby a ceny, aby pracovní deska v kuchyni vydržela roky bez problémů.",
      "step": [
        { "@type": "HowToStep", "name": "Zhodnocení vlastních nároků", "text": "Urči, jak intenzivně se v kuchyni vaří, kolik je v rodině lidí a jak velkou údržbu jsi ochoten deskám věnovat." },
        { "@type": "HowToStep", "name": "Porovnání laminátu a dřevotřísky", "text": "Zvaž levnější laminátovou desku pro nižší rozpočet, ale počítej s omezenou odolností vůči horku a vlhkosti." },
        { "@type": "HowToStep", "name": "Zvážení masivního dřeva", "text": "Posuď, zda jsi ochoten desku pravidelně olejovat a ošetřovat výměnou za přírodní vzhled a teplý dotek." },
        { "@type": "HowToStep", "name": "Porovnání kompaktní desky a kamene", "text": "U intenzivně používané kuchyně zvaž kompaktní desku nebo kámen pro vysokou odolnost vůči poškrábání i horku." },
        { "@type": "HowToStep", "name": "Zvážení nerezu pro specifické zóny", "text": "U varné a dřezové zóny zvaž nerezovou plochu pro maximální hygienu a odolnost vůči teplu." },
        { "@type": "HowToStep", "name": "Finální rozhodnutí podle rozpočtu", "text": "Vyber materiál podle poměru cena, odolnost a estetika, který nejlépe odpovídá tvému způsobu používání kuchyně." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Plánování kuchyně krok za krokem", href: "/blog/planovani-kuchyne-krok-za-krokem", read: "7 min" },
  { title: "Plánování rekonstrukce bytu krok za krokem", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Jak vybrat okna při rekonstrukci", href: "/blog/jak-vybrat-okna-pri-rekonstrukci", read: "6 min" },
  { title: "Jak navrhnout malé koupelny", href: "/blog/jak-navrhnout-male-koupelny", read: "6 min" },
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
              <Link href="/blog/kategorie/stehovani">Stěhování & rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Jak vybrat materiál na kuchyňskou pracovní desku</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat materiál na kuchyňskou pracovní desku</h1>
              <p className="article-lead">Pracovní deska je v kuchyni nejvíc zatěžovaná plocha – snáší horké hrnce, ostré nože, rozlitou vodu i denní otírání. Výběr správného materiálu rozhoduje o tom, jak dlouho deska vydrží vypadat dobře a jak náročná bude její údržba, proto se vyplatí porovnat všechny hlavní možnosti ještě před objednáním kuchyně.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky" title="Jak vybrat materiál na kuchyňskou pracovní desku" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#laminat">Laminát a dřevotříska</a></li>
                <li><a href="#drevo">Masivní dřevo</a></li>
                <li><a href="#kompakt">Kompaktní deska</a></li>
                <li><a href="#kamen">Kámen – granit a křemen</a></li>
                <li><a href="#nerez">Nerez</a></li>
                <li><a href="#vyber">Jak se rozhodnout</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="laminat">
              <h2>Laminát a dřevotříska</h2>
              <p>Laminátová pracovní deska na bázi dřevotřísky je nejrozšířenějším a nejdostupnějším řešením na trhu, se kterým se setká téměř každá běžná kuchyňská linka.</p>
              <h3>Odolnost a omezení</h3>
              <p>Povrchová laminátová vrstva snáší běžné otírání a krátký styk s vlhkostí, ale dlouhodobé působení vody u dřezu nebo opakované pokládání horkých nádob bez podložky postupně způsobí boule, praskliny nebo odlupování hran. Škrábance od nožů jsou na laminátu rovněž velmi viditelné.</p>
              <h3>Údržba</h3>
              <p>Údržba je nenáročná – stačí běžné otření vlhkým hadříkem a vyhýbání se abrazivním čisticím prostředkům, které by mohly povrch matovat. Hrany u dřezu je dobré čas od času zkontrolovat, zda nedochází k zatékání vlhkosti pod laminát.</p>
              <h3>Cena</h3>
              <p>Laminát je cenově nejdostupnější volbou, běžně od několika set korun za běžný metr u základních provedení, což z něj dělá oblíbenou volbu pro nájemní bydlení nebo omezený rozpočet na rekonstrukci.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud zvolíš laminát, investuj alespoň do kvalitní hrany s ABS páskou a dobře zatmelenými spoji u dřezu a varné desky – tam totiž dochází k poškození nejčastěji.</div>
            </section>

            <section id="drevo">
              <h2>Masivní dřevo</h2>
              <p>Dřevěná pracovní deska dodá kuchyni teplý a přírodní vzhled, který laminát ani kámen nedokážou plně napodobit, ale vyžaduje pravidelnou péči.</p>
              <h3>Odolnost vůči vlhku a teplu</h3>
              <p>Dřevo bez správného ošetření vlhkost snáší špatně – u dřezu může bobtnat a kroutit se, pokud voda zatéká do spojů nebo nedostatečně ošetřeného povrchu. Vůči krátkému kontaktu s teplem je odolnější než laminát, ale trvalé položení horkého hrnce stejně zanechá stopu.</p>
              <h3>Pravidelná údržba olejem nebo voskem</h3>
              <p>Pro udržení odolnosti je potřeba desku ošetřovat olejem nebo voskem alespoň dvakrát až čtyřikrát ročně, u intenzivně používané kuchyně i častěji. Ošetření obnoví vodoodpudivou vrstvu a zabrání vysychání a praskání dřeva.</p>
              <h3>Cena a vhodnost</h3>
              <p>Cena masivního dřeva se pohybuje výrazně výš než u laminátu, řádově v tisících korun za běžný metr podle druhu dřeva. Hodí se do domácností, které jsou ochotny věnovat desce pravidelnou péči výměnou za přírodní vzhled a příjemný dotek.</p>
            </section>

            <section id="kompakt">
              <h2>Kompaktní deska</h2>
              <p>Kompaktní desky vyrobené z vrstveného laminátu při vysokém tlaku a teplotě patří mezi nejodolnější materiály na trhu a získávají si stále větší oblibu i v domácích kuchyních.</p>
              <h3>Vysoká odolnost</h3>
              <p>Kompaktní deska velmi dobře odolává horku, poškrábání i nárazům, díky stejnorodé struktuře po celé tloušťce materiálu navíc snese i drobné opotřebení hran beze ztráty vzhledu. Povrch je zároveň nenasákavý, takže nehrozí bobtnání jako u dřeva.</p>
              <h3>Nenáročná údržba</h3>
              <p>Údržba je podobně jednoduchá jako u laminátu – stačí běžné otření, bez potřeby olejování nebo speciálního ošetření. To z kompaktní desky dělá praktickou volbu pro domácnosti, které chtějí vysokou odolnost bez časté péče.</p>
              <h3>Cena</h3>
              <p>Cena je vyšší než u běžného laminátu, ale stále nižší než u přírodního kamene, čímž kompaktní deska nabízí solidní poměr mezi odolností a investicí.</p>
            </section>

            <section id="kamen">
              <h2>Kámen – granit a křemen</h2>
              <p>Kamenné desky představují prémiovou kategorii s nejvyšší odolností, ale i nejvyšší cenou a hmotností.</p>
              <h3>Granit</h3>
              <p>Přírodní granit je extrémně odolný vůči poškrábání i vysokým teplotám, snese přímé položení horkého hrnce bez podložky. Jako přírodní materiál má ale pórovitou strukturu, kterou je potřeba pravidelně impregnovat, jinak hrozí vsakování tekutin a tvorba skvrn.</p>
              <h3>Křemenný kompozit</h3>
              <p>Křemenné desky kombinují drcený přírodní křemen s pojivem, čímž získávají nenasákavý povrch bez nutnosti impregnace a zároveň zachovávají vysokou odolnost vůči škrábancům. Vůči extrémnímu horku jsou citlivější než granit, proto se i tady doporučuje používat podložku pod horké nádobí.</p>
              <h3>Hmotnost a instalace</h3>
              <p>Kamenné desky jsou výrazně těžší než ostatní materiály, montáž proto vyžaduje zpevněnou spodní konstrukci kuchyňské linky a obvykle odbornou instalaci se speciálním vybavením. Cena se pohybuje na horní hranici nabídky trhu, odpovídající však dlouhé životnosti a prémiovému vzhledu.</p>
            </section>

            <section id="nerez">
              <h2>Nerez</h2>
              <p>Nerezová pracovní deska je tradičně spojována s profesionálními kuchyněmi, ale postupně se prosazuje i v moderních domácích interiérech.</p>
              <h3>Hygiena a odolnost</h3>
              <p>Nerez je nenasákavý, odolný vůči bakteriím, horku i vlhkosti a snadno se dezinfikuje, což z něj dělá nejhygieničtější dostupný materiál. Vůči teplu je odolnost téměř bezkonkurenční – přímý kontakt s horkým hrncem mu neuškodí.</p>
              <h3>Estetická omezení</h3>
              <p>Hlavní nevýhodou je viditelnost škrábanců a otisků prstů na povrchu, které se musí pravidelně otírat, aby deska vypadala čistě. Z tohoto důvodu se nerez často kombinuje jen v určité zóně kuchyně, typicky kolem varné desky nebo dřezu, místo celé pracovní plochy.</p>
              <h3>Cena</h3>
              <p>Cena nerezové desky se pohybuje ve vyšší střední kategorii, závisí na tloušťce plechu a kvalitě zpracování hran a výřezů pro dřez a varnou desku.</p>
            </section>

            <section id="vyber">
              <h2>Jak se rozhodnout podle typu domácnosti</h2>
              <p>Ideální materiál se liší podle toho, jak často se v kuchyni vaří, kolik je v domácnosti lidí a jakou péči jsi ochoten desce věnovat.</p>
              <h3>Pro nájemní bydlení a omezený rozpočet</h3>
              <p>Kvalitní laminát s odolnou hranou je rozumnou volbou tam, kde se neplánuje dlouhodobé bydlení nebo je rozpočet na rekonstrukci omezený. Při běžném zacházení a používání podložek vydrží spokojeně řadu let.</p>
              <h3>Pro rodiny s intenzivním vařením</h3>
              <p>Domácnosti, kde se vaří denně a často velké porce, ocení odolnost kompaktní desky nebo křemenného kamene, které snesou intenzivní zatížení bez ztráty vzhledu a nevyžadují náročnou údržbu.</p>
              <h3>Pro milovníky přírodních materiálů</h3>
              <p>Pokud je pro tebe důležitý přírodní vzhled a jsi ochoten investovat čas do pravidelného olejování, masivní dřevo nabídne nenahraditelnou atmosféru, kterou žádný umělý materiál zcela nenahradí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> U velkých kuchyňských ostrůvků se vyplatí kombinovat materiály – odolnější kámen nebo kompaktní deska kolem varné zóny a teplejší dřevo na části určené k jídlu nebo posezení.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký materiál pracovní desky je nejodolnější vůči poškrábání?", a: "Nejodolnější jsou desky z křemenného kompozitu a kompaktní desky, které snesou i přímý kontakt s nožem bez výraznějšího poškození. Naopak laminát a dřevo se škrábou snadno a vyžadují používání prkénka při každém krájení." },
                  { q: "Snese pracovní deska z laminátu horký hrnec?", a: "Krátký kontakt zvládne, ale opakované pokládání horkých nádob bez podložky postupně poškodí povrchovou laminátovou vrstvu a může způsobit boule nebo praskliny. Vždy je lepší použít podložku pod hrnce a pánve." },
                  { q: "Je kamenná deska těžká na instalaci?", a: "Ano, granitové a křemenné desky jsou výrazně těžší než laminát nebo dřevo a montáž obvykle vyžaduje zpevněnou spodní konstrukci kuchyňské linky a odbornou instalaci se speciálním vybavením pro manipulaci s těžkými deskami." },
                  { q: "Jak často se musí ošetřovat dřevěná pracovní deska?", a: "Masivní dřevo je vhodné ošetřit olejem nebo voskem alespoň dvakrát až čtyřikrát do roka, u intenzivně používaných ploch i častěji. Bez pravidelné údržby dřevo ztrácí odolnost vůči vlhkosti a může se začít kroutit nebo praskat." },
                  { q: "Hodí se nerezová deska do běžné domácí kuchyně?", a: "Nerez je velmi odolný vůči horku, vlhkosti i bakteriím, ale viditelně se na něm projevují škrábance a otisky prstů, což některým uživatelům v domácí kuchyni nevyhovuje. Často se kombinuje jen na části desky kolem varné desky nebo dřezu." },
                  { q: "Která pracovní deska má nejlepší poměr cena a odolnost?", a: "Pro běžnou domácnost je obvykle nejvýhodnější kompaktní deska nebo kvalitní laminát s odolnou povrchovou úpravou – nabízí solidní odolnost za rozumnou cenu. Kámen a masivní dřevo jsou dražší, ale vydrží déle a působí prémiověji." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/vyber-kuchynske-pracovni-desky" title="Jak vybrat materiál na kuchyňskou pracovní desku" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Stěhování & rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#laminat">Laminát a dřevotříska</a></li>
                <li><a href="#drevo">Masivní dřevo</a></li>
                <li><a href="#kompakt">Kompaktní deska</a></li>
                <li><a href="#kamen">Kámen</a></li>
                <li><a href="#nerez">Nerez</a></li>
                <li><a href="#vyber">Jak se rozhodnout</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>Více článků →</span></Link>
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
