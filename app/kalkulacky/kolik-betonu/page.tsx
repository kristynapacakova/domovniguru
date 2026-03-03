"use client";
import { useState } from "react";
import Link from "next/link";

export default function KolikBetonuPage() {
  const [typ, setTyp] = useState<"deska" | "zeď" | "patka">("deska");
  const [delka, setDelka] = useState("");
  const [sirka, setSirka] = useState("");
  const [vyska, setVyska] = useState("");
  const [rezerva, setRezerva] = useState("10");

  const d = parseFloat(delka) || 0;
  const s = parseFloat(sirka) || 0;
  const v = parseFloat(vyska) || 0;
  const r = parseFloat(rezerva) || 10;

  const objem = d * s * v;
  const objemSRezervou = objem * (1 + r / 100);
  const pytlu25 = Math.ceil(objemSRezervou / 0.012); // 25kg pytel = ~0.012 m³
  const pytlu40 = Math.ceil(objemSRezervou / 0.020); // 40kg pytel = ~0.020 m³

  const hotovo = objem > 0;

  const labelMap: Record<string, [string, string, string]> = {
    deska: ["Délka desky (m)", "Šířka desky (m)", "Tloušťka desky (m)"],
    zeď:   ["Délka zdi (m)",   "Šířka (tloušťka) zdi (m)", "Výška zdi (m)"],
    patka: ["Délka patky (m)", "Šířka patky (m)", "Hloubka patky (m)"],
  };
  const [lD, lS, lV] = labelMap[typ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "60px 32px 80px" }}>

        {/* breadcrumb */}
        <nav style={{ fontSize: "13px", color: "#888", marginBottom: "32px", display: "flex", gap: "6px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#888", textDecoration: "none" }}>Domů</Link>
          <span>/</span>
          <Link href="/kalkulacky" style={{ color: "#888", textDecoration: "none" }}>Kalkulačky</Link>
          <span>/</span>
          <span style={{ color: "#111" }}>Kolik betonu potřebuji?</span>
        </nav>

        {/* header */}
        <header style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#888", letterSpacing: "0.12em", marginBottom: "12px" }}>
            🏗️ Kalkulačka
          </div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, margin: "0 0 14px" }}>
            Kolik betonu potřebuji?
          </h1>
          <p style={{ fontSize: "17px", color: "#666", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
            Zadej rozměry a kalkulačka spočítá objem betonu v m³ i počet pytlů suchých směsí.
          </p>
        </header>

        {/* form */}
        <div style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "14px", padding: "32px", marginBottom: "24px" }}>

          {/* typ */}
          <div style={{ marginBottom: "28px" }}>
            <label style={labelStyle}>Typ konstrukce</label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {(["deska", "zeď", "patka"] as const).map(t => (
                <button key={t} onClick={() => setTyp(t)} style={{
                  padding: "9px 20px", borderRadius: "8px", border: "1px solid",
                  borderColor: typ === t ? "#111" : "#ddd",
                  background: typ === t ? "#111" : "#fff",
                  color: typ === t ? "#fff" : "#333",
                  fontWeight: 600, fontSize: "14px", cursor: "pointer", transition: "all 150ms",
                  textTransform: "capitalize",
                }}>
                  {t === "zeď" ? "Zeď / základ" : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>{lD}</label>
              <input style={inputStyle} type="number" min="0" step="0.01" placeholder="např. 4" value={delka} onChange={e => setDelka(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>{lS}</label>
              <input style={inputStyle} type="number" min="0" step="0.01" placeholder="např. 3" value={sirka} onChange={e => setSirka(e.target.value)} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>{lV}</label>
              <input style={inputStyle} type="number" min="0" step="0.001" placeholder="např. 0.15" value={vyska} onChange={e => setVyska(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Rezerva (%)</label>
              <input style={inputStyle} type="number" min="0" max="50" step="1" value={rezerva} onChange={e => setRezerva(e.target.value)} />
            </div>
          </div>
        </div>

        {/* výsledek */}
        {hotovo ? (
          <div style={{ background: "#111", color: "#fff", borderRadius: "14px", padding: "32px", marginBottom: "24px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#aaa", marginBottom: "20px" }}>
              Výsledek výpočtu
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
              <ResultBox label="Čistý objem" value={objem.toFixed(3)} unit="m³" />
              <ResultBox label={`S rezervou ${r}%`} value={objemSRezervou.toFixed(3)} unit="m³" />
              <ResultBox label="Pytlů 25 kg" value={`${pytlu25}`} unit="ks" />
            </div>
            <div style={{ marginTop: "20px", padding: "16px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", fontSize: "14px", color: "#ccc", lineHeight: 1.6 }}>
              <strong style={{ color: "#fff" }}>Nebo pytlů 40 kg:</strong> {pytlu40} ks &nbsp;·&nbsp;
              <strong style={{ color: "#fff" }}>Hotový beton (dovoz):</strong> {objemSRezervou.toFixed(2)} m³
            </div>
          </div>
        ) : (
          <div style={{ background: "#f5f5f0", borderRadius: "14px", padding: "28px", textAlign: "center", color: "#999", fontSize: "15px", marginBottom: "24px" }}>
            Vyplň rozměry výše a výsledek se zobrazí automaticky.
          </div>
        )}

        {/* tip */}
        <div style={{ background: "#fffbeb", borderLeft: "3px solid #f59e0b", borderRadius: "0 10px 10px 0", padding: "16px 20px", marginBottom: "32px", fontSize: "14px", color: "#78716c", lineHeight: 1.6 }}>
          <strong style={{ color: "#333" }}>💡 Tip:</strong> Pro podlahové desky počítej s tloušťkou <strong>0,10–0,15 m</strong>. Pro základové patky <strong>0,30–0,60 m</strong>. Rezervu 10 % nechej vždy – beton se při lití ztrácí.
        </div>

        {/* info sekce */}
        <div style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "14px", padding: "28px", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak kalkulačka počítá?</h2>
          <p style={{ fontSize: "15px", color: "#555", fontWeight: 300, lineHeight: 1.7, marginBottom: "12px" }}>
            Výpočet je jednoduchý: <strong>délka × šířka × tloušťka = objem v m³</strong>. K tomu přičteme zvolenou rezervu.
          </p>
          <p style={{ fontSize: "15px", color: "#555", fontWeight: 300, lineHeight: 1.7, marginBottom: "12px" }}>
            Jeden pytel suché betonové směsi (25 kg) dává přibližně <strong>0,012 m³</strong> hotového betonu. Pytel 40 kg dává <strong>0,020 m³</strong>.
          </p>
          <p style={{ fontSize: "15px", color: "#555", fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            Pokud objednáváš hotový beton z autodomíchávače, minimální odběr bývá <strong>1 m³</strong>. Při menším objemu se vyplatí suché pytle.
          </p>
        </div>

        {/* back */}
        <Link href="/kalkulacky" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#888", textDecoration: "none", fontWeight: 500 }}>
          ← Zpět na kalkulačky
        </Link>
      </div>
    </div>
  );
}

function ResultBox({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.10em", color: "#aaa", marginBottom: "8px" }}>{label}</div>
      <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "36px", fontWeight: 400, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: "13px", color: "#aaa", marginTop: "4px" }}>{unit}</div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
  letterSpacing: "0.08em", color: "#888", marginBottom: "8px",
};
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", border: "1px solid #ddd", borderRadius: "8px",
  fontSize: "16px", background: "#fafaf8", outline: "none", boxSizing: "border-box",
  fontFamily: "inherit",
};
