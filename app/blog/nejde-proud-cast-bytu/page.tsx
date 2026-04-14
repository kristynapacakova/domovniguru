import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Co dělat když nejde proud v části bytu – postup 2026",
  description: "Vypadl jistič nebo chránič? Postup krok za krokem jak najít příčinu výpadku proudu v části bytu, jak resetovat jistič a kdy volat elektrikáře.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/nejde-proud-cast-bytu" },
  openGraph: { title: "Co dělat když nejde proud v části bytu 2026", description: "Vypadl jistič nebo chránič? Postup jak najít příčinu a kdy volat elektrikáře.", url: "https://www.domovniguru.cz/blog/nejde-proud-cast-bytu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-04-14T08:00:00Z", modifiedTime: "2026-04-14T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Co dělat když nejde proud v části bytu 2026", description: "Vypadl jistič nebo chránič? Postup jak najít příčinu." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/nejde-proud-cast-bytu#article",
    "headline": "Co dělat když nejde proud v části bytu – postup 2026",
    "datePublished": "2026-04-14T08:00:00Z",
    "dateModified": "2026-04-14T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["nejde proud část bytu", "vypadl jistič", "jak resetovat jistič", "výpadek proudu byt", "chránič proudu", "přetížení obvodu", "vypadl chránič"]
  }]
};

