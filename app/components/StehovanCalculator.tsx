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

const MISTNOSTI_OPTIONS = [1, 2, 3, 4, 5, 6];
const MISTNOSTI_BASE: Record<number, number> = { 1: 3000, 2: 5500, 3: 8500, 4: 12000, 5: 15500, 6: 19000 };

export default function StehovanCalculator() {
  const [mistnosti, setMistnosti]     = useState("2");
  const [vzdalenost, setVzdalenost]   = useState("15");
  const [patro, setPatro]             = useState("1");
  const [vytah, setVytah]             = useState(false);
  const [montaz, setMontaz]           = useState(false);
  const [piano, setPiano]             = useState(false);

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const mistr = Math.min(6, Math.max(1, Math.round(n(mistnosti))));
  const km    = n(vzdalenost);
  const floor = Math.max(0, Math.round(n(patro)));

  const base        = MISTNOSTI_BASE[mistr] ?? 19000;
  const doprava     = km > 15 ? Math.round((km - 15) * 22) : 0;
  const patroAcc    = !vytah && floor > 0 ? floor * 600 : 0;
  const montazAcc   = montaz ? 2000 : 0;
  const pianoAcc    = piano  ? 3500 : 0;

  const celkem = base + doprava + patroAcc + montazAcc + pianoAcc;
  const min    = Math.round(celkem * 0.85 / 100) * 100;
  const max    = Math.round(celkem * 1.20 / 100) * 100;

  const fmt = (v: number) => v.toLocaleString("cs-CZ") + " Kč";

  const copyText = `Orientační cena stěhování: ${fmt(min)} – ${fmt(max)} (střed ${fmt(celkem)}). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>🚚</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka ceny stěhování</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Orientační cena stěhování v ČR. Výsledek slouží pro první odhad — finální nabídku vždy potvrďte se stěhovací firmou.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Počet místností</label>
          <select value={mistnosti} onChange={e => setMistnosti(e.target.value)} style={{ ...inputCss, appearance: "none" }}>
            {MISTNOSTI_OPTIONS.map(m => <option key={m} value={m}>{m === 6 ? "6 a více" : m}</option>)}
          </select>
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>bez kuchyně a hal</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Vzdálenost (km)</label>
          <input type="number" min="1" max="500" step="5" value={vzdalenost} onChange={e => setVzdalenost(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>do 15 km bez příplatku</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Patro (odkud)</label>
          <input type="number" min="0" max="20" step="1" value={patro} onChange={e => setPatro(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>0 = přízemí</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
        {[
          { label: "Výtah k dispozici", value: vytah, set: setVytah, note: "bez příplatku za schody" },
          { label: "Montáž / demontáž nábytku", value: montaz, set: setMontaz, note: "+2 000 Kč" },
          { label: "Piano nebo trezor", value: piano, set: setPiano, note: "+3 500 Kč" },
        ].map(({ label, value, set, note }) => (
          <label key={label} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", userSelect: "none" }}>
            <input type="checkbox" checked={value} onChange={e => set(e.target.checked)} style={{ width: "18px", height: "18px", accentColor: accent, cursor: "pointer", flexShrink: 0 }} />
            <span style={{ fontSize: "14px", color: "#3a3a30", fontWeight: 500 }}>{label}</span>
            <span style={{ fontSize: "12px", color: muted }}>{note}</span>
          </label>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Základní práce</div>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>{fmt(base)}</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Příplatky</div>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>{fmt(doprava + patroAcc + montazAcc + pianoAcc)}</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Střední odhad</div>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>{fmt(celkem)}</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Orientační cena stěhování</div>
          <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{fmt(min)} – {fmt(max)}</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>Rozsah ±15 % / +20 % oproti střední hodnotě</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Výsledek je orientační — finální cena závisí na množství věcí, přístupu ke vchodu, sezóně (léto je dražší) a konkrétní firmě. Vždy si vyžádejte alespoň 2–3 nabídky a ptejte se, zda je cena fixní nebo hodinová.</span>
      </div>
    </div>
  );
}
