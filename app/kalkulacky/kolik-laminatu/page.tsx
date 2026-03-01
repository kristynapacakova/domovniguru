"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function KalkulackaLaminat() {
  const [sirka, setSirka] = useState<number>(0);
  const [delka, setDelka] = useState<number>(0);
  const [baleniM2, setBaleniM2] = useState<number>(2.22); // Standardní balík m2
  const [rezerva, setRezerva] = useState<number>(10); // 10 % rezerva

  const [vysledekM2, setVysledekM2] = useState<number>(0);
  const [vysledekBaleni, setVysledekBaleni] = useState<number>(0);

  useEffect(() => {
    const cistaPlocha = sirka * delka;
    const plochaSRezervou = cistaPlocha * (1 + rezerva / 100);
    const potrebneBaliky = Math.ceil(plochaSRezervou / baleniM2);
    
    setVysledekM2(Number(plochaSRezervou.toFixed(2)));
    setVysledekBaleni(potrebneBaliky);
  }, [sirka, delka, baleniM2, rezerva]);

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
        
        <Link href="/kalkulacky" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600, textTransform: "uppercase" }}>
          ← Zpět na kalkulačky
        </Link>

        <header style={{ marginBottom: "40px", borderBottom: "1px solid #e5e5e0", paddingBottom: "30px", marginTop: "20px" }}>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "42px", margin: 0 }}>
            Kolik laminátu potřebuji? 📐
          </h1>
          <p style={{ color: "#666", fontSize: "16px", marginTop: "10px", fontWeight: 300 }}>
            Výpočet plochy podlahy včetně nutné rezervy na prořezy a zaokrouhlení na celá balení.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px" }}>
          
          <div style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "12px", padding: "30px" }}>
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888", textTransform: "uppercase" }}>Šířka místnosti (m)</label>
              <input type="number" value={sirka || ""} onChange={(e) => setSirka(Number(e.target.value))} placeholder="např. 4" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888", textTransform: "uppercase" }}>Délka místnosti (m)</label>
              <input type="number" value={delka || ""} onChange={(e) => setDelka(Number(e.target.value))} placeholder="např. 5" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888", textTransform: "uppercase" }}>Obsah jednoho balení (m²)</label>
              <input type="number" value={baleniM2} onChange={(e) => setBaleniM2(Number(e.target.value))} style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
              <p style={{ fontSize: "11px", color: "#aaa", marginTop: "5px" }}>Najdete na štítku v obchodě (často kolem 2.2 m²).</p>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888", textTransform: "uppercase" }}>Rezerva na prořez (%)</label>
              <select value={rezerva} onChange={(e) => setRezerva(Number(e.target.value))} style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff" }}>
                <option value={5}>5 % (rovná pokládka)</option>
                <option value={10}>10 % (standard)</option>
                <option value={15}>15 % (pokládka na koso)</option>
              </select>
            </div>
          </div>

          <div style={{ position: "sticky", top: "100px", height: "fit-content" }}>
            <div style={{ background: "#111", color: "#fff", borderRadius: "12px", padding: "35px", textAlign: "center" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", marginBottom: "15px" }}>Kupte celkem</div>
              <div style={{ fontSize: "56px", fontFamily: "DM Serif Display, serif", lineHeight: 1 }}>{vysledekBaleni}</div>
              <div style={{ fontSize: "16px", marginTop: "10px", color: "#aaa" }}>balení podlahy</div>
              
              <div style={{ marginTop: "25px", paddingTop: "25px", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "left", fontSize: "13px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#888" }}>Čistá plocha:</span>
                  <span>{(sirka * delka).toFixed(2)} m²</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#888" }}>Plocha s rezervou:</span>
                  <span>{vysledekM2} m²</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
