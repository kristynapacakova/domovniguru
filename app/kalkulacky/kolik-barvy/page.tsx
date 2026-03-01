"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function KalkulackaBarvy() {
  // Stav pro výpočty
  const [sirka, setSirka] = useState<number>(0);
  const [vyska, setVyska] = useState<number>(0);
  const [vrstvy, setVrstvy] = useState<number>(2);
  const [vydatnost, setVydatnost] = useState<number>(10); // m2 z litru
  const [vysledek, setVysledek] = useState<number>(0);

  useEffect(() => {
    const plocha = sirka * vyska;
    const celkemLitru = (plocha * vrstvy) / vydatnost;
    setVysledek(Number(celkemLitru.toFixed(2)));
  }, [sirka, vyska, vrstvy, vydatnost]);

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* DROBEČKOVÁ NAVIGACE */}
        <div style={{ marginBottom: "20px" }}>
          <Link href="/kalkulacky" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600, textTransform: "uppercase" }}>
            ← Zpět na kalkulačky
          </Link>
        </div>

        <header style={{ marginBottom: "40px", borderBottom: "1px solid #e5e5e0", paddingBottom: "30px" }}>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "42px", margin: 0, fontWeight: 400 }}>
            Kolik barvy potřebuji? 🪣
          </h1>
          <p style={{ color: "#666", fontSize: "16px", marginTop: "10px", fontWeight: 300 }}>
            Zadejte rozměry stěn a my vám spočítáme, kolik litrů barvy máte koupit.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "40px" }}>
          
          {/* FORMULÁŘ */}
          <div style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "12px", padding: "30px" }}>
            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, marginBottom: "8px", color: "#888", textTransform: "uppercase" }}>Šířka stěny (m)</label>
              <input 
                type="number" 
                value={sirka || ""} 
                onChange={(e) => setSirka(Number(e.target.value))}
                placeholder="např. 4.5"
                style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "16px" }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, marginBottom: "8px", color: "#888", textTransform: "uppercase" }}>Výška stěny (m)</label>
              <input 
                type="number" 
                value={vyska || ""} 
                onChange={(e) => setVyska(Number(e.target.value))}
                placeholder="např. 2.6"
                style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "16px" }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, marginBottom: "8px", color: "#888", textTransform: "uppercase" }}>Počet vrstev</label>
              <select 
                value={vrstvy} 
                onChange={(e) => setVrstvy(Number(e.target.value))}
                style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "16px", background: "#fff" }}
              >
                <option value={1}>1 vrstva (osvěžení)</option>
                <option value={2}>2 vrstvy (standard)</option>
                <option value={3}>3 vrstvy (tmavý podklad)</option>
              </select>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, marginBottom: "8px", color: "#888", textTransform: "uppercase" }}>Vydatnost barvy (m²/l)</label>
              <input 
                type="number" 
                value={vydatnost} 
                onChange={(e) => setVydatnost(Number(e.target.value))}
                style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "16px" }}
              />
              <p style={{ fontSize: "12px", color: "#aaa", marginTop: "8px" }}>Běžně bývá kolem 10–12 m² z litru (najdete na plechovce).</p>
            </div>
          </div>

          {/* VÝSLEDEK */}
          <div style={{ position: "sticky", top: "100px", height: "fit-content" }}>
            <div style={{ background: "#111", color: "#fff", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px", color: "#888" }}>Potřebujete celkem</div>
              <div style={{ fontSize: "64px", fontFamily: "DM Serif Display, serif", lineHeight: 1 }}>{vysledek}</div>
              <div style={{ fontSize: "18px", marginTop: "10px", color: "#aaa" }}>litrů barvy</div>
              
              <div style={{ marginTop: "30px", paddingTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "14px", color: "#888" }}>
                Zahrnuje plochu <strong>{(sirka * vyska).toFixed(1)} m²</strong> ve <strong>{vrstvy}</strong> vrstvách.
              </div>
            </div>
            
            <div style={{ marginTop: "20px", background: "#eef2ff", padding: "20px", borderRadius: "12px", fontSize: "13px", color: "#4338ca", border: "1px solid #c7d2fe" }}>
              <strong>Guru tip:</strong> Vždy kupte o 10 % více barvy na opravy a rezervu.
            </div>
          </div>

        </div>

        {/* DODATEČNÉ INFO POD ČAROU */}
        <section style={{ marginTop: "60px", borderTop: "1px solid #e5e5e0", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "24px", marginBottom: "20px" }}>Jak správně měřit?</h2>
          <p style={{ color: "#666", lineHeight: 1.6, fontWeight: 300 }}>
            Nezapomeňte od celkové plochy odečíst okna a dveře. Pokud máte místnost se 4 stěnami, spočítejte každou zvlášť nebo sečtěte jejich obvod a vynásobte výškou stropu.
          </p>
        </section>

      </div>
    </div>
  );
}
