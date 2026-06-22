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

export default function RecKoupelnyCalculator() {
  const [plocha, setPlocha]     = useState("6");
  const [cena_m2, setCena_m2]   = useState("25000");
  const [wc, setWc]             = useState("1");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const zaklad = n(plocha) * n(cena_m2);
  const wc_priplatek = n(wc) >= 1 ? n(cena_m2) * 0.8 : 0; // approx cost of toilet installation relative to standard
  const min_cena = Math.round((zaklad + wc_priplatek) * 0.85 / 1000) * 1000;
  const max_cena = Math.round((zaklad + wc_priplatek) * 1.15 / 1000) * 1000;
  const stred = Math.round((zaklad + wc_priplatek) / 1000) * 1000;

  const copyText = `Rekonstrukce koupelny ${n(plocha)} m² by měla stát přibližně ${stred.toLocaleString("cs-CZ")} Kč (rozsah ${min_cena.toLocaleString("cs-CZ")}–${max_cena.toLocaleString("cs-CZ")} Kč). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🚿</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka rekonstrukce koupelny</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Odhadni celkové náklady na rekonstrukci koupelny.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Plocha koupelny (m²)</label>
          <input type="number" min="0" step="0.5" value={plocha}
            onChange={(e) => setPlocha(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Náklady na m² (Kč)</label>
          <input type="number" min="0" step="1000" value={cena_m2}
            onChange={(e) => setCena_m2(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>ekonomická: 15 000 / střední: 25 000 / prémiová: 40 000 Kč/m²</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Záchodová mísa (0 = ne, 1 = ano)</label>
          <input type="number" min="0" step="1" value={wc}
            onChange={(e) => setWc(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>záchod přidá 15 000–30 000 Kč</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Odhad od</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{min_cena.toLocaleString("cs-CZ")} Kč</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Odhad do</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{max_cena.toLocaleString("cs-CZ")} Kč</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Střední odhad</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{stred.toLocaleString("cs-CZ")} Kč</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{n(plocha)} m² · {Number(n(cena_m2)).toLocaleString("cs-CZ")} Kč/m²</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Ceny zahrnují: demolici, instalatérské práce, elektřinu, obklady a dlažbu, sanitu a vybavení. Nezahrnují: návrh, nestandardní materiály nebo složité dispozice.</span>
      </div>
    </div>
  );
}
