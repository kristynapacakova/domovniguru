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

export default function SparovackaCalculator() {
  const [plocha, setPlocha]     = useState("10");
  const [dlazbaD, setDlazbaD]  = useState("30");
  const [dlazbaS, setDlazbaS]  = useState("30");
  const [siraSpary, setSiraSpary] = useState("3");
  const [hlubkaSpary, setHlubkaSpary] = useState("8");
  const [rezerva, setRezerva]  = useState("10");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  // Formula: kg/m² = ((A+B) / (A×B)) × f × d × ρ
  // A,B = tile dims in mm, f = joint width mm, d = joint depth mm, ρ ≈ 1.6 kg/L = 0.0016 kg/mm³
  const A = n(dlazbaD);
  const B = n(dlazbaS);
  const f = n(siraSpary);
  const d = n(hlubkaSpary);
  const plochaN = n(plocha);
  const r = n(rezerva) / 100;

  const kgPerM2 = A > 0 && B > 0 ? ((A + B) / (A * B)) * f * d * 0.0016 * 1000 : 0;
  const kgCelkem = kgPerM2 * plochaN;
  const kgSRezervou = kgCelkem * (1 + r);
  const pocetKg = Math.ceil(kgSRezervou * 10) / 10;
  const pytlu5 = Math.ceil(kgSRezervou / 5);
  const pytlu25 = Math.ceil(kgSRezervou / 25);

  const copyText = `Potřebujete ${pocetKg.toFixed(1)} kg spárovačky (${pytlu5} pytlů po 5 kg nebo ${pytlu25} pytlů po 25 kg, včetně ${n(rezerva)}% rezervy). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>🪣</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka spárovačky</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej plochu, rozměry dlaždic a šíři spár — kalkulačka spočítá potřebné kilogramy spárovačky.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Plocha dlažby (m²)</label>
          <input type="number" min="0.1" step="0.5" value={plocha} onChange={e => setPlocha(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Délka dlaždice (mm)</label>
          <input type="number" min="10" step="10" value={dlazbaD} onChange={e => setDlazbaD(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>např. 300 = 30×30 cm</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Šířka dlaždice (mm)</label>
          <input type="number" min="10" step="10" value={dlazbaS} onChange={e => setDlazbaS(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Šíře spáry (mm)</label>
          <input type="number" min="1" max="30" step="0.5" value={siraSpary} onChange={e => setSiraSpary(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>standard 2–5 mm</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Hloubka spáry (mm)</label>
          <input type="number" min="1" max="30" step="1" value={hlubkaSpary} onChange={e => setHlubkaSpary(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>≈ 2/3 tl. dlaždice</span>
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
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{kgPerM2.toFixed(2)} kg/m²</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Bez rezervy</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{kgCelkem.toFixed(1)} kg</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Potřebujete (s {n(rezerva)} % rezervou)</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{pocetKg.toFixed(1)} kg</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            {pytlu5} × pytel 5 kg &nbsp;·&nbsp; {pytlu25} × pytel 25 kg
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Hloubka spáry bývá přibližně 2/3 tloušťky dlaždice. U keramiky 10 mm zadej hloubku 7 mm, u tenkostěnné mozaiky 4 mm zadej 3 mm.</span>
      </div>
    </div>
  );
}
