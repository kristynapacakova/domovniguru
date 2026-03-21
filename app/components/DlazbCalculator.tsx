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
    try { await navigator.clipboard.writeText(text); } catch { /**/ }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} title="Zkopírovat výsledek" style={{ background:"none", border:"none", cursor:"pointer", fontSize:"16px", padding:"2px 6px", borderRadius:"6px", color: copied ? "#3a9a6f" : muted }}>
      {copied ? "✓ Zkopírováno!" : "📋"}
    </button>
  );
}

export default function DlazbCalculator() {
  const [delka, setDelka]   = useState("4");
  const [sirka, setSirka]   = useState("3");
  const [dlazbaD, setDlazbaD] = useState("0.6");
  const [dlazbaS, setDlazbaS] = useState("0.6");
  const [rezerva, setRezerva] = useState("10");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const plocha      = n(delka) * n(sirka);
  const dlazbaM2    = n(dlazbaD) * n(dlazbaS);
  const pocetCisty  = dlazbaM2 > 0 ? Math.ceil(plocha / dlazbaM2) : 0;
  const r           = n(rezerva) / 100;
  const pocetRez    = Math.ceil(pocetCisty * (1 + r));
  const copyText    = `Potřebujete ${pocetRez} kusů dlažby (včetně ${n(rezerva)}% rezervy na prořez). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🔲</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka dlažby</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej počet dlaždic včetně rezervy na prořezy a rohy.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka místnosti (m)</label>
          <input type="number" min="0" step="0.1" value={delka} onChange={e=>setDelka(e.target.value)} style={inputCss} onFocus={e=>(e.target.style.borderColor=accent)} onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Šířka místnosti (m)</label>
          <input type="number" min="0" step="0.1" value={sirka} onChange={e=>setSirka(e.target.value)} style={inputCss} onFocus={e=>(e.target.style.borderColor=accent)} onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka dlaždice (m)</label>
          <input type="number" min="0.01" step="0.01" value={dlazbaD} onChange={e=>setDlazbaD(e.target.value)} style={inputCss} onFocus={e=>(e.target.style.borderColor=accent)} onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Šířka dlaždice (m)</label>
          <input type="number" min="0.01" step="0.01" value={dlazbaS} onChange={e=>setDlazbaS(e.target.value)} style={inputCss} onFocus={e=>(e.target.style.borderColor=accent)} onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Rezerva na prořez (%)</label>
          <input type="number" min="0" max="30" step="1" value={rezerva} onChange={e=>setRezerva(e.target.value)} style={inputCss} onFocus={e=>(e.target.style.borderColor=accent)} onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>doporučeno 10 %</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha místnosti</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plocha.toFixed(2)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Bez rezervy</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pocetCisty} ks</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete (s {n(rezerva)} % rezervou)</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{pocetRez} kusů</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>dlaždic {n(dlazbaD)*100}×{n(dlazbaS)*100} cm</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>10% rezerva pokryje prořezy u rohů, sloupků a výklenků. U vzorované dlažby přidej dalších 5 %.</span>
      </div>
    </div>
  );
}
