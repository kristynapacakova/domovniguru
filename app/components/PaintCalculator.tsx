"use client";

import { useState } from "react";

export default function PaintCalculator() {
  const [delka, setDelka] = useState<string>("4");
  const [vyska, setVyska] = useState<string>("2.6");
  const [pocetSten, setPocetSten] = useState<string>("4");
  const [okna, setOkna] = useState<string>("2");
  const [natery, setNatery] = useState<string>("2");
  const [vydatnost, setVydatnost] = useState<string>("10");

  const toNum = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const plocha = toNum(delka) * toNum(vyska) * toNum(pocetSten);
  const odecet = toNum(okna) * 1.5;
  const cistaPlocha = Math.max(0, plocha - odecet);
  const litry = (cistaPlocha * toNum(natery)) / toNum(vydatnost);
  const litryZaokr = Math.ceil(litry * 10) / 10;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid #ddd8d0",
    borderRadius: "8px",
    fontSize: "15px",
    background: "#fff",
    color: "#2a2a28",
    outline: "none",
    transition: "border-color 150ms",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#6a6a60",
    marginBottom: "6px",
  };

  const fieldStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div
      style={{
        background: "#f8f4f0",
        borderRadius: "16px",
        padding: "28px 24px",
        border: "1px solid #e8e0d8",
        fontFamily: "inherit",
        maxWidth: "100%",
      }}
    >
      {/* Hlavička */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <span style={{ fontSize: "22px" }}>🪣</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>
            Kalkulačka barvy
          </h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#8a8a80" }}>
          Zadej rozměry místnosti a zjistíš přesné množství barvy.
        </p>
      </div>

      {/* Grid vstupů */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "14px",
          marginBottom: "20px",
        }}
      >
        {/* Délka stěny */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Délka stěny (m)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={delka}
            onChange={(e) => setDelka(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a3a38")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd8d0")}
          />
        </div>

        {/* Výška stěny */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Výška stěny (m)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={vyska}
            onChange={(e) => setVyska(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a3a38")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd8d0")}
          />
        </div>

        {/* Počet stěn */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Počet stěn</label>
          <input
            type="number"
            min="1"
            step="1"
            value={pocetSten}
            onChange={(e) => setPocetSten(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a3a38")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd8d0")}
          />
        </div>

        {/* Okna / dveře */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Okna & dveře</label>
          <input
            type="number"
            min="0"
            step="1"
            value={okna}
            onChange={(e) => setOkna(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a3a38")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd8d0")}
          />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>
            odečte se 1,5 m² / kus
          </span>
        </div>

        {/* Počet nátěrů */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Počet nátěrů</label>
          <input
            type="number"
            min="1"
            max="5"
            step="1"
            value={natery}
            onChange={(e) => setNatery(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a3a38")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd8d0")}
          />
        </div>

        {/* Vydatnost barvy */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Vydatnost (m²/l)</label>
          <input
            type="number"
            min="1"
            step="0.5"
            value={vydatnost}
            onChange={(e) => setVydatnost(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a3a38")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd8d0")}
          />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>
            viz etiketa plechovky
          </span>
        </div>
      </div>

      {/* Mezivýsledky */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e0d8",
            borderRadius: "10px",
            padding: "12px 16px",
          }}
        >
          <div style={{ fontSize: "11px", color: "#8a8a80", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "4px" }}>
            Celková plocha
          </div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>
            {plocha.toFixed(1)} m²
          </div>
        </div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e0d8",
            borderRadius: "10px",
            padding: "12px 16px",
          }}
        >
          <div style={{ fontSize: "11px", color: "#8a8a80", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "4px" }}>
            Po odečtení otvorů
          </div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>
            {cistaPlocha.toFixed(1)} m²
          </div>
        </div>
      </div>

      {/* Hlavní výsledek */}
      <div
        style={{
          background: "#3a3a38",
          borderRadius: "12px",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ fontSize: "12px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>
            Potřebujete přibližně
          </div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            {litryZaokr.toFixed(1)} litrů
          </div>
          <div style={{ fontSize: "13px", color: "#b0b0a0", marginTop: "4px" }}>
            barvy ({toNum(natery)}× nátěr, vydatnost {toNum(vydatnost)} m²/l)
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "11px", color: "#707068", marginBottom: "2px" }}>Typické balení</div>
          {[2.5, 5, 10].map((bal) => {
            const kusu = Math.ceil(litryZaokr / bal);
            return (
              <div key={bal} style={{ fontSize: "13px", color: "#c0c0b0" }}>
                <span style={{ color: "#fff", fontWeight: 600 }}>{kusu}×</span> {bal} l plechovka
              </div>
            );
          })}
        </div>
      </div>

      {/* Tip */}
      <div
        style={{
          marginTop: "14px",
          background: "#fffbf0",
          border: "1px solid #e8d890",
          borderRadius: "8px",
          padding: "10px 14px",
          fontSize: "12px",
          color: "#7a6a20",
          display: "flex",
          gap: "8px",
          alignItems: "flex-start",
        }}
      >
        <span style={{ flexShrink: 0 }}>💡</span>
        <span>
          Přidej <strong>10–15 % rezervu</strong> na opravy a případné přetírání.
          Výsledek je orientační — vždy zkontroluj vydatnost na etiketě konkrétní barvy.
        </span>
      </div>
    </div>
  );
}
