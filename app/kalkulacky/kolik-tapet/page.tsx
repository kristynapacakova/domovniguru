"use client";
import { useState } from "react";
import Link from "next/link";

export default function KolikTapetPage() {
  const [obvod, setObvod] = useState("");
  const [vyska, setVyska] = useState("");
  const [okna, setOkna] = useState("0");
  const [dvere, setDvere] = useState("0");
  const [vzor, setVzor] = useState("0");

  const o = parseFloat(obvod) || 0;
  const v = parseFloat(vyska) || 0;
  const ok = parseFloat(okna) || 0;
  const dv = parseFloat(dvere) || 0;
  const vz = parseFloat(vzor) || 0;

  // standardní role: šířka 0.53m, délka 10m = 5.3 m²
  const roleDelka = 10;
  const roleSirka = 0.53;
  const rolePlocha = roleDelka * roleSirka;

  const celkovaPlocha = o * v;
  const odecitame = ok * 1.5 + dv * 2.0; // průměrné rozměry okna a dveří
  const cistaPlocha = Math.max(0, celkovaPlocha - odecitame);
  const vzorPriplatek = vz > 0 ? Math.ceil(cistaPlocha * 0.10) : 0; // 10% navíc na vzor
  const celkemPlocha = cistaPlocha + vzorPriplatek;
  const pocetRoli = Math.ceil(celkemPlocha / rolePlocha);

  const hotovo = o > 0 && v > 0;

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "60px 32px 80px" }}>

        <nav style={{ fontSize: "13px", color: "#888", marginBottom: "32px", display: "flex", gap: "6px", alignItems: "center" }}>
          <Link href="/" style={{ color: "#888", textDecoration: "none" }}>Domů</Link>
          <span>/</span>
          <Link href="/kalkulacky" style={{ color: "#888", textDecoration: "none" }}>Kalkulačky</Link>
          <span>/</span>
          <span style={{ color: "#111" }}>Kolik tapet potřebuji?</span>
        </nav>

        <header style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#888", letterSpacing: "0.12em", marginBottom: "12px" }}>
            🌿 Kalkulačka
          </div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, margin: "0 0 14px" }}>
            Kolik tapet potřebuji?
          </h1>
          <p style={{ fontSize: "17px", color: "#666", fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
            Zadej obvod místnosti, výšku stropu a počet oken nebo dveří. Kalkulačka spočítá přesný počet rolí.
          </p>
        </header>

        <div style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "14px", padding: "32px", marginBottom: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>Obvod místnosti (m)</label>
              <input style={inputStyle} type="number" min="0" step="0.1" placeholder="např. 14" value={obvod} onChange={e => setObvod(e.target.value)} />
              <div style={{ fontSize: "12px", color: "#999", marginTop: "6px" }}>Součet všech čtyř stěn</div>
            </div>
            <div>
              <label style={labelStyle}>Výška místnosti (m)</label>
              <input style={inputStyle} type="number" min="0" step="0.1" placeholder="např. 2.6" value={vyska} onChange={e => setVyska(e.target.value)} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Počet oken</label>
              <input style={inputStyle} type="number" min="0" step="1" value={okna} onChange={e => setOkna(e.target.value)} />
              <div style={{ fontSize: "12px", color: "#999", marginTop: "6px" }}>~1,5 m² každé</div>
            </div>
            <div>
              <label style={labelStyle}>Počet dveří</label>
              <input style={inputStyle} type="number" min="0" step="1" value={dvere} onChange={e => setDvere(e.target.value)} />
              <div style={{ fontSize: "12px", color: "#999", marginTop: "6px" }}>~2,0 m² každé</div>
            </div>
            <div>
              <label style={labelStyle}>Vzor (cm)</label>
              <input style={inputStyle} type="number" min="0" step="1" placeholder="0 = bez vzoru" value={vzor} onChange={e => setVzor(e.target.value)} />
              <div style={{ fontSize: "12px", color: "#999", marginTop: "6px" }}>Výška vzoru v cm</div>
            </div>
          </div>
        </div>

        {hotovo ? (
          <div style={{ background: "#111", color: "#fff", borderRadius: "14px", padding: "32px", marginBottom: "24px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#aaa", marginBottom: "20px" }}>
              Výsledek výpočtu
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
              <ResultBox label="Celková plocha" value={cistaPlocha.toFixed(1)} unit="m²" />
              <ResultBox label="Se vzorem" value={celkemPlocha.toFixed(1)} unit="m²" />
              <ResultBox label="Počet rolí" value={`${pocetRoli}`} unit="rolí" />
            </div>
            <div style={{ marginTop: "20px", padding: "16px", background: "rgba(255,255,255,0.07)", borderRadius: "10px", fontSize: "14px", color: "#ccc", lineHeight: 1.6 }}>
              Počítáme se standardní rolí <strong style={{ color: "#fff" }}>0,53 m × 10 m = 5,3 m²</strong>. Pokud máš jiný rozměr role, přepočítej plochu {celkemPlocha.toFixed(1)} m² dle tvé role.
            </div>
          </div>
        ) : (
          <div style={{ background: "#f5f5f0", borderRadius: "14px", padding: "28px", textAlign: "center", color: "#999", fontSize: "15px", marginBottom: "24px" }}>
            Vyplň obvod a výšku místnosti a výsledek se zobrazí automaticky.
          </div>
        )}

        <div style={{ background: "#fffbeb", borderLeft: "3px solid #f59e0b", borderRadius: "0 10px 10px 0", padding: "16px 20px", marginBottom: "32px", fontSize: "14px", color: "#78716c", lineHeight: 1.6 }}>
          <strong style={{ color: "#333" }}>💡 Tip:</strong> Obvod místnosti spočítáš jednoduše: <strong>(délka + šířka) × 2</strong>. Kupuj vždy o 1–2 role navíc – dolepit pozdější poškozené místo ze stejné šarže je skoro nemožné.
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "14px", padding: "28px", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Na co dát pozor při nákupu tapet</h2>
          <p style={{ fontSize: "15px", color: "#555", fontWeight: 300, lineHeight: 1.7, marginBottom: "12px" }}>
            <strong>Šarže (dye lot):</strong> Vždy nakupuj tapety ze stejné šarže. I malý rozdíl ve výrobní dávce způsobí viditelný barevný nesoulad mezi rolemi.
          </p>
          <p style={{ fontSize: "15px", color: "#555", fontWeight: 300, lineHeight: 1.7, marginBottom: "12px" }}>
            <strong>Vzor a rapport:</strong> Tapety se vzorem se musí napojovat. Rapport (výška vzoru) udává, kolik materiálu při každém pruhu odřežeš navíc. Proto kalkulačka přidává 10 % při vzoru.
          </p>
          <p style={{ fontSize: "15px", color: "#555", fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
            <strong>Rozměry role:</strong> Nejčastější rozměr je 53 cm × 10 m, ale existují i role 70 cm nebo metrové. Vždy ověř rozměr na obalu.
          </p>
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
