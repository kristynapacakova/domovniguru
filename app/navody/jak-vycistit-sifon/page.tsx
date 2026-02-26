export const metadata = {
  title: "Jak vyčistit sifon | DomovniGuru",
  description: "Jednoduchý postup čištění sifonu krok za krokem.",
};

export default function JakVycistitSifonPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <a href="/navody" className="hint" style={{ textDecoration: "none" }}>
        ← Zpět na návody
      </a>

      <h1 className="h1" style={{ marginTop: 12 }}>Jak vyčistit sifon</h1>
      <p className="p" style={{ maxWidth: 760, marginTop: 12 }}>
        Když odpad smrdí nebo špatně odtéká, bývá problém v sifonu. Tohle je nejrychlejší „DIY“
        postup bez volání instalatéra.
      </p>

      <div className="card" style={{ marginTop: 20 }}>
        <div className="cardTitle">Co budeš potřebovat</div>
        <ul className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>Kýbl / lavor</li>
          <li>Starý hadr</li>
          <li>Rukavice (doporučeno)</li>
          <li>Teplá voda</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="cardTitle">Postup</div>
        <ol className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>Dej kýbl pod sifon (vždycky tam zůstane voda).</li>
          <li>Povol spodní část sifonu (většinou ručně).</li>
          <li>Vyhoď nečistoty, vypláchni sifon teplou vodou.</li>
          <li>Zkontroluj těsnění a zase slož/dotáhni.</li>
          <li>Pusť vodu a ověř, že nic nekape.</li>
        </ol>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="cardTitle">Tipy</div>
        <ul className="p" style={{ marginTop: 12, lineHeight: 1.8 }}>
          <li>Když to teče, bývá špatně usazené těsnění.</li>
          <li>Smrad se často drží i v přepadu umyvadla – propláchni i ten.</li>
        </ul>
      </div>
    </main>
  );
}
