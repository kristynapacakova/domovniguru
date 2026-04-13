import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení 2026",
  description: "Kondenzace na oknech, vlhké stěny nebo plíseň? Jak změřit vlhkost, najít příčinu a trvale vyřešit problém s vlhkostí v bytě bez drahých rekonstrukcí.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/zbavit-se-vlhkosti-v-byte" },
  openGraph: { title: "Jak se zbavit vlhkosti v bytě 2026", description: "Kondenzace, vlhké stěny nebo plíseň – jak najít příčinu a trvale vyřešit vlhkost.", url: "https://www.domovniguru.cz/blog/zbavit-se-vlhkosti-v-byte", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-13T08:00:00Z", modifiedTime: "2026-04-13T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak se zbavit vlhkosti v bytě 2026", description: "Kondenzace, vlhké stěny nebo plíseň – jak najít příčinu a trvale vyřešit vlhkost." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/zbavit-se-vlhkosti-v-byte#article",
      "headline": "Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení 2026",
      "datePublished": "2026-04-13T08:00:00Z",
      "dateModified": "2026-04-13T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["jak se zbavit vlhkosti v bytě", "vlhkost v bytě", "kondenzace na oknech", "vlhké stěny", "odvlhčovač", "příčiny vlhkosti byt", "jak snížit vlhkost vzduchu"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/zbavit-se-vlhkosti-v-byte#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Jaká je ideální vlhkost vzduchu v bytě?", "acceptedAnswer": { "@type": "Answer", "text": "Ideální relativní vlhkost vzduchu v obytných prostorách je 40–60 %. Pod 30 % je vzduch příliš suchý — dráždí sliznice a způsobuje statickou elektřinu. Nad 65 % začíná riziko plísně, nad 70 % plíseň aktivně roste." } },
        { "@type": "Question", "name": "Proč mi kondenzuje voda na oknech?", "acceptedAnswer": { "@type": "Answer", "text": "Kondenzace na vnitřní straně okna znamená že vzduch v místnosti je příliš vlhký a okno je nejchladnější plocha kde vodní pára zkondenzuje. Řešení: zlepšit větrání, snížit zdroje vlhkosti (sušení prádla, vaření bez digestoře) a případně vyměnit okna za lepší izolační zasklení." } },
        { "@type": "Question", "name": "Pomáhá odvlhčovač proti plísni?", "acceptedAnswer": { "@type": "Answer", "text": "Odvlhčovač je účinné dočasné řešení — sníží vlhkost pod 60 % a zabrání růstu plísně. Není ale náhradou za větrání ani za odstranění příčiny. Pokud vlhkost pochází ze stavební závady (zatékání, tepelný most), odvlhčovač problém nevyřeší — jen potlačí příznaky." } },
      ]
    }
  ]
};

