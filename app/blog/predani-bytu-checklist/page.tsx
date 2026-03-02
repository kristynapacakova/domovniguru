import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Co zkontrolovat při přebírání nového bytu – checklist 2025",
  description: "Přebíráš nový byt nebo dům? Kompletní checklist co zkontrolovat: elektrika, voda, topení, okna, stěny, dokumenty. Nic nezapomeneš.",
  alternates: { canonical: "https://domovniguru.cz/blog/prebrani-bytu-checklist" },
  openGraph: { title: "Co zkontrolovat při přebírání nového bytu – checklist", description: "Elektrika, voda, topení, okna, dokumenty. Kompletní checklist.", url: "https://domovniguru.cz/blog/prebrani-bytu-checklist", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-02-20T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Co zkontrolovat při přebírání nového bytu", description: "Kompletní checklist pro přebírání bytu nebo domu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/prebrani-bytu-checklist#article", "headline": "Co zkontrolovat při přebírání nového bytu – checklist", "datePublished": "2025-02-20T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["přebírání bytu checklist", "co zkontrolovat v novém bytě", "předávací protokol byt", "přebírání nemovitosti"] }] };

const RELATED = [
  { title: "Stěhování bez stresu – kompletní checklist", href: "/blog/stehovani-checklist", read: "5 min" },
  { title: "Jak vymalovat byt před stěhováním", href: "/blog/malovani-pred-stehovani", read: "5 min" },
  { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Jak připravit dům na zimu – checklist", href: "/blog/jak-pripravit-dum-na-zimu", read: "5 min" },
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
              <span>Přebírání bytu checklist</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">📦 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 4 min čtení</span>
              </div>
              <h1 className="article-h1">Co zkontrolovat při přebírání nového bytu – kompletní checklist</h1>
              <p className="article-lead">Přebírání bytu je moment, kdy se rozhoduje, za co budeš nebo nebudeš platit. Co nepodchytíš teď, zaplatíš později – buď z vlastní kapsy, nebo po zbytečném sporu s prodávajícím nebo pronajímatelem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#pred-probirani">Než vstoupíš dovnitř</a></li>
                <li><a href="#elektrika">Elektrika a osvětlení</a></li>
                <li><a href="#voda-topeni">Voda a topení</a></li>
                <li><a href="#okna-dvere">Okna a dveře</a></li>
                <li><a href="#steny-podlahy">Stěny, stropy a podlahy</a></li>
                <li><a href="#dokumenty">Dokumenty a klíče</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
              </ol>
            </nav>

            <section id="pred-probirani">
              <h2>Než vstoupíš dovnitř – příprava</h2>
              <p>Na přebírání si vezmi:</p>
              <ul>
                <li><strong>Telefon nebo foťák</strong> – fotodokumentace je klíčová</li>
                <li><strong>Zkoušečku zásuvek</strong> (nebo nabíječku telefonu) – na otestování elektřiny</li>
                <li><strong>Baterku</strong> – pro tmavé rohy, sklep, průchody</li>
                <li><strong>Tužku nebo papír</strong> na poznámky</li>
                <li><strong>Předávací protokol</strong> od prodávajícího nebo pronajímatele – pokud ho nemáš, vyžádej ho nebo si sám vypracuj</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Přebírání dělej za denního světla – umělé osvětlení může zakrýt trhliny, vlhkostní skvrny a povrchové vady. Večerní přebírání je nevýhodné.</div>
            </section>

            <section id="elektrika">
              <h2>Elektrika a osvětlení</h2>
              <ul>
                <li><strong>Zapni každou zásuvku</strong> – zasuň nabíječku nebo zkoušečku do každé zásuvky v každé místnosti</li>
                <li><strong>Zapni každý vypínač</strong> – zkontroluj, zda svítí a zda je spínač funkční</li>
                <li><strong>Zkontroluj rozvaděč</strong> – jsou tam jističe? Jsou popsané (kuchyň, koupelna, ložnice)?</li>
                <li><strong>Internet a TV přípojky</strong> – kde jsou zásuvky pro TV anténu a internet?</li>
                <li><strong>Odpočet elektroměru</strong> – zapište nebo vyfotografujte stav elektroměru při přebírání</li>
              </ul>
            </section>

            <section id="voda-topeni">
              <h2>Voda a topení</h2>
              <ul>
                <li><strong>Pouštěj vodu na každém kohoutku</strong> – studená i teplá voda, dostatečný tlak</li>
                <li><strong>Zkontroluj odtok</strong> – voda musí rychle odtékat z umyvadel, vany, sprchy</li>
                <li><strong>Splachování WC</strong> – zkontroluj funkci, případné přetékání nebo úniky</li>
                <li><strong>Radiátory</strong> – zkontroluj, zda jsou teplé a zda nejsou rezavé nebo poškozené</li>
                <li><strong>Boiler nebo kotel</strong> – kde je, jak se ovládá, kdy byl servisován?</li>
                <li><strong>Odpočty vodoměrů</strong> – studená i teplá voda, vyfotografuj</li>
                <li><strong>Hlavní uzávěr vody</strong> – zjisti kde je</li>
              </ul>
            </section>

            <section id="okna-dvere">
              <h2>Okna a dveře</h2>
              <ul>
                <li><strong>Otevři každé okno</strong> – musí jít lehce otevřít, zavřít a zajistit. Zkontroluj těsnění.</li>
                <li><strong>Zkontroluj žaluzie a rolety</strong> – funkce, stav lamel</li>
                <li><strong>Vstupní dveře</strong> – správné zavírání, funkce zámků, bezpečnostní kování</li>
                <li><strong>Balkónové a terrasové dveře</strong> – těsnění, funkce kování</li>
                <li><strong>Vnitřní dveře</strong> – zavírají správně, nejsou popraskané nebo poškozené rámy?</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Rámy oken a dveří jsou typická místa výskytu vlhkosti a plísní. Prohlédni rohy a dolní části rámů důkladně.</div>
            </section>

            <section id="steny-podlahy">
              <h2>Stěny, stropy a podlahy</h2>
              <ul>
                <li><strong>Vlhkostní skvrny</strong> – hledej hnědé nebo šedé skvrny zejm. u oken, v rozích a na stropě</li>
                <li><strong>Plíseň</strong> – zkontroluj za nábytkem, v koupelně, v rozích a kolem oken</li>
                <li><strong>Trhliny ve stěnách</strong> – tenké vlasové trhliny jsou normální; diagonální nebo širší trhliny mohou signalizovat statické problémy</li>
                <li><strong>Podlahy</strong> – chůzí po celé ploše zkontroluj skřípání, pružnost a uvolněné dlaždice</li>
                <li><strong>Strop</strong> – skvrny, trhliny, odpadávající omítka</li>
                <li><strong>Koupelna a WC</strong> – spáry kolem vany a sprchy, stav dlažby, funkce větráku</li>
              </ul>
            </section>

            <section id="dokumenty">
              <h2>Dokumenty a klíče</h2>
              <ul>
                <li><strong>Klíče</strong> – kolik sad klíčů předávají? Od bytu, schránky, sklepa, garáže, hlavního vchodu</li>
                <li><strong>Předávací protokol</strong> – podepsaný oběma stranami, s odpočty měřičů a seznamem vad</li>
                <li><strong>Manuály a záruční listy</strong> – k spotřebičům, kotli, klimatizaci</li>
                <li><strong>Kontakt na správce domu</strong> nebo bytové družstvo</li>
                <li><strong>Revizní zprávy</strong> – elektroinstalace, kotel, komín (zejm. u starších nemovitostí)</li>
                <li><strong>Smlouva o energiích</strong> – čísla odběrných míst pro přepis</li>
              </ul>
            </section>

            <section id="checklist">
              <h2>Kompletní checklist v bodech</h2>
              <div className="article-tip"><strong>✅ Elektrika</strong></div>
              <ul>
                <li>Každá zásuvka otestována</li>
                <li>Každý vypínač funguje</li>
                <li>Rozvaděč zkontrolován</li>
                <li>Odpočet elektroměru vyfotografován</li>
              </ul>
              <div className="article-tip"><strong>✅ Voda a topení</strong></div>
              <ul>
                <li>Každý kohout – studená i teplá voda</li>
                <li>Odtoky funkční</li>
                <li>WC splachuje správně</li>
                <li>Radiátory teplé</li>
                <li>Odpočty vodoměrů vyfotografovány</li>
                <li>Hlavní uzávěr vody znám</li>
              </ul>
              <div className="article-tip"><strong>✅ Okna a dveře</strong></div>
              <ul>
                <li>Každé okno otevřeno a zavřeno</li>
                <li>Těsnění zkontrolováno</li>
                <li>Vstupní dveře a zámky funkční</li>
              </ul>
              <div className="article-tip"><strong>✅ Stěny a podlahy</strong></div>
              <ul>
                <li>Celá plocha nafotografována</li>
                <li>Vlhkostní skvrny zaznamenány</li>
                <li>Podlahy prošlapány</li>
              </ul>
              <div className="article-tip"><strong>✅ Dokumenty</strong></div>
              <ul>
                <li>Předávací protokol podepsán</li>
                <li>Klíče přebrány a spočítány</li>
                <li>Manuály k zařízením předány</li>
              </ul>
            </section>

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
                <li><a href="#pred-probirani">Než vstoupíš dovnitř</a></li>
                <li><a href="#elektrika">Elektrika</a></li>
                <li><a href="#voda-topeni">Voda a topení</a></li>
                <li><a href="#okna-dvere">Okna a dveře</a></li>
                <li><a href="#steny-podlahy">Stěny a podlahy</a></li>
                <li><a href="#dokumenty">Dokumenty a klíče</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">📦 Stěhování & rekonstrukce<span>20 článků →</span></Link>
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
