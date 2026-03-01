"use client";
import React from "react";
import Link from "next/link";

export default function RozcestnikNavody() {
  const clanky = [
    { 
      id: "silikonovani-vany", // TENTO ID MUSÍ BÝT STEJNÝ JAKO NÁZEV SLOŽKY
      title: "Jak utěsnit vanu silikonem?", 
      desc: "Plíseň ve spáře nebo zatékání? Krok za krokem.",
      icon: "🚿",
      time: "30 MIN"
    }
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        
        <header style={{ marginBottom: "60px" }}>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0 }}>Návody</h1>
          <p style={{ color: "#888", fontSize: "18px", marginTop: "10px" }}>Praktické rady pro údržbu vašeho domova.</p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "30px" }}>
          {clanky.map((c) => (
            <Link key={c.id} href={`/navody/${c.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ 
                background: "#fff", 
                padding: "40px", 
                borderRadius: "20px", 
                border: "1px solid #e5e5e0",
                position: "relative",
                transition: "0.3s"
              }} className="card-hover">
                
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", fontSize: "12px", fontWeight: 700, color: "#aaa", textTransform: "uppercase" }}>
                  <span>Návod</span>
                  <span>⏱ {c.time}</span>
                </div>

                <div style={{ fontSize: "40px", marginBottom: "20px" }}>{c.icon}</div>
                
                <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "28px", marginBottom: "15px", lineHeight: 1.2 }}>
                  {c.title}
                </h2>
                
                <p style={{ color: "#666", lineHeight: 1.6, marginBottom: "30px" }}>
                  {c.desc}
                </p>

                <div style={{ borderTop: "1px solid #eee", paddingTop: "20px", fontWeight: 700 }}>
                  Číst →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: #111 !important;
        }
      `}</style>
    </div>
  );
}
