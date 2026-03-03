import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak správně zalévat rostliny – kompletní průvodce 2025",
  description: "Přelití zabíjí víc rostlin než sucho. Zjisti, kdy, kolik a jak zalévat pokojové i zahradní rostliny. Praktický průvodce bez zbytečné teorie.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-spravne-zalevat" },
  openGraph: { title: "Jak správně zalévat rostliny", description: "Přelití zabíjí víc rostlin než sucho. Zjisti, kdy, kolik a jak zalévat.", url: "https://domovniguru.cz/blog/jak-spravne-zalevat", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-04-01T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak správně zalévat rostliny", description: "Přelití zabíjí víc rostlin než sucho. Praktický průvodce zalévání." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-spravne-zalevat#article", "headline": "Jak správně zalévat rostliny", "datePublished": "2025-04-01T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak správně zalévat", "zalévání rostlin", "kdy zalévat", "přelití rostlin", "zalévání pokojových rostlin", "zahradní zalévání"] }] };

const RELATED = [
  { title: "Jak pěstovat rajčata – od výsevu po sklizeň", href: "/blog/jak-pestovat-rajcata", read: "7 min" },
  { title: "Ochrana rostlin před zimou – kompletní průvodce", href: "/blog/ochrana-rostlin-pred-zimou", read: "5 min" },
  { title: "Jak stříhat keře – kdy a jak na to", href: "/blog/jak-strihat-kere", read: "5 min" },
  { title: "Zahradní nástroje – péče a údržba", href: "/blog/zahradni-nastroje-pece", read: "4 min" },
];

