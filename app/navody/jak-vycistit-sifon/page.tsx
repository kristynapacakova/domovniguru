export const metadata = {
  title: "Jak vyčistit sifon | DomovniGuru",
  description:
    "Jednoduchý postup krok za krokem, když odpad smrdí nebo špatně odtéká.",
};

export default function SifonPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      {/* Nadpis */}
      <h1 className="h1">Jak vyčistit sifon</h1>

      {/* Úvod */}
      <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
        Pokud odpad zapáchá nebo voda odtéká pomalu, často stačí vyčistit sifon.
        Níže najdeš jednoduchý postup, který zvládneš bez instalatéra.
      </p>

      {/* Postup */}
      <div className="card" style={{ marginTop: 28 }}>
        <div className="cardTitle">Postup krok za krokem</div>

        <ol className="p" style={{ marginTop: 16, lineHeight: 1.8 }}>
          <li>Připrav si kýbl nebo misku pod sifon.</li>
          <li>Opatrně povol spodní část sifonu (většinou jde rukou).</li>
          <li>Nech vytéct vodu a vyčisti usazeniny (vlasy, mastnotu).</li>
          <li>Propláchni teplou vodou.</li>
          <li>Vrať těsnění zpět a sifon dotáhni.</li>
          <li>Pusť vodu a zkontroluj, že nikde neteče.</li>
        </ol>
      </div>

      {/* Tip */}
      <div className="card" style={{ marginTop: 20 }}>
        <div className="cardTitle">Tip</div>
        <p className="p" style={{ marginTop: 10 }}>
          Pokud sifon nejde povolit rukou, pomůže gumová rukavice
          nebo kleště přes hadr, aby ses nepoškrábala plast.
        </p>
      </div>

      {/* CTA blok */}
      <div className="card" style={{ marginTop: 30 }}>
        <div className="cardTitle">Může se hodit</div>

        <p className="cardDesc" style={{ marginTop: 10 }}>
          Řešíš větší úpravy v koupelně? Podívej se na naše praktické kalkulačky.
        </p>

        <a
          href="/kalkulacky"
          className="btnPrimary"
          style={{ marginTop: 16, display: "inline-block" }}
        >
          Zobrazit kalkulačky
        </a>
      </div>
    </main>
  );
}
