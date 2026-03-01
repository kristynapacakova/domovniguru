"use client";
import React from "react";
import Link from "next/link";

export default function RozcestnikChecklisty() {
  const checklisty = [
    { 
      id: "jarni-udrzba", 
      icon: "🌱", 
      title: "Jarní údržba domu", 
      desc: "Kompletní technický audit od střechy po zahradu po zimní sezóně." 
    },
    { 
      id: "priprava-na-zimu", 
      icon: "❄️", 
      title: "Příprava na zimu", 
      desc: "Zabezpečení topení, oken a venkovních rozvodů před mrazy." 
    },
    { 
      id: "stehovani", 
      icon: "🏠", 
      title: "Stěhování", 
      desc: "Administrativní i praktický seznam úkolů při změně bydlení." 
    }
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        
        <header style={{ marginBottom: "60px", borderBottom: "1px solid #e5e5e0", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "15px" }}>Sezónní údržba</div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, fontWeight: 400 }}>Checklisty</h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "15px", maxWidth: "600px", fontWeight: 300 }}>
            Vyberte si konkrétní seznam úkolů. Každý checklist si můžete interaktivně odškrtat nebo vytisknout jako PDF.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px" }}>
          {checklisty.map(c => (
            <Link key={c.id} href={`/checklisty/${c.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="checklist-card" style={{ 
                background: "#fff", 
                padding: "40px", 
                borderRadius: "16px", 
                border: "1px solid #e5e5e0", 
                height: "100%",
                transition: "0.3s ease"
              }}>
                <div style={{ fontSize: "40px", marginBottom: "20px" }}>{c.icon}</div>
                <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "26px", marginBottom: "12px" }}>{c.title}</h2>
                <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.6, marginBottom: "25px", fontWeight: 300 }}>{c.desc}</p>
                <div style={{ fontWeight: 600, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#111", borderTop: "1px solid #f5f5f0", paddingTop: "20px" }}>
                  Zobrazit seznam →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .checklist-card:hover {
          border-color: #111;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
        }
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
