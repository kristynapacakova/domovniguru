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

export default function ZavlahaCalculator() {
  const [plocha, setPlocha] = useState("50");
  const [litry_m2, setLitry_m2] = useState("20");
  const [dny, setDny] = useState("3");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const tyden = n(plocha) * n(litry_m2);
  const naZavlahu = n(dny) > 0 ? tyden / n(dny) : tyden;
  const mesic = tyden * 4;

  const copyText = `Vaše zahrada potřebuje přibližně ${tyden.toFixed(0)} litrů vody za týden (${naZavlahu.toFixed(0)} l na jedno zavlažování). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>💧</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka zavlažování</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej kolik litrů vody potřebuje tvoje zahrada za týden.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Plocha zahrady (m²)</label>
          <input
            type="number" min="0" step="5" value={plocha}
            onChange={e => setPlocha(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Potřeba vody (l/m²/týden)</label>
          <input
            type="number" min="0" step="1" value={litry_m2}
            onChange={e => setLitry_m2(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>trávník: 20 l / záhon: 15 l / keře: 8 l</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Zavlažování za týden (dní)</label>
          <input
            type="number" min="0" step="1" value={dny}
            onChange={e => setDny(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Litry / zavlažování</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{naZavlahu.toFixed(0)} l</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Litry / týden</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{tyden.toFixed(0)} l</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřeba vody za měsíc</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{mesic.toFixed(0)} litrů</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{tyden.toFixed(0)} l/týden × 4 týdny</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Zalévejte ráno (6–9 h) nebo večer – snižujete odpařování o 30–50 %. Hluboká zavlažování méně často jsou lepší než mělká každý den.</span>
      </div>
    </div>
  );
}