// ─── SVG Hero ilustrace ───────────────────────────────────────────────────────
const HeroSVG = () => (
  <svg viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg" aria-hidden="true">
    <rect width="900" height="300" fill="#e8f5e9" rx="12" />
    {/* Vzdálené kopce */}
    <ellipse cx="750" cy="295" rx="280" ry="85" fill="#c8e6c9" opacity="0.5" />
    <ellipse cx="170" cy="300" rx="210" ry="65" fill="#dcedc8" opacity="0.45" />
    {/* Zemina */}
    <rect x="60" y="220" width="780" height="65" rx="8" fill="#a1887f" opacity="0.3" />
    <rect x="60" y="234" width="780" height="52" rx="6" fill="#8d6e63" opacity="0.2" />
    {/* Velká listová rostlina vlevo */}
    <rect x="155" y="125" width="13" height="98" rx="6" fill="#558b2f" />
    <ellipse cx="161" cy="120" rx="40" ry="50" fill="#7cb342" />
    <ellipse cx="143" cy="136" rx="26" ry="34" fill="#8bc34a" opacity="0.7" />
    <ellipse cx="181" cy="140" rx="22" ry="28" fill="#9ccc65" opacity="0.6" />
    {/* Kvetoucí rostlina uprostřed */}
    <rect x="436" y="140" width="11" height="84" rx="5" fill="#558b2f" />
    <circle cx="441" cy="133" r="36" fill="#66bb6a" />
    <circle cx="441" cy="102" r="13" fill="#f48fb1" />
    <circle cx="458" cy="114" r="9" fill="#ce93d8" />
    <circle cx="424" cy="114" r="9" fill="#ef9a9a" />
    <circle cx="441" cy="79" r="6" fill="#fff9c4" />
    {/* Kaktus vpravo */}
    <rect x="688" y="155" width="17" height="70" rx="8" fill="#558b2f" />
    <rect x="671" y="178" width="13" height="38" rx="6" fill="#558b2f" />
    <rect x="709" y="188" width="13" height="33" rx="6" fill="#558b2f" />
    <ellipse cx="696" cy="152" rx="15" ry="18" fill="#66bb6a" />
    <ellipse cx="677" cy="174" rx="11" ry="15" fill="#81c784" />
    <ellipse cx="715" cy="184" rx="11" ry="14" fill="#81c784" />
    {/* Konev */}
    <g transform="translate(285,142)">
      <path d="M0 28 Q0 0 28 0 L92 0 Q116 0 116 24 L112 76 Q112 90 98 90 L18 90 Q4 90 4 76 Z" fill="#42a5f5" />
      <path d="M0 18 Q-28 18 -28 47 Q-28 70 0 65" stroke="#1e88e5" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M112 32 L160 13 L165 23 L116 44 Z" fill="#1e88e5" />
      <circle cx="163" cy="18" r="4.5" fill="#1e88e5" />
      <ellipse cx="174" cy="8" rx="2.8" ry="4.5" fill="#64b5f6" opacity="0.8" transform="rotate(-20 174 8)" />
      <ellipse cx="185" cy="16" rx="2.8" ry="4.5" fill="#64b5f6" opacity="0.7" transform="rotate(-10 185 16)" />
      <ellipse cx="179" cy="28" rx="2.3" ry="3.8" fill="#90caf9" opacity="0.6" transform="rotate(5 179 28)" />
      <ellipse cx="192" cy="6" rx="1.9" ry="3.2" fill="#64b5f6" opacity="0.5" transform="rotate(-30 192 6)" />
      <rect x="18" y="23" width="76" height="2.5" rx="1.2" fill="#1e88e5" opacity="0.25" />
      <rect x="14" y="52" width="84" height="2.5" rx="1.2" fill="#1e88e5" opacity="0.18" />
    </g>
    {/* Květináče */}
    <path d="M121 228 L136 254 L190 254 L204 228 Z" fill="#ef9a9a" opacity="0.8" />
    <rect x="146" y="250" width="33" height="7" rx="3.5" fill="#e57373" opacity="0.6" />
    <path d="M406 232 L416 250 L458 250 L468 232 Z" fill="#80cbc4" opacity="0.8" />
    <rect x="422" y="246" width="28" height="7" rx="3.5" fill="#4db6ac" opacity="0.6" />
    <path d="M652 230 L665 255 L726 255 L738 230 Z" fill="#ffcc80" opacity="0.8" />
    <rect x="670" y="251" width="40" height="7" rx="4" fill="#ffa726" opacity="0.6" />
    {/* Sluníčko */}
    <circle cx="820" cy="52" r="26" fill="#fff176" opacity="0.9" />
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <line key={i}
        x1={820 + 30 * Math.cos(deg * Math.PI / 180)} y1={52 + 30 * Math.sin(deg * Math.PI / 180)}
        x2={820 + 41 * Math.cos(deg * Math.PI / 180)} y2={52 + 41 * Math.sin(deg * Math.PI / 180)}
        stroke="#fff176" strokeWidth="3" strokeLinecap="round" opacity="0.7"
      />
    ))}
    {/* Dekorativní kapky */}
    {[95, 235, 365, 520, 615, 760].map((x, i) => (
      <ellipse key={i} cx={x} cy={36 + (i % 3) * 16} rx="2.8" ry="4.5" fill="#90caf9" opacity="0.28" transform={`rotate(-10 ${x} ${36 + (i % 3) * 16})`} />
    ))}
  </svg>
);

