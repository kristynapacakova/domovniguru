import type { Metadata } from "next";
import Link from "next/link";
import SparovackaCalculator from "@/app/components/SparovackaCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka spárovačky 2026 – kolik kg spárovačky potřebuji?",
  description: "Spočítej přesnou spotřebu spárovačky podle plochy dlažby, rozměrů dlaždic a šíře spár. Výsledek v kg a pytlích okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-sparovacky" },
  openGraph: { title: "Kalkulačka spárovačky 2026", description: "Kolik kg spárovačky na dlažbu? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-sparovacky", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20sp%C3%A1rov%C3%A1%C4%8Dky%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka spárovačky 2026" }] },
};

export default function KolikSparovackyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik spárovačky</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik spárovačky potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu dlažby, rozměry dlaždic a šíři spár — kalkulačka spočítá přesné kilogramy i počet pytlů.</p>

        <SparovackaCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně vybrat a aplikovat spárovačku</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spárovačka není jen estetický detail — chrání konstrukční spáry před vodou, nečistotami a mikrobiálním růstem. Špatně zvolená nebo špatně nanesená spárovačka může způsobit výrazně vyšší náklady na opravu, než je cena samotného produktu. Cementové spárovačky (nejčastější volba pro interiéry) jsou dostupné v desítkách barev, ale pro mokré prostory — sprchové kouty, soklíky, plochy v přímém kontaktu s vodou — vždy volte epoxidovou spárovačku nebo cementovou s přísadou hydrofobizátoru.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Před spárováním musí lepidlo úplně vyschnout — zpravidla 24 hodin u standardního, 48 hodin u flexibilního lepidla. Pokud spárujete příliš brzy, vlhkost z lepidla degraduje strukturu spárovačky a způsobí praskání. Spáry před aplikací vyčistěte od zbytků lepidla a prachu (ideálně průmyslovým vysavačem a kartáčem), jinak spárovačka nepřilne ke dnu spáry a časem vykrouží.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Po nanesení a vytvarování spáry (gumovým hladítkem diagonálně přes dlaždice) nechte spárovačku lehce zatuhnout — typicky 20–40 minut při pokojové teplotě — a poté odstraňte přebytky vlhkým hadrem nebo houbou. Nečekejte příliš dlouho: zatvrdlá spárovačka na povrchu dlaždic se odstraňuje obtížně a kyselými čisticími prostředky, které mohou poškodit povrch glazury.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kolik dlažby potřebuji?", href: "/kalkulacky/kolik-dlazby", icon: "🧱" },
              { title: "Kolik lepidla na dlažbu?", href: "/kalkulacky/kolik-lepidla-na-dlazbu", icon: "🏗️" },
              { title: "Kladení dlažby v koupelně", href: "/blog/kladeni-dlazby-v-koupelne", icon: "🚿" },
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
