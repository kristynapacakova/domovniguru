export default function Page() {
  return (
    <main>
      <h1>TEST DOMOVNIGURU ✅</h1>
    </main>
  )
}
      <section className="container hero">
        <h1 className="h1">Praktický pomocník pro domácnost.</h1>
        <p className="p" style={{ maxWidth: 640, marginTop: 12 }}>
          Čisté kalkulačky a srozumitelné návody. Rychle zjistíš, co koupit, kolik toho potřebuješ
          a jak to doma vyřešit bez stresu.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
          <a className="btnPrimary" href="/kalkulacky">Projít kalkulačky</a>
          <a className="btnGhost" href="/navody">Projít návody</a>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 14 }}>
        <div className="grid">
          <div className="card" style={{ gridColumn: "span 12" }}>
            <div className="cardTitle">Nejpopulárnější</div>
            <div className="cardDesc">Začni tady – rychlé výsledky, žádná omáčka.</div>

            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(12, 1fr)", marginTop: 14 }}>
              <a className="card" style={{ gridColumn: "span 12", textDecoration: "none" }} href="/kalkulacky/kolik-barvy">
                <div className="cardTitle">Kolik barvy potřebuji</div>
                <div className="cardDesc">Plocha, vrstvy, orientační litry. Jednoduše.</div>
              </a>

              <a className="card" style={{ gridColumn: "span 6", textDecoration: "none" }} href="/kalkulacky/kolik-laminatu">
                <div className="cardTitle">Kolik laminátu potřebuji</div>
                <div className="cardDesc">m² + rezerva + počet balení.</div>
              </a>

              <a className="card" style={{ gridColumn: "span 6", textDecoration: "none" }} href="/navody/vycistit-sifon">
                <div className="cardTitle">Jak vyčistit sifon</div>
                <div className="cardDesc">Když odpad smrdí nebo špatně odtéká.</div>
              </a>
            </div>
          </div>

          <div className="card" style={{ gridColumn: "span 12" }}>
            <div className="cardTitle">Co tu najdeš</div>
            <div className="cardDesc" style={{ marginTop: 10 }}>
              Kalkulačky na materiál (barva, beton, laminát, dlažba…), návody “problém → řešení”
              a jednoduché checklisty.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
