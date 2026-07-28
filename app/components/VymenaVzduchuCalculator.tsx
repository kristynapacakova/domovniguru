"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#6a6a60", marginBottom: "6px" };
const inputCss: React.CSSProperties = { width: "100%", padding: "10px 14px", border: `1.5px solid ${border}`, borderRadius: "8px", fontSize: "15px", background: "#fff", color: "#2a2a28", outline: "none", boxSizing: "border-box", transition: "border-color 150ms" };

const mistnosti = [
  { key: "obyvak",  label: "Obývací pokoj", n: 0.5 },
  { key: "loznice", label: "Ložnice",       n: 0.5 },
  { key: "kuchyn",  label: "Kuchyň",        n: 1.5 },
  { key: "koupelna", label: "Koupelna / WC", n: 2 },
  { key: "kancelar", label: "Kancelář",     n: 1 },
];

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

export default function VymenaVzduchuCalculator() {
  const [plocha, setPlocha] = useState("20");
  const [vyska, setVyska]   = useState("2.6");
  const [typ, setTyp]       = useState("obyvak");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const nasobnost = mistnosti.find(m => m.key === typ)?.n ?? 0.5;
  const objem = n(plocha) * n(vyska);
  const prutok = objem * nasobnost;      // m³/h
  const litruZaSekundu = (prutok * 1000) / 3600; // l/s

  const copyText = `Místnost ${objem.toFixed(1)} m³ potřebuje výměnu vzduchu ${prutok.toFixed(0)} m³/h (${litruZaSekundu.toFixed(1)} l/s) při násobnosti ${nasobnost}×/h. Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>💨</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka výměny vzduchu</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej rozměry místnosti a její typ — kalkulačka spočítá potřebný průtok ventilace pro zdravé prostředí.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Plocha místnosti (m²)</label>
          <input type="number" min="1" step="1" value={plocha} onChange={e => setPlocha(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Výška stropu (m)</label>
          <input type="number" min="1.8" step="0.1" value={vyska} onChange={e => setVyska(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>běžně 2,5–2,7 m</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Typ místnosti</label>
          <select value={typ} onChange={e => setTyp(e.target.value)} style={{ ...inputCss, cursor: "pointer" }} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)}>
            {mistnosti.map(m => (
              <option key={m.key} value={m.key}>{m.label} ({m.n}×/h)</option>
            ))}
          </select>
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>násobnost výměny za hodinu</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Objem místnosti</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{objem.toFixed(1)} m³</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Násobnost</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{nasobnost}×/h</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Průtok za sekundu</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{litruZaSekundu.toFixed(1)} l/s</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Potřebný průtok vzduchu</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{prutok.toFixed(0)} m³/h</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            {litruZaSekundu.toFixed(1)} l/s &nbsp;·&nbsp; objem {objem.toFixed(1)} m³ &nbsp;·&nbsp; {nasobnost}× výměna za hodinu
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Násobnost výměny udává, kolikrát za hodinu se vymění celý objem vzduchu v místnosti. V koupelně a kuchyni je vyšší kvůli vlhkosti a pachům. Rekuperační jednotku nebo ventilátor dimenzujte na součet průtoků všech obsluhovaných místností.</span>
      </div>
    </div>
  );
}
