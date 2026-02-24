export const metadata = {
  title: "Návody | DomovniGuru",
  description: "Praktické návody pro domácnost a opravy.",
};

const items = [
  {
    title: "Jak vyčistit sifon",
    desc: "Když odpad smrdí nebo špatně odtéká.",
    href: "/navody/jak-vycistit-sifon",
    tag: "Koupelna",
  },
];

export default function NavodyPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <h1 className="h1">Návody</h1>
      <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
        Rychlé postupy „problém → řešení“. Krátce, prakticky, bez omáčky.
      </p>

      <div style={{ marginTop: 22, display: "grid", gap: 12 }}>
        {items.map((it) => (
          <a key={it.href} href={it.href} className="card" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div className="cardTitle">{it.title}</div>
              <span className="pill">{it.tag}</span>
            </div>
            <div className="cardDesc">{it.desc}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
