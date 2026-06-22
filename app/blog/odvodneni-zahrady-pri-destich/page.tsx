import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu 2026",
  description: "Stojící voda na zahradě po dešti? Drenáž, vsakovací jímka, dešťová zahrada nebo úprava sklonu terénu – praktický průvodce řešením podle závažnosti problému.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich" },
  openGraph: { title: "Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu 2026", description: "Stojící voda po dešti? Drenáž, vsakovací jímka, dešťová zahrada nebo úprava sklonu terénu – řešení podle závažnosti.", url: "https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-17T08:00:00Z", modifiedTime: "2026-06-17T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Odvodn%C4%9Bn%C3%AD%20zahrady%20%E2%80%93%20jak%20%C5%99e%C5%A1it%20p%C5%99ebyte%C4%8Dnou%20de%C5%A1%C5%A5ovou%20vodu%202026&cat=blog", width: 1200, height: 630, alt: "Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu 2026" }] },
  twitter: { card: "summary_large_image", title: "Odvodnění zahrady 2026", description: "Stojící voda po dešti? Drenáž, vsakovací jímka, dešťová zahrada nebo úprava sklonu terénu." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Article",
    "@id": "https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich#article",
    "headline": "Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu 2026",
    "description": "Stojící voda na zahradě po dešti? Drenáž, vsakovací jímka, dešťová zahrada nebo úprava sklonu terénu – praktický průvodce řešením podle závažnosti problému.",
    "datePublished": "2026-06-17T08:00:00Z",
    "dateModified": "2026-06-17T08:00:00Z",
    "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich" },
    "inLanguage": "cs",
    "keywords": ["odvodnění zahrady", "drenáž zahrady", "stojící voda na zahradě", "vsakovací jímka", "dešťová zahrada", "jak odvodnit zahradu od domu"]
  }, {
    "@type": "FAQPage",
    "@id": "https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich#faq",
    "mainEntity": [
      { "@type": "Question", "name": "Jak poznám, že má zahrada problém s odvodněním?", "acceptedAnswer": { "@type": "Answer", "text": "Hlavní příznak je voda, která stojí na povrchu déle než 24 hodin po dešti. Dalšími signály jsou zápach z podmáčené půdy, žloutnoucí nebo hnijící trávník v sníženinách terénu a mech rozšiřující se v vlhkých místech." } },
      { "@type": "Question", "name": "Jaké jsou nejčastější příčiny stojící vody na zahradě?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastěji jde o jílovitou nepropustnou půdu, nevhodný sklon terénu směřující k domu nebo do sníženiny, a zhutněnou zeminu po stavbě domu, kterou stavební technika utlačila do podoby téměř nepropustné vrstvy." } },
      { "@type": "Question", "name": "Kdy stačí jen zlepšit propustnost půdy a kdy už je potřeba drenáž?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud voda mizí do 12–24 hodin a problém je jen v malé části zahrady, stačí přidat písek a kompost a půdu prokypřit. Pokud voda stojí i po několika dnech nebo se problém opakuje při každém dešti, je nutná drenáž nebo vsakovací jímka." } },
      { "@type": "Question", "name": "Potřebuju povolení na drenáž nebo vsakovací jímku?", "acceptedAnswer": { "@type": "Answer", "text": "Drenáž a vsakovací jímka na vlastním pozemku obvykle povolení nevyžadují. Povolení nebo souhlas stavebního úřadu je nutný při napojení na veřejnou dešťovou kanalizaci a u větších zemních prací v blízkosti hranice se sousedním pozemkem." } },
      { "@type": "Question", "name": "Jaký sklon terénu od domu je správný?", "acceptedAnswer": { "@type": "Answer", "text": "Doporučený minimální sklon terénu od základů domu je 2–3 %, tedy 2–3 cm na každý metr vzdálenosti od fasády. Tento spád zajistí, že dešťová voda steče od domu a nebude se hromadit u základů." } },
      { "@type": "Question", "name": "Co je dešťová zahrada a vyplatí se?", "acceptedAnswer": { "@type": "Answer", "text": "Dešťová zahrada je snížený záhon osázený vlhkomilnými rostlinami umístěný v nejnižším místě pozemku, kam se svádí dešťová voda. Funguje jako přirozená vsakovací plocha a zároveň jako estetický prvek zahrady – vyplatí se zejména tam, kde stojící voda vadí jen v jedné konkrétní oblasti." } }
    ]
  }, {
    "@type": "HowTo",
    "@id": "https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich#howto",
    "name": "Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu 2026",
    "description": "Stojící voda na zahradě po dešti? Drenáž, vsakovací jímka, dešťová zahrada nebo úprava sklonu terénu – praktický průvodce řešením podle závažnosti problému.",
    "step": [
      { "@type": "HowToStep", "name": "Rozpoznání problému s odvodněním", "text": "Stojící voda déle než 24 hodin po dešti, zápach z půdy a žloutnoucí trávník v sníženinách jsou jasné signály, že zahrada potřebuje řešit odvodnění." },
      { "@type": "HowToStep", "name": "Identifikace příčiny", "text": "Příčinou bývá jílovitá nepropustná půda, nevhodný sklon terénu směrem k domu nebo zhutněná zemina po stavbě." },
      { "@type": "HowToStep", "name": "Drenážní systém a vsakovací jímka", "text": "Perforované drenážní trubky obalené geotextilií se ukládají ve spádu a svádí vodu do vsakovací jímky se štěrkem nebo do dešťové kanalizace." },
      { "@type": "HowToStep", "name": "Zlepšení propustnosti půdy", "text": "Přidání písku a kompostu a hlubší kultivace zlepší propustnost půdy, je třeba se vyhnout dalšímu zhutnění těžkou technikou." },
      { "@type": "HowToStep", "name": "Dešťová zahrada jako řešení", "text": "Snížený záhon s vlhkomilnými rostlinami v nejnižším místě zahrady funguje jako estetické i funkční vsakovací řešení." },
      { "@type": "HowToStep", "name": "Odvedení vody od základů domu", "text": "Minimální sklon terénu od domu 2–3 % a okapový chodník zajistí, že voda neteče k základům." }
    ]
  }, {
    "@type": "BreadcrumbList",
    "@id": "https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
      { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" },
      { "@type": "ListItem", "position": 4, "name": "Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu", "item": "https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich" }
    ]
  }
  ]
};

