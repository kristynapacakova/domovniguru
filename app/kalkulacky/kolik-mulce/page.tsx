// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-mulce/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import MulcCalculator from "@/app/components/MulcCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka mulče 2026 – kolik pytlů potřebuji na záhony?",
  description: "Kolik pytlů mulče na záhony? Zadej plochu a tloušťku vrstvy – výpočet litrů a pytlů okamžitě. Optimální vrstva: 5–10 cm.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-mulce" },
  openGraph: { title: "Kalkulačka mulče 2026", description: "Kolik pytlů mulče na záhony? Zadej plochu a tloušťku vrstvy – výpočet litrů a pytlů okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-mulce", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20mul%C4%8De%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka mulče 2026" }] },
};

export default function KolikMulcePage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik mulče</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik mulče na záhony potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu záhonů a tloušťku vrstvy mulče — kalkulačka ti okamžitě spočítá přesné množství v litrech a počet pytlů k nákupu.</p>

        <MulcCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Druhy mulče a jak správně mulčovat záhony</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Mulčování je jedna z nejjednodušších zahradnických technik s velkým dopadem. Vrstva organického materiálu na povrchu půdy snižuje odpařování vody o 30–50 %, potlačuje klíčení plevelů, vyrovnává výkyvy teploty půdy a při rozkladu obohacuje půdu o živiny. Na trh přichází v podobě dřevní kůry (borka), dřevěných štěpků, kokosových vláken, slámy nebo kompostu. Borka je nejoblíbenější pro ozdobné záhony — esteticky vypadá dobře a rozkládá se pomalu (2–3 roky). Dřevní štěpky jsou levnější, ale rozkládají se rychleji a dočasně vážou dusík z půdy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tloušťka vrstvy mulče záleží na účelu. Pro potlačení plevelů a udržení vlhkosti potřebujete alespoň 5 cm — tenčí vrstva neplní ani jednu funkci. Optimum pro většinu záhonů je 7–10 cm. U stromů a keřů dbejte, aby mulč nepřiléhal ke kmeni nebo větvím — přímý kontakt způsobuje hnilobu a leptání kůry. Mezi mulčem a kmenem nechte „ochranný kruh" 10–15 cm bez materiálu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Mulč nanášejte na vlhkou půdu — ideálně po vydatném dešti nebo závlaze. Na záhony s letničkami a cibulovinami odkládejte mulčování do doby, kdy rostliny dosáhnou výšky 10–15 cm, jinak vrstva mulče brání klíčení a rašení. Mulč každoročně doplňujte: borka se rozloží za 2–3 roky a vrstva se přirozeně snižuje. Starý mulč nemusíte odstraňovat — prostě doplňte novou vrstvu na stávající. Přírodní materiály rozložením obohacují půdu a zlepšují její strukturu.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", icon: "🌿" },
              { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", icon: "💧" },
              { title: "Vyvýšené záhony – kompletní průvodce", href: "/blog/vyvysene-zahony", icon: "🌱" },
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
