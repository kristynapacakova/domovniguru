import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Šablony pro 3D tisk zdarma – domácnost a dílna 2025",
  description: "Kurátorovaný výběr nejlepších free STL souborů pro domácnost. Držáky, organizéry, náhradní díly – ke stažení zdarma na Printables a Thingiverse.",
  alternates: { canonical: "https://domovniguru.cz/sablony" },
  openGraph: { title: "Šablony pro 3D tisk zdarma – domácnost", description: "Nejlepší free STL soubory pro domácnost a dílnu.", url: "https://domovniguru.cz/sablony", siteName: "DomovniGuru", locale: "cs_CZ", type: "website" },
};

const KATEGORIE = [
  {
    emoji: "🔧",
    title: "Dílna & nářadí",
    desc: "Držáky na nářadí, organizéry šroubů a zásobníky pro pořádek v dílně.",
    items: [
      { title: "Držák na šroubováky na zeď", zdroj: "Printables", url: "https://www.printables.com/search/models?q=screwdriver+wall+holder", obtiznost: "Snadné", cas: "2–3 h" },
      { title: "Organizér na bity a vrtáky", zdroj: "Printables", url: "https://www.printables.com/search/models?q=drill+bit+organizer", obtiznost: "Snadné", cas: "1–2 h" },
      { title: "Držák na metr na pásek", zdroj: "Thingiverse", url: "https://www.thingiverse.com/search?q=tape+measure+holder", obtiznost: "Snadné", cas: "1 h" },
      { title: "Zásobník na hmoždinky a šrouby", zdroj: "Printables", url: "https://www.printables.com/search/models?q=screw+organizer+box", obtiznost: "Střední", cas: "3–4 h" },
    ],
  },
  {
    emoji: "🏠",
    title: "Domácnost & kuchyně",
    desc: "Praktické doplňky do kuchyně, koupelny a obýváku.",
    items: [
      { title: "Stojan na kuchyňské nože", zdroj: "Printables", url: "https://www.printables.com/search/models?q=knife+block+stand", obtiznost: "Střední", cas: "4–6 h" },
      { title: "Držák na papírové utěrky", zdroj: "Printables", url: "https://www.printables.com/search/models?q=paper+towel+holder", obtiznost: "Snadné", cas: "2 h" },
      { title: "Organizér do zásuvky", zdroj: "Thingiverse", url: "https://www.thingiverse.com/search?q=drawer+organizer+kitchen", obtiznost: "Snadné", cas: "2–3 h" },
      { title: "Háček na dveře skříně", zdroj: "Printables", url: "https://www.printables.com/search/models?q=cabinet+door+hook", obtiznost: "Snadné", cas: "30 min" },
    ],
  },
  {
    emoji: "💡",
    title: "Elektrika & kabely",
    desc: "Manažery kabelů, držáky na prodlužovačky a organizéry nabíječek.",
    items: [
      { title: "Kabelový organizér na stůl", zdroj: "Printables", url: "https://www.printables.com/search/models?q=cable+organizer+desk", obtiznost: "Snadné", cas: "1–2 h" },
      { title: "Držák na prodlužovačku pod stůl", zdroj: "Printables", url: "https://www.printables.com/search/models?q=power+strip+holder+under+desk", obtiznost: "Snadné", cas: "1 h" },
      { title: "Organizér na nabíječky", zdroj: "Thingiverse", url: "https://www.thingiverse.com/search?q=charger+organizer", obtiznost: "Snadné", cas: "2 h" },
      { title: "Průchodka kabelů skrz zeď", zdroj: "Printables", url: "https://www.printables.com/search/models?q=cable+wall+grommet", obtiznost: "Snadné", cas: "1 h" },
    ],
  },
  {
    emoji: "🌿",
    title: "Zahrada & balkon",
    desc: "Samozavlažovací nádoby, etiketky na rostliny a zahradní pomůcky.",
    items: [
      { title: "Etiketky na bylinky a zeleninu", zdroj: "Printables", url: "https://www.printables.com/search/models?q=plant+label+garden", obtiznost: "Snadné", cas: "30 min" },
      { title: "Samozavlažovací vložka do květináče", zdroj: "Thingiverse", url: "https://www.thingiverse.com/search?q=self+watering+insert+planter", obtiznost: "Střední", cas: "3–4 h" },
      { title: "Držák na zahradní hadici", zdroj: "Printables", url: "https://www.printables.com/search/models?q=garden+hose+holder", obtiznost: "Snadné", cas: "2 h" },
      { title: "Popis pro záhon – zatlačovací štítek", zdroj: "Printables", url: "https://www.printables.com/search/models?q=raised+bed+garden+marker", obtiznost: "Snadné", cas: "1 h" },
    ],
  },
  {
    emoji: "🛁",
    title: "Koupelna",
    desc: "Držáky na mýdlo, zubní kartáčky a organizéry kosmetiky.",
    items: [
      { title: "Magnetický držák na mýdlo", zdroj: "Printables", url: "https://www.printables.com/search/models?q=magnetic+soap+holder", obtiznost: "Snadné", cas: "1 h" },
      { title: "Držák na zubní kartáčky na zeď", zdroj: "Printables", url: "https://www.printables.com/search/models?q=toothbrush+holder+wall", obtiznost: "Snadné", cas: "1–2 h" },
      { title: "Organizér kosmetiky do zásuvky", zdroj: "Thingiverse", url: "https://www.thingiverse.com/search?q=bathroom+drawer+organizer", obtiznost: "Snadné", cas: "2–3 h" },
      { title: "Háček za dveře sprchového koutu", zdroj: "Printables", url: "https://www.printables.com/search/models?q=shower+door+hook", obtiznost: "Snadné", cas: "30 min" },
    ],
  },
  {
    emoji: "🔩",
    title: "Náhradní díly",
    desc: "Náhradní díly které se běžně lámou a jsou drahé nebo nedostupné.",
    items: [
      { title: "Klip na žaluzie (universal)", zdroj: "Printables", url: "https://www.printables.com/search/models?q=blind+clip+replacement", obtiznost: "Snadné", cas: "30 min" },
      { title: "Nožička pod nábytek (protiskluzová)", zdroj: "Printables", url: "https://www.printables.com/search/models?q=furniture+foot+replacement", obtiznost: "Snadné", cas: "30 min" },
      { title: "Háček na věšák na oblečení", zdroj: "Thingiverse", url: "https://www.thingiverse.com/search?q=coat+hook+replacement", obtiznost: "Snadné", cas: "1 h" },
      { title: "Krytka na šroub a závit", zdroj: "Printables", url: "https://www.printables.com/search/models?q=screw+cover+cap", obtiznost: "Snadné", cas: "20 min" },
    ],
  },
];

