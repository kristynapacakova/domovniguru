import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak vyčistit sifon – krok za krokem",
  description: "Smrdí odpad nebo pomalu odtéká voda? Vyčistěte sifon sami za 10 minut bez chemie. Postup pro umyvadlo, vanu i kuchyňský dřez.",
  alternates: { canonical: "https://www.domovniguru.cz/navody/jak-vycistit-sifon" },
  openGraph: { title: "Jak vyčistit sifon – krok za krokem", description: "Smrdí odpad nebo pomalu odtéká voda? Vyčistěte sifon sami za 10 minut bez chemie. Postup pro umyvadlo, vanu i kuchyňský dřez.", url: "https://www.domovniguru.cz/navody/jak-vycistit-sifon", type: "article", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
};

export default function NavodSifonObsahly() {
  const nastroje = ["Kýbl nebo hlubší miska", "Hadra (kterou pak můžete vyhodit)", "Starý kartáček na zuby", "Gumové rukavice", "Instalatérské siko kleště (volitelné)"];

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
        
        <Link href="/navody" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          ← Zpět na všechny návody
        </Link>

        <header style={{ margin: "40px 0 60px" }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <span style={{ background: "#111", color: "#fff", padding: "4px 12px", borderRadius: "4px", fontSize: "10px", fontWeight: 700 }}>ÚDRŽBA</span>
            <span style={{ fontSize: "12px", color: "#888", fontWeight: 500 }}>⏱ 15 min práce</span>
            <span style={{ fontSize: "12px", color: "#888", fontWeight: 500 }}>• Obtížnost: Snadné</span>
          </div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, lineHeight: 1.1 }}>
            Jak vyčistit sifon a zbavit se zápachu
          </h1>
          <p style={{ fontSize: "20px", color: "#666", marginTop: "25px", lineHeight: 1.6, fontWeight: 300 }}>
            Odtéká voda pomalu nebo se z koupelny line nepříjemný zápach? Než zavoláte instalatéra za tisícovku, zkuste tohle. Je to špinavá práce, ale zvládnete ji za čtvrt hodiny.
          </p>
        </header>

        {/* CO BUDETE POTŘEBOVAT */}
        <section style={{ background: "#f2f2ee", borderRadius: "16px", padding: "40px", marginBottom: "60px" }}>
          <h3 style={{ fontFamily: "DM Serif Display, serif", fontSize: "24px", marginBottom: "20px" }}>Co si připravit:</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            {nastroje.map((n, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#444" }}>
                <span style={{ color: "#888" }}>✓</span> {n}
              </li>
            ))}
          </ul>
        </section>

        {/* SAMOTNÝ POSTUP */}
        <div style={{ color: "#1a1a1a", lineHeight: 1.8, fontSize: "18px", fontWeight: 300 }}>
          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginTop: "50px" }}>Krok 1: Příprava bojiště</h2>
          <p>
            V sifonu je neustále voda (proto tam je, aby blokovala pachy z kanalizace). Jakmile ho povolíte, ta voda vyteče. **Dejte pod něj kýbl.** Pokud je sifon v kuchyni pod dřezem, vykliďte si nejdřív všechny čistící prostředky, ať máte místo na ruce.
          </p>

          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginTop: "50px" }}>Krok 2: Povolení uzávěru</h2>
          <p>
            Většina moderních sifonů je z plastu. Měly by jít povolit rukou. Pokud to nejde, použijte siko kleště, ale **pozor**: čelisti obalte hadrem, abyste plast nepoškrábali nebo nezdeformovali. Točte doleva.
          </p>

          <div style={{ background: "#fff", border: "1px solid #e5e5e0", padding: "30px", borderRadius: "12px", margin: "40px 0" }}>
            <h4 style={{ margin: "0 0 10px 0", color: "#d97706" }}>⚠️ Varování</h4>
            <p style={{ margin: 0, fontSize: "16px" }}>
              Připravte se na to, že to, co vypadne, nebude vonět po fialkách. Jsou to rozkládající se zbytky jídla, mýdla a vlasů. Rukavice jsou v tuhle chvíli váš nejlepší přítel.
            </p>
          </div>

          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginTop: "50px" }}>Krok 3: Mechanické čištění</h2>
          <p>
            Teď, když máte spodní část v kýblu, pořádně ji vyškrábejte. Použijte starý zubní kartáček na závity. Nezapomeňte prstem nebo kartáčkem sáhnout i do té horní trubky, která vede z umyvadla – tam se vlasy zachytávají nejčastěji.
          </p>

          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginTop: "50px" }}>Krok 4: Kontrola těsnění</h2>
          <p>
            V sifonu jsou gumové kroužky. Pokud jsou tvrdé, popraskané nebo "oslizlé" tak, že se drolí, kupte nové. Stojí pár korun. Pokud je guma v pořádku, jen ji otřete od nečistot.
          </p>

          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginTop: "50px" }}>Krok 5: Složení a test těsnosti</h2>
          <p>
            Našroubujte uzávěr zpět. **Dotahujte s citem.** Plastové závity jsou náchylné na stržení. Jakmile máte hotovo, pusťte vodu naplno a sledujte, jestli pod sifonem neprolíná ani kapka. Pokud ano, zkuste ho mírně dotáhnout.
          </p>
        </div>

        {/* FAQ */}
        <section style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid #e5e5e0" }}>
          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "32px", marginBottom: "24px" }}>Časté otázky</h2>
          <div className="faq-list-s">
            {[
              { q: "Jak poznám, že sifon potřebuje vyčistit?", a: "Dva jasné příznaky: voda odtéká pomalu nebo stojí v umyvadle/dřezu, nebo z odpadu line nepříjemný zápach. Pokud se zápach vrací i po zalití vroucí vodou se sodou, je čas na mechanické vyčistění sifonu." },
              { q: "Musím kvůli ucpanému sifonu volat instalatéra?", a: "Ne. Vyčistění sifonu je jednoduchá práce pro každého – stačí plastové kleště (nebo ruce), kýbl a kartáček. Instalatéra vol jen tehdy, pokud problém přetrvává i po vyčistění sifonu nebo pokud voda odtéká pomalu v celém bytě." },
              { q: "Co dělat, když sifon teče po složení?", a: "Zkus ho mírně dotáhnout – ne příliš, plastové závity se snadno poničí. Pokud teče stále, pravděpodobně je problém s gumovým těsněním (kroužkem). Nové těsnění stojí pár korun a koupíš ho v každém hobbymarketu." },
              { q: "Jak předejít ucpání sifonu?", a: "Hlavní příčiny ucpání jsou vlasy a tuk. Kup lapač vlasů do odtoku (30–80 Kč) – jednoduché síto, které zachytí vlasy. Jednou týdně zalijte odtok vroucí vodou smíchanou s trochou sody – rozkládá tukové usazeniny." },
              { q: "Je nebezpečné čistit sifon bez odborníka?", a: "Ne, pokud jde o standardní plastový sifon. Jedinou potenciální komplikací je příliš tvrdé utažení plastového závitu – stržené závity si vyžádají výměnu celého sifonu. Dotahujte s citem a mějte po ruce nové těsnění pro případ, že je staré opotřebované." },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item-s">
                <summary className="faq-q-s">{q}</summary>
                <p className="faq-a-s">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FOOTER ČLÁNKU */}
        <footer style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid #e5e5e0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 600 }}>Pomohl vám tento návod?</div>
              <div style={{ fontSize: "14px", color: "#888" }}>Sdílejte ho se známými, kterým to doma taky "voní".</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
               <button style={{ background: "#eee", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}>Ano, super!</button>
            </div>
          </div>
        </footer>
      </article>
      <style>{`
        .faq-list-s{display:flex;flex-direction:column;gap:8px;margin:40px 0}
        .faq-item-s{border:1px solid #e5e5e0;border-radius:10px;overflow:hidden;background:#fff}
        .faq-q-s{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}
        .faq-q-s:hover{background:#f5f5f2}
        .faq-q-s::after{content:"+";font-size:18px;font-weight:300;flex-shrink:0;margin-left:12px}
        details[open] .faq-q-s::after{content:"−"}
        .faq-a-s{font-size:14px;line-height:1.65;color:#666;font-weight:300;padding:0 20px 16px}
      `}</style>
    </div>
  );
}
