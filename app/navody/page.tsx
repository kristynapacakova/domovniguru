"use client";
import React from "react";
import Link from "next/link";

export default function NavodyHub() {
  const navody = [
    { icon: "🔧", time: "10 min", title: "Jak vyčistit sifon?", desc: "Smradí odpad nebo pomalu odtéká? Vyřeš to za 10 minut." },
    { icon: "🚿", time: "30 min", title: "Jak utěsnit vanu silikonem?", desc: "Plíseň ve spáře nebo zatékání? Krok za krokem." },
    { icon: "🪟", time: "15 min", title: "Jak nastavit okna na zimu?", desc: "Přetočení kování = teplejší byt a nižší účty." },
    { icon: "🧹", time: "20 min", title: "Jak vyčistit spáry v dlažbě?", desc: "Zčernalé spáry bez drhnutí. Funguje to." },
    { icon: "💡", time: "25 min", title: "Jak vyměnit zásuvku?", desc: "Bezpečně, levně a bez elektrikáře." },
    { icon: "🌡️", time: "10 min", title: "Jak odvzdušnit radiátor?", desc: "Studený radiátor nahoře? Takhle to napravíš." },
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: "60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <header style={{ marginBottom: "60px", borderBottom: "1px solid #e5e5e0", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "15px" }}>Kutilské postupy</div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, fontWeight: 400 }}>Návody</h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "15px", maxWidth: "600px", fontWeight: 300, lineHeight: 1.6 }}>
            Jednoduché postupy pro opravy a údržbu domácnosti, které zvládnete sami bez drahých řemeslníků.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", paddingBottom: "80px" }}>
          {navody.map((n, i) => (
            <Link key={i} href="#" className="dg-card">
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", fontWeight: 700, color: "#888", marginBottom: "15px", textTransform: "uppercase" }}>
                <span>Návod</span><span>⏱ {n.time}</span>
              </div>
              <span style={{ fontSize: "32px", display: "block", marginBottom: "15px" }}>{n.icon}</span>
              <div style={{ fontFamily: "DM Serif Display, serif", fontSize: "22px", margin: "10px 0", lineHeight: 1.2 }}>{n.title}</div>
              <p style={{ fontSize: "14px", color: "#666", margin: 0, fontWeight: 300, lineHeight: 1.5 }}>{n.desc}</p>
              <div style={{ marginTop: "25px", fontWeight: 600, fontSize: "13px", paddingTop: "20px", borderTop: "1px solid #f5f5f0" }}>Číst návod →</div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`.dg-card { background: #fff; border: 1px solid #e5e5e0; border-radius: 12px; padding: 30px; text-decoration: none; color: inherit; transition: 0.3s ease; } .dg-card:hover { border-color: #111; transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.06); }`}</style>
    </div>
  );
}
