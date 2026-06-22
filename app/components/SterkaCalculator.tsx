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

export default function SterkaCalculator() {
  const [plocha, setPlocha]       = useState("20");
  const [tloustka, setTloustka]   = useState("2");
  const [spotreba, setSpotreba]   = useState("1.5");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const kg    = n(plocha) * n(tloustka) * n(spotreba);
  const pytlu = Math.ceil(kg / 25);
  const copyText = `Potřebujete ${kg.toFixed(1)} kg stěrky (${pytlu} pytlů po 25 kg) na ${n(plocha)} m² ve vrstvě ${n(tloustka)} mm. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🪚</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka stěrky</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej kolik kg stěrky nebo tmelu potřebuješ na rovné stěny.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Plocha stěn (m²)</label>
          <input type="number" min="0" step="1" value={plocha}
            onChange={(e) => setPlocha(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Tloušťka vrstvy (mm)</label>
          <input type="number" min="0" step="0.5" value={tloustka}
            onChange={(e) => setTloustka(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:muted, marginTop:"4px" }}>finální vrstva: 1–3 mm / vyrovnání: 5–15 mm</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Spotřeba (kg/m²/mm)</label>
          <input type="number" min="0" step="0.1" value={spotreba}
            onChange={(e) => setSpotreba(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:muted, marginTop:"4px" }}>jemná stěrka: 1,2–1,8 kg/m²/mm</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Celkem kg stěrky</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{kg.toFixed(1)} kg</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Pytlů po 25 kg</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pytlu} ks</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{kg.toFixed(1)} kg stěrky</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>({pytlu} pytlů po 25 kg)</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Finální štuková stěrka (1–3 mm): 1,2–1,8 kg/m²/mm. Hrubší vyrovnávací stěrka (5–15 mm): 1,4–2,0 kg/m²/mm. Pytlík po 25 kg je standardní balení.</span>
      </div>
    </div>
  );
}
