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

const TYPY_TRAVNIKU = [
  { label: "Rekreační (25 g/m²)",        davka: 25 },
  { label: "Okrasný (35 g/m²)",           davka: 35 },
  { label: "Odolný/sportovní (45 g/m²)", davka: 45 },
  { label: "Pro stín (30 g/m²)",          davka: 30 },
];

const TYPY_VYSEVU = [
  { label: "Nový výsev (100%)",   podil: 1.0 },
  { label: "Dosev/oprava (50%)", podil: 0.5 },
];

export default function OsivoCalculator() {
  const [delka, setDelka] = useState("10");
  const [sirka, setSirka] = useState("8");
  const [travnikIdx, setTravnikIdx] = useState(0);
  const [vysevIdx, setVysevIdx] = useState(0);

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const plocha = n(delka) * n(sirka);
  const { davka } = TYPY_TRAVNIKU[travnikIdx];
  const { podil } = TYPY_VYSEVU[vysevIdx];
  const osivoKg = Math.ceil((plocha * davka * podil) / 1000 * 10) / 10;
  const hnojivo = Math.ceil(plocha * 0.03 * 10) / 10;
  const zalevani = `~${Math.round(plocha * 5)} litrů/den po výsevu`;

  const copyText = `Trávník ${n(delka)}×${n(sirka)} m (${plocha.toFixed(0)} m²): ${osivoKg} kg osiva, ${hnojivo} kg hnojiva. ${zalevani}. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🌱</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka osiva trávníku</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Zadej rozměry plochy a typ trávníku — zjistíš přesné množství osiva i hnojiva.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka pozemku (m)</label>
          <input type="number" min="0" step="0.5" value={delka}
            onChange={e => setDelka(e.target.value)} style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Šířka pozemku (m)</label>
          <input type="number" min="0" step="0.5" value={sirka}
            onChange={e => setSirka(e.target.value)} style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Typ trávníku</label>
          <select value={travnikIdx} onChange={e => setTravnikIdx(Number(e.target.value))}
            style={{ ...inputCss, cursor:"pointer" }}>
            {TYPY_TRAVNIKU.map((t, i) => (
              <option key={i} value={i}>{t.label}</option>
            ))}
          </select>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Způsob výsevu</label>
          <select value={vysevIdx} onChange={e => setVysevIdx(Number(e.target.value))}
            style={{ ...inputCss, cursor:"pointer" }}>
            {TYPY_VYSEVU.map((t, i) => (
              <option key={i} value={i}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plocha trávníku</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plocha.toFixed(0)} m²</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Startovací hnojivo</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{hnojivo} kg</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{osivoKg} kg osiva</div>
          <div style={{ fontSize:"13px", color:"#b0b0a0", marginTop:"6px" }}>Zálivka: {zalevani}</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Nejlepší čas na výsev je <strong>duben–květen</strong> nebo <strong>srpen–září</strong>. Po výsevu udržuj půdu vlhkou alespoň 3 týdny.</span>
      </div>
    </div>
  );
}
