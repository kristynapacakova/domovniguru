import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";
import AdBanner from "@/app/components/AdBanner";

export const metadata: Metadata = {
  title: "Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem",
  description: "Jak vybrat tu správnou stěnu, zvolit odstín a namalovat akcentovou stěnu krok za krokem – tipy na barvy i inspirace v tmavě zelené, terakotové a grafitové.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/malovani-akcentove-steny" },
  openGraph: {
    title: "Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem",
    description: "Jak vybrat tu správnou stěnu, zvolit odstín a namalovat akcentovou stěnu krok za krokem – tipy na barvy i inspirace v tmavě zelené, terakotové a grafitové.",
    url: "https://www.domovniguru.cz/blog/malovani-akcentove-steny",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20namalovat%20akcentovou%20st%C4%9Bnu%20%E2%80%93%20inspirace%20a%20postup%20krok%20za%20krokem&cat=blog", width: 1200, height: 630, alt: "Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak namalovat akcentovou stěnu",
    description: "Výběr stěny, odstínu a postup malování krok za krokem.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/malovani-akcentove-steny#article",
      "headline": "Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem",
      "description": "Jak vybrat tu správnou stěnu, zvolit odstín a namalovat akcentovou stěnu krok za krokem – tipy na barvy i inspirace v tmavě zelené, terakotové a grafitové.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/malovani-akcentove-steny" },
      "inLanguage": "cs",
      "keywords": ["akcentová stěna", "accent wall", "jak namalovat akcentovou stěnu", "barva na akcentovou stěnu", "tmavá stěna v obýváku"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/malovani-akcentove-steny#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Malování & barvy", "item": "https://www.domovniguru.cz/blog/kategorie/malovani" },
        { "@type": "ListItem", "position": 4, "name": "Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem", "item": "https://www.domovniguru.cz/blog/malovani-akcentove-steny" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/malovani-akcentove-steny#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Co je to akcentová stěna?", "acceptedAnswer": { "@type": "Answer", "text": "Akcentová stěna je jedna stěna v místnosti, kterou natřete výrazně odlišnou barvou nebo odstínem než zbytek prostoru, aby vytvořila vizuální dominantu a dodala interiéru hloubku a charakter." } },
        { "@type": "Question", "name": "Jak vybrat, kterou stěnu udělat akcentovou?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastěji se volí stěna za postelí, za pohovkou nebo stěna s krbem či architektonickým prvkem, na kterou padá pohled hned po vstupu do místnosti. Vyhněte se stěnám s mnoha dveřmi nebo okny, kde se barva ztrácí v přerušeních." } },
        { "@type": "Question", "name": "Jakou barvu zvolit na akcentovou stěnu v malém pokoji?", "acceptedAnswer": { "@type": "Answer", "text": "V menším pokoji funguje dobře sytá, ale ne příliš temná barva, například prachová zelená, terakotová nebo hlubší modrá. Příliš černé nebo extrémně tmavé odstíny mohou malý prostor opticky ještě zmenšit, pokud chybí dostatek světla." } },
        { "@type": "Question", "name": "Kolik vrstev barvy potřebuje akcentová stěna?", "acceptedAnswer": { "@type": "Answer", "text": "Sytější a tmavší odstíny obvykle potřebují dvě až tři vrstvy, aby barva kryla rovnoměrně a nebyl prosvítat původní podklad. Mezi vrstvami je nutné dodržet dobu zaschnutí podle výrobce, obvykle 2–4 hodiny." } },
        { "@type": "Question", "name": "Musí být akcentová stěna vždy tmavá?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, akcentová stěna nemusí být tmavá – funguje i sytá teplá barva, výrazná tapeta nebo dokonce světlejší odstín, pokud je v kontrastu se zbytkem prostoru. Důležitý je kontrast a záměr, ne konkrétní tón." } },
        { "@type": "Question", "name": "Jak zabránit roztečení barvy mimo akcentovou stěnu?", "acceptedAnswer": { "@type": "Answer", "text": "Hranice akcentové stěny vždy vymezte malířskou páskou, kterou důkladně přitlačíte, a v rozích a u stropu pracujte s tenkým štětcem místo válečku, abyste měli nad linií lepší kontrolu." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/malovani-akcentove-steny#howto",
      "name": "Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem",
      "description": "Jak vybrat tu správnou stěnu, zvolit odstín a namalovat akcentovou stěnu krok za krokem – tipy na barvy i inspirace v tmavě zelené, terakotové a grafitové.",
      "step": [
        { "@type": "HowToStep", "name": "Výběr stěny", "text": "Zvolte stěnu, která je přirozeným vizuálním středem místnosti – nejčastěji za postelí, pohovkou nebo s krbem." },
        { "@type": "HowToStep", "name": "Výběr odstínu", "text": "Vyberte barvu, která ladí se zbytkem interiéru, ale vytváří dostatečný kontrast – inspirujte se tmavě zelenou, terakotovou nebo grafitovou." },
        { "@type": "HowToStep", "name": "Příprava a vymezení páskou", "text": "Vymezte hranice stěny malířskou páskou a ochraňte podlahu a sousední stěny, povrch očistěte a případně opravte." },
        { "@type": "HowToStep", "name": "Penetrace a podklad", "text": "U výrazného barevného přechodu naneste šedý nebo tónovaný podklad, který pomůže sytým barvám lépe kryt." },
        { "@type": "HowToStep", "name": "Nátěr ve vrstvách", "text": "Naneste dvě až tři vrstvy barvy válečkem, mezi vrstvami dodržte dobu zaschnutí a okraje dotáhněte štětcem." },
        { "@type": "HowToStep", "name": "Dokončení a kontrastní detaily", "text": "Po zaschnutí odlepte pásku, zkontrolujte hrany a doplňte interiér kontrastními detaily, které barvu propojí se zbytkem místnosti." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", read: "5 min" },
  { title: "Jak malovat zeď – kompletní postup", href: "/blog/jak-malovat-zed", read: "5 min" },
  { title: "Tapety vs. barva – co zvolit", href: "/blog/tapety-vs-barva", read: "5 min" },
  { title: "Nejčastější chyby při malování", href: "/blog/nejcastejsi-chyby-pri-malovani", read: "5 min" },
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
              <Link href="/blog/kategorie/malovani">Malování & barvy</Link><span className="breadcrumb-sep">/</span>
              <span>Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/malovani" className="article-cat-pill">🎨 Malování & barvy</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem</h1>
              <p className="article-lead">Akcentová stěna je jeden z nejlevnějších a nejrychlejších způsobů, jak interiéru dodat charakter, aniž byste museli měnit nábytek nebo investovat do rekonstrukce. Stačí vybrat tu správnou stěnu, sáhnout po odvážnějším odstínu a vědět, jak na to, aby výsledek vypadal jako z katalogu, ne jako nedotažený experiment.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/malovani-akcentove-steny" title="Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-je">Co je akcentová stěna</a></li>
                <li><a href="#vyber-steny">Jak vybrat tu správnou stěnu</a></li>
                <li><a href="#vyber-odstinu">Jak zvolit barvu a odstín</a></li>
                <li><a href="#postup">Postup malování krok za krokem</a></li>
                <li><a href="#inspirace">Inspirace odstíny</a></li>
                <li><a href="#detaily">Kontrastní detaily a doplňky</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="co-je">
              <h2>Co je akcentová stěna a proč ji udělat</h2>
              <p>Akcentová, anglicky accent wall, je jedna stěna v místnosti natřená výrazně odlišnou barvou než zbytek prostoru. Slouží jako vizuální dominanta, která prostoru dodá hloubku, definuje funkční zónu a odvádí pozornost k zajímavému prvku, jako je postel, pohovka nebo krb.</p>
              <h3>Proč je tak populární</h3>
              <p>Na rozdíl od přemalování celého pokoje je akcentová stěna rychlejší, levnější a méně riziková volba pro experimentování s výraznými barvami. Pokud se odstín po čase přestane líbit, stačí přemalovat jen jednu plochu, ne celý interiér.</p>
            </section>

            <section id="vyber-steny">
              <h2>Jak vybrat tu správnou stěnu</h2>
              <p>Volba správné stěny rozhoduje o tom, jestli akcent bude působit jako záměrný designový prvek, nebo jako nahodilá skvrna barvy v prostoru.</p>
              <h3>Stěna s přirozeným těžištěm pohledu</h3>
              <p>Nejlépe fungují stěny, na které padne pohled hned po vstupu do místnosti – stěna za čelem postele v ložnici, stěna za pohovkou v obývacím pokoji nebo stěna s krbem či televizí. Tyto plochy už mají přirozenou roli vizuálního středu, barva ji jen zvýrazní.</p>
              <h3>Čemu se vyhnout</h3>
              <p>Stěny s velkým množstvím dveří, oken nebo výklenků nejsou pro akcent ideální – barevná plocha se zde rozpadá na malé úseky a ztrácí svůj efekt. Stejně tak se nedoporučuje volit stěnu hned za hlavním vstupem, protože pohled na barvu padne jako první, ještě než se oko stihne zorientovat v prostoru.</p>
              <h3>Architektonické prvky jako vodítko</h3>
              <p>Pokud má místnost výklenek, niku nebo zalomenou stěnu, jsou tato místa ideálním přirozeným rámem pro akcentovou barvu, protože barva tak respektuje konstrukci prostoru.</p>
            </section>

            <section id="vyber-odstinu">
              <h2>Jak zvolit barvu a odstín ke zbytku interiéru</h2>
              <p>Akcentová barva musí s místností komunikovat, ne s ní soupeřit – proto se vyplatí vybírat odstín cíleně podle zbytku zařízení.</p>
              <h3>Vycházejte z existujících barev v místnosti</h3>
              <p>Podívejte se na barvy, které už v prostoru jsou – na podlahu, textil, nábytek nebo doplňky – a vyberte odstín, který je doplňuje nebo s nimi ladí v rámci jedné barevné palety. Sytější verze barvy, která se v místnosti už objevuje jako doplněk, je bezpečná a osvědčená volba.</p>
              <h3>Sytost podle velikosti a světla v pokoji</h3>
              <p>Ve světlých a velkých místnostech si můžete dovolit i velmi tmavé a syté odstíny, protože dostatek přirozeného světla jejich intenzitu vyváží. V malých nebo špatně osvětlených pokojích zvolte raději středně sytou barvu, aby prostor nepůsobil stísněně.</p>
              <h3>Testování odstínu na místě</h3>
              <p>Před nákupem většího množství barvy si vždy naneste vzorek přímo na stěnu na ploše alespoň 50×50 cm a sledujte ho v různou denní dobu – barva se za denního a večerního světla může výrazně lišit.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud si nejste jistí výrazným odstínem, vyzkoušejte ho nejprve na menší ploše, například na stěně v chodbě nebo v koupelně, než se rozhodnete pro hlavní obytný prostor.</div>
            </section>

            <section id="postup">
              <h2>Postup malování akcentové stěny krok za krokem</h2>
              <p>Technicky se akcentová stěna maluje podobně jako jakákoliv jiná, ale kvůli sytosti barvy a přesné hranici je potřeba věnovat větší pozornost přípravě a vrstvení.</p>
              <h3>Vymezení hranic páskou</h3>
              <p>Hranice akcentové stěny – v rozích, u stropu a podlahy – vymezte kvalitní malířskou páskou, kterou důkladně přitlačíte, aby barva nepropíkala na sousední stěny. Sousední plochy a podlahu zakryjte fólií nebo papírem.</p>
              <h3>Podkladová vrstva u velmi sytých barev</h3>
              <p>Pokud volíte velmi sytý nebo tmavý odstín, vyplatí se nejprve naneste šedý nebo barvě podobný tónovaný podklad. Sytá barva se na tónovaném podkladu kryje rovnoměrněji a stačí méně vrstev finální barvy.</p>
              <h3>Nanášení a počet vrstev</h3>
              <p>Barvu nanášejte válečkem v rovnoměrných tazích, okraje a rohy dotahujte menším štětcem. Sytější odstíny obvykle potřebují dvě až tři vrstvy, mezi nimiž je nutné dodržet dobu zaschnutí podle výrobce, obvykle 2 až 4 hodiny.</p>
              <h3>Odlepení pásky a finální kontrola</h3>
              <p>Pásku odlepujte, dokud je poslední vrstva ještě lehce zaschlá na povrchu, abyste předešli otrhání hrany. Po úplném zaschnutí zkontrolujte celou plochu v denním světle a případné nedokonalosti opravte tenkým štětcem.</p>
            </section>

            <section id="inspirace">
              <h2>Inspirace odstíny pro akcentovou stěnu</h2>
              <ul>
                <li><strong>Tmavě zelená</strong> – elegantní a univerzální volba, která dobře funguje v ložnicích i obývacích pokojích a ladí s dřevěným nábytkem i zlatými doplňky</li>
                <li><strong>Terakotová</strong> – teplý, zemitý odstín vhodný do prostorů s přírodními materiály, dobře kombinuje s béžovou a hnědou</li>
                <li><strong>Grafitová a antracitová</strong> – moderní a maskulinní volba, ideální za televizí nebo v pracovně, dobře vynikne v kombinaci s jasným bílým nebo dřevěným doplněním</li>
                <li><strong>Hlubší modrá</strong> – klidná barva vhodná do ložnice, dobře funguje s textiliemi v teplých neutrálních tónech</li>
                <li><strong>Prachová růžová nebo broskvová</strong> – jemnější varianta akcentu pro ty, kteří nechtějí sahat po příliš tmavém odstínu</li>
              </ul>
            </section>

            <section id="detaily">
              <h2>Kontrastní detaily a doplňky</h2>
              <p>Samotná barva na stěně je jen základ – propojení s ostatními prvky v místnosti rozhoduje o tom, jak harmonicky bude akcentová stěna nakonec působit.</p>
              <h3>Opakování barvy v menším měřítku</h3>
              <p>Stejný odstín zopakujte v drobnějších doplňcích – polštářích, vázách nebo rámech obrazů – aby barva nepůsobila izolovaně, ale jako součást celkové palety místnosti.</p>
              <h3>Kontrastní lišty a rámy</h3>
              <p>Bílé nebo dřevěné lišty kolem akcentové stěny dodají hraně čistý a profesionální vzhled. U starších interiérů zvažte i kontrastní obložení dveří nebo oken na stejné stěně, pokud se s barvou esteticky doplňují.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Co je to akcentová stěna?", a: "Akcentová stěna je jedna stěna v místnosti, kterou natřete výrazně odlišnou barvou nebo odstínem než zbytek prostoru, aby vytvořila vizuální dominantu a dodala interiéru hloubku a charakter." },
                  { q: "Jak vybrat, kterou stěnu udělat akcentovou?", a: "Nejčastěji se volí stěna za postelí, za pohovkou nebo stěna s krbem či architektonickým prvkem, na kterou padá pohled hned po vstupu do místnosti. Vyhněte se stěnám s mnoha dveřmi nebo okny, kde se barva ztrácí v přerušeních." },
                  { q: "Jakou barvu zvolit na akcentovou stěnu v malém pokoji?", a: "V menším pokoji funguje dobře sytá, ale ne příliš temná barva, například prachová zelená, terakotová nebo hlubší modrá. Příliš černé nebo extrémně tmavé odstíny mohou malý prostor opticky ještě zmenšit, pokud chybí dostatek světla." },
                  { q: "Kolik vrstev barvy potřebuje akcentová stěna?", a: "Sytější a tmavší odstíny obvykle potřebují dvě až tři vrstvy, aby barva kryla rovnoměrně a nebylo prosvítat původní podklad. Mezi vrstvami je nutné dodržet dobu zaschnutí podle výrobce, obvykle 2–4 hodiny." },
                  { q: "Musí být akcentová stěna vždy tmavá?", a: "Ne, akcentová stěna nemusí být tmavá – funguje i sytá teplá barva, výrazná tapeta nebo dokonce světlejší odstín, pokud je v kontrastu se zbytkem prostoru. Důležitý je kontrast a záměr, ne konkrétní tón." },
                  { q: "Jak zabránit roztečení barvy mimo akcentovou stěnu?", a: "Hranice akcentové stěny vždy vymezte malířskou páskou, kterou důkladně přitlačíte, a v rozích a u stropu pracujte s tenkým štětcem místo válečku, abyste měli nad linií lepší kontrolu." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/malovani-akcentove-steny" title="Jak namalovat akcentovou stěnu – inspirace a postup krok za krokem" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Malování & barvy</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#co-je">Co je akcentová stěna</a></li>
                <li><a href="#vyber-steny">Výběr stěny</a></li>
                <li><a href="#vyber-odstinu">Výběr odstínu</a></li>
                <li><a href="#postup">Postup malování</a></li>
                <li><a href="#inspirace">Inspirace odstíny</a></li>
                <li><a href="#detaily">Kontrastní detaily</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/malovani" className="sidebar-cat-link">🎨 Malování & barvy<span>Více článků →</span></Link>
            </div>
            <div className="sidebar-widget">
              <AdBanner
                href="https://ehub.cz/system/scripts/click.php?a_aid=31989715&a_bid=0b468a80"
                src="https://doc.ehub.cz/b/b5f0fbe9/0b468a80.jpg"
                alt="Bonami.cz – bytové doplňky a dekorace"
                width={160}
                height={600}
              />
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
        .article-tip{background:#fffbeb;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .faq-list{display:flex;flex-direction:column;gap:8px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#fff}
        .faq-summary{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:background 120ms}
        .faq-summary:hover{background:var(--surface)}
        .faq-icon{font-size:14px;font-weight:400;flex-shrink:0;margin-left:12px;transition:transform 150ms}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{font-size:14px;line-height:1.65;color:var(--muted);font-weight:300;padding:0 20px 16px}
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
        @media(max-width:600px){.article-layout{padding:32px 0 60px}}
      `}</style>
    </>
  );
}
