"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display:"block", fontSize:"11px", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a60", marginBottom:"6px" };
const inputCss: React.CSSProperties = { width:"100%", padding:"10px 14px", border:`1.5px solid ${border}`, borderRadius:"8px", fontSize:"15px", background:"#fff", color:"#2a2a28", outline:"none", boxSizing:"border-box", transition:"border-color 150ms" };

const APPLIANCES = [
  { name: "Lednice",        w: "150",  h: "24"  },
  { name: "Mraznička",      w: "100",  h: "24"  },
  { name: "Pračka",         w: "800",  h: "1"   },
  { name: "Myčka nádobí",   w: "1200", h: "0.5" },
  { name: "TV / monitor",   w: "100",  h: "4"   },
  { name: "Osvětlení LED",  w: "150",  h: "5"   },
  { name: "Bojler",         w: "2000", h: "1"   },
  { name: "Varná deska",    w: "1500", h: "1"   },
];

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

export default function SpotrebaElektCalculator() {
  const [data, setData] = useState(APPLIANCES);
  const [cena, setCena] = useState("5.5");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const updateAppliance = (i: number, field: "w" | "h", val: string) => {
    setData(prev => prev.map((a, idx) => idx === i ? { ...a, [field]: val } : a));
  };

  const kwh_rok = data.reduce((sum, a) => sum + n(a.w) * n(a.h) * 365 / 1000, 0);
  const kc_rok = kwh_rok * n(cena);
  const kwh_den = kwh_rok / 365;

  const copyText = `Vaše domácnost spotřebuje přibližně ${kwh_rok.toFixed(0)} kWh/rok (${kc_rok.toFixed(0)} Kč). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>⚡</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka spotřeby elektřiny</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej roční spotřebu domácnosti a kolik za ni zaplatíš.</p>
      </div>

      <div style={{ marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Cena elektřiny (Kč/kWh)</label>
          <input
            type="number" min="0" step="0.1" value={cena}
            onChange={e => setCena(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
      </div>

      <div style={{ marginBottom:"12px" }}>
        <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a60", marginBottom:"10px" }}>
          Spotřebiče – upravte příkon a hodiny/den:
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 100px 100px", gap:"8px", alignItems:"center", marginBottom:"6px" }}>
          <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", color:"#8a8a80" }}>Spotřebič</div>
          <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", color:"#8a8a80" }}>(W) příkon</div>
          <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", color:"#8a8a80" }}>(h/den) hodiny</div>
        </div>
        {data.map((a, i) => (
          <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 100px 100px", gap:"8px", alignItems:"center", marginBottom:"6px" }}>
            <div style={{ fontSize:"14px", color:"#2a2a28" }}>{a.name}</div>
            <input
              type="number" min="0" step="10" value={a.w}
              onChange={e => updateAppliance(i, "w", e.target.value)}
              style={inputCss}
              onFocus={e => (e.target.style.borderColor = accent)}
              onBlur={e => (e.target.style.borderColor = border)}
            />
            <input
              type="number" min="0" step="0.5" value={a.h}
              onChange={e => updateAppliance(i, "h", e.target.value)}
              style={inputCss}
              onFocus={e => (e.target.style.borderColor = accent)}
              onBlur={e => (e.target.style.borderColor = border)}
            />
          </div>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Spotřeba / den</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{kwh_den.toFixed(2)} kWh</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Spotřeba / rok</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{kwh_rok.toFixed(0)} kWh</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Roční náklady přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{kc_rok.toFixed(0)} Kč/rok</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{kwh_rok.toFixed(0)} kWh × {n(cena)} Kč/kWh</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Největší spotřebiče jsou bojler, pračka a lednice. LED osvětlení oproti žárovkám šetří 80 % energie. Výsledek je orientační.</span>
      </div>
    </div>
  );
}
