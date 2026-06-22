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
    try { await navigator.clipboard.writeText(text); } catch { }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} title="Zkopírovat výsledek" style={{ background:"none", border:"none", cursor:"pointer", fontSize:"16px", padding:"2px 6px", borderRadius:"6px", color: copied ? "#3a9a6f" : muted, transition:"color 200ms" }}>
      {copied ? "✓ Zkopírováno!" : "📋"}
    </button>
  );
}

export default function SdkCalculator() {
  const [delka, setDelka] = useState("3.5");
  const [vyska, setVyska] = useState("2.6");
  const [vrstvy, setVrstvy] = useState("1");
  const [svata, setSVata] = useState("ne");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const plocha = n(delka) * n(vyska);
  const deskyNaStranu = Math.ceil(plocha / 3.0);
  const desekCelkem = deskyNaStranu * 2 * n(vrstvy);
  const profileUW = Math.ceil((n(delka) / 3.0 + 1) * 2) * 3;
  const profileCW = Math.ceil(n(delka) / 0.6 + 1) * n(vyska);
  const sroubyCelkem = desekCelkem * 25;
  const baleniTmelu = Math.ceil(plocha * 2 * 0.3);
  const vataM2 = svata === "ano" ? plocha : 0;

  const copyText = `SDK příčka ${n(delka)}×${n(vyska)} m: ${desekCelkem} desek SDK, ${Math.round(profileCW)} m CW profilů, ${profileUW} m UW profilů, ${sroubyCelkem} šroubů, ${baleniTmelu} kg tmelu. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🧱</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka SDK příčky</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Zadej rozměry příčky a zjistíš potřebný počet desek, profilů a šroubů.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka příčky (m)</label>
          <input type="number" min="0" step="0.1" value={delka}
            onChange={e => setDelka(e.target.value)} style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Výška příčky (m)</label>
          <input type="number" min="0" step="0.1" value={vyska}
            onChange={e => setVyska(e.target.value)} style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Vrstvy desek na stranu</label>
          <select value={vrstvy} onChange={e => setVrstvy(e.target.value)}
            style={{ ...inputCss, cursor:"pointer" }}>
            <option value="1">1 vrstva</option>
            <option value="2">2 vrstvy</option>
          </select>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Izolace (minerální vata)</label>
          <select value={svata} onChange={e => setSVata(e.target.value)}
            style={{ ...inputCss, cursor:"pointer" }}>
            <option value="ne">Bez vaty</option>
            <option value="ano">S vatou</option>
          </select>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha příčky</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plocha.toFixed(1)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Desky SDK celkem</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{desekCelkem} ks</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>CW profily (výplňové)</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{Math.round(profileCW)} m</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>UW profily (rámové)</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{profileUW} m</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Celková spotřeba materiálu</div>
          <div style={{ fontSize:"28px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{desekCelkem} desek SDK</div>
          <div style={{ fontSize:"13px", color:"#b0b0a0", marginTop:"6px" }}>
            {sroubyCelkem} šroubů · {baleniTmelu} kg tmelu{vataM2 > 0 ? ` · ${vataM2.toFixed(1)} m² vaty` : ""}
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Přidej <strong>5–10 % rezervu</strong> na řezy a odpad. Deska SDK má standardní rozměr 1,2 × 2,5 m (3 m²).</span>
      </div>
    </div>
  );
}
