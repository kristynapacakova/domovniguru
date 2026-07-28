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

export default function RosnyBodCalculator() {
  const [teplota, setTeplota]   = useState("21");
  const [vlhkost, setVlhkost]   = useState("55");
  const [povrch, setPovrch]     = useState("");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  // Magnus formula
  // γ = ln(RH/100) + (17.62·T)/(243.12+T);  Td = 243.12·γ / (17.62 − γ)
  const T = n(teplota);
  const RH = Math.min(Math.max(n(vlhkost), 0.1), 100);
  const b = 17.62, c = 243.12;
  const gamma = Math.log(RH / 100) + (b * T) / (c + T);
  const rosnyBod = (c * gamma) / (b - gamma);

  const maPovrch = povrch.trim() !== "";
  const povrchT = n(povrch);
  const margin = povrchT - rosnyBod; // kladné = bezpečná rezerva
  const riziko = maPovrch && povrchT <= rosnyBod;

  const copyText = maPovrch
    ? `Rosný bod je ${rosnyBod.toFixed(1)} °C. Teplota stěny ${povrchT.toFixed(1)} °C — ${riziko ? "hrozí kondenzace a plíseň" : "bez rizika kondenzace"} (rezerva ${margin.toFixed(1)} °C). Spočítáno na DomovniGuru.cz`
    : `Rosný bod je ${rosnyBod.toFixed(1)} °C při ${T.toFixed(0)} °C a vlhkosti ${RH.toFixed(0)} %. Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>🌡️</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka rosného bodu</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej teplotu vzduchu a vlhkost — kalkulačka spočítá rosný bod a vyhodnotí riziko kondenzace na stěně.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Teplota vzduchu (°C)</label>
          <input type="number" step="0.5" value={teplota} onChange={e => setTeplota(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Relativní vlhkost (%)</label>
          <input type="number" min="1" max="100" step="1" value={vlhkost} onChange={e => setVlhkost(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>ideál v bytě 40–60 %</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Teplota povrchu stěny (°C)</label>
          <input type="number" step="0.5" placeholder="volitelné" value={povrch} onChange={e => setPovrch(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>např. rohy, ostění oken</span>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "14px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Rosný bod</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{rosnyBod.toFixed(1)} °C</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            při {T.toFixed(0)} °C a vlhkosti {RH.toFixed(0)} % zkondenzuje vlhkost na povrchu chladnějším než {rosnyBod.toFixed(1)} °C
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      {maPovrch ? (
        <div style={{ background: riziko ? "#fdeceb" : "#eef7f1", border: `1px solid ${riziko ? "#e8b0aa" : "#a8d8bf"}`, borderRadius: "12px", padding: "16px 18px", marginBottom: "14px" }}>
          <div style={{ fontSize: "16px", fontWeight: 700, color: riziko ? "#a83028" : "#2a7a52", marginBottom: "4px" }}>
            {riziko ? "⚠️ Riziko kondenzace a plísně" : "✅ Bez rizika kondenzace"}
          </div>
          <div style={{ fontSize: "13px", color: riziko ? "#8a3830" : "#3a6a50", lineHeight: 1.6 }}>
            Teplota stěny {povrchT.toFixed(1)} °C je {riziko ? "pod" : "nad"} rosným bodem {rosnyBod.toFixed(1)} °C.{" "}
            {riziko
              ? `Chybí ${Math.abs(margin).toFixed(1)} °C do bezpečí — na povrchu se sráží vlhkost a hrozí růst plísní.`
              : `Rezerva je ${margin.toFixed(1)} °C. Doporučený bezpečný odstup je alespoň 3 °C.`}
          </div>
        </div>
      ) : (
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px", marginBottom: "14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Tip</div>
          <div style={{ fontSize: "13px", color: "#3a3a30", lineHeight: 1.6 }}>Zadej teplotu povrchu stěny (např. změřenou bezdotykovým teploměrem v rohu místnosti) a kalkulačka vyhodnotí riziko kondenzace a plísně.</div>
        </div>
      )}

      <div style={{ background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Nejchladnější místa v bytě jsou rohy obvodových stěn, ostění oken a tepelné mosty. Právě tam kondenzuje vlhkost jako první. Držte rezervu alespoň 3 °C nad rosným bodem — pravidelně větrejte a vlhkost udržujte pod 60 %.</span>
      </div>
    </div>
  );
}
