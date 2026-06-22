import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak opravit trhlinu ve zdi – kdy je nebezpečná a jak ji zazdít",
  description: "Trhlina ve zdi – kosmetická vada nebo vážný problém? Naučte se rozeznat nebezpečné trhliny od povrchových a opravit je správnou technikou a materiálem.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/jak-opravit-trhlinu-ve-zdi" },
  openGraph: { title: "Jak opravit trhlinu ve zdi – kdy je nebezpečná a jak ji zazdít", description: "Trhlina ve zdi – kosmetická vada nebo vážný problém? Naučte se rozeznat nebezpečné trhliny od povrchových a opravit je správnou technikou a materiálem.", url: "https://www.domovniguru.cz/blog/jak-opravit-trhlinu-ve-zdi", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-04T08:00:00Z", modifiedTime: "2026-06-04T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20opravit%20trhlinu%20ve%20zdi%20%E2%80%93%20kdy%20je%20nebezpe%C4%8Dn%C3%A1&cat=blog", width: 1200, height: 630, alt: "Jak opravit trhlinu ve zdi – kdy je nebezpečná a jak ji zazdít" }] },
  twitter: { card: "summary_large_image", title: "Jak opravit trhlinu ve zdi – kdy je nebezpečná", description: "Trhlina ve zdi – kosmetická vada nebo vážný problém? Správná diagnostika a oprava krok za krokem." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/jak-opravit-trhlinu-ve-zdi#article",
    "headline": "Jak opravit trhlinu ve zdi – kdy je nebezpečná a jak ji zazdít",
    "datePublished": "2026-06-04T08:00:00Z",
    "dateModified": "2026-06-04T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "inLanguage": "cs",
    "keywords": ["jak opravit trhlinu ve zdi", "trhlina ve zdi", "zazdění trhliny", "nebezpečná trhlina", "trhlinová páska", "tmel na trhliny", "oprava praskliny ve zdi"]
  }]
};

