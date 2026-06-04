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

export default function PrknaCalculator() {
  const [delkaTerasy, setDelkaTerasy]   = useState("4");
  const [sirkaTerasy, setSirkaTerasy]   = useState("3");
  const [delkaPrkna, setDelkaPrkna]     = useState("2.5");
  const [sirkaPrkna, setSirkaPrkna]     = useState("120");
  const [spara, setSpara]               = useState("5");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const plochaTerasy = n(delkaTerasy) * n(sirkaTerasy);
  const roztecM = (n(sirkaPrkna) + n(spara)) / 1000;
  const radku = roztecM > 0 ? Math.ceil(n(sirkaTerasy) / roztecM) : 0;
  const prkenNaRadu = n(delkaPrkna) > 0 ? Math.ceil(n(delkaTerasy) / n(delkaPrkna)) : 0;
  const pocet = radku * prkenNaRadu;

  const copyText = `Potřebujete ${pocet} kusů prken (${n(delkaPrkna)} m × ${n(sirkaPrkna)} mm) na terasu ${n(delkaTerasy)} × ${n(sirkaTerasy)} m. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🪵</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka prken na terasu</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej počet prken na dřevěnou terasu nebo pódium.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka terasy (m)</label>
          <input type="number" min="0" step="0.1" value={delkaTerasy}
            onChange={(e) => setDelkaTerasy(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Šířka terasy (m)</label>
          <input type="number" min="0" step="0.1" value={sirkaTerasy}
            onChange={(e) => setSirkaTerasy(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka prkna (m)</label>
          <input type="number" min="0" step="0.1" value={delkaPrkna}
            onChange={(e) => setDelkaPrkna(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>standard 2,0–4,0 m</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Šířka prkna (mm)</label>
          <input type="number" min="0" step="5" value={sirkaPrkna}
            onChange={(e) => setSirkaPrkna(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>standard 90–145 mm</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Šířka spáry (mm)</label>
          <input type="number" min="0" step="1" value={spara}
            onChange={(e) => setSpara(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>doporučeno 4–6 mm</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha terasy</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plochaTerasy.toFixed(2)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Počet prken</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pocet} ks</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{pocet} kusů prken</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{n(delkaPrkna)} m × {n(sirkaPrkna)} mm, spára {n(spara)} mm</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Dřevo se v létě rozpíná a v zimě smršťuje. Spára 4–6 mm je optimum pro většinu dřevin. Při objednávce přidejte 10 % rezervu na řezy a vadné kusy.</span>
      </div>
    </div>
  );
}
