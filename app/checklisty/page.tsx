"use client";
import React from "react";

export default function ChecklistyHub() {
  const checklisty = [
    { icon: "🌱", title: "Jaro v domácnosti", items: ["Vyčistit okapy", "Zkontrolovat střechu po zimě", "Přepnout okna na letní těsnění", "Odvětrat sklep"] },
    { icon: "❄️", title: "Příprava na zimu", items: ["Odvzdušnit radiátory", "Nastavit okna na zimní těsnění", "Zkontrolovat kotel", "Utěsnit průvany u dveří"] },
    { icon: "🏠", title: "Stěhování do nového", items: ["Zkontrolovat elektřinu a vodu", "Vyměnit zámky", "Změřit místnosti", "Nafotit stav před nastěhováním"] },
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: "60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <header style={{ marginBottom: "60px", borderBottom: "1px solid #e5e5e0", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "15px" }}>Sezónní údržba</div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, fontWeight: 400 }}>Checklisty</h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "15px", maxWidth: "600px", fontWeight: 300, lineHeight: 1.6 }}>
            Nezapomeňte na žádnou důležitou údržbu. Stačí si odškrtat body a mít klid v duši.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", paddingBottom: "80px" }}>
          {checklisty.map((c, i) => (
            <div key={i} style={{ background: "#f2f2ee", border: "none", borderRadius: "12px", padding: "30px" }}>
              <span style={{ fontSize: "32px", display: "block", marginBottom: "20px" }}>{c.icon}</span>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#888", marginBottom: "10px", textTransform: "uppercase" }}>Checklist</div>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "22px", marginBottom: "20px" }}>{c.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {c.items.map((item, idx) => (
                  <li key={idx} style={{ fontSize: "14px", color: "#666", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ display: "inline-block", width: "16px", height: "16px", border: "1px solid #ccc", borderRadius: "3px" }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}