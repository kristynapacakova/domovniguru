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

export default function SpotrebaVodyCalculator() {
  const [osoby, setOsoby] = useState("2");
  const [sprchy, setSprchy] = useState("1");
  const [delkaSprchy, setDelkaSprchy] = useState("7");
  const [koupele, setKoupele] = useState("1");
  const [splachovani, setSplachovani] = useState("5");
  const [cenaVody, setCenaVody] = useState("110");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const litruSprcha = n(osoby) * n(sprchy) * n(delkaSprchy) * 9 * 365;
  const litruKoupel = n(osoby) * n(koupele) * 150 * 52;
  const litruWC = n(osoby) * n(splachovani) * 6 * 365;
  const litruOstatni = n(osoby) * 50 * 365;

  const litruRok = litruSprcha + litruKoupel + litruWC + litruOstatni;
  const m3rok = litruRok / 1000;
  const kcRok = m3rok * n(cenaVody);

  const copyText = `Vaše domácnost spotřebuje přibližně ${m3rok.toFixed(1)} m³ vody ročně (${kcRok.toFixed(0)} Kč). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>💧</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka spotřeby vody</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej roční spotřebu vody domácnosti a kolik za ni zaplatíš.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Počet osob</label>
          <input
            type="number" min="1" max="10" step="1" value={osoby}
            onChange={e => setOsoby(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Cena vody (Kč/m³)</label>
          <input
            type="number" min="0" step="5" value={cenaVody}
            onChange={e => setCenaVody(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Sprchy za den na osobu</label>
          <input
            type="number" min="0" step="0.5" value={sprchy}
            onChange={e => setSprchy(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka sprchy (minuty)</label>
          <input
            type="number" min="1" step="1" value={delkaSprchy}
            onChange={e => setDelkaSprchy(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Koupele za týden na osobu</label>
          <input
            type="number" min="0" step="0.5" value={koupele}
            onChange={e => setKoupele(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Splachování WC/den/osoba</label>
          <input
            type="number" min="0" step="1" value={splachovani}
            onChange={e => setSplachovani(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
      </div>

      <div style={{ marginBottom:"14px" }}>
        <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a60", marginBottom:"10px" }}>
          Rozložení spotřeby:
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", overflow:"hidden" }}>
          {[
            { label:"Sprchování", litry: litruSprcha },
            { label:"Koupele",    litry: litruKoupel },
            { label:"Splachování WC", litry: litruWC },
            { label:"Pitná voda / vaření / jiné", litry: litruOstatni },
          ].map((row, i, arr) => (
            <div key={row.label} style={{ display:"grid", gridTemplateColumns:"1fr auto", alignItems:"center", padding:"10px 14px", borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none" }}>
              <div style={{ fontSize:"14px", color:"#2a2a28" }}>{row.label}</div>
              <div style={{ fontSize:"14px", fontWeight:600, color:"#2a2a28", textAlign:"right" }}>
                {row.litry.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} l/rok
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Spotřeba / rok</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{m3rok.toFixed(1)} m³</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Náklady / rok</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{kcRok.toFixed(0)} Kč</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Výsledek</div>
          <div style={{ fontSize:"22px", fontWeight:800, color:"#fff", lineHeight:1.2 }}>
            Vaše domácnost spotřebuje přibližně {m3rok.toFixed(1)} m³ vody ročně ({kcRok.toFixed(0)} Kč)
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Průměrná česká domácnost spotřebuje 80–120 litrů vody na osobu a den. Největší podíl tvoří sprchování a splachování WC.</span>
      </div>
    </div>
  );
}
