import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jaké rostliny vysadit do stínu na zahradě",
  description: "Přehled trvalek, keřů a okrasných rostlin, které zvládnou polostín i hluboký stín pod stromy a u domu.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/rostliny-do-stinu-na-zahrade" },
  openGraph: { title: "Jaké rostliny vysadit do stínu na zahradě", description: "Přehled trvalek, keřů a okrasných rostlin, které zvládnou polostín i hluboký stín pod stromy a u domu.", url: "https://www.domovniguru.cz/blog/rostliny-do-stinu-na-zahrade", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%C3%A9%20rostliny%20vysadit%20do%20st%C3%ADnu%20na%20zahrad%C4%9B&cat=blog", width: 1200, height: 630, alt: "Jaké rostliny vysadit do stínu na zahradě" }] },
  twitter: { card: "summary_large_image", title: "Jaké rostliny vysadit do stínu na zahradě", description: "Přehled trvalek, keřů a okrasných rostlin, které zvládnou polostín i hluboký stín pod stromy a u domu." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/rostliny-do-stinu-na-zahrade#article", "headline": "Jaké rostliny vysadit do stínu na zahradě", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["rostliny do stínu", "stínomilné trvalky", "stínomilné keře", "zahrada pod stromy", "půdopokryvné rostliny do stínu"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Rostliny do stínu na zahradě", "item": "https://www.domovniguru.cz/blog/rostliny-do-stinu-na-zahrade" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Jaký je rozdíl mezi polostínem a hlubokým stínem?", "acceptedAnswer": { "@type": "Answer", "text": "Polostín znamená, že místo dostává přímé slunce zhruba 2 až 4 hodiny denně, typicky ráno nebo večer, zbytek dne je v difuzním světle. Hluboký stín je místo, kam přímé slunce nedopadá téměř vůbec, nebo jen na pár desítek minut, například pod hustou korunou stromu nebo na severní straně domu blízko zdi." } }, { "@type": "Question", "name": "Proč pod velkými stromy nic neroste?", "acceptedAnswer": { "@type": "Answer", "text": "Hlavní příčinou není jen stín, ale konkurence kořenů – velký strom odčerpá většinu vody a živin z okolní půdy, takže i stínomilné rostliny mohou pod ním strádat suchem. Řešením je vybírat odolné druhy jako devětsil, plicník nebo barvínek a v období sucha přidávat zálivku navíc." } }, { "@type": "Question", "name": "Jaké trvalky kvetou i v hlubokém stínu?", "acceptedAnswer": { "@type": "Answer", "text": "V hlubokém stínu kvete například devětsil japonský, podléška jarní, dymnivka nebo některé druhy hosty, byť s méně výraznými květy než na slunci. Většina stínomilných rostlin je cenná především pro listovou dekorativnost, kvetení bývá spíš bonusem než hlavní atrakcí." } }, { "@type": "Question", "name": "Jak připravit půdu pro výsadbu do stínu?", "acceptedAnswer": { "@type": "Answer", "text": "Půda ve stínu, zejména pod stromy, bývá suchá a ochuzená o živiny kořenovou konkurencí. Před výsadbou je vhodné půdu obohatit vyzrálým kompostem nebo listovou hlínou a po výsadbě udržovat vrstvu mulče, která omezí odpar vody a postupně půdu dále vylepšuje." } }, { "@type": "Question", "name": "Jak zalévat rostliny pod stromy?", "acceptedAnswer": { "@type": "Answer", "text": "Rostliny pod stromy potřebují častější, ale méně vydatnou zálivku, protože kořeny stromu vodu rychle odčerpávají z velké hloubky i šířky. Pomáhá zálivka v ranních nebo večerních hodinách a mulčování, které vodu v půdě déle udrží." } }] }] };

const RELATED = [
  { title: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
  { title: "Jak hnojit zahradu – organicky i minerálně", href: "/blog/jak-hnojit-zahradu", read: "6 min" },
  { title: "Vyvýšené záhony: Kompletní průvodce od stavby po první sklizeň", href: "/blog/vyvysene-zahony", read: "10 min" },
  { title: "Automatické zavlažování zahrady – instalace, nastavení a cena", href: "/blog/automaticke-zavlazovani-zahrady", read: "6 min" },
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
              <Link href="/blog/kategorie/zahrada">🌿 Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Rostliny do stínu na zahradě</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Jaké rostliny vysadit do stínu na zahradě</h1>
              <p className="article-lead">Stinný koutek pod vzrostlým stromem nebo na severní straně domu nemusí být prázdné nebo zarostlé plevelem. Existuje celá řada trvalek, keřů a půdopokryvných rostlin, které ve stínu nejen vydrží, ale doslova prospívají. Tady je přehled toho nejosvědčenějšího pro polostín i hluboký stín v podmínkách české zahrady.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#polostin-stin">Polostín vs. hluboký stín</a></li>
                <li><a href="#lokality">Typické stinné lokality na zahradě</a></li>
                <li><a href="#trvalky">Vhodné trvalky do stínu</a></li>
                <li><a href="#kere">Stínomilné keře</a></li>
                <li><a href="#pudopokryvne">Půdopokryvné rostliny do stínu</a></li>
                <li><a href="#puda">Příprava půdy a hnojení ve stínu</a></li>
                <li><a href="#zaliv-stromy">Zálivka u stromů</a></li>
                <li><a href="#kombinace">Kombinace barev a textur</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="polostin-stin">
              <h2>Polostín vs. hluboký stín</h2>
              <p>Než vybereš rostliny, je důležité rozlišit dvě odlišné situace. <strong>Polostín</strong> znamená, že místo dostává přímé slunce zhruba 2 až 4 hodiny denně, typicky brzy ráno nebo pozdě odpoledne, zbytek dne je v rozptýleném světle – jde třeba o místo pod vyšším plotem nebo na okraji koruny stromu. <strong>Hluboký stín</strong> je naproti tomu místo, kam přímé slunce nedopadá téměř vůbec – pod hustou korunou jehličnanu, u severní zdi domu nebo mezi vysokými budovami.</p>
              <p>Tahle rozlišnost je klíčová, protože většina takzvaných „stínomilných" rostlin ve skutečnosti zvládá jen polostín a v hlubokém stínu chřadne nebo nekvete. Skutečně odolných druhů pro hluboký stín je výrazně méně.</p>
            </section>

            <section id="lokality">
              <h2>Typické stinné lokality na zahradě</h2>
              <ul>
                <li><strong>Pod vzrostlými listnatými stromy</strong> – proměnlivý stín, na jaře před vyrašením listů je tu víc světla, v létě naopak hluboký stín</li>
                <li><strong>Pod jehličnany</strong> – stálý hluboký stín po celý rok, navíc kyselejší a suchá půda od jehličí</li>
                <li><strong>Severní strana domu</strong> – stabilní stín bez přímého slunce, ale obvykle dobře chráněné před větrem</li>
                <li><strong>Mezi domem a sousedním plotem nebo zdí</strong> – úzký koridor s omezeným přístupem světla ze stran</li>
                <li><strong>Pod terasou nebo pergolou</strong> – proměnlivý stín podle hustoty zastínění a orientace</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Před výsadbou pozoruj konkrétní místo během jednoho slunečného dne a zapisuj si, kolik hodin a v jaké denní době tam svítí slunce – odhad „je to tam stinné" je často zavádějící.</div>
            </section>

            <section id="trvalky">
              <h2>Vhodné trvalky do stínu</h2>
              <ul>
                <li><strong>Kapraď</strong> (např. papratka samičí, pýřitec) – klasická volba pro hluboký stín, dekorativní listy, nenáročná na živiny, potřebuje jen stálou vlhkost</li>
                <li><strong>Hosta (bohyška)</strong> – velký výběr barev a velikostí listů, zvládá polostín i hlubší stín, citlivá na slimáky</li>
                <li><strong>Srdcovka nádherná (dicentra)</strong> – jarní kvetoucí trvalka s nápadnými „srdíčkovými" květy, po odkvětu na léto zatahuje do země</li>
                <li><strong>Devětsil japonský</strong> – velkolisté, velmi odolné, zvládá i suchou a kořenovou konkurenci pod stromy, vhodný i do hlubokého stínu</li>
                <li><strong>Plicník (pulmonaria)</strong> – brzy zjara kvetoucí, skvrnité listy zůstávají dekorativní celé léto</li>
                <li><strong>Podléška jarní (anemone nemorosa)</strong> – drobná jarní kvetoucí trvalka, ideální pod listnaté stromy, kde na jaře proniká víc světla</li>
              </ul>
            </section>

            <section id="kere">
              <h2>Stínomilné keře</h2>
              <ul>
                <li><strong>Vavřínek lékařský (skimmia)</strong> – nízký, stálezelený keř s aromatickými listy, zvládá i hlubší stín</li>
                <li><strong>Hortenzie (zejména hortenzie velkolistá)</strong> – nejlépe prospívá v polostínu, přímé polední slunce jí škodí na květech i listech</li>
                <li><strong>Tis (taxus)</strong> – velmi odolný jehličnatý keř, zvládá i hluboký stín, dobrý na živé ploty ve stinných partiích zahrady</li>
                <li><strong>Mahonie cesmínolistá</strong> – stálezelený keř s ostny podobnými cesmíně, zvládá i suchý stín pod stromy</li>
                <li><strong>Zimolez popínavý</strong> – pro stinné zdi a ploty, kde potřebuješ rychlé zazelenění svislé plochy</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Hortenzie a další keře citlivé na sucho ve stínu pod stromy dobře doplníš mulčem z kůry, který udrží vlhkost a omezí konkurenci plevele o vodu.</div>
            </section>

            <section id="pudopokryvne">
              <h2>Půdopokryvné rostliny do stínu</h2>
              <p>Půdopokryvné rostliny jsou ideální pro stinné plochy, kde nechceš trávník (ten ve stínu stejně bídně roste) ani náročnou údržbu záhonu.</p>
              <ul>
                <li><strong>Barvínek menší (vinca minor)</strong> – stálezelený, rychle se rozrůstá, zvládá i hluboký stín a suchou půdu pod stromy</li>
                <li><strong>Devětsil a kopytník evropský</strong> – nízké, lesklé listy vytvářející souvislý porost ve stínu</li>
                <li><strong>Pakost (geranium macrorrhizum)</strong> – aromatické listy, růžové až fialové květy, dobře potlačuje plevel</li>
                <li><strong>Konvalinka vonná</strong> – tradiční stínomilná cibulovina s výrazně vonícími květy na jaře</li>
              </ul>
            </section>

            <section id="puda">
              <h2>Příprava půdy a hnojení ve stínu</h2>
              <p>Půda ve stinných místech, zejména pod stromy, bývá ochuzená o živiny díky kořenové konkurenci a často i suchá, protože koruna stromu funguje jako velký „deštník", který odvádí část dešťové vody mimo kořenový prostor menších rostlin. Před výsadbou je vhodné půdu vylepšit vyzrálým kompostem nebo listovou hlínou, která zlepší strukturu a zadržování vody.</p>
              <p>Hnojení ve stínu má smysl spíš mírné a postupné – přebytek dusíku u stínomilných trvalek často vede k bujnému, ale měkkému a náchylnému k poškození růstu. Postačí jarní přihnojení kompostem nebo pomalu rozpustným hnojivem a mulč, který živiny doplňuje postupně.</p>
            </section>

            <section id="zaliv-stromy">
              <h2>Zálivka u stromů – konkurence kořenů</h2>
              <p>Pod velkými stromy neselhávají rostliny jen na nedostatku světla, ale především na konkurenci kořenů – strom odčerpá většinu dostupné vody i živin z okolní půdy do velké hloubky a šířky, často mnohem dál, než sahá jeho koruna. I vyloženě stínomilné rostliny tak mohou pod stromem strádat suchem.</p>
              <p>Řešením je volit nejodolnější druhy (devětsil, barvínek, plicník) a v období sucha přidávat zálivku navíc, ideálně v ranních nebo večerních hodinách, kdy se méně vody odpaří. Mulčování kůrou nebo listovou hrabankou výrazně pomáhá udržet vlhkost déle v půdě.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud výsadba pod stromem opakovaně neprospívá, zkus menší jámy obohatit kvalitním kompostem a izolovat je od přímé kořenové konkurence vsazením kořenové bariéry nebo většího květináče bez dna zapuštěného do země.</div>
            </section>

            <section id="kombinace">
              <h2>Kombinace barev a textur ve stínovém záhonu</h2>
              <p>Stínový záhon nemusí být nudný – naopak, kontrast tvarů a textur listů je tu často důležitější než barva květů, protože kvetení je ve stínu obecně skromnější a kratší. Osvědčuje se kombinovat velké listy hosty nebo devětsilu s drobnou, jemnou texturou kapradí a doplnit pestrobarevnými listy plicníku nebo skvrnitými odrůdami hosty pro vizuální oživení.</p>
              <p>Výškově je dobré stavět záhon ve vrstvách – nejvyšší keře a trvalky vzadu nebo u zdi, střední trvalky uprostřed a půdopokryvné rostliny jako lem nebo výplň mezer. I v relativně tmavém koutě tak vznikne plnohodnotný, vrstvený záhon.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Jaký je rozdíl mezi polostínem a hlubokým stínem?", a: "Polostín znamená, že místo dostává přímé slunce zhruba 2 až 4 hodiny denně, typicky ráno nebo večer, zbytek dne je v difuzním světle. Hluboký stín je místo, kam přímé slunce nedopadá téměř vůbec, nebo jen na pár desítek minut, například pod hustou korunou stromu nebo na severní straně domu blízko zdi." },
                  { q: "Proč pod velkými stromy nic neroste?", a: "Hlavní příčinou není jen stín, ale konkurence kořenů – velký strom odčerpá většinu vody a živin z okolní půdy, takže i stínomilné rostliny mohou pod ním strádat suchem. Řešením je vybírat odolné druhy jako devětsil, plicník nebo barvínek a v období sucha přidávat zálivku navíc." },
                  { q: "Jaké trvalky kvetou i v hlubokém stínu?", a: "V hlubokém stínu kvete například devětsil japonský, podléška jarní, dymnivka nebo některé druhy hosty, byť s méně výraznými květy než na slunci. Většina stínomilných rostlin je cenná především pro listovou dekorativnost, kvetení bývá spíš bonusem než hlavní atrakcí." },
                  { q: "Jak připravit půdu pro výsadbu do stínu?", a: "Půda ve stínu, zejména pod stromy, bývá suchá a ochuzená o živiny kořenovou konkurencí. Před výsadbou je vhodné půdu obohatit vyzrálým kompostem nebo listovou hlínou a po výsadbě udržovat vrstvu mulče, která omezí odpar vody a postupně půdu dále vylepšuje." },
                  { q: "Jak zalévat rostliny pod stromy?", a: "Rostliny pod stromy potřebují častější, ale méně vydatnou zálivku, protože kořeny stromu vodu rychle odčerpávají z velké hloubky i šířky. Pomáhá zálivka v ranních nebo večerních hodinách a mulčování, které vodu v půdě déle udrží." },
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
                <li><a href="#polostin-stin">Polostín vs. hluboký stín</a></li>
                <li><a href="#lokality">Stinné lokality na zahradě</a></li>
                <li><a href="#trvalky">Vhodné trvalky</a></li>
                <li><a href="#kere">Stínomilné keře</a></li>
                <li><a href="#pudopokryvne">Půdopokryvné rostliny</a></li>
                <li><a href="#puda">Příprava půdy a hnojení</a></li>
                <li><a href="#zaliv-stromy">Zálivka u stromů</a></li>
                <li><a href="#kombinace">Barvy a textury</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>32 článků →</span></Link>
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
