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

export default function PlotCalculator() {
  const [delka, setDelka]     = useState("40");
  const [sirkaPole, setSirkaPole] = useState("2.5");
  const [branky, setBranky]   = useState("1");
  const [brany, setBrany]     = useState("1");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const i = (v: string) => Math.max(0, Math.round(n(v)));

  const delkaN = n(delka);
  const sirkaPoleN = n(sirkaPole);
  const brankyN = i(branky);
  const branyN = i(brany);

  // Branka ~ 1 m, brána/vjezd ~ 3,5 m
  const cistaDelka = Math.max(0, delkaN - (brankyN * 1 + branyN * 3.5));
  const pocetPoli = sirkaPoleN > 0 ? Math.ceil(cistaDelka / sirkaPoleN) : 0;
  // Sloupky: mezi poli + koncový + u branek 2 navíc + u bran 2 navíc
  const pocetSloupku = pocetPoli > 0 ? pocetPoli + 1 + brankyN * 2 + branyN * 2 : brankyN * 2 + branyN * 2;
  const pocetVzper = Math.ceil(pocetSloupku / 4);

  const copyText = `Na plot dlouhý ${delkaN} m potřebuji přibližně ${pocetPoli} plotových dílců (pole po ${sirkaPoleN} m), ${pocetSloupku} sloupků a ${pocetVzper} vzpěr. Čistá délka výplně ${cistaDelka.toFixed(1)} m, ${brankyN}× branka a ${branyN}× brána. Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>🧱</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka plotu</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej délku plotu, šířku pole a počet branek a bran — kalkulačka spočítá potřebné dílce, sloupky i vzpěry.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Délka plotu (m)</label>
          <input type="number" min="1" step="1" value={delka} onChange={e => setDelka(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>celková délka oplocení</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Šířka jednoho pole (m)</label>
          <input type="number" min="0.5" step="0.1" value={sirkaPole} onChange={e => setSirkaPole(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>běžně 2–2,5 m</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Počet branek</label>
          <input type="number" min="0" step="1" value={branky} onChange={e => setBranky(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>šířka ≈ 1 m</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Počet bran / vjezdů</label>
          <input type="number" min="0" step="1" value={brany} onChange={e => setBrany(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>šířka ≈ 3,5 m</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Počet sloupků</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{pocetSloupku} ks</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Počet vzpěr</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{pocetVzper} ks</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Čistá délka výplně</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{cistaDelka.toFixed(1)} m</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Branky + brány</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{brankyN} + {branyN}</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Potřebujete plotových dílců / polí</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{pocetPoli} ks</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            {pocetSloupku} × sloupek &nbsp;·&nbsp; {pocetVzper} × vzpěra
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Výpočet je orientační. Počet sloupků a vzpěr upřesněte podle typu plotu a terénu — u rohů, svahů a delších rovných úseků bývá potřeba vzpěry navíc. Vždy počítejte s malou rezervou materiálu.</span>
      </div>
    </div>
  );
}
