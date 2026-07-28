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

type Zdroj = { id: string; nazev: string; cena: number; ucinnost: number; jeCop: boolean };
const ZDROJE: Zdroj[] = [
  { id: "elektrina", nazev: "Elektřina (6,5 Kč/kWh)", cena: 6.5, ucinnost: 0.95, jeCop: false },
  { id: "plyn", nazev: "Plyn (2,2 Kč/kWh)", cena: 2.2, ucinnost: 0.9, jeCop: false },
  { id: "tc", nazev: "Tepelné čerpadlo (6,5 Kč/kWh, COP 3)", cena: 6.5, ucinnost: 3, jeCop: true },
];

export default function OhrevVodyCalculator() {
  const [osob, setOsob] = useState("3");
  const [spotreba, setSpotreba] = useState("40");
  const [tStudena, setTStudena] = useState("10");
  const [tOhrev, setTOhrev] = useState("55");
  const [zdrojId, setZdrojId] = useState("elektrina");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const zdroj = ZDROJE.find(z => z.id === zdrojId) || ZDROJE[0];

  // denní litry = osob × spotřeba
  const litryDen = n(osob) * n(spotreba);
  // ΔT
  const dT = Math.max(0, n(tOhrev) - n(tStudena));
  // E = l × 1.163 Wh/(l·°C) × ΔT / 1000 = kWh/den (teoretická energie na ohřev)
  const kwhTeorDen = litryDen * 1.163 * dT / 1000;
  // spotřebovaná energie s ohledem na účinnost / COP
  const kwhSpotDen = zdroj.ucinnost > 0 ? kwhTeorDen / zdroj.ucinnost : 0;
  const kwhSpotRok = kwhSpotDen * 365;
  // náklady
  const nakladyDen = kwhSpotDen * zdroj.cena;
  const nakladyMesic = nakladyDen * 30.44;
  const nakladyRok = nakladyDen * 365;

  const fmtKc = (v: number) => new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 0 }).format(Math.round(v)) + " Kč";
  const fmtNum = (v: number, d = 0) => new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: d }).format(v);

  const copyText = `Roční náklady na ohřev vody: ${fmtKc(nakladyRok)} (${fmtNum(litryDen)} l/den, ${fmtNum(kwhSpotRok)} kWh/rok, zdroj: ${zdroj.nazev}). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>🚿</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka nákladů na ohřev vody</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej počet osob, spotřebu teplé vody a zdroj energie — kalkulačka spočítá roční náklady na ohřev teplé vody.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Počet osob</label>
          <input type="number" min="1" step="1" value={osob} onChange={e => setOsob(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Teplá voda na osobu (l/den)</label>
          <input type="number" min="5" step="5" value={spotreba} onChange={e => setSpotreba(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>průměr 30–50 l</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Teplota studené vody (°C)</label>
          <input type="number" min="1" max="25" step="1" value={tStudena} onChange={e => setTStudena(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>z vodovodu ≈ 10 °C</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Teplota ohřevu (°C)</label>
          <input type="number" min="30" max="80" step="1" value={tOhrev} onChange={e => setTOhrev(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>v bojleru 50–60 °C</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gridColumn: "1 / -1" }}>
          <label style={labelCss}>Zdroj / cena energie</label>
          <select value={zdrojId} onChange={e => setZdrojId(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)}>
            {ZDROJE.map(z => <option key={z.id} value={z.id}>{z.nazev}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Denní spotřeba vody</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{fmtNum(litryDen)} l</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Energie za rok</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{fmtNum(kwhSpotRok)} kWh</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Náklady měsíčně</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{fmtKc(nakladyMesic)}</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Roční náklady na ohřev vody</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{fmtKc(nakladyRok)}</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            {fmtKc(nakladyDen)} / den &nbsp;·&nbsp; {zdroj.jeCop ? `COP ${fmtNum(zdroj.ucinnost, 1)}` : `účinnost ${fmtNum(zdroj.ucinnost * 100)} %`}
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Tepelné čerpadlo díky COP okolo 3 spotřebuje na stejné teplo zhruba třetinu elektřiny oproti přímému ohřevu. Snížením teploty v bojleru z 60 na 55 °C ušetříte několik procent, ale nikdy neklesejte pod 50 °C kvůli riziku bakterie legionella.</span>
      </div>
    </div>
  );
}
