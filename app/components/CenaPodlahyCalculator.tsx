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

export default function CenaPodlahyCalculator() {
  const [plocha, setPlocha] = useState("20");
  const [cena_material, setCena_material] = useState("400");
  const [pokaldka, setPokaldka] = useState("200");
  const [podlozka, setPodlozka] = useState("50");
  const [rezerva, setRezerva] = useState("10");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const plochaRez = n(plocha) * (1 + n(rezerva) / 100);
  const mat = plochaRez * n(cena_material);
  const pod = n(plocha) * n(podlozka);
  const prace = n(plocha) * n(pokaldka);
  const celkem = mat + pod + prace;

  const copyText = `Podlaha ${n(plocha)} m² vyjde přibližně na ${celkem.toFixed(0)} Kč (materiál ${mat.toFixed(0)} + podložka ${pod.toFixed(0)} + pokládka ${prace.toFixed(0)} Kč). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🪵</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka ceny podlahy</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Odhadni celkové náklady na nákup a pokládku podlahy.</p>
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
          <label style={labelCss}>Cena materiálu (Kč/m²)</label>
          <input
            type="number" min="0" step="50" value={cena_material}
            onChange={e => setCena_material(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>laminát: 200–600 / vinyl SPC: 400–900 / parket: 800–2000</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Pokládka (Kč/m²)</label>
          <input
            type="number" min="0" step="25" value={pokaldka}
            onChange={e => setPokaldka(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>kutil: 0 Kč / řemeslník: 150–300 Kč/m²</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Podložka (Kč/m²)</label>
          <input
            type="number" min="0" step="10" value={podlozka}
            onChange={e => setPodlozka(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>kročejová izolace: 30–80 Kč/m²</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Rezerva na prořez (%)</label>
          <input
            type="number" min="0" step="1" value={rezerva}
            onChange={e => setRezerva(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Materiál</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{mat.toFixed(0)} Kč</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Podložka</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pod.toFixed(0)} Kč</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Pokládka</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{prace.toFixed(0)} Kč</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Celkový odhad</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{celkem.toFixed(0)} Kč</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{n(plocha)} m² · materiál + podložka + práce</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Přidejte 10 % na prořezy. Při pokládce na šikmo nebo ve vzoru přidejte 15 %. Laminát nechte 48 h aklimatizovat před pokládkou.</span>
      </div>
    </div>
  );
}
