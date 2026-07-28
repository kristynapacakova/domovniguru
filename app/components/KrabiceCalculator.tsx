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

export default function KrabiceCalculator() {
  const [osob, setOsob]     = useState("2");
  const [pokoju, setPokoju] = useState("3");
  const [styl, setStyl]     = useState("1");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const osobN = n(osob);
  const pokojuN = n(pokoju);
  const faktor = n(styl);

  // Základ: osob × 10 + pokojů × 12, poté × faktor stylu bydlení
  const zaklad = osobN * 10 + pokojuN * 12;
  const celkem = Math.ceil(zaklad * faktor);

  const stredni = Math.round(celkem * 0.60); // M – univerzální
  const male    = Math.round(celkem * 0.25); // S – knihy, těžké věci
  const velke    = Math.max(celkem - stredni - male, 0); // L – lehké, objemné

  const bublinkova = Math.ceil(celkem * 1.5);   // m
  const baliciPapir = Math.ceil(celkem * 0.3 * 10) / 10; // kg
  const pasky = Math.max(Math.ceil(celkem / 12), 1); // ks

  const copyText = `Na stěhování budete potřebovat přibližně ${celkem} krabic (${male} malých, ${stredni} středních, ${velke} velkých), ${bublinkova} m bublinkové fólie, ${baliciPapir} kg balicího papíru a ${pasky} ks lepicích pásek. Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>📦</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka stěhovacích krabic</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej velikost domácnosti a styl bydlení — kalkulačka spočítá, kolik krabic a balicího materiálu budeš potřebovat.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Počet osob v domácnosti</label>
          <input type="number" min="1" step="1" value={osob} onChange={e => setOsob(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Počet pokojů</label>
          <input type="number" min="1" step="1" value={pokoju} onChange={e => setPokoju(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>obytné místnosti + kuchyň</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Styl bydlení</label>
          <select value={styl} onChange={e => setStyl(e.target.value)} style={{ ...inputCss, appearance: "auto" }} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)}>
            <option value="0.7">Minimalista</option>
            <option value="1">Běžně vybaveno</option>
            <option value="1.4">Sběratel</option>
          </select>
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>kolik věcí doma máš</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Malé krabice (knihy, těžké)</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{male} ks</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Střední krabice</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{stredni} ks</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Velké krabice (lehké)</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{velke} ks</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Role lepicí pásky</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{pasky} ks</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Bublinková fólie</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{bublinkova} m</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Balicí papír</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{baliciPapir} kg</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Celkový počet krabic</div>
          <div style={{ fontSize: "40px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{celkem} ks</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            {male} × malá &nbsp;·&nbsp; {stredni} × střední &nbsp;·&nbsp; {velke} × velká
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Do malých krabic patří jen knihy a těžké věci — plná velká krabice knih se špatně zvedá a snadno se protrhne. Objemné, ale lehké věci (peřiny, polštáře, dekorace) dej naopak do velkých krabic. Přidej si menší rezervu na věci, které vždy vyplavou na poslední chvíli.</span>
      </div>
    </div>
  );
}