const RELATED = [
  { title: "Jak připravit zahradu na jaro", href: "/blog/jarni-zahrada", read: "7 min" },
  { title: "Jak zavlažovat zahradu – ruční i automatická závlaha", href: "/blog/zavlaha-zahrada-postup", read: "6 min" },
  { title: "Jak pokládat betonové dlaždice", href: "/blog/pokladat-betonove-dlazdice", read: "6 min" },
  { title: "Jak navrhnout zahradu od základu", href: "/blog/jak-navrhnout-zahradu", read: "7 min" },
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
              <span>Odvodnění zahrady</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 7 min čtení</span>
              </div>
              <h1 className="article-h1">Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu</h1>
              <p className="article-lead">Stojící voda na zahradě není jen estetická vada – dlouhodobě poškozuje trávník, hnije kořeny rostlin a může ohrožovat základy domu. Tady je, jak problém poznat, najít příčinu a vybrat řešení, které sedí na míru tvé zahradě.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich" title="Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu 2026" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#priznaky">Jak poznat problém s odvodněním</a></li>
                <li><a href="#priciny">Příčiny stojící vody na zahradě</a></li>
                <li><a href="#reseni">Řešení podle závažnosti problému</a></li>
                <li><a href="#propustnost">Zlepšení propustnosti půdy</a></li>
                <li><a href="#destova-zahrada">Dešťová zahrada jako řešení</a></li>
                <li><a href="#zaklady">Jak odvést vodu od základů domu</a></li>
                <li><a href="#povoleni">Kdy je nutné povolení</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="priznaky">
              <h2>Jak poznat, že má zahrada problém s odvodněním</h2>
              <p>Některé zahrady mají s odvodem dešťové vody problém, který se naplno projeví až po několika letech – trávník začne mizet, rostliny chřadnou a v nejhorším případě voda ohrožuje i základy domu. Rozpoznat problém včas je jednoduché, pokud víš, na co se zaměřit.</p>
              <h3>Stojící voda déle než 24 hodin</h3>
              <p>Nejjasnějším signálem je voda, která na povrchu zahrady zůstává déle než jeden den po dešti. Zdravá propustná půda vsákne většinu vody do 6–12 hodin. Pokud louže přetrvávají den i déle, signalizuje to, že voda se nemá kam vsáknout nebo odtéct.</p>
              <h3>Zápach z půdy</h3>
              <p>Trvale podmáčená půda bez přístupu kyslíku začne anaerobně rozkládat organickou hmotu, což se projeví nepříjemným, často sirným zápachem. Pokud zahrada po dešti páchne, je to jasný důkaz, že voda v půdě stagnuje příliš dlouho.</p>
              <h3>Žloutnoucí trávník v sníženinách</h3>
              <p>Kořeny trávy a většiny rostlin potřebují ke správné funkci kyslík. Trvalé podmáčení ho z půdy vytlačí a kořeny se začnou dusit – projeví se to žloutnutím, prosychanim nebo úplným odumřením trávníku právě v místech, kam voda stéká a zůstává.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Problém ověříš jednoduchým testem – po dešti si všimni, kde se louže tvoří, a sleduj, kolik hodin tam voda vydrží. Pokud je to konzistentně nad 24 hodin na stejném místě, jde o systémový problém, ne náhodu.</div>
            </section>

            <section id="priciny">
              <h2>Příčiny stojící vody na zahradě</h2>
              <h3>Jílovitá nepropustná půda</h3>
              <p>Jílovité půdy mají velmi malé částice, které se k sobě těsně přimykají a vodě téměř neumožňují prosakovat do hloubky. Výsledkem je, že voda se hromadí na povrchu nebo v těsně podpovrchové vrstvě, místo aby odtékala do podloží.</p>
              <h3>Nevhodný sklon terénu</h3>
              <p>Pokud terén kolem domu nebo na zahradě klesá směrem k domu nebo do uzavřené sníženiny bez odtoku, veškerá dešťová voda se tam přirozeně stahuje. Tento problém je obvykle důsledkem špatně navrženého nebo provedeného terénního urovnání při výstavbě.</p>
              <h3>Zhutněná zemina po stavbě</h3>
              <p>Stavební technika – nákladní auta, jeřáby, míchačky – při výstavbě domu velmi často zhutní zeminu kolem stavby na téměř nepropustnou vrstvu. Tahle zhutněná zemina pak funguje podobně jako beton – voda se po ní spíš rozlévá, než aby do ní vsakovala.</p>
            </section>

            <section id="reseni">
              <h2>Řešení podle závažnosti problému</h2>
              <p>Volba řešení záleží na tom, jak velký a trvalý je problém. Od nejjednodušších zásahů po nejnákladnější:</p>
              <h3>Drenážní trubky</h3>
              <p>Perforované drenážní trubky obalené geotextilií jsou základním řešením pro plošný odvod přebytečné vody z půdy. Trubky se ukládají do výkopu ve spádu (minimálně 0,5 % směrem k vyústění) a vedou vodu do vsakovací jímky nebo do dešťové kanalizace. Geotextilie kolem trubky zabraňuje zanesení perforace zeminou, takže drenáž funguje dlouhodobě bez nutnosti čištění.</p>
              <h3>Vsakovací jímka / drenážní jáma</h3>
              <p>Vsakovací jímka je výkop naplněný hrubým štěrkem, kam se svádí voda z drenáže nebo přímo z povrchu. Štěrk vytváří dutiny, kam se voda dočasně akumuluje a postupně se vsakuje do okolní zeminy. Jímka by měla být umístěna minimálně 3–5 metrů od základů domu, aby nezvyšovala vlhkost u stavby.</p>
              <h3>Povrchové odvodňovací žlaby</h3>
              <p>U zpevněných ploch – teras, příjezdových cest, chodníků – je nejúčinnějším řešením povrchový odvodňovací žlab s mřížkou, umístěný v nejnižším místě plochy. Žlab zachytí vodu ještě dřív, než stačí natéct na trávník nebo do záhonů, a odvede ji do kanalizace nebo vsakovací jímky.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Drenáž a vsakovací jímku kombinuj – samotná drenáž bez místa, kam vodu odvést, problém jen přesune o pár metrů dál.</div>
            </section>

            <section id="propustnost">
              <h2>Zlepšení propustnosti půdy</h2>
              <p>Pokud problém s odvodněním není extrémní, často stačí zlepšit strukturu samotné půdy, aby lépe propouštěla vodu do hloubky.</p>
              <h3>Přidání písku a kompostu</h3>
              <p>Zapracování hrubého písku a zralého kompostu do vrchní vrstvy půdy (15–20 cm) rozruší jílovité částice a vytvoří prostor pro průnik vody. Doporučená dávka je přibližně 5–10 cm písku a kompostu na povrch, rozhrabaný a zapracovaný do původní zeminy.</p>
              <h3>Hlubší kultivace</h3>
              <p>Pravidelné prokypření půdy do hloubky 20–30 cm narušuje zhutněné vrstvy a obnovuje schopnost půdy propouštět vodu. U menších ploch postačí rycí vidle, u větších se vyplatí motorový kultivátor nebo půdní fréza.</p>
              <h3>Vyhnout se dalšímu zhutnění</h3>
              <p>Po zlepšení propustnosti je důležité na opravenou plochu nevjíždět těžkou technikou a omezit i opakovaný pohyb po mokré půdě. Zhutnění se vrátí rychle, pokud se na plochu znovu působí tlakem – ať jde o auto, kolečko se stavebním materiálem nebo jen častou chůzi po podmáčeném povrchu.</p>
            </section>

            <section id="destova-zahrada">
              <h2>Dešťová zahrada jako estetické i funkční řešení</h2>
              <p>Dešťová zahrada (rain garden) je snížený záhon umístěný v nejnižším místě pozemku, kam přirozeně stéká dešťová voda z okolních ploch. Místo aby voda jen stála a škodila, je nasměrována do připraveného prostoru osázeného rostlinami, které vlhko snášejí dobře, a samotná propustná struktura záhonu podporuje vsakování.</p>
              <h3>Jak dešťovou zahradu navrhnout</h3>
              <p>Snížení záhonu o 15–20 cm oproti okolnímu terénu vytvoří přirozenou jímku. Spodní vrstvu tvoří štěrk nebo hrubý písek pro rychlý odtok, na vrch se přidá kvalitní propustný substrát smíchaný s kompostem.</p>
              <h3>Vhodné rostliny</h3>
              <ul>
                <li><strong>Vrby (Salix)</strong> – nízké druhy snášejí periodické zamokření výborně</li>
                <li><strong>Kosatce (Iris)</strong> – okrasné a tolerantní k vlhku i krátkému zaplavení</li>
                <li><strong>Tužebník (Filipendula)</strong> – přirozeně roste na vlhkých loukách</li>
                <li><strong>Devětsil (Petasites)</strong> – velmi odolný, vhodný do větších ploch</li>
                <li><strong>Sítina (Juncus)</strong> – trávovitý vzhled, snáší trvalejší vlhko</li>
              </ul>
              <p>Výhodou dešťové zahrady je, že řeší problém přímo v místě, kde voda přirozeně končí, a zároveň z něj vytváří atraktivní prvek zahrady místo nevzhledné louže.</p>
            </section>

            <section id="zaklady">
              <h2>Jak nasměrovat vodu od základů domu</h2>
              <h3>Sklon terénu od domu</h3>
              <p>Terén v okolí domu by měl mít minimální sklon <strong>2–3 %</strong> směrem od fasády, tedy 2–3 cm poklesu na každý metr vzdálenosti. Tento spád stačí na to, aby dešťová voda stékala od základů a nezůstávala u nich stát, aniž by byl sklon nápadný nebo nepraktický pro pohyb po zahradě.</p>
              <h3>Okapový chodník</h3>
              <p>Okapový chodník – pruh zpevněné plochy nebo kačírku podél fasády, obvykle 40–60 cm široký – chrání základy před stříkající vodou z okapů a zároveň brání prorůstání rostlin přímo ke zdi. Pod chodníkem se často vede i samotná drenáž odvádějící vodu od základů.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud je terén u domu rovný nebo se naopak sklání k fasádě, jde o jednu z nejčastějších příčin vlhkosti ve sklepě nebo suterénu – úprava sklonu je často levnější a účinnější než dodatečná hydroizolace.</div>
            </section>

            <section id="povoleni">
              <h2>Kdy je nutné povolení nebo posouzení</h2>
              <p>Drobné úpravy odvodnění na vlastním pozemku – drenáž, vsakovací jímka, úprava sklonu terénu – obvykle žádné povolení nevyžadují. Pozor je ale třeba dát na následující situace:</p>
              <h3>Napojení na veřejnou kanalizaci</h3>
              <p>Pokud chceš dešťovou vodu odvést do veřejné dešťové nebo jednotné kanalizace, je nutné získat souhlas od jejího správce (obvykle vodárenská společnost nebo obec) a často i povolení stavebního úřadu. Bez povolení hrozí sankce a v případě problémů i povinnost napojení zrušit.</p>
              <h3>Větší zemní práce u sousedního pozemku</h3>
              <p>Rozsáhlejší výkopy, terénní úpravy nebo vsakovací jímky v blízkosti hranice se sousedním pozemkem mohou vyžadovat ohlášení stavebnímu úřadu, zejména pokud by mohly ovlivnit odtokové poměry na sousedním pozemku. Doporučuje se sousedy o plánovaných pracích informovat předem i bez formální povinnosti, aby se předešlo sporům.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Jak poznám, že má zahrada problém s odvodněním?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Hlavní příznak je voda, která stojí na povrchu déle než 24 hodin po dešti. Dalšími signály jsou zápach z podmáčené půdy, žloutnoucí nebo hnijící trávník v sníženinách terénu a mech rozšiřující se v vlhkých místech.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaké jsou nejčastější příčiny stojící vody na zahradě?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejčastěji jde o jílovitou nepropustnou půdu, nevhodný sklon terénu směřující k domu nebo do sníženiny, a zhutněnou zeminu po stavbě domu, kterou stavební technika utlačila do podoby téměř nepropustné vrstvy.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kdy stačí jen zlepšit propustnost půdy a kdy už je potřeba drenáž?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Pokud voda mizí do 12–24 hodin a problém je jen v malé části zahrady, stačí přidat písek a kompost a půdu prokypřit. Pokud voda stojí i po několika dnech nebo se problém opakuje při každém dešti, je nutná drenáž nebo vsakovací jímka.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Potřebuju povolení na drenáž nebo vsakovací jímku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Drenáž a vsakovací jímka na vlastním pozemku obvykle povolení nevyžadují. Povolení nebo souhlas stavebního úřadu je nutný při napojení na veřejnou dešťovou kanalizaci a u větších zemních prací v blízkosti hranice se sousedním pozemkem.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jaký sklon terénu od domu je správný?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Doporučený minimální sklon terénu od základů domu je 2–3 %, tedy 2–3 cm na každý metr vzdálenosti od fasády. Tento spád zajistí, že dešťová voda steče od domu a nebude se hromadit u základů.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Co je dešťová zahrada a vyplatí se?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Dešťová zahrada je snížený záhon osázený vlhkomilnými rostlinami umístěný v nejnižším místě pozemku, kam se svádí dešťová voda. Funguje jako přirozená vsakovací plocha a zároveň jako estetický prvek zahrady – vyplatí se zejména tam, kde stojící voda vadí jen v jedné konkrétní oblasti.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/odvodneni-zahrady-pri-destich" title="Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu 2026" />

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
                <li><a href="#priznaky">Jak poznat problém</a></li>
                <li><a href="#priciny">Příčiny</a></li>
                <li><a href="#reseni">Řešení podle závažnosti</a></li>
                <li><a href="#propustnost">Propustnost půdy</a></li>
                <li><a href="#destova-zahrada">Dešťová zahrada</a></li>
                <li><a href="#zaklady">Odvod od základů</a></li>
                <li><a href="#povoleni">Kdy je nutné povolení</a></li>
                <li><a href="#faq">FAQ</a></li>
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
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table-wrap{overflow-x:auto;margin:16px 0 24px}
        .article-table{width:100%;border-collapse:collapse;font-size:14px;line-height:1.5}
        .article-table th{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);background:var(--surface)}
        .article-table td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:top;color:#2a2a28;font-weight:300}
        .article-table tr:last-child td{border-bottom:none}
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
