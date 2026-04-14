import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak nainstalovat stmívač světla – zapojení krok za krokem 2026",
  description: "Stmívač místo vypínače – jak ho správně zapojit, co je potřeba pro LED žárovky a kdy volat elektrikáře. Bezpečný postup montáže stmívače krok za krokem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/instalovat-stmivac" },
  openGraph: { title: "Jak nainstalovat stmívač světla 2026", description: "Zapojení stmívače krok za krokem – co je potřeba pro LED a kdy volat elektrikáře.", url: "https://www.domovniguru.cz/blog/instalovat-stmivac", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-14T08:00:00Z", modifiedTime: "2026-04-14T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak nainstalovat stmívač světla 2026", description: "Zapojení stmívače krok za krokem – co potřebuješ pro LED žárovky." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/instalovat-stmivac#article",
    "headline": "Jak nainstalovat stmívač světla – zapojení krok za krokem 2026",
    "datePublished": "2026-04-14T08:00:00Z",
    "dateModified": "2026-04-14T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak nainstalovat stmívač", "zapojení stmívače světla", "stmívač pro LED", "montáž stmívače", "stmívač místo vypínače", "dimmer zapojení"]
  }]
};

const RELATED = [
  { title: "Jak vyměnit vypínač světla", href: "/blog/jak-vymenit-vypinac", read: "4 min" },
  { title: "Jak vybrat správnou LED žárovku", href: "/blog/jak-vybrat-led-zarovku", read: "5 min" },
  { title: "LED vs. žárovky – co se skutečně vyplatí?", href: "/blog/led-vs-zarovky", read: "4 min" },
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "7 min" },
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
              <span>Instalace stmívače</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak nainstalovat stmívač světla – zapojení krok za krokem</h1>
              <p className="article-lead">Stmívač promění jakýkoli pokoj — z pracovního světla na večerní atmosféru jedním otočením. Výměna vypínače za stmívač trvá 20 minut a zvládneš ji sám. Ale pozor — ne každá LED žárovka stmívání podporuje.</p>
              <div className="article-meta-row"><span>Aktualizováno: 14. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/instalovat-stmivac" title="Jak nainstalovat stmívač světla – zapojení krok za krokem 2026" />
            </header>

            {/* HERO SVG */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#fafaf8"/>

                {/* Schéma zapojení */}
                {/* Jistič */}
                <g transform="translate(30, 60)">
                  <rect x="0" y="0" width="80" height="80" rx="6" fill="#f0f0e8" stroke="#c8c0b0" strokeWidth="1.2"/>
                  <text x="40" y="25" textAnchor="middle" fontSize="8.5" fill="#6a6050" fontWeight="700">JISTIČ</text>
                  <rect x="15" y="32" width="50" height="30" rx="3" fill="#4a4a40" stroke="#2a2a20" strokeWidth="0.8"/>
                  <rect x="20" y="37" width="10" height="20" rx="2" fill="#e07040"/>
                  <text x="40" y="72" textAnchor="middle" fontSize="7" fill="#c05030" fontWeight="700">VYPNOUT!</text>
                </g>

                {/* Vodič L — fázový */}
                <line x1="110" y1="85" x2="200" y2="85" stroke="#e07040" strokeWidth="3" strokeLinecap="round"/>
                <text x="155" y="78" textAnchor="middle" fontSize="8" fill="#e07040" fontWeight="600">L (fáze)</text>

                {/* Vodič N — nulový */}
                <line x1="110" y1="110" x2="200" y2="110" stroke="#4a90d9" strokeWidth="3" strokeLinecap="round"/>
                <text x="155" y="125" textAnchor="middle" fontSize="8" fill="#4a90d9" fontWeight="600">N (nula)</text>

                {/* Stmívač */}
                <g transform="translate(200, 50)">
                  <rect x="0" y="0" width="120" height="100" rx="8" fill="#f8f4ee" stroke="#d8c8a0" strokeWidth="1.5"/>
                  <text x="60" y="18" textAnchor="middle" fontSize="9" fill="#8a7050" fontWeight="700">STMÍVAČ</text>
                  {/* Otočný knoflík */}
                  <circle cx="60" cy="55" r="22" fill="#e8e0d0" stroke="#c8b890" strokeWidth="1.5"/>
                  <circle cx="60" cy="55" r="14" fill="#d8d0c0" stroke="#b8b090" strokeWidth="1"/>
                  <line x1="60" y1="41" x2="60" y2="48" stroke="#808070" strokeWidth="2" strokeLinecap="round"/>
                  <text x="60" y="90" textAnchor="middle" fontSize="7.5" fill="#8a7050">L_in · L_out · N</text>

                  {/* Svorky */}
                  <rect x="8" y="95" width="20" height="8" rx="2" fill="#e07040" opacity="0.8"/>
                  <text x="18" y="101" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="700">L_in</text>
                  <rect x="50" y="95" width="20" height="8" rx="2" fill="#5a9e6f" opacity="0.8"/>
                  <text x="60" y="101" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="700">L_out</text>
                  <rect x="92" y="95" width="20" height="8" rx="2" fill="#4a90d9" opacity="0.8"/>
                  <text x="102" y="101" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="700">N</text>
                </g>

                {/* Vodič L_out */}
                <line x1="320" y1="95" x2="430" y2="95" stroke="#5a9e6f" strokeWidth="3" strokeLinecap="round"/>
                <text x="375" y="88" textAnchor="middle" fontSize="8" fill="#5a9e6f" fontWeight="600">L_out (stmívané)</text>

                {/* Vodič N */}
                <line x1="320" y1="110" x2="430" y2="110" stroke="#4a90d9" strokeWidth="3" strokeLinecap="round"/>

                {/* Svítidlo */}
                <g transform="translate(430, 55)">
                  <rect x="0" y="0" width="110" height="100" rx="8" fill="#fffef8" stroke="#e8e0c0" strokeWidth="1.2"/>
                  <text x="55" y="18" textAnchor="middle" fontSize="9" fill="#8a7850" fontWeight="700">SVÍTIDLO</text>
                  {/* Žárovka */}
                  <ellipse cx="55" cy="55" rx="20" ry="22" fill="#fef9c3" stroke="#fbbf24" strokeWidth="1.5"/>
                  <rect x="48" y="73" width="14" height="8" rx="2" fill="#c8b890"/>
                  {/* Světelné paprsky */}
                  {[-40,-20,0,20,40].map((deg,i) => {
                    const r = Math.PI * deg / 180;
                    return <line key={i} x1={55+22*Math.sin(r)} y1={55-22*Math.cos(r)} x2={55+30*Math.sin(r)} y2={55-30*Math.cos(r)} stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>;
                  })}
                  <text x="55" y="95" textAnchor="middle" fontSize="7.5" fill="#8a7850">DIM: ✓</text>
                </g>

                {/* Upozornění */}
                <g transform="translate(560, 55)">
                  <rect x="0" y="0" width="175" height="100" rx="8" fill="#fef9f0" stroke="#fcd34d" strokeWidth="1.2"/>
                  <text x="87" y="18" textAnchor="middle" fontSize="9" fill="#d97706" fontWeight="700">⚠️ NUTNÉ PODMÍNKY</text>
                  {[
                    "✓ LED označená DIMMABLE",
                    "✓ Stmívač pro LED (ne halogen)",
                    "✓ Min. zátěž stmívače",
                    "✓ Vypnutý jistič před prací",
                    "✓ Fázová tužka pro kontrolu",
                  ].map((text, i) => (
                    <text key={i} x="12" y={34+i*14} fontSize="8.5" fill="#78716c">{text}</text>
                  ))}
                </g>

                <rect y="182" width="760" height="18" fill="#fef3c7" opacity="0.5"/>
                <text x="380" y="194" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="600" letterSpacing="0.06em">⚡ VŽDY VYPNI JISTIČ PŘED PRACÍ · OVĚŘ FÁZOVOU TUŽKOU · LED MUSÍ BÝT DIMMABLE</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy stmívačů – který vybrat</a></li>
                <li><a href="#led">LED a stmívání – co musíš vědět</a></li>
                <li><a href="#postup">Zapojení krok za krokem</a></li>
                <li><a href="#problemy">Problémy a jejich řešení</a></li>
                <li><a href="#kdy-elektrikar">Kdy volat elektrikáře</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy stmívačů – který vybrat</h2>
              <p>Ne každý stmívač funguje s každou žárovkou. Před nákupem musíš vědět jaký typ osvětlení stmíváš.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ stmívače</th><th>Pro jaké žárovky</th><th>Cena</th><th>Poznámka</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Triac (fázový řez)</strong></td><td>Halogenové, některé LED</td><td>200–500 Kč</td><td>Nejrozšířenější, ale ne pro všechny LED</td></tr>
                    <tr><td><strong>Stmívač pro LED (leading/trailing edge)</strong></td><td>LED dimmable</td><td>300–800 Kč</td><td>Správná volba pro moderní LED</td></tr>
                    <tr><td><strong>Chytrý stmívač (WiFi/Zigbee)</strong></td><td>LED dimmable</td><td>500–1 500 Kč</td><td>Ovládání přes telefon, časovač</td></tr>
                    <tr><td><strong>Stmívač 0–10V</strong></td><td>Průmyslové LED panely</td><td>300–600 Kč</td><td>Pro kancelářská svítidla s driverem</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejsi jistý, kup stmívač označený „Universal dimmer" nebo „LED dimmer" — funguje s nejširší škálou LED žárovek. Před nákupem zkontroluj kompatibilní žárovky v dokumentaci stmívače.</div>
            </section>

            <section id="led">
              <h2>LED a stmívání – co musíš vědět předem</h2>
              <p>Toto je nejčastější zdroj problémů. Ne každá LED žárovka stmívání podporuje — a i „dimmable" LED nemusí fungovat se starším stmívačem pro halogen.</p>
              <ul>
                <li><strong>Hledej označení DIMMABLE:</strong> Pouze LED žárovky s tímto označením lze stmívat. Běžná LED bez tohoto označení bude při připojení na stmívač blikat nebo se úplně vypne.</li>
                <li><strong>Minimální zátěž stmívače:</strong> Každý stmívač má minimální a maximální zátěž (např. 10–200 W). Jedna LED 9 W pod stmívač s minimem 25 W bude blikat. Přidej více žárovek nebo kup stmívač s nižším minimem.</li>
                <li><strong>Kompatibilita stmívač–žárovka:</strong> Výrobci stmívačů (Schneider, Legrand, Jung) zveřejňují seznamy kompatibilních žárovek. Zkontroluj před nákupem.</li>
                <li><strong>Starý stmívač pro halogen:</strong> Pokud měníš halogenové žárovky za LED, starý halogenový stmívač pravděpodobně nebude s LED fungovat správně. Vyměň stmívač za LED kompatibilní.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Zapojení stmívače krok za krokem</h2>
              <div className="article-tip"><strong>⚠️ Bezpečnost na prvním místě:</strong> Před jakoukoliv prací na elektroinstalaci VŽDY vypni příslušný jistič v rozvaděči. Ověř fázovou tužkou nebo multimetrem že v krabici není napětí. Nikdy nepracuj pod napětím.</div>
              <ul>
                <li><strong>Krok 1 — Vypni jistič:</strong> V rozvaděči vypni jistič pro daný okruh. Přilep štítek nebo zajisti jistič aby ho nikdo nezapnul během práce.</li>
                <li><strong>Krok 2 — Sundej starý vypínač:</strong> Odšroubuj krycí rámeček, vyšroubuj vypínač z krabice. Poznamenej nebo nafotografuj zapojení vodičů ještě před odpojením.</li>
                <li><strong>Krok 3 — Identifikuj vodiče:</strong> Fázový vodič (L) — hnědý nebo černý. Nulový (N) — modrý. Ochranný (PE) — žlutozelený. Starší instalace mohou mít jiné barvy — ověř fázovou tužkou.</li>
                <li><strong>Krok 4 — Přečti návod stmívače:</strong> Každý stmívač má jiné zapojení svorek. Standardně: L_in (příchozí fáze), L_out (fáze do svítidla), N (nula). Některé stmívače N nepotřebují — záleží na modelu.</li>
                <li><strong>Krok 5 — Zapoj vodiče:</strong> Připoj vodiče dle návodu. Spoje dotáhni šroubkem — uvolněný kontakt způsobuje blikání a přehřívání.</li>
                <li><strong>Krok 6 — Vlož do krabice a otestuj:</strong> Stmívač vlož do krabice, přišroubuj rámeček. Zapni jistič a otestuj — svítidlo by mělo reagovat na otáčení knoflíku.</li>
              </ul>
            </section>

            <section id="problemy">
              <h2>Problémy a jejich řešení</h2>
              <ul>
                <li><strong>LED bliká při stmívání:</strong> Nejčastější problém. Příčiny: nekompatibilní žárovka (není dimmable), nekompatibilní stmívač (halogenový místo LED), příliš nízká zátěž pod minimem stmívače. Řešení: vyměň žárovku za dimmable nebo stmívač za LED kompatibilní.</li>
                <li><strong>LED svítí i při vypnutém stmívači:</strong> Přes stmívač teče malý proud do LED — LED na to reaguje slabým svitem. Řešení: přidej zátěžový kondenzátor nebo vyměň za kompatibilní stmívač.</li>
                <li><strong>Stmívač se přehřívá:</strong> Přetížení — příliš vysoká zátěž nad maximem stmívače. Zkontroluj maximální výkon stmívače a celkový výkon připojených žárovek.</li>
                <li><strong>Stmívač bzučí nebo hučí:</strong> Elektromagnetické rušení — typické u levných stmívačů nebo nekompatibilních žárovek. Zkus jiný typ LED žárovky.</li>
              </ul>
            </section>

            <section id="kdy-elektrikar">
              <h2>Kdy volat elektrikáře</h2>
              <p>Výměna vypínače za stmívač je jednoduchá elektrikářská práce kterou zvládne šikovný laik. Existují ale situace kdy je odborník nutností.</p>
              <ul>
                <li><strong>Volej elektrikáře pokud:</strong> V krabici je více vodičů než očekáváš a nevíš jak jsou zapojeny. Jistič po zapnutí okamžitě vypadne. Chceš stmívač s přepínačem (ovládání ze dvou míst). Instalace není standardní nebo jsou vodiče poškozené.</li>
                <li><strong>Nemusíš volat elektrikáře pokud:</strong> Jde o jednoduché nahrazení vypínače stmívačem ve standardní jednopólové instalaci. Víš jak identifikovat vodiče a jak bezpečně pracovat s elektroinstalací.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejsi jistý zapojením, nafotografuj stav před demontáží a ukážeš elektrikáři. Ušetříš čas i peníze — elektrikář pak jen zkontroluje a dokončí práci.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu zapojit stmívač sám nebo potřebuji elektrikáře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Výměna vypínače za stmívač je zákonně povolená pro laiky jako drobná údržba — stejně jako výměna vypínače nebo zásuvky. Podmínkou je bezpečný postup (vypnutý jistič, ověření fázovou tužkou) a standardní instalace. Při sebemenší nejistotě volej elektrikáře.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč moje LED bliká na stmívači?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Tři nejčastější příčiny: (1) LED není označena jako DIMMABLE — nelze stmívat. (2) Stmívač je starý halogenový typ — nekompatibilní s LED. (3) Zátěž je nižší než minimum stmívače — přidej žárovky nebo kup stmívač s nižším minimem zátěže.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký stmívač koupit pro LED žárovky?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Hledej stmívač označený „LED dimmer" nebo „Universal dimmer". Oblíbené značky: Schneider Electric, Legrand, Jung, Busch-Jaeger. Před nákupem zkontroluj seznam kompatibilních žárovek na webu výrobce. Cena kvalitního LED stmívače je 300–600 Kč.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Funguje stmívač i pro svítidla s více žárovkami?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, ale součet výkonů všech žárovek musí být v rozsahu stmívače (minimum–maximum W). Například stmívač 10–200 W s pěti LED žárovkami po 9 W = 45 W celkem — to je v pořádku. Pokud celkový výkon překračuje maximum stmívače, stmívač se přehřívá a může se poškodit.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/instalovat-stmivac" title="Jak nainstalovat stmívač světla – zapojení krok za krokem 2026" />

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
                <li><a href="#typy">Typy stmívačů</a></li>
                <li><a href="#led">LED a stmívání</a></li>
                <li><a href="#postup">Zapojení krok za krokem</a></li>
                <li><a href="#problemy">Problémy a řešení</a></li>
                <li><a href="#kdy-elektrikar">Kdy volat elektrikáře</a></li>
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
