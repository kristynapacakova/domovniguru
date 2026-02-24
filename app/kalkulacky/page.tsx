export const metadata = {
  title: "Kalkulačky pro domácnost | DomovniGuru",
  description:
    "Přehled praktických kalkulaček pro domácnost: barva, laminát, beton a další. Rychlé výpočty materiálu a spotřeby.",
};

const items = [
  {
    title: "Kolik barvy potřebuji",
    desc: "Spočítej orientační litry podle plochy a počtu vrstev.",
    href: "/kalkulacky/kolik-barvy",
    tag: "Malování",
  },
{
  title: "Kolik laminátu potřebuji",
  desc: "m² + rezerva + počet balení podle velikosti balíku.",
  href: "/kalkulacky/kolik-laminatu",
  tag: "Podlahy",
}
  {
    title: "Kolik betonu potřebuji",
    desc: "Objem, přepočet na pytle a rezerva podle použití.",
    href: "/kalkulacky/kolik-betonu",
    tag: "Stavba",
    soon: true,
  },
];

export default function KalkulackyPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <h1 className="h1">Kalkulačky</h1>
      <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
        Praktické výpočty pro domácnost a rekonstrukci. Začni tím, co právě řešíš —
        každá kalkulačka má jednoduché vstupy a srozumitelný výsledek.
      </p>

      <div style={{ marginTop: 22 }} className="grid">
        <div className="card" style={{ gridColumn: "span 12" }}>
          <div className="cardTitle">Nejčastěji používané</div>
          <div className="cardDesc">Rychlý start – výpočty, které se hodí nejvíc.</div>

          <div style={{ marginTop: 14, display: "grid", gap: 12, gridTemplateColumns: "repeat(12, 1fr)" }}>
            {items.map((it) => (
              <a
                key={it.href}
                href={it.soon ? "#" : it.href}
                className="card"
                style={{
                  gridColumn: "span 6",
                  textDecoration: "none",
                  opacity: it.soon ? 0.6 : 1,
                  pointerEvents: it.soon ? "none" : "auto",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div className="cardTitle">{it.title}</div>
                  <span className="pill">{it.tag}</span>
                </div>
                <div className="cardDesc">{it.desc}</div>
                {it.soon && <div className="hint" style={{ marginTop: 10 }}>Brzy doplníme</div>}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section style={{ marginTop: 28 }}>
        <h2 className="h2">Jak počítáme</h2>
        <p className="p" style={{ maxWidth: 760, marginTop: 10 }}>
          Výsledky jsou orientační a počítají s běžnými hodnotami (např. vydatnost barvy).
          U materiálů doporučujeme přidat rezervu kvůli prořezům, savosti nebo nerovnostem.
        </p>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2 className="h2">Tip pro přesnost</h2>
        <p className="p" style={{ maxWidth: 760, marginTop: 10 }}>
          Pokud máš půdorys nebo rozměry místnosti, přidej si je do poznámky a počítej po částech.
          Ušetříš tím materiál i peníze.
        </p>
      </section>
    </main>
  );
}