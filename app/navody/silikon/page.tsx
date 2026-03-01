"use client";
import React from "react";
import Link from "next/link";

export default function NavodSilikon() {
  const nastroje = [
    "Kvalitní sanitární silikon (s protiplísňovou úpravou)",
    "Aplikační pistole na kartuše",
    "Rozprašovač s vodou a trochou jaru (mýdlová voda)",
    "Silikonová stěrka nebo vlastní prst",
    "Papírové utěrky (hodně!)",
    "Technický benzín nebo líh na odmaštění"
  ];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
        
        <Link href="/navody" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600, textTransform: "uppercase" }}>
          ← Zpět na návody
        </Link>

        <header style={{ margin: "40px 0 60px" }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <span style={{ background: "#111", color: "#fff", padding: "4px 12px", borderRadius: "4px", fontSize: "10px", fontWeight: 700 }}>KOUPELNA</span>
            <span style={{ fontSize: "12px", color: "#888", fontWeight: 500 }}>⏱ 30 min práce</span>
          </div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, lineHeight: 1.1 }}>
            Jak nasilikonovat vanu jako profík
          </h1>
          <p style={{ fontSize: "20px", color: "#666", marginTop: "25px", lineHeight: 1.6, fontWeight: 300 }}>
            Plesnivé rohy nebo zatékání za vanu? Nový silikon osvěží celou koupelnu. Tajemství není v pistoli, ale v mýdlové vodě.
          </p>
        </header>

        <section style={{ background: "#f2f2ee", borderRadius: "16px", padding: "40px", marginBottom: "60px" }}>
          <h3 style={{ fontFamily: "DM Serif Display, serif", fontSize: "24px", marginBottom: "20px" }}>Co budete potřebovat:</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            {nastroje.map((n, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#444" }}>
                <span style={{ color: "#111", fontWeight: "bold" }}>•</span> {n}
              </li>
            ))}
          </ul>
        </section>

        <div style={{ color: "#1a1a1a", lineHeight: 1.8, fontSize: "18px", fontWeight: 300 }}>
          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px" }}>Krok 1: Odstranění starého silikonu</h2>
          <p>
            Tohle je ta nejnudnější část, ale nejdůležitější. Starý silikon musíte vyškrábnout **úplně celý**. Použijte nůž nebo speciální škrabku. Povrch musí být hladký a čistý.
          </p>

          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginTop: "40px" }}>Krok 2: Odmaštění (Klíč k úspěchu)</h2>
          <p>
            I když to vypadá čistě, přejeďte spáru hadříkem s technickým benzínem nebo lihem. Pokud tam zůstane mastnota z mýdla, nový silikon se za měsíc odlepí a začne tam zatékat.
          </p>

          <div style={{ background: "#fff", border: "2px solid #111", padding: "30px", borderRadius: "12px", margin: "40px 0" }}>
            <h4 style={{ margin: "0 0 10px 0", textTransform: "uppercase", fontSize: "14px" }}>💡 Guru Tip: Napusťte vanu</h4>
            <p style={{ margin: 0, fontSize: "16px" }}>
              Před silikonováním napusťte vanu vodou. Vana si "sedne" o pár milimetrů níž. Pokud byste silikonovali prázdnou vanu, mohl by silikon po prvním vykoupání (pod vaší vahou) prasknout.
            </p>
          </div>

          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginTop: "40px" }}>Krok 3: Aplikace silikonu</h2>
          <p>
            Seřízněte špičku kartuše pod úhlem 45 stupňů. Pomalu a plynule nanášejte silikon do spáry. Nesnažte se o dokonalost hned teď, stačí tam mít souvislou "housenku" materiálu.
          </p>

          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginTop: "40px" }}>Krok 4: Uhlazení (Tady se děje kouzlo)</h2>
          <p>
            Celou spáru postříkejte rozprašovačem s **mýdlovou vodou**. Poté stěrkou (nebo prstem) jedním plynulým pohybem silikon uhlaďte. Díky mýdlu se silikon nepřilepí tam, kam nemá, a vytvoří krásný hladký náběh.
          </p>
        </div>

        <footer style={{ marginTop: "80px", textAlign: "center", borderTop: "1px solid #eee", paddingTop: "40px" }}>
          <p style={{ color: "#888", fontSize: "14px" }}>Povedlo se? Pošlete nám fotku vaší nové koupelny!</p>
        </footer>
      </article>
    </div>
  );
}