"use client";

import { useState } from "react";

// ── Helpers ──────────────────────────────────────────────────
const n = (v: string | number) =>
  parseFloat(String(v).replace(/\s/g, "").replace(",", ".")) || 0;
const fmt = (v: number) =>
  v.toLocaleString("cs-CZ", { maximumFractionDigits: 0 }) + " Kč";

// LED náhrada podle wattů klasické žárovky
function ledNahrada(w: number): number {
  if (w <= 25) return 3;
  if (w <= 40) return 5;
  if (w <= 60) return 8;
  if (w <= 75) return 11;
  if (w <= 100) return 14;
  return Math.round(w * 0.14);
}

// ── Slider ──────────────────────────────────────────────────
function Slider({
  value, min, max, step, onChange, accent = "#b8860b",
}: {
  value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; accent?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <input
      type="range" min={min} max={max} step={step} value={value}
      onChange={e => onChange(Number(e.target.value))}
      style={{
        width: "100%", height: "4px", cursor: "pointer",
        appearance: "none", outline: "none", borderRadius: "2px",
        background: `linear-gradient(to right,${accent} ${pct}%,#e8dfa0 ${pct}%)`,
      }}
    />
  );
}

// ── Progress bar ────────────────────────────────────────────
function ProgressBar({
  pct, color, label, sublabel,
}: {
  pct: number; color: string; label: string; sublabel?: string;
}) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6a5a20", marginBottom: "5px", fontWeight: 600 }}>
        <span>{label}</span>
        {sublabel && <span style={{ color }}>{sublabel}</span>}
      </div>
      <div style={{ height: "8px", background: "#f0e890", borderRadius: "4px", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${Math.min(pct, 100)}%`,
          background: color,
          borderRadius: "4px",
          transition: "width 300ms ease",
        }} />
      </div>
    </div>
  );
}

// ── Copy button ─────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* noop */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <button onClick={copy} style={{
      display: "flex", alignItems: "center", gap: "6px",
      background: copied ? "#dcfce7" : "#fef9c3",
      border: `1px solid ${copied ? "#86efac" : "#d4b800"}`,
      borderRadius: "8px", padding: "9px 16px",
      fontSize: "13px", fontWeight: 600,
      color: copied ? "#16a34a" : "#7a5c00",
      cursor: "pointer", transition: "all 150ms", whiteSpace: "nowrap",
    }}>
      {copied ? "✓ Zkopírováno!" : "📋 Zkopírovat výsledek"}
    </button>
  );
}

// ── Hlavní komponenta ────────────────────────────────────────
export default function LedSavingsCalculator() {
  const [pocet, setPocet]     = useState(12);
  const [prikon, setPrikon]   = useState(60);
  const [hodiny, setHodiny]   = useState(4);
  const [cenakwh, setCenakwh] = useState(6);

  const ledW         = ledNahrada(prikon);
  const usporaW      = prikon - ledW;
  const usporaPct    = prikon > 0 ? Math.round((usporaW / prikon) * 100) : 0;

  // Roční spotřeba 1 žárovky
  const rocniKwhStara = (prikon / 1000) * hodiny * 365;
  const rocniKwhLed   = (ledW / 1000) * hodiny * 365;
  const rocniKwhUsp   = rocniKwhStara - rocniKwhLed;

  // Celá domácnost
  const rocniKcStara  = rocniKwhStara * n(cenakwh) * pocet;
  const rocniKcLed    = rocniKwhLed   * n(cenakwh) * pocet;
  const rocniUspora   = rocniKcStara - rocniKcLed;

  // Investice a návratnost
  const cenaLed       = 100; // Kč/žárovka
  const investice     = pocet * cenaLed;
  const navratnostMes = rocniUspora > 0 ? (investice / rocniUspora) * 12 : 0;
  const navratnostStr = navratnostMes < 1
    ? "méně než měsíc"
    : navratnostMes < 12
    ? `${Math.round(navratnostMes)} měsíců`
    : `${(navratnostMes / 12).toFixed(1)} let`;

  // Úspora CO₂ (0.22 kg CO₂ / kWh průměr ČR 2024)
  const co2Uspora = Math.round(rocniKwhUsp * pocet * 0.22);

  const copyText = `Výměnou za LED žárovky ušetřím ${Math.round(rocniUspora).toLocaleString("cs-CZ")} Kč ročně! Spočítáno na DomovniGuru.cz`;

  const labelCss: React.CSSProperties = {
    fontSize: "11px", fontWeight: 700, letterSpacing: "0.07em",
    textTransform: "uppercase", color: "#7a6010", marginBottom: "6px", display: "block",
  };

  return (
    <div style={{
      background: "#fffdf0",
      borderRadius: "18px",
      padding: "28px 24px",
      border: "1px solid #e8d860",
      fontFamily: "inherit",
      maxWidth: "100%",
    }}>

      {/* Hlavička */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <span style={{ fontSize: "24px" }}>💡</span>
          <h3 style={{ margin: 0, fontSize: "19px", fontWeight: 700, color: "#2a1f00" }}>
            Kolik ušetřím přechodem na LED?
          </h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#8a7020", lineHeight: 1.6 }}>
          Zadej parametry své domácnosti — výsledek se přepočítá okamžitě.
        </p>
      </div>

      {/* Vstupy */}
      <div style={{ display: "grid", gap: "20px", marginBottom: "24px" }}>

        {/* Počet žárovek */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <label style={{ ...labelCss, marginBottom: 0 }}>Počet žárovek v domácnosti</label>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "22px", fontWeight: 800, color: "#b8860b" }}>{pocet}</span>
              <span style={{ fontSize: "12px", color: "#9a7820" }}>ks</span>
            </div>
          </div>
          <Slider value={pocet} min={1} max={40} step={1} onChange={setPocet} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#b09030", marginTop: "3px" }}>
            <span>1 ks</span><span>40 ks</span>
          </div>
        </div>

        {/* Příkon + hodiny vedle sebe */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <label style={{ ...labelCss, marginBottom: 0 }}>Příkon žárovky</label>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#b8860b" }}>{prikon} W</span>
            </div>
            <Slider value={prikon} min={15} max={150} step={5} onChange={setPrikon} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#b09030", marginTop: "3px" }}>
              <span>15 W</span><span>150 W</span>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <label style={{ ...labelCss, marginBottom: 0 }}>Svícení denně</label>
              <span style={{ fontSize: "15px", fontWeight: 700, color: "#b8860b" }}>{hodiny} h</span>
            </div>
            <Slider value={hodiny} min={0.5} max={16} step={0.5} onChange={setHodiny} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#b09030", marginTop: "3px" }}>
              <span>0.5 h</span><span>16 h</span>
            </div>
          </div>
        </div>

        {/* Cena kWh */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <label style={{ ...labelCss, marginBottom: 0 }}>Cena elektřiny (Kč/kWh)</label>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <input
                type="number" min={1} max={15} step={0.5} value={cenakwh}
                onChange={e => setCenakwh(n(e.target.value))}
                style={{
                  width: "70px", padding: "5px 8px",
                  border: "1.5px solid #d4b800", borderRadius: "6px",
                  fontSize: "14px", fontWeight: 700, color: "#2a1f00",
                  background: "#fff", outline: "none", textAlign: "right",
                }}
              />
              <span style={{ fontSize: "12px", color: "#9a7820" }}>Kč/kWh</span>
            </div>
          </div>
          <Slider value={cenakwh} min={2} max={15} step={0.5} onChange={setCenakwh} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#b09030", marginTop: "3px" }}>
            <span>2 Kč</span><span>15 Kč</span>
          </div>
        </div>
      </div>

      {/* Srovnávací karty */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "16px" }}>
        <div style={{ background: "#fff8d0", border: "1px solid #e8c840", borderRadius: "10px", padding: "14px" }}>
          <div style={{ fontSize: "10px", color: "#9a7820", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
            🔆 Klasická žárovka
          </div>
          <div style={{ fontSize: "24px", fontWeight: 800, color: "#c05020", marginBottom: "2px" }}>{prikon} W</div>
          <div style={{ fontSize: "12px", color: "#9a7820" }}>{rocniKwhStara.toFixed(0)} kWh / rok (1 ks)</div>
          <div style={{ fontSize: "12px", color: "#c05020", fontWeight: 600, marginTop: "4px" }}>
            {fmt(Math.round(rocniKcStara))} / rok (celkem)
          </div>
        </div>
        <div style={{ background: "#f0fff4", border: "1px solid #86efac", borderRadius: "10px", padding: "14px" }}>
          <div style={{ fontSize: "10px", color: "#166534", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
            💡 LED náhrada
          </div>
          <div style={{ fontSize: "24px", fontWeight: 800, color: "#16a34a", marginBottom: "2px" }}>{ledW} W</div>
          <div style={{ fontSize: "12px", color: "#166534" }}>{rocniKwhLed.toFixed(0)} kWh / rok (1 ks)</div>
          <div style={{ fontSize: "12px", color: "#16a34a", fontWeight: 600, marginTop: "4px" }}>
            {fmt(Math.round(rocniKcLed))} / rok (celkem)
          </div>
        </div>
      </div>

      {/* Progress bary */}
      <div style={{ background: "#fff9d0", border: "1px solid #e8d860", borderRadius: "12px", padding: "16px 18px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#7a6010", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "14px" }}>
          Vizualizace úspory energie
        </div>
        <ProgressBar pct={100} color="#e04020" label={`Klasická žárovka – ${prikon} W`} sublabel="100 %" />
        <ProgressBar pct={100 - usporaPct} color="#16a34a" label={`LED náhrada – ${ledW} W`} sublabel={`${100 - usporaPct} %`} />
        <div style={{ marginTop: "8px", fontSize: "12px", color: "#7a6010", textAlign: "center" }}>
          LED spotřebuje o <strong style={{ color: "#16a34a" }}>{usporaPct} % méně energie</strong> při stejném světlu
        </div>
      </div>

      {/* Hlavní výsledek */}
      <div style={{
        background: "linear-gradient(135deg, #2a1f00 0%, #4a3800 100%)",
        borderRadius: "14px",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        marginBottom: "12px",
      }}>
        {/* Dekorativní kruh */}
        <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "#f9d84a", opacity: 0.07, pointerEvents: "none" }} />

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <div style={{ fontSize: "11px", color: "#c8a040", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
              Roční úspora domácnosti ({pocet} žárovek)
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "10px" }}>
              <span style={{
                fontSize: "clamp(44px, 8vw, 64px)",
                fontWeight: 900,
                color: "#f9d84a",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                {fmt(Math.round(rocniUspora))}
              </span>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "13px", color: "#c8a040" }}>
                Investice: <span style={{ color: "#fff", fontWeight: 700 }}>{fmt(investice)}</span>
              </div>
              <div style={{ fontSize: "13px", color: "#c8a040" }}>
                Návratnost: <span style={{ color: "#f9d84a", fontWeight: 700 }}>{navratnostStr}</span>
              </div>
              <div style={{ fontSize: "13px", color: "#c8a040" }}>
                CO₂: <span style={{ color: "#86efac", fontWeight: 700 }}>–{co2Uspora} kg/rok</span>
              </div>
            </div>
          </div>
          <CopyButton text={copyText} />
        </div>

        {/* Úspora za 5 a 10 let */}
        <div style={{ marginTop: "18px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {[
            { label: "Za 1 rok", value: fmt(Math.round(rocniUspora)) },
            { label: "Za 5 let", value: fmt(Math.round(rocniUspora * 5)) },
            { label: "Za 10 let", value: fmt(Math.round(rocniUspora * 10)) },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "8px", padding: "10px 12px", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#a08030", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>{label}</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#f9d84a" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{ background: "#fef9c3", border: "1px solid #e8d840", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6010", display: "flex", gap: "8px", alignItems: "flex-start" }}>
        <span style={{ flexShrink: 0 }}>ℹ️</span>
        <span>
          Cena LED žárovky kalkulována jako <strong>100 Kč/ks</strong>. LED náhrada: {prikon} W klasická → {ledW} W LED.
          Výsledek je orientační — reálné úspory závisí na konkrétních žárovkách a tarifu.
        </span>
      </div>
    </div>
  );
}
