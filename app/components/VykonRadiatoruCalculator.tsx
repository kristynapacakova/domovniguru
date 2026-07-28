"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#6a6a60", marginBottom: "6px" };
const inputCss: React.CSSProperties = { width: "100%", padding: "10px 14px", border: `1.5px solid ${border}`, borderRadius: "8px", fontSize: "15px", background: "#fff", color: "#2a2a28", outline: "none", boxSizing: "border-box", transition: "border-color 150ms" };

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /**/ }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} title="Zkopírovat výsledek" style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", padding: "2px 6px", borderRadius: "6px", color: copied ? "#3a9a6f" : muted }}>
      {copied ? "✓ Zkopírováno!" : "📋"}
    </button>
  );
}

export default function VykonRadiatoruCalculator() {
  const [plocha, setPlocha]   = useState("20");
  const [vyska, setVyska]     = useState("2.6");
  const [zatepleni, setZatepleni] = useState("50");
  const [mistnost, setMistnost]   = useState("0");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const plochaN = n(plocha);
  const vyskaN = n(vyska);
  const merna = n(zatepleni);            // W/m³
  const faktor = 1 + n(mistnost) / 100;  // room-type factor

  const objem = plochaN * vyskaN;
  const vykon = objem * merna * faktor;   // W
  const vykonKW = vykon / 1000;
  const clanku = Math.ceil(vykon / 150);  // orientační počet článků (~150 W/článek)

  const fmt = (v: number) => Math.round(v).toLocaleString("cs-CZ");

  const copyText = `Doporučený výkon radiátoru: ${fmt(vykon)} W (${vykonKW.toFixed(2)} kW) pro místnost o objemu ${objem.toFixed(1)} m³. Orientačně ${clanku} článků. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>🔥</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka výkonu radiátoru</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej plochu a výšku místnosti, stav zateplení a typ místnosti — kalkulačka spočítá potřebný výkon radiátoru ve wattech.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Plocha místnosti (m²)</label>
          <input type="number" min="1" step="1" value={plocha} onChange={e => setPlocha(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Výška stropu (m)</label>
          <input type="number" min="2" max="5" step="0.1" value={vyska} onChange={e => setVyska(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>běžně 2,6 m</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Typ / zateplení domu</label>
          <select value={zatepleni} onChange={e => setZatepleni(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)}>
            <option value="40">Novostavba / zateplený (~40 W/m³)</option>
            <option value="50">Běžný dům (~50 W/m³)</option>
            <option value="65">Starší nezateplený (~65 W/m³)</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Typ místnosti</label>
          <select value={mistnost} onChange={e => setMistnost(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)}>
            <option value="0">Běžná místnost (+0 %)</option>
            <option value="15">Rohová / severní (+15 %)</option>
            <option value="30">Koupelna (+30 %)</option>
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Objem místnosti</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{objem.toFixed(1)} m³</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Měrná potřeba</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{merna} W/m³</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Počet článků</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>≈ {clanku}</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Doporučený výkon radiátoru</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{fmt(vykon)} W</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            {vykonKW.toFixed(2)} kW &nbsp;·&nbsp; orientačně {clanku} článků po 150 W
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Výpočet je orientační podle objemu místnosti. Udávaný výkon radiátorů platí pro teplotní spád 75/65/20 °C — u moderních kotlů a tepelných čerpadel s nižší teplotou vody volte radiátor s rezervou 20–30 %.</span>
      </div>
    </div>
  );
}
