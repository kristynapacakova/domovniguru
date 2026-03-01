"use client";
import React from "react";
import Link from "next/link";

export default function BlogHub() {
  const clanky = [
    { cat: "MALOVÁNÍ", title: "Jak malovat zeď – kompletní průvodce pro začátečníky", desc: "Krok za krokem: příprava podkladu, nátěr, výběr barvy.", time: "5 min čtení" },
    { cat: "ELEKTRIKA", title: "LED vs. žárovky – co se skutečně vyplatí?", desc: "Srovnání spotřeby, životnosti a ceny. Kdy přejít na LED?", time: "4 min čtení" },
    { cat: "ZAHRADA", title: "Jak připravit zahradu na jaro – kompletní checklist", desc: "Co udělat v březnu a dubnu, aby zahrada vypadala skvěle.", time: "6 min čtení" },
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: "60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <header style={{ marginBottom: "60px", borderBottom: "1px solid #e5e5e0", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "15px" }}>Čtení pro majitele domů</div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, fontWeight: 400 }}>Blog</h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "15px", maxWidth: "600px", fontWeight: 300, lineHeight: 1.6 }}>
            Zajímavosti, srovnání a rady, které vám pomohou lépe rozumět vaší domácnosti.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", paddingBottom: "80px" }}>
          {clanky.map((b, i) => (
            <Link key={i} href="#" className="dg-card">
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#888", marginBottom: "12px", textTransform: "uppercase" }}>{b.cat}</div>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "22px", margin: "10px 0", lineHeight: 1.3 }}>{b.title}</div>
              <p style={{ fontSize: "14px", color: "#666", margin: "0 0 20px 0", fontWeight: 300, lineHeight: 1.5 }}>{b.desc}</p>
              <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: "12px", paddingTop: "20px", borderTop: "1px solid #f5f5f0" }}>
                <span>⏱ {b.time}</span><span>Číst →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`.dg-card { background: #fff; border: 1px solid #e5e5e0; border-radius: 12px; padding: 30px; text-decoration: none; color: inherit; transition: 0.3s ease; display: flex; flex-direction: column; } .dg-card:hover { border-color: #111; transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.06); }`}</style>
    </div>
  );
}
