import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak vybrat a vyměnit radiátor",
  description: "Deskové, článkové, trubkové nebo koupelnové radiátory? Jak spočítat potřebný výkon podle tepelných ztrát, jaké jsou typy připojení a jak radiátor svépomocí vyměnit. Praktický návod.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-vybrat-a-vymenit-radiator" },
  openGraph: { title: "Jak vybrat a vyměnit radiátor", description: "Deskové, článkové, trubkové nebo koupelnové radiátory? Jak spočítat potřebný výkon podle tepelných ztrát, jaké jsou typy připojení a jak radiátor svépomocí vyměnit. Praktický návod.", url: "https://www.domovniguru.cz/blog/jak-vybrat-a-vymenit-radiator", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-21T08:00:00Z", modifiedTime: "2026-07-21T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20vybrat%20a%20vym%C4%9Bnit%20radi%C3%A1tor&cat=blog", width: 1200, height: 630, alt: "Jak vybrat a vyměnit radiátor" }] },
  twitter: { card: "summary_large_image", title: "Jak vybrat a vyměnit radiátor", description: "Deskové, článkové, trubkové nebo koupelnové radiátory? Jak spočítat potřebný výkon, jaké jsou typy připojení a jak radiátor svépomocí vyměnit." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/jak-vybrat-a-vymenit-radiator#article", "headline": "Jak vybrat a vyměnit radiátor", "datePublished": "2026-07-21T08:00:00Z", "dateModified": "2026-07-21T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["výběr radiátoru", "výměna radiátoru", "deskový radiátor", "článkový radiátor", "koupelnový radiátor", "výkon radiátoru výpočet", "připojení radiátoru", "jak vyměnit radiátor svépomocí"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Jak vybrat a vyměnit radiátor", "item": "https://www.domovniguru.cz/blog/jak-vybrat-a-vymenit-radiator" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký radiátor je nejlepší do bytu?", "acceptedAnswer": { "@type": "Answer", "text": "Pro většinu bytů s teplovodním topením je nejpraktičtější deskový radiátor. Rychle se ohřívá i chladne, dobře reaguje na termostatickou hlavici, má nízký objem vody a příznivou cenu. Do koupelny se hodí trubkový (žebříkový) radiátor, na který lze pověsit ručníky. Litinové článkové radiátory mají velkou tepelnou setrvačnost a hodí se spíše do domů se stabilním provozem topení." } }, { "@type": "Question", "name": "Jak spočítat potřebný výkon radiátoru?", "acceptedAnswer": { "@type": "Answer", "text": "Výkon radiátoru se určuje podle tepelných ztrát místnosti, ne podle plochy. Orientačně počítejte u zatepleného bytu 50–70 W na m², u starší nezateplené stavby 80–120 W na m². Místnost 20 m² v běžném bytě tak potřebuje zhruba 1 000–1 400 W. Přesnější číslo podle rozměrů, zateplení a orientace místnosti spočítá naše kalkulačka výkonu radiátoru." } }, { "@type": "Question", "name": "Můžu vyměnit radiátor sám?", "acceptedAnswer": { "@type": "Answer", "text": "Výměnu radiátoru za stejný typ se shodnou roztečí a připojením zvládne zručný kutil. Nutné je uzavřít ventily, vypustit vodu z radiátoru (ne z celé soustavy), demontovat staré těleso, osadit nové a soustavu doplnit a odvzdušnit. Pokud je potřeba měnit rozvody, přesouvat připojení nebo pracovat na plynovém kotli, přizvěte topenáře. Po každé výměně je nutná kontrola těsnosti a tlaku." } }, { "@type": "Question", "name": "Jaký je rozdíl mezi bočním a spodním připojením radiátoru?", "acceptedAnswer": { "@type": "Answer", "text": "Boční připojení má přívod a zpátečku po stranách radiátoru a používá se u starších rozvodů vedených po zdi. Spodní (středové) připojení má obě trubky zespodu, obvykle s roztečí 50 mm, a hodí se tam, kde rozvody vedou v podlaze. Při výměně je klíčové, aby nový radiátor odpovídal typu připojení a rozteči vývodů, jinak je nutné upravit rozvody." } }, { "@type": "Question", "name": "Musím při výměně radiátoru vypustit celou topnou soustavu?", "acceptedAnswer": { "@type": "Answer", "text": "Ne. U výměny jednoho radiátoru stačí uzavřít termostatický a uzavírací (zpátečkový) ventil na obou koncích tělesa a vypustit vodu jen z odpojeného radiátoru do připravené nádoby. Celá soustava zůstává napuštěná. Vypuštění celé soustavy je nutné jen při rozsáhlejších zásazích do rozvodů. Po zpětném napojení soustavu doplňte na správný tlak a radiátor odvzdušněte." } }] }] };

const RELATED = [
  { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", read: "5 min" },
  { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", read: "5 min" },
  { title: "Jak správně topit a nepřeplácet", href: "/blog/jak-spravne-topit", read: "6 min" },
  { title: "Tepelné čerpadlo: průvodce výběrem a instalací", href: "/blog/tepelne-cerpadlo-pruvodce", read: "11 min" },
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
              <span>Jak vybrat a vyměnit radiátor</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak vybrat a vyměnit radiátor</h1>
              <p className="article-lead">Starý radiátor rezaví, netopí rovnoměrně nebo se nehodí k novému rozvodu? Výběr správného tělesa a jeho výměna nejsou žádná věda – pokud víte, jaký typ zvolit, jak spočítat potřebný výkon a jak radiátor bezpečně odpojit. Tady je přehled od typů radiátorů přes dimenzování až po svépomocnou výměnu krok za krokem.</p>
              <div className="article-meta-row"><span>Aktualizováno: 21. července 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons
                url="https://www.domovniguru.cz/blog/jak-vybrat-a-vymenit-radiator"
                title="Jak vybrat a vyměnit radiátor"
              />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 900 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="900" height="210" fill="#fdf6f0"/>
                <defs>
                  <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#eef2f6"/>
                    <stop offset="100%" stopColor="#d8dee6"/>
                  </linearGradient>
                  <linearGradient id="warmGrad" x1="0" y1="1" x2="0" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#e07040"/>
                    <stop offset="100%" stopColor="#f2b880"/>
                  </linearGradient>
                </defs>

                <text x="450" y="24" textAnchor="middle" fontSize="11" fill="#a08050" fontWeight="700" letterSpacing="0.08em">TYPY RADIÁTORŮ A VÝBĚR VÝKONU</text>

                {/* ── DESKOVÝ ── */}
                <g transform="translate(45, 45)">
                  <rect x="0" y="10" width="120" height="90" rx="6" fill="url(#panelGrad)" stroke="#b8c0c8" strokeWidth="1.5"/>
                  {[0,1,2,3,4,5,6,7,8].map((i) => (
                    <rect key={i} x={8 + i*13} y="16" width="5" height="78" rx="2" fill="#c4ccd4"/>
                  ))}
                  <rect x="0" y="10" width="120" height="90" rx="6" fill="url(#warmGrad)" opacity="0.14"/>
                  <rect x="4" y="4" width="14" height="9" rx="2" fill="#909090"/>
                  <text x="60" y="122" textAnchor="middle" fontSize="10" fill="#4a4a48" fontWeight="600">Deskový</text>
                  <text x="60" y="138" textAnchor="middle" fontSize="8.5" fill="#88837a">rychlý, univerzální</text>
                </g>

                {/* ── ČLÁNKOVÝ ── */}
                <g transform="translate(230, 45)">
                  {[0,1,2,3,4,5,6].map((i) => (
                    <g key={i}>
                      <rect x={i*16} y="10" width="12" height="90" rx="4" fill="url(#warmGrad)" opacity="0.55" stroke="#c88858" strokeWidth="0.8"/>
                    </g>
                  ))}
                  <rect x="0" y="14" width="108" height="8" rx="4" fill="#c8b8a8"/>
                  <rect x="0" y="88" width="108" height="8" rx="4" fill="#c8b8a8"/>
                  <text x="54" y="122" textAnchor="middle" fontSize="10" fill="#4a4a48" fontWeight="600">Článkový</text>
                  <text x="54" y="138" textAnchor="middle" fontSize="8.5" fill="#88837a">velká setrvačnost</text>
                </g>

                {/* ── TRUBKOVÝ / KOUPELNOVÝ ── */}
                <g transform="translate(410, 40)">
                  <rect x="6" y="0" width="8" height="105" rx="4" fill="#c8ccd0"/>
                  <rect x="70" y="0" width="8" height="105" rx="4" fill="#c8ccd0"/>
                  {[8,24,40,56,72,88].map((y, i) => (
                    <rect key={i} x="10" y={y} width="64" height="6" rx="3" fill="url(#warmGrad)" opacity="0.5"/>
                  ))}
                  <text x="42" y="127" textAnchor="middle" fontSize="10" fill="#4a4a48" fontWeight="600">Trubkový</text>
                  <text x="42" y="143" textAnchor="middle" fontSize="8.5" fill="#88837a">do koupelny</text>
                </g>

                {/* ── VÝPOČET VÝKONU ── */}
                <g transform="translate(545, 42)">
                  <rect x="0" y="0" width="310" height="120" rx="10" fill="#fff" stroke="#e6ddd2" strokeWidth="1.5"/>
                  <text x="20" y="26" fontSize="11" fill="#3a7e4f" fontWeight="700">🧮 Kolik W potřebujete?</text>
                  {[
                    { t: "Zateplený byt", v: "50–70 W/m²" },
                    { t: "Starší stavba", v: "80–120 W/m²" },
                    { t: "Místnost 20 m²", v: "≈ 1 000–1 400 W" },
                  ].map(({ t, v }, i) => (
                    <g key={i} transform={`translate(0, ${44 + i*24})`}>
                      <circle cx="24" cy="6" r="3" fill="#e07a5f"/>
                      <text x="38" y="10" fontSize="11" fill="#2a2a28" fontWeight="300">{t}</text>
                      <text x="290" y="10" textAnchor="end" fontSize="11" fill="#c05030" fontWeight="600">{v}</text>
                    </g>
                  ))}
                </g>

                <rect x="300" y="180" width="300" height="24" rx="6" fill="#5a9e6f" opacity="0.12"/>
                <text x="450" y="196" textAnchor="middle" fontSize="10" fill="#3a7e4f" fontWeight="700">💡 Výkon podle tepelných ztrát, ne podle metrů čtverečních</text>
              </svg>
              <div style={{display:"flex",justifyContent:"space-around",padding:"8px 30px 12px",fontSize:"9px",letterSpacing:"0.1em",color:"#a09080",textTransform:"uppercase",background:"#fdf6f0"}}>
                <span>🔲 Deskový = univerzál</span>
                <span>🧱 Článkový = setrvačnost</span>
                <span>🚿 Trubkový = koupelna</span>
                <span>🧮 Výkon podle ztrát</span>
              </div>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy radiátorů a jak se liší</a></li>
                <li><a href="#vykon">Jak vybrat správný výkon</a></li>
                <li><a href="#pripojeni">Typy připojení a rozteče</a></li>
                <li><a href="#vymena">Výměna radiátoru krok za krokem</a></li>
                <li><a href="#bezpecnost">Bezpečnost: vypuštění a tlak</a></li>
                <li><a href="#kdy-topenar">Kdy zavolat topenáře</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy radiátorů a jak se liší</h2>
              <p>Výběr radiátoru začíná typem tělesa. Každý má jinou tepelnou charakteristiku, cenu i vhodné použití. Pro teplovodní soustavu (kotel, tepelné čerpadlo, dálkové teplo) přicházejí v úvahu čtyři základní typy.</p>
              <h3>Deskový radiátor</h3>
              <p>Nejrozšířenější volba do bytů i rodinných domů. Skládá se z jedné až tří ocelových desek s přivařenými konvekčními lamelami. Rychle se ohřívá i chladne, takže dobře spolupracuje s termostatickými hlavicemi a reaguje na změny teploty. Má nízký objem vody a příznivou cenu. Značí se čísly typu 10, 11, 21, 22 nebo 33 – první číslice udává počet desek, druhá počet řad lamel.</p>
              <h3>Článkový radiátor</h3>
              <p>Tvořený jednotlivými články (litinové, ocelové nebo hliníkové), které lze skládat podle potřebného výkonu. Litinové články mají velkou tepelnou setrvačnost – dlouho se nahřívají, ale i po vypnutí dlouho sálají. Hodí se do provozů se stabilním, nepřerušovaným topením. Hliníkové články jsou naopak lehké a rychlé.</p>
              <h3>Trubkový (koupelnový) radiátor</h3>
              <p>Takzvaný žebřík – vodorovné trubky mezi dvěma svislými sloupci. Primárně do koupelny, protože na něj lze pověsit a vysušit ručníky. Bývá dostupný i v elektrické verzi nebo jako kombinovaný (topná voda plus elektrická patrona pro provoz mimo topnou sezónu).</p>
              <h3>Trubkový designový radiátor</h3>
              <p>Estetická varianta do obytných prostor – svislé nebo vodorovné trubkové těleso v mnoha barvách a tvarech. Nabízí menší výkon na jednotku plochy než deskový, ale plní i dekorativní funkci.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Typ radiátoru</th><th>Setrvačnost</th><th>Cena</th><th>Vhodné použití</th></tr></thead>
                  <tbody>
                    <tr><td>Deskový</td><td>Nízká (rychlý)</td><td>Nízká</td><td>Byty, běžné pokoje</td></tr>
                    <tr><td>Litinový článkový</td><td>Vysoká</td><td>Střední</td><td>Stálý provoz, starší domy</td></tr>
                    <tr><td>Hliníkový článkový</td><td>Nízká</td><td>Střední</td><td>Byty, moderní rozvody</td></tr>
                    <tr><td>Trubkový koupelnový</td><td>Střední</td><td>Střední až vyšší</td><td>Koupelny, sušení ručníků</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máte tepelné čerpadlo nebo plánujete jeho pořízení, volte radiátory s větší plochou (deskové typu 22 nebo 33), které topí efektivně i při nižší teplotě topné vody. Podrobněji v článku <Link href="/blog/tepelne-cerpadlo-pruvodce" style={{ color: "#2a6496", textDecoration: "underline" }}>průvodce tepelným čerpadlem</Link>.</div>
            </section>

            <section id="vykon">
              <h2>Jak vybrat správný výkon</h2>
              <p>Nejčastější chyba při výběru radiátoru je určování výkonu podle plochy pokoje. Rozhodující jsou tepelné ztráty místnosti – kolik tepla uniká přes zdi, okna, strop a podlahu. Ty závisí na zateplení, orientaci, počtu vnějších stěn a velikosti oken.</p>
              <h3>Orientační pravidlo</h3>
              <ul>
                <li><strong>Dobře zateplený byt nebo novostavba:</strong> přibližně 50–70 W na m²</li>
                <li><strong>Částečně zateplená stavba:</strong> přibližně 70–90 W na m²</li>
                <li><strong>Starší nezateplený dům:</strong> přibližně 80–120 W na m²</li>
              </ul>
              <p>Místnost o ploše 20 m² v běžném bytě tak potřebuje zhruba 1 000–1 400 W. Kolik W radiátor potřebujete přesně podle rozměrů, zateplení a orientace místnosti, spočítá naše <Link href="/kalkulacky/vykon-radiatoru" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka výkonu radiátoru</Link>.</p>
              <h3>Pozor na teplotní spád</h3>
              <p>Udávaný výkon radiátoru platí pro určitý teplotní spád (například 75/65/20 °C). Moderní kotle a hlavně tepelná čerpadla pracují s nižšími teplotami topné vody, při kterých radiátor dodá výrazně méně tepla, než uvádí štítek. Při nízkoteplotním provozu proto počítejte s rezervou a raději volte větší těleso.</p>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Poddimenzovaný radiátor místnost nevytopí ani na maximum, předimenzovaný zase často „přeskakuje" (rychle nahřeje a vypne), což zhoršuje komfort. Cílem je těleso, které dodá potřebný výkon při běžné teplotě topné vody s malou rezervou.</div>
            </section>

            <section id="pripojeni">
              <h2>Typy připojení a rozteče</h2>
              <p>Aby nový radiátor pasoval na stávající rozvody bez zednických a instalatérských úprav, musí odpovídat typu připojení a rozteči vývodů. To je při výměně důležitější než samotný vzhled.</p>
              <h3>Boční připojení</h3>
              <p>Přívod a zpátečka jsou vyvedené po stranách radiátoru, obvykle u starších rozvodů vedených po zdi. Klíčovou hodnotou je stavební délka a osová vzdálenost připojení. Boční připojení je typické pro článkové i starší deskové radiátory.</p>
              <h3>Spodní (středové) připojení</h3>
              <p>Obě trubky vedou zespodu tělesa, nejčastěji s roztečí 50 mm. Používá se tam, kde rozvody vedou v podlaze nebo ve zdi pod radiátorem. Deskové radiátory se spodním připojením mají zabudovaný ventilový set a napojují se přes připojovací šroubení (H-kus).</p>
              <ul>
                <li><strong>Změřte rozteč vývodů</strong> – vzdálenost mezi osami přívodu a zpátečky (u spodního připojení typicky 50 mm)</li>
                <li><strong>Změřte stavební délku a výšku</strong> – aby nové těleso vešlo na místo a mělo potřebný výkon</li>
                <li><strong>Zkontrolujte typ ventilů</strong> – termostatický ventil na přívodu, uzavírací (regulační) šroubení na zpátečce</li>
                <li><strong>Ověřte směr připojení</strong> – levé, pravé nebo oboustranné podle vedení trubek</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Vyfoťte si stávající připojení a trubky ještě před nákupem a rozměry si zapište. Prodejce vám podle nich pomůže vybrat radiátor se shodnou roztečí a připojovací sadu, takže se vyhnete vracení nevhodného tělesa.</div>
            </section>

            <section id="vymena">
              <h2>Výměna radiátoru krok za krokem</h2>
              <p>Výměnu za stejný typ se shodnou roztečí zvládne zručný kutil. Počítejte s tím, že vyteče voda z odpojovaného tělesa – připravte si dostatek hadrů a nádobu. Pracujte, když je topení vypnuté a radiátor vychladlý.</p>
              <ul>
                <li><strong>Krok 1 – Uzavřete ventily:</strong> Zavřete termostatický ventil na přívodu (hlavici otočte na doraz nebo sundejte a zatlačte kolík) a uzavírací šroubení na zpátečce. Tím radiátor oddělíte od soustavy, aniž byste vypouštěli celý systém.</li>
                <li><strong>Krok 2 – Podložte a odpojte:</strong> Pod šroubení podložte nádobu a hadry. Povolením převlečných matic (dvěma klíči – jedním držíte, druhým povolujete) radiátor odpojte. Nechte vytéct vodu z tělesa do nádoby.</li>
                <li><strong>Krok 3 – Sundejte staré těleso:</strong> Vyvěste radiátor z konzol. Litinové články jsou těžké – přizvěte si pomocníka. Zkontrolujte stav zdi a konzol.</li>
                <li><strong>Krok 4 – Osaďte konzoly a nový radiátor:</strong> Podle rozměrů nového tělesa upravte nebo vyměňte konzoly, srovnejte do vodorovné polohy vodováhou a radiátor zavěste.</li>
                <li><strong>Krok 5 – Napojte šroubení:</strong> Použijte nové těsnění, převlečné matice dotáhněte přiměřeně (nepřetahujte). U spodního připojení namontujte připojovací H-kus podle návodu.</li>
                <li><strong>Krok 6 – Otevřete ventily a napusťte:</strong> Pomalu otevřete uzavírací šroubení a termostatický ventil, nechte radiátor naplnit vodou a sledujte, zda spoje netěsní.</li>
                <li><strong>Krok 7 – Odvzdušněte a zkontrolujte tlak:</strong> Radiátor odvzdušněte odvzdušňovacím ventilem a na manometru kotle zkontrolujte tlak (za studena 1,5–2 bar), případně doplňte vodu. Podrobný postup najdete v návodu <Link href="/blog/jak-odvzdusnit-radiatory" style={{ color: "#2a6496", textDecoration: "underline" }}>jak odvzdušnit radiátor</Link>.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před demontáží si vyfoťte zapojení a poznamenejte, která trubka je přívod a která zpátečka. Prohození přívodu a zpátečky u některých ventilových setů snižuje výkon nebo způsobuje hluk.</div>
            </section>

            <section id="bezpecnost">
              <h2>Bezpečnost: vypuštění a tlak</h2>
              <p>U výměny jednoho radiátoru není nutné vypouštět celou topnou soustavu. To je zásadní bod – ušetří vám to práci s opětovným napouštěním, odvzdušňováním všech těles a nastavováním tlaku v celém domě.</p>
              <ul>
                <li><strong>Vypouštějte jen odpojený radiátor</strong> – po uzavření obou ventilů vyteče pouze voda z tělesa (několik litrů), soustava zůstane napuštěná</li>
                <li><strong>Chraňte podlahu</strong> – topná voda bývá tmavá až rezavá a špatně se odstraňuje z koberců a spár; podložte fólii a hadry</li>
                <li><strong>Pracujte za studena</strong> – nikdy nezasahujte do horké soustavy pod tlakem, hrozí opaření</li>
                <li><strong>Po napojení kontrolujte tlak</strong> – nízký tlak zabrání cirkulaci, příliš vysoký namáhá soustavu; správně 1,5–2 bar za studena</li>
                <li><strong>Sledujte netěsnosti první dny</strong> – malé zavlhnutí u šroubení se může projevit až po zahřátí a několika cyklech</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> V paneláku a bytovém domě je soustava společná. Neuzavírejte stoupačky ani nezasahujte do rozvodů bez vědomí správce nebo SVJ – zásah může ovlivnit tlak a vytápění celého domu. Výměnu radiátoru v bytě nahlaste správci předem.</div>
            </section>

            <section id="kdy-topenar">
              <h2>Kdy zavolat topenáře</h2>
              <p>Řada výměn je v silách kutila, existují ale situace, kdy je rozumné (nebo nutné) přizvat odborníka. Chybný zásah do topné soustavy se projeví hlukem, netěsnostmi nebo sníženým výkonem celého okruhu.</p>
              <ul>
                <li><strong>Změna typu připojení nebo rozteče</strong> – pokud nový radiátor nepasuje na stávající vývody a je nutné upravovat či přesouvat rozvody</li>
                <li><strong>Zásah do rozvodů v podlaze nebo ve zdi</strong> – zalité potrubí a přechod mezi materiály (měď, ocel, plast) patří odborníkovi</li>
                <li><strong>Práce u plynového kotle</strong> – jakýkoli zásah do plynového zařízení smí provádět jen osoba s příslušným oprávněním</li>
                <li><strong>Kompletní výměna více radiátorů</strong> – vhodné spojit s hydraulickým vyvážením soustavy pro rovnoměrné vytápění a úspory</li>
                <li><strong>Přechod na nízkoteplotní provoz</strong> – při instalaci tepelného čerpadla je potřeba správně nadimenzovat všechna tělesa</li>
              </ul>
              <p>Kolik lze vytápěním ušetřit správným nastavením a údržbou, rozebíráme v článku <Link href="/blog/usetrit-na-vytapeni" style={{ color: "#2a6496", textDecoration: "underline" }}>jak ušetřit na vytápění</Link>. Jak topit efektivně a nepřeplácet, shrnuje návod <Link href="/blog/jak-spravne-topit" style={{ color: "#2a6496", textDecoration: "underline" }}>jak správně topit</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Při hledání topenáře vybírejte firmu se zkušeností s vaším typem zdroje tepla (plyn, tepelné čerpadlo, dálkové teplo). Nechte si dopředu potvrdit, zda cena zahrnuje odvzdušnění, kontrolu tlaku a případné vyvážení soustavy.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký radiátor je nejlepší do bytu?", a: "Pro většinu bytů s teplovodním topením je nejpraktičtější deskový radiátor. Rychle se ohřívá i chladne, dobře reaguje na termostatickou hlavici, má nízký objem vody a příznivou cenu. Do koupelny se hodí trubkový (žebříkový) radiátor, na který lze pověsit ručníky. Litinové článkové radiátory mají velkou tepelnou setrvačnost a hodí se spíše do domů se stabilním provozem topení." },
                  { q: "Jak spočítat potřebný výkon radiátoru?", a: "Výkon radiátoru se určuje podle tepelných ztrát místnosti, ne podle plochy. Orientačně počítejte u zatepleného bytu 50–70 W na m², u starší nezateplené stavby 80–120 W na m². Místnost 20 m² v běžném bytě tak potřebuje zhruba 1 000–1 400 W. Přesnější číslo podle rozměrů, zateplení a orientace místnosti spočítá naše kalkulačka výkonu radiátoru." },
                  { q: "Můžu vyměnit radiátor sám?", a: "Výměnu radiátoru za stejný typ se shodnou roztečí a připojením zvládne zručný kutil. Nutné je uzavřít ventily, vypustit vodu z radiátoru (ne z celé soustavy), demontovat staré těleso, osadit nové a soustavu doplnit a odvzdušnit. Pokud je potřeba měnit rozvody, přesouvat připojení nebo pracovat na plynovém kotli, přizvěte topenáře. Po každé výměně je nutná kontrola těsnosti a tlaku." },
                  { q: "Jaký je rozdíl mezi bočním a spodním připojením radiátoru?", a: "Boční připojení má přívod a zpátečku po stranách radiátoru a používá se u starších rozvodů vedených po zdi. Spodní (středové) připojení má obě trubky zespodu, obvykle s roztečí 50 mm, a hodí se tam, kde rozvody vedou v podlaze. Při výměně je klíčové, aby nový radiátor odpovídal typu připojení a rozteči vývodů, jinak je nutné upravit rozvody." },
                  { q: "Musím při výměně radiátoru vypustit celou topnou soustavu?", a: "Ne. U výměny jednoho radiátoru stačí uzavřít termostatický a uzavírací (zpátečkový) ventil na obou koncích tělesa a vypustit vodu jen z odpojeného radiátoru do připravené nádoby. Celá soustava zůstává napuštěná. Vypuštění celé soustavy je nutné jen při rozsáhlejších zásazích do rozvodů. Po zpětném napojení soustavu doplňte na správný tlak a radiátor odvzdušněte." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons
              url="https://www.domovniguru.cz/blog/jak-vybrat-a-vymenit-radiator"
              title="Jak vybrat a vyměnit radiátor"
            />

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
                <li><a href="#typy">Typy radiátorů</a></li>
                <li><a href="#vykon">Jak vybrat výkon</a></li>
                <li><a href="#pripojeni">Typy připojení</a></li>
                <li><a href="#vymena">Výměna krok za krokem</a></li>
                <li><a href="#bezpecnost">Bezpečnost a tlak</a></li>
                <li><a href="#kdy-topenar">Kdy zavolat topenáře</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>36 článků →</span></Link>
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
