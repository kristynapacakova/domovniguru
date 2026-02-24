"use client";

import { useState } from "react";

export default function LaminatCalculator() {
  const [plocha, setPlocha] = useState("");
  const [rezerva, setRezerva] = useState("10");
  const [baleni, setBaleni] = useState("2.2");
  const [vysledek, setVysledek] = useState<number | null>(null);

  const spocitat = () => {
    const plochaNum = parseFloat(plocha.replace(",", "."));
    const rezervaNum = parseFloat(rezerva);
    const baleniNum = parseFloat(baleni.replace(",", "."));

    if (!plochaNum || !baleniNum) return;

    const plochaSR = plochaNum * (1 + rezervaNum / 100);
    const pocetBaleni = Math.ceil(plochaSR / baleniNum);

    setVysledek(pocetBaleni);
  };

  return (
    <div className="card" style={{ marginTop: 30, maxWidth: 520 }}>
      <div style={{ display: "grid", gap: 16 }}>
        <div>
          <div className="hint">Plocha (m²)</div>
          <input
            className="input"
            type="number"
            value={plocha}
            onChange={(e) => setPlocha(e.target.value)}
          />
        </div>

        <div>
          <div className="hint">Rezerva (%)</div>
          <input
            className="input"
            type="number"
            value={rezerva}
            onChange={(e) => setRezerva(e.target.value)}
          />
        </div>

        <div>
          <div className="hint">m² v jednom balení</div>
          <input
            className="input"
            type="number"
            value={baleni}
            onChange={(e) => setBaleni(e.target.value)}
          />
        </div>

        <button className="btnPrimary" onClick={spocitat}>
          Spočítat
        </button>

        {vysledek !== null && (
          <div className="resultBox">
            <div className="resultBig">{vysledek} balení</div>
            <div className="hint" style={{ marginTop: 8 }}>
              Rezerva už je započítaná.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}