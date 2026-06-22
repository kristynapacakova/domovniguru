import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak připravit dům na dovolenou – bezpečnost a úspora energie",
  description: "Voda, topení, spotřebiče i zabezpečení domu – kompletní checklist, jak připravit dům na delší odjezd bez rizika škody nebo vykradení.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou" },
  openGraph: {
    title: "Jak připravit dům na dovolenou – bezpečnost a úspora energie",
    description: "Voda, topení, spotřebiče i zabezpečení domu – kompletní checklist, jak připravit dům na delší odjezd bez rizika škody nebo vykradení.",
    url: "https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2026-06-22T08:00:00Z",
    modifiedTime: "2026-06-22T08:00:00Z",
    authors: ["DomovniGuru"],
    images: [{ url: "/api/og?title=Jak%20p%C5%99ipravit%20d%C5%AFm%20na%20dovolenou%20%E2%80%93%20bezpe%C4%8Dnost%20a%20%C3%BAspora%20energie&cat=blog", width: 1200, height: 630, alt: "Jak připravit dům na dovolenou – bezpečnost a úspora energie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak připravit dům na dovolenou – bezpečnost a úspora energie",
    description: "Voda, topení, spotřebiče i zabezpečení domu – checklist před delším odjezdem.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou#article",
      "headline": "Jak připravit dům na dovolenou – bezpečnost a úspora energie",
      "description": "Voda, topení, spotřebiče i zabezpečení domu – kompletní checklist, jak připravit dům na delší odjezd bez rizika škody nebo vykradení.",
      "datePublished": "2026-06-22T08:00:00Z",
      "dateModified": "2026-06-22T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou" },
      "inLanguage": "cs",
      "keywords": ["příprava domu na dovolenou", "zabezpečení domu při odjezdu", "uzavření přívodu vody na dovolenou", "topení při odjezdu na dovolenou", "checklist před odjezdem"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" },
        { "@type": "ListItem", "position": 4, "name": "Jak připravit dům na dovolenou – bezpečnost a úspora energie", "item": "https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Mám před dovolenou zavřít hlavní přívod vody?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, u delších odjezdů je to jedno z nejdůležitějších opatření. Uzavřením hlavního přívodu vody zabráníš velké škodě v případě, že by za tvé nepřítomnosti praskla hadička u pračky, prosakoval ventil nebo došlo k jiné netěsnosti rozvodu." } },
        { "@type": "Question", "name": "Mám v zimě úplně vypnout topení, když jedu na dovolenou?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, v zimních měsících topení úplně nevypínej. Stačí ho přepnout do útlumového nebo úsporného režimu kolem 12 až 15 °C, aby se v domě nezačaly tvořit podmínky pro zamrznutí vody v potrubí a vznik vlhkosti a plísní." } },
        { "@type": "Question", "name": "Je dobré sdílet na sociálních sítích, že jedeme na dovolenou?", "acceptedAnswer": { "@type": "Answer", "text": "Není to vhodné, zejména pokud máš veřejný profil. Informace o tom, že je dům prázdný a na jak dlouho, se snadno dostane k nepovolaným lidem. Fotky a příspěvky z dovolené je bezpečnější sdílet až po návratu domů." } },
        { "@type": "Question", "name": "Mám odpojit všechny spotřebiče ze zásuvky?", "acceptedAnswer": { "@type": "Answer", "text": "Ideálně odpoj nebo vypni vypínačem na prodlužovacím kabelu spotřebiče, které nemusí běžet – televizi, počítač, nabíječky, kávovar i další zařízení ve standby režimu. Ušetříš tím energii a snížíš riziko požáru způsobeného elektrickou závadou." } },
        { "@type": "Question", "name": "Jak zajistit, aby dům nepůsobil prázdně?", "acceptedAnswer": { "@type": "Answer", "text": "Pomůže časovač na světla, který je v určitých hodinách rozsvítí a zhasne, požádání důvěryhodného sousedu, aby čas od času zkontroloval dům a vybral poštu, a celkově diskrétní přístup k informování o délce nepřítomnosti." } },
        { "@type": "Question", "name": "Co s rostlinami a poštou během delší nepřítomnosti?", "acceptedAnswer": { "@type": "Answer", "text": "O zalévání rostlin popros sousedy, rodinu nebo použij samozavlažovací systém se zásobníkem vody. Přeplněná poštovní schránka je jasným signálem prázdného domu, proto si poštu nech přesměrovat, vyzvedávat sousedem nebo dočasně zastavit doručování." } },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou#howto",
      "name": "Jak připravit dům na dovolenou – bezpečnost a úspora energie",
      "description": "Voda, topení, spotřebiče i zabezpečení domu – kompletní checklist, jak připravit dům na delší odjezd bez rizika škody nebo vykradení.",
      "step": [
        { "@type": "HowToStep", "name": "Uzavření přívodu vody", "text": "Před odjezdem uzavři hlavní přívod vody, aby případná netěsnost rozvodu nezpůsobila škodu během tvé nepřítomnosti." },
        { "@type": "HowToStep", "name": "Nastavení topení", "text": "Topení nastav do útlumového režimu, v zimě ho nikdy úplně nevypínej, aby nedošlo k zamrznutí potrubí." },
        { "@type": "HowToStep", "name": "Odpojení spotřebičů", "text": "Spotřebiče, které nemusí běžet, vypni a odpoj ze zásuvky, omezíš tím spotřebu energie i riziko požáru." },
        { "@type": "HowToStep", "name": "Zabezpečení domu", "text": "Zkontroluj zamčení oken a dveří, nastav časovač na světla a domluv se sousedem na kontrole domu." },
        { "@type": "HowToStep", "name": "Diskrétnost ohledně odjezdu", "text": "Nezveřejňuj informace o délce nepřítomnosti na sociálních sítích a sdílej fotky z dovolené až po návratu." },
        { "@type": "HowToStep", "name": "Zajištění rostlin a pošty", "text": "Popros o zalévání rostlin a vyzvedávání pošty, případně si doručování pošty na dobu nepřítomnosti zastav." },
      ],
    },
  ],
};

const RELATED = [
  { title: "Jak připravit dům na zimu", href: "/blog/priprava-domu-na-zimu", read: "6 min" },
  { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", read: "6 min" },
  { title: "Kontrola hasicích přístrojů a detektorů kouře", href: "/blog/kontrola-hasicich-pristroju-a-detektoru-koure", read: "5 min" },
  { title: "Jak připravit garáž na zimu", href: "/blog/jak-pripravit-garaz-na-zimu", read: "5 min" },
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
              <span>Jak připravit dům na dovolenou – bezpečnost a úspora energie</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit dům na dovolenou – bezpečnost a úspora energie</h1>
              <p className="article-lead">Než zamkneš dveře a vyrazíš na dovolenou, stojí za to věnovat domu posledních dvacet minut. Pár jednoduchých kroků tě ochrání před vytopeným bytem, vysokým vyúčtováním energie i nezvanou návštěvou, zatímco budeš odpočívat někde úplně jinde.</p>
              <div className="article-meta-row">
                <span>Aktualizováno: 22. června 2026</span><span>·</span><span>DomovniGuru</span>
              </div>
              <ShareButtons url="https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou" title="Jak připravit dům na dovolenou – bezpečnost a úspora energie" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#voda">Uzavření přívodu vody</a></li>
                <li><a href="#topeni">Topení a teplota v domě</a></li>
                <li><a href="#spotrebice">Odpojení spotřebičů</a></li>
                <li><a href="#zabezpeceni">Zabezpečení domu</a></li>
                <li><a href="#socialni">Sociální sítě a diskrétnost</a></li>
                <li><a href="#rostliny">Rostliny, pošta a okolí domu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="voda">
              <h2>Uzavření hlavního přívodu vody</h2>
              <p>Voda unikající z prasklé hadičky nebo netěsného ventilu patří mezi nejčastější příčiny velkých škod v domácnosti právě během delší nepřítomnosti, kdy si problému nikdo nevšimne včas.</p>
              <h3>Proč přívod vody uzavřít</h3>
              <p>Pokud za tvé nepřítomnosti praskne přívodní hadička u pračky, myčky nebo vodovodní baterie, voda může týdny nekontrolovaně unikat a způsobit škodu na podlahách, stěnách i u sousedů níže. Uzavřením hlavního přívodu vody tomuto riziku prakticky úplně předejdeš.</p>
              <h3>Jak hlavní přívod najít a uzavřít</h3>
              <p>Hlavní uzávěr vody bývá obvykle u vodoměru, ve sklepě, v technické místnosti nebo u vstupu vodovodní přípojky do domu. Před odjezdem ho uzavři a zkontroluj, že se po uzavření už nikde neobjevuje kapající voda z otevřeného kohoutku.</p>
              <h3>Co s bojlerem a pojistným ventilem</h3>
              <p>Pokud máš doma bojler napojený na hlavní rozvod, ujisti se, že je vypnutý nebo přepnutý do úsporného režimu ještě před uzavřením vody, aby nedošlo k jeho přehřátí bez možnosti doplnění vody.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš doma chytré senzory úniku vody, aktivuj je před odjezdem a zkontroluj, že jsou propojené s upozorněním do mobilu – odhalí únik i v okamžiku, kdy je hlavní přívod stále otevřený.</div>
            </section>

            <section id="topeni">
              <h2>Topení a teplota v domě</h2>
              <p>Nastavení topení před odjezdem se liší podle roční doby a délky nepřítomnosti, ale jedna zásada platí vždy.</p>
              <h3>Proč topení v zimě nevypínat úplně</h3>
              <p>I při krátké nepřítomnosti v chladném období topení nikdy úplně nevypínej. Pokud teplota v domě klesne pod bod mrazu, voda v potrubí může zamrznout a při roztátí potrubí praskne – škoda je pak srovnatelná nebo horší než ta z neuzavřeného přívodu vody.</p>
              <h3>Doporučené nastavení</h3>
              <p>V zimních měsících nastav topení do útlumového režimu na přibližně 12 až 15 °C. Tato teplota udrží dům v bezpečí před zamrznutím rozvodů a zároveň výrazně ušetří energii oproti běžnému provozu na komfortní teplotu.</p>
              <h3>Letní měsíce</h3>
              <p>V létě topení samozřejmě nehraje roli, ale vyplatí se zkontrolovat funkci termostatu a případně ho přepnout do režimu nepřítomnosti, pokud ho má systém k dispozici, aby se zbytečně nezapínalo žádné vytápění ani přidružené čerpadlo.</p>
            </section>

            <section id="spotrebice">
              <h2>Odpojení spotřebičů ve standby režimu</h2>
              <p>Spotřebiče zapojené v zásuvce spotřebovávají energii i ve vypnutém stavu, pokud zůstávají v pohotovostním režimu.</p>
              <h3>Co odpojit</h3>
              <ul>
                <li><strong>Televize a set-top boxy</strong> – ve standby běží hodiny a spotřebovávají energii zbytečně</li>
                <li><strong>Počítače a nabíječky</strong> – nabíječky odebírají malé množství energie i bez připojeného zařízení</li>
                <li><strong>Kávovar, toustovač a další drobné spotřebiče v kuchyni</strong> – navíc snižují riziko požáru způsobeného elektrickou závadou</li>
                <li><strong>Pračka a myčka</strong> – odpojení snižuje riziko poškození elektroniky při výpadku proudu nebo přepětí</li>
              </ul>
              <h3>Co naopak nechat běžet</h3>
              <p>Lednici a mrazák samozřejmě nech v provozu, jen zkontroluj, že jsou dveře dobře zavřené a uvnitř nejsou potraviny, které by se za delší dobu zkazily. Pokud máš doma zabezpečovací systém nebo router pro vzdálený přístup ke kamerám, tato zařízení také nechej zapojená.</p>
            </section>

            <section id="zabezpeceni">
              <h2>Zabezpečení domu</h2>
              <p>Prázdný dům je lákavým cílem, ale několik jednoduchých opatření výrazně sníží riziko vykradení.</p>
              <h3>Kontrola oken a dveří</h3>
              <p>Před odjezdem zkontroluj, že jsou všechna okna, balkonové dveře i vedlejší vchody řádně zamčené, včetně oken ve sklepě a na půdě, na která se často zapomíná. Nezamčené okno je jedním z nejčastějších způsobů vniknutí do domu.</p>
              <h3>Iluze přítomnosti</h3>
              <p>Časovač na světla, který v určitých hodinách rozsvítí a zhasne, vytváří dojem, že je v domě někdo přítomný. Podobně může pomoct rádio nastavené na časovač nebo zapojená zahradní automatika, pokud ji běžně používáš.</p>
              <h3>Informování důvěryhodných sousedů</h3>
              <p>Požádej sousedy nebo rodinu, aby čas od času na dům dohlédli, vybrali poštu a v případě potřeby tě kontaktovali. Důvěryhodný kontakt v okolí je často účinnější ochranou než jakákoliv technika.</p>
            </section>

            <section id="socialni">
              <h2>Sociální sítě a diskrétnost</h2>
              <p>V éře sociálních sítí je snadné nechtěně prozradit, že je dům prázdný.</p>
              <h3>Proč nesdílet odjezd předem</h3>
              <p>Příspěvek o tom, že odjíždíš na dva týdny k moři, je veřejnou informací o tom, že tvůj dům bude po stejnou dobu prázdný. I při omezeném okruhu sledujících se taková informace může snadno dostat dál, než zamýšlíš.</p>
              <h3>Kdy fotky sdílet</h3>
              <p>Fotky a zážitky z dovolené je bezpečnější publikovat až po návratu domů. Pokud chceš sdílet v reálném čase, omez viditelnost příspěvků jen na okruh lidí, kterým skutečně důvěřuješ.</p>
            </section>

            <section id="rostliny">
              <h2>Rostliny, pošta a okolí domu</h2>
              <p>Drobnosti, které prozradí delší nepřítomnost, dokážou na první pohled odradit i přilákat nevítanou pozornost.</p>
              <h3>Péče o rostliny</h3>
              <p>O zalévání pokojových i venkovních rostlin popros sousedy nebo rodinu, případně použij samozavlažovací kapátka nebo nádoby s zásobníkem vody, které vydrží zalévat rostliny i několik týdnů bez zásahu.</p>
              <h3>Přeplněná schránka jako varovný signál</h3>
              <p>Přetékající poštovní schránka je jedním z nejviditelnějších znaků, že je dům delší dobu prázdný. Poštu si nech vyzvedávat sousedem, případně u České pošty dočasně zastav doručování nebo si ho přesměruj.</p>
              <h3>Úprava okolí domu</h3>
              <p>Pokud jedeš na delší dobu v období růstu trávy, popros někoho o pokosení zahrady – nevzhledně zarostlý pozemek je dalším signálem nepřítomnosti majitelů.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Mám před dovolenou zavřít hlavní přívod vody?", a: "Ano, u delších odjezdů je to jedno z nejdůležitějších opatření. Uzavřením hlavního přívodu vody zabráníš velké škodě v případě, že by za tvé nepřítomnosti praskla hadička u pračky, prosakoval ventil nebo došlo k jiné netěsnosti rozvodu." },
                  { q: "Mám v zimě úplně vypnout topení, když jedu na dovolenou?", a: "Ne, v zimních měsících topení úplně nevypínej. Stačí ho přepnout do útlumového nebo úsporného režimu kolem 12 až 15 °C, aby se v domě nezačaly tvořit podmínky pro zamrznutí vody v potrubí a vznik vlhkosti a plísní." },
                  { q: "Je dobré sdílet na sociálních sítích, že jedeme na dovolenou?", a: "Není to vhodné, zejména pokud máš veřejný profil. Informace o tom, že je dům prázdný a na jak dlouho, se snadno dostane k nepovolaným lidem. Fotky a příspěvky z dovolené je bezpečnější sdílet až po návratu domů." },
                  { q: "Mám odpojit všechny spotřebiče ze zásuvky?", a: "Ideálně odpoj nebo vypni vypínačem na prodlužovacím kabelu spotřebiče, které nemusí běžet – televizi, počítač, nabíječky, kávovar i další zařízení ve standby režimu. Ušetříš tím energii a snížíš riziko požáru způsobeného elektrickou závadou." },
                  { q: "Jak zajistit, aby dům nepůsobil prázdně?", a: "Pomůže časovač na světla, který je v určitých hodinách rozsvítí a zhasne, požádání důvěryhodného sousedu, aby čas od času zkontroloval dům a vybral poštu, a celkově diskrétní přístup k informování o délce nepřítomnosti." },
                  { q: "Co s rostlinami a poštou během delší nepřítomnosti?", a: "O zalévání rostlin popros sousedy, rodinu nebo použij samozavlažovací systém se zásobníkem vody. Přeplněná poštovní schránka je jasným signálem prázdného domu, proto si poštu nech přesměrovat, vyzvedávat sousedem nebo dočasně zastavit doručování." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-summary">{q}<span className="faq-icon">▾</span></summary>
                    <div className="faq-body">{a}</div>
                  </details>
                ))}
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/priprava-domu-na-dovolenou" title="Jak připravit dům na dovolenou – bezpečnost a úspora energie" />

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
                <li><a href="#voda">Uzavření přívodu vody</a></li>
                <li><a href="#topeni">Topení a teplota</a></li>
                <li><a href="#spotrebice">Odpojení spotřebičů</a></li>
                <li><a href="#zabezpeceni">Zabezpečení domu</a></li>
                <li><a href="#socialni">Sociální sítě</a></li>
                <li><a href="#rostliny">Rostliny a pošta</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>Více článků →</span></Link>
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
