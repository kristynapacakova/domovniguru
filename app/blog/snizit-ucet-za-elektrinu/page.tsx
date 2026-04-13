import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak snížit účet za elektřinu doma – 12 tipů bez investic 2026",
  description: "Kde v domácnosti teče elektřina zbytečně? Stand-by spotřeba, neefektivní spotřebiče a špatné návyky – jak snížit účet za elektřinu o 20–40 % bez výměny spotřebičů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/snizit-ucet-za-elektrinu" },
  openGraph: { title: "Jak snížit účet za elektřinu doma 2026", description: "Kde teče elektřina zbytečně a jak to zastavit. 12 tipů bez investic.", url: "https://www.domovniguru.cz/blog/snizit-ucet-za-elektrinu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak snížit účet za elektřinu doma 2026", description: "Kde teče elektřina zbytečně a jak to zastavit. 12 tipů bez investic." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/snizit-ucet-za-elektrinu#article",
      "headline": "Jak snížit účet za elektřinu doma – 12 tipů bez investic 2026",
      "datePublished": "2026-04-13T08:00:00Z",
      "dateModified": "2026-04-13T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["jak snížit účet za elektřinu", "úspora elektřiny doma", "stand-by spotřeba elektřiny", "jak ušetřit elektřinu", "spotřeba elektřiny domácnost", "led žárovky úspora", "tarif elektřiny"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/snizit-ucet-za-elektrinu#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Kolik elektřiny spotřebuje průměrná česká domácnost?", "acceptedAnswer": { "@type": "Answer", "text": "Průměrná česká domácnost (3–4 osoby) spotřebuje 3 000–4 500 kWh ročně. Při ceně 5–6 Kč/kWh jde o 15 000–27 000 Kč ročně. Domácnosti s elektrickým ohřevem vody nebo přímotopy spotřebují 6 000–10 000 kWh." } },
        { "@type": "Question", "name": "Co nejvíce spotřebovává elektřinu v domácnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Největší spotřebičí jsou: ohřev vody (20–30 % celkové spotřeby), lednička (10–15 %), pračka a sušička (10–15 %), vaření (10 %), svícení (5–10 %), stand-by spotřeba všech spotřebičů (5–10 %). Vytápění elektřinou může tvořit 30–50 % celkové spotřeby." } },
        { "@type": "Question", "name": "Vyplatí se noční tarif elektřiny?", "acceptedAnswer": { "@type": "Answer", "text": "Noční tarif (D25d, D26d, D55d) se vyplatí pokud máte velký objem levné elektřiny — ohřev vody, akumulační kamna nebo dobíjení elektromobilu. Bez těchto spotřebičů je paušál za distribuci v dvousazbovém tarifu vyšší a celkový účet může být paradoxně vyšší." } },
      ]
    }
  ]
};

