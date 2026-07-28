import type { Metadata } from "next";
import Link from "next/link";
import KrabiceCalculator from "@/app/components/KrabiceCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka stěhovacích krabic 2026 – kolik krabic budu potřebovat?",
  description: "Spočítej, kolik stěhovacích krabic potřebuješ podle počtu osob, pokojů a stylu bydlení. Výsledek včetně bublinkové fólie, papíru a lepicích pásek okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-stehovacich-krabic" },
  openGraph: { title: "Kalkulačka stěhovacích krabic 2026", description: "Kolik krabic budu potřebovat na stěhování? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-stehovacich-krabic", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20st%C4%9Bhovac%C3%ADch%20krabic%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka stěhovacích krabic 2026" }] },
};

export default function KolikStehovacichKrabicPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik stěhovacích krabic</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stěhovacích krabic budu potřebovat?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej počet osob, pokojů a styl bydlení — kalkulačka spočítá potřebný počet krabic i balicího materiálu.</p>

        <KrabiceCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak odhadnout počet krabic na stěhování</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nedostatek krabic v den stěhování patří k nejčastějším problémům — dojezd do obchodu pro dalších pár kusů uprostřed balení stojí čas i nervy. Naopak přebytek krabic není problém, prázdné se snadno vrátí, prodají nebo použijí jako výplň. Náš odhad vychází z počtu osob a pokojů, které násobíme koeficientem podle stylu bydlení. Minimalista s pár věcmi potřebuje výrazně méně krabic než sběratel s plnými skříněmi, knihovnami a garáží.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozdělení krabic podle velikosti je stejně důležité jako jejich celkový počet. Malé krabice patří na knihy, nářadí a těžké předměty — plná velká krabice knih může vážit přes třicet kilo, špatně se zvedá a hrozí protržení dna. Střední krabice jsou univerzální tažný kůň stěhování: nádobí, elektronika, drobnosti z kuchyně i koupelny. Velké krabice si nechte na objemné, ale lehké věci — peřiny, polštáře, deky, plyšáky a dekorace.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Nezapomeňte na balicí materiál. Bublinková fólie ochrání sklo, porcelán, obrazy a elektroniku, balicí papír se hodí na prokládání nádobí a vyplnění mezer, aby se věci v krabici neposouvaly. Lepicí pásku kupujte raději o roli navíc — kvalitní páska drží dno i za plné krabice, levná se odlepuje v nejméně vhodnou chvíli. Každou krabici popište obsahem a místností, do které patří, ušetříte si hodiny hledání po přestěhování.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat stěhovací krabice", href: "/blog/jak-vybrat-stehovaci-krabice", icon: "📦" },
              { title: "Jak správně zabalit věci", href: "/blog/spravne-zabalit-veci", icon: "🎁" },
              { title: "Cena stěhování", href: "/kalkulacky/cena-stehovani", icon: "🚚" },
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
