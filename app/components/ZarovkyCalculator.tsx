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

const TYPY_MISTNOSTI: { value: string; label: string; lmM2: number }[] = [
  { value: "kuchyne", label: "Kuchyně", lmM2: 300 },
  { value: "obyvak", label: "Obývací pokoj", lmM2: 150 },
  { value: "loznice", label: "Ložnice", lmM2: 100 },
  { value: "koupelna", label: "Koupelna", lmM2: 200 },
  { value: "pracovna", label: "Pracovna / kancelář", lmM2: 250 },
];

export default function ZarovkyCalculator() {
  const [plocha, setPlocha] = useState("20");
  const [typ, setTyp] = useState("obyvak");
  const [vykonZarovky, setVykonZarovky] = useState("800");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const lmM2 = TYPY_MISTNOSTI.find(t => t.value === typ)?.lmM2 ?? 150;
  const potrebneLumeny = n(plocha) * lmM2;
  const pocetZarovek = n(vykonZarovky) > 0 ? Math.ceil(potrebneLumeny / n(vykonZarovky)) : 0;

  const copyText = `Místnost ${plocha} m² potřebuje přibližně ${potrebneLumeny.toFixed(0)} lm, tedy ${pocetZarovek} LED žárovek (${vykonZarovky} lm/ks). Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>💡</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka počtu žárovek</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej, kolik LED žárovek a kolik lumenů potřebuje tvoje místnost.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Plocha místnosti (m²)</label>
          <input
            type="number" min="0" step="1" value={plocha}
            onChange={e => setPlocha(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Typ místnosti</label>
          <select
            value={typ}
            onChange={e => setTyp(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          >
            {TYPY_MISTNOSTI.map(t => (
              <option key={t.value} value={t.value}>{t.label} ({t.lmM2} lm/m²)</option>
            ))}
          </select>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Výkon 1 LED žárovky (lm)</label>
          <input
            type="number" min="0" step="50" value={vykonZarovky}
            onChange={e => setVykonZarovky(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>800 lm ≈ 60 W / 1000 lm ≈ 75 W / 1500 lm ≈ 100 W klasické žárovky</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebné lumeny celkem</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{potrebneLumeny.toFixed(0)} lm</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Lumeny na m² (typ místnosti)</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{lmM2} lm/m²</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Doporučený počet žárovek</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{pocetZarovek} ks</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{potrebneLumeny.toFixed(0)} lm ÷ {vykonZarovky} lm/ks</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Místo jedné silné stropní žárovky zvolte raději více slabších svítidel rozmístěných po místnosti – světlo bude rovnoměrnější a bez tvrdých stínů.</span>
      </div>
    </div>
  );
}
