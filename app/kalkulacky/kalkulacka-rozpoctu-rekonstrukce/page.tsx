import type { Metadata } from "next";
import Link from "next/link";
import RozpocetRekonstrukceCalculator from "@/app/components/RozpocetRekonstrukceCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka rozpočtu rekonstrukce bytu 2026 – odhad ceny",
  description: "Spočítejte si orientační rozpočet rekonstrukce bytu podle plochy, standardu materiálů a počtu mokrých provozů. Okamžitý odhad ceny vč. rezervy.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kalkulacka-rozpoctu-rekonstrukce" },
  openGraph: { title: "Kalkulačka rozpočtu rekonstrukce bytu 2026", description: "Spočítejte si orientační rozpočet rekonstrukce bytu podle plochy, standardu materiálů a počtu mokrých provozů. Okamžitý odhad ceny vč. rezervy.", url: "https://www.domovniguru.cz/kalkulacky/kalkulacka-rozpoctu-rekonstrukce", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20rozpo%C4%8Dtu%20rekonstrukce%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka rozpočtu rekonstrukce bytu 2026" }] },
};

export default function KalkulackaRozpoctuRekonstrukcePage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Rozpočet rekonstrukce</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kalkulačka rozpočtu rekonstrukce bytu</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu bytu, vyber standard materiálů a počet mokrých provozů k rekonstrukci — kalkulačka ti okamžitě spočítá orientační rozpočet vč. rezervy na nečekané vícenáklady.</p>

        <RozpocetRekonstrukceCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Z čeho se skládá rozpočet rekonstrukce bytu</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozpočet rekonstrukce bytu se obvykle skládá ze tří hlavních složek. Základní náklad zahrnuje práce a materiály na celé ploše bytu — bourací a zednické práce, nové podlahy, malby, elektroinstalaci a další úpravy, které se počítají na metr čtvereční podle vybraného standardu. Druhou výraznou položkou jsou mokré provozy, tedy koupelny a kuchyně, kde se kromě obkladů a dlažby řeší i rozvody vody, odpadů a často i sanita a kuchyňská linka — tyto prostory bývají podstatně dražší na metr čtvereční než zbytek bytu, a proto se v praxi často počítají samostatnou fixní částkou na každý provoz. Třetí složkou je rezerva na vícenáklady, kterou by si měl naplánovat každý, kdo se chystá do rekonstrukce.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Proč si vždy nechat rezervu minimálně 15–20 %? Při rekonstrukci staršího bytu se téměř vždy objeví skryté problémy, které nejde odhalit před zahájením prací — vlhkost ve zdech, zastaralé nebo poddimenzované elektrické rozvody, prasklé nebo zarostlé potrubí, nerovné podlahy vyžadující dodatečné vyrovnání, nebo statické problémy u panelových domů. Rezerva pokrývá také změny rozhodnutí v průběhu realizace, kdy si investor dodatečně vybere dražší obklady, jiné dveře nebo přidá další úpravu, která původně nebyla v plánu. Bez rezervy hrozí, že se rekonstrukce zastaví v polovině z důvodu nedostatku financí, což prodlužuje dobu realizace a v důsledku celý projekt prodražuje.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Cena rekonstrukce se výrazně liší podle standardu použitých materiálů. Nízký standard znamená rozpočtové obklady, dlažby a sanitu, jednodušší podlahové krytiny a základní elektroinstalaci — vhodné typicky pro bytu k pronájmu. Střední standard zahrnuje kvalitnější značkové materiály, lepší podlahy (vinyl, laminát vyšší třídy) a standardní vybavení koupelny a kuchyně, což odpovídá většině rekonstrukcí bytů k vlastnímu bydlení. Vysoký standard počítá s prémiovými materiály, designovými prvky, kvalitní dřevěnou podlahou, vestavnou elektronikou a často i úpravami nad rámec běžné rekonstrukce, jako je klimatizace nebo rekuperace. Kromě standardu hraje velkou roli i region — ceny prací v Praze a velkých městech bývají o 15–30 % vyšší než v menších městech a na venkově, hlavně díky vyšším mzdovým nákladům řemeslníků a vyšší poptávce po kvalitních realizačních firmách. Z těchto důvodů je tato kalkulačka pouze orientační pomůckou pro prvotní plánování rozpočtu — pro přesnou cenu je vždy potřeba oslovit konkrétní realizační firmu a nechat si zpracovat individuální nabídku na základě rozsahu prací a stavu bytu.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Plánování rekonstrukce bytu", href: "/blog/planovani-rekonstrukce-bytu", icon: "📋" },
              { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", icon: "💰" },
              { title: "Kalkulačka ceny rekonstrukce koupelny", href: "/kalkulacky/cena-rekonstrukce-koupelny-odhad", icon: "🛁" },
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
