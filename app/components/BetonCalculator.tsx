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

export default function BetonCalculator() {
  const [delka, setDelka]   = useState("3");
  const [sirka, setSirka]   = useState("3");
  const [vyska, setVyska]   = useState("0.12");
  const [rezerva, setRezerva] = useState("5");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const objem       = n(delka) * n(sirka) * n(vyska);
  const s            = n(rezerva) / 100;
  const objemRez    = objem * (1 + s);
  const pytlu50     = Math.ceil(objemRez / 0.025); // 50 kg pytel ≈ 0.025 m³
  const copyText    = `Potřebujete cca ${objemRez.toFixed(2)} m³ betonu (včetně ${n(rezerva)}% rezervy na sesedání). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🏗️</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka betonu</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej objem betonu pro desku, patku nebo základy.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        {[
          ["Délka (m)", delka, setDelka, "0.1"],
          ["Šířka (m)", sirka, setSirka, "0.1"],
          ["Tloušťka (m)", vyska, setVyska, "0.01"],
        ].map(([lbl, val, set, step]) => (
          <div key={lbl as string} style={{ display:"flex", flexDirection:"column" }}>
            <label style={labelCss}>{lbl as string}</label>
            <input type="number" min="0" step={step as string} value={val as string}
              onChange={e => (set as (v:string)=>void)(e.target.value)}
              style={inputCss}
              onFocus={e=>(e.target.style.borderColor=accent)}
              onBlur={e=>(e.target.style.borderColor=border)} />
          </div>
        ))}
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Rezerva na sesedání (%)</label>
          <input type="number" min="0" max="20" step="1" value={rezerva}
            onChange={e=>setRezerva(e.target.value)} style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>doporučeno 5 %</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Čistý objem</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{objem.toFixed(3)} m³</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>S rezervou ({n(rezerva)} %)</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{objemRez.toFixed(3)} m³</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{objemRez.toFixed(2)} m³</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>= cca {pytlu50} pytlů (50 kg)</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Pro nepravidelné tvary rozděl plochu na obdélníky a výsledky sečti.</span>
      </div>
    </div>
  );
}
