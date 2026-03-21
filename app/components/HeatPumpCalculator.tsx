"use client";

import { useState } from "react";

type TypTopeni = "elektrokotel" | "plyn" | "tuha-paliva";

const KONFIG: Record<TypTopeni, { label: string; uspora: number; note: string }> = {
  elektrokotel:  { label: "⚡ Elektrokotel / přímotop", uspora: 0.65, note: "COP 3 → úspora ~65 % nákladů" },
  plyn:          { label: "🔥 Plynový kotel",           uspora: 0.38, note: "vč. úspory paušálů za plyn ~38 %" },
  "tuha-paliva": { label: "🪵 Tuhá paliva (uhlí, dřevo)", uspora: 0.20, note: "komfort + úspora práce ~20 %" },
};

const n  = (v: string | number) => parseFloat(String(v).replace(/\s/g, "").replace(",", ".")) || 0;
const fmt = (v: number) => v.toLocaleString("cs-CZ", { maximumFractionDigits: 0 }) + " Kč";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* noop */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <button onClick={copy} style={{
      display:"flex", alignItems:"center", gap:"6px",
      background: copied ? "#dcfce7" : "#ddeef8",
      border: `1px solid ${copied ? "#86efac" : "#a8ccec"}`,
      borderRadius:"8px", padding:"8px 16px",
      fontSize:"13px", fontWeight:600,
      color: copied ? "#16a34a" : "#1a4a7a",
      cursor:"pointer", transition:"all 150ms", whiteSpace:"nowrap",
    }}>
      {copied ? "✓ Zkopírováno!" : "📋 Zkopírovat výsledek"}
    </button>
  );
}

function Slider({ value, min, max, step, onChange }: {
  value: number; min: number; max: number; step: number; onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <input type="range" min={min} max={max} step={step} value={value}
      onChange={e => onChange(Number(e.target.value))}
      style={{
        width:"100%", height:"4px", cursor:"pointer",
        appearance:"none", outline:"none", borderRadius:"2px",
        background:`linear-gradient(to right,#3a72aa ${pct}%,#c0d8ec ${pct}%)`,
      }} />
  );
}

