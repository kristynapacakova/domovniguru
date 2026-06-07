import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chytrý termostat – jak funguje a kolik ušetří na vytápění",
  description: "Jak funguje chytrý termostat, kolik stojí, jak dlouho se vrátí a kolik reálně ušetří na vytápění. Srovnání s klasickým termostatem a tipy na výběr.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/chytry-termostat-uspora-vytapeni" },
  openGraph: { title: "Chytrý termostat – jak funguje a kolik ušetří na vytápění", description: "Návratnost, úspory a výběr chytrého termostatu. Kompletní průvodce 2026.", url: "https://www.domovniguru.cz/blog/chytry-termostat-uspora-vytapeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-07T08:00:00Z", modifiedTime: "2026-06-07T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Chytr%C3%BD%20termostat%20%E2%80%93%20jak%20funguje%20a%20kolik%20u%C5%A1et%C5%99%C3%AD%20na%20vyt%C3%A1p%C4%9Bn%C3%AD&cat=blog", width: 1200, height: 630, alt: "Chytrý termostat – jak funguje a kolik ušetří na vytápění" }] },
  twitter: { card: "summary_large_image", title: "Chytrý termostat – jak funguje a kolik ušetří na vytápění", description: "Návratnost, úspory a výběr chytrého termostatu. Kompletní průvodce 2026." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/chytry-termostat-uspora-vytapeni#article", "headline": "Chytrý termostat – jak funguje a kolik ušetří na vytápění", "datePublished": "2026-06-07T08:00:00Z", "dateModified": "2026-06-07T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["chytrý termostat", "úspora vytápění", "programovatelný termostat", "termostat aplikace", "regulace topení"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Chytrý termostat – jak funguje a kolik ušetří", "item": "https://www.domovniguru.cz/blog/chytry-termostat-uspora-vytapeni" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik reálně ušetří chytrý termostat na vytápění?", "acceptedAnswer": { "@type": "Answer", "text": "Podle nezávislých studií i zkušeností uživatelů chytrý termostat ušetří typicky 10–20 % nákladů na vytápění. U průměrné domácnosti s ročními náklady 25 000 Kč na plyn to znamená úsporu 2 500–5 000 Kč ročně." } }, { "@type": "Question", "name": "Vrátí se investice do chytrého termostatu?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Chytrý termostat stojí 2 000–6 000 Kč včetně montáže a při typické úspoře 3 000–4 000 Kč ročně se zaplatí za 1–2 topné sezóny. Po zbytek životnosti (8–10 let) už jen šetří." } }] }] };

const RELATED = [
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
  { title: "Jak správně topit v topné sezóně", href: "/blog/jak-spravne-topit", read: "4 min" },
  { title: "Jak zkontrolovat kotel před topnou sezónou", href: "/blog/zkontrolovat-kotel-pred-zimou", read: "5 min" },
  { title: "Tepelné čerpadlo: Kompletní průvodce výběrem, úsporami a instalací", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
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
              <span>Chytrý termostat – jak funguje a kolik ušetří</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Chytrý termostat – jak funguje a kolik ušetří na vytápění</h1>
              <p className="article-lead">Slibuje úsporu, pohodlí a chytré ovládání z mobilu – ale vyplatí se opravdu? Ukážeme ti, jak chytrý termostat funguje, kolik stojí, jak rychle se zaplatí a na co si dát pozor při výběru a instalaci.</p>
              <div className="article-meta-row"><span>Aktualizováno: 7. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#jak-funguje">Jak funguje chytrý termostat</a></li>
                <li><a href="#uspora">Kolik reálně ušetříš na vytápění</a></li>
                <li><a href="#navratnost">Pořizovací cena a návratnost</a></li>
                <li><a href="#jak-vybrat">Jak vybrat ten správný</a></li>
                <li><a href="#instalace">Instalace a nastavení</a></li>
                <li><a href="#tipy">Tipy pro maximální úsporu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="jak-funguje">
              <h2>Jak funguje chytrý termostat a v čem je jiný</h2>
              <p>Klasický termostat udržuje v místnosti jednu nastavenou teplotu, dokud ho ručně nepřenastavíš. Chytrý termostat navíc sleduje, kdy jsi doma, jaké je počasí venku a jak rychle se tvůj byt nebo dům vytápí – a podle toho topení automaticky reguluje tak, aby ses nikdy nemusel starat o to, jestli zrovna topíš zbytečně.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Vlastnost</th><th>Klasický termostat</th><th>Programovatelný termostat</th><th>Chytrý termostat</th></tr></thead>
                  <tbody>
                    <tr><td>Nastavení teploty</td><td>Ručně, jedna hodnota</td><td>Podle týdenního rozvrhu</td><td>Automaticky podle návyků a polohy</td></tr>
                    <tr><td>Ovládání na dálku</td><td>Ne</td><td>Většinou ne</td><td>Ano, přes mobilní aplikaci</td></tr>
                    <tr><td>Geofencing (poloha telefonu)</td><td>Ne</td><td>Ne</td><td>Ano – pozná, že jdeš domů</td></tr>
                    <tr><td>Učení se zvyklostí</td><td>Ne</td><td>Ne</td><td>Ano u pokročilých modelů</td></tr>
                    <tr><td>Přehledy a statistiky spotřeby</td><td>Ne</td><td>Omezeně</td><td>Ano, v aplikaci</td></tr>
                    <tr><td>Cena vč. montáže</td><td>300–800 Kč</td><td>800–2 000 Kč</td><td>2 000–6 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Princip úspory je jednoduchý: chytrý termostat netopí naplno tam a tehdy, kde a kdy to nemá smysl – třeba když jsi v práci nebo spíš. Místo toho udržuje nižší „úspornou" teplotu a před tvým návratem nebo probuzením topení automaticky zesílí, takže do tepla přijdeš přesně ve chvíli, kdy ho potřebuješ.</p>
            </section>

            <section id="uspora">
              <h2>Kolik reálně ušetříš na vytápění</h2>
              <p>Vytápění tvoří 50–70 % celkových nákladů na energie v běžné domácnosti, takže i malé procento úspory se v korunách projeví výrazně. Než se pustíš do počítání, je dobré znát svůj výchozí stav – aktuální <Link href="/kalkulacky/spotreba-plynu" style={{ color: "#2a6496", textDecoration: "underline" }}>roční náklady na vytápění plynem zjistíš v naší kalkulačce spotřeby plynu</Link> a podle toho si snadno spočítáš, kolik by ti mohla přinést instalace chytrého termostatu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th></th><th>Bez chytrého termostatu</th><th>S chytrým termostatem</th><th>Úspora</th></tr></thead>
                  <tbody>
                    <tr><td>Roční náklady na vytápění</td><td>25 000 Kč</td><td>20 000–22 500 Kč</td><td>2 500–5 000 Kč</td></tr>
                    <tr><td>Úspora v procentech</td><td>–</td><td>–</td><td><strong>10–20 %</strong></td></tr>
                    <tr><td>Úspora za 5 let</td><td>–</td><td>–</td><td><strong>12 500–25 000 Kč</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Reálná výše úspory záleží na tom, jak jsi dosud topil. Pokud jsi měl doma jen ruční ventily a topil „od oka" celý den naplno, může být úspora i vyšší než 20 %. Pokud už máš programovatelné termostatické hlavice a na úsporný režim jsi zvyklý, bude přínos chytrého termostatu menší – hlavně v podobě pohodlí a přehledu, ne dramatické úspory.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Největší efekt má chytrý termostat v domácnostech, kde lidé přes den nejsou doma (práce, škola) a topení dosud běželo „naplno" celý den. Tam se úspora projeví nejrychleji a nejvýrazněji.</div>
            </section>

            <section id="navratnost">
              <h2>Pořizovací cena a návratnost investice</h2>
              <p>Chytrý termostat samotný stojí 1 500–5 000 Kč podle značky a funkcí, k tomu je potřeba připočítat montáž (pokud ji neprovedeš sám) za 500–1 500 Kč. Celková investice se tak obvykle pohybuje mezi 2 000–6 000 Kč.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Položka</th><th>Cena</th></tr></thead>
                  <tbody>
                    <tr><td>Základní chytrý termostat</td><td>1 500–2 500 Kč</td></tr>
                    <tr><td>Pokročilý model (učení, vícezónové řízení)</td><td>3 000–5 000 Kč</td></tr>
                    <tr><td>Montáž odborníkem</td><td>500–1 500 Kč</td></tr>
                    <tr><td>Roční úspora (typická domácnost)</td><td>2 500–5 000 Kč</td></tr>
                    <tr><td>Doba návratnosti</td><td><strong>1–2 topné sezóny</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p>Investice se tedy zaplatí zpravidla už během první nebo druhé topné sezóny. Životnost chytrého termostatu je 8–10 let, takže po splacení pořizovacích nákladů ti zbývá ještě 6–8 let čisté úspory – v součtu klidně 15 000–30 000 Kč.</p>
            </section>

            <section id="jak-vybrat">
              <h2>Jak vybrat ten správný chytrý termostat</h2>
              <h3>Kompatibilita s topným systémem</h3>
              <p>Nejdůležitější krok je ověřit, že termostat zvládne ovládat právě tvůj zdroj tepla. Většina modelů funguje s plynovými kotli, ale ne všechny umí spolupracovat s tepelným čerpadlem, elektrokotlem nebo podlahovým topením. Před nákupem vždy zkontroluj seznam kompatibilních zařízení na stránkách výrobce nebo se poraď s technikem, který ti topný systém instaloval.</p>
              <h3>Klíčové funkce, na které se zaměřit</h3>
              <ul>
                <li><strong>Geofencing</strong> – termostat pozná podle polohy tvého telefonu, že se blížíš domů, a topení včas zapne</li>
                <li><strong>Týdenní rozvrh a více zón</strong> – možnost nastavit jiný režim pro pracovní dny a víkendy, případně regulovat každou místnost zvlášť</li>
                <li><strong>Učení se návyků</strong> – pokročilé modely si během pár týdnů „zapamatují", kdy obvykle topíš a teplotu přizpůsobí samy</li>
                <li><strong>Mobilní aplikace a přehledy spotřeby</strong> – ukáže ti, kdy a kolik topíš, a pomůže odhalit zbytečné plýtvání</li>
                <li><strong>Hlasové ovládání</strong> – integrace s asistenty typu Google Assistant, Alexa nebo Siri</li>
              </ul>
              <h3>Otevřený nebo uzavřený ekosystém</h3>
              <p>Některé termostaty fungují jen v rámci vlastní aplikace výrobce, jiné se dají propojit do širšího systému chytré domácnosti (Zigbee, Matter, Home Assistant). Pokud už doma máš chytré zásuvky nebo žárovky, vyplatí se vybrat termostat, který zapadne do stejného ekosystému.</p>
            </section>

            <section id="instalace">
              <h2>Instalace a nastavení – co čekat</h2>
              <p>Samotná výměna termostatu trvá obvykle 30–60 minut. U bezdrátových modelů, které jen nahrazují stávající nástěnný termostat, to často zvládneš svépomocí podle návodu – stačí vypnout topení, odpojit staré vodiče a zapojit nové podle barevného značení.</p>
              <p>Složitější je to u systémů, které vyžadují propojení přímo s elektronikou kotle nebo s nízkonapěťovým ovládáním (např. u plynových kotlů s OpenTherm komunikací nebo HDO regulací). V takovém případě se vyplatí přizvat odborníka – riskuješ totiž nejen špatné zapojení, ale i ztrátu záruky na kotel.</p>
              <p>Po instalaci je potřeba termostat připojit k domácí Wi-Fi a nastavit základní parametry: typ vytápění, rozvrh dne, požadované teploty pro jednotlivé denní úseky a místnosti. První dva až tři týdny doporučujeme sledovat, jak termostat reaguje, a postupně upravovat nastavení podle skutečných potřeb domácnosti.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš starší kotel bez moderního rozhraní, ověř si před nákupem, zda termostat podporuje tzv. beznapěťový kontakt (relé) – tahle nejjednodušší forma propojení funguje prakticky s jakýmkoliv kotlem.</div>
            </section>

            <section id="tipy">
              <h2>Tipy pro maximální úsporu</h2>
              <ul>
                <li><strong>Sniž noční teplotu o 1–2 °C</strong> – v noci stačí 17–18 °C, pod peřinou to nepoznáš a na nákladech to bude znát</li>
                <li><strong>Nastav „nepřítomný" režim</strong> – při odchodu z domu na víc než pár hodin ať termostat automaticky přepne na úsporný program</li>
                <li><strong>Využij geofencing naplno</strong> – nech termostat, ať sám pozná, kdy se blížíš domů, místo abys ho ovládal ručně</li>
                <li><strong>Pravidelně kontroluj statistiky v aplikaci</strong> – pomohou ti odhalit dny nebo místnosti, kde se zbytečně plýtvá teplem</li>
                <li><strong>Kombinuj s utěsněním oken a izolací</strong> – sebelepší termostat nezachrání byt, kterým profukuje. Společně ale efekt znásobíš</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik reálně ušetří chytrý termostat na vytápění?", a: "Podle nezávislých studií i zkušeností uživatelů ušetří chytrý termostat typicky 10–20 % nákladů na vytápění. U domácnosti s ročními náklady 25 000 Kč na plyn to znamená úsporu 2 500–5 000 Kč ročně." },
                  { q: "Vrátí se investice do chytrého termostatu?", a: "Ano. Termostat stojí 2 000–6 000 Kč včetně montáže a při typické úspoře 3 000–4 000 Kč ročně se zaplatí za 1–2 topné sezóny. Po zbytek životnosti (8–10 let) už jen šetří." },
                  { q: "Funguje chytrý termostat s každým kotlem nebo tepelným čerpadlem?", a: "Ne automaticky – kompatibilitu je nutné ověřit před nákupem. Většina termostatů zvládá běžné plynové kotle, ne všechny ale umí komunikovat s tepelným čerpadlem, elektrokotlem nebo podlahovým topením. Při pochybnostech se poraď s technikem." },
                  { q: "Zvládnu instalaci sám, nebo potřebuju odborníka?", a: "Jednoduchou výměnu nástěnného termostatu za bezdrátový model zvládne většina lidí svépomocí za 30–60 minut. Pokud ale termostat vyžaduje propojení přímo s elektronikou kotle, doporučujeme přizvat odborníka – jinak riskuješ chybné zapojení i ztrátu záruky." },
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
                <li><a href="#jak-funguje">Jak funguje chytrý termostat</a></li>
                <li><a href="#uspora">Kolik reálně ušetříš</a></li>
                <li><a href="#navratnost">Pořizovací cena a návratnost</a></li>
                <li><a href="#jak-vybrat">Jak vybrat ten správný</a></li>
                <li><a href="#instalace">Instalace a nastavení</a></li>
                <li><a href="#tipy">Tipy pro maximální úsporu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>21 článků →</span></Link>
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
