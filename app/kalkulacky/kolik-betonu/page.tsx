import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import BetonCalculator from "@/app/components/BetonCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka betonu 2026 – výpočet m³, kubíků a počtu pytlů",
  description: "Kalkulačka betonu: zadej délku, šířku a tloušťku, výpočet kubíku betonu i počet 25kg pytlů ihned. Základ, deska, patky. Rezerva na sesedání automaticky.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-betonu" },
  openGraph: {
    title: "Kalkulačka betonu 2026 – výpočet m³ a počtu pytlů",
    description: "Výpočet kubíku betonu pro základovou desku, patky nebo chodník. Výsledek v m³ i v pytlích.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-betonu",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20betonu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka betonu 2026" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "WebApplication",
    "name": "Kalkulačka betonu",
    "url": "https://www.domovniguru.cz/kalkulacky/kolik-betonu",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "description": "Výpočet objemu betonu v m³ a počtu pytlů pro základové desky, patky a chodníky.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CZK" }
  }, {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik betonu potřebuji na 1 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na tloušťce: základová deska 10 cm = 0,10 m³/m², 15 cm = 0,15 m³/m², 20 cm = 0,20 m³/m². Pro chodník tloušťky 10 cm je to přesně 0,10 m³ betonu na každý metr čtvereční plochy." } },
      { "@type": "Question", "name": "Kolik pytlů betonu (25 kg) na 1 m³?", "acceptedAnswer": { "@type": "Answer", "text": "Z jednoho 25kg pytle suché betonové směsi vznikne přibližně 12–13 litrů betonu. Na 1 m³ (1 000 litrů) potřebuješ přibližně 77–84 pytlů. Přesný počet záleží na složení směsi — kalkulačka automaticky počítá s 80 pytli/m³ jako průměrná hodnota." } },
      { "@type": "Question", "name": "Kolik m³ betonu zvládne míchačka za den?", "acceptedAnswer": { "@type": "Answer", "text": "Běžná domácí míchačka (130–160 litrů) vyrobí přibližně 80–100 litrů hotového betonu za zamíchání. Při 6–8 zamíchání za hodinu a 6 hodinách práce zvládneš cca 3–4 m³ denně. Pro větší betonáže (nad 2 m³) je výhodnější objednat transportbeton z betonárny." } },
      { "@type": "Question", "name": "Jaká pevnostní třída betonu pro základovou desku?", "acceptedAnswer": { "@type": "Answer", "text": "Pro běžné základové desky rodinných domů se používá C20/25. Pro základy zatíženějších konstrukcí C25/30 nebo C30/37. Na chodníky a ploty stačí C16/20. Pytlovaný beton v obchodech je obvykle C20 nebo C20/25." } }
    ]
  }]
};

export default function KolikBetonuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap" style={{ padding: "48px 0 80px" }}>
        <div style={{ maxWidth: "680px" }}>
          <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
            <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik betonu</span>
          </nav>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
            Kolik betonu potřebuju?
          </h1>
          <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
            Zadej délku, šířku a tloušťku — kalkulačka spočítá objem betonu v m³ i počet pytlů s rezervou na sesedání.
          </p>

          <BetonCalculator />

          <ShareButtons url="https://www.domovniguru.cz/kalkulacky/kolik-betonu" title="Kalkulačka betonu 2026 – výpočet m³, kubíků a počtu pytlů" />

          <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
              Výpočet kubíku betonu – jak na to
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Výpočet objemu betonu je jednoduchý: <strong>délka × šířka × tloušťka</strong> v metrech dává výsledek v m³ (kubicích). Základová deska 4 × 5 metrů a 15 cm tlustá = 4 × 5 × 0,15 = <strong>3 m³ betonu</strong>. K tomu vždy přičti 5–10 % rezervu na sesedání, zbytky v míchačce a nepřesnosti v zemních pracích.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pro nepravidelné tvary (L-průřez, T-základy, kombinované patky) rozlož tvar na jednoduché obdélníky, spočítej každý zvlášť a výsledky sečti. Chyba i o 0,1 m může při větší desce znamenat rozdíl půl kubíku — a při ceně transportbetonu 3 500–4 500 Kč/m³ jde o nezanedbatelnou sumu.
            </p>

            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid #e8e0d8" }}>
              Pytlovaný beton vs. transportbeton – co se kdy vyplatí
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Do cca 0,5 m³ je výhodný pytlovaný beton (suchá směs C20, 25 kg pytel cca 90–120 Kč). Na 1 m³ potřebuješ přibližně 77–84 pytlů — nakládání, míchání a odlévání trvá celý den. Nad 1 m³ se jasně vyplatí transportbeton z betonárny: přijede autodomíchávač, vyleješ za hodinu a beton má garantovanou pevnostní třídu.
            </p>
            <div style={{ background: "#f8f4f0", border: "1px solid #e8e0d8", borderRadius: "10px", padding: "16px 20px", marginBottom: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", fontSize: "14px" }}>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "8px", color: "#2a2a28" }}>Pytlovaný beton</div>
                  <div style={{ color: "#5a9e6f", marginBottom: "4px" }}>✅ Do 0,5 m³</div>
                  <div style={{ color: "#5a9e6f", marginBottom: "4px" }}>✅ Bez objednávky</div>
                  <div style={{ color: "#5a9e6f", marginBottom: "4px" }}>✅ Práce ve vlastním tempu</div>
                  <div style={{ color: "#e07a5f" }}>❌ Fyzicky náročné</div>
                  <div style={{ color: "#e07a5f" }}>❌ Dražší nad 1 m³</div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "8px", color: "#2a2a28" }}>Transportbeton</div>
                  <div style={{ color: "#5a9e6f", marginBottom: "4px" }}>✅ Od 1 m³ výhodný</div>
                  <div style={{ color: "#5a9e6f", marginBottom: "4px" }}>✅ Garantovaná třída</div>
                  <div style={{ color: "#5a9e6f", marginBottom: "4px" }}>✅ Rychlé odlití</div>
                  <div style={{ color: "#e07a5f" }}>❌ Min. odběr 1 m³</div>
                  <div style={{ color: "#e07a5f" }}>❌ Nutný přístup pro auto</div>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid #e8e0d8" }}>
              Časté otázky o výpočtu betonu
            </h2>
            {[
              { q: "Kolik betonu potřebuji na 1 m²?", a: "Záleží na tloušťce vrstvy. Tloušťka 10 cm = 0,10 m³/m², tloušťka 15 cm = 0,15 m³/m², tloušťka 20 cm = 0,20 m³/m². Chodník 10 × 2 m s tloušťkou 10 cm = 2 m³ betonu." },
              { q: "Kolik pytlů betonu (25 kg) na 1 m³?", a: "Z jednoho 25kg pytle vznikne přibližně 12–13 litrů betonu. Na 1 m³ (1 000 litrů) potřebuješ přibližně 77–84 pytlů. Kalkulačka počítá s průměrem 80 pytlů/m³." },
              { q: "Jaká pevnostní třída pro základovou desku?", a: "C20/25 je standard pro základové desky rodinných domů. Na chodníky a opěrné stěny stačí C16/20. Na víc zatížené konstrukce (garáže, průmyslové podlahy) C25/30." },
              { q: "Kdy betonovat a kdy ne?", a: "Betonuj při teplotách 5–30 °C. Pod 5 °C tuhnutí zpomaluje — v mrazech beton praská. Nad 30 °C přidej méně vody nebo betonuj ráno. V létě zákrytku navlhčuj 3–5 dní." },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderBottom: "1px solid #e8e0d8", padding: "16px 0" }}>
                <div style={{ fontWeight: 600, fontSize: "15px", color: "#2a2a28", marginBottom: "6px" }}>{q}</div>
                <div style={{ fontSize: "14px", lineHeight: 1.7, color: "#5a5a50", fontWeight: 300 }}>{a}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px" }}>
            <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
              {[
                { title: "Jak pokládat betonové dlaždice na terasu", href: "/blog/pokladat-betonove-dlazdice", icon: "🪨" },
                { title: "Kolik dlažby potřebuji?", href: "/kalkulacky/kolik-dlazby", icon: "🧱" },
                { title: "Jak se zbavit starého nábytku při rekonstrukci", href: "/blog/zbavit-se-stareho-nabytku", icon: "🔧" },
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
    </>
  );
}