export default function HeatPumpCalculator() {
  const [typ, setTyp]             = useState<TypTopeni>("plyn");
  const [naklady, setNaklady]     = useState(45000);
  const [investice, setInvestice] = useState(250000);
  const [dotace, setDotace]       = useState(100000);

  const konfig      = KONFIG[typ];
  const rocniUspora = Math.round(naklady * konfig.uspora);
  const nakladyPo   = naklady - rocniUspora;
  const cistaInv    = Math.max(0, investice - dotace);
  const navratnost  = rocniUspora > 0 ? cistaInv / rocniUspora : 0;
  const navStr      = navratnost > 0 && navratnost < 999 ? navratnost.toFixed(1) : "—";
  const navColor    = navratnost <= 7 ? "#16a34a" : navratnost <= 12 ? "#d97706" : "#dc2626";
  const navLabel    = navratnost <= 7 ? "✅ Výborná návratnost" : navratnost <= 12 ? "🟡 Dobrá návratnost" : "⚠️ Delší návratnost";
  const copyText    = `Moje odhadovaná návratnost tepelného čerpadla je ${navStr} let. Spočítáno na DomovniGuru.cz`;

  const labelCss: React.CSSProperties = {
    fontSize:"11px", fontWeight:700, letterSpacing:"0.07em",
    textTransform:"uppercase", color:"#3a6a9a", marginBottom:"6px", display:"block",
  };

  return (
    <div style={{ background:"#f0f7ff", borderRadius:"18px", padding:"28px 24px", border:"1px solid #bedaf0", fontFamily:"inherit" }}>

      {/* Hlavička */}
      <div style={{ marginBottom:"24px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"6px" }}>
          <span style={{ fontSize:"24px" }}>♨️</span>
          <h3 style={{ margin:0, fontSize:"19px", fontWeight:700, color:"#0f2233" }}>
            Kalkulačka návratnosti tepelného čerpadla
          </h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:"#4a7a9a", lineHeight:1.6 }}>
          Posuň slidery nebo zadej čísla — výsledek se přepočítá okamžitě.
        </p>
      </div>

      {/* Typ topení */}
      <div style={{ marginBottom:"20px" }}>
        <label style={labelCss}>Aktuální způsob vytápění</label>
        <select value={typ} onChange={e => setTyp(e.target.value as TypTopeni)} style={{
          width:"100%", padding:"11px 14px",
          border:"1.5px solid #a8ccec", borderRadius:"8px",
          fontSize:"15px", background:"#fff", color:"#0f2233", outline:"none", cursor:"pointer",
        }}>
          {(Object.keys(KONFIG) as TypTopeni[]).map(k => (
            <option key={k} value={k}>{KONFIG[k].label}</option>
          ))}
        </select>
        <div style={{ marginTop:"6px", fontSize:"12px" }}>
          <span style={{
            background:"#ddeef8", border:"1px solid #a8ccec",
            borderRadius:"999px", padding:"3px 12px",
            fontWeight:600, color:"#1a4a7a",
          }}>
            {konfig.note}
          </span>
        </div>
      </div>

      {/* Roční náklady se sliderem */}
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"8px" }}>
          <label style={{ ...labelCss, marginBottom:0 }}>Roční náklady na topení</label>
          <div style={{ display:"flex", alignItems:"center", gap:"4px" }}>
            <input type="number" min={1000} max={200000} step={1000} value={naklady}
              onChange={e => setNaklady(n(e.target.value))}
              style={{ width:"110px", padding:"5px 10px", border:"1.5px solid #a8ccec", borderRadius:"6px", fontSize:"14px", fontWeight:600, color:"#0f2233", background:"#fff", outline:"none", textAlign:"right" }} />
            <span style={{ fontSize:"12px", color:"#5a8aaa" }}>Kč/rok</span>
          </div>
        </div>
        <Slider value={naklady} min={5000} max={200000} step={1000} onChange={setNaklady} />
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:"10px", color:"#7aa0ba", marginTop:"3px" }}>
          <span>5 000 Kč</span><span>200 000 Kč</span>
        </div>
      </div>

      {/* Investice + dotace */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px", marginBottom:"22px" }}>
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"8px" }}>
            <label style={{ ...labelCss, marginBottom:0 }}>Investice (Kč)</label>
            <input type="number" min={0} step={10000} value={investice}
              onChange={e => setInvestice(n(e.target.value))}
              style={{ width:"90px", padding:"4px 8px", border:"1.5px solid #a8ccec", borderRadius:"6px", fontSize:"13px", fontWeight:600, color:"#0f2233", background:"#fff", outline:"none", textAlign:"right" }} />
          </div>
          <Slider value={investice} min={100000} max={600000} step={10000} onChange={setInvestice} />
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:"10px", color:"#7aa0ba", marginTop:"3px" }}>
            <span>100 k</span><span>600 k</span>
          </div>
        </div>
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"8px" }}>
            <label style={{ ...labelCss, marginBottom:0 }}>Dotace NZÚ (Kč)</label>
            <input type="number" min={0} max={200000} step={10000} value={dotace}
              onChange={e => setDotace(n(e.target.value))}
              style={{ width:"90px", padding:"4px 8px", border:"1.5px solid #a8ccec", borderRadius:"6px", fontSize:"13px", fontWeight:600, color:"#0f2233", background:"#fff", outline:"none", textAlign:"right" }} />
          </div>
          <Slider value={dotace} min={0} max={200000} step={10000} onChange={setDotace} />
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:"10px", color:"#7aa0ba", marginTop:"3px" }}>
            <span>0 Kč</span><span>200 000 Kč</span>
          </div>
        </div>
      </div>

      {/* Mezivýsledky */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))", gap:"10px", marginBottom:"16px" }}>
        {[
          { label:"Náklady nyní",    value:fmt(naklady),     color:"#dc2626" },
          { label:"Náklady po TČ",   value:fmt(nakladyPo),   color:"#1d4ed8" },
          { label:"Roční úspora",    value:fmt(rocniUspora), color:"#16a34a" },
          { label:"Čistá investice", value:fmt(cistaInv),    color:"#0f2233" },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ background:"#fff", border:"1px solid #bedaf0", borderRadius:"10px", padding:"11px 14px" }}>
            <div style={{ fontSize:"10px", color:"#6a9aba", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>{label}</div>
            <div style={{ fontSize:"15px", fontWeight:700, color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* HLAVNÍ VÝSLEDEK */}
      <div style={{ background:"#0f2233", borderRadius:"14px", padding:"24px", position:"relative", overflow:"hidden" }}>
        {/* Dekorativní kruh */}
        <div style={{ position:"absolute", top:"-50px", right:"-50px", width:"180px", height:"180px", borderRadius:"50%", background:navColor, opacity:0.10, pointerEvents:"none" }} />

        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:"16px" }}>
          <div>
            <div style={{ fontSize:"11px", color:"#5a8aaa", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"8px" }}>
              Investice se vrátí za
            </div>
            <div style={{ display:"flex", alignItems:"baseline", gap:"10px", marginBottom:"10px" }}>
              <span style={{
                fontSize:"clamp(52px,10vw,72px)",
                fontWeight:900,
                color:navColor,
                lineHeight:1,
                letterSpacing:"-0.02em",
              }}>
                {navStr}
              </span>
              {navratnost > 0 && navratnost < 999 && (
                <span style={{ fontSize:"22px", color:"#5a8aaa", fontWeight:400 }}>let</span>
              )}
            </div>
            <div style={{ fontSize:"13px", color:"#6a9aba" }}>
              Roční úspora <span style={{ color:"#fff", fontWeight:700 }}>{fmt(rocniUspora)}</span>
              {" · "}
              Čistá invest. <span style={{ color:"#fff", fontWeight:700 }}>{fmt(cistaInv)}</span>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"10px" }}>
            {navratnost > 0 && (
              <div style={{
                background:navColor+"22", border:`1px solid ${navColor}55`,
                borderRadius:"999px", padding:"6px 14px",
                fontSize:"13px", fontWeight:700, color:navColor,
              }}>
                {navLabel}
              </div>
            )}
            <CopyButton text={copyText} />
          </div>
        </div>

        {/* Progress bar */}
        {navratnost > 0 && navratnost < 30 && (
          <div style={{ marginTop:"20px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:"10px", color:"#4a7a9a", marginBottom:"5px" }}>
              <span>0</span><span style={{ color:"#16a34a" }}>7 let ✅</span><span style={{ color:"#d97706" }}>12 let</span><span>30 let</span>
            </div>
            <div style={{ height:"6px", background:"#081522", borderRadius:"3px", overflow:"hidden" }}>
              <div style={{
                height:"100%",
                width:`${Math.min((navratnost / 30) * 100, 100)}%`,
                background:`linear-gradient(to right,#22c55e,${navColor})`,
                borderRadius:"3px", transition:"width 300ms ease",
              }} />
            </div>
          </div>
        )}
      </div>

      {/* Tip */}
      <div style={{ marginTop:"14px", background:"#ddeef8", border:"1px solid #a8ccec", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#1a4a7a", display:"flex", gap:"8px", alignItems:"flex-start" }}>
        <span style={{ flexShrink:0 }}>ℹ️</span>
        <span>
          <strong>Orientační odhad.</strong> Reálná návratnost závisí na SCOP čerpadla, zateplení domu a tarifu D57d.
          Doporučujeme energetický audit od certifikovaného poradce.
        </span>
      </div>
    </div>
  );
}
