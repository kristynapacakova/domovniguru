"use client";
import { useState } from "react";
import Link from "next/link";

export default function TepelnaIzolacePage() {
  const [delka, setDelka] = useState("");
  const [vyska, setVyska] = useState("");
  const [tloustka, setTloustka] = useState("100");
  const [typ, setTyp] = useState<"deska" | "role">("deska");
  const [rezerva, setRezerva] = useState("10");

  // rozměry standardní desky / role
  const deskaD = 1.2; // m
  const deskaS = 0.6; // m
  const deskaPlocha = deskaD * deskaS; // 0.72 m²

  const roleSirka = 1.2; // m
  const roleDelka = 5.0; // m (standardní role minerální vlny)
  const rolePlocha = roleSirka * roleDelka; // 6 m²

  const d = parseFloat(delka) || 0;
  const v = parseFloat(vyska) || 0;
  const r = parseFloat(rezerva) || 10;

  const plocha = d * v;
  const plochaSRezervou = plocha * (1 + r / 100);
  const pocetDesek = Math.ceil(plochaSRezervou / deskaPlocha);
  const pocetRoli = Math.ceil(plochaSRezervou / rolePlocha);

  const hotovo = plocha > 0;

  const tloustkyOptions = ["50", "80", "100", "120", "150", "200"];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "60px 32px 80px" }}>

        <nav style={{ fontSize: "13px", color: "#888", marginBottom: "32px", display: "flex", gap: "6px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#888", textDecoration: "none" }}>Domů</Link>
          <span>/</span>
          <Link href="/kalkulacky" style={{ color: "#888", textDecoration: "none" }}>Kalkulačky</Link>
          <span>/</span>
          <span style={{ color: "#111" }}>Kolik tepelné izolace?</span>
        </nav>

        <header style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#888", letterSpacing: "0.12em", marginBottom: "12px" }}>
            💧 Kalkulačka
          </div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, margin: "0 0 14px" }}>
            Kolik tepelné izolace potřebuji?
          </h1>
          <p style={{ fontSize: "17px", color: "#666", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
            Zadej plochu stěny nebo stropu a kalkulačka spočítá počet desek nebo rolí minerální či skelné vlny.
          </p>
        </header>

        <div style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "14px", padding: "32px", marginBottom: "24px" }}>

          {/* typ produktu */}
          <div style={{ marginBottom: "28px" }}>
            <label style={labelStyle}>Typ izolace</label>
            <div style={{ display: "flex", gap: "10px" }}>
              {(["deska", "role"] as const).map(t => (
                <button key={t} onClick={() => setTyp(t)} style={{
                  padding: "9px 20px", borderRadius: "8px", border: "1px solid",
                  borderColor: typ === t ? "#111" : "#ddd",
                  background: typ === t ? "#111" : "#fff",
                  color: typ === t ? "#fff" : "#333",
                  fontWeight: 600, fontSize: "14px", cursor: "pointer", transition: "all 150ms",
                }}>
                  {t === "deska" ? "Desky (tuhé)" : "Role (flexibilní)"}
                </button>
              ))}
            </div>
            <div style={{ fontSize: "12px", color: "#999", marginTop: "8px" }}>
              {typ === "deska"
                ? "Tuhé desky 1,2 × 0,6 m – vhodné na stěny, fasády, podlahy"
                : "Role 1,2 × 5,0 m – vhodné na šikmé střechy, stropy, podkroví"}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>Délka / šířka plochy (m)</label>
              <input style={inputStyle} type="number" min="0" step="0.1" placeholder="např. 6" value={delka} onChange={e => setDelka(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Výška plochy (m)</label>
              <input style={inputStyle} type="number" min="0" step="0.1" placeholder="např. 2.6" value={vyska} onChange={e => setVyska(e.target.value)} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Tloušťka izolace (mm)</label>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {tloustkyOptions.map(t => (
                  <button key={t} onClick={() => setTloustka(t)} style={{
                    padding: "8px 14px", borderRadius: "8px", border: "1px solid",
                    borderColor: tloustka === t ? "#111" : "#ddd",
                    background: tloustka === t ? "#111" : "#fff",
                    color: tloustka === t ? "#fff" : "#333",
                    fontWeight: 600, fontSize: "13px", cursor: "pointer", transition: "all 150ms",
                  }}>
                    {t} mm
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label style={labelStyle}>Rezerva (%)</label>
              <input style={inputStyle} type="number" min="0" max="30" step="1" value={rezerva} onChange={e => setRezerva(e.target.value)} />
            </div>
          </div>
        </div>

        {hotovo ? (
          <div style={{ background: "#111", color: "#fff", borderRadius: "14px", padding: "32px", marginBottom: "24px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#aaa", marginBottom: "20px" }}>
              Výsledek výpočtu
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
              <ResultBox label="Plocha" value={plocha.toFixed(1)} unit="m²" />
              <ResultBox label={`S rezervou ${r}%`} value={plochaSRezervou.toFixed(1)} unit="m²" />
              <ResultBox
                label={typ === "deska" ? "Počet desek" : "Počet rolí"}
                value={`${typ === "deska" ? pocetDesek : pocetRoli}`}
                unit={typ === "deska" ? "ks" : "rolí"}
              />
            </div>
            <div style={{ marginTop: "20px", padding: "16px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", fontSize: "14px", color: "#ccc", lineHeight: 1.6 }}>
              Tloušťka izolace: <strong style={{ color: "#fff" }}>{tloustka} mm</strong> &nbsp;·&nbsp;
              {typ === "deska"
                ? <>Deska 1,2 × 0,6 m = <strong style={{ color: "#fff" }}>0,72 m²</strong></>
                : <>Role 1,2 × 5,0 m = <strong style={{ color: "#fff" }}>6,0 m²</strong></>
              }
            </div>
          </div>
        ) : (
          <div style={{ background: "#f5f5f0", borderRadius: "14px", padding: "28px", textAlign: "center", color: "#999", fontSize: "15px", marginBottom: "24px" }}>
            Vyplň rozměry plochy a výsledek se zobrazí automaticky.
          </div>
        )}

        <div style={{ background: "#fffbeb", borderLeft: "3px solid #f59e0b", borderRadius: "0 10px 10px 0", padding: "16px 20px", marginBottom: "32px", fontSize: "14px", color: "#78716c", lineHeight: 1.6 }}>
          <strong style={{ color: "#333" }}>💡 Tip:</strong> Pro zateplení fasády se nejčastěji používá EPS (polystyren) nebo minerální vlna <strong>tl. 100–200 mm</strong>. Pro podkroví postačí <strong>200 mm</strong> minerální vlny ve dvou vrstvách po 100 mm s překrytím spár.
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "14px", padding: "28px", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jakou tloušťku zvolit?</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Místo použití</th>
                  <th style={thStyle}>Doporučená tloušťka</th>
                  <th style={thStyle}>Typ izolace</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fasáda (ETICS)", "100–200 mm", "EPS nebo MW desky"],
                  ["Podkroví – šikmá střecha", "200–240 mm", "Minerální vlna role"],
                  ["Strop nad posledním patrem", "200–300 mm", "Minerální vlna role"],
                  ["Podlaha – kročejová", "40–60 mm", "Kročejová izolace"],
                  ["Podlaha – tepelná", "80–120 mm", "EPS nebo PIR"],
                  ["Příčky – akustika", "50–100 mm", "Minerální vlna desky"],
                ].map(([m, t, i]) => (
                  <tr key={m}>
                    <td style={tdStyle}>{m}</td>
                    <td style={tdStyle}><strong>{t}</strong></td>
                    <td style={tdStyle}>{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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
const thStyle: React.CSSProperties = {
  fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#888",
  padding: "10px 14px", textAlign: "left", borderBottom: "2px solid #e5e5e0", background: "#fafaf8",
};
const tdStyle: React.CSSProperties = {
  padding: "10px 14px", borderBottom: "1px solid #f0f0eb", color: "#444", fontSize: "14px", fontWeight: 300,
};
