"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display:"block", fontSize:"11px", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a60", marginBottom:"6px" };
const inputCss: React.CSSProperties = { width:"100%", padding:"10px 14px", border:`1.5px solid ${border}`, borderRadius:"8px", fontSize:"15px", background:"#fff", color:"#2a2a28", outline:"none", boxSizing:"border-box", transition:"border-color 150ms" };

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* fallback */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} title="Zkopírovat výsledek" style={{ background:"none", border:"none", cursor:"pointer", fontSize:"16px", padding:"2px 6px", borderRadius:"6px", color: copied ? "#3a9a6f" : muted, transition:"color 200ms" }}>
      {copied ? "✓ Zkopírováno!" : "📋"}
    </button>
  );
}

export default function HypotekaCalculator() {
  const [uver, setUver] = useState("3500000");
  const [sazba, setSazba] = useState("5.5");
  const [splatnost, setSplatnost] = useState("25");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const uverVal = n(uver);
  const sazbaVal = n(sazba);
  const splatnostVal = n(splatnost);

  const r = (sazbaVal / 100) / 12;
  const months = splatnostVal * 12;

  let monthly: number;
  if (r > 0) {
    const pow = Math.pow(1 + r, months);
    monthly = uverVal * r * pow / (pow - 1);
  } else {
    monthly = months > 0 ? uverVal / months : 0;
  }

  const totalPaid = monthly * months;
  const totalInterest = totalPaid - uverVal;
  const overpaymentPct = uverVal > 0 ? (totalInterest / uverVal) * 100 : 0;

  const fmt = (v: number) => Math.round(v).toLocaleString("cs-CZ");

  const copyText = `Měsíční splátka hypotéky ${fmt(monthly)} Kč, celkem zaplatíte ${fmt(totalPaid)} Kč (přeplatíte ${fmt(totalInterest)} Kč). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🏦</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka hypotéky</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej měsíční splátku, celkové přeplacení a náklady na úroky.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Výše úvěru (Kč)</label>
          <input
            type="number" min="100000" step="50000" value={uver}
            onChange={e => setUver(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Úroková sazba (% p.a.)</label>
          <input
            type="number" min="0.1" step="0.1" value={sazba}
            onChange={e => setSazba(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Splatnost (roky)</label>
          <input
            type="number" min="5" max="30" step="1" value={splatnost}
            onChange={e => setSplatnost(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Měsíční splátka (Kč)</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{fmt(monthly)} Kč</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Celkem zaplaceno (Kč)</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{fmt(totalPaid)} Kč</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Z toho úroky (Kč)</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{fmt(totalInterest)} Kč</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Přeplacení (%)</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{overpaymentPct.toFixed(1)} %</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Měsíční splátka</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{fmt(monthly)} Kč</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>Celkem zaplatíte {fmt(totalPaid)} Kč (přeplatíte {fmt(totalInterest)} Kč)</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Kalkulačka počítá anuitní splátku s fixní sazbou po celou dobu splatnosti. Skutečná splátka se může lišit při refixaci sazby.</span>
      </div>
    </div>
  );
}
