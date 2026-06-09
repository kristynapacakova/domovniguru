import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rekonstrukce koupelny – průvodce, ceny a pořadí prací",
  description: "Kompletní průvodce rekonstrukcí koupelny: reálné ceny 2026, správné pořadí prací, co zvládneš sám a kdy zavolat řemeslníka. Harmonogram i tipy na výběr materiálů.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/rekonstrukce-koupelny-pruvodce" },
  openGraph: { title: "Rekonstrukce koupelny – průvodce, ceny a pořadí prací", description: "Reálné ceny 2026, správné pořadí prací, co zvládneš sám. Kompletní průvodce.", url: "https://www.domovniguru.cz/blog/rekonstrukce-koupelny-pruvodce", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-09T08:00:00Z", modifiedTime: "2026-06-09T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Rekonstrukce%20koupelny%20%E2%80%93%20pr%C5%AFvodce%2C%20ceny%20a%20po%C5%99ad%C3%AD%20prac%C3%AD&cat=blog", width: 1200, height: 630, alt: "Rekonstrukce koupelny – průvodce, ceny a pořadí prací" }] },
  twitter: { card: "summary_large_image", title: "Rekonstrukce koupelny – průvodce, ceny a pořadí prací", description: "Reálné ceny 2026, správné pořadí prací, co zvládneš sám. Kompletní průvodce." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/rekonstrukce-koupelny-pruvodce#article", "headline": "Rekonstrukce koupelny – průvodce, ceny a pořadí prací", "datePublished": "2026-06-09T08:00:00Z", "dateModified": "2026-06-09T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["rekonstrukce koupelny", "cena rekonstrukce koupelny", "pořadí prací koupelna", "koupelna svépomocí", "rekonstrukce koupelny cena 2026"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Stěhování & rekonstrukce", "item": "https://www.domovniguru.cz/blog/kategorie/stehovani" }, { "@type": "ListItem", "position": 4, "name": "Rekonstrukce koupelny – průvodce", "item": "https://www.domovniguru.cz/blog/rekonstrukce-koupelny-pruvodce" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kolik stojí rekonstrukce koupelny v roce 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Malá koupelna (do 5 m²) stojí 80 000–150 000 Kč na klíč. Střední koupelna (5–8 m²) vyjde na 130 000–220 000 Kč. Velká koupelna (nad 8 m²) může přesáhnout 300 000 Kč. Svépomocí ušetříš 30–50 % nákladů na práci." } }, { "@type": "Question", "name": "Jak dlouho trvá rekonstrukce koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Realisticky počítej s 3–6 týdny. Malá koupelna svépomocí trvá 4–6 týdnů, s firmou 2–3 týdny. Velká koupelna na klíč může trvat 4–8 týdnů. Ke standardní době přidej rezervu 1–2 týdny na nečekané komplikace." } }, { "@type": "Question", "name": "Jaké je správné pořadí prací při rekonstrukci koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Správné pořadí: 1. bourání, 2. instalatér (rozvody vody a odpadu), 3. elektrikář, 4. hydroizolace, 5. dlažba, 6. obklady, 7. montáž sanitárního zboží, 8. malíř/finální úpravy, 9. dokončení a revize." } }, { "@type": "Question", "name": "Co mohu při rekonstrukci koupelny udělat sám?", "acceptedAnswer": { "@type": "Answer", "text": "Sám zvládneš: bourání starých obkladů a dlažby, malování, montáž příslušenství (háčky, police, zrcadlo), pokládku dlažby a obkladů (se zkušenostmi). Instalatérské a elektrikářské práce svěř vždy odborníkovi – špatné provedení může způsobit škody a problém s pojišťovnou." } }] }] };

const RELATED = [
  { title: "Cena rekonstrukce koupelny – přehled nákladů", href: "/blog/cena-rekonstrukce-koupelny", read: "6 min" },
  { title: "Plánování rekonstrukce bytu – jak začít", href: "/blog/planovani-rekonstrukce-bytu", read: "7 min" },
  { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", read: "5 min" },
  { title: "Stěhování checklist – na co nezapomenout", href: "/blog/stehovani-checklist", read: "5 min" },
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
              <span>Rekonstrukce koupelny – průvodce</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏠 Stěhování & rekonstrukce</Link>
                <span className="article-read-time">⏱ 8 min čtení</span>
              </div>
              <h1 className="article-h1">Rekonstrukce koupelny – průvodce, ceny a pořadí prací</h1>
              <p className="article-lead">Rekonstrukce koupelny je jedna z nejnákladnějších, ale také nejpřínosnějších oprav v bytě. Průměrná domácnost ji řeší jednou za 20–30 let – a proto se vyplatí udělat ji správně. Tenhle průvodce ti ukáže reálné ceny pro rok 2026, správné pořadí prací a na co si dát pozor.</p>
              <div className="article-meta-row"><span>Publikováno: 9. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#ceny">Kolik stojí rekonstrukce koupelny</a></li>
                <li><a href="#poradi">Pořadí prací – co musí jít za sebou</a></li>
                <li><a href="#svepomoci">Svépomocí nebo firma</a></li>
                <li><a href="#sprcha-vana-wc">Jak vybrat sprchu, vanu a WC</a></li>
                <li><a href="#materialy">Materiály – dlažba, obklady, sanitární zboží</a></li>
                <li><a href="#harmonogram">Načasování a délka rekonstrukce</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="ceny">
              <h2>Kolik stojí rekonstrukce koupelny</h2>
              <p>Ceny rekonstrukcí v roce 2026 výrazně vzrostly – zdražily materiály i práce. Přibližnou cenu rekonstrukce zjistíš rychle pomocí naší <Link href="/kalkulacky/cena-rekonstrukce-koupelny-odhad" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky ceny rekonstrukce koupelny</Link>. Obecné rozpětí závisí na přístupu – zda dělat vše sám, kombinovat, nebo zadat na klíč.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Přístup</th><th>Malá koupelna (do 5 m²)</th><th>Střední koupelna (5–8 m²)</th><th>Velká koupelna (nad 8 m²)</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Svépomocí</strong> (jen materiál)</td><td>40 000–70 000 Kč</td><td>65 000–110 000 Kč</td><td>100 000–180 000 Kč</td></tr>
                    <tr><td><strong>Kombinace</strong> (část prací sám)</td><td>60 000–100 000 Kč</td><td>95 000–160 000 Kč</td><td>150 000–250 000 Kč</td></tr>
                    <tr><td><strong>Na klíč</strong> (vše firma)</td><td>80 000–150 000 Kč</td><td>130 000–220 000 Kč</td><td>200 000–350 000+ Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Největší položky jsou práce instalatéra a obkladače (dohromady 30–45 % celkové ceny), sanitární zboží (vana/sprcha, WC, umyvadlo, baterie) a dlažba s obklady. Na materiálech se dá ušetřit volbou střední cenové kategorie, na práci se šetřit nevyplatí.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Nejdražší položkou jsou často nečekané vícenáklady – skrytá plíseň, špatný stav rozvodů, navlhlé zdivo. Počítej vždy s rezervou 15–20 % nad odhadovanou cenou.</div>
            </section>

            <section id="poradi">
              <h2>Pořadí prací – co musí jít za sebou</h2>
              <p>Správné pořadí prací je klíčové. Pokud přeskočíš krok nebo uděláš věci obráceně, budeš muset část práce předělávat – a to stojí peníze i čas. Zde je osvědčený postup:</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Krok</th><th>Co se dělá</th><th>Kdo to dělá</th><th>Orientační doba</th></tr></thead>
                  <tbody>
                    <tr><td><strong>1. Bourání</strong></td><td>Odstranění starých obkladů, dlažby, sanitárního zboží, příček</td><td>Sám / dělník</td><td>1–3 dny</td></tr>
                    <tr><td><strong>2. Instalatér – rozvody</strong></td><td>Přeložení/výměna rozvodů vody a odpadu, nové polohy zařizovacích předmětů</td><td>Instalatér</td><td>1–3 dny</td></tr>
                    <tr><td><strong>3. Elektrikář</strong></td><td>Elektroinstalace, zásuvky, osvětlení, větrání, elektrický podlahový topný kabel</td><td>Elektrikář</td><td>1–2 dny</td></tr>
                    <tr><td><strong>4. Hydroizolace</strong></td><td>Nátěr hydroizolační stěrkou (sprchový kout, vana, celá podlaha), prostupy páskou</td><td>Obkladač / sám</td><td>2–3 dny (schnutí)</td></tr>
                    <tr><td><strong>5. Dlažba</strong></td><td>Pokládka podlahové dlažby, spárování, dilatační spáry</td><td>Obkladač / sám</td><td>1–2 dny + schnutí</td></tr>
                    <tr><td><strong>6. Obklady</strong></td><td>Lepení stěnových obkladů, spárování, silikonové spáry v rozích</td><td>Obkladač / sám</td><td>2–4 dny + schnutí</td></tr>
                    <tr><td><strong>7. Sanitární zboží</strong></td><td>Montáž vany/sprchy, WC, umyvadla, baterií, sprchového koutu</td><td>Instalatér</td><td>1–2 dny</td></tr>
                    <tr><td><strong>8. Malíř / finální úpravy</strong></td><td>Malování stropu, montáž svítidel, zásuvek, příslušenství</td><td>Sám / řemeslník</td><td>1–2 dny</td></tr>
                    <tr><td><strong>9. Dokončení</strong></td><td>Kontrola těsnosti, revize elektro, úklid, finální silikon</td><td>Instalatér / elektrikář</td><td>1 den</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Důležité:</strong> Hydroizolaci nikdy nepřeskakuj ani nezkracuj. I malá nezapečetěná spára způsobí za pár let vlhkost v konstrukci, plíseň a nákladné opravy. Vždy aplikuj alespoň dvě vrstvy stěrky a pásek do rohů.</div>
            </section>

            <section id="svepomoci">
              <h2>Svépomocí nebo firma – co zvládneš sám</h2>
              <p>Kombinace vlastní práce a řemeslníků je nejrozumnější přístup. Ušetříš na méně odborných pracích a peníze investuješ do kvalitní instalatériny a elektrika.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Práce</th><th>Svépomocí</th><th>Doporučení</th></tr></thead>
                  <tbody>
                    <tr><td>Bourání starých obkladů a dlažby</td><td>✅ Ano</td><td>Zvládne každý, stačí kladivo a dláto</td></tr>
                    <tr><td>Vývoz suti a odpadu</td><td>✅ Ano</td><td>Pronajmi kontejner (1 500–3 000 Kč)</td></tr>
                    <tr><td>Hydroizolační stěrka</td><td>✅ Se zkušeností</td><td>Přesně dodržuj návod výrobce</td></tr>
                    <tr><td>Pokládka dlažby a obkladů</td><td>✅ Se zkušeností</td><td>Na velké plochy doporučujeme odborníka</td></tr>
                    <tr><td>Malování stropu a zdí</td><td>✅ Ano</td><td>Snadné, ušetříš 2 000–5 000 Kč</td></tr>
                    <tr><td>Montáž příslušenství (zrcadlo, háčky, police)</td><td>✅ Ano</td><td>Stačí vrták a hmoždinka</td></tr>
                    <tr><td>Rozvody vody a odpadu</td><td>❌ Ne</td><td>Vždy instalatér – riziko záplavy a škody na majetku</td></tr>
                    <tr><td>Elektroinstalace v koupelně</td><td>❌ Ne</td><td>Vždy elektrikář – nutná revize, bezpečnostní předpisy</td></tr>
                    <tr><td>Montáž vany a sprchového koutu (připojení)</td><td>❌ Raději ne</td><td>Instalatér zajistí těsnost a záruku</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Práce instalatéra a elektrikáře v koupelně jsou ze zákona nebo z pojistných podmínek odborně podmíněny. Pokud by vznikla škoda (vytopení sousedů, požár), pojišťovna plnění odmítne při neprofesionálním provedení.</p>
            </section>

            <section id="sprcha-vana-wc">
              <h2>Jak vybrat sprchu, vanu a WC</h2>
              <h3>Sprcha vs. vana</h3>
              <p>V malých koupelnách (do 5 m²) je praktičtější sprchový kout. Nejmenší rozměr je 80×80 cm, ideální je 90×90 cm nebo 80×120 cm. Pokud máš rodinu s malými dětmi nebo preferuješ koupele, zvol vanu – standardní délka je 150–170 cm, kompaktní vany 140 cm se vejdou i do menší koupelny.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Parametr</th><th>Sprchový kout</th><th>Vana</th></tr></thead>
                  <tbody>
                    <tr><td>Minimální rozměr</td><td>80×80 cm</td><td>140×70 cm</td></tr>
                    <tr><td>Spotřeba vody</td><td>50–80 l (5 min sprcha)</td><td>150–200 l (celá vana)</td></tr>
                    <tr><td>Cena (základní)</td><td>8 000–25 000 Kč</td><td>6 000–40 000 Kč</td></tr>
                    <tr><td>Montáž</td><td>1–2 dny</td><td>1 den (bez obezdění)</td></tr>
                    <tr><td>Vhodné pro</td><td>Malé koupelny, 1–2 osoby</td><td>Rodiny, senioři, relaxace</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Výběr WC</h3>
              <p>Závěsné WC (rimless) je hygienicky nejlepší – snadnější čištění a moderní vzhled. Stojící WC je levnější na pořízení i montáž. Standardní výška sedátka je 40–42 cm, pro seniory a handicapované 46–48 cm. Počítej s rozměrem WC od stěny přibližně 60–70 cm pro pohodlné používání.</p>
              <h3>Tipy pro malé koupelny</h3>
              <ul>
                <li>Volte závěsné WC a skříňky – vizuálně uvolní podlahu</li>
                <li>Rohový sprchový kout šetří prostor oproti obdélníkovému</li>
                <li>Velkoformátová dlažba (60×60 a větší) opticky zvětší místnost</li>
                <li>Zrcadlo přes celou šíři umyvadla zdvojnásobí vnímání prostoru</li>
                <li>Umyvadlo s poličkou pod ním nahradí skříňku v nejmenších koupelnách</li>
              </ul>
            </section>

            <section id="materialy">
              <h2>Materiály – dlažba, obklady, sanitární zboží, baterie</h2>
              <h3>Na co nešetřit</h3>
              <ul>
                <li><strong>Hydroizolace:</strong> Levná stěrka nebo nedostatečná aplikace způsobí vlhkost v konstrukci. Počítej 300–600 Kč/m², kvalitní stěrka se vyplatí.</li>
                <li><strong>Baterie:</strong> Levné baterie za 500–800 Kč přestanou těsnit za 2–3 roky. Středně kvalitní baterie (Grohe, Hansgrohe, Hansa) za 2 000–5 000 Kč vydrží 15–20 let.</li>
                <li><strong>WC a umyvadlo:</strong> Investuj do značkových výrobků (Geberit, Villeroy & Boch, Roca) – mají lepší splachování a trvanlivost.</li>
                <li><strong>Spárovací hmota a silikon:</strong> Antibakteriální spárovací hmota a silikonové spáry zabraňují růstu plísní v rozích.</li>
              </ul>
              <h3>Kde ušetřit lze</h3>
              <ul>
                <li><strong>Dlažba a obklady:</strong> Střední cenová kategorie (250–600 Kč/m²) je dostatečná. Dražší dlažba je hlavně designová záležitost, ne funkční.</li>
                <li><strong>Zrcadlo a příslušenství:</strong> Zrcadla a háčky z IKEA nebo Hornbachu jsou plně funkční za zlomek ceny designových kusů.</li>
                <li><strong>Sprchová vanička:</strong> Akrylové vaničky za 2 000–4 000 Kč fungují stejně jako drahé kamenné za 15 000+ Kč.</li>
              </ul>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Položka</th><th>Ekonomická volba</th><th>Střední kategorie</th><th>Prémiová volba</th></tr></thead>
                  <tbody>
                    <tr><td>Dlažba (m²)</td><td>150–250 Kč</td><td>300–600 Kč</td><td>800–2 500 Kč</td></tr>
                    <tr><td>Obklady (m²)</td><td>150–300 Kč</td><td>350–700 Kč</td><td>900–3 000 Kč</td></tr>
                    <tr><td>WC závěsné</td><td>4 000–7 000 Kč</td><td>8 000–15 000 Kč</td><td>20 000–50 000 Kč</td></tr>
                    <tr><td>Umyvadlo</td><td>1 500–3 000 Kč</td><td>3 500–8 000 Kč</td><td>10 000–30 000 Kč</td></tr>
                    <tr><td>Baterie (umyvadlo)</td><td>600–1 200 Kč</td><td>2 000–5 000 Kč</td><td>6 000–15 000 Kč</td></tr>
                    <tr><td>Sprchový kout</td><td>5 000–10 000 Kč</td><td>12 000–25 000 Kč</td><td>30 000–80 000 Kč</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="harmonogram">
              <h2>Načasování a délka rekonstrukce</h2>
              <p>Realismus v plánování ušetří mnoho stresu. Rekonstrukce koupelny trvá déle, než se zdá – vždy přidej rezervu na schnutí, čekání na instalatéra a dodávku materiálu.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Fáze</th><th>Svépomocí (týdny)</th><th>S firmou (týdny)</th></tr></thead>
                  <tbody>
                    <tr><td>Příprava a objednávky materiálu</td><td>1–2</td><td>1–2</td></tr>
                    <tr><td>Bourání a odvoz suti</td><td>1</td><td>0,5</td></tr>
                    <tr><td>Instalatér + elektrikář</td><td>1–2</td><td>1</td></tr>
                    <tr><td>Hydroizolace (vč. schnutí)</td><td>1</td><td>0,5</td></tr>
                    <tr><td>Dlažba a obklady (vč. schnutí)</td><td>2–3</td><td>1–1,5</td></tr>
                    <tr><td>Montáž sanitárního zboží a dokončení</td><td>1</td><td>0,5</td></tr>
                    <tr><td><strong>Celkem</strong></td><td><strong>6–10 týdnů</strong></td><td><strong>3–5 týdnů</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <h3>Jak žít bez koupelny</h3>
              <ul>
                <li>Domluvte se s přáteli nebo rodinou – krátkodobé využití jejich koupelny</li>
                <li>Veřejné bazény a koupaliště – platná možnost v létě</li>
                <li>Fitness centrum s přístupem do sprch i bez členství (denní vstupné 100–200 Kč)</li>
                <li>Pokud máš dvě koupelny, naplánuj rekonstrukci tak, aby jedna vždy fungovala</li>
                <li>Mobilní sprchový kout nebo koupelna (pronájem plastového modulu) – od 5 000 Kč/měsíc</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Rekonstrukci plánuj na jaro nebo podzim – v létě jsou řemeslníci přetížení a termíny se prodlužují. V zimě hrozí problémy se schnutím, pokud má byt nedostatečné vytápění.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kolik stojí rekonstrukce koupelny v roce 2026?", a: "Malá koupelna (do 5 m²) stojí 80 000–150 000 Kč na klíč. Střední koupelna (5–8 m²) vyjde na 130 000–220 000 Kč. Velká koupelna (nad 8 m²) může přesáhnout 300 000 Kč. Svépomocí ušetříš 30–50 % nákladů na práci." },
                  { q: "Jak dlouho trvá rekonstrukce koupelny?", a: "Realisticky počítej s 3–6 týdny. Malá koupelna svépomocí trvá 4–6 týdnů, s firmou 2–3 týdny. Velká koupelna na klíč může trvat 4–8 týdnů. Ke standardní době přidej rezervu 1–2 týdny na nečekané komplikace." },
                  { q: "Jaké je správné pořadí prací při rekonstrukci koupelny?", a: "Správné pořadí: 1. bourání, 2. instalatér (rozvody vody a odpadu), 3. elektrikář, 4. hydroizolace, 5. dlažba, 6. obklady, 7. montáž sanitárního zboží, 8. malíř/finální úpravy, 9. dokončení a revize." },
                  { q: "Co mohu při rekonstrukci koupelny udělat sám?", a: "Sám zvládneš: bourání starých obkladů a dlažby, malování, montáž příslušenství (háčky, police, zrcadlo), pokládku dlažby a obkladů (se zkušenostmi). Instalatérské a elektrikářské práce svěř vždy odborníkovi – špatné provedení může způsobit škody a problém s pojišťovnou." },
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
                <li><a href="#ceny">Kolik stojí rekonstrukce</a></li>
                <li><a href="#poradi">Pořadí prací</a></li>
                <li><a href="#svepomoci">Svépomocí nebo firma</a></li>
                <li><a href="#sprcha-vana-wc">Sprcha, vana a WC</a></li>
                <li><a href="#materialy">Materiály</a></li>
                <li><a href="#harmonogram">Načasování a délka</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏠 Stěhování & rekonstrukce<span>30 článků →</span></Link>
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
