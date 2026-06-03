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

type TypStrechy = "sedlova" | "pultova" | "valbova";
type TypKrytiny = "betonova" | "palena" | "sindele" | "vlaknoc";

const TYPY_STRECHY: Record<TypStrechy, { label: string; koef: number }> = {
  sedlova: { label: "Sedlová (×2 svahy)",  koef: 2   },
  pultova: { label: "Pultová (×1 svah)",   koef: 1   },
  valbova: { label: "Valbová (×2.2)",       koef: 2.2 },
};

const TYPY_KRYTINY: Record<TypKrytiny, { label: string; naM2: number; paletaKs: number }> = {
  betonova: { label: "Betonová taška (10 ks/m²)",         naM2: 10, paletaKs: 200 },
  palena:   { label: "Pálená taška (12 ks/m²)",           naM2: 12, paletaKs: 200 },
  sindele:  { label: "Šindele (7 ks/m²)",                 naM2: 7,  paletaKs: 100 },
  vlaknoc:  { label: "Vláknocementová (5 ks/m²)",         naM2: 5,  paletaKs: 40  },
};

export default function StrechaCalculator() {
  const [hrebenDelka, setHrebenDelka] = useState("8");
  const [krokevDelka, setKrokevDelka] = useState("5");
  const [typStrechy, setTypStrechy] = useState<TypStrechy>("sedlova");
  const [typKrytiny, setTypKrytiny] = useState<TypKrytiny>("betonova");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const { koef } = TYPY_STRECHY[typStrechy];
  const { naM2, paletaKs } = TYPY_KRYTINY[typKrytiny];
  const plochaSvahy = n(hrebenDelka) * n(krokevDelka) * koef;
  const tasekCelkem = Math.ceil(plochaSvahy * naM2 * 1.05);
  const pocetPalet = Math.ceil(tasekCelkem / paletaKs);

  const copyText = `Střecha ${n(hrebenDelka)}×${n(krokevDelka)} m (${TYPY_STRECHY[typStrechy].label}): ${plochaSvahy.toFixed(1)} m² plochy, ${tasekCelkem} tašek, ${pocetPalet} palet. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🏠</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka střešních tašek</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Zadej rozměry střechy a typ krytiny — kalkulačka spočítá počet tašek i palet.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka hřebene (m)</label>
          <input type="number" min="0" step="0.5" value={hrebenDelka}
            onChange={e => setHrebenDelka(e.target.value)} style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka krokve (m)</label>
          <input type="number" min="0" step="0.5" value={krokevDelka}
            onChange={e => setKrokevDelka(e.target.value)} style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Typ střechy</label>
          <select value={typStrechy} onChange={e => setTypStrechy(e.target.value as TypStrechy)}
            style={{ ...inputCss, cursor:"pointer" }}>
            {(Object.entries(TYPY_STRECHY) as [TypStrechy, typeof TYPY_STRECHY[TypStrechy]][]).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Typ krytiny</label>
          <select value={typKrytiny} onChange={e => setTypKrytiny(e.target.value as TypKrytiny)}
            style={{ ...inputCss, cursor:"pointer" }}>
            {(Object.entries(TYPY_KRYTINY) as [TypKrytiny, typeof TYPY_KRYTINY[TypKrytiny]][]).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha střechy</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plochaSvahy.toFixed(1)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Spotřeba na m²</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{naM2} ks/m²</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{tasekCelkem} tašek</div>
          <div style={{ fontSize:"13px", color:"#b0b0a0", marginTop:"6px" }}>{pocetPalet} {pocetPalet === 1 ? "paleta" : pocetPalet < 5 ? "palety" : "palet"} · {paletaKs} ks/paleta · vč. 5% rezervy</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Délka krokve se měří od hřebene po okapnici (šikmá délka, ne výška štítu). Přidej <strong>5 % rezervu</strong> na řezy a odpad.</span>
      </div>
    </div>
  );
}
