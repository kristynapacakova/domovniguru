import type { Metadata } from "next";
import Link from "next/link";
import RecKoupelnyCalculator from "@/app/components/RecKoupelnyCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka rekonstrukce koupelny 2026 – kolik stojí přestavba?",
  description: "Kolik stojí rekonstrukce koupelny? Zadej plochu a standard – orientační odhad nákladů okamžitě. Ekonomická 15 000, prémiová 40 000 Kč/m².",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-rekonstrukce-koupelny-odhad" },
  openGraph: { title: "Kalkulačka rekonstrukce koupelny 2026", description: "Kolik stojí rekonstrukce koupelny? Zadej plochu a standard – orientační odhad nákladů okamžitě. Ekonomická 15 000, prémiová 40 000 Kč/m².", url: "https://www.domovniguru.cz/kalkulacky/cena-rekonstrukce-koupelny-odhad", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20rekonstrukce%20koupelny%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka rekonstrukce koupelny 2026" }] },
};

export default function CenaRekonstrukceKoupelnyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena rekonstrukce koupelny</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí rekonstrukce koupelny?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu koupelny a standard rekonstrukce — kalkulačka ti okamžitě odhadne orientační náklady od základní až po prémium provedení.</p>

        <RecKoupelnyCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Orientační ceny rekonstrukce koupelny v ČR 2026</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rekonstrukce koupelny patří k nejnákladnějším stavebním pracím v bytě, protože zahrnuje bourací práce, rozvody vody a kanalizace, elektroinstalaci, obklady a dlažby, sanitu a vybavení. Ekonomická rekonstrukce (dlaždičky střední třídy, standardní sanita, tuzemský řemeslník) vychází na 12 000–18 000 Kč/m². Střední standard (italská nebo španělská dlažba, design umyvadlo, sprchový kout se závěsnou toaletou) stojí 20 000–30 000 Kč/m². Prémiová rekonstrukce (přírodní kámen, volně stojící vana, přiznaný beton, designová armatura Hansgrohe nebo Grohe) přesahuje 35 000–50 000 Kč/m². Průměrná koupelna v ČR má 4–7 m².
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Největší položkou v rozpočtu bývá instalatérská práce a materiál (rozvody, topný žebřík, sanita) — typicky 35–45 % celkových nákladů. Obklady a dlažba tvoří 20–30 % nákladů a jsou zároveň největší volbou designu. Malá koupelna 4 m² může mít stejnou cenu jako větší 7 m², pokud má složitější dispozici nebo luxusnější materiály. Na ceně se projevuje i stav stávajících rozvodů — v panelovém domě ze 70. let se téměř vždy mění celá rozvod studené a teplé vody.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Pro získání realistické nabídky doporučujeme nechat si nacenit alespoň 3 řemeslníky. Cenové rozsahy jsou v ČR velké — v Praze zaplatíte o 20–40 % více než v krajích. Při výběru řemeslníka nerozhoduje jen cena, ale i reference, ukázky předchozích prací a ochota komunikovat o detailech. Vždy si sjednávejte smlouvu s popisem prací, platebním harmonogramem (nikdy ne 100 % zálohou) a zárukou min. 36 měsíců na skryté vady.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kolik stojí rekonstrukce koupelny – detailní rozbor", href: "/blog/cena-rekonstrukce-koupelny", icon: "🚿" },
              { title: "Jak plánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", icon: "📋" },
              { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", icon: "🔧" },
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
