import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak připravit dům na zimu – kompletní checklist 2025",
  description: "Co udělat doma před zimou: topení, okna, střecha, okapy, zahrada a sklep. Checklist krok za krokem, nic nezapomeneš.",
  alternates: { canonical: "https://domovniguru.cz/blog/jak-pripravit-dum-na-zimu" },
  openGraph: { title: "Jak připravit dům na zimu – kompletní checklist", description: "Topení, okna, střecha, okapy a zahrada. Checklist před zimou.", url: "https://domovniguru.cz/blog/jak-pripravit-dum-na-zimu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2025-09-01T08:00:00Z", modifiedTime: "2025-03-01T08:00:00Z", authors: ["DomovniGuru"] },
  twitter: { card: "summary_large_image", title: "Jak připravit dům na zimu – kompletní checklist", description: "Co udělat doma před zimou. Checklist krok za krokem." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://domovniguru.cz/blog/jak-pripravit-dum-na-zimu#article", "headline": "Jak připravit dům na zimu – kompletní checklist", "datePublished": "2025-09-01T08:00:00Z", "dateModified": "2025-03-01T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://domovniguru.cz" }, "inLanguage": "cs", "keywords": ["příprava domu na zimu", "zimní checklist", "jak připravit dům na zimu", "topení příprava", "okapy před zimou"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak připravit dům na zimu", "item": "https://domovniguru.cz/blog/jak-pripravit-dum-na-zimu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy začít připravovat dům na zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Ideálně v září a říjnu, než přijdou první mrazy. Nejdůležitější práce jako servis kotle, odvzdušnění radiátorů a čištění okapů udělej do konce října." } }, { "@type": "Question", "name": "Co se stane, když nepřipravím dům na zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Rizika zahrnují: prasknutí potrubí mrazem, vyšší náklady na topení kvůli únikům tepla, poškození střechy namrzlou vodou v oklapech a problémy s kotlem bez servisu." } }] }] };

const RELATED = [
  { title: "Jak odvzdušnit radiátory", href: "/blog/jak-odvzdusit-radiatory", read: "3 min" },
  { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", read: "4 min" },
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "6 min" },
  { title: "Jak ošetřit dřevěnou terasu před zimou", href: "/blog/drevo-terasa-zima", read: "4 min" },
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
              <span>Jak připravit dům na zimu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit dům na zimu – kompletní checklist</h1>
              <p className="article-lead">Dům připravený na zimu je teplejší, levnější na provoz a nezaskočí tě poruchou v nejhorší možný moment. Tenhle checklist tě provede vším – od topení přes okapy až po zahradu.</p>
              <div className="article-meta-row"><span>Aktualizováno: 1. března 2025</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#kdy">Kdy začít – ideální načasování</a></li>
                <li><a href="#topeni">Topení a kotel</a></li>
                <li><a href="#okna">Okna a dveře</a></li>
                <li><a href="#strecha">Střecha a okapy</a></li>
                <li><a href="#zahrada">Zahrada a venkovní prostory</a></li>
                <li><a href="#sklep">Sklep a garáž</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
              </ol>
            </nav>

            <section id="kdy">
              <h2>Kdy začít – ideální načasování</h2>
              <p>Příprava domu na zimu má svůj ideální harmonogram. Začni v září, kdy je ještě teplo a vše jde pohodlně udělat. Říjen je poslední rozumný termín pro venkovní práce. V listopadu už je pozdě.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Období</th><th>Co udělat</th></tr></thead>
                  <tbody>
                    <tr><td>Září</td><td>Servis kotle, kontrola střechy, ošetření terasy</td></tr>
                    <tr><td>Říjen</td><td>Odvzdušnění radiátorů, čištění okapů, utěsnění oken, příprava zahrady</td></tr>
                    <tr><td>Listopad</td><td>Poslední kontrola, uskladnění zahradního nábytku, příprava skladu</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="topeni">
              <h2>Topení a kotel – základ zimní přípravy</h2>
              <h3>Servis kotle</h3>
              <p>Kotel by měl dostat servis jednou ročně – ideálně na podzim před topnou sezonou. Technik zkontroluje spalování, vyčistí hořák, zkontroluje tlak a bezpečnostní prvky. Servis stojí 1 500–3 000 Kč a zabrání drahé poruše v mrazivém lednu.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Servis kotle si objednej v září – v říjnu jsou termíny obsazené a technici zdražují.</div>
              <h3>Odvzdušnění radiátorů</h3>
              <p>Vzduch v radiátorech způsobuje, že jsou studené nahoře a teplé dole. Výsledek: platíš za topení, ale netopíš. Odvzdušnění radiátorů je práce na 10 minut a ušetří stovky korun ročně. Jak na to – viz <Link href="/blog/jak-odvzdusit-radiatory">návod na odvzdušnění radiátorů</Link>.</p>
              <h3>Nastavení termostatu</h3>
              <p>Programovatelný termostat nastavený na nižší teplotu v noci a při nepřítomnosti ušetří 10–15 % nákladů na topení. Pokud ještě nemáš programovatelný termostat, podzim je ideální čas ho instalovat.</p>
              <h3>Kontrola tlaku v systému</h3>
              <p>Tlak v topném systému by měl být 1,5–2 bar (u studeného systému). Pokud je nižší, systém dotlakuj dle návodu ke kotli nebo zavolej technika.</p>
            </section>

            <section id="okna">
              <h2>Okna a dveře – stop průvanům a úniku tepla</h2>
              <h3>Přepnutí oken na zimní těsnění</h3>
              <p>Plastová okna mají dva režimy těsnění – letní a zimní. Zimní režim nastavíš přetočením kování o 180°. Letní poloha: ventilační mezera pro proudění vzduchu. Zimní poloha: pevnější přitlačení křídla k rámu. Rozdíl ve spotřebě tepla je znatelný. Viz <Link href="/blog/navody/nastaveni-oken">návod na nastavení oken</Link>.</p>
              <h3>Kontrola těsnění</h3>
              <p>Otestuj těsnění papírovým testem: vlož list papíru mezi rám a křídlo a zavři okno. Pokud papír jde vytáhnout bez odporu, těsnění je opotřebované. Výměna těsnění stojí 200–500 Kč na okno a lze ji udělat svépomocí.</p>
              <h3>Utěsnění průvanů</h3>
              <p>Průvany kolem oken, dveří a zárubní utěsni samolepicím těsnicím páskem (20–60 Kč/metr). Průvan pod vchodovými dveřmi řeší dveřní lišta nebo těsnicí kartáč.</p>
              <h3>Zateplení</h3>
              <p>Pokud máš starší okna bez zimního nastavení nebo okna bez izolačního dvojskla, zvaž nalepení izolační fólie na okenní tabule. Snižuje tepelné ztráty a odstraňuje kondenzaci.</p>
            </section>

            <section id="strecha">
              <h2>Střecha a okapy</h2>
              <h3>Čištění okapů</h3>
              <p>Okapy ucpané listím způsobují, že voda stojí a v mrazu se mění na led. Ten roztahuje okap a ničí ho. Na podzim po opadání listí vyčisti okapy – buď ručně (žebřík, gumové rukavice) nebo speciálním foukačem na listí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pořiď ochranné síťky na okapy (200–400 Kč/metr) – zabrání listí v okapech a čištění budeš dělat jednou za několik let místo každý rok.</div>
              <h3>Kontrola střechy</h3>
              <p>Z bezpečné vzdálenosti (dalekohled, okno podkroví) zkontroluj střechu po létě. Hledej posunuté nebo chybějící tašky, poškozené oplechování a mezery v hřebeni. Malé opravy teď stojí zlomek toho, co opravy po zimě.</p>
              <h3>Střešní okna a průchody</h3>
              <p>Zkontroluj těsnění kolem střešních oken, komínu a ventilačních průchodů. Tady nejčastěji proniká voda.</p>
            </section>

            <section id="zahrada">
              <h2>Zahrada a venkovní prostory</h2>
              <h3>Závlaha a vodovod</h3>
              <p>Nejdůležitější: vypni přívod vody do venkovního vodovodu a vypusť potrubí. Voda zamrzne, potrubí praskne a oprava stojí tisíce. Stačí uzavřít kohout uvnitř a otevřít venkovní kohout, aby voda vytekla.</p>
              <h3>Zahradní nábytek</h3>
              <p>Plastový nábytek ukliď do skladu nebo ho zakryj. Dřevěný nábytek před uskladněním ošetři terasovým olejem. Kovový nábytek zkontroluj na rez.</p>
              <h3>Zahradní technika</h3>
              <p>Sekačku vyčisti, vyměň olej a uskladni bez benzínu (nebo s přísadou do paliva). Akumulátorové stroje uskladni při teplotě nad 5 °C.</p>
              <h3>Rostliny a keře</h3>
              <p>Citlivé rostliny (palmy, oleandry, agávy) přesuň do zimního skladu nebo domu. Trvalky a okrasné trávy nechej na zimu stát – chrání kořeny a jsou atraktivní pod sněhem. Růže přikryj chrániči nebo větvemi jedle.</p>
            </section>

            <section id="sklep">
              <h2>Sklep a garáž</h2>
              <h3>Kontrola vlhkosti ve sklepě</h3>
              <p>Sklep by měl být suchý. Vlhkost nad 70 % způsobuje plíseň a poškozuje uskladněné věci. Zkontroluj zdi na skvrny od vlhkosti, zkontroluj těsnění oken a větracích otvorů.</p>
              <h3>Uskladnění na zimu</h3>
              <p>Do sklepa jdou: brambory, zelenina, ovoce (ideálně 4–8 °C), víno, konzervy. Ven ze sklepa: věci citlivé na mráz a vlhkost.</p>
              <h3>Garáž a příjezdová cesta</h3>
              <p>Zkontroluj, zda máš doma dostatečnou zásobu posypové soli nebo písku. Silikonové těsnění garážových vrat kontroluj jednou ročně – prasklé těsnění pouští chlad a hlodavce.</p>
            </section>

            <section id="checklist">
              <h2>Kompletní checklist přípravy na zimu</h2>
              <div className="article-tip"><strong>✅ Topení</strong></div>
              <ul>
                <li>Servis kotle (do konce září)</li>
                <li>Odvzdušnění všech radiátorů</li>
                <li>Kontrola tlaku v topném systému</li>
                <li>Nastavení programovatelného termostatu</li>
              </ul>
              <div className="article-tip"><strong>✅ Okna a dveře</strong></div>
              <ul>
                <li>Přepnout okna na zimní těsnění</li>
                <li>Papírový test těsnění oken</li>
                <li>Utěsnit průvany samolepicím páskem</li>
                <li>Zkontrolovat dveřní prahová těsnění</li>
              </ul>
              <div className="article-tip"><strong>✅ Střecha a okapy</strong></div>
              <ul>
                <li>Vyčistit okapy po opadání listí</li>
                <li>Vizuální kontrola střechy</li>
                <li>Zkontrolovat těsnění střešních oken a komínu</li>
              </ul>
              <div className="article-tip"><strong>✅ Zahrada</strong></div>
              <ul>
                <li>Vypnout venkovní vodovod a vypustit potrubí</li>
                <li>Uklidit zahradní nábytek</li>
                <li>Přemístit citlivé rostliny do tepla</li>
                <li>Uskladnit zahradní techniku</li>
              </ul>
              <div className="article-tip"><strong>✅ Sklep a garáž</strong></div>
              <ul>
                <li>Zkontrolovat vlhkost ve sklepě</li>
                <li>Doplnit zásobu posypové soli</li>
                <li>Zkontrolovat těsnění garážových vrat</li>
              </ul>
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
                <li><a href="#kdy">Kdy začít</a></li>
                <li><a href="#topeni">Topení a kotel</a></li>
                <li><a href="#okna">Okna a dveře</a></li>
                <li><a href="#strecha">Střecha a okapy</a></li>
                <li><a href="#zahrada">Zahrada</a></li>
                <li><a href="#sklep">Sklep a garáž</a></li>
                <li><a href="#checklist">Kompletní checklist</a></li>
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
