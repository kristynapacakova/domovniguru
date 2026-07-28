"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#6a6a60", marginBottom: "6px" };
const inputCss: React.CSSProperties = { width: "100%", padding: "10px 14px", border: `1.5px solid ${border}`, borderRadius: "8px", fontSize: "15px", background: "#fff", color: "#2a2a28", outline: "none", boxSizing: "border-box", transition: "border-color 150ms" };

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /**/ }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} title="Zkopírovat výsledek" style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", padding: "2px 6px", borderRadius: "6px", color: copied ? "#3a9a6f" : muted }}>
      {copied ? "✓ Zkopírováno!" : "📋"}
    </button>
  );
}

export default function SchnutiPoteruCalculator() {
  const [tloustka, setTloustka] = useState("50");
  const [typ, setTyp]           = useState("cement");
  const [topeni, setTopeni]     = useState(false);

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const t = n(tloustka); // mm

  // Rule of thumb (dny):
  // Cement: do 40 mm ≈ 1 týden na cm (t/10*7); nad 40 mm každý další cm ≈ 2 týdny (28 + (t-40)/10*14).
  // Anhydrit: mírně rychlejší základ (t/10*6.5) do 40 mm; nad 40 mm pomaleji.
  let dny = 0;
  if (typ === "cement") {
    dny = t <= 40 ? (t / 10) * 7 : 28 + ((t - 40) / 10) * 14;
  } else {
    dny = t <= 40 ? (t / 10) * 6.5 : 26 + ((t - 40) / 10) * 13;
  }
  // Podlahové topení – funkčním vytápěním (topná zkouška) lze schnutí urychlit.
  if (topeni) dny = dny * 0.75;

  const dniZaokrouhleno = Math.ceil(dny);
  const tydny = dny / 7;

  // Doporučená zbytková vlhkost (CM metoda)
  const vlhkost = typ === "cement"
    ? (topeni ? "≤ 1,8 % CM" : "≤ 2,0 % CM")
    : (topeni ? "≤ 0,3 % CM" : "≤ 0,5 % CM");

  const typLabel = typ === "cement" ? "Cementový" : "Anhydritový";

  const copyText = `Orientační doba schnutí potěru (${typLabel.toLowerCase()}, ${t} mm${topeni ? ", s podlahovým topením" : ""}): přibližně ${dniZaokrouhleno} dní (${tydny.toFixed(1)} týdne) před pokládkou podlahy. Doporučená zbytková vlhkost ${vlhkost}. Vždy změřte metodou CM. Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>⏱️</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka doby schnutí potěru</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej tloušťku a typ potěru — kalkulačka spočítá orientační dobu schnutí, kdy je možné pokládat podlahu.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Tloušťka potěru (mm)</label>
          <input type="number" min="10" max="120" step="5" value={tloustka} onChange={e => setTloustka(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>běžně 40–70 mm</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Typ potěru</label>
          <select value={typ} onChange={e => setTyp(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)}>
            <option value="cement">Cementový</option>
            <option value="anhydrit">Anhydritový</option>
          </select>
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>anhydrit schne o něco rychleji</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <label style={labelCss}>Podlahové topení</label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", border: `1.5px solid ${border}`, borderRadius: "8px", background: "#fff", cursor: "pointer", fontSize: "15px", color: "#2a2a28", boxSizing: "border-box" }}>
            <input type="checkbox" checked={topeni} onChange={e => setTopeni(e.target.checked)} style={{ width: "18px", height: "18px", accentColor: accent, cursor: "pointer" }} />
            {topeni ? "Ano – s topnou zkouškou" : "Ne"}
          </label>
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>funkční vytápění schnutí urychlí</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Typ potěru</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{typLabel}</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Min. doba pochozí</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>24–48 h</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Doporučená zbytková vlhkost</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{vlhkost}</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Orientačně v týdnech</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{tydny.toFixed(1)} týdne</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Orientační doba schnutí před pokládkou podlahy</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>≈ {dniZaokrouhleno} dní</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            tj. přibližně {tydny.toFixed(1)} týdne {topeni ? " · zkráceno funkčním vytápěním" : ""}
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fff4f0", border: "1px solid #e8b090", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#8a4a20", display: "flex", gap: "8px" }}>
        <span>⚠️</span><span><strong>Nikdy nepokládejte podlahu jen podle kalendáře.</strong> Uvedené hodnoty jsou pouze orientační. Před pokládkou vždy změřte skutečnou zbytkovou vlhkost potěru metodou CM (karbidová metoda) — teprve tento výsledek rozhoduje, zda je potěr připraven.</span>
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>U podlahového topení lze schnutí urychlit postupným funkčním vytápěním (topná zkouška podle protokolu). Teplotu zvyšujte pozvolna — prudké vytopení může potěr popraskat.</span>
      </div>
    </div>
  );
}
