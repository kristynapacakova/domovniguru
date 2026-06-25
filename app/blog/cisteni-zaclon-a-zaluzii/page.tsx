import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vyčistit závěsy, záclony a žaluzie",
  description: "Praní záclon a závěsů podle materiálu, čištění látkových rolet a žaluzií, prevence prachu a alergenů. Jak často čistit textil a stínění v bytě.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/cisteni-zaclon-a-zaluzii" },
  openGraph: { title: "Jak vyčistit závěsy, záclony a žaluzie", description: "Praní záclon a závěsů podle materiálu, čištění látkových rolet a žaluzií, prevence prachu a alergenů. Jak často čistit textil a stínění v bytě.", url: "https://www.domovniguru.cz/blog/cisteni-zaclon-a-zaluzii", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-25T08:00:00Z", modifiedTime: "2026-06-25T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vy%C4%8Distit%20z%C3%A1v%C4%9Bsy%2C%20z%C3%A1clony%20a%20%C5%BEalu%C5%BEie&cat=blog", width: 1200, height: 630, alt: "Jak vyčistit závěsy, záclony a žaluzie" }] },
  twitter: { card: "summary_large_image", title: "Jak vyčistit závěsy, záclony a žaluzie", description: "Praní záclon a závěsů podle materiálu, čištění látkových rolet a žaluzií, prevence prachu a alergenů. Jak často čistit textil a stínění v bytě." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/cisteni-zaclon-a-zaluzii#article", "headline": "Jak vyčistit závěsy, záclony a žaluzie", "datePublished": "2026-06-25T08:00:00Z", "dateModified": "2026-06-25T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["čištění záclon", "praní závěsů", "čištění žaluzií", "látkové rolety čištění", "prevence prachu a alergenů", "venkovní žaluzie čištění"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak vyčistit závěsy, záclony a žaluzie", "item": "https://www.domovniguru.cz/blog/cisteni-zaclon-a-zaluzii" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jak často mám prát záclony a závěsy?", "acceptedAnswer": { "@type": "Answer", "text": "Záclony v kuchyni nebo u kuřáků je vhodné prát jednou za 2–3 měsíce, v ostatních místnostech stačí 2× ročně. Těžké závěsy z plotny a velurových látek se obvykle čistí jednou ročně, ideálně na začátku topné sezóny a po jejím skončení." } }, { "@type": "Question", "name": "Mohu prát záclony v pračce?", "acceptedAnswer": { "@type": "Answer", "text": "Většinu záclon z polyesteru nebo voálu lze prát v pračce na 30–40 °C v síťovaném pracím sáčku, který chrání tenkou látku před zachycením v bubnu. Závěsy z těžších materiálů jako velur, brokát nebo s podšívkou je lepší nechat vyčistit v čistírně nebo prát jen ručně podle visačky." } }, { "@type": "Question", "name": "Jak vyčistím horizontální hliníkové žaluzie bez sundání?", "acceptedAnswer": { "@type": "Answer", "text": "Žaluzie zavři do jedné roviny a otři každou lamelu utěrkou z mikrovlákna nebo speciálním kartáčem na žaluzie ve tvaru kleští, který očistí obě strany lamely najednou. Pro důkladnější čištění lze žaluzie sundat a namočit ve vaně s roztokem vody a saponátu." } }, { "@type": "Question", "name": "Jak čistit venkovní žaluzie a rolety?", "acceptedAnswer": { "@type": "Answer", "text": "Venkovní žaluzie a rolety čisti hadicí s tlakem vody a měkkým kartáčem na dlouhé tyči, ideálně při zatažených lamelách, aby se dostalo i mezi ně. Silnější znečištění a usazený prach odstraní roztok vody se saponátem, po umytí je nutné nechat žaluzie pořádně oschnout, než je zase zatáhneš." } }, { "@type": "Question", "name": "Jak často bych měl čistit žaluzie a rolety, abych omezil alergeny?", "acceptedAnswer": { "@type": "Answer", "text": "Pro domácnosti s alergiky se doporučuje rychlé otření prachu jednou týdně a důkladnější čištění s vlhkým hadříkem nebo namočením jednou za 4–6 týdnů. Pravidelnost je důležitější než intenzita jednoho čištění, protože prach a roztoči se hromadí kontinuálně." } }] }] };

const RELATED = [
  { title: "Jak se zbavit vlhkosti v bytě", href: "/blog/zbavit-se-vlhkosti-v-byte", read: "5 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "4 min" },
  { title: "Sušení prádla v bytě bez plísně", href: "/blog/suseni-pradla-v-byte-bez-plisne", read: "4 min" },
  { title: "Jak vyčistit pračku", href: "/blog/jak-vycistit-pracku", read: "4 min" },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Čištění závěsů, záclon a žaluzií</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vyčistit závěsy, záclony a žaluzie</h1>
              <p className="article-lead">Záclony, závěsy a žaluzie patří k textiliím a doplňkům, na které se při běžném úklidu nejsnáz zapomíná – a přitom zachycují obrovské množství prachu, pylu a dalších alergenů z venkovního i vnitřního vzduchu. Tady je přehled, jak na ně podle materiálu a typu, aby vydržely dlouho a doma se lépe dýchalo.</p>
              <div className="article-meta-row"><span>Aktualizováno: 25. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#zaclony">Praní záclon a závěsů</a></li>
                <li><a href="#rolety">Čištění látkových rolet</a></li>
                <li><a href="#horizontalni">Čištění horizontálních žaluzií</a></li>
                <li><a href="#vertikalni">Čištění vertikálních žaluzií</a></li>
                <li><a href="#venkovni">Čištění venkovních žaluzií a rolet</a></li>
                <li><a href="#frekvence">Jak často čistit</a></li>
                <li><a href="#prevence">Prevence prachu a alergenů</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="zaclony">
              <h2>Praní záclon a závěsů</h2>
              <p>Záclony a závěsy fungují jako filtr prachu a pylu, který se snaží dostat do bytu z venku, a zároveň zachycují kouř, pachy a prach z vnitřního prostředí. Postup praní se liší podle materiálu.</p>
              <ul>
                <li><strong>Voál a polyester</strong> – pračka na 30–40 °C, ideálně v síťovaném pracím sáčku, který chrání tenkou látku před zachycením a poškozením v bubnu</li>
                <li><strong>Bavlna a len</strong> – běžné praní na 40 °C, kontrola visačky kvůli případnému srážení, žehlení za vlhka usnadní hlazení</li>
                <li><strong>Velur, brokát a podšívkové závěsy</strong> – obvykle jen chemické čištění nebo profesionální péče, ruční praní hrozí deformací a ztrátou tvaru</li>
                <li><strong>Sušení</strong> – záclony věšej zpět na tyč ještě lehce vlhké, váha látky je vyrovná a omezí se mačkání, případně klasické sušení rozprostřené naležato na rovném povrchu</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před praním vždy vyklepej nebo vysaj záclony nasucho – odstraníš tím hrubý prach a usazený pyl, čímž se sníží zatížení pracího cyklu a voda zůstane čistší.</div>
            </section>

            <section id="rolety">
              <h2>Čištění látkových rolet</h2>
              <p>Látkové rolety (roletky) jsou oblíbené pro jednoduchost a minimalistický vzhled, ale na rozdíl od záclon je obvykle nelze prát v pračce, protože mají vyztuženou nebo lakovanou konstrukci a kovové komponenty.</p>
              <ul>
                <li><strong>Suché čištění</strong> – vysavač s kartáčovým nástavcem nebo měkký smetáček, pro běžnou údržbu jednou za 2–4 týdny</li>
                <li><strong>Mokré čištění skvrn</strong> – lokálně namoč vlhkým hadříkem s trochou saponátu, roletu nech rozvinutou ve svislé poloze, aby skvrna nezatekla a nevytvořila kruh</li>
                <li><strong>Nesundavat zbytečně z držáků</strong> – pokud to není nutné, čisti roletu na místě, opakovaná demontáž zvyšuje riziko poškození mechanismu</li>
                <li><strong>Blackout a termoizolační rolety</strong> – speciální povrchová úprava omezuje vlhké čištění, doporučuje se primárně suché čištění a jen lehké navlhčení v případě potřeby</li>
              </ul>
            </section>

            <section id="horizontalni">
              <h2>Čištění horizontálních žaluzií</h2>
              <p>Horizontální žaluzie (hliníkové, dřevěné nebo plastové lamely) zachycují prach na ploché horní straně každé lamely, kde se postupně tvoří souvislá vrstva.</p>
              <ul>
                <li><strong>Suché čištění</strong> – žaluzii zavři, utírej jednotlivé lamely utěrkou z mikrovlákna nebo použij vysavač s úzkou kartáčovou hubicí</li>
                <li><strong>Speciální kartáč na žaluzie</strong> – nástavec ve tvaru kleští s mikrovlákny na obou stranách umí očistit obě strany lamely jedním tahem</li>
                <li><strong>Namáčení lamel</strong> – při větším znečištění žaluzii sundej, nech namočit ve vaně s vlažnou vodou a saponátem na 15–20 minut, opatrně prokartáčuj a důkladně opláchni</li>
                <li><strong>Dřevěné lamely</strong> – pouze suché nebo lehce navlhčené čištění, voda způsobuje deformaci a praskání dřeva, namáčení se nedoporučuje</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Při utírání jednotlivých lamel postupuj systematicky shora dolů, abys nemusel čistit už hotové lamely podruhé od spadaného prachu.</div>
            </section>

            <section id="vertikalni">
              <h2>Čištění vertikálních žaluzií</h2>
              <p>Vertikální žaluzie (textilní nebo PVC pásy) se používají hlavně u velkých oken a balkonových dveří. Na rozdíl od horizontálních lamel jsou náchylnější k zachycení prachu na hraně a k elektrostatickému přitahování nečistot.</p>
              <ul>
                <li><strong>Vysávání</strong> – vysavač s kartáčovým nástavcem přejížděj shora dolů po každém pásu, žaluzie nechej zatažené do jedné roviny</li>
                <li><strong>Otírání vlhkým hadříkem</strong> – textilní pásy jsou často odolnější vůči vlhkému otírání než se zdá, přesto postupuj opatrně a nepřemáčej je</li>
                <li><strong>Sundání pásů na praní</strong> – některé textilní vertikální žaluzie lze pásy odepnout z háčků a opatrně vyprat ručně nebo v pračce na šetrném programu, podle doporučení výrobce</li>
                <li><strong>PVC pásy</strong> – snadno se otírají vlhkým hadříkem se saponátem, odolávají vodě lépe než textilní varianta</li>
              </ul>
            </section>

            <section id="venkovni">
              <h2>Čištění venkovních žaluzií a rolet</h2>
              <p>Venkovní žaluzie a rolety (typicky hliníkové nebo plastové) čelí dešti, prachu z ovzduší, případně i ptačímu trusu, a proto potřebují odlišný přístup než ty vnitřní.</p>
              <ul>
                <li><strong>Mytí hadicí</strong> – proud vody z hadice spláchne hrubé nečistoty, ideálně při zatažených lamelách, aby se dostal i mezi ně</li>
                <li><strong>Měkký kartáč na dlouhé tyči</strong> – pro důkladnější čištění a odstranění usazeného prachu nebo mechu na lamelách</li>
                <li><strong>Roztok se saponátem</strong> – na silnější znečištění, po umytí důkladně opláchni čistou vodou, aby na lamelách nezůstaly skvrny od saponátu</li>
                <li><strong>Důkladné osušení</strong> – před zatažením žaluzie nech lamely oschnout, vlhkost uzavřená v mechanismu podporuje korozi a tvorbu plísně</li>
                <li><strong>Vhodné období</strong> – čištění venkovních žaluzií se hodí spojit se sezónní přípravou domu, podobně jako řešíš okna a fasádu při <Link href="/blog/dum-priprava-na-leto" style={{ color: "#2a6496", textDecoration: "underline" }}>přípravě domu na léto</Link></li>
              </ul>
            </section>

            <section id="frekvence">
              <h2>Jak často čistit</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Běžná domácnost</th><th>Kuřáci / kuchyň / alergici</th></tr></thead>
                  <tbody>
                    <tr><td>Záclony</td><td>2× ročně</td><td>Jednou za 2–3 měsíce</td></tr>
                    <tr><td>Těžké závěsy</td><td>1× ročně</td><td>2× ročně</td></tr>
                    <tr><td>Látkové rolety</td><td>Suché čištění 1× měsíčně</td><td>Suché čištění 1× za 2 týdny</td></tr>
                    <tr><td>Horizontální / vertikální žaluzie</td><td>Otírání 1× měsíčně</td><td>Otírání 1× týdně</td></tr>
                    <tr><td>Venkovní žaluzie a rolety</td><td>2× ročně</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Spoj praní záclon s běžnou výměnou ložního prádla nebo s podzimní a jarní přípravou bytu – snáz si frekvenci zapamatuješ a nebudeš na ni zapomínat.</div>
            </section>

            <section id="prevence">
              <h2>Prevence prachu a alergenů</h2>
              <p>Záclony a žaluzie patří mezi hlavní zdroje domácího prachu a alergenů spolu s koberci a čalouněním. Pravidelná, i když rychlá péče výrazně omezuje množství prachu, který se v bytě recykluje vzduchem.</p>
              <ul>
                <li><strong>Pravidelné krátké větrání</strong> – pomáhá snižovat koncentraci prachu a vlhkosti v ovzduší, víc v článku o tom, jak <Link href="/blog/spravne-vetrat-byt" style={{ color: "#2a6496", textDecoration: "underline" }}>správně větrat byt</Link></li>
                <li><strong>Vysávání s HEPA filtrem</strong> – zachytí drobné částice prachu a alergenů, které by se jinak vrátily zpět do vzduchu</li>
                <li><strong>Omezení vlhkosti v bytě</strong> – vlhké prostředí podporuje množení roztočů a plísní na textiliích, viz tipy, jak <Link href="/blog/zbavit-se-vlhkosti-v-byte" style={{ color: "#2a6496", textDecoration: "underline" }}>se zbavit vlhkosti v bytě</Link></li>
                <li><strong>Volba materiálu</strong> – hladké, méně členěné textilie (voál, PVC pásy) zachycují méně prachu než silně strukturované nebo plyšové látky</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> U alergiků na roztoče se doporučuje volit raději omyvatelné žaluzie nebo rolety před těžkými textilními závěsy, které prach zadržují hlouběji a hůř se z nich odstraňuje.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jak často mám prát záclony a závěsy?", a: "Záclony v kuchyni nebo u kuřáků je vhodné prát jednou za 2–3 měsíce, v ostatních místnostech stačí 2× ročně. Těžké závěsy z plotny a velurových látek se obvykle čistí jednou ročně, ideálně na začátku topné sezóny a po jejím skončení." },
                  { q: "Mohu prát záclony v pračce?", a: "Většinu záclon z polyesteru nebo voálu lze prát v pračce na 30–40 °C v síťovaném pracím sáčku, který chrání tenkou látku před zachycením v bubnu. Závěsy z těžších materiálů jako velur, brokát nebo s podšívkou je lepší nechat vyčistit v čistírně nebo prát jen ručně podle visačky." },
                  { q: "Jak vyčistím horizontální hliníkové žaluzie bez sundání?", a: "Žaluzie zavři do jedné roviny a otři každou lamelu utěrkou z mikrovlákna nebo speciálním kartáčem na žaluzie ve tvaru kleští, který očistí obě strany lamely najednou. Pro důkladnější čištění lze žaluzie sundat a namočit ve vaně s roztokem vody a saponátu." },
                  { q: "Jak čistit venkovní žaluzie a rolety?", a: "Venkovní žaluzie a rolety čisti hadicí s tlakem vody a měkkým kartáčem na dlouhé tyči, ideálně při zatažených lamelách, aby se dostalo i mezi ně. Silnější znečištění a usazený prach odstraní roztok vody se saponátem, po umytí je nutné nechat žaluzie pořádně oschnout, než je zase zatáhneš." },
                  { q: "Jak často bych měl čistit žaluzie a rolety, abych omezil alergeny?", a: "Pro domácnosti s alergiky se doporučuje rychlé otření prachu jednou týdně a důkladnější čištění s vlhkým hadříkem nebo namočením jednou za 4–6 týdnů. Pravidelnost je důležitější než intenzita jednoho čištění, protože prach a roztoči se hromadí kontinuálně." },
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
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#zaclony">Praní záclon a závěsů</a></li>
                <li><a href="#rolety">Čištění látkových rolet</a></li>
                <li><a href="#horizontalni">Horizontální žaluzie</a></li>
                <li><a href="#vertikalni">Vertikální žaluzie</a></li>
                <li><a href="#venkovni">Venkovní žaluzie a rolety</a></li>
                <li><a href="#frekvence">Jak často čistit</a></li>
                <li><a href="#prevence">Prevence prachu a alergenů</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>28 článků →</span></Link>
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
