import type { Metadata } from "next";
import Link from "next/link";
import PenaCalculator from "@/app/components/PenaCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka montážní pěny 2026 – kolik plechovek PU pěny?",
  description: "Kolik plechovek montážní pěny na okna a dveře? Zadej počet otvorů – výpočet okamžitě. Zdarma, bez registrace.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-montazni-peny" },
  openGraph: { title: "Kalkulačka montážní pěny 2026 – kolik plechovek PU pěny?", description: "Kolik plechovek montážní pěny na okna a dveře? Zadej počet otvorů – výpočet okamžitě. Zdarma, bez registrace.", url: "https://www.domovniguru.cz/kalkulacky/kolik-montazni-peny", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20mont%C3%A1%C5%BEn%C3%AD%20p%C4%9Bny%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka montážní pěny 2026" }] },
};

export default function KolikMontazniPenyPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik montážní pěny</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik montážní pěny potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej počet oken a dveří s jejich obvodem — kalkulačka ti okamžitě spočítá celkovou délku spár a počet plechovek PU pěny.</p>

        <PenaCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně aplikovat montážní pěnu a čeho se vyvarovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Montážní PU (polyuretanová) pěna je nejpoužívanější tesnicí a upevňovací materiál pro okna, dveře a prostupy zdí. Expanduje na 2–3násobek svého objemu a po vytvrzení (4–24 hodin) tvoří tuhý, tepelně i zvukově izolující výplň. Dostupná je v jednodílné verzi (stačí vlhkost vzduchu pro vytvrzení) a dvoudílné (profesionální, rovnoměrnější pěna). Pro okna a dveře se nejčastěji používá tzv. nízko-expandní pěna, která nevyvíjí příliš velký tlak na rámy a nezpůsobuje jejich deformaci — standardní montážní pěna se expandí na 3–5násobek, nízko-expandní jen na 1,5–2násobek.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Klíčem k správné aplikaci je zvlhčení povrchu před nanesením. Pěna vytvrzuje chemickou reakcí s vlhkostí — suchý, nezvlhčený povrch pěnu nezváže a vznikají dutiny. Rozprašovačem lehce navlhčete obě strany spáry i samotný výlitek. Aplikujte v pruzích, nikoli v jedné vrstvě — při silnějším nanášení pěna expanduje nerovnoměrně a může deformovat rámy. Nechte 15–30 minut sušit a pak aplikujte druhou vrstvu, pokud je to nutné. Finálně přikrytá parotěsnou páskou pěna vydrží dekády.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Přebytek pěny po vytvrzení (24 hodin) odřízněte ostrým nožem nebo speciální pilou. Nevytvrzená pěna je extrémně obtížně odstranitelná — acetonové přípravky jen částečně pomáhají. Na vytvrzenou pěnu přilepte interiérovou parozábrannou pásku (brání difúzi par do spáry) a exteriérové paropropustnou nebo akrylátový tmel. Kombinace pěna + pásky je dnes standardem pro energeticky úsporné montáže oken a je předepsána normou ČSN 74 6077.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", icon: "🪟" },
              { title: "Jak vyměnit staré dveře", href: "/blog/vymenit-stare-dvere", icon: "🚪" },
              { title: "Jak zateplit byt bez rekonstrukce", href: "/blog/zateplit-byt-bez-rekonstrukce", icon: "🏠" },
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
