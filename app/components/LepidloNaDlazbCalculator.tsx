"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#6a6a60", marginBottom: "6px" };
const inputCss: React.CSSProperties = { width: "100%", padding: "10px 14px", border: `1.5px solid ${border}`, borderRadius: "8px", fontSize: "15px", background: "#fff", color: "#2a2a28", outline: "none", boxSizing: "border-box", transition: "border-color 150ms" };

const TYPY = [
  { label: "Standardní (C1)", spotreba: 3.0 },
  { label: "Flexibilní (C2 / S1)", spotreba: 4.5 },
  { label: "Vysoce flexibilní (S2)", spotreba: 5.5 },
  { label: "Epoxidové lepidlo (R2)", spotreba: 7.0 },
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

export default function LepidloNaDlazbCalculator() {
  const [plocha, setPlocha]   = useState("10");
  const [typIdx, setTypIdx]  = useState(0);
  const [rezerva, setRezerva] = useState("10");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const plochaN  = n(plocha);
  const spotreba = TYPY[typIdx].spotreba;
  const r        = n(rezerva) / 100;

  const kgPerM2    = spotreba;
  const kgCelkem   = plochaN * kgPerM2;
  const kgSRezervou = kgCelkem * (1 + r);
  const pytlu25    = Math.ceil(kgSRezervou / 25);
  const pytlu5     = Math.ceil(kgSRezervou / 5);

  const copyText = `Potřebujete ${kgSRezervou.toFixed(1)} kg lepidla na dlažbu (${pytlu25} pytlů po 25 kg nebo ${pytlu5} pytlů po 5 kg, včetně ${n(rezerva)}% rezervy). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>🏗️</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka lepidla na dlažbu</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej plochu a typ lepidla — kalkulačka spočítá potřebné kilogramy včetně rezervy.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Plocha dlažby (m²)</label>
          <input type="number" min="0.1" step="0.5" value={plocha} onChange={e => setPlocha(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gridColumn: "span 2" }}>
          <label style={labelCss}>Typ lepidla</label>
          <select value={typIdx} onChange={e => setTypIdx(Number(e.target.value))} style={{ ...inputCss, appearance: "none" }}>
            {TYPY.map((t, i) => (
              <option key={i} value={i}>{t.label} — {t.spotreba} kg/m²</option>
            ))}
          </select>
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>dle ČSN EN 12004</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Rezerva (%)</label>
          <input type="number" min="0" max="30" step="5" value={rezerva} onChange={e => setRezerva(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>doporučeno 10 %</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Spotřeba na m²</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{kgPerM2.toFixed(1)} kg/m²</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Bez rezervy</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{kgCelkem.toFixed(1)} kg</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Potřebujete (s {n(rezerva)} % rezervou)</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{kgSRezervou.toFixed(1)} kg</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            {pytlu25} × pytel 25 kg &nbsp;·&nbsp; {pytlu5} × pytel 5 kg
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Spotřeba závisí na rovnosti podkladu a velikosti dlaždice. U formátu nad 60×60 cm nebo na stěnu počítejte s vyšší spotřebou než uvádí výrobce — zubová stěrka musí vytvořit plnoploché lepení bez dutin.</span>
      </div>
    </div>
  );
}
