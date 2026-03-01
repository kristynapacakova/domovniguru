"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ZimniChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  
  const sekce = [
    {
      titul: "Voda a instalace (Kritické)",
      ukoly: [
        "Vypustit vodu z venkovních kohoutů a nechat je otevřené",
        "Uklidit zahradní hadice do nemrznoucího prostoru",
        "Izolovat trubky v nevytápěných částech domu (sklep, půda)",
        "Kontrola a vyčištění filtrů u hlavního uzávěru vody"
      ]
    },
    {
      titul: "Topení a teplo",
      ukoly: [
        "Odvzdušnit všechny radiátory v celém domě",
        "Kontrola tlaku v expanzní nádobě (měl by být v zeleném)",
        "Revize / servis kotle nebo tepelného čerpadla",
        "Výměna baterií v pokojovém termostatu",
        "Vyčištění komína a revize spalinových cest"
      ]
    },
    {
      titul: "Izolace a průvany",
      ukoly: [
        "Přepnutí oken na zimní režim (zvýšení přítlaku)",
        "Kontrola těsnění u vchodových a balkonových dveří",
        "Instalace kartáčů nebo lišt pod dveře, kudy táhne",
        "Zakrytí / zaizolování sklepních okének"
      ]
    }
  ];

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "40px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <div className="no-print" style={{ marginBottom: "20px" }}>
          <Link href="/checklisty" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600 }}>← ZPĚT</Link>
        </div>
        <article style={{ background: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid #e5e5e0" }}>
          <header style={{ marginBottom: "40px", textAlign: "center", borderBottom: "2px solid #111", paddingBottom: "20px" }}>
            <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "36px", margin: 0 }}>Příprava na zimu ❄️</h1>
            <p style={{ color: "#888", fontSize: "12px", marginTop: "10px" }}>DomovníGuru.cz — Aby vás mráz nepřekvapil</p>
          </header>
          {sekce.map((s, sIdx) => (
            <div key={sIdx} style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "20px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>{s.titul}</h3>
              {s.ukoly.map((u, uIdx) => {
                const id = `${sIdx}-${uIdx}`;
                return (
                  <div key={id} onClick={() => toggle(id)} style={{ display: "flex", gap: "10px", padding: "10px 0", cursor: "pointer", alignItems: "center" }}>
                    <div style={{ width: "20px", height: "20px", border: "2px solid #111", background: checked[id] ? "#111" : "transparent", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>{checked[id] && "✓"}</div>
                    <span style={{ textDecoration: checked[id] ? "line-through" : "none", color: checked[id] ? "#ccc" : "#000" }}>{u}</span>
                  </div>
                );
              })}
            </div>
          ))}
          <button onClick={() => window.print()} className="no-print" style={{ width: "100%", padding: "15px", background: "#111", color: "#fff", border: "none", borderRadius: "6px", fontWeight: 700, cursor: "pointer", marginTop: "20px" }}>
            TISKNOUT / ULOŽIT PDF
          </button>
        </article>
      </div>
      <style>{` @media print { .no-print { display: none !important; } body { background: white !important; } } `}</style>
    </div>
  );
}