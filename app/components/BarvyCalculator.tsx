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

export default function BarvyCalculator() {
  const [delka, setDelka]         = useState("4");
  const [vyska, setVyska]         = useState("2.6");
  const [pocetSten, setPocetSten] = useState("4");
  const [okna, setOkna]           = useState("2");
  const [natery, setNatery]       = useState("2");
  const [vydatnost, setVydatnost] = useState("10");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const plocha      = n(delka) * n(vyska) * n(pocetSten);
  const cista       = Math.max(0, plocha - n(okna) * 1.5);
  const litry       = (cista * n(natery)) / n(vydatnost);
  const litryZ      = Math.ceil(litry * 10) / 10;
  const copyText    = `Potřebujete cca ${litryZ.toFixed(1)} litrů barvy na ${cista.toFixed(1)} m². Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🪣</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka barvy</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Zadej rozměry místnosti a zjistíš přesné množství barvy.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        {[
          ["Délka stěny (m)", delka, setDelka, "0.1"],
          ["Výška stěny (m)", vyska, setVyska, "0.1"],
          ["Počet stěn",      pocetSten, setPocetSten, "1"],
          ["Okna & dveře",    okna,  setOkna, "1"],
          ["Počet nátěrů",    natery, setNatery, "1"],
          ["Vydatnost (m²/l)", vydatnost, setVydatnost, "0.5"],
        ].map(([lbl, val, set, step]) => (
          <div key={lbl as string} style={{ display:"flex", flexDirection:"column" }}>
            <label style={labelCss}>{lbl as string}</label>
            <input type="number" min="0" step={step as string} value={val as string}
              onChange={(e) => (set as (v:string)=>void)(e.target.value)}
              style={inputCss}
              onFocus={e=>(e.target.style.borderColor=accent)}
              onBlur={e=>(e.target.style.borderColor=border)} />
          </div>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha celkem</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plocha.toFixed(1)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Po odečtení otvorů</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{cista.toFixed(1)} m²</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{litryZ.toFixed(1)} litrů</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{n(natery)}× nátěr · vydatnost {n(vydatnost)} m²/l</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Přidej <strong>10–15 % rezervu</strong> na opravy. Výsledek je orientační.</span>
      </div>
    </div>
  );
}
