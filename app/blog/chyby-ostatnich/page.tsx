import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nejčastější chyby domácích kutilů – poučte se z chyb ostatních",
  description: "Sbírka reálných chyb z malování, rekonstrukce, zahrady i elektřiny. Každá vás mohla stát čas nebo peníze. Přečtěte si je dřív než začnete.",
  alternates: { canonical: "https://www.domovniguru.cz/chyby-ostatnich" },
  openGraph: { title: "Nejčastější chyby domácích kutilů", description: "Reálné chyby z malování, rekonstrukce, zahrady a elektřiny – poučte se dřív než začnete.", url: "https://www.domovniguru.cz/chyby-ostatnich", siteName: "DomovniGuru", locale: "cs_CZ", type: "website" },
  twitter: { card: "summary_large_image", title: "Nejčastější chyby domácích kutilů", description: "Reálné chyby z malování, rekonstrukce, zahrady a elektřiny." },
};

const CATEGORIES = [
  {
    id: "malovani",
    icon: "🎨",
    label: "Malování & barvy",
    color: "#4a90d9",
    articleLink: "/blog/jak-malovat-zed",
    mistakes: [
      { icon: "🖌️", title: "Namalovali přes vlhkou zeď", story: "Koupili jsme nový byt, hned jsme začali malovat. Krásně bílé zdi. Za 3 týdny se barva loupe v pruzích.", lesson: "Nový beton nebo omítka musí vyschnout min. 28 dní. Vždy zkontroluj vlhkost povrchu před malováním." },
      { icon: "🪣", title: "Přeskočili penetraci", story: "Proč kupovat penetraci když je barva drahá a 'stačí dvě vrstvy'? Skončili jsme se třemi vrstvami a zeď stále prosvítala.", lesson: "Penetrace sníží savost povrchu a spotřebu barvy. Ušetříš víc na barvě než co penetrace stojí." },
      { icon: "🎭", title: "Vybrali barvu z vzorníku, ne ze stěny", story: "V obchodě vypadal odstín perfektně. Doma na stěně byl úplně jiný — tmavší, chladnější.", lesson: "Vždy si kup malý testovací váleček (50–100 Kč) a nanes na zeď. Nechej zaschnout 24 hodin — mokrá barva vypadá jinak." },
      { icon: "☀️", title: "Malovali za přímého slunce", story: "Krásný letní den, otevřená okna, malujeme. Barva schla tak rychle, že válec zanechával pruhy a schly otahy.", lesson: "Maluj ráno nebo večer, nebo v zamračeném dni. Přímé slunce barvu vysuší příliš rychle — nestihne se roztáhnout." },
    ],
  },
  {
    id: "rekonstrukce",
    icon: "🏗️",
    label: "Rekonstrukce & stavba",
    color: "#e07040",
    articleLink: "/blog/planovani-rekonstrukce-bytu",
    mistakes: [
      { icon: "🪚", title: "Začali od špatného konce", story: "Nejdřív jsme položili krásnou plovoucí podlahu. Pak přišel elektrikář a rozboural ji kvůli kabelům. Pak instalatér. Pak malíři.", lesson: "Pořadí prací: demolice → rozvody → omítky → podlahy → malování. Nikdy ne naopak." },
      { icon: "💰", title: "Podhodnotili rozpočet o 40 %", story: "Řekli jsme si: 200 000 Kč. Skončili na 320 000 Kč. Koupelna vydala víc skrytých problémů, řemeslníci měli vícepráce.", lesson: "Vždy přidej 20 % rezervu navíc. Každá rekonstrukce přinese překvapení — počítej s tím předem." },
      { icon: "🤝", title: "Platili řemeslníkovi předem celou částku", story: "Sympatický chlap, referenci jsme neověřili. Záloha 80 % a řemeslník přestal přicházet po 2 dnech práce.", lesson: "Max. 30 % záloha předem, zbytek po dokončení. Vždy písemná smlouva s termínem a rozsahem prací." },
      { icon: "🚿", title: "Neudělali hydroizolaci v koupelně", story: "Ušetřili jsme na hydroizolaci pod obklady. Za rok zavolali sousedi ze spodního patra — vytéká jim ze stropu.", lesson: "Hydroizolace v mokrých zónách je základ. Cena 200–500 Kč/m² — oproti škodám na sousedech je to drobná investice." },
    ],
  },
  {
    id: "elektrika",
    icon: "⚡",
    label: "Elektrika & osvětlení",
    color: "#f59e0b",
    articleLink: "/blog/nejde-proud-cast-bytu",
    mistakes: [
      { icon: "🔌", title: "Vyměnili zásuvku bez vypnutí jističe", story: "\"Stačí to rychle.\" Skončili na pohotovosti s popáleninami na prstech.", lesson: "Nikdy nepracuj na elektroinstalaci pod napětím. Vždy vypni jistič a ověř fázovou tužkou." },
      { icon: "💡", title: "Koupili LED žárovky bez označení DIMMABLE", story: "Nový stmívač, nové LED žárovky. Žárovky blikají, stmívač bzučí. Celý výběr na vyhození.", lesson: "LED žárovky pro stmívač musí mít označení DIMMABLE. Obyčejné LED na stmívači nefungují správně." },
      { icon: "🔥", title: "Zapomněli vyjmout transportní šrouby z pračky", story: "Nová pračka, první prání. Pračka se otřásla, prošla přes koupelnu a poškodila obklady.", lesson: "Transportní šrouby jsou červené nebo žluté šrouby vzadu na pračce. VŽDY vyjmout před prvním spuštěním." },
      { icon: "🧯", title: "Smíchali Savo s čisticím prostředkem", story: "Chtěli jsme mocnější roztok na plíseň. Přidali WC gel do Sava. Okamžitě začal unikat chlór.", lesson: "Savo (chlornan sodný) NIKDY nemíchej s kyselinami — ocet, WC gel, citronová šťáva. Vzniká toxický chlor." },
    ],
  },
  {
    id: "zahrada",
    icon: "🌿",
    label: "Zahrada & terasa",
    color: "#5a9e6f",
    articleLink: "/blog/jarni-zahrada",
    mistakes: [
      { icon: "🌱", title: "Vysadili rajčata příliš brzy", story: "Aprílové slunce vypadalo lákavě. Vysadili jsme sadbu 20. dubna. Noc 23. dubna přinesla mráz. Veškerá sadba zničena.", lesson: "Rajčata, papriky a okurky vysazovat až po 15. května — kdy nehrozí mráz. Respektujte lidová rčení o Zmrzlých mužích." },
      { icon: "💧", title: "Zalévali trávník každý den po troše", story: "Pečlivě jsme zalévali trávník každý večer trochu. Trávník přesto žloutnul a slábnul.", lesson: "Každodenní mělká zálivka způsobuje povrchové kořenění. Lépe 2× týdně ale důkladně — voda musí proniknout 15 cm hluboko." },
      { icon: "🪴", title: "Zasadili rostliny do špatné půdy", story: "Borůvky krásně vzkvétaly u souseda. Koupili jsme tři keře, zasadili do zahradní zeminy. Za měsíc uschlé.", lesson: "Borůvky potřebují kyselou půdu (pH 4–5). V běžné zahradní zemině nepřežijí. Vždy zkontroluj požadavky rostliny." },
      { icon: "🪵", title: "Neolejovali terasu před zimou", story: "Přeskočili jsme podzimní ošetření terasy. Na jaře popraskaná prkna, šedivá barva, dvě prkna shnilá.", lesson: "Dřevěná terasa potřebuje ošetření olejem nebo lazurou každé 1–2 roky. Podzim je ideální čas — pak hned přijde test zimou." },
    ],
  },
  {
    id: "plisen",
    icon: "🦠",
    label: "Plíseň & vlhkost",
    color: "#9b6fd4",
    articleLink: "/blog/jak-odstranit-plisen-na-zdi",
    mistakes: [
      { icon: "🖌️", title: "Přetřeli plíseň barvou", story: "Koupili jsme barvu se slovy 'protiplísňová' a natřeli zeď přes plíseň. Za 3 týdny probublala zpět hůř než předtím.", lesson: "Barva plíseň nezabije — jen ji zakryje. Vždy nejdřív chemicky ošetřit, nechat zaschnout, teprve pak natřít." },
      { icon: "🧹", title: "Kartáčovali plíseň za sucha", story: "Vzali jsme kartáč a drhnuli zeď. Za týden jsme všichni kašlali a plíseň se objevila na druhé zdi.", lesson: "Suchý kartáč rozhodí spóry do celé místnosti. Vždy nejdřív nanes fungicid, počkej 20 minut, pak teprve odstraňuj." },
      { icon: "🚿", title: "Vyčistili koupelnu ale nezlepšili větrání", story: "Dokonale jsme vyčistili koupelnu, koupili nejdražší fungicid. Za 2 měsíce plíseň zpátky.", lesson: "Chemie plíseň zlikviduje, ale podmínky se musí změnit. Větrání po každém sprchování je základ." },
      { icon: "🪑", title: "Vrátili nábytek ke zdi", story: "Po vyčištění jsme vrátili skříň na stejné místo. O zimu později — plíseň za skříní větší než dřív.", lesson: "Za nábytkem u vnější zdi vzduch nestojí a vlhkost kondenzuje. Minimálně 8 cm mezera od zdi." },
    ],
  },
];