const TIPY = [
  { emoji: "🖨️", tip: "Materiál PLA stačí na většinu domácích projektů. PETG nebo ASA pro věci v koupelně nebo venku." },
  { emoji: "📐", tip: "Před tiskem zkontroluj rozměry modelu — mnoho souborů se dá škálovat v slicer softwaru." },
  { emoji: "⚙️", tip: "Výška vrstvy 0,2 mm je dobrý kompromis mezi kvalitou a rychlostí pro domácí použití." },
  { emoji: "🔍", tip: "Na Printables filtruj podle počtu stažení a hodnocení — oblíbené modely bývají lépe navržené." },
];

export default function SablonyPage() {
  return (
    <>
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
          <span>Šablony pro 3D tisk</span>
        </nav>

        <header className="sablony-header">
          <div className="sablony-header-text">
            <div className="sablony-eyebrow">🖨️ Zdarma ke stažení</div>
            <h1 className="sablony-h1">Šablony pro 3D tisk – domácnost a dílna</h1>
            <p className="sablony-lead">Kurátorovaný výběr nejlepších free STL souborů pro domácnost. Žádná registrace, žádné platby — jen klikneš a stáhneš na Printables nebo Thingiverse.</p>
          </div>
          <div className="sablony-badge">
            <span className="badge-num">50+</span>
            <span className="badge-label">prověřených modelů</span>
          </div>
        </header>

        {/* Tipy pro tisk */}
        <div className="tipy-grid">
          {TIPY.map((t, i) => (
            <div key={i} className="tip-card">
              <span className="tip-emoji">{t.emoji}</span>
              <span className="tip-text">{t.tip}</span>
            </div>
          ))}
        </div>

        {/* Kategorie */}
        {KATEGORIE.map((kat) => (
          <section key={kat.title} className="kat-section">
            <div className="kat-header">
              <span className="kat-emoji">{kat.emoji}</span>
              <div>
                <h2 className="kat-title">{kat.title}</h2>
                <p className="kat-desc">{kat.desc}</p>
              </div>
            </div>

            <div className="modely-grid">
              {kat.items.map((item) => (
                <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="model-card">
                  <div className="model-top">
                    <span className={`model-zdroj model-zdroj--${item.zdroj.toLowerCase()}`}>{item.zdroj}</span>
                    <span className="model-cas">⏱ {item.cas}</span>
                  </div>
                  <div className="model-title">{item.title}</div>
                  <div className="model-bottom">
                    <span className={`model-obtiznost model-obtiznost--${item.obtiznost === "Snadné" ? "easy" : "medium"}`}>
                      {item.obtiznost === "Snadné" ? "● Snadné" : "● Střední"}
                    </span>
                    <span className="model-cta">Stáhnout →</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* CTA blok */}
        <div className="sablony-cta">
          <div className="sablony-cta-inner">
            <div className="sablony-cta-text">
              <h3>Nemáš 3D tiskárnu?</h3>
              <p>Tiskové služby jsou dostupné od cca 2–5 Kč/gram. Stačí nahrát STL soubor na Printables.com/print nebo do místní knihovny s makerspace.</p>
            </div>
            <div className="sablony-cta-links">
              <a href="https://www.printables.com" target="_blank" rel="noopener noreferrer" className="cta-btn">Printables.com →</a>
              <a href="https://www.thingiverse.com" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--outline">Thingiverse.com →</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sablony-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 32px; padding: 48px 0 40px; }
        .sablony-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .sablony-h1 { font-family: var(--font-serif); font-size: clamp(28px, 4vw, 44px); font-weight: 400; line-height: 1.1; letter-spacing: -0.01em; margin-bottom: 16px; }
        .sablony-lead { font-size: 17px; line-height: 1.65; color: var(--muted); font-weight: 300; max-width: 560px; }
        .sablony-badge { flex-shrink: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 120px; height: 120px; border-radius: 50%; background: var(--surface); border: 2px solid var(--border); text-align: center; }
        .badge-num { font-family: var(--font-serif); font-size: 32px; font-weight: 400; line-height: 1; }
        .badge-label { font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin-top: 4px; }

        .tipy-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 56px; }
        .tip-card { display: flex; gap: 10px; align-items: flex-start; background: var(--surface); border-radius: 10px; padding: 14px 16px; border: 1px solid var(--border); }
        .tip-emoji { font-size: 18px; flex-shrink: 0; }
        .tip-text { font-size: 13px; line-height: 1.55; color: var(--muted); font-weight: 300; }

        .kat-section { margin-bottom: 56px; }
        .kat-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 20px; }
        .kat-emoji { font-size: 32px; flex-shrink: 0; margin-top: 2px; }
        .kat-title { font-family: var(--font-serif); font-size: 24px; font-weight: 400; margin-bottom: 4px; }
        .kat-desc { font-size: 14px; color: var(--muted); font-weight: 300; }

        .modely-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .model-card { display: flex; flex-direction: column; gap: 10px; background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 16px; text-decoration: none; color: inherit; transition: border-color 150ms, box-shadow 150ms; }
        .model-card:hover { border-color: #111; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .model-top { display: flex; justify-content: space-between; align-items: center; }
        .model-zdroj { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; }
        .model-zdroj--printables { background: #fff3e0; color: #e07a3a; }
        .model-zdroj--thingiverse { background: #e8f4e8; color: #3a8a3a; }
        .model-cas { font-size: 11px; color: var(--muted); }
        .model-title { font-size: 14px; font-weight: 500; line-height: 1.4; color: var(--text); flex-grow: 1; }
        .model-bottom { display: flex; justify-content: space-between; align-items: center; }
        .model-obtiznost { font-size: 11px; font-weight: 600; }
        .model-obtiznost--easy { color: #5a9e6f; }
        .model-obtiznost--medium { color: #c8a97a; }
        .model-cta { font-size: 12px; font-weight: 700; color: var(--muted); }
        .model-card:hover .model-cta { color: var(--text); }

        .sablony-cta { margin: 56px 0 80px; }
        .sablony-cta-inner { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 32px 40px; display: flex; justify-content: space-between; align-items: center; gap: 32px; }
        .sablony-cta-text h3 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 8px; }
        .sablony-cta-text p { font-size: 14px; color: var(--muted); font-weight: 300; line-height: 1.6; max-width: 460px; }
        .sablony-cta-links { display: flex; gap: 12px; flex-shrink: 0; }
        .cta-btn { display: inline-flex; align-items: center; height: 40px; padding: 0 20px; border-radius: 8px; background: #111; color: #fff; font-size: 13px; font-weight: 600; text-decoration: none; transition: opacity 150ms; }
        .cta-btn:hover { opacity: 0.85; }
        .cta-btn--outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
        .cta-btn--outline:hover { border-color: #111; opacity: 1; }

        @media (max-width: 960px) {
          .tipy-grid { grid-template-columns: repeat(2, 1fr); }
          .modely-grid { grid-template-columns: repeat(2, 1fr); }
          .sablony-cta-inner { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .sablony-header { flex-direction: column; }
          .tipy-grid { grid-template-columns: 1fr; }
          .modely-grid { grid-template-columns: 1fr; }
          .sablony-cta-links { flex-direction: column; width: 100%; }
        }
      `}</style>
    </>
  );
}
