import type { Metadata } from "next";
import Link from "next/link";
import SpotrebaDrevaCalculator from "@/app/components/SpotrebaDrevaCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka spotřeby dřeva a pelet 2026 – kolik na topnou sezónu?",
  description: "Spočítej roční spotřebu dřeva nebo pelet podle vytápěné plochy, délky sezóny a zateplení domu. Výsledek v kilogramech, prostorových metrech, pytlích i nákladech.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/spotreba-dreva-pelet" },
  openGraph: { title: "Kalkulačka spotřeby dřeva a pelet 2026", description: "Kolik dřeva nebo pelet na topnou sezónu? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/spotreba-dreva-pelet", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20spot%C5%99eby%20d%C5%99eva%20a%20pelet%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka spotřeby dřeva a pelet 2026" }] },
};

export default function SpotrebaDrevaPeletPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Spotřeba dřeva a pelet</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik dřeva nebo pelet na topnou sezónu?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej vytápěnou plochu, délku sezóny, typ paliva a zateplení — kalkulačka spočítá roční spotřebu dřeva nebo pelet i orientační náklady.</p>

        <SpotrebaDrevaCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak odhadnout roční spotřebu paliva</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Roční spotřeba dřeva nebo pelet vychází z potřeby tepla na vytápění, kterou určuje především kvalita zateplení. Dobře zateplený dům spotřebuje kolem 70 kWh na metr čtvereční za rok, průměrný dům okolo 120 kWh/m²/rok a starší nezateplená stavba klidně 180 kWh/m²/rok i více. Tuto potřebu tepla pak přepočítáme na palivo podle jeho výhřevnosti a účinnosti kotle.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tvrdé palivové dřevo (buk, dub) má při vlhkosti do 20 % výhřevnost přibližně 4,1 kWh/kg a spaluje se s účinností kotle okolo 75 %. Pelety mají vyšší a stabilnější výhřevnost kolem 4,8 kWh/kg a moderní peletové kotle dosahují účinnosti přes 90 %, takže na stejné teplo spotřebujete méně kilogramů. Kalkulačka přepočítá dřevo i na prostorové metry (u tvrdého dřeva počítáme zhruba 400 kg na prostorový metr) a pelety na pytle po 15 kg.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Klíčem k nízké spotřebě je suché dřevo. Čerstvě pokácené dřevo má vlhkost i přes 50 % a jeho výhřevnost je zhruba poloviční — velká část energie se spotřebuje na odpaření vody. Dřevo proto nechte schnout ideálně dvě topné sezóny na větraném místě pod střechou. Pelety skladujte v suchu, protože navlhlé pelety se rozpadají a v podavači kotle způsobují poruchy.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Topení dřevem vs. peletami", href: "/blog/topeni-drevem-vs-peletami", icon: "🔥" },
              { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", icon: "💰" },
              { title: "Výkon radiátoru", href: "/kalkulacky/vykon-radiatoru", icon: "🔥" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display: "block", background: "#f8f4f0", border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 16px", textDecoration: "none" }}>
                <div style={{ fontSize: "18px", marginBottom: "6px" }}>{r.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#2a2a28", lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ fontSize: "12px", color: "#8a8a80", marginTop: "6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
