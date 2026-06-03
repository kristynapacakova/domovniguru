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

type TvarnicTyp = "ytong175" | "porotherm30" | "ytong30" | "klasicka";

const TVARNICE: Record<TvarnicTyp, { label: string; naM2: number; paletaKs: number }> = {
  ytong175:    { label: "Ytong P4-500 (17,5 cm)", naM2: 14.7, paletaKs: 30 },
  porotherm30: { label: "Porotherm 30 (30 cm)",   naM2: 16,   paletaKs: 60 },
  ytong30:     { label: "Ytong P2-400 (30 cm)",   naM2: 8,    paletaKs: 30 },
  klasicka:    { label: "Klasická cihla (25 cm)",  naM2: 51,   paletaKs: 300 },
};

export default function CihelCalculator() {
  const [delka, setDelka] = useState("5");
  const [vyska, setVyska] = useState("2.6");
  const [typ, setTyp] = useState<TvarnicTyp>("ytong175");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const plocha = n(delka) * n(vyska);
  const { naM2, paletaKs } = TVARNICE[typ];
  const pocetCihel = Math.ceil(plocha * naM2 * 1.05);
  const pocetPalet = Math.ceil(pocetCihel / paletaKs);

  const copyText = `Zeď ${n(delka)}×${n(vyska)} m (${TVARNICE[typ].label}): ${pocetCihel} cihel/tvárnic, ${pocetPalet} palet. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🏗️</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka cihel a tvárnic</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Zadej rozměry zdi a typ zdiva — kalkulačka spočítá počet kusů i palet.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka zdi (m)</label>
          <input type="number" min="0" step="0.1" value={delka}
            onChange={e => setDelka(e.target.value)} style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Výška zdi (m)</label>
          <input type="number" min="0" step="0.1" value={vyska}
            onChange={e => setVyska(e.target.value)} style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column", gridColumn:"span 2" }}>
          <label style={labelCss}>Typ zdiva</label>
          <select value={typ} onChange={e => setTyp(e.target.value as TvarnicTyp)}
            style={{ ...inputCss, cursor:"pointer" }}>
            {(Object.entries(TVARNICE) as [TvarnicTyp, typeof TVARNICE[TvarnicTyp]][]).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha zdi</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plocha.toFixed(1)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Spotřeba na m²</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{naM2} ks/m²</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{pocetCihel} kusů</div>
          <div style={{ fontSize:"13px", color:"#b0b0a0", marginTop:"6px" }}>{pocetPalet} {pocetPalet === 1 ? "paleta" : pocetPalet < 5 ? "palety" : "palet"} · {paletaKs} ks/paleta · vč. 5% ztratného</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Nezapomeň odečíst plochu otvorů (okna, dveře). Kalkulačka počítá plnou plochu zdi.</span>
      </div>
    </div>
  );
}
