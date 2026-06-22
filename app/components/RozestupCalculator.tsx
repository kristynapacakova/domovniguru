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

export default function RozestupCalculator() {
  const [plocha, setPlocha] = useState("4");
  const [rozestup, setRozestup] = useState("30");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const rozestup_m = n(rozestup) / 100;
  const pocet_na_m2 = rozestup_m > 0 ? 1 / (rozestup_m * rozestup_m) : 0;
  const celkovy_pocet = Math.floor(n(plocha) * pocet_na_m2);

  const copyText = `Na záhon o ploše ${n(plocha)} m² s rozestupem ${n(rozestup)} cm potřebujete přibližně ${celkovy_pocet} rostlin (${pocet_na_m2.toFixed(1)} ks/m²). Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🌱</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka rozestupu rostlin</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej kolik rostlin se vejde na tvůj záhon při daném rozestupu.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Plocha záhonu (m²)</label>
          <input
            type="number" min="0" step="1" value={plocha}
            onChange={e => setPlocha(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Rozestup rostlin (cm)</label>
          <input
            type="number" min="0" step="5" value={rozestup}
            onChange={e => setRozestup(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>rajčata: 40–50 cm / saláty: 20–25 cm / jahody: 30 cm / keře: 60–100 cm</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Rostlin na m²</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pocet_na_m2.toFixed(1)} ks</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Celkový počet rostlin</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{celkovy_pocet} ks</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Doporučený počet rostlin</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{celkovy_pocet} ks</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{n(plocha)} m² × {pocet_na_m2.toFixed(1)} ks/m²</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Přehoustlé záhony zvyšují riziko houbových chorob a konkurenci o světlo i živiny. Při pochybnostech volte raději větší rozestup než menší.</span>
      </div>
    </div>
  );
}
