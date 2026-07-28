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

const fmt = (v: number) => Math.round(v).toLocaleString("cs-CZ");

export default function UverCalculator() {
  const [uver, setUver]   = useState("300000");
  const [sazba, setSazba] = useState("8.9");
  const [roky, setRoky]   = useState("5");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const uverN = n(uver);
  const rocniSazba = n(sazba);
  const rokyN = n(roky);

  // Anuitní splátka: r = měsíční úrok, n = počet splátek
  const r = rocniSazba / 100 / 12;
  const pocetSplatek = Math.round(rokyN * 12);

  let splatka = 0;
  if (pocetSplatek > 0) {
    splatka = r === 0
      ? uverN / pocetSplatek
      : (uverN * r) / (1 - Math.pow(1 + r, -pocetSplatek));
  }

  const celkemZaplaceno = splatka * pocetSplatek;
  const preplatek = celkemZaplaceno - uverN;

  const copyText = `Měsíční splátka úvěru ${fmt(uverN)} Kč při sazbě ${rocniSazba} % na ${rokyN} let je ${fmt(splatka)} Kč. Celkem zaplatíte ${fmt(celkemZaplaceno)} Kč, přeplatek na úrocích je ${fmt(preplatek)} Kč. Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>🏦</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka splátek úvěru</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej výši úvěru, úrokovou sazbu a dobu splácení — kalkulačka spočítá měsíční splátku i celkový přeplatek.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Výše úvěru (Kč)</label>
          <input type="number" min="1000" step="10000" value={uver} onChange={e => setUver(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Roční úroková sazba (%)</label>
          <input type="number" min="0" max="50" step="0.1" value={sazba} onChange={e => setSazba(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>úvěr na rekonstrukci 7–12 %</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Doba splácení (roky)</label>
          <input type="number" min="1" max="30" step="1" value={roky} onChange={e => setRoky(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Celkem zaplaceno</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{fmt(celkemZaplaceno)} Kč</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Přeplatek (úroky)</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{fmt(preplatek)} Kč</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Počet splátek</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{pocetSplatek}×</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Měsíční splátka</div>
          <div style={{ fontSize: "40px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{fmt(splatka)} Kč</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            {pocetSplatek}× splátka &nbsp;·&nbsp; celkem {fmt(celkemZaplaceno)} Kč
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Výpočet používá anuitní (konstantní) splátku, kterou nabízí většina bank. Delší doba splácení sníží měsíční splátku, ale výrazně zvýší celkový přeplatek na úrocích. Před podpisem porovnej RPSN u více bank — zahrnuje i poplatky, ne jen úrok.</span>
      </div>
    </div>
  );
}