// ─── Inline ikonky sekcí ──────────────────────────────────────────────────────
const IconWarning = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="section-icon">
    <path d="M12 3L2 20h20L12 3z" fill="#ef5350" opacity="0.85"/>
    <rect x="11" y="9" width="2" height="6" rx="1" fill="#fff"/>
    <rect x="11" y="17" width="2" height="2" rx="1" fill="#fff"/>
  </svg>
);
const IconDrop = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="section-icon">
    <path d="M12 3C12 3 6 10 6 14.5a6 6 0 0012 0C18 10 12 3 12 3z" fill="#4db6ac" opacity="0.85"/>
  </svg>
);
const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="section-icon">
    <path d="M17 3C17 3 3 5 3 15c0 4 3 6 6 6 5 0 9-4 9-10 0-3-1-8-1-8z" fill="#66bb6a" opacity="0.85"/>
    <line x1="3" y1="21" x2="12" y2="12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconWater = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="section-icon">
    <path d="M12 2C12 2 5 9.5 5 14a7 7 0 0014 0C19 9.5 12 2 12 2z" fill="#42a5f5" opacity="0.9"/>
    <path d="M9 16c0 1.66 1.34 3 3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="section-icon">
    <circle cx="12" cy="12" r="9" fill="#ab47bc" opacity="0.85"/>
    <line x1="12" y1="7" x2="12" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="12" x2="16" y2="14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconDropBlue = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="section-icon">
    <path d="M12 3C12 3 5 11 5 15.5a7 7 0 0014 0C19 11 12 3 12 3z" fill="#1e88e5" opacity="0.85"/>
  </svg>
);
const IconCheck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="section-icon">
    <circle cx="12" cy="12" r="9" fill="#558b2f" opacity="0.85"/>
    <path d="M7 12l3.5 3.5L17 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
              <Link href="/blog/kategorie/zahrada">Zahrada &amp; terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Jak správně zalévat rostliny</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada &amp; terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak správně zalévat rostliny – kompletní průvodce 2025</h1>
              <p className="article-lead">Přelití zabíjí víc rostlin než sucho. Naučíš se rozpoznat žízeň od přelití, kdy a kolik zalévat pokojové i zahradní rostliny a jaké chyby nejčastěji ničí zahrady a parapety.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            <HeroSVG />

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#proc-umira">Proč rostliny umírají kvůli zalévání</a></li>
                <li><a href="#priznaky">Jak poznat, kdy zalévat</a></li>
                <li><a href="#pokojove">Zalévání pokojových rostlin</a></li>
                <li><a href="#zahradni">Zalévání zahradních rostlin</a></li>
                <li><a href="#kdy-zalevat">Kdy v den zalévat</a></li>
                <li><a href="#voda">Jaká voda je nejlepší</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
              </ol>
            </nav>

            <section id="proc-umira">
              <h2><IconWarning /> Proč rostliny umírají kvůli zalévání</h2>
              <p>Největší paradox zahradničení: většina lidí své rostliny miluje – a právě proto je přelévá. Kořeny potřebují nejen vodu, ale i vzduch. Při přelití se půda stane anaerobní, kořeny začnou hnít a rostlina i přes dostatek vody vysychá, protože poškozené kořeny vodu nepřenáší.</p>
              <p>Přelití vs. sucho v číslech:</p>
              <ul>
                <li><strong>Přelití</strong> – způsobuje až 60–70 % úhynů pokojových rostlin</li>
                <li><strong>Sucho</strong> – rostliny signalizují žízeň viditelně (vadnutí) a snáze se zachrání</li>
                <li><strong>Hniloba kořenů</strong> – nejčastější důsledek přelití; bez včasného zásahu je nevratná</li>
              </ul>
              <div className="article-tip"><strong>💡 Zlaté pravidlo:</strong> Než zalévat, radši počkej. Většina rostlin přežije den nebo dva navíc bez vody, ale týden v mokré půdě může být smrtelný.</div>
            </section>

            <section id="priznaky">
              <h2><IconDrop /> Jak poznat, kdy zalévat</h2>
              <p>Zálivkový plán podle kalendáře nefunguje – záleží na teplotě, světlu, velikosti květináče i ročním období. Spolehlivější jsou tyto testy:</p>
              <h3>Test prstem (nejspolehlivější)</h3>
              <p>Zasuň prst 2–3 cm do substrátu. Pokud je půda vlhká a chladná – nezalévej. Pokud je suchá a teplá – je čas na zálivku. Jednoduché, nulové náklady, funguje na 90 % pokojových rostlin.</p>
              <h3>Test hmotností</h3>
              <p>Zvedni květináč – vlhká půda je výrazně těžší než suchá. Po chvíli cit máš automaticky a poznáš potřebu zálivky bez dalšího testování.</p>
              <h3>Vizuální signály žízně</h3>
              <ul>
                <li>Lehké vadnutí listů (ne žloutnutí – to je přelití)</li>
                <li>Půda se odtahuje od stěn květináče</li>
                <li>Listy jsou matné, ztrácejí lesk</li>
                <li>Dutý zvuk při poklepu na plastový květináč = suchý substrát</li>
              </ul>
              <h3>Signály přelití</h3>
              <ul>
                <li>Žloutnutí listů (spodních i horních)</li>
                <li>Měkké, hnědé stonky u báze</li>
                <li>Plíseň na povrchu substrátu</li>
                <li>Nepříjemný zápach z květináče</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vlhkoměry do substrátu (cena 100–300 Kč) jsou skvělý pomocník pro začátečníky a pro rostliny s vysokými nároky na přesnost zálivky.</div>
            </section>

            <section id="pokojove">
              <h2><IconLeaf /> Zalévání pokojových rostlin</h2>
              <p>Pokojové rostliny se liší v nárocích na zálivku daleko víc než zahradní. Základní přehled:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Typ rostliny</th>
                      <th>Frekvence</th>
                      <th>Zásada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Kaktusy a sukulenty</strong></td>
                      <td>Každé 2–4 týdny (léto), měsíčně (zima)</td>
                      <td>Substrát musí zcela vyschnout</td>
                    </tr>
                    <tr>
                      <td><strong>Tropické rostliny</strong> (monstera, filodendron)</td>
                      <td>1–2× týdně (léto), 1× týdně (zima)</td>
                      <td>Vrchní 2 cm suché, zbytek lehce vlhký</td>
                    </tr>
                    <tr>
                      <td><strong>Kapradiny a pokojové palmy</strong></td>
                      <td>2–3× týdně (léto), 1× týdně (zima)</td>
                      <td>Nikdy nesmí zcela vyschnout</td>
                    </tr>
                    <tr>
                      <td><strong>Orchideje</strong></td>
                      <td>1× týdně (léto), 1× za 10 dní (zima)</td>
                      <td>Ponoření květináče na 10–15 minut</td>
                    </tr>
                    <tr>
                      <td><strong>Bylinky</strong> (bazalka, máta)</td>
                      <td>Denně až ob den</td>
                      <td>Udržovat vlhkost, ale ne mokro</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>Technika zálivky pokojových rostlin</h3>
              <ul>
                <li><strong>Zalévej pomalu a důkladně</strong> – voda musí prosakovat celým substrátem a vytékat odtokovým otvorem</li>
                <li><strong>Vylévej přebytečnou vodu z misky</strong> po 30 minutách – kořeny nesmí stát ve vodě</li>
                <li><strong>Zálivka zdola</strong> (ponoření) se hodí pro orchideje a rostliny citlivé na mokré listy; pro většinu ostatních je lepší zálivka shora</li>
              </ul>
            </section>

            <section id="zahradni">
              <h2><IconWater /> Zalévání zahradních rostlin</h2>
              <p>Na zahradě jsou rostliny závislé na srážkách, ale v suchých obdobích potřebují pomoc. Základní principy:</p>
              <h3>Hloubka zálivky je důležitější než frekvence</h3>
              <p>Mělká zálivka každý den vychovává povrchové kořeny náchylné k suchu. Hluboká zálivka 2–3× týdně (30–50 litrů na m²) nutí kořeny růst do hloubky, kde je půda stabilnější.</p>
              <h3>Orientační spotřeba vody dle druhu</h3>
              <ul>
                <li><strong>Zelenina a bylinky</strong> – 20–30 l/m² týdně při suchu</li>
                <li><strong>Keře a trvalky</strong> – 10–15 l/m² týdně, po zakotvení méně</li>
                <li><strong>Stromy</strong> – 40–60 l na zálivku, 1–2× týdně v prvním roce</li>
                <li><strong>Trávník</strong> – 15–25 l/m² týdně, raději méně a hlouběji</li>
              </ul>
              <h3>Kapková závlaha vs. postřik</h3>
              <p>Kapková závlaha šetří 30–50 % vody oproti postřiku, přivádí vodu přímo ke kořenům a snižuje výskyt plísní na listech. Postřik je vhodný pro trávník; pro záhony se zeleninou je kapková závlaha výrazně lepší volba.</p>
            </section>

            <section id="kdy-zalevat">
              <h2><IconClock /> Kdy v den zalévat</h2>
              <p>Načasování zálivky ovlivňuje, kolik vody se skutečně dostane ke kořenům a jak je rostlina náchylná k nemocem.</p>
              <ul>
                <li><strong>Ráno (6–9 h) – ideální:</strong> voda se vstřebá před poledním horkem, listy mají čas uschnout, snižuje riziko plísní</li>
                <li><strong>Večer (18–20 h) – přijatelné:</strong> nižší odpařování, ale listy zůstávají mokré přes noc → vyšší riziko plísní a hub</li>
                <li><strong>V poledne – nevhodné:</strong> až 30–40 % vody se odpaří dříve, než dosáhne kořenů; kapky na listech mohou způsobit popálení</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud zalévání ráno nestíháš, večerní zálivka je stále lepší než žádná. Zaměř se ale na zálivku ke kořenům, ne na postřik listů.</div>
            </section>

            <section id="voda">
              <h2><IconDropBlue /> Jaká voda je nejlepší</h2>
              <p>Většina rostlin vychází dobře s běžnou kohoutkou vodou, ale jsou výjimky:</p>
              <ul>
                <li><strong>Pokojové rostliny</strong> – kohoutková voda je v pořádku; nechej ji stát 12–24 hodin, aby se odpařil chlor a voda dosáhla pokojové teploty</li>
                <li><strong>Orchideje, azalky, kapradiny</strong> – preferují měkčí vodu (destilovanou nebo dešťovou); tvrdá voda způsobuje zasolení substrátu</li>
                <li><strong>Dešťová voda</strong> – ideální pro zahradní rostliny, zdarma a bez chloru; sbírej do sudu nebo nádrže</li>
                <li><strong>Studená voda</strong> – pod 15 °C může způsobit teplotní šok u tropických rostlin; nechej ji vždy temperovat</li>
              </ul>
            </section>

            <section id="chyby">
              <h2><IconCheck /> Nejčastější chyby při zalévání</h2>
              <p>Shrnutí toho, čeho se vyvarovat:</p>
              <ul>
                <li><strong>Zalévání dle pevného plánu</strong> – správný přístup je testovat půdu, ne koukat na kalendář</li>
                <li><strong>Nedostatečné zalití</strong> – trocha vody každý den je horší než pořádná zálivka ob den; voda nedoputuje ke kořenům</li>
                <li><strong>Voda zůstává v misce</strong> – přebytečná voda v misce vytváří do 30–60 minut podmínky pro hnilobu kořenů</li>
                <li><strong>Zalévání listů</strong> – voda na listech zvyšuje riziko plísní; zalévej přímo do substrátu</li>
                <li><strong>Stejný režim celoročně</strong> – v zimě většina pokojových rostlin potřebuje 50–70 % vody oproti létu</li>
                <li><strong>Bez odtokového otvoru</strong> – květináč bez díry = jistá hniloba; přidej drenážní vrstvu a zalévej velmi střídmě</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip na závěr:</strong> Nejdůležitější pomůcka pro zalévání není drahý systém závlahy – je to tvůj prst zasunutý do substrátu. Dělej to pravidelně a ušetříš spoustu zklamání.</div>
            </section>

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Zahrada &amp; terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#proc-umira">Proč rostliny umírají</a></li>
                <li><a href="#priznaky">Jak poznat, kdy zalévat</a></li>
                <li><a href="#pokojove">Pokojové rostliny</a></li>
                <li><a href="#zahradni">Zahradní rostliny</a></li>
                <li><a href="#kdy-zalevat">Kdy v den zalévat</a></li>
                <li><a href="#voda">Jaká voda je nejlepší</a></li>
                <li><a href="#chyby">Nejčastější chyby</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada &amp; terasa<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 24px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .hero-svg { width: 100%; height: auto; border-radius: 12px; margin: 28px 0 36px; display: block; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; display: flex; align-items: center; gap: 10px; }
        .section-icon { flex-shrink: 0; margin-top: 1px; }
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
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); display: block; }
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
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } .hero-svg { margin: 20px 0 28px; } }
      `}</style>
    </>
  );
}