const RELATED = [
  { title: "Proč mi vypadává jistič?", href: "/blog/proc-vypadava-jistic", read: "4 min" },
  { title: "Jak vyměnit zásuvku sám", href: "/blog/jak-vymenit-zasuvku", read: "5 min" },
  { title: "Jak fungují pojistky a jak je vyměnit", href: "/blog/jak-funguji-pojistky", read: "4 min" },
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
              <span>Nejde proud v části bytu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Co dělat když nejde proud v části bytu</h1>
              <p className="article-lead">Najednou nefungují zásuvky v kuchyni nebo zhasnulo světlo v celém pokoji — ale zbytek bytu funguje. Příčinou je téměř vždy vypadlý jistič nebo chránič. Tady je postup jak to vyřešit za 5 minut.</p>
              <div className="article-meta-row"><span>Aktualizováno: 14. dubna 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/nejde-proud-cast-bytu" title="Co dělat když nejde proud v části bytu – postup 2026" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 195" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="195" fill="#f8f6f2"/>

                {/* Rozvaděč */}
                <g transform="translate(30,20)">
                  <rect x="0" y="0" width="180" height="155" rx="8" fill="#2a2a30" stroke="#3a3a40" strokeWidth="1.5"/>
                  <text x="90" y="18" textAnchor="middle" fontSize="9" fill="#a0a0b0" fontWeight="700">ROZVADĚČ</text>
                  {/* Hlavní jistič */}
                  <rect x="15" y="24" width="150" height="20" rx="3" fill="#3a3a45" stroke="#5a5a65" strokeWidth="0.8"/>
                  <text x="90" y="37" textAnchor="middle" fontSize="8" fill="#8080a0">Hlavní jistič (25A)</text>
                  {/* Chrániče a jističe */}
                  {[
                    { label: "Světla", state: "ok", y: 52 },
                    { label: "Zásuvky", state: "ok", y: 70 },
                    { label: "Kuchyně", state: "trip", y: 88 },
                    { label: "Koupelna", state: "ok", y: 106 },
                    { label: "Chránič", state: "trip", y: 124 },
                  ].map(({label, state, y}) => (
                    <g key={y}>
                      <rect x="15" y={y} width="150" height="14" rx="2" fill={state==="trip" ? "#3a1a1a" : "#1a2a1a"} stroke={state==="trip" ? "#e07a5f" : "#4a7a4a"} strokeWidth="0.8"/>
                      <circle cx="155" cy={y+7} r="5" fill={state==="trip" ? "#e07a5f" : "#4ade80"}/>
                      <text x="25" y={y+9} fontSize="7.5" fill={state==="trip" ? "#e07a5f" : "#4ade80"} fontWeight="600">{label}</text>
                      {state==="trip" && <text x="80" y={y+9} fontSize="7" fill="#e07a5f">VYPADL →</text>}
                    </g>
                  ))}
                  <text x="90" y="150" textAnchor="middle" fontSize="7" fill="#6a6a80">červená = problém</text>
                </g>

                {/* Postup */}
                <g transform="translate(228,15)">
                  <rect x="0" y="0" width="280" height="162" rx="8" fill="#fff" stroke="#e0d8d0" strokeWidth="1"/>
                  <text x="140" y="18" textAnchor="middle" fontSize="9" fill="#6a6050" fontWeight="700">POSTUP KROK ZA KROKEM</text>
                  {[
                    { n:"1", text:"Najdi rozvaděč (chodba, předsíň)", color:"#4a90d9" },
                    { n:"2", text:"Najdi přepnutý jistič nebo chránič", color:"#f59e0b" },
                    { n:"3", text:"Odpoj spotřebiče z postižených zásuvek", color:"#9b6fd4" },
                    { n:"4", text:"Přepni jistič zpět do polohy ON", color:"#5a9e6f" },
                    { n:"5", text:"Připojuj spotřebiče postupně", color:"#e07040" },
                    { n:"6", text:"Najdi vadný spotřebič (který způsobí výpadek)", color:"#e07a5f" },
                  ].map(({n, text, color}, i) => (
                    <g key={i} transform={`translate(12, ${25+i*22})`}>
                      <circle cx="10" cy="9" r="9" fill={color} opacity="0.15"/>
                      <text x="10" y="13" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">{n}</text>
                      <text x="26" y="13" fontSize="9" fill="#2a2a28" fontWeight="500">{text}</text>
                    </g>
                  ))}
                </g>

                {/* Kdy elektrikář */}
                <g transform="translate(522,15)">
                  <rect x="0" y="0" width="218" height="162" rx="8" fill="#fff8f0" stroke="#fcd34d" strokeWidth="1"/>
                  <text x="109" y="18" textAnchor="middle" fontSize="9" fill="#d97706" fontWeight="700">🔧 VOLEJ ELEKTRIKÁŘE</text>
                  {[
                    "Jistič vypadá hned po resetu",
                    "Cítíš spálený plastik",
                    "Jistič je horký na dotek",
                    "Výpadek se opakuje týdně",
                    "Stará domácnost s pojistkami",
                    "Nevíš co je vadný spotřebič",
                  ].map((text, i) => (
                    <g key={i} transform={`translate(12, ${28+i*21})`}>
                      <text x="0" y="10" fontSize="11" fill="#e07040">⚠</text>
                      <text x="18" y="11" fontSize="8.5" fill="#4a4a40">{text}</text>
                    </g>
                  ))}
                </g>

                <rect y="177" width="760" height="18" fill="#fef9f0" opacity="0.6"/>
                <text x="380" y="189" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="600" letterSpacing="0.06em">⚡ NIKDY NEZAPÍNEJ JISTIČ BEZ ODPOJENÍ SPOTŘEBIČŮ · OPAKOVANÝ VÝPADEK = ELEKTRIKÁŘ</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priciny">Proč nejde proud jen v části bytu</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#jistic-vs-chranič">Jistič vs. chránič – jaký je rozdíl</a></li>
                <li><a href="#vadny">Jak najít vadný spotřebič</a></li>
                <li><a href="#elektrikar">Kdy volat elektrikáře</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="priciny">
              <h2>Proč nejde proud jen v části bytu</h2>
              <p>Moderní elektroinstalace bytu je rozdělena do několika okruhů — každý okruh má svůj jistič nebo chránič v rozvaděči. Pokud vypadne jen část bytu, problém je téměř vždy v jednom konkrétním okruhu.</p>
              <ul>
                <li><strong>Přetížení obvodu:</strong> Nejčastější příčina. Příliš mnoho spotřebičů na jednom okruhu — jistič ochrání vedení a odpojí okruh. Typicky kuchyně s troubou, mikrovlnkou a konvicí na jedné zásuvkové liště.</li>
                <li><strong>Zkrat:</strong> Poškozený spotřebič nebo vodič způsobí zkrat — jistič okamžitě vypne. Po vypadnutí jističe hledej poškozený spotřebič.</li>
                <li><strong>Zemní porucha (FI chránič):</strong> Chránič (FI relé) chrání před úrazem elektrickým proudem. Vypne při malém úniku proudu do země — poškozená izolace spotřebiče, vlhkost v zásuvce nebo vadný spotřebič.</li>
                <li><strong>Vadná zásuvka nebo spoj:</strong> Méně časté — uvolněný spoj v zásuvce nebo krabici způsobuje výpadek při zatížení.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Rozvaděč najdeš obvykle v chodbě, předsíni nebo v technické místnosti. Pokud nevíš kde je, podívej se za vstupními dveřmi nebo požádej správce budovy.</div>
            </section>

            <section id="postup">
              <h2>Postup krok za krokem</h2>
              <ul>
                <li><strong>Krok 1 — Otevři rozvaděč:</strong> Najdi rozvaděč a otevři dvířka. Přepnuté jističe nebo chrániče jsou viditelné — přepnutý jistič je v poloze mezi ON a OFF, nebo je viditelně přeskočen dolů.</li>
                <li><strong>Krok 2 — Identifikuj přepnutý prvek:</strong> Jistič přeskočený do střední nebo dolní polohy. Chránič (FI) s vyskočeným tlačítkem TEST. Pokud nevíš co je co, zkus přepnout každý prvek — přepnutý půjde snáze dolů.</li>
                <li><strong>Krok 3 — Odpoj spotřebiče:</strong> Z postižených zásuvek odpoj VŠECHNY spotřebiče. Pokud resetuješ jistič bez tohoto kroku a problém přetrvává, jistič okamžitě vypadne znovu.</li>
                <li><strong>Krok 4 — Resetuj jistič nebo chránič:</strong> Jistič přepni zpět do polohy ON (nahoru). Chránič: nejdřív stlač tlačítko dolů (OFF), pak zpět nahoru (ON).</li>
                <li><strong>Krok 5 — Připojuj spotřebiče postupně:</strong> Jeden po druhém připojuj spotřebiče. Ten který způsobí opětovný výpadek je vadný — odlož ho a nechej opravit nebo vyměnit.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Pokud jistič vypadne okamžitě po resetu ještě před připojením jakéhokoli spotřebiče, jde o problém v samotné elektroinstalaci (zkrat ve vedení nebo zásuvce) — volej elektrikáře.</div>
            </section>

            <section id="jistic-vs-chranič">
              <h2>Jistič vs. chránič – jaký je rozdíl</h2>
              <p>V rozvaděči jsou dva typy ochranných prvků — liší se funkcí i tím jak je poznáš.</p>
              <ul>
                <li><strong>Jistič (MCB):</strong> Chrání vedení před přetížením a zkratem. Vypadne když obvod odebírá příliš velký proud (přetížení) nebo dojde ke zkratu. Resetuje se přepnutím páčky zpět do polohy ON.</li>
                <li><strong>Chránič / FI relé (RCD):</strong> Chrání osoby před úrazem elektrickým proudem. Vypadne při malém úniku proudu do země (zlomený vodič, vlhkost, vadný spotřebič). Resetuje se stlačením páčky dolů a zpět nahoru. Má tlačítko TEST pro pravidelné testování.</li>
                <li><strong>RCBO (kombinovaný):</strong> Kombinuje funkci jističe i chrániče v jednom přístroji. Stále běžnější v moderních instalacích.</li>
              </ul>
            </section>

            <section id="vadny">
              <h2>Jak najít vadný spotřebič</h2>
              <p>Pokud jistič nebo chránič po resetu drží ale vypadne při připojení určitého spotřebiče, postup je jednoduchý:</p>
              <ul>
                <li><strong>Systematické testování:</strong> Připojuj spotřebiče jeden po druhém s minutovým odstupem. Ten který způsobí výpadek je vadný.</li>
                <li><strong>Podezřelí kandidáti:</strong> Starší spotřebiče, spotřebiče v koupelně nebo kuchyni (kontakt s vodou), prodlužovací kabely s viditelným poškozením, spotřebiče které nedávno vydávaly nezvyklé zvuky nebo zápach.</li>
                <li><strong>Vadný spotřebič neopravuj sám:</strong> Pokud spotřebič způsobuje zkrat, jde o bezpečnostní problém. Nechej ho opravit v servisu nebo vyhoď.</li>
              </ul>
            </section>

            <section id="elektrikar">
              <h2>Kdy volat elektrikáře</h2>
              <ul>
                <li><strong>Jistič vypadne okamžitě po resetu bez připojených spotřebičů</strong> — zkrat ve vedení nebo zásuvce</li>
                <li><strong>Cítíš spálený plastik nebo viníš kouř</strong> — okamžitě volej, může jít o požár v elektroinstalaci</li>
                <li><strong>Jistič nebo rozvaděč je horký na dotek</strong> — přetížení nebo vadný spoj</li>
                <li><strong>Výpadek se opakuje pravidelně</strong> bez zjevné příčiny</li>
                <li><strong>Máš starý byt s pojistkami místo jističů</strong> — zastaralá instalace vyžaduje odbornou kontrolu</li>
                <li><strong>Výpadek po zalití nebo vytopení</strong> — vlhkost v elektroinstalaci je nebezpečná</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Havarijní číslo elektrikáře měj uložené v telefonu ještě než ho budeš potřebovat. Ve tmě nebo ve stresu hledáš kontakt v aplikacích — zbytečná ztráta času.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Mohu jistič resetovat sám nebo potřebuji elektrikáře?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Reset jističe nebo chrániče po přetížení zvládneš sám — nejde o práci na elektroinstalaci. Stačí odpojit spotřebiče a přepnout páčku zpět. Elektrikáře potřebuješ pokud jistič vypadne okamžitě po resetu, opakovaně bez zjevné příčiny nebo pokud cítíš spálený plastik.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám který jistič je přepnutý?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Přepnutý jistič je v jiné poloze než ostatní — buď v mezilehlé poloze nebo úplně dole (OFF). Některé jističe mají červené okénko viditelné při výpadku. Pokud jsou všechny jističe stejně orientované, zkus každý otočit — přepnutý půjde snáze do polohy OFF bez odporu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč chránič vypadává i bez vadného spotřebiče?<span className="faq-item">▾</span></summary>
                  <div className="faq-body">Chránič může vypadávat z několika důvodů bez zjevně vadného spotřebiče: vlhkost v zásuvce nebo krabici, stárnutí izolace vedení, příliš citlivý chránič (30 mA vs. 300 mA), nebo rušení od určitých typů spotřebičů (frekvenční měniče, UPS). Pokud nelze najít příčinu, zavolej elektrikáře na diagnostiku.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co dělat když nejde proud v celém bytě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejprve zkontroluj zda nejde o výpadek v celém domě nebo oblasti — podívej se z okna na světla sousedů. Pokud je výpadek jen u tebe, zkontroluj hlavní jistič v rozvaděči (největší nebo nejvýše umístěný). Pokud je v pořádku, kontaktuj dodavatele elektřiny nebo správce budovy.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/nejde-proud-cast-bytu" title="Co dělat když nejde proud v části bytu – postup 2026" />

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
                <li><a href="#priciny">Proč nejde proud</a></li>
                <li><a href="#postup">Postup krok za krokem</a></li>
                <li><a href="#jistic-vs-chranič">Jistič vs. chránič</a></li>
                <li><a href="#vadny">Vadný spotřebič</a></li>
                <li><a href="#elektrikar">Kdy elektrikář</a></li>
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
