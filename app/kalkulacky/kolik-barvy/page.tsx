"use client";
import { useState } from "react";

export default function KolikBarvy() {
  const [plocha, setPlocha] = useState("");
  const [vrstvy, setVrstvy] = useState("2");
  const [vysledek, setVysledek] = useState<number | null>(null);

  const spocitat = () => {
    const plochaNum = parseFloat(plocha.replace(",", "."));
    const vrstvyNum = parseInt(vrstvy);

    if (!plochaNum || !vrstvyNum) return;

    // průměrná vydatnost barvy cca 10 m² / litr
    const litry = (plochaNum * vrstvyNum) / 10;

    // zaokrouhlení nahoru na 0.1 l
    setVysledek(Math.ceil(litry * 10) / 10);
  };

  return (
    <main className="container" style={{ padding: "40px 0" }}>
      <h1 className="h1">Kolik barvy potřebuji</h1>
      <p className="p" style={{ marginTop: 12, maxWidth: 600 }}>
        Zadej plochu a počet vrstev. Výpočet je orientační
        (počítáme s vydatností cca 10 m² na litr).
      </p>

      <div className="card" style={{ marginTop: 30, maxWidth: 500 }}>
        <div style={{ display: "grid", gap: 16 }}>
          <div>
            <div className="hint">Plocha (m²)</div>
            <input
              className="input"
              type="number"
              value={plocha}
              onChange={(e) => setPlocha(e.target.value)}
              placeholder="např. 42"
            />
          </div>

          <div>
            <div className="hint">Počet vrstev</div>
            <input
              className="input"
              type="number"
              value={vrstvy}
              onChange={(e) => setVrstvy(e.target.value)}
            />
          </div>

          <button className="btnPrimary" onClick={spocitat}>
            Spočítat
          </button>

          {vysledek && (
            <div className="resultBox">
              <div className="resultBig">{vysledek} litrů</div>
              <div className="hint" style={{ marginTop: 8 }}>
                Doporučuji přidat 5–10 % rezervu.
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}