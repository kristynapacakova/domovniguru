import type { Metadata } from "next";
import Link from "next/link";
import BodovkyCalculator from "@/app/components/BodovkyCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka LED bodovek 2026 – kolik bodovek do podhledu?",
  description: "Spočítej doporučený počet LED bodovek do sádrokartonového podhledu podle plochy, typu místnosti a světelného toku. Rozmístění i příkon okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-bodovek-do-podhledu" },
  openGraph: { title: "Kalkulačka LED bodovek 2026", description: "Kolik bodovek do podhledu? Doporučený počet i rozmístění okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-bodovek-do-podhledu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20LED%20bodovek&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka LED bodovek 2026" }] },
};

export default function KolikBodovekDoPodhleduPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik bodovek do podhledu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik LED bodovek do podhledu?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu místnosti, její typ a světelný tok jedné bodovky — kalkulačka spočítá doporučený počet LED bodovek, jejich rozmístění i celkový příkon.</p>

        <BodovkyCalculator />
        <AffiliateCTA merchant="aku" text="Nakoupit LED bodovky" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně navrhnout osvětlení podhledu</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet bodovek do sádrokartonového podhledu se neurčuje od oka, ale podle požadované intenzity osvětlení, kterou udávají luxy (lumeny na metr čtvereční). Každý typ místnosti má jiné nároky: obývacímu pokoji stačí kolem 150 luxů, kuchyni s pracovní plochou 300 luxů, koupelně 200 luxů, chodbě 100 luxů a pracovně s náročnou zrakovou prací až 400 luxů. Potřebný světelný tok pak vypočítáte jako plochu místnosti vynásobenou požadovanými luxy a udržovacím činitelem, který kompenzuje stárnutí a zaprášení svítidel.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Když znáte celkový potřebný světelný tok v lumenech, stačí ho vydělit světelným tokem jedné bodovky. Běžná LED bodovka do podhledu dnes svítí zhruba 350 až 500 lumenů při příkonu okolo 5 wattů. Výsledek zaokrouhlete nahoru a rozmístěte bodovky do pravidelné mřížky — rovnoměrné rozmístění je důležitější než přesný počet, protože bodová světla vytvářejí kužely a při řídkém rozmístění vznikají mezi nimi tmavší místa.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Při návrhu myslete i na rozteč a odstup od stěn: bodovky obvykle rozmisťujeme s roztečí 0,8 až 1,2 metru a od zdí je odsazujeme přibližně 40 až 60 centimetrů, aby světlo nekončilo tvrdým stínem u stěny. Nad kuchyňskou linkou, jídelním stolem nebo zrcadlem v koupelně se vyplatí přidat bodovky navíc nebo je doplnit jiným typem svítidla — samotné stropní bodovky totiž tvoří stíny a nemusí dostatečně nasvítit svislé pracovní plochy.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Podhled s LED bodovkami", href: "/blog/podhled-s-led-bodovkami", icon: "🔦" },
              { title: "Jak osvětlit kuchyňskou linku", href: "/blog/osvetlit-kuchynskou-linku", icon: "🍳" },
              { title: "Kolik žárovek potřebuji?", href: "/kalkulacky/kolik-zarovek-potrebuji", icon: "💡" },
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