const RELATED = [
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak vybrat správnou LED žárovku", href: "/blog/jak-vybrat-led-zarovku", read: "5 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "7 min" },
  { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
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
              <span>Úspora elektřiny</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak snížit účet za elektřinu doma – bez výměny spotřebičů</h1>
              <p className="article-lead">Průměrná domácnost platí za elektřinu 15 000–27 000 Kč ročně. Přitom 20–30 % z toho teče zbytečně — stand-by spotřeba, špatné návyky a nevhodný tarif. Tady je kde ušetřit.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/snizit-ucet-za-elektrinu" title="Jak snížit účet za elektřinu doma – 12 tipů bez investic 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 205" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="205" fill="#faf8f0"/>
                <text x="380" y="25" textAnchor="middle" fontSize="11" fill="#888070" fontWeight="700" letterSpacing="0.08em">KDE TEČE ELEKTŘINA V PRŮMĚRNÉ DOMÁCNOSTI</text>

                {/* Koláčový diagram — přibližný */}
                {[
                  { label: "Ohřev vody", pct: 25, color: "#e07040", startAngle: 0 },
                  { label: "Lednička", pct: 13, color: "#4a90d9", startAngle: 90 },
                  { label: "Pračka + sušička", pct: 13, color: "#5a9e6f", startAngle: 137 },
                  { label: "Vaření", pct: 10, color: "#f59e0b", startAngle: 184 },
                  { label: "Svícení", pct: 9, color: "#9b6fd4", startAngle: 220 },
                  { label: "Stand-by", pct: 8, color: "#e07a9f", startAngle: 252 },
                  { label: "Ostatní", pct: 22, color: "#a8a090", startAngle: 281 },
                ].map(({label, pct, color, startAngle}, i) => {
                  const cx = 200, cy = 115, r = 75;
                  const endAngle = startAngle + pct * 3.6;
                  const startRad = (startAngle - 90) * Math.PI / 180;
                  const endRad = (endAngle - 90) * Math.PI / 180;
                  const x1 = cx + r * Math.cos(startRad);
                  const y1 = cy + r * Math.sin(startRad);
                  const x2 = cx + r * Math.cos(endRad);
                  const y2 = cy + r * Math.sin(endRad);
                  const largeArc = pct > 50 ? 1 : 0;
                  const midRad = (startRad + endRad) / 2;
                  const lx = cx + (r + 20) * Math.cos(midRad);
                  const ly = cy + (r + 20) * Math.sin(midRad);
                  return (
                    <g key={i}>
                      <path d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`} fill={color} opacity="0.85"/>
                      {pct >= 9 && <text x={lx} y={ly+3} textAnchor="middle" fontSize="8" fill={color} fontWeight="700">{pct}%</text>}
                    </g>
                  );
                })}

                {/* Legenda */}
                {[
                  { label: "Ohřev vody – 25 %", color: "#e07040" },
                  { label: "Lednička – 13 %", color: "#4a90d9" },
                  { label: "Pračka + sušička – 13 %", color: "#5a9e6f" },
                  { label: "Vaření – 10 %", color: "#f59e0b" },
                  { label: "Svícení – 9 %", color: "#9b6fd4" },
                  { label: "Stand-by – 8 %", color: "#e07a9f" },
                  { label: "Ostatní – 22 %", color: "#a8a090" },
                ].map(({label, color}, i) => (
                  <g key={i} transform={`translate(320, ${40 + i * 22})`}>
                    <rect x="0" y="0" width="12" height="12" rx="2" fill={color} opacity="0.85"/>
                    <text x="18" y="10" fontSize="10" fill="#4a4a40">{label}</text>
                  </g>
                ))}

                {/* Stand-by šipka a popis */}
                <rect x="550" y="160" width="190" height="36" rx="6" fill="#e07a9f" opacity="0.1" stroke="#e07a9f" strokeWidth="0.8"/>
                <text x="645" y="178" textAnchor="middle" fontSize="9" fill="#b05070" fontWeight="700">⚡ Stand-by = zbytečných 8 %</text>
                <text x="645" y="191" textAnchor="middle" fontSize="8" fill="#b05070">= 1 200–2 000 Kč/rok za nic</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#standby">Stand-by spotřeba – tichý zloděj</a></li>
                <li><a href="#osvetleni">Osvětlení – přechod na LED</a></li>
                <li><a href="#lednicka">Lednička a mraznička</a></li>
                <li><a href="#pracka">Pračka a myčka</a></li>
                <li><a href="#ohrev">Ohřev vody</a></li>
                <li><a href="#tarif">Správný tarif elektřiny</a></li>
                <li><a href="#navyky">Návyky které šetří</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="standby">
              <h2>Stand-by spotřeba – tichý zloděj v zásuvce</h2>
              <p>Každý spotřebič v pohotovostním režimu spotřebovává elektřinu. Televize, set-top box, nabíječky, tiskárna, mikrovlnka s displejem — to vše tikne 24 hodin denně. V průměrné domácnosti jde stand-by spotřeba na <strong>200–400 kWh ročně</strong>, tedy 1 000–2 400 Kč za elektřinu která jde doslova do vzduchu.</p>
              <ul>
                <li><strong>Televize v stand-by:</strong> 1–8 W × 8 760 hodin = 9–70 kWh ročně (45–350 Kč)</li>
                <li><strong>Set-top box:</strong> 5–15 W nepřetržitě = 44–131 kWh ročně (220–790 Kč)</li>
                <li><strong>Router:</strong> 5–15 W – zde je stand-by nevyhnutelný, ale starší routery spotřebují 2–3× více než nové</li>
                <li><strong>Nabíječky v zásuvce bez telefonu:</strong> 0,1–0,5 W každá — drobnost, ale má jich každý 5–10</li>
              </ul>
              <p>Řešení: <strong>zásuvkové lišty s vypínačem</strong> (100–300 Kč). Večer jedním stiskem odpojíš celý home entertainment systém. U set-top boxů zvol model který se skutečně vypíná (ne jen přepíná do stand-by).</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pořiď si měřič spotřeby do zásuvky (150–400 Kč) a zjisti co u tebe skutečně spotřebovává nejvíc. Výsledky tě překvapí — typicky je největším viníkem set-top box nebo starý router.</div>
            </section>

            <section id="osvetleni">
              <h2>Osvětlení – přechod na LED žárovky</h2>
              <p>Pokud ještě nemáš LED žárovky, toto je jednorázová investice s nejkratší návratností ze všeho. LED spotřebuje 5–8× méně elektřiny než klasická žárovka a vydrží 15–25× déle.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ žárovky</th><th>Příkon</th><th>Spotřeba za rok (4 hod/den)</th><th>Cena elektřiny/rok</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Klasická žárovka 60W</strong></td><td>60 W</td><td>87,6 kWh</td><td>~525 Kč</td></tr>
                    <tr><td><strong>Halogenová 42W</strong></td><td>42 W</td><td>61,3 kWh</td><td>~368 Kč</td></tr>
                    <tr><td><strong>LED 9W (= 60W)</strong></td><td>9 W</td><td>13,1 kWh</td><td>~79 Kč</td></tr>
                    <tr><td><strong>Úspora LED vs. klasická</strong></td><td>–51 W</td><td>–74,5 kWh</td><td><strong>–446 Kč ročně</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Při 15 žárovkách v domácnosti je roční úspora při přechodu na LED <strong>4 000–7 000 Kč ročně</strong>. LED žárovka stojí 50–150 Kč a vydrží 15 000–25 000 hodin — tedy 10–17 let při 4 hodinách denně.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při výběru LED žárovek sleduj Kelvinů (barva světla) — 2 700 K = teplá bílá (vhodná do obýváku a ložnice), 4 000 K = neutrální bílá (kuchyň, pracovna), 6 000 K = studená bílá (garáž, sklep). Více v článku <Link href="/blog/jak-vybrat-led-zarovku" style={{color:"#5a9e6f",fontWeight:600}}>Jak vybrat správnou LED žárovku →</Link></div>
            </section>

            <section id="lednicka">
              <h2>Lednička a mraznička – běží 24/7</h2>
              <p>Lednička je jediný spotřebič v domácnosti který nikdy nevypneš. Za rok spotřebuje 200–500 kWh (1 000–3 000 Kč), záleží na stáří, velikosti a umístění.</p>
              <ul>
                <li><strong>Umístění:</strong> Lednička vedle sporáku, myčky nebo na přímém slunci spotřebuje o 10–30 % více. Ideální je chladné místo s volnou cirkulací vzduchu kolem kondenzátoru.</li>
                <li><strong>Teplota:</strong> Lednička 4–5 °C, mrazák –18 °C. Každý stupeň navíc zvyšuje spotřebu o 6 %. Přemrzlá lednička (+2 °C) spotřebuje o 12 % víc.</li>
                <li><strong>Odmrazování:</strong> Iní vrstva na mrazáku silnější než 5 mm zvyšuje spotřebu o 30 %. Odmrazuj pravidelně.</li>
                <li><strong>Těsnění dveří:</strong> Poškozené těsnění způsobuje úniky chladného vzduchu. Test: vlož papír do zavřené lednice — pokud jde vytáhnout bez odporu, těsnění je opotřebované (výměna 200–500 Kč).</li>
                <li><strong>Stáří spotřebiče:</strong> Lednička starší 15 let třídy A spotřebuje 2–3× více než nová A+++. Výměna za novou se vrátí za 4–7 let na elektřině.</li>
              </ul>
            </section>

            <section id="pracka">
              <h2>Pračka, myčka a sušička – velcí spotřebitelé</h2>
              <p>Pračka a myčka spotřebují 80–90 % energie na ohřev vody. Nejjednodušší úspora: <strong>pere a myj na nižší teplotu.</strong></p>
              <ul>
                <li><strong>Praní na 30 °C místo 60 °C:</strong> Úspora 50–60 % energie na jeden cyklus. Moderní prací prostředky fungují stejně dobře na 30 °C.</li>
                <li><strong>Plné náplně:</strong> Půl prádelny za cenu celé. Pračka spotřebuje téměř stejně energie na poloprázdný i plný buben.</li>
                <li><strong>Eco program:</strong> Trvá déle ale spotřebuje o 30–50 % méně energie. Ideální pro pravidelné praní.</li>
                <li><strong>Sušička:</strong> Tepelné čerpadlo v sušičce (třída A+++) spotřebuje 2–3× méně než kondenzační. Pokud kupuješ novou, investice se vrátí za 3–5 let.</li>
                <li><strong>Myčka vs. ruční mytí:</strong> Moderní myčka spotřebuje 8–12 litrů vody a 0,8–1,2 kWh. Ruční mytí pro 4 osoby spotřebuje 40–80 litrů horké vody. Myčka vychází levněji.</li>
              </ul>
            </section>

            <section id="ohrev">
              <h2>Ohřev vody – největší položka po vytápění</h2>
              <p>Pokud ohříváš vodu elektřinou (bojler), jde o 20–30 % celkové spotřeby elektřiny v domácnosti.</p>
              <ul>
                <li><strong>Správná teplota bojleru:</strong> 55–60 °C je hygienické minimum (eliminace bakterie Legionella). Výše nastavené teploty jen plýtvají energií.</li>
                <li><strong>Noční tarif pro bojler:</strong> Pokud máš dvousazbový tarif a bojler s časovačem, nastav ohřev na noční hodiny (levnější proud). Úspora 30–40 % nákladů na ohřev vody.</li>
                <li><strong>Izolace bojleru:</strong> Starší bojler bez dobré izolace ztrácí teplo — voda se samovolně ochlazuje a bojler se doohřívá i bez odběru. Nový bojler má výrazně lepší izolaci.</li>
                <li><strong>Sprcha vs. koupel:</strong> Koupel spotřebuje 100–150 litrů teplé vody, sprcha 40–60 litrů. Přechod z každodenní koupele na sprchu ušetří 200–400 kWh ročně.</li>
              </ul>
            </section>

            <section id="tarif">
              <h2>Správný tarif elektřiny – platíš za svůj profil spotřeby?</h2>
              <p>Výběr špatného tarifu může znamenat stovky až tisíce korun přeplatku ročně. Distributoři nabízejí různé sazby pro různé profily spotřeby.</p>
              <ul>
                <li><strong>Jednosazbový tarif (D01d, D02d):</strong> Jedna cena elektřiny celý den. Vhodný pro průměrné domácnosti bez velkých noční spotřebičů.</li>
                <li><strong>Dvousazbový tarif (D25d, D26d):</strong> Levnější noční proud po dobu 8 nebo 16 hodin. Vyplatí se při bojleru, akumulačních kamnech nebo dobíjení elektromobilu. Pozor — fixní poplatek za distribuci je vyšší.</li>
                <li><strong>Porovnání dodavatelů:</strong> Ceny se liší až o 30 %. Použij srovnávač (napr. Elektrina.cz) a porovnej celkový roční náklad, ne jen cenu za kWh.</li>
                <li><strong>Změna dodavatele:</strong> Ze zákona máš nárok na změnu dodavatele kdykoli. Proces trvá max. 3 týdny a distribuce se nepřerušuje.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Než změníš tarif, zjisti svůj profil spotřeby z ročního vyúčtování. Přejít na dvousazbový tarif bez velké noční spotřeby může celkový účet zvýšit kvůli vyššímu paušálu.</div>
            </section>

            <section id="navyky">
              <h2>Návyky které šetří – bez nulové investice</h2>
              <ul>
                <li><strong>Nevynechávej víko při vaření:</strong> Vaření s pokličkou spotřebuje o 30 % méně energie. Voda se uvaří rychleji a teplo neodchází do vzduchu.</li>
                <li><strong>Mikrovlnka místo trouby:</strong> Mikrovlnka spotřebuje 5–10× méně energie na ohřev malých porcí. Trouba je efektivní jen při plném využití.</li>
                <li><strong>Nenechávej troubu předehřívat zbytečně:</strong> Většina moderních trub nepotřebuje předehřívání. Výjimka je pečivo kde je přesná teplota klíčová.</li>
                <li><strong>Plná myčka a pračka:</strong> Pračka na polo prázdná spotřebuje 80 % energie plně naložené. Počkej na plnou náplň.</li>
                <li><strong>Monitor vs. spánek počítače:</strong> Monitor v stand-by spotřebuje 1–5 W, v normálním provozu 20–100 W. Nastav automatický přechod do spánku po 10 minutách nečinnosti.</li>
                <li><strong>Žehličku vypínej včas:</strong> Žehlička si podrží teplo ještě 5–10 minut po vypnutí. Dožehlej zbývající kousky bez elektřiny.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Kolik elektřiny spotřebuje průměrná česká domácnost?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Průměrná česká domácnost (3–4 osoby) spotřebuje 3 000–4 500 kWh ročně. Při ceně 5–6 Kč/kWh jde o 15 000–27 000 Kč ročně. Domácnosti s elektrickým ohřevem vody nebo přímotopy spotřebují 6 000–10 000 kWh.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co nejvíce spotřebovává elektřinu v domácnosti?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Největší spotřebiče jsou: ohřev vody (20–30 % celkové spotřeby), lednička (10–15 %), pračka a sušička (10–15 %), vaření (10 %), svícení (5–10 %), stand-by spotřeba všech spotřebičů (5–10 %). Vytápění elektřinou může tvořit 30–50 % celkové spotřeby.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Vyplatí se noční tarif elektřiny?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Noční tarif (D25d, D26d, D55d) se vyplatí pokud máte velký objem levné elektřiny — ohřev vody, akumulační kamna nebo dobíjení elektromobilu. Bez těchto spotřebičů je paušál za distribuci v dvousazbovém tarifu vyšší a celkový účet může být paradoxně vyšší.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak zjistím co u mě nejvíce spotřebovává elektřinu?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejjednodušší způsob je měřič spotřeby do zásuvky (150–400 Kč v každém elektru). Zastrč ho mezi zásuvku a spotřebič a po 24–48 hodinách vidíš přesnou spotřebu v kWh. Pro celou domácnost existují chytré elektroměry nebo šoupátkové měřiče na DIN liště rozvaděče.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Má smysl přejít na jiného dodavatele elektřiny?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, rozdíly mezi dodavateli mohou být 20–30 % na ceně silové elektřiny. Distribuce (přenos elektřiny) je fixní — stejná u všech dodavatelů. Porovnej celkový roční náklad na portálech jako Elektrina.cz nebo Energie.cz. Změna trvá max. 3 týdny a je ze zákona bezplatná.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/snizit-ucet-za-elektrinu" title="Jak snížit účet za elektřinu doma – 12 tipů bez investic 2026" />

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
                <li><a href="#standby">Stand-by spotřeba</a></li>
                <li><a href="#osvetleni">Osvětlení – LED</a></li>
                <li><a href="#lednicka">Lednička a mraznička</a></li>
                <li><a href="#pracka">Pračka a myčka</a></li>
                <li><a href="#ohrev">Ohřev vody</a></li>
                <li><a href="#tarif">Správný tarif</a></li>
                <li><a href="#navyky">Návyky</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>20 článků →</span></Link>
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
        .hero-illustration{margin:28px 0 36px;border-radius:12px;overflow:hidden;border:1px solid var(--border)}
        .hero-svg{width:100%;height:auto;display:block}
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
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}
        .faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
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
      `}</style>
    </>
  );
}