export default function ChybyOstatnichPage() {
  return (
    <>
      <div className="wrap">

        {/* HERO */}
        <header className="co-hero">
          <div className="co-hero-badge">💡 Databáze zkušeností</div>
          <h1 className="co-hero-h1">Poučte se z chyb ostatních</h1>
          <p className="co-hero-lead">Každá tady popsaná chyba někoho stála čas, peníze nebo zdraví. Přečtěte si je dřív než začnete — ušetříte si spoustu bolestí hlavy.</p>
          <div className="co-hero-stats">
            <div className="co-stat"><span className="co-stat-num">5</span><span className="co-stat-label">kategorií</span></div>
            <div className="co-stat"><span className="co-stat-num">20</span><span className="co-stat-label">reálných chyb</span></div>
            <div className="co-stat"><span className="co-stat-num">∞</span><span className="co-stat-label">ušetřených problémů</span></div>
          </div>
        </header>

        {/* KATEGORIE NAV */}
        <nav className="co-cat-nav">
          {CATEGORIES.map(cat => (
            <a key={cat.id} href={`#${cat.id}`} className="co-cat-pill" style={{ borderColor: cat.color, color: cat.color }}>
              {cat.icon} {cat.label}
            </a>
          ))}
        </nav>

        {/* KATEGORIE */}
        {CATEGORIES.map(cat => (
          <section key={cat.id} id={cat.id} className="co-section">
            <div className="co-section-header">
              <div className="co-section-icon" style={{ background: cat.color + "18", color: cat.color }}>{cat.icon}</div>
              <div>
                <h2 className="co-section-h2" style={{ color: cat.color }}>{cat.label}</h2>
                <Link href={cat.articleLink} className="co-section-link" style={{ color: cat.color }}>
                  Kompletní průvodce →
                </Link>
              </div>
            </div>

            <div className="co-mistakes-grid">
              {cat.mistakes.map((m, i) => (
                <div key={i} className="co-mistake-card" style={{ borderTopColor: cat.color }}>
                  <div className="co-mistake-top">
                    <span className="co-mistake-icon">{m.icon}</span>
                    <span className="co-mistake-num" style={{ color: cat.color }}>Chyba #{i + 1}</span>
                  </div>
                  <div className="co-mistake-title">„{m.title}"</div>
                  <div className="co-mistake-story">
                    <span className="co-quote">❝</span>{m.story}
                  </div>
                  <div className="co-mistake-lesson" style={{ background: cat.color + "0d", borderColor: cat.color + "30" }}>
                    <span style={{ color: cat.color, fontWeight: 700 }}>✅ Správně: </span>{m.lesson}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="co-cta">
          <div className="co-cta-icon">🤝</div>
          <h3 className="co-cta-h3">Máš vlastní zkušenost?</h3>
          <p className="co-cta-p">Každá chyba kterou jsi zažil pomáhá dalším vyhnout se stejnému. Příběhy ze života jsou cennější než teorie.</p>
          <div className="co-cta-blogs">
            <span>Prohledej naše průvodce:</span>
            <div className="co-cta-links">
              {CATEGORIES.map(cat => (
                <Link key={cat.id} href={cat.articleLink} className="co-cta-link" style={{ color: cat.color, borderColor: cat.color + "40" }}>
                  {cat.icon} {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .co-hero{padding:60px 0 40px;text-align:center}
        .co-hero-badge{display:inline-block;background:#fff8e8;color:#7a5800;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:6px 14px;border-radius:999px;border:1px solid #fcd34d;margin-bottom:20px}
        .co-hero-h1{font-family:var(--font-serif);font-size:clamp(32px,5vw,56px);font-weight:400;line-height:1.1;letter-spacing:-.01em;margin-bottom:16px}
        .co-hero-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;max-width:560px;margin:0 auto 32px}
        .co-hero-stats{display:flex;justify-content:center;gap:40px}
        .co-stat{display:flex;flex-direction:column;align-items:center;gap:4px}
        .co-stat-num{font-size:32px;font-weight:700;color:var(--text);font-family:var(--font-serif)}
        .co-stat-label{font-size:12px;color:var(--muted);font-weight:500}

        .co-cat-nav{display:flex;flex-wrap:wrap;gap:10px;padding:24px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin-bottom:56px}
        .co-cat-pill{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:999px;border:1.5px solid;font-size:13px;font-weight:600;text-decoration:none;transition:opacity 120ms}
        .co-cat-pill:hover{opacity:0.7}

        .co-section{margin-bottom:72px}
        .co-section-header{display:flex;align-items:center;gap:16px;margin-bottom:28px;padding-bottom:16px;border-bottom:1px solid var(--border)}
        .co-section-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
        .co-section-h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:4px}
        .co-section-link{font-size:13px;font-weight:600;text-decoration:none;opacity:0.8}
        .co-section-link:hover{opacity:1}

        .co-mistakes-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .co-mistake-card{background:#fff;border:1px solid #ede8e0;border-top:3px solid;border-radius:12px;padding:20px;display:flex;flex-direction:column;gap:12px}
        .co-mistake-top{display:flex;align-items:center;gap:8px}
        .co-mistake-icon{font-size:20px}
        .co-mistake-num{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .co-mistake-title{font-size:16px;font-weight:700;color:#1a1a18;line-height:1.3}
        .co-mistake-story{font-size:13px;line-height:1.7;color:#6a6a60;background:#faf8f5;border-radius:8px;padding:14px;position:relative}
        .co-quote{font-size:22px;color:#d0c8c0;margin-right:4px;vertical-align:-5px}
        .co-mistake-lesson{font-size:13px;line-height:1.6;color:#2a4a2a;border-radius:8px;padding:12px 14px;border:1px solid}

        .co-cta{text-align:center;background:var(--surface);border-radius:16px;padding:48px 32px;margin:56px 0 80px;border:1px solid var(--border)}
        .co-cta-icon{font-size:40px;margin-bottom:16px}
        .co-cta-h3{font-family:var(--font-serif);font-size:24px;font-weight:400;margin-bottom:12px}
        .co-cta-p{font-size:15px;color:var(--muted);max-width:480px;margin:0 auto 24px;line-height:1.6}
        .co-cta-blogs{font-size:13px;color:var(--muted)}
        .co-cta-links{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:12px}
        .co-cta-link{display:inline-flex;align-items:center;gap:4px;padding:6px 14px;border-radius:999px;border:1px solid;font-size:12px;font-weight:600;text-decoration:none;transition:opacity 120ms}
        .co-cta-link:hover{opacity:0.7}

        @media(max-width:700px){
          .co-mistakes-grid{grid-template-columns:1fr}
          .co-hero-stats{gap:24px}
          .co-cat-nav{gap:8px}
        }
      `}</style>
    </>
  );
}
