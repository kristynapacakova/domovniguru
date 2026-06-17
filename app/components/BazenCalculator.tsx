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

export default function BazenCalculator() {
  const [delka, setDelka] = useState("6");
  const [sirka, setSirka] = useState("3");
  const [hloubka, setHloubka] = useState("1.3");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const objemM3 = n(delka) * n(sirka) * n(hloubka);
  const litry = objemM3 * 1000;
  const sokovaChlorace = (objemM3 * 20) / 1000; // 20 g/m3 -> kg
  const udrzbovaChlorace = (objemM3 * 5) / 1000; // 5 g/m3/týden -> kg/týden

  const copyText = `Objem mého bazénu je přibližně ${objemM3.toFixed(1)} m³ (${litry.toFixed(0)} l). Šoková dezinfekce: ${sokovaChlorace.toFixed(2)} kg chlóru, údržbová chlorace: ${udrzbovaChlorace.toFixed(2)} kg/týden. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🏊</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka objemu bazénu</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej objem vody v bazénu a doporučenou dávku chlóru.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka bazénu (m)</label>
          <input
            type="number" min="0" step="0.1" value={delka}
            onChange={e => setDelka(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Šířka bazénu (m)</label>
          <input
            type="number" min="0" step="0.1" value={sirka}
            onChange={e => setSirka(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Průměrná hloubka (m)</label>
          <input
            type="number" min="0" step="0.1" value={hloubka}
            onChange={e => setHloubka(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>u oválných/nepravidelných tvarů použij průměr mělčiny a hloubky</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Šoková dezinfekce</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{sokovaChlorace.toFixed(2)} kg</div>
          <div style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>orientačně 20 g/m³</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Údržbová chlorace</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{udrzbovaChlorace.toFixed(2)} kg/týden</div>
          <div style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>orientačně 5 g/m³/týden</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Celkový objem bazénu</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{litry.toFixed(0)} litrů</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{objemM3.toFixed(1)} m³ ({delka || 0} × {sirka || 0} × {hloubka || 0} m)</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Udržujte pH vody v rozsahu 7,2–7,6 a volný chlor 1–3 mg/l. Šokovou dezinfekci aplikujte při zprovoznění bazénu, po silných dešťích nebo přemnožení řas, běžnou chloraci pak týdně podle skutečné spotřeby a zatížení bazénu.</span>
      </div>
    </div>
  );
}
