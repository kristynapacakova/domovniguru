"use client";

import { useState } from "react";

type TypTopeni = "elektrokotel" | "plyn" | "tuha-paliva";

const USPORY: Record<TypTopeni, number> = {
  "elektrokotel":  0.65,
  "plyn":          0.35,
  "tuha-paliva":   0.40,
};

const LABELS: Record<TypTopeni, string> = {
  "elektrokotel":  "Elektrokotel / přímotop",
  "plyn":          "Plynový kotel",
  "tuha-paliva":   "Tuhá paliva (uhlí, dřevo)",
};

const USPORY_LABEL: Record<TypTopeni, string> = {
  "elektrokotel":  "65 %",
  "plyn":          "35 %",
  "tuha-paliva":   "40 %",
};

function formatKc(n: number) {
  return n.toLocaleString("cs-CZ") + " Kč";
}

export default function HeatPumpCalculator() {
  const [typTopeni, setTypTopeni]     = useState<TypTopeni>("plyn");
  const [naklady, setNaklady]         = useState<string>("45000");
  const [investice, setInvestice]     = useState<string>("250000");
  const [dotace, setDotace]           = useState<string>("100000");

  const toNum = (v: string) => parseFloat(v.replace(/\s/g, "").replace(",", ".")) || 0;

  const rocniNaklady   = toNum(naklady);
  const investiceNum   = toNum(investice);
  const dotaceNum      = toNum(dotace);
  const uspory         = USPORY[typTopeni];
  const rocniUspora    = rocniNaklady * uspory;
  const nakladyPo      = rocniNaklady - rocniUspora;
  const cistaInvestice = Math.max(0, investiceNum - dotaceNum);
  const navratnost     = rocniUspora > 0 ? cistaInvestice / rocniUspora : 0;
  const navratnostText = navratnost <= 0 ? "—" : navratnost < 100 ? navratnost.toFixed(1) : "100+";

  // barva ukazatele návratnosti
  const navratnostColor =
    navratnost <= 7  ? "#3a9e6f" :
    navratnost <= 12 ? "#c09020" :
    "#c05030";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid #ccd8e8",
    borderRadius: "8px",
    fontSize: "15px",
    background: "#fff",
    color: "#1a2a3a",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 150ms",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    color: "#5a7a9a",
    marginBottom: "6px",
  };

  return (
    <div style={{
      background: "#f0f4f8",
      borderRadius: "16px",
      padding: "28px 24px",
      border: "1px solid #d0dce8",
      fontFamily: "inherit",
      maxWidth: "100%",
    }}>

      {/* Hlavička */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <span style={{ fontSize: "22px" }}>♨️</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#1a2a3a" }}>
            Kalkulačka návratnosti tepelného čerpadla
          </h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: "#6a8aaa" }}>
          Zadej aktuální náklady na vytápění a odhadnutá investice ti ukáže orientační dobu návratnosti.
        </p>
      </div>

      {/* Vstupy */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px", marginBottom: "20px" }}>

        {/* Typ topeni */}
        <div style={{ display: "flex", flexDirection: "column", gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Aktuální způsob vytápění</label>
          <select
            value={typTopeni}
            onChange={(e) => setTypTopeni(e.target.value as TypTopeni)}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.target.style.borderColor = "#3a6a9a")}
            onBlur={(e)  => (e.target.style.borderColor = "#ccd8e8")}
          >
            {(Object.keys(LABELS) as TypTopeni[]).map((k) => (
              <option key={k} value={k}>{LABELS[k]}</option>
            ))}
          </select>
          <span style={{ fontSize: "11px", color: "#7a9aba", marginTop: "5px" }}>
            Odhadovaná úspora oproti TČ: <strong>{USPORY_LABEL[typTopeni]}</strong>
          </span>
        </div>

        {/* Roční náklady */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelStyle}>Roční náklady na topení (Kč)</label>
          <input
            type="number" min="0" step="1000"
            value={naklady}
            onChange={(e) => setNaklady(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a6a9a")}
            onBlur={(e)  => (e.target.style.borderColor = "#ccd8e8")}
          />
        </div>

        {/* Investice */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelStyle}>Investice do čerpadla (Kč)</label>
          <input
            type="number" min="0" step="10000"
            value={investice}
            onChange={(e) => setInvestice(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a6a9a")}
            onBlur={(e)  => (e.target.style.borderColor = "#ccd8e8")}
          />
        </div>

        {/* Dotace */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelStyle}>Dotace NZÚ (Kč)</label>
          <input
            type="number" min="0" step="10000"
            value={dotace}
            onChange={(e) => setDotace(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#3a6a9a")}
            onBlur={(e)  => (e.target.style.borderColor = "#ccd8e8")}
          />
          <span style={{ fontSize: "11px", color: "#7a9aba", marginTop: "5px" }}>
            NZÚ 2026: až 100 000 Kč na vzduch–voda
          </span>
        </div>
      </div>

      {/* Mezivýsledky */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px", marginBottom: "16px" }}>
        {[
          { label: "Náklady nyní",    value: formatKc(rocniNaklady),   color: "#c05030" },
          { label: "Náklady po TČ",   value: formatKc(Math.round(nakladyPo)), color: "#3a7a9a" },
          { label: "Roční úspora",    value: formatKc(Math.round(rocniUspora)), color: "#2a8a5a" },
          { label: "Čistá investice", value: formatKc(cistaInvestice),  color: "#2a3a5a" },
        ].map(({ label, value, color }) => (
          <div key={label} style={{
            background: "#fff",
            border: "1px solid #d0dce8",
            borderRadius: "10px",
            padding: "12px 14px",
          }}>
            <div style={{ fontSize: "10px", color: "#7a9aba", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>
              {label}
            </div>
            <div style={{ fontSize: "17px", fontWeight: 700, color }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Hlavní výsledek */}
      <div style={{
        background: "#1a2a3a",
        borderRadius: "14px",
        padding: "24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Dekorativní kruh */}
        <div style={{
          position: "absolute", top: "-30px", right: "-30px",
          width: "120px", height: "120px",
          borderRadius: "50%",
          background: navratnostColor,
          opacity: 0.12,
        }}/>

        <div style={{ fontSize: "12px", color: "#7a9aba", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
          Vaše investice se vrátí za
        </div>

        <div style={{
          fontSize: "clamp(48px, 10vw, 72px)",
          fontWeight: 900,
          color: navratnostColor,
          lineHeight: 1,
          marginBottom: "6px",
        }}>
          {navratnostText}
        </div>

        <div style={{ fontSize: "16px", color: "#a0b8d0", marginBottom: "16px" }}>
          {navratnost > 0 && navratnost < 100 ? "let" : ""}
        </div>

        {/* Barevný indikátor */}
        {navratnost > 0 && navratnost < 100 && (
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: navratnostColor + "22",
            border: `1px solid ${navratnostColor}55`,
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "13px",
            color: navratnostColor,
            fontWeight: 700,
          }}>
            {navratnost <= 7  && "✅ Výborná návratnost"}
            {navratnost >  7  && navratnost <= 12 && "🟡 Dobrá návratnost"}
            {navratnost >  12 && "⚠️ Delší návratnost"}
          </div>
        )}

        {/* Roční úspora v bílém textu */}
        <div style={{ marginTop: "16px", fontSize: "14px", color: "#7a9aba" }}>
          Roční úspora{" "}
          <span style={{ color: "#fff", fontWeight: 700 }}>
            {formatKc(Math.round(rocniUspora))}
          </span>
          {" · "}
          Čistá investice{" "}
          <span style={{ color: "#fff", fontWeight: 700 }}>
            {formatKc(cistaInvestice)}
          </span>
        </div>
      </div>

      {/* Upozornění */}
      <div style={{
        marginTop: "14px",
        background: "#e8f0f8",
        border: "1px solid #c0d0e0",
        borderRadius: "8px",
        padding: "10px 14px",
        fontSize: "12px",
        color: "#4a6a8a",
        display: "flex",
        gap: "8px",
        alignItems: "flex-start",
      }}>
        <span style={{ flexShrink: 0 }}>ℹ️</span>
        <span>
          Jde o <strong>orientační odhad</strong>. Reálná návratnost závisí na konkrétním
          typu čerpadla, zateplení domu, ceně elektřiny a dalších faktorech.
          Pro přesnou kalkulaci doporučujeme energetický audit.
        </span>
      </div>
    </div>
  );
}
