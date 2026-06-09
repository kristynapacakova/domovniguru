import type { Metadata } from "next";
import Link from "next/link";
import CenaKuchyneCalculator from "@/app/components/CenaKuchyneCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka ceny kuchyně 2026 – IKEA, studio nebo na míru?",
  description: "Spočítejte orientační cenu nové kuchyňské linky včetně spotřebičů, pracovní desky a montáže. Srovnání IKEA vs. studio vs. truhlář.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-kuchyne" },
  openGraph: { title: "Kalkulačka ceny kuchyně 2026 – IKEA, studio nebo na míru?", description: "Spočítejte orientační cenu nové kuchyňské linky včetně spotřebičů, pracovní desky a montáže. Srovnání IKEA vs. studio vs. truhlář.", url: "https://www.domovniguru.cz/kalkulacky/cena-kuchyne", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20ceny%20kuchyn%C4%9B%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka ceny kuchyně 2026" }] },
};

export default function CenaKuchynePage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena kuchyně</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí nová kuchyně?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Cena kuchyňské linky se liší řádově podle toho, zda sáhnete po IKEA sestavě, kuchyňském studiu nebo truhláři na míru. Zadejte délku linky, typ spotřebičů a materiál pracovní desky — kalkulačka vám okamžitě spočítá orientační celkovou cenu i rozpad nákladů.</p>

        <CenaKuchyneCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak ušetřit na kuchyni bez kompromisů</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            IKEA kuchyně představují nejdostupnější cestu k nové lince s rozumnou kvalitou. Zásadní úspora přichází při svépomocné montáži — IKEA k tomu přímo vybízí a online plánovač IKEA Home Planner usnadní celý návrh. Pokud přesto zvolíte montážní firmu, dbejte na to, aby měla zkušenosti přímo s IKEA systémem Sektion nebo Metod, jinak hrozí zbytečné vícenáklady. Celkové náklady na IKEA kuchyni se svépomocnou montáží jsou typicky 30–50 % nižší oproti kuchyňskému studiu srovnatelné délky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pracovní deska je prvek, který nejvíce ovlivňuje vizuální dojem kuchyně — a zároveň ten, kde se vyplatí nepodceňovat kvalitu. Laminátová deska za zlomek ceny kamene po 5–7 letech začne vykazovat otlaky a bobtnání u dřezu. Pokud je rozpočet omezený, volte raději kompaktní laminát větší tloušťky (38 mm), který odolá vlhkosti lépe než tenčí varianty. Kámen nebo kompozit (křemen) se při správné péči nezničí desetiletí a opticky povýší i základní kuchyňskou skříňku.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Na čem v kuchyni nešetřit: závěsy dvířek, pojezdy zásuvek a úchytky. Levné panty po roce začínají skřípat a špatně držet, levné pojezdy zásuvek se drhnou. Dobré závěsy (Blum, Hettich) stojí o pár set korun více na dvířko, ale vydrží desítky tisíc otevření bez problémů. Stejně tak splachovací mechanismus dřezu a baterie — investice do kvalitního mixeru se vrátí v pohodlném každodenním používání a minimální údržbě.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kuchyňská linka – na míru vs. IKEA vs. studio", href: "/blog/kuchynska-linka-na-miru-vs-ikea", icon: "🍳" },
              { title: "Rekonstrukce koupelny – průvodce a ceny", href: "/blog/rekonstrukce-koupelny-pruvodce", icon: "🚿" },
              { title: "Cena rekonstrukce koupelny", href: "/kalkulacky/cena-rekonstrukce-koupelny-odhad", icon: "🏠" },
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