const RELATED = [
  { title: "Jak se zbavit plísně v bytě jednou provždy", href: "/blog/jak-odstranit-plisen-na-zdi", read: "10 min" },
  { title: "Jak správně větrat byt", href: "/blog/spravne-vetrat-byt", read: "6 min" },
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", read: "5 min" },
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
              <span>Vlhkost v bytě</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení</h1>
              <p className="article-lead">Kondenzace na oknech, vlhké fleky na stěnách nebo opakující se plíseň – to vše jsou příznaky přílišné vlhkosti. Ukážeme ti jak vlhkost změřit, najít její zdroj a trvale vyřešit problém.</p>
              <div className="article-meta-row"><span>Aktualizováno: 13. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-se-vlhkosti-v-byte" title="Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="210" fill="#f0f4f8"/>

                {/* ── VLHKOMĚR (vlevo) ── */}
                <g transform="translate(30, 20)">
                  <rect x="0" y="0" width="160" height="170" rx="10" fill="#fff" stroke="#d0d8e0" strokeWidth="1.2"/>
                  <text x="80" y="22" textAnchor="middle" fontSize="9" fill="#6a8a9a" fontWeight="700" letterSpacing="0.06em">VLHKOMĚR</text>

                  {/* Stupnice */}
                  {[
                    { pct: 20, label: "20%", color: "#f59e0b", y: 140 },
                    { pct: 40, label: "40%", color: "#5a9e6f", y: 118 },
                    { pct: 60, label: "60%", color: "#5a9e6f", y: 96 },
                    { pct: 70, label: "70%", color: "#f59e0b", y: 74 },
                    { pct: 90, label: "90%", color: "#e07a5f", y: 52 },
                  ].map(({label, color, y}) => (
                    <g key={y}>
                      <line x1="20" y1={y} x2="35" y2={y} stroke={color} strokeWidth="1.2"/>
                      <text x="40" y={y+4} fontSize="8" fill={color} fontWeight="600">{label}</text>
                    </g>
                  ))}

                  {/* Ukazatel — 75% — rizikové */}
                  <rect x="55" y="40" width="24" height="112" rx="4" fill="#e8f0f8" stroke="#c0d0e0" strokeWidth="0.8"/>
                  <rect x="55" y="71" width="24" height="81" rx="4" fill="#4a90d9" opacity="0.7"/>
                  <text x="67" y="155" textAnchor="middle" fontSize="10" fill="#3a6a9a" fontWeight="700">75 %</text>
                  <text x="67" y="165" textAnchor="middle" fontSize="7.5" fill="#e07a5f" fontWeight="600">⚠️ riziko</text>

                  {/* Ideální zóna highlight */}
                  <rect x="90" y="93" width="60" height="28" rx="3" fill="#5a9e6f" opacity="0.1" stroke="#5a9e6f" strokeWidth="0.8"/>
                  <text x="120" y="104" textAnchor="middle" fontSize="7.5" fill="#3a7e4f" fontWeight="700">IDEÁLNÍ</text>
                  <text x="120" y="115" textAnchor="middle" fontSize="7" fill="#3a7e4f">40–60 %</text>
                </g>

                {/* šipka */}
                <g transform="translate(202, 95)">
                  <path d="M0 15 L45 15" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M39 9 L47 15 L39 21" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* ── ZDROJE VLHKOSTI (střed) ── */}
                <g transform="translate(258, 15)">
                  <rect x="0" y="0" width="220" height="175" rx="10" fill="#fff" stroke="#d0d8e0" strokeWidth="1.2"/>
                  <text x="110" y="20" textAnchor="middle" fontSize="9" fill="#6a7a8a" fontWeight="700" letterSpacing="0.06em">ZDROJE VLHKOSTI / DEN</text>

                  {[
                    { icon: "🚿", label: "Sprchování", value: "2,0 l", color: "#4a90d9" },
                    { icon: "🍳", label: "Vaření", value: "1,0 l", color: "#f59e0b" },
                    { icon: "👕", label: "Sušení prádla", value: "2,0 l", color: "#9b6fd4" },
                    { icon: "🫁", label: "Dýchání (2 osoby)", value: "1,5 l", color: "#5a9e6f" },
                    { icon: "🌱", label: "Pokojové rostliny", value: "0,5 l", color: "#3a9e6f" },
                  ].map(({icon, label, value, color}, i) => {
                    const y = 35 + i * 27;
                    const barW = parseFloat(value) * 55;
                    return (
                      <g key={i}>
                        <text x="12" y={y+10} fontSize="13">{icon}</text>
                        <text x="32" y={y+10} fontSize="9" fill="#4a4a40" fontWeight="500">{label}</text>
                        <rect x="120" y={y} width={barW} height="14" rx="3" fill={color} opacity="0.7"/>
                        <text x={120+barW+5} y={y+10} fontSize="9" fill={color} fontWeight="700">{value}</text>
                      </g>
                    );
                  })}

                  <line x1="12" y1="168" x2="208" y2="168" stroke="#e0e8f0" strokeWidth="0.8"/>
                  <text x="12" y="178" fontSize="8.5" fill="#4a4a40" fontWeight="600">Celkem:</text>
                  <text x="120" y="178" fontSize="8.5" fill="#e07a5f" fontWeight="700">7–8 litrů / den</text>
                </g>

                {/* šipka 2 */}
                <g transform="translate(490, 95)">
                  <path d="M0 15 L45 15" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M39 9 L47 15 L39 21" stroke="#c8b89a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>

                {/* ── ŘEŠENÍ (vpravo) ── */}
                <g transform="translate(545, 15)">
                  <rect x="0" y="0" width="185" height="175" rx="10" fill="#f0faf5" stroke="#b8d8c8" strokeWidth="1.2"/>
                  <text x="92" y="20" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700" letterSpacing="0.06em">ŘEŠENÍ</text>

                  {[
                    { n: "1", text: "Větrat 2× denně", sub: "5–10 min křížově" },
                    { n: "2", text: "Ventilátor v koupelně", sub: "15 min po sprše" },
                    { n: "3", text: "Sušit prádlo venku", sub: "nebo s oknem" },
                    { n: "4", text: "Vlhkoměr + sledování", sub: "cíl: pod 60 %" },
                    { n: "5", text: "Odvlhčovač", sub: "při trvalém problému" },
                  ].map(({n, text, sub}, i) => (
                    <g key={i} transform={`translate(12, ${32 + i * 27})`}>
                      <circle cx="10" cy="8" r="9" fill="#5a9e6f" opacity="0.15"/>
                      <text x="10" y="13" textAnchor="middle" fontSize="9" fill="#3a7e4f" fontWeight="700">{n}</text>
                      <text x="26" y="10" fontSize="9" fill="#2a3a2a" fontWeight="600">{text}</text>
                      <text x="26" y="21" fontSize="7.5" fill="#6a8a7a">{sub}</text>
                    </g>
                  ))}
                </g>

                {/* dolní lišta */}
                <rect y="190" width="760" height="20" fill="#e8f0f8" opacity="0.5"/>
                <text x="190" y="203" textAnchor="middle" fontSize="8" fill="#5a7a9a" fontWeight="600" letterSpacing="0.04em">📊 MĚŘENÍ VLHKOSTI</text>
                <text x="390" y="203" textAnchor="middle" fontSize="8" fill="#e07a5f" fontWeight="600" letterSpacing="0.04em">💧 7–8 L VLHKOSTI DENNĚ BEZ VĚTRÁNÍ</text>
                <text x="620" y="203" textAnchor="middle" fontSize="8" fill="#3a7e4f" fontWeight="600" letterSpacing="0.04em">✅ VĚTRÁNÍ + VENTILÁTOR = ŘEŠENÍ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priciny">Příčiny vlhkosti – kde bere voda v bytě</a></li>
                <li><a href="#mereni">Jak změřit vlhkost vzduchu</a></li>
                <li><a href="#typy">Typy vlhkosti – kondenzace, zatékání nebo kapilární vzlínání</a></li>
                <li><a href="#reseni">Jak snížit vlhkost – postup podle příčiny</a></li>
                <li><a href="#odvhlcovac">Odvlhčovač – kdy ano a jak vybrat</a></li>
                <li><a href="#zima-leto">Vlhkost v zimě vs. v létě</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="priciny">
              <h2>Příčiny vlhkosti – kde bere voda v bytě</h2>
              <p>Vlhkost v bytě má vždy konkrétní zdroj. Bez jeho identifikace je jakékoli řešení jen dočasné. Průměrná domácnost produkuje <strong>7–8 litrů vodní páry denně</strong> — a to musí někam odejít.</p>
              <ul>
                <li><strong>Sprchování a koupání:</strong> ~2 litry vodní páry na sprchu. Největší jednorázový zdroj vlhkosti v bytě.</li>
                <li><strong>Vaření:</strong> ~1 litr za vaření. Digestoř bez odtahu do fasády (recirkulační) vlhkost neodvádí — jen filtruje pachy.</li>
                <li><strong>Sušení prádla uvnitř:</strong> Každý kus mokrého prádla uvolní 0,5–1 litr vody. Celá pračka = 2 litry vlhkosti do vzduchu.</li>
                <li><strong>Dýchání a pocení:</strong> Dvě osoby produkují spánkem ~1,5 litru za noc.</li>
                <li><strong>Zatékání nebo stavební závada:</strong> Mokrá skvrna na stropě nebo stěně bez zjevného zdroje = podezření na zatékání nebo poruchu hydroizolace. Toto nelze vyřešit větrání — nutná oprava.</li>
                <li><strong>Kapilární vzlínání:</strong> Ve starších domech bez hydroizolace vlhkost vzlíná ze základů do zdí. Charakteristické solné výkvěty na stěnách a odpadávající omítka u podlahy.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Jak rozlišit kondenzaci od zatékání? Přilep na podezřelé místo kousek alobalu a přetěsni okraje lepicí páskou. Pokud za 24 hodin je vlhkost na povrchu alobalu (strana od zdi suchá) — jde o kondenzaci. Pokud je vlhko pod alobalem (strana u zdi) — zatéká.</div>
            </section>

            <section id="mereni">
              <h2>Jak změřit vlhkost vzduchu</h2>
              <p>Bez měření větráš naslepo. Vlhkoměr (hygrometr) je nejdůležitější pomůcka při řešení problémů s vlhkostí — a stojí 100–500 Kč.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Relativní vlhkost</th><th>Hodnocení</th><th>Co dělat</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Pod 30 %</strong></td><td>🟡 Příliš suchý vzduch</td><td>Použij zvlhčovač, větrání omez</td></tr>
                    <tr><td><strong>30–40 %</strong></td><td>🟡 Mírně suchý</td><td>V pořádku pro alergiky, sleduj</td></tr>
                    <tr><td><strong>40–60 %</strong></td><td>✅ Ideální</td><td>Udržuj větrání jako dosud</td></tr>
                    <tr><td><strong>60–65 %</strong></td><td>🟡 Hraniční</td><td>Zlepši větrání, sleduj trend</td></tr>
                    <tr><td><strong>65–70 %</strong></td><td>🟠 Rizikové</td><td>Aktivní větrání + odvlhčovač</td></tr>
                    <tr><td><strong>Nad 70 %</strong></td><td>🔴 Nebezpečné</td><td>Plíseň roste — okamžitá akce</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Měř vlhkost <strong>ve více místnostech a v různých denních dobách</strong> — po sprchování, po vaření a ráno po vstávání. Výsledky si zapiš po dobu 1–2 týdnů. Vzorce ti ukáží kde a kdy je problém největší.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejpřesnější jsou digitální vlhkoměry s teploměrem (100–300 Kč). Levné analogové vlhkoměry mohou mít odchylku ±10 %, ale pro domácí měření stačí. Nejlepší jsou modely s pamětí maximální a minimální hodnoty.</div>
            </section>

            <section id="typy">
              <h2>Typy vlhkosti – jak je rozlišit</h2>
              <p>Různé typy vlhkosti vyžadují různá řešení. Špatná diagnóza = zbytečné výdaje a přetrvávající problém.</p>
              <h3>1. Kondenzační vlhkost</h3>
              <p>Nejčastější typ. Vodní pára z vnitřního vzduchu kondenzuje na nejchladnějších površích — oknech, rozích, stěnách za nábytkem. Charakteristické jsou kapky vody na oknech ráno a tmavé fleky v rozích.</p>
              <p><strong>Řešení:</strong> Zlepšení větrání, snížení zdrojů vlhkosti, eliminace tepelných mostů.</p>
              <h3>2. Zatékání z exteriéru</h3>
              <p>Voda proniká zvenčí — popraskané těsnění oken, poškozená střecha, netěsná balkónová izolace nebo závada ve fasádě. Charakteristické jsou mokré fleky které se objevují nebo zvětšují po dešti.</p>
              <p><strong>Řešení:</strong> Lokalizace a oprava závady — nutný stavební odborník nebo zkušený řemeslník.</p>
              <h3>3. Kapilární vzlínání</h3>
              <p>Vlhkost ze zeminy nebo základů vzlíná do zdí. Typické pro starší domy bez hydroizolace, suterény a přízemní byty. Charakteristické jsou solné výkvěty (bílé krystalické usazeniny), odpadávající omítka u podlahy a stálá vlhkost bez ohledu na větrání.</p>
              <p><strong>Řešení:</strong> Injektáž hydroizolace, drenáž nebo sanační omítky — vždy odborný zásah, cena 5 000–50 000 Kč podle rozsahu.</p>
              <h3>4. Technická vlhkost</h3>
              <p>Zbytková vlhkost z nové stavby nebo rekonstrukce. Nové omítky, beton a potěry obsahují velké množství vody která se postupně odpařuje — proces trvá 1–3 roky. Nutné intenzivní větrání po celou dobu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud vlhkost přetrvává i při pravidelném větrání a nedaří se ji snížit pod 65 %, s největší pravděpodobností jde o stavební závadu — ne o špatné návyky. V takovém případě je nutná odborná prohlídka.</div>
            </section>

            <section id="reseni">
              <h2>Jak snížit vlhkost – postup podle příčiny</h2>
              <p>Postup řešení závisí na typu vlhkosti. Začni vždy od nejjednodušších a nejlevnějších kroků.</p>
              <ul>
                <li><strong>Krok 1 – Větrání:</strong> Křížové větrání 5–10 minut 2–3× denně. Vždy po sprchování, po vaření a ráno po vstávání. Viz <Link href="/blog/spravne-vetrat-byt" style={{color:"#5a9e6f",fontWeight:600}}>Jak správně větrat byt →</Link></li>
                <li><strong>Krok 2 – Ventilátor v koupelně:</strong> Nech běžet 15 minut po každém sprchování. Pokud nemáš ventilátor, nech dveře otevřené a větrací průvan odvede vlhkost.</li>
                <li><strong>Krok 3 – Sušení prádla:</strong> Sušit vždy venku nebo v místnosti s otevřeným oknem. Nikdy v ložnici nebo obývacím pokoji bez větrání.</li>
                <li><strong>Krok 4 – Kontrola digestoře:</strong> Recirkulační digestoř vlhkost neodvede — jen přefiltruje pachy. Pro odvod vlhkosti potřebuješ odtah do fasády. Při vaření větrej oknem.</li>
                <li><strong>Krok 5 – Eliminace tepelných mostů:</strong> Odsuň nábytek min. 5 cm od vnějších zdí. Zkontroluj těsnění oken a přepni na zimní nastavení kování.</li>
                <li><strong>Krok 6 – Odvlhčovač:</strong> Pokud ani pravidelné větrání nestačí, přidej odvlhčovač do nejproblematičtější místnosti.</li>
                <li><strong>Krok 7 – Odborník:</strong> Pokud vlhkost přetrvává i po všech výše uvedených krocích, jde pravděpodobně o stavební závadu.</li>
              </ul>
            </section>

            <section id="odvhlcovac">
              <h2>Odvlhčovač – kdy ano a jak vybrat</h2>
              <p>Odvlhčovač je účinné doplňkové řešení — ale není náhradou za větrání ani za opravu stavební závady. Používej ho jako podporu, ne jako hlavní řešení.</p>
              <h3>Kdy odvlhčovač pomůže</h3>
              <ul>
                <li>Byt bez oken v koupelně nebo s nedostatečným přirozeným větráním</li>
                <li>Sklepní nebo přízemní prostory se zvýšenou vlhkostí</li>
                <li>Přechodné období po rekonstrukci nebo vodní havárii</li>
                <li>Koupelna, sklep nebo technická místnost kde větrání nestačí</li>
              </ul>
              <h3>Jak vybrat odvlhčovač</h3>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ</th><th>Výkon</th><th>Cena</th><th>Vhodný pro</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Malý kompaktní</strong></td><td>10–15 l/den</td><td>2 000–5 000 Kč</td><td>Koupelna, malý pokoj, sklep</td></tr>
                    <tr><td><strong>Střední</strong></td><td>20–30 l/den</td><td>5 000–10 000 Kč</td><td>Byt 60–100 m²</td></tr>
                    <tr><td><strong>Velký</strong></td><td>40–50 l/den</td><td>10 000–20 000 Kč</td><td>Dům, sklep, po havárii</td></tr>
                    <tr><td><strong>Sorbentový</strong></td><td>0,5–2 l/den</td><td>200–1 000 Kč</td><td>Skříň, auto, malý prostor</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Odvlhčovač nastav na cílovou vlhkost 50–55 % — pak se automaticky vypne a šetří energii. Nepřehánět to na 30 % — příliš suchý vzduch dráždí sliznice a způsobuje praskání dřevěného nábytku.</div>
            </section>

            <section id="zima-leto">
              <h2>Vlhkost v zimě vs. v létě – různé problémy</h2>
              <p>Vlhkost v bytě se chová jinak v různých ročních obdobích a vyžaduje různý přístup.</p>
              <h3>Zima — kondenzace a plíseň</h3>
              <p>V zimě je venkovní vzduch suchý ale studený. Při větrání přichází dovnitř suchý vzduch, který se zahřeje a pojme více vlhkosti — to je pozitivní. Problém nastává kdy se nevětrá: vnitřní vlhkost stoupá, studené povrchy (okna, rohy) jsou pod rosným bodem a kondenzují. Větrání v zimě je nejdůležitější prevencí kondenzace.</p>
              <h3>Léto — tropické vedro a plíseň v koupelně</h3>
              <p>V létě je venkovní vzduch teplý a někdy velmi vlhký. Větrání v horkých dnech může vlhkost dovnitř přivádět — proto větrej ráno a večer kdy je venku chladněji a sušeji. Klimatizace vzduch ochlazuje a zároveň odvlhčuje — dobrá kombinace pro letní měsíce.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Na podzim při přechodu na topnou sezónu vlhkost v bytě přirozeně klesá jak topení suší vzduch. Pokud vlhkost na podzim neklesá pod 60 % ani při topení, je to signál stavební závady nebo nadměrných zdrojů vlhkosti.</div>
            </section>

            <section id="chyby">
              <h2>Nejčastější chyby při řešení vlhkosti</h2>
              <ul>
                <li><strong>Spoléhání na odvlhčovač místo větrání:</strong> Odvlhčovač spotřebovává energii a musí někam vypouštět teplo. Větrání je zdarma a řeší příčinu, ne jen symptom.</li>
                <li><strong>Sušení prádla v ložnici:</strong> Každá pračka prádla uvolní 2 litry vody. V ložnici bez větrání to způsobuje vlhkost přes 80 % — ideální podmínky pro plíseň.</li>
                <li><strong>Mikroventilace místo křížového větrání:</strong> Pootevřené okno neodvede vlhkost efektivně. Krátkodobé intenzivní větrání je mnohem účinnější.</li>
                <li><strong>Malování přes vlhkou zeď:</strong> Barva na vlhkém podkladu se loupe a plíseň roste dál pod ní. Zeď musí být suchá před malováním.</li>
                <li><strong>Ignorování kondenzace na oknech:</strong> Kondenzace na oknech je včasné varování — vlhkost je příliš vysoká. Jednej ihned, ne až když se objeví plíseň.</li>
                <li><strong>Přetopení bez větrání:</strong> Teplý vzduch pojme více vlhkosti ale nevypouští ji — jen ji přesune na chladnější povrchy. Bez větrání přetopení problém nezlepší.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jaká je ideální vlhkost vzduchu v bytě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ideální relativní vlhkost vzduchu v obytných prostorách je 40–60 %. Pod 30 % je vzduch příliš suchý — dráždí sliznice a způsobuje statickou elektřinu. Nad 65 % začíná riziko plísně, nad 70 % plíseň aktivně roste.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč mi kondenzuje voda na oknech?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kondenzace na vnitřní straně okna znamená že vzduch v místnosti je příliš vlhký a okno je nejchladnější plocha kde vodní pára zkondenzuje. Řešení: zlepšit větrání, snížit zdroje vlhkosti (sušení prádla, vaření bez digestoře) a případně vyměnit okna za lepší izolační zasklení.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Pomáhá odvlhčovač proti plísni?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Odvlhčovač je účinné dočasné řešení — sníží vlhkost pod 60 % a zabrání růstu plísně. Není ale náhradou za větrání ani za odstranění příčiny. Pokud vlhkost pochází ze stavební závady (zatékání, tepelný most), odvlhčovač problém nevyřeší — jen potlačí příznaky.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznat kapilární vzlínání od kondenzace?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Kapilární vzlínání se projevuje vlhkostí u podlahy a dolní části zdí, solnými výkvěty (bílé krystalické usazeniny) a odpadávající omítkou. Kondenzace se naopak projevuje u stropů, v rozích a na oknech. Alobalový test (viz sekce Příčiny) pomůže rozlišit kondenzaci od zatékání.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy volat odborníka na vlhkost?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Odborníka vol pokud: vlhkost přetrvává i po pravidelném větrání a odvlhčovači, jsou viditelné mokré fleky které se po dešti zvětšují, jsou přítomny solné výkvěty nebo odpadávající omítka u podlahy, nebo pokud plíseň opakovaně roste na stejném místě i po ošetření. Stavební průzkum vlhkosti stojí 2 000–5 000 Kč a ušetří zbytečné výdaje na neúčinná řešení.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/zbavit-se-vlhkosti-v-byte" title="Jak se zbavit vlhkosti v bytě – příčiny, měření a řešení 2026" />

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
                <li><a href="#priciny">Příčiny vlhkosti</a></li>
                <li><a href="#mereni">Jak měřit vlhkost</a></li>
                <li><a href="#typy">Typy vlhkosti</a></li>
                <li><a href="#reseni">Jak snížit vlhkost</a></li>
                <li><a href="#odvhlcovac">Odvlhčovač</a></li>
                <li><a href="#zima-leto">Zima vs. léto</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>20 článků →</span></Link>
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
