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

export default function StresniTaskyCalculator() {
  const [plocha, setPlocha]             = useState("80");
  const [sklon_faktor, setSklon_faktor] = useState("1.15");
  const [tasek_m2, setTasek_m2]         = useState("12");
  const [rezerva, setRezerva]           = useState("10");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const plocha_sklonu = n(plocha) * n(sklon_faktor);
  const plocha_rez = plocha_sklonu * (1 + n(rezerva) / 100);
  const pocet = Math.ceil(plocha_rez * n(tasek_m2));

  const copyText = `Potřebujete ${pocet} střešních tašek na ${plocha_sklonu.toFixed(1)} m² (půdorys ${n(plocha)} m², koeficient ${n(sklon_faktor)}). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🏠</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka střešních tašek</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej počet tašek na pokrytí střechy s rezervou.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Půdorysná plocha střechy (m²)</label>
          <input type="number" min="0" step="5" value={plocha}
            onChange={(e) => setPlocha(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Koeficient sklonu střechy</label>
          <input type="number" min="0" step="0.01" value={sklon_faktor}
            onChange={(e) => setSklon_faktor(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>plochá: 1,00 / 20°: 1,06 / 30°: 1,15 / 45°: 1,41</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Tašek na 1 m² střechy (ks)</label>
          <input type="number" min="0" step="1" value={tasek_m2}
            onChange={(e) => setTasek_m2(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>betonová taška: 10–14 ks / keramická: 9–12 ks</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Rezerva (%)</label>
          <input type="number" min="0" step="1" value={rezerva}
            onChange={(e) => setRezerva(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha střechy</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plocha_sklonu.toFixed(1)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Počet tašek</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pocet} ks</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{pocet} střešních tašek</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{plocha_sklonu.toFixed(1)} m² · {n(tasek_m2)} ks/m² · rezerva {n(rezerva)} %</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Koeficient sklonu: 15° = 1,04 / 20° = 1,06 / 30° = 1,15 / 45° = 1,41. Přidejte vždy min. 10 % rezervu na ztráty a zlomy u okapů a hřebene.</span>
      </div>
    </div>
  );
}
