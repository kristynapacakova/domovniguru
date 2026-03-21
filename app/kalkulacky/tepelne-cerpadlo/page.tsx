// ════════════════════════════════════════════════════════════════
// SEO SEKCE — vlož do app/kalkulacky/tepelne-cerpadlo/page.tsx
// pod komponentu <HeatPumpCalculator />
// ════════════════════════════════════════════════════════════════

// UKÁZKA KOMPLETNÍ PAGE.TSX:

import type { Metadata } from "next";
import Link from "next/link";
import HeatPumpCalculator from "@/app/components/HeatPumpCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka tepelného čerpadla 2026 – návratnost investice online",
  description:
    "Spočítej dobu návratnosti tepelného čerpadla. Zadej aktuální náklady, investici a dotaci NZÚ 2026 – výsledek ihned.",
  alternates: { canonical: "https://domovniguru.cz/kalkulacky/tepelne-cerpadlo" },
  openGraph: {
    title: "Kalkulačka tepelného čerpadla 2026",
    description: "Návratnost investice s dotací NZÚ. Výsledek okamžitě.",
    url: "https://domovniguru.cz/kalkulacky/tepelne-cerpadlo",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function TepelneCerpadloKalkulackaPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "720px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Tepelné čerpadlo</span>
        </nav>

        {/* Nadpis */}
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kalkulačka návratnosti tepelného čerpadla
        </h1>
        <p style={{ fontSize: "17px", color: "#5a7a9a", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej aktuální náklady na topení, odhadovanou cenu čerpadla a výši dotace — kalkulačka ti okamžitě spočítá dobu návratnosti investice.
        </p>

        {/* KALKULAČKA */}
        <HeatPumpCalculator />

        {/* ══ SEO TEXT ══════════════════════════════════════════════ */}
        <div style={{ marginTop: "56px", borderTop: "1px solid #d0dce8", paddingTop: "40px" }}>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#0f2233" }}>
            Bivalentní bod – klíčový parametr který ovlivňuje návratnost více než cena čerpadla
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#2a3a4a", fontWeight: 300, marginBottom: "16px" }}>
            Bivalentní bod je venkovní teplota, při které tepelné čerpadlo přestává pokrývat celou tepelnou potřebu domu a zapíná se záložní zdroj — nejčastěji elektrická topná tyč nebo záložní kotel. Moderní čerpadla vzduch–voda pracují efektivně až do –20 °C, ale jejich COP (účinnost) klesá s klesající teplotou: při +7 °C dosahuje COP 4–5, při –10 °C klesá na 2–2,5 a při –20 °C může být jen 1,5. Každý den provozu záložní topné tyče dramaticky prodlužuje dobu návratnosti, protože záložní zdroj spotřebovává elektřinu s účinností 1:1 — tedy bez úspory. Při výběru čerpadla proto nestačí porovnávat jmenovitý COP — ptej se na SCOP (sezónní koeficient) pro klimatickou zónu střední Evropy a na bivalentní bod konkrétní instalace.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#0f2233" }}>
            Dotace Nová zelená úsporám 2026 – jak mění ekonomiku tepelných čerpadel
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#2a3a4a", fontWeight: 300, marginBottom: "16px" }}>
            Program Nová zelená úsporám (NZÚ) spravovaný Státním fondem životního prostředí ČR poskytuje v roce 2026 dotaci až 100 000 Kč na tepelné čerpadlo vzduch–voda a až 120 000 Kč na typ země–voda pro rodinné domy. U průměrné instalace za 250 000 Kč dotace snižuje čistou investici o 40 %, čímž se u přechodu z elektrokotle zkracuje návratnost z 8–9 let na pouhých 4–5 let. Podmínkou je minimální sezónní efektivita SCOP 3,5, instalace oprávněnou firmou a podání žádosti <em>před</em> zahájením prací — zpětná dotace na již instalované čerpadlo není možná. Dotaci lze kombinovat s krajskými kotlíkovými dotacemi a celková podpora může dosáhnout 50–60 % pořizovací ceny.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#0f2233" }}>
            Proč předimenzované čerpadlo zkracuje životnost a zvyšuje náklady
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#2a3a4a", fontWeight: 300, marginBottom: "0" }}>
            Intuitivní logika "čím větší tím lepší" u tepelných čerpadel nefunguje — naopak. Předimenzované čerpadlo (s výkonem výrazně vyšším než tepelná ztráta domu) pracuje v krátkých cyklech: rychle zahřeje vodu v zásobníku, vypne se a za chvíli znovu nastartuje. Každý start kompresoru způsobuje mechanické opotřebení a tepelný stres — kompresor navržený na 100 000 startů při normálním provozu za 10 let může při cyklování dosáhnout tohoto limitu za 3–4 roky. Výsledkem je předčasná výměna kompresoru za 40 000–80 000 Kč a dramatické zhoršení ekonomiky celé investice. Správně dimenzované čerpadlo by mělo pokrýt 70–80 % tepelné potřeby domu při průměrné zimní teplotě a pracovat v dlouhých, plynulých cyklech. Přesné dimenzování vyžaduje výpočet tepelné ztráty domu dle ČSN EN 12831 — nezapomeň na tuto položku při poptávání instalace.
          </p>
        </div>

        {/* Mohlo by vás zajímat */}
        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6a8aaa", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Tepelné čerpadlo: Kompletní průvodce výběrem 2026", href: "/blog/tepelne-cerpadlo-pruvodce", icon: "♨️" },
              { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", icon: "💰" },
              { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", icon: "🌡️" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{
                display: "block", background: "#f0f7ff",
                border: "1px solid #bedaf0", borderRadius: "10px",
                padding: "14px 16px", textDecoration: "none",
              }}>
                <div style={{ fontSize: "18px", marginBottom: "6px" }}>{r.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#0f2233", lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ fontSize: "12px", color: "#6a9aba", marginTop: "6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
