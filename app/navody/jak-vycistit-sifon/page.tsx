import Link from "next/link";

export const metadata = {
  title: "Jak vyčistit sifon | DomovniGuru",
  description: "Jednoduchý postup krok za krokem, když odpad smrdí nebo špatně odtéká.",
};

export default function JakVycistitSifonPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <div style={{ marginBottom: 16 }}>
        <Link href="/navody" className="hint" style={{ textDecoration: "none" }}>
          ← Zpět na návody
        </Link>
      </div>

      <h1 className="h1">Jak vyčistit sifon</h1>
      <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
        Když odpad smrdí nebo špatně odtéká, bývá viník nejčastěji sifon. Tohle je
        rychlý postup, který zvládneš za pár minut.
      </p>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="cardTitle">Co budeš potřebovat</div>
        <ul className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>Kýbl / misku</li>
          <li>Hadřík nebo houbičku</li>
          <li>Gumové rukavice (doporučeno)</li>
          <li>Případně starý kartáček</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="cardTitle">Postup krok za krokem</div>
        <ol className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>Dej pod sifon kýbl (vylije se z něj voda).</li>
          <li>Povol spodní část sifonu (většinou to jde rukou).</li>
          <li>Vyber nečistoty (vlasy, mastnota) a opláchni díly teplou vodou.</li>
          <li>Otři závity a těsnění – ať to pak neteče.</li>
          <li>Zašroubuj zpět, pusť vodu a zkontroluj, že nic nekape.</li>
        </ol>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="cardTitle">Tipy a časté chyby</div>
        <ul className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>Netlač na závity silou – stačí dotáhnout “tak akorát”.</li>
          <li>Když to po složení kape, zkontroluj těsnění (může být posunuté).</li>
          <li>U umyvadla pomáhá sítko do odpadu – zachytí vlasy a bordel.</li>
        </ul>
        <div className="hint" style={{ marginTop: 10 }}>
          Pozn.: Pokud je sifon prasklý nebo hodně zanesený, někdy je rychlejší ho vyměnit.
        </div>
      </div>
    </main>
  );
}
