import type { Metadata } from "next";
import Link from "next/link";
import UsporaZatepleniCalculator from "@/app/components/UsporaZatepleniCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka úspory zateplení 2026 – návratnost investice do izolace",
  description: "Spočítejte roční úsporu na vytápění po zateplení fasády, střechy nebo oken a zjistěte dobu návratnosti investice.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/uspora-zatepleni" },
  openGraph: { title: "Kalkulačka úspory zateplení 2026 – návratnost investice do izolace", description: "Spočítejte roční úsporu na vytápění po zateplení fasády, střechy nebo oken a zjistěte dobu návratnosti investice.", url: "https://www.domovniguru.cz/kalkulacky/uspora-zatepleni", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20%C3%BAspory%20zateplen%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka úspory zateplení 2026" }] },
};

export default function UsporaZatepleniPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Úspora zateplení</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik ušetřím po zateplení domu?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadejte aktuální náklady na vytápění, zvolte rozsah plánovaného zateplení a kalkulačka okamžitě spočítá roční úsporu v korunách. Zjistíte také orientační dobu návratnosti investice a jak ji zkrátit pomocí dotací NZÚ.</p>

        <UsporaZatepleniCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Kdy se zateplení skutečně vyplatí</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Klíčovou roli v ekonomice zateplení hrají dotace z programu Nová zelená úsporám (NZÚ). Při komplexním zateplení rodinného domu lze získat podporu až 50 % způsobilých výdajů, v některých případech i více — dotace tak dokáží zkrátit dobu návratnosti z 20 let na pouhých 8–10 let. Podmínkou je splnění energetických parametrů podle platné normy a doložení projektu certifikovaným energetickým specialistou. Žádost se podává před zahájením prací, nikoliv zpětně.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Na pořadí zateplování záleží. Odborníci doporučují začínat střechou a půdou — teplo přirozeně stoupá nahoru a nezateplená střecha může znamenat ztrátu až 25 % tepla. Teprve poté má smysl řešit fasádu a nakonec okna. Zateplení fasády bez výměny starých netěsnících oken přinese nižší úsporu, než kalkulátor naznačuje, protože tepelné mosty přetrvávají. Správné pořadí maximalizuje efekt každé investované koruny.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Nejčastější chybou při realizaci zateplení je podceňování tloušťky izolantu — úspora roste s tloušťkou, ale od určité hodnoty přírůstek klesá. Další problém představují tepelné mosty u okenních rámů, balkónových desek a rohů budovy, kde nevhodně provedené zateplení může vést ke kondenzaci vlhkosti a plísním. Vždy vyžadujte projekčně podloženou dokumentaci a kvalitního zhotovitele s referencemi — cena špatně provedeného zateplení může být nakonec vyšší než cena zateplení vůbec.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak zateplovat dům – fasáda, střecha a podlaha", href: "/blog/jak-zateplit-dum", icon: "🏠" },
              { title: "Spotřeba plynu na vytápění", href: "/kalkulacky/spotreba-plynu", icon: "🔥" },
              { title: "Chytrý termostat – úspory na vytápění", href: "/blog/chytry-termostat-uspora-vytapeni", icon: "🌡️" },
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
