export const metadata = {
  title: "Jak vyčistit sifon | DomovniGuru",
  description: "Jednoduchý postup krok za krokem.",
};

export default function SifonPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <h1 className="h1">Jak vyčistit sifon</h1>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="cardTitle">Postup</div>

        <ol className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>Připrav kýbl pod sifon.</li>
          <li>Povol spodní část sifonu.</li>
          <li>Vyčisti nečistoty a propláchni teplou vodou.</li>
          <li>Dotáhni a zkontroluj, že neteče.</li>
        </ol>
      </div>
    </main>
  );
}
<div className="card" style={{ marginTop: 30 }}>
  <div className="cardTitle">Může se hodit</div>
  <p className="cardDesc" style={{ marginTop: 10 }}>
    Pokud řešíš rekonstrukci koupelny, podívej se i na naše kalkulačky.
  </p>
  <a href="/kalkulacky" className="btnPrimary" style={{ marginTop: 14, display: "inline-block" }}>
    Zobrazit kalkulačky
  </a>
</div>
