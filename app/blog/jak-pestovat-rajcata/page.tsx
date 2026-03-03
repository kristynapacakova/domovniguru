import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pěstovat rajčata – od výsevu po sklizeň 2025",
  description: "Rajčata zvládne vypěstovat každý – ale bez pár základních pravidel skončíš s prázdnými stonky nebo plísní. Kompletní průvodce od výsevu až po sklizeň.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-pestovat-rajcata" },
  openGraph: { title: "Jak pěstovat rajčata – od výsevu po sklizeň", description: "Kompletní průvodce pěstováním rajčat. Od výsevu přes přesazování až po sklizeň.", url: "https://domovniguru.cz/blog/jak-pestovat-rajcata", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-03-10T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak pěstovat rajčata", description: "Od výsevu po sklizeň – kompletní průvodce." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-pestovat-rajcata#article", "headline": "Jak pěstovat rajčata – od výsevu po sklizeň", "datePublished": "2025-03-10T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["jak pěstovat rajčata", "pěstování rajčat", "výsev rajčat", "rajčata na balkóně", "kdy sázet rajčata"] }] };

const RELATED = [
  { title: "Jak správně zalévat rostliny", href: "/blog/jak-spravne-zalevat", read: "5 min" },
  { title: "Ochrana rostlin před zimou – co, kdy a jak", href: "/blog/ochrana-rostlin-pred-zimou", read: "5 min" },
  { title: "Jak stříhat keře – průvodce pro každého", href: "/blog/jak-strihat-kere", read: "4 min" },
  { title: "Zahradní nástroje – jak o ně pečovat", href: "/blog/zahradni-nastroje-pece", read: "4 min" },
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
              <span>Jak pěstovat rajčata</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat rajčata – od výsevu po sklizeň</h1>
              <p className="article-lead">Rajčata jsou nejpěstovanější zelenina na českých zahrádkách – a přitom jich spousta skončí s prázdnými stonky, plísní nebo spálené sluncem. Pět klíčových věcí které to změní.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>

            {/* HERO ILLUSTRATION */}
            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="200" fill="#fdf8f2"/>

                {/* Ground */}
                <line x1="0" y1="170" x2="760" y2="170" stroke="#c8b89a" strokeWidth="1" opacity="0.5"/>

                {/* === LEFT: seedling tray === */}
                {/* Tray */}
                <rect x="40" y="148" width="120" height="24" rx="4" fill="none" stroke="#c8b89a" strokeWidth="1.5"/>
                {/* Dividers */}
                <line x1="64" y1="148" x2="64" y2="172" stroke="#c8b89a" strokeWidth="1" opacity="0.6"/>
                <line x1="88" y1="148" x2="88" y2="172" stroke="#c8b89a" strokeWidth="1" opacity="0.6"/>
                <line x1="112" y1="148" x2="112" y2="172" stroke="#c8b89a" strokeWidth="1" opacity="0.6"/>
                <line x1="136" y1="148" x2="136" y2="172" stroke="#c8b89a" strokeWidth="1" opacity="0.6"/>
                {/* Tiny seedlings */}
                <line x1="52" y1="148" x2="52" y2="128" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M52 138 Q44 132 42 124" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M52 134 Q60 128 62 120" stroke="#3a5c2e" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

                <line x1="76" y1="148" x2="76" y2="122" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M76 136 Q68 128 66 118" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M76 130 Q84 124 86 114" stroke="#3a5c2e" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

                <line x1="100" y1="148" x2="100" y2="130" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M100 140 Q92 134 90 124" stroke="#3a5c2e" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

                <line x1="124" y1="148" x2="124" y2="126" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M124 138 Q116 130 114 120" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M124 132 Q132 126 134 116" stroke="#3a5c2e" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

                <line x1="148" y1="148" x2="148" y2="132" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M148 142 Q140 136 138 126" stroke="#3a5c2e" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

                {/* === CENTER: mature tomato plant === */}
                {/* Main stem */}
                <line x1="360" y1="170" x2="360" y2="32" stroke="#3a5c2e" strokeWidth="2.5" strokeLinecap="round"/>
                {/* Branches */}
                <path d="M360 130 Q326 112 312 88" stroke="#3a5c2e" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M360 110 Q394 94 406 68" stroke="#3a5c2e" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M360 86 Q330 70 318 46" stroke="#3a5c2e" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M360 64 Q388 50 398 28" stroke="#3a5c2e" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M360 150 Q338 138 330 120" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M360 150 Q382 138 390 122" stroke="#3a5c2e" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

                {/* Tomatoes — ripe red */}
                <circle cx="308" cy="84" r="14" fill="#c0392b"/>
                <circle cx="318" cy="42" r="12" fill="#c0392b"/>
                <circle cx="404" cy="64" r="13" fill="#c0392b"/>
                <circle cx="396" cy="24" r="10" fill="#e74c3c"/>
                {/* Green unripe */}
                <circle cx="326" cy="116" r="10" fill="#5a9e6f"/>
                <circle cx="388" cy="118" r="9" fill="#5a9e6f"/>
                {/* Stem caps */}
                <path d="M304 75 Q308 71 312 75" stroke="#3a5c2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M314 33 Q318 29 322 33" stroke="#3a5c2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M400 55 Q404 51 408 55" stroke="#3a5c2e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M392 15 Q396 11 400 15" stroke="#3a5c2e" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

                {/* Stake */}
                <line x1="376" y1="170" x2="376" y2="28" stroke="#c8b89a" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" opacity="0.7"/>
                {/* Tie */}
                <path d="M360 100 Q368 96 376 100" stroke="#c8b89a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M360 60 Q368 56 376 60" stroke="#c8b89a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

                {/* === RIGHT: harvest basket === */}
                {/* Basket */}
                <path d="M580 142 Q580 176 620 176 Q660 176 660 142 Z" fill="none" stroke="#c8b89a" strokeWidth="2"/>
                {/* Basket weave lines */}
                <path d="M585 152 Q620 156 655 152" stroke="#c8b89a" strokeWidth="1" opacity="0.5" fill="none"/>
                <path d="M583 162 Q620 166 657 162" stroke="#c8b89a" strokeWidth="1" opacity="0.5" fill="none"/>
                {/* Handle */}
                <path d="M592 142 Q620 126 648 142" stroke="#c8b89a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                {/* Tomatoes in basket */}
                <circle cx="604" cy="148" r="13" fill="#c0392b"/>
                <circle cx="628" cy="145" r="14" fill="#e74c3c"/>
                <circle cx="648" cy="150" r="11" fill="#c0392b"/>
                <circle cx="615" cy="136" r="10" fill="#e74c3c"/>
                <circle cx="638" cy="134" r="9" fill="#c0392b"/>
                {/* Stem caps on basket tomatoes */}
                <path d="M600 139 Q604 135 608 139" stroke="#3a5c2e" strokeWidth="1.2" fill="none"/>
                <path d="M624 135 Q628 131 632 135" stroke="#3a5c2e" strokeWidth="1.2" fill="none"/>

                {/* === LABELS — subtle === */}
                <text x="100" y="194" fontFamily="var(--font-sans, sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">VÝSEV</text>
                <text x="368" y="194" fontFamily="var(--font-sans, sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">RŮST</text>
                <text x="620" y="194" fontFamily="var(--font-sans, sans-serif)" fontSize="9" fill="#c8b89a" textAnchor="middle" letterSpacing="0.08em">SKLIZEŇ</text>

                {/* Arrows between stages */}
                <path d="M200 155 L240 155" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M236 151 L241 155 L236 159" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M500 155 L548 155" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M544 151 L549 155 L544 159" stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#odrudy">Výběr odrůdy</a></li>
                <li><a href="#vysev">Výsev – kdy a jak</a></li>
                <li><a href="#presazovani">Přesazování ven</a></li>
                <li><a href="#pece">Péče během sezóny</a></li>
                <li><a href="#problemy">Nejčastější problémy</a></li>
                <li><a href="#sklizen">Sklizeň a skladování</a></li>
              </ol>
            </nav>

            <section id="odrudy">
              <h2>Výběr odrůdy – základ úspěchu</h2>
              <p>Než koupíš semena, rozmysli kde budeš rajčata pěstovat. To určuje odrůdu víc než chuťové preference.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Místo pěstování</th><th>Vhodné odrůdy</th><th>Proč</th></tr></thead>
                  <tbody>
                    <tr><td>Velká zahrada</td><td>Beefsteak, Brandywine, Oxheart</td><td>Vysoké tyčkové, velké plody</td></tr>
                    <tr><td>Malá zahrádka</td><td>San Marzano, Stupické polní</td><td>Kompaktnější, odolnější</td></tr>
                    <tr><td>Balkón / terasa</td><td>Tumbling Tom, Balkonzauber</td><td>Převislé, do nádob</td></tr>
                    <tr><td>Skleník</td><td>Coktejlové, cherry odrůdy</td><td>Maximální výnos</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pro začátečníky je nejjistější Stupické polní rané – odolné vůči plísni, rychle zraje, chutné. Nehledej exotiku v prvním roce.</div>
            </section>

            <section id="vysev">
              <h2>Výsev – kdy a jak</h2>
              <p>Rajčata se vysévají <strong>v únoru až březnu</strong> na parapet nebo pod umělé osvětlení. Venku se sází až po 15. května, kdy nehrozí mráz – to znamená, že sazenice musí být 10–12 týdnů staré.</p>
              <h3>Postup výsevu krok za krokem</h3>
              <ul>
                <li><strong>Krok 1:</strong> Naplň sadbovač nebo kelímky substrátem pro výsev (jemný, bez hrubé kůry)</li>
                <li><strong>Krok 2:</strong> Vlhký substrát – semena položte na povrch, zakryj 5 mm substrátem</li>
                <li><strong>Krok 3:</strong> Zakryj fólií nebo sklem – vytvoříš mini skleník, teplota 20–25 °C</li>
                <li><strong>Krok 4:</strong> Klíčení za 5–10 dní, po vyklíčení fólii sundej</li>
                <li><strong>Krok 5:</strong> Pikýrování (přesazení do většího kelímku) při výšce 5–7 cm</li>
              </ul>
              <div className="article-tip"><strong>💡 Světlo je klíčové:</strong> Sazenice na parapetu bez přisvětlení jsou vytáhlé a slabé. Buď je přisvětluj LED lampou (12–14 hod denně), nebo počkej na konec března.</div>
            </section>

            <section id="presazovani">
              <h2>Přesazování ven – načasování je vše</h2>
              <p>Nejčastější chyba: vysázení ven příliš brzy. Jedno podcenění mrazu zničí celou sezónu. Bezpečné datum je <strong>po 15. květnu</strong> – a ani tehdy není záruka. Sleduj předpověď.</p>
              <h3>Příprava sazenice na venkovní podmínky</h3>
              <p>Týden před výsadbou začni sazenice "otužovat" – každý den je vynes na 2–3 hodiny ven na chráněné místo. Postupně prodlužuj čas. Bez otužení sazenice stres z přesazení nemusí přežít.</p>
              <h3>Výsadba</h3>
              <ul>
                <li>Hloubka: zasaď hluboko – až po první pravé listy. Rajčata tvoří kořeny z celého pohřbeného stonku</li>
                <li>Rozestupy: tyčkové odrůdy 60–70 cm, keříčkové 40–50 cm</li>
                <li>Hned při výsadbě zaraž tyč nebo nastav konstrukci – pozdější zarážení poškozuje kořeny</li>
                <li>Po výsadbě dobře zalej a mulčuj</li>
              </ul>
            </section>

            <section id="pece">
              <h2>Péče během sezóny</h2>
              <h3>Zaštipování a vedení</h3>
              <p>U tyčkových odrůd odstraňuj <strong>výhony z paždí</strong> (tzv. pastorky) – výhonky které rostou mezi hlavním stonkem a listem. Pokud je necháš, rostlina plýtvá energií na listy místo plodů. Odlamuj je rukou nebo nůžkami ráno, aby rána přes den zaschla.</p>
              <p>Keříčkové odrůdy nezaštipuj – rostou přirozeně do keře.</p>
              <h3>Zálivka</h3>
              <p>Rajčata nesnášejí nepravidelnou zálivku – střídání sucha a přelití způsobuje <strong>pukání plodů</strong> a hnědnutí dna (vrcholová hniloba). Zaléváme pravidelně přímo k zemi, ne na listy. V horkém létě každý den ráno.</p>
              <h3>Hnojení</h3>
              <ul>
                <li>Do výsadby: zapracuj kompost nebo hnojivo do záhonu</li>
                <li>Po nasazení plodů: přihnojuj draslíkem každé 2 týdny (podpoří zrání)</li>
                <li>Nepřehnoj dusíkem – rostlina bujní do listů, neplodí</li>
              </ul>
            </section>

            <section id="problemy">
              <h2>Nejčastější problémy</h2>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Problém</th><th>Příčina</th><th>Řešení</th></tr></thead>
                  <tbody>
                    <tr><td>Hnědé dno plodů</td><td>Nedostatek vápníku, nepravidelná zálivka</td><td>Pravidelná zálivka, vápník do půdy</td></tr>
                    <tr><td>Praskání plodů</td><td>Náhlé přelití po suchu</td><td>Rovnoměrná zálivka, mulč</td></tr>
                    <tr><td>Plíseň bramborová</td><td>Vlhké počasí, mokré listy</td><td>Odolné odrůdy, fungicid preventivně</td></tr>
                    <tr><td>Žluté listy dole</td><td>Přirozené stárnutí nebo přelití</td><td>Odstraň, zkontroluj zálivku</td></tr>
                    <tr><td>Vytáhlé sazenice</td><td>Málo světla při výsevu</td><td>Přisvětlení, nebo zahrabat hlouběji</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>⚠️ Plíseň bramborová:</strong> Přijde každý rok a nedá se zastavit – dá se jen zpomalit. Odstraňuj postižené listy okamžitě, nestříkej vodu na listy a vyber odolné odrůdy (Primabella, Phantasia).</div>
            </section>

            <section id="sklizen">
              <h2>Sklizeň a skladování</h2>
              <p>Rajčata sklízej až jsou plně zbarvená a mírně povolují pod prstem. Nesklízej zelená – dozrají sice při pokojové teplotě, ale bez chuti. Výjimkou je situace kdy hrozí plíseň nebo mráz – pak sklidíš i zelená a necháš dozrát v teple.</p>
              <p><strong>Nikdy nedávej rajčata do lednice</strong> – chlad ničí chuťové látky nevratně. Optimální teplota skladování je 13–18 °C, maximálně týden.</p>
              <p>Přebytek zpracuj: rajčatová passata, sušená rajčata nebo zamraž jako protlak. Syrová rajčata se mrazit nedají – po rozmrazení jsou vodnatá.</p>
            </section>

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
                <li><a href="#odrudy">Výběr odrůdy</a></li>
                <li><a href="#vysev">Výsev</a></li>
                <li><a href="#presazovani">Přesazování ven</a></li>
                <li><a href="#pece">Péče během sezóny</a></li>
                <li><a href="#problemy">Nejčastější problémy</a></li>
                <li><a href="#sklizen">Sklizeň a skladování</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>20 článků →</span></Link>
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
        .hero-illustration { margin: 28px 0 36px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border); }
        .hero-svg { width: 100%; height: auto; display: block; }
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