const RELATED = [
  { title: "Jak malovat zeď – postup a tipy pro dokonalý výsledek", href: "/blog/jak-malovat-zed", read: "8 min" },
  { title: "Penetrace před malováním – proč a jak ji nanést", href: "/blog/penetrace-pred-malovanim", read: "6 min" },
  { title: "Jak opravit škrábance a díry ve zdi", href: "/blog/opravit-skrabance-diry-ve-zdi", read: "7 min" },
  { title: "Jak se zbavit plísně na zdi", href: "/blog/jak-odstranit-plisen-na-zdi", read: "12 min" },
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
              <Link href="/blog/kategorie/stehovani">Rekonstrukce</Link><span className="breadcrumb-sep">/</span>
              <span>Oprava trhliny ve zdi</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/stehovani" className="article-cat-pill">🏗️ Rekonstrukce</Link>
                <span className="article-read-time">⏱ 10 min čtení</span>
              </div>
              <h1 className="article-h1">Jak opravit trhlinu ve zdi – kdy je nebezpečná a jak ji zazdít</h1>
              <p className="article-lead">Trhlina ve zdi dokáže vyvolat paniku – ale ne každá prasklina znamená problém. Klíčem je správná diagnostika: odlišit kosmetickou vadu od strukturálního poškození a pak zvolit odpovídající materiál i postup opravy. Tento průvodce vás provede od rozpoznání typu trhliny až po finální přebroušení a malování.</p>
              <div className="article-meta-row"><span>Publikováno: 4. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/jak-opravit-trhlinu-ve-zdi" title="Jak opravit trhlinu ve zdi – kdy je nebezpečná a jak ji zazdít" />
            </header>

            <div className="hero-illustration" aria-hidden="true">
              <svg viewBox="0 0 760 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <rect width="760" height="185" fill="#f5f0eb"/>

                <text x="380" y="22" textAnchor="middle" fontSize="10" fill="#5a4a3a" fontWeight="700" letterSpacing="0.04em">TYPY TRHLIN VE ZDI – VIZUÁLNÍ PRŮVODCE</text>

                {/* Vlasová trhlina */}
                <g transform="translate(20, 32)">
                  <rect x="0" y="0" width="163" height="138" rx="8" fill="#fff" stroke="#6aaa6a" strokeWidth="1.2"/>
                  <rect x="0" y="0" width="163" height="34" rx="8" fill="#6aaa6a" opacity="0.12"/>
                  <text x="81" y="15" textAnchor="middle" fontSize="9" fill="#3a7a3a" fontWeight="700" letterSpacing="0.04em">VLASOVÁ TRHLINA</text>
                  <text x="81" y="27" textAnchor="middle" fontSize="8" fill="#3a7a3a">šířka &lt; 0,2 mm</text>
                  {/* Hairline crack visual */}
                  <rect x="55" y="44" width="53" height="72" rx="4" fill="#ede8e0"/>
                  <line x1="81" y1="48" x2="81" y2="112" stroke="#aaa" strokeWidth="0.5" strokeDasharray="2,1"/>
                  <text x="81" y="126" textAnchor="middle" fontSize="8" fill="#5a5a5a">Pouze omítka</text>
                  <rect x="6" y="118" width="151" height="16" rx="4" fill="#6aaa6a" opacity="0.15"/>
                  <text x="81" y="129" textAnchor="middle" fontSize="8" fill="#3a7a3a" fontWeight="600">Závažnost: NÍZKÁ</text>
                </g>

                {/* Diagonální trhlina */}
                <g transform="translate(203, 32)">
                  <rect x="0" y="0" width="163" height="138" rx="8" fill="#fff" stroke="#e0a020" strokeWidth="1.2"/>
                  <rect x="0" y="0" width="163" height="34" rx="8" fill="#e0a020" opacity="0.12"/>
                  <text x="81" y="15" textAnchor="middle" fontSize="9" fill="#a06010" fontWeight="700" letterSpacing="0.04em">DIAGONÁLNÍ TRHLINA</text>
                  <text x="81" y="27" textAnchor="middle" fontSize="8" fill="#a06010">šířka 0,2–5 mm, šikmá</text>
                  {/* Diagonal crack visual */}
                  <rect x="55" y="44" width="53" height="72" rx="4" fill="#ede8e0"/>
                  <line x1="62" y1="50" x2="102" y2="110" stroke="#c07020" strokeWidth="1.5"/>
                  <text x="81" y="126" textAnchor="middle" fontSize="8" fill="#5a5a5a">U rohů otvorů</text>
                  <rect x="6" y="118" width="151" height="16" rx="4" fill="#e0a020" opacity="0.15"/>
                  <text x="81" y="129" textAnchor="middle" fontSize="8" fill="#a06010" fontWeight="600">Závažnost: STŘEDNÍ</text>
                </g>

                {/* Svislá trhlina */}
                <g transform="translate(386, 32)">
                  <rect x="0" y="0" width="163" height="138" rx="8" fill="#fff" stroke="#e07040" strokeWidth="1.2"/>
                  <rect x="0" y="0" width="163" height="34" rx="8" fill="#e07040" opacity="0.12"/>
                  <text x="81" y="15" textAnchor="middle" fontSize="9" fill="#a03010" fontWeight="700" letterSpacing="0.04em">SVISLÁ TRHLINA</text>
                  <text x="81" y="27" textAnchor="middle" fontSize="8" fill="#a03010">šířka &gt; 2 mm, svislá</text>
                  {/* Vertical crack visual */}
                  <rect x="55" y="44" width="53" height="72" rx="4" fill="#ede8e0"/>
                  <line x1="81" y1="48" x2="81" y2="112" stroke="#e07040" strokeWidth="2"/>
                  <text x="81" y="126" textAnchor="middle" fontSize="8" fill="#5a5a5a">Sedání základů</text>
                  <rect x="6" y="118" width="151" height="16" rx="4" fill="#e07040" opacity="0.15"/>
                  <text x="81" y="129" textAnchor="middle" fontSize="8" fill="#a03010" fontWeight="600">Závažnost: VYSOKÁ</text>
                </g>

                {/* Horizontální trhlina */}
                <g transform="translate(569, 32)">
                  <rect x="0" y="0" width="163" height="138" rx="8" fill="#fff" stroke="#cc2020" strokeWidth="1.8"/>
                  <rect x="0" y="0" width="163" height="34" rx="8" fill="#cc2020" opacity="0.12"/>
                  <text x="81" y="15" textAnchor="middle" fontSize="9" fill="#8a0000" fontWeight="700" letterSpacing="0.04em">HORIZONTÁLNÍ TRHLINA</text>
                  <text x="81" y="27" textAnchor="middle" fontSize="8" fill="#8a0000">v nosné zdi / suterénu</text>
                  {/* Horizontal crack visual */}
                  <rect x="55" y="44" width="53" height="72" rx="4" fill="#ede8e0"/>
                  <line x1="57" y1="80" x2="106" y2="80" stroke="#cc2020" strokeWidth="2.5"/>
                  <text x="81" y="126" textAnchor="middle" fontSize="8" fill="#5a5a5a">Tlak zeminy / statika</text>
                  <rect x="6" y="118" width="151" height="16" rx="4" fill="#cc2020" opacity="0.15"/>
                  <text x="81" y="129" textAnchor="middle" fontSize="8" fill="#8a0000" fontWeight="600">Závažnost: KRITICKÁ</text>
                </g>

                <rect y="168" width="760" height="17" fill="#e8e0d4" opacity="0.6"/>
                <text x="380" y="180" textAnchor="middle" fontSize="8" fill="#5a4a3a" fontWeight="600" letterSpacing="0.06em">⚠ AKTIVNÍ TRHLINY (STÁLE SE ROZRŮSTAJÍCÍ) VŽDY KONZULTUJTE SE STATIKEM PŘED OPRAVOU</text>
              </svg>
            </div>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#typy">Typy trhlin – kdy je trhlina nebezpečná</a></li>
                <li><a href="#priciny">Příčiny vzniku trhlin</a></li>
                <li><a href="#material">Jaký materiál použít</a></li>
                <li><a href="#postup">Postup opravy krok za krokem</a></li>
                <li><a href="#po-oprave">Po opravě – malování a prevence</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="typy">
              <h2>Typy trhlin – kdy je trhlina nebezpečná</h2>
              <p>První otázka, kterou si při pohledu na trhlinu musíte položit, není „jak ji opravit", ale „je vůbec nebezpečná?" Naprostá většina trhlin v bytových zdech jsou povrchové kosmetické vady – avšak přibližně 5–10 % signalizuje vážnější problém, který vyžaduje pozornost statika.</p>
              <ul>
                <li><strong>Vlasové trhliny (do 0,2 mm):</strong> Nejčastější typ. Vznikají přirozeným pohybem omítky, vysycháním sádry nebo mírnou tepelnou roztažností. Jdou pouze přes omítkovou vrstvu, nikoli přes zdivo. Jsou čistě estetickým problémem a snadno se opravují běžným tmelem.</li>
                <li><strong>Povrchové trhliny (0,2–1 mm):</strong> Širší praskliny v omítce nebo sádrokartonových deskách. Obvykle stále kosmetické, ale je třeba zkontrolovat, zda nesouvisejí s vlhkostí nebo vadnou penetrací. Opravují se flexibilním akrylátem nebo výztužnou síťovinou s tmelem.</li>
                <li><strong>Diagonální trhliny u rohů otvorů:</strong> Šikmé trhliny vycházející z rohů okna nebo dveří ve tvaru „ptačí nožky" jsou velmi časté. Mohou znamenat nadměrné zatížení překladu nebo drobné sedání. Trhliny do 2 mm šíře jsou zpravidla stabilní a opravitelné. Nad 2 mm nebo při rychlém rozrůstání volejte statika.</li>
                <li><strong>Svislé trhliny procházející celou tloušťkou zdi:</strong> Trhlina, která prochází skrz zeď, nebo která je viditelná z obou stran, je vždy vážná. Může signalizovat sedání základů, bodové přetížení stropní konstrukce nebo pohyb celé části budovy.</li>
                <li><strong>Horizontální trhliny v suterénu nebo nosných zdech:</strong> Nejnebezpečnější typ. Horizontální trhlina v nosné zdi nebo suterénní stěně může znamenat boční tlak zeminy nebo selhávání statiky. Bez posouzení statikem neopravujte – oprava trhliny by problém zamaskovala, ale neřešila.</li>
                <li><strong>Aktivní vs. pasivní trhliny:</strong> Aktivní trhlina se stále rozrůstá – to poznáte nalepením sádrového terčíku přes trhlinu a sledováním po 4–8 týdnech. Pokud se terčík přetrhne, trhlina je aktivní. Pasivní trhliny jsou stabilizované a vhodné k přímé opravě.</li>
              </ul>
              <div className="article-tip"><strong>⚠ Kdy volat statika:</strong> Pokud je trhlina širší než 5 mm, prochází skrz celou zeď, je horizontální v nosném prvku, nebo se rozrůstá – vždy nejdříve kontaktujte statika. Oprava trhliny bez diagnostiky příčiny problém nevyřeší a může ho i zamaskovat.</div>
            </section>

            <section id="priciny">
              <h2>Příčiny vzniku trhlin</h2>
              <p>Znát příčinu trhliny je stejně důležité jako znát její typ. Oprava bez odstranění příčiny znamená, že trhlina se za rok nebo dva vrátí.</p>
              <ul>
                <li><strong>Přirozené sedání nové stavby:</strong> Každá nová budova první 2–5 let „sedá" – základ a zdivo se postupně usazují do podloží. Přirozené sedání způsobuje vlasové až mírné trhliny, zejména v rozích místností a u okenních otvorů. Tento jev je normální a trhliny jsou obvykle stabilní.</li>
                <li><strong>Tepelná roztažnost:</strong> Zdivo, omítka a beton se s teplotou roztahují a smršťují. U venkovních stěn a stropů jsou teplotní pohyby výraznější. Trhliny od tepelné roztažnosti jsou typicky pravidelné, rovnoběžné s hranami konstrukce a stabilní.</li>
                <li><strong>Vlhkost a zmrazové cykly:</strong> Voda, která pronikne do zdiva nebo omítky, při zmrznutí zvětšuje objem a doslova rozráží materiál. Trhliny od vlhkosti jsou typicky doprovázeny výkvěty (bílé usazeniny), plísní nebo viditelnou vlhkostní mapou. Bez vyřešení vlhkosti je oprava trhliny zbytečná.</li>
                <li><strong>Vadný podklad nebo špatná příprava:</strong> Omítka nanesená na znečistěný, mastný nebo příliš hladký podklad bez penetrace se špatně přilne a postupně se odlupuje a praská. Stejný efekt má příliš rychlé schnutí omítky na horkém slunci nebo průvanu.</li>
                <li><strong>Smršťování čerstvé omítky nebo stěrky:</strong> Sádrové omítky a cementové stěrky se při schnutí smršťují. Příliš tlustá vrstva nanesená najednou nebo schnutí v nevhodných podmínkách (horko, průvan) způsobuje sítě drobných trhlin na povrchu – tzv. krakelování.</li>
                <li><strong>Statické problémy a přetížení:</strong> Přidání těžkého podlaží, odstranění nosné příčky bez náhradního překladu, nebo poddolování okolního terénu může způsobit trhliny. Tyto trhliny jsou zpravidla výraznější, aktivní a vyžadují odborné posouzení.</li>
              </ul>
            </section>

            <section id="material">
              <h2>Jaký materiál použít</h2>
              <p>Správná volba materiálu je klíčová – každý typ trhliny vyžaduje jiný přístup. Použití nevhodného materiálu (například tuhé sádry na aktivní trhlinu) zaručuje, že se trhlina vrátí.</p>
              <ul>
                <li><strong>Sádrový tmel (pro vlasové trhliny do 1 mm):</strong> Klasický hotový tmel nebo sádrová stěrka jsou ideální pro drobné povrchové trhliny v interiéru. Nanášejí se špachtlí, rychle schnou (1–4 hodiny) a snadno se brousí. Jsou však tuhé – nevhodné pro trhliny, kde je pohyb materiálu. Cena: 100–300 Kč za 5 kg.</li>
                <li><strong>Flexibilní akrylátový tmel (pro trhliny 1–3 mm):</strong> Akrylát zůstává pružný i po zaschnutí, toleruje malé pohyby podkladu a přelakuje se barvou na zeď. Je ideální pro trhliny ve spárách, u ostění oken, nebo tam, kde hrozí opakování pohybu. Nanáší se pistolí nebo špachtlí. Cena: 80–200 Kč za kartuši.</li>
                <li><strong>Výztužná síťovina + stěrka (pro trhliny 2–5 mm):</strong> Pro výraznější trhliny je nejspolehlivějším řešením síťovina (tkanina ze skleněných vláken, mesh tape) vložená do vrstvy flexibilní stěrky. Síťovina přemostí trhlinu a zabrání jejímu opětovnému otevření. Stěrka se nanáší ve dvou vrstvách. Cena sítě: 50–150 Kč/m; stěrka: 200–500 Kč za kbelík.</li>
                <li><strong>Epoxidová pryskyřice nebo speciální injektáž (pro strukturální trhliny):</strong> Hluboké trhliny procházející nosným zdivem lze injektovat nízkoviskózní epoxidovou pryskyřicí nebo cementovým injektážním materiálem. Tuto metodu zpravidla provádějí odborné firmy. Cena: od 500 Kč/běžný metr trhliny.</li>
                <li><strong>Cementová zálivka nebo malta (pro trhliny v betonu):</strong> Trhliny v betonových prvcích (překlady, ŽB sloupy) se opravují speciální cementovou zálivkovou maltou nebo polymercementovou stěrkou. Prostý sádrový tmel na beton nedrží.</li>
              </ul>
              <div className="article-tip"><strong>💡 Pravidlo šířky:</strong> Do 1 mm = sádrový tmel. 1–3 mm = flexibilní akrylát. 3–5 mm = síťovina + stěrka. Nad 5 mm = konzultujte odborníka a zvažte injektáž nebo zednické vyplnění maltou.</div>
            </section>

            <section id="postup">
              <h2>Postup opravy krok za krokem</h2>
              <p>Správná příprava tvoří 80 % úspěchu opravy. Spěšné přetmelení trhliny bez přípravy podkladu je nejčastější chybou, která vede k opakování problému.</p>
              <ul>
                <li><strong>Krok 1 – Otevření trhliny:</strong> Seškrábněte nebo frézou rozšiřte trhlinu do tvaru písmene „V" (šířka a hloubka alespoň 3–5 mm). Tato zdánlivě kontraintuitivní operace je klíčová – dává tmelu dostatečný objem materiálu pro pevné uchycení a brání povrchovému odloupnutí. Úzká trhlina těsně přetmelená nemá dostatečnou mechanickou pevnost. Na rozšíření trhliny použijte úhlový brusku s diamantovým kotoučem nebo ruční frézku; pro menší práce postačí šroubovák nebo dlátko.</li>
                <li><strong>Krok 2 – Vyčištění a zbavení prachu:</strong> Vysajte veškerý prach a drobný materiál z trhliny. Pak trhlinu přejděte štětcem namočeným ve vodě nebo penetračním přípravkem. Suchý a zaprášený podklad výrazně snižuje přilnavost tmelu. Nechte podklad alespoň 15–30 minut oschnout (nebo dle pokynů výrobce penetrace).</li>
                <li><strong>Krok 3 – Penetrace:</strong> Pro větší opravy nebo na savých podkladech (hrubá omítka, pórobeton) naneste vrstvu hloubkové penetrace (např. Primalex Penetrace, Cemix Primer). Penetrace zpevní povrch a sjednotí savost podkladu. Bez penetrace na savém podkladu tmel rychle vyschne na povrchu, ale vnitřek zůstane nedotvrzen a oprava se odlupuje.</li>
                <li><strong>Krok 4 – Vyplnění tmelem nebo stěrkou:</strong> Naplňte trhlinu zvoleným materiálem. Tmel nebo akrylát nanášejte špachtlí přes trhlinu a přebytečný materiál stáhněte do roviny s povrchem stěny. Pro trhliny se síťovinou: nejprve naneste první vrstvu stěrky, vložte síťovinu (mírně přesahující oba okraje trhliny) a zatlačte ji do stěrky, pak naneste druhou vrstvu stěrky přes síťovinu. Celková tloušťka vrstvy by neměla přesáhnout 3–4 mm v jedné vrstvě; silnější opravy nanášejte ve více vrstvách.</li>
                <li><strong>Krok 5 – Schnutí:</strong> Dodržujte dobu schnutí udanou výrobcem. Sádrový tmel: 1–4 hodiny. Akrylát: 2–8 hodin. Stěrka s síťovinou: 12–24 hodin pro každou vrstvu. Nespěchejte – předčasné broušení nebo malování na nedoschnutý materiál je nejčastější příčinou špatného výsledku.</li>
                <li><strong>Krok 6 – Přebroušení:</strong> Po úplném zaschnutí přebruste opravenou plochu brusným papírem (zrnitost 80–120) do roviny s okolní omítkou. Pohybujte brusným papírem kruhovými pohyby a kontrolujte rovnost přikládáním pravítka. Odstraňte prach vlhkým hadříkem nebo vyfouknout stlačeným vzduchem.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip na velké plochy:</strong> Pokud opravujete více trhlin na jedné stěně, nebo trhlina prochází velkou plochou, zvažte přetmelení celé stěny tenkou vrstvou stěrky (tzv. celoplošná reprofilace). Výsledek bude rovnější a barva bude lépe krýt. Postup: penetrace → tenká stěrka přes celou plochu → schnutí → broušení → malování.</div>
            </section>

            <section id="po-oprave">
              <h2>Po opravě – malování a prevence opakování</h2>
              <p>Samotná oprava trhliny je jen první krok. Správné dokončení a prevence jsou stejně důležité pro trvalý výsledek.</p>
              <ul>
                <li><strong>Penetrace před malováním:</strong> Po broušení vždy naneste penetraci na opravenou plochu, ideálně na celou stěnu. Opravené místo je savější než okolní omítka – bez penetrace barva na opraveném místě vyschne jinak a bude viditelný rozdíl (tzv. matové skvrny). Penetrace sjednotí savost a zajistí rovnoměrný výsledek malování.</li>
                <li><strong>Výběr barvy:</strong> Pro stěny, kde hrozí opakování drobných pohybů (nové stavby, stropy pod nohou sousedů), použijte elastickou malířskou barvu. Elastické barvy (např. Primalex Polar Elastik, Cemix Elastik) obsahují pružné polymery, které překryjí drobné pohyby podkladu a zabrání opětnému praskání barvy.</li>
                <li><strong>Postup malování:</strong> Nechte penetraci úplně zaschnout (min. 2–4 hodiny, nebo dle výrobce), pak malujte ve dvou vrstvách. První vrstva zakryje opravené místo, druhá sjednotí celou plochu. Válečkem pracujte vždy ve stejném směru a ve svislých pruzích pro rovnoměrný výsledek.</li>
                <li><strong>Prevence opakování:</strong> Odstraňte příčinu trhliny, pokud ji znáte. Trhliny od vlhkosti: opravte zdroj vlhkosti (zatékání, kondenzace, vzlínání) ještě před opravou trhliny. Trhliny od sedání nové stavby: počkejte, až bude dům starší 2–3 roky a pohyby se stabilizují. Trhliny od tepelné roztažnosti: zvažte použití pružného akrylátového tmelu místo tuhé sádry v místech, kde k pohybům dochází opakovaně.</li>
                <li><strong>Sledování po opravě:</strong> Proveďte kontrolu po 6–12 měsících, zejména pokud šlo o trhlinu širší než 2 mm nebo diagonální trhlinu u otvoru. Pokud se trhlina znovu otevře (i pod novou barvou), znamená to, že příčina nebyla odstraněna nebo je trhlina stále aktivní. V takovém případě kontaktujte stavebního technika nebo statika.</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám, zda je trhlina nebezpečná?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nebezpečná trhlina je zpravidla: širší než 5 mm, prochází skrz celou tloušťku zdi, je horizontální v nosné zdi nebo suterénu, nebo je aktivní (stále se rozrůstá). Aktivitu trhliny ověříte nalepením sádrového terčíku nebo kusu papíru přes trhlinu – pokud se po 4–8 týdnech přetrhne, trhlina se pohybuje. Takové trhliny vždy konzultujte se statikem před opravou. Vlasové trhliny v omítce, drobné praskliny v rozích místností a trhliny u oken jsou naopak zcela běžné a bezpečné.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Musím trhlinu rozšiřovat před opravou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pro trhliny širší než přibližně 1 mm je rozšíření do tvaru „V" (pomocí brusky, frézky nebo dlátka) velmi doporučeno. Dává tmelu dostatečný objem pro pevné uchycení a brání povrchové odlupování opraveného místa. Vlasové trhliny do 0,5 mm je možné ošetřit bez rozšiřování – stačí trhlinu vyčistit, napenetrovat a přetmelit. Nicméně i v tomto případě mírné „otevření" trhliny špičkou nože zvýší přilnavost tmelu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký je rozdíl mezi aktivní a pasivní trhlinou?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pasivní (stabilizovaná) trhlina se dále nerozrůstá – pohyb, který ji způsobil, se zastavil. Tyto trhliny jsou vhodné k přímé opravě. Aktivní trhlina se stále rozrůstá, protože příčina přetrvává (pokračující sedání, vlhkost, pohyb základů). Opravu aktivní trhliny je třeba nejdříve konzultovat – pouhé přetmelení by problém zamasklo bez vyřešení příčiny. Aktivitu zjistíte sádrovou značkou, nebo nákupem jednoduchých trhlinových sond (ukazatelé pohybu, cena 50–200 Kč).</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mohu opravit trhlinu sám nebo potřebuji řemeslníka?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Vlasové trhliny, drobné praskliny v omítce a trhliny do 3 mm v interiéru zvládne každý šikovný domácí kutil s tmelem, brusným papírem a válečkem. Větší trhliny (3–5 mm) vyžadují síťovinu a vícevrstvou stěrku – postup je náročnější, ale stále proveditelný. Trhliny v nosných zdech, aktivní trhliny, horizontální trhliny nebo trhliny procházející skrz zeď jsou pro laika nevhodné – zavolejte stavebního technika nebo statika pro posouzení a doporučení postupu.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Proč se trhlina vrátila po opravě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastější příčiny opakování trhliny: (1) Příčina nebyla odstraněna – vlhkost, pohyb základů nebo tepelná roztažnost pokračují. (2) Byl použit nevhodný materiál – tuhá sádra v místě s pohybem podkladu (zde je třeba flexibilní akrylát nebo stěrka se síťovinou). (3) Podklad nebyl správně připraven – prach, mastný povrch nebo chybějící penetrace vedou k odloupnutí opravy. (4) Trhlina je aktivní a pohyb podkladu překonává pevnost tmelu. Vždy zjistěte příčinu trhliny a zvolte materiál odpovídající typu pohybu.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/jak-opravit-trhlinu-ve-zdi" title="Jak opravit trhlinu ve zdi – kdy je nebezpečná a jak ji zazdít" />

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Rekonstrukce</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#typy">Typy trhlin</a></li>
                <li><a href="#priciny">Příčiny vzniku</a></li>
                <li><a href="#material">Jaký materiál</a></li>
                <li><a href="#postup">Postup opravy</a></li>
                <li><a href="#po-oprave">Po opravě</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/stehovani" className="sidebar-cat-link">🏗️ Rekonstrukce<span>30 článků →</span></Link>
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
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
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
