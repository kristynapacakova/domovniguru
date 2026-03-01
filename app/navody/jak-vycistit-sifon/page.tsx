"use client";
import React from "react";
import Link from "next/link";

export default function NavodSifon() {
  const kroky = [
    { t: "Příprava", d: "Dejte pod sifon kýbl. Bude v něm stát voda a nechcete ji mít po celé koupelně." },
    { t: "Odšroubování", d: "Rukou (nebo instalatérskými kleštěmi přes hadr) povolte spodní matici sifonu." },
    { t: "Čištění", d: "Vyjměte usazeniny, vlasy a nečistoty. Vše propláchněte horkou vodou s jarem." },
    { t: "Kontrola těsnění", d: "Zkontrolujte, zda není gumička zpuchřelá. Pokud ano, kupte novou." },
    { t: "Sestavení", d: "Zašroubujte vše zpět. Dotahujte s citem, abyste nestrhli závit." }
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
        <Link href="/navody" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600, textTransform: "uppercase" }}>
          ← Zpět na návody
        </Link>

        <header style={{ margin: "40px 0", borderBottom: "1px solid #e5e5e0", paddingBottom: "30px" }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <span style={{ background: "#eee", padding: "4px 10px", borderRadius: "4px", fontSize: "10px", fontWeight: 700 }}>ÚDRŽBA</span>
            <span style={{ fontSize: "12px", color: "#888" }}>⏱ 10 min čtení</span>
          </div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "48px", margin: 0 }}>Jak vyčistit sifon? 🔧</h1>
        </header>

        <div style={{ background: "#fff", borderRadius: "16px", padding: "40px", border: "1px solid #e5e5e0" }}>
          {kroky.map((k, i) => (
            <div key={i} style={{ display: "flex", gap: "30px", marginBottom: "40px" }}>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", color: "#ddd" }}>0{i+1}</div>
              <div>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "20px" }}>{k.t}</h3>
                <p style={{ color: "#666", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>{k.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
