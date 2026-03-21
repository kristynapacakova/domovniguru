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

export default function TapetyCalculator() {
  const [obvod, setObvod]   = useState("14");
  const [vyska, setVyska]   = useState("2.6");
  const [okna, setOkna]     = useState("2");
  const [roleSirka, setRoleSirka] = useState("0.53");
  const [roleDel, setRoleDel]     = useState("10.05");
  const [raport, setRaport]       = useState("0");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const stenyM2    = n(obvod) * n(vyska) - n(okna) * 1.8;
  const raportu    = n(raport);
  // Výška pásu s raportem
  const vyskasPas  = raportu > 0 ? Math.ceil(n(vyska) / raportu) * raportu : n(vyska);
  const pasyZRole  = n(roleDel) > 0 ? Math.floor(n(roleDel) / vyskasPas) : 0;
  const sirkaRole  = n(roleSirka);
  const pocetPasuCelkem = sirkaRole > 0 ? Math.ceil(n(obvod) / sirkaRole) : 0;
  const pocetRoli  = pasyZRole > 0 ? Math.ceil(pocetPasuCelkem / pasyZRole) : 0;
  const copyText   = `Potřebujete ${pocetRoli} rolí tapet (${stenyM2.toFixed(1)} m² stěn). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🖼️</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka tapet</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Počítá role tapet včetně odpadu na vzor (raport).</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        {[
          ["Obvod místnosti (m)", obvod, setObvod, "0.1"],
          ["Výška stropů (m)", vyska, setVyska, "0.1"],
          ["Okna & dveře (ks)", okna, setOkna, "1"],
          ["Šířka role (m)", roleSirka, setRoleSirka, "0.01"],
          ["Délka role (m)", roleDel, setRoleDel, "0.05"],
          ["Raport vzoru (m)", raport, setRaport, "0.05"],
        ].map(([lbl, val, set, step]) => (
          <div key={lbl as string} style={{ display:"flex", flexDirection:"column" }}>
            <label style={labelCss}>{lbl as string}</label>
            <input type="number" min="0" step={step as string} value={val as string}
              onChange={e=>(set as (v:string)=>void)(e.target.value)}
              style={inputCss}
              onFocus={e=>(e.target.style.borderColor=accent)}
              onBlur={e=>(e.target.style.borderColor=border)} />
            {lbl === "Raport vzoru (m)" && <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>0 = bez vzoru</span>}
          </div>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha stěn</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{stenyM2.toFixed(1)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Pásy z 1 role</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pasyZRole > 0 ? pasyZRole : "—"}</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{pocetRoli} rolí</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>tapet {Math.round(n(roleSirka)*100)} cm × {n(roleDel)} m</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Kupuj role ze <strong>stejné šarže</strong> (číslo na etiketě) — jiná šarže může mít odlišný odstín.</span>
      </div>
    </div>
  );
}
