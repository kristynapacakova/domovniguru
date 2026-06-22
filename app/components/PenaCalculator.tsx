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

export default function PenaCalculator() {
  const [pocet_oken, setPocet_oken]       = useState("3");
  const [pocet_dveri, setPocet_dveri]     = useState("2");
  const [obvod_okna, setObvod_okna]       = useState("280");
  const [obvod_dveri, setObvod_dveri]     = useState("350");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const celkem_cm = n(pocet_oken) * n(obvod_okna) + n(pocet_dveri) * n(obvod_dveri);
  const celkem_m = celkem_cm / 100;
  const plechovek = Math.ceil(celkem_m / 10);

  const copyText = `Potřebujete ${plechovek} plechovek montážní pěny na ${celkem_m.toFixed(1)} m spár. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>💨</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka montážní pěny</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej kolik plechovek PU pěny potřebuješ na okna a dveře.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Počet oken</label>
          <input type="number" min="0" step="1" value={pocet_oken}
            onChange={(e) => setPocet_oken(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Počet dveří</label>
          <input type="number" min="0" step="1" value={pocet_dveri}
            onChange={(e) => setPocet_dveri(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Obvod jednoho okna (cm)</label>
          <input type="number" min="0" step="10" value={obvod_okna}
            onChange={(e) => setObvod_okna(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>standard 120×90 cm → 420 cm</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Obvod jedněch dveří (cm)</label>
          <input type="number" min="0" step="10" value={obvod_dveri}
            onChange={(e) => setObvod_dveri(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>standard 90×200 cm → 580 cm</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Délka spár celkem</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{celkem_m.toFixed(1)} m</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Plechovek 750 ml</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{plechovek} ks</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{plechovek} plechovek pěny</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>({celkem_m.toFixed(1)} m spár, 1 plechovka ≈ 10 bm)</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Plechovka 750 ml pokryje přibližně 8–12 bm spár. Pěnu nanášejte ve 2 vrstvách po 1–2 cm, nechte 15 min mezi vrstvami. Přebytek po vytvrzení odřízněte.</span>
      </div>
    </div>
  );
}
