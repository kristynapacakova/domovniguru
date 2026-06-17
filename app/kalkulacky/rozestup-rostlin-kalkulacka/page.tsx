import type { Metadata } from "next";
import Link from "next/link";
import RozestupCalculator from "@/app/components/RozestupCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka rozestupu rostlin 2026 – kolik rostlin na záhon",
  description: "Kolik rostlin se vejde na váš záhon? Zadejte plochu a rozestup – kalkulačka okamžitě spočítá počet rostlin na m² i celkový počet pro danou plochu.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/rozestup-rostlin-kalkulacka" },
  openGraph: { title: "Kalkulačka rozestupu rostlin 2026", description: "Kolik rostlin se vejde na váš záhon? Zadejte plochu a rozestup – kalkulačka okamžitě spočítá počet rostlin na m² i celkový počet pro danou plochu.", url: "https://www.domovniguru.cz/kalkulacky/rozestup-rostlin-kalkulacka", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20rozestupu%20rostlin%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka rozestupu rostlin 2026" }] },
};

export default function RozestupRostlinKalkulackaPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Rozestup rostlin</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik rostlin se vejde na můj záhon?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadejte plochu záhonu a rozestup mezi rostlinami — kalkulačka vám okamžitě spočítá, kolik rostlin se na záhon vejde a kolik kusů na m².</p>

        <RozestupCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Proč je správný rozestup rostlin tak důležitý</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozestup mezi rostlinami není jen otázka estetiky nebo úspory místa — má přímý dopad na zdraví a výnos celého záhonu. Příliš hustá výsadba omezuje proudění vzduchu mezi rostlinami, vlhkost se pak déle udržuje na listech a stoncích a vzniká ideální prostředí pro houbové choroby, jako je plíseň bramborová, padlí nebo různé typy hnilob. Naopak dostatečný rozestup umožňuje vzduchu volně proudit, listy rychleji osychají po dešti či zálivce a riziko infekce výrazně klesá.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dalším klíčovým faktorem je konkurence o živiny, vodu a světlo. Když jsou rostliny vysazeny příliš blízko sebe, jejich kořenové systémy si navzájem konkurují o vodu a minerály v půdě, což zpomaluje růst a snižuje výnos i kvalitu plodů. Stejně tak listy sousedních rostlin si vzájemně stíní — rostliny pak musí investovat energii do růstu směrem ke světlu místo do tvorby plodů či kořenů. U slunomilných druhů, jako jsou rajčata nebo paprika, se nedostatek světla projeví výrazně nižší sklizní.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Přehoustnutí záhonu také komplikuje běžnou péči — okopávání, hnojení, sledování škůdců i samotnou sklizeň. Naopak příliš velký rozestup znamená neefektivní využití prostoru a nižší celkový výnos z plochy záhonu. Cílem je proto najít rovnováhu, která odpovídá konkrétnímu druhu rostliny, jejímu vzrůstu a nárokům na prostor. Menší a kompaktnější druhy jako saláty nebo špenát si vystačí s rozestupem 20–25 cm, zatímco rozpínavé a robustní rostliny, jako keře rybízu nebo angreštu, potřebují 60–100 cm prostoru, aby se mohly plně rozrůst.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Orientační rozestupy pro běžné plodiny v zahradě:
          </p>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e8e0d8" }}>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#2a2a28" }}>Plodina</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#2a2a28" }}>Doporučený rozestup</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rajčata", "40–50 cm"],
                  ["Papriky", "35–45 cm"],
                  ["Saláty", "20–25 cm"],
                  ["Špenát", "20–25 cm"],
                  ["Jahody", "30 cm"],
                  ["Mrkev", "5–8 cm"],
                  ["Cibule", "10–15 cm"],
                  ["Okurky (na zemi)", "60–80 cm"],
                  ["Keře (rybíz, angrešt)", "60–100 cm"],
                ].map(([plodina, hodnota]) => (
                  <tr key={plodina} style={{ borderBottom: "1px solid #e8e0d8" }}>
                    <td style={{ padding: "8px 12px", color: "#3a3a30" }}>{plodina}</td>
                    <td style={{ padding: "8px 12px", color: "#3a3a30" }}>{hodnota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Tyto hodnoty jsou orientační — konkrétní rozestup se může lišit podle odrůdy, způsobu pěstování (volná půda, vyvýšený záhon, skleník) a místních podmínek. Při pochybnostech je vždy lepší zvolit raději o trochu větší rozestup, protože přehoustlý záhon je obtížné napravit zpětně, zatímco mírně volnější výsadba jen o málo snižuje celkový výnos z plochy.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak pěstovat rajčata", href: "/blog/jak-pestovat-rajcata", icon: "🍅" },
              { title: "Jarní zahrada – co nezapomenout", href: "/blog/jarni-zahrada", icon: "🌷" },
              { title: "Kalkulačka osiva na záhon", href: "/kalkulacky/kolik-osiva", icon: "🌾" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display:"block", background:"#f8f4f0", border:"1px solid #e8e0d8", borderRadius:"10px", padding:"14px 16px", textDecoration:"none" }}>
                <div style={{ fontSize:"18px", marginBottom:"6px" }}>{r.icon}</div>
                <div style={{ fontSize:"14px", fontWeight:500, color:"#2a2a28", lineHeight:1.4 }}>{r.title}</div>
                <div style={{ fontSize:"12px", color:"#8a8a80", marginTop:"6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
