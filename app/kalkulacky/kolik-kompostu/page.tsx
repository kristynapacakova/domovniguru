import type { Metadata } from "next";
import Link from "next/link";
import KompostCalculator from "@/app/components/KompostCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka kompostu 2026 – kolik pytlů kompostu na záhony?",
  description: "Kolik pytlů kompostu potřebuji na záhony? Zadej plochu a tloušťku vrstvy – výpočet litrů a pytlů okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-kompostu" },
  openGraph: { title: "Kalkulačka kompostu 2026 – kolik pytlů kompostu na záhony?", description: "Kolik pytlů kompostu potřebuji na záhony? Zadej plochu a tloušťku vrstvy – výpočet litrů a pytlů okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-kompostu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20kompostu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka kompostu 2026" }] },
};

export default function KolikKompostuPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik kompostu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik kompostu na záhony potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu záhonů a tloušťku vrstvy kompostu — kalkulačka ti okamžitě spočítá přesné množství v litrech a počet pytlů k nákupu.</p>

        <KompostCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Proč kompostovat a jak kompost správně aplikovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kompost je nejhodnotnější forma organické hmoty pro zahradu — obohacuje půdu o živiny, zlepšuje její strukturu a podporuje mikrobiologický život, který je základem zdravého zahradnictví. Na záhony se kompost aplikuje na jaře před výsadbou nebo setím v tloušťce 4–7 cm — zapracujte ho hráběmi nebo motykou do horní vrstvy půdy (10–15 cm). Trávník se kompostuje jinak: rozhoďte 1–2 cm jemně prosátého kompostu přes celou plochu a nechte ho přirozeně zapracovat deštěm a porostem. Tato metoda (&quot;topdressing&quot;) zlepšuje pH, strukturu a živiny bez nutnosti hloubkového zpracování.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kvalitní kompost poznáte podle barvy (tmavě hnědý až černý), zápachu (zemitý, ne kyselý nebo hnilobný) a struktury (drobtovitá, bez velkých nezkompostovaných kusů). Z vlastního kompostéru získáte kompost za 6–18 měsíců podle teplotního řízení. Pokud ho nevyrábíte sami, kupujte certifikovaný kompost s označením &quot;zralý&quot;. Nezralý kompost (zelenavý, kyselý zápach) obsahuje látky škodlivé pro kořeny a dočasně váže dusík z půdy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Kompostování vlastního organického odpadu je ekonomicky i ekologicky nejvýhodnější. Do kompostéru patří: zbytky zeleniny a ovoce, kávová sedlina, čajové sáčky, posekená tráva (v tenkých vrstvách), listí, dřevní štěpky a zemina. Nepatří tam: maso, kosti, mléčné výrobky (přitahují hlodavce), nemocné rostliny, citrusy ve větším množství. Kompost prokládejte vrstvami: mokrá a suchá hmota v poměru 1:2 zajišťuje správnou vlhkost a vzdušnost potřebnou pro aktivity mikroorganismů.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak kompostovat – průvodce pro začátečníky", href: "/blog/jak-kompostovat", icon: "♻️" },
              { title: "Vyvýšené záhony – kompletní průvodce", href: "/blog/vyvysene-zahony", icon: "🌱" },
              { title: "Jak pěstovat rajčata od výsevu po sklizeň", href: "/blog/jak-pestovat-rajcata", icon: "🍅" },
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
