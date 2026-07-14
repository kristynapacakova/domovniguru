import type { Metadata } from "next";
import Link from "next/link";
import StehovanCalculator from "@/app/components/StehovanCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka ceny stěhování 2026 – orientační cena za stěhování",
  description: "Spočítej orientační cenu stěhování podle počtu místností, vzdálenosti, patra a doplňkových služeb. Výsledek v Kč okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-stehovani" },
  openGraph: { title: "Kalkulačka ceny stěhování 2026", description: "Orientační cena stěhování podle místností a vzdálenosti. Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/cena-stehovani", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20ceny%20st%C4%9Bhov%C3%A1n%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka ceny stěhování 2026" }] },
};

export default function CenaStehovaniPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena stěhování</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí stěhování?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej počet místností, vzdálenost a doplňkové služby — kalkulačka odhadne orientační cenu stěhování v ČR.</p>

        <StehovanCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Na co si dát pozor při výběru stěhovací firmy</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Cena stěhování v ČR se pohybuje v širokém rozmezí — od levných brigádníků s dodávkou bez pojištění až po profesionální firmy s vlastním zábalením, pojištěním přepravy a garancí termínu. Při poptávání vždy specifikujte: počet a rozměry nábytku (ne jen místností), zda je nutná demontáž a montáž, kolik pater a zda funguje výtah, a přesné adresy obou míst. Vágní poptávka vede k nepřesnému odhadu, ze kterého pak firmy dělávají doplatky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Cenové modely stěhovacích firem jsou dva: fixní cena za celou zakázku nebo hodinová sazba (nejčastěji 450–700 Kč/hod za tým 2 mužů + auto). Fixní cena je výhodnější, pokud dobře odhadnete rozsah — u hodinové sazby se stěhování může protáhnout z různých důvodů (parkování, výtah nefunguje, starý nábytek se rozebírá hůř). Ptejte se vždy, co je a co není zahrnuto — balicí materiál, demontáž, vynáška po schodech, čekání.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Sezónita má velký vliv: červen–září je nejdražší (poptávka je výrazně vyšší), přičemž víkendy jsou dražší než pracovní dny. Pokud datum není pevně dáno, termín v pracovní den mimo léto může ušetřit 15–25 %. Pojištění přepravy (odpovědnost za škodu na věcech) by mělo být vždy součástí smlouvy — ověřte limit, ne jen existenci.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak se připravit na stěhování", href: "/blog/jak-se-pripravit-na-stehovani", icon: "📦" },
              { title: "Cena rekonstrukce koupelny", href: "/kalkulacky/cena-rekonstrukce-koupelny-odhad", icon: "🚿" },
              { title: "Kalkulačka rozpočtu rekonstrukce", href: "/kalkulacky/kalkulacka-rozpoctu-rekonstrukce", icon: "🏗️" },
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
