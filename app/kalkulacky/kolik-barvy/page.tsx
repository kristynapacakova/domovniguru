import type { Metadata } from "next";
import Link from "next/link";
import BarvyCalculator from "@/app/components/BarvyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka barvy na zeď 2026 – kolik litrů potřebuju?",
  description: "Spočítej přesné množství barvy na malování místnosti. Zadej rozměry stěn, počet nátěrů a vydatnost barvy. Výsledek ihned – zdarma.",
  alternates: { canonical: "https://domovniguru.cz/kalkulacky/kolik-barvy" },
  openGraph: {
    title: "Kalkulačka barvy na zeď 2026",
    description: "Kolik litrů barvy potřebuju? Spočítej přesně podle rozměrů místnosti.",
    url: "https://domovniguru.cz/kalkulacky/kolik-barvy",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function KolikBarvyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik barvy</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik barvy potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej rozměry místnosti, počet nátěrů a vydatnost barvy — kalkulačka ti okamžitě spočítá přesné množství v litrech.
        </p>

        <BarvyCalculator />

        {/* SEO TEXT */}
        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak správně změřit plochu stěn a proč na tom záleží
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Správné změření plochy stěn je základ přesného odhadu spotřeby barvy. Nejčastější chybou je nezapočítání odečtu oken a dveří — průměrné okno zabírá 1,5–2 m² a standardní dveře asi 1,8 m². Při místnosti se třemi okny a jedněmi dveřmi to dělá 6–8 m² navíc, což při vydatnosti 10 m²/litr znamená zbytečně zakoupené téměř jedno celé balení. Používej pásmo nebo laserový měřič — metrem na švu snadno vznikne chyba 5–10 cm na stěnu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spotřebu barvy výrazně ovlivňuje stav a barva podkladu. Na tmavou nebo silně nabarvenou stěnu bude bílá barva potřebovat tři nátěry místo dvou — a pro přechod z tmavé na světlou barvu se vyplatí nejprve nanést tónovaný základní nátěr (základ ve světlejším odstínu cílové barvy). Na hrubé nebo savé omítky — například nové sádrové omítky nebo porobeton — doporučujeme nejprve penetraci. Bez ní barva prosakuje hlouběji do povrchu a spotřeba vzroste o 20–40 %.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Výsledek kalkulačky vychází z ideálních podmínek — rovný povrch, standardní penetrovaný podklad, válečkem. V praxi vždy přidej alespoň 10 % rezervu pro drobné opravy, případné přetírání a zbytky v nádobě. Pokud maluje začátečník nebo se používá štětec místo válečku, počítej s rezervou až 15 %. Barvu nakupuj raději o jedno balení více — zbylou barvu uschovej pro záplatování škrábanců a otlačenin v budoucnu.
          </p>
        </div>

        {/* MOHLO BY VÁS ZAJÍMAT */}
        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Jak vybrat barvu na zeď – psychologie a typy pojiv", href: "/blog/jak-vybrat-barvu-na-zed", icon: "🎨" },
              { title: "Jak malovat rohy a lišty bez přetahování", href: "/blog/jak-malovat-rohy-a-listy", icon: "📐" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display:"block", background:"#f8f4f0", border:"1px solid #e8e0d8", borderRadius:"10px", padding:"14px 16px", textDecoration:"none", transition:"background 120ms" }}>
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
