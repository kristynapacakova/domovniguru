import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak ošetřit novou omítku, než ji začnete malovat",
  description: "Doba zrání omítky, vlhkost zdiva, penetrace a postup prvního malování nově omítnutých stěn.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/osetrit-novou-omitku-pred-malovanim" },
  openGraph: { title: "Jak ošetřit novou omítku, než ji začnete malovat", description: "Doba zrání omítky, vlhkost zdiva, penetrace a postup prvního malování.", url: "https://www.domovniguru.cz/blog/osetrit-novou-omitku-pred-malovanim", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20o%C5%A1et%C5%99it%20novou%20om%C3%ADtku%2C%20ne%C5%BE%20ji%20za%C4%8Dnete%20malovat&cat=blog", width: 1200, height: 630, alt: "Jak ošetřit novou omítku, než ji začnete malovat" }] },
  twitter: { card: "summary_large_image", title: "Jak ošetřit novou omítku, než ji začnete malovat", description: "Doba zrání omítky, vlhkost zdiva, penetrace a postup prvního malování." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/osetrit-novou-omitku-pred-malovanim#article", "headline": "Jak ošetřit novou omítku, než ji začnete malovat", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["nová omítka malování", "zrání omítky", "penetrace nové omítky", "vlhkost zdiva", "první malování po omítce"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" }, { "@type": "ListItem", "position": 4, "name": "Jak ošetřit novou omítku, než ji začnete malovat", "item": "https://www.domovniguru.cz/blog/osetrit-novou-omitku-pred-malovanim" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak dlouho musí nová omítka zrát před malováním?", "acceptedAnswer": { "@type": "Answer", "text": "Sádrová omítka potřebuje obvykle 1–2 týdny na 1 cm tloušťky, vápenocementová a vápenná omítka 2–4 týdny na 1 cm, podle vlhkosti a teploty v místnosti. Silikátová fasáda by měla zrát alespoň 2–3 týdny před nátěrem." } }, { "@type": "Question", "name": "Jak zjistím, jestli je omítka už suchá?", "acceptedAnswer": { "@type": "Answer", "text": "Orientačně poslouží přiložení dlaně – studená a vlhká omítka ještě nedosychá. Dál se hodí test fólií přilepenou na noc (kondenzace = vlhko uvnitř) nebo vlhkoměr na zdivo, ideálně by vlhkost měla klesnout pod 3–5 % hmotnostních." } }, { "@type": "Question", "name": "Proč má nová omítka vysoké pH a co to znamená pro barvu?", "acceptedAnswer": { "@type": "Answer", "text": "Čerstvá vápenná a cementová omítka má pH 12–13 a alkalická vlhkost může napadat pigmenty a pojiva běžných barev. Proto se na novou omítku používá alkalicky odolná penetrace a barva, jinak hrozí žluté mapy a špatná přídržnost." } }, { "@type": "Question", "name": "Musím novou omítku před malováním penetrovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, téměř vždy. Nová omítka je velmi savá a nerovnoměrně přijímá barvu, což vede k mapám a prosvítání. Penetrace s hloubkovým průnikem sjednotí savost, zpevní povrch a sníží spotřebu finální barvy." } }, { "@type": "Question", "name": "Kolik vrstev barvy potřebuje nová omítka?", "acceptedAnswer": { "@type": "Answer", "text": "Po penetraci se obvykle nanášejí dvě vrstvy malby. První vrstva se mírně ředí podle doporučení výrobce, druhá se nanáší neředěná pro plné krytí a rovnoměrný odstín." } }] }] };

const RELATED = [
  { title: "Penetrace před malováním – kdy je nutná?", href: "/blog/penetrace-pred-malovanim", read: "4 min" },
  { title: "Jak malovat zeď – kompletní průvodce pro začátečníky", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Sádrokartonová příčka – postup montáže", href: "/blog/sadrokarton-pricka-postup", read: "6 min" },
  { title: "Kalkulačka penetrace – kolik primeru potřebuješ", href: "/kalkulacky/kolik-primeru", read: "1 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Jak ošetřit novou omítku, než ji začnete malovat</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak ošetřit novou omítku, než ji začnete malovat</h1>
              <p className="article-lead">Čerstvě omítnutá stěna vypadá hladce a lákavě – ale pod povrchem ještě probíhá chemický proces, který může pokazit i ten nejlepší nátěr. Než sáhneš po válečku, ukážeme ti, jak omítku správně připravit, ošetřit a kdy je skutečně připravená na malování.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zrani">Doba zrání omítky podle typu</a></li>
                <li><a href="#vlhkost">Jak ověřit vlhkost zdiva</a></li>
                <li><a href="#penetrace">Proč a jak nanášet penetraci</a></li>
                <li><a href="#typy-omitek">Příprava podle typu omítky</a></li>
                <li><a href="#ph">Vysoké pH a alkalicky odolné barvy</a></li>
                <li><a href="#prvni-malovani">První malování – postup a vrstvy</a></li>
                <li><a href="#problemy">Časté problémy a jak se jim vyhnout</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zrani">
              <h2>Doba zrání omítky podle typu</h2>
              <p>Každá omítka při tuhnutí a vysychání ztrácí vodu, kterou do sebe namíchala při zpracování. Dokud tato voda zcela neopustí strukturu materiálu, nátěr na ní nemusí drží správně, může vznikat zápach, mapy nebo bublinky pod vrstvou barvy.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ omítky</th><th>Doba zrání na 1 cm</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td>Sádrová (interiérová)</td><td>1–2 týdny</td><td>Schne rychle, ale pozor na vlhko v koupelnách</td></tr>
                    <tr><td>Vápenocementová</td><td>2–4 týdny</td><td>Pomalejší zrání, citlivá na nízké teploty</td></tr>
                    <tr><td>Vápenná</td><td>2–4 týdny i déle</td><td>Vyžaduje karbonataci – reakci s CO₂ ze vzduchu</td></tr>
                    <tr><td>Silikátová fasádní</td><td>2–3 týdny</td><td>Před nátěrem nutné nechat dozrát i při dobrém počasí</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Tyto hodnoty platí pro běžnou tloušťku omítky (1–1,5 cm) a optimální podmínky – teplotu kolem 18–20 °C a relativní vlhkost vzduchu do 60 %. Pokud je v místnosti chladněji nebo vlhčeji, doba zrání se může klidně zdvojnásobit.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při zrání omítky důkladně větrej, ale nevystavuj stěnu průvanu ani přímému slunci – příliš rychlé vysychání povrchu způsobuje praskliny, zatímco jádro omítky zůstává vlhké.</div>
            </section>

            <section id="vlhkost">
              <h2>Jak ověřit vlhkost zdiva</h2>
              <p>Než začneš malovat, musíš mít jistotu, že je omítka vyschlá v celé tloušťce, nejen na povrchu. Existuje několik orientačních metod, které zvládneš i bez profesionálního přístroje.</p>
              <h3>Zkouška dlaní</h3>
              <p>Přilož dlaň na zeď na delší dobu. Pokud je povrch znatelně chladný a vlhký na dotek, omítka ještě dosychá. Suchá omítka je na dotek neutrální až mírně teplá.</p>
              <h3>Test s fólií</h3>
              <p>Na noc přilep na zeď kousek průhledné fólie (přibližně 30×30 cm), okraje pečlivě zatěsni páskou. Ráno fólii sundej – pokud je na vnitřní straně kondenzace nebo zeď pod ní viditelně ztmavla, ve zdivu je ještě výrazná vlhkost.</p>
              <h3>Vlhkoměr na zdivo</h3>
              <p>Nejspolehlivější je elektronický vlhkoměr s vpichovacími nebo bezdotykovými elektrodami. Pro malování by měla vlhkost klesnout pod 3–5 % hmotnostních u omítek na bázi sádry a vápna, u cementových směsí se akceptuje i o trochu vyšší hodnota podle doporučení výrobce barvy.</p>
              <h3>Barevná skvrna a vůně</h3>
              <p>Tmavší odstín omítky v určitých místech (zejména u rohů a u podlahy) bývá znakem zadržené vlhkosti. Stejně tak typický „studený“ a mírně cementový zápach v místnosti signalizuje, že materiál ještě nedokončil schnutí.</p>
            </section>

            <section id="penetrace">
              <h2>Proč a jak nanášet penetraci na novou omítku</h2>
              <p>Nová omítka je extrémně savá – mnohem savější než stará, vymalovaná stěna. Pokud na ni naneseš barvu bez penetrace, savost se v různých místech liší a barva zasychá nerovnoměrně. Výsledkem jsou mapy, lokální matné a lesklé plochy a vyšší spotřeba barvy, protože se část první vrstvy „ztratí“ v povrchu omítky.</p>
              <p>Penetrační nátěr na nové omítky má dvě hlavní funkce: zpevňuje povrch (vážou se v něm drobné částečky prachu a omítkové moučky) a sjednocuje savost, takže finální barva sedí rovnoměrně. Na velmi savé a křídující povrchy se doporučuje penetrace s hloubkovým průnikem, která proniká hlouběji do struktury a vytváří pevný základ pro nátěr.</p>
              <h3>Postup nanášení</h3>
              <ul>
                <li>Stěnu nejprve zbav prachu – stačí suchý smeták nebo vysavač s kartáčovým nástavcem</li>
                <li>Penetraci naneste válečkem nebo štětcem rovnoměrně po celé ploše, včetně rohů a styků se stropem</li>
                <li>Dodrž technologickou přestávku podle výrobce, obvykle 4–6 hodin na nových omítkách</li>
                <li>Po zaschnutí přejeď rukou po stěně – povrch by neměl výrazně „pudrovat“</li>
              </ul>
              <p>Přesné množství penetrace si snadno spočítáš v naší <Link href="/kalkulacky/kolik-primeru" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačce penetrace</Link> – stačí zadat plochu stěn a typ podkladu. Více k tématu najdeš i v článku <Link href="/blog/penetrace-pred-malovanim" style={{ color: "#2a6496", textDecoration: "underline" }}>Penetrace před malováním</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Penetraci nikdy nenanášej na ještě vlhkou omítku – uzavřeš tím vlhkost pod nátěrem a riskuješ odlupování barvy v následujících měsících.</div>
            </section>

            <section id="typy-omitek">
              <h2>Příprava podle typu omítky</h2>
              <h3>Sádrová omítka</h3>
              <p>Sádrové omítky jsou hladké, méně savé než vápenné a obvykle stačí klasická akrylátová penetrace. Před nátěrem zkontroluj, zda je povrch zbroušený a bez prachu – sádrová moučka se snadno usazuje a může způsobit nepřilnavost barvy.</p>
              <h3>Vápenocementová omítka</h3>
              <p>Tyto omítky bývají hrubší a savější, často mají i drobné nerovnosti. Doporučuje se penetrace s hloubkovým průnikem, která zpevní povrch a snižuje riziko křídování. Vzhledem k cementové složce mají vyšší pH, takže i barva musí být alkalicky odolná.</p>
              <h3>Silikátová fasáda</h3>
              <p>U fasádních silikátových omítek je doba zrání ještě důležitější – nátěr se musí chemicky vázat s podkladem (tzv. silikatizace), což probíhá jen při dostatečné vlhkosti a teplotě nad 8 °C. Fasádu před nátěrem nech dozrát minimálně 2–3 týdny a používej výhradně silikátové nebo silikon-silikátové barvy, jinak nátěr nebude správně držet.</p>
            </section>

            <section id="ph">
              <h2>Vysoké pH nové omítky a alkalicky odolné barvy</h2>
              <p>Čerstvá vápenná i cementová omítka má pH kolem 12–13, tedy silně alkalické prostředí. Pokud zdivo ještě obsahuje zbytkovou vlhkost, alkalické látky se mohou s touto vlhkostí dostávat až na povrch a reagovat s pigmenty a pojivy v barvě – výsledkem jsou žlutavé nebo hnědé skvrny, tzv. mapy, a v horších případech i ztráta přídržnosti nátěru.</p>
              <p>Proto se na nové omítky používají alkalicky odolné penetrace a barvy, často s označením pro „nové stavby“ nebo s vyšší odolností proti vápenným výluhům. Tyto přípravky vydrží kontakt s vysokým pH bez degradace a zároveň propustí zbytkovou vlhkost ven, takže se zdivo může dál odvětrávat i po vymalování.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejsi jistý, zda je omítka dostatečně vyzrálá, zvol raději difuzně otevřenou (prodyšnou) barvu – propustí vlhkost ven a snižuje riziko problémů, i kdyby zdivo ještě nebylo úplně suché.</div>
            </section>

            <section id="prvni-malovani">
              <h2>První malování – postup a vrstvy</h2>
              <p>Po zaschnutí penetrace následuje samotné malování. U nových omítek se osvědčuje dvouvrstvý postup:</p>
              <ol>
                <li><strong>První vrstva</strong> – barvu mírně rozřeď podle doporučení výrobce (obvykle 5–10 % vody). Ředěná barva lépe vnikne do struktury a vyrovná případné drobné rozdíly v savosti, které penetrace nezachytila.</li>
                <li><strong>Technologická přestávka</strong> – nech první vrstvu zaschnout podle dat na obalu, typicky 4–8 hodin, ideálně přes noc.</li>
                <li><strong>Druhá vrstva</strong> – naneste neředěnou barvu pro plné krytí a jednotný odstín. Maluj systematicky, vždy „mokré do mokrého“, abys předešel viditelným přechodům.</li>
              </ol>
              <p>U sytých nebo tmavých odstínů, případně pokud podklad i přes penetraci stále výrazně prosvítá, může být potřeba i třetí vrstva. V takovém případě je lepší použít podkladovou barvu v odstínu blízkém finální barvě, než nanášet více vrstev finálního nátěru.</p>
            </section>

            <section id="problemy">
              <h2>Časté problémy a jak se jim vyhnout</h2>
              <h3>Mapy a skvrny</h3>
              <p>Většinou jde o důsledek nerovnoměrné savosti nebo zbytkové vlhkosti reagující s alkáliemi v omítce. Řešením je kvalitní penetrace s hloubkovým průnikem a dostatečná doba zrání před nátěrem.</p>
              <h3>Praskliny po vyschnutí</h3>
              <p>Drobné vlasové praskliny (tzv. mapy z vysychání) vznikají, když omítka schne příliš rychle nebo nerovnoměrně – například při přímém slunci nebo silném průvanu. Pokud se objeví ještě před malováním, je třeba je přebrousit a vyspravit, jinak se po nátěru zviditelní.</p>
              <h3>Prosvítání podkladu</h3>
              <p>Pokud i po dvou vrstvách barva nedostatečně kryje a místy prosvítá šedý nebo bílý podklad omítky, příčinou je obvykle příliš ředěná barva nebo nedostatečná penetrace. Pomůže třetí vrstva nebo použití podkladové barvy před finálním nátěrem.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud váháš, jestli je omítka už dost vyzrálá, raději počkej o týden déle. Nátěr na nevyzrálé omítce se často musí po pár měsících kompletně opravovat – a to vyjde mnohem dráž než pár dní čekání navíc.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak dlouho musí nová omítka zrát před malováním?", a: "Sádrová omítka potřebuje obvykle 1–2 týdny na 1 cm tloušťky, vápenocementová a vápenná omítka 2–4 týdny na 1 cm, podle vlhkosti a teploty v místnosti. Silikátová fasáda by měla zrát alespoň 2–3 týdny před nátěrem." },
                  { q: "Jak zjistím, jestli je omítka už suchá?", a: "Orientačně poslouží přiložení dlaně – studená a vlhká omítka ještě nedosychá. Dál se hodí test fólií přilepenou na noc (kondenzace = vlhko uvnitř) nebo vlhkoměr na zdivo, ideálně by vlhkost měla klesnout pod 3–5 % hmotnostních." },
                  { q: "Proč má nová omítka vysoké pH a co to znamená pro barvu?", a: "Čerstvá vápenná a cementová omítka má pH 12–13 a alkalická vlhkost může napadat pigmenty a pojiva běžných barev. Proto se na novou omítku používá alkalicky odolná penetrace a barva, jinak hrozí žluté mapy a špatná přídržnost." },
                  { q: "Musím novou omítku před malováním penetrovat?", a: "Ano, téměř vždy. Nová omítka je velmi savá a nerovnoměrně přijímá barvu, což vede k mapám a prosvítání. Penetrace s hloubkovým průnikem sjednotí savost, zpevní povrch a sníží spotřebu finální barvy." },
                  { q: "Kolik vrstev barvy potřebuje nová omítka?", a: "Po penetraci se obvykle nanášejí dvě vrstvy malby. První vrstva se mírně ředí podle doporučení výrobce, druhá se nanáší neředěná pro plné krytí a rovnoměrný odstín." },
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
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#zrani">Doba zrání omítky</a></li>
                <li><a href="#vlhkost">Ověření vlhkosti zdiva</a></li>
                <li><a href="#penetrace">Penetrace nové omítky</a></li>
                <li><a href="#typy-omitek">Příprava podle typu omítky</a></li>
                <li><a href="#ph">Vysoké pH a barvy</a></li>
                <li><a href="#prvni-malovani">První malování</a></li>
                <li><a href="#problemy">Časté problémy</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>20 článků →</span></Link>
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
