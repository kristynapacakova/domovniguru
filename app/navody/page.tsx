export const metadata = {
  title: "Návody pro domácnost | DomovniGuru",
  description:
    "Praktické návody pro domácnost a rekonstrukci: malování, podlahy, údržba a další.",
};

const navody = [
  {
    title: "Jak spočítat plochu stěn pro malování",
    desc: "Jednoduchý postup + nejčastější chyby.",
    href: "/navody/jak-spocitat-plochu-sten",
    tag: "Malování",
    soon: true,
  },
  {
    title: "Jakou rezervu dát u laminátu a proč",
    desc: "Kolik % přidat podle pokládky a tvaru místnosti.",
    href: "/navody/rezerva-laminat",
    tag: "Podlahy",
    soon: true,
  },
];

export default function NavodyPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <h1 className="h1">Návody</h1>
      <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
        Krátké a praktické postupy. Cíl: rychle se zorientovat, koupit správné množství
        materiálu a neudělat zbytečné chyby.
      </p>

      <div style={{ marginTop: 22 }} className="grid">
        <div className="card" style={{ gridColumn: "span 12" }}>
          <div className="cardTitle">Doporučené</div>
          <div className="cardDesc">Postupně přidáme další návody.</div>

          <div
            style={{
              marginTop: 14,
              display: "grid",
              gap: 12,
              gridTemplateColumns: "repeat(12, 1fr)",
            }}
          >
            {navody.map((it) => (
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
                {it.soon && (
                  <div className="hint" style={{ marginTop: 10 }}>
                    Brzy doplníme
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section style={{ marginTop: 28 }}>
        <h2 className="h2">Jak píšeme návody</h2>
        <p className="p" style={{ maxWidth: 760, marginTop: 10 }}>
          Jednoduše, prakticky, bez zbytečné omáčky. U každého návodu budou příklady
          a rychlé tipy, co si pohlídat.
        </p>
      </section>
    </main>
  );
}