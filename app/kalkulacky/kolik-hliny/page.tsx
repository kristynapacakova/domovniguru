import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic"; // 1. Importujeme dynamický import
import ShareButtons from "@/app/components/ShareButtons";

// 2. Načteme kalkulačku dynamicky (vypne SSR pro tuto komponentu)
const SoilCalculator = dynamic(() => import("@/app/components/SoilCalculator"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Kalkulačka objemu zeminy: Kolik litrů substrátu koupit? 2026",
  description: "Spočítejte si přesně, kolik litrů hlíny potřebujete pro své květináče a truhlíky. Výpočet pro kulaté i hranaté nádoby.",
};

export default function SoilCalculatorPage() {
  return (
    <div className="wrap" style={{ padding: "60px 0" }}>
      <nav className="breadcrumb">
        <Link href="/">Domů</Link> / <Link href="/kalkulacky">Kalkulačky</Link> / <span>Kolik hlíny?</span>
      </nav>

      <div style={{ maxWidth: "800px", margin: "40px auto" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "40px", marginBottom: "20px" }}>
          Kalkulačka objemu zeminy a substrátu
        </h1>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
          Neodhadujte litry od oka. Ať už sázíte do velkých květináčů na terase nebo doplňujete truhlíky, 
          tento nástroj vám přesně spočítá, kolik 20l nebo 50l pytlů budete v obchodě potřebovat.
        </p>

        {/* Kalkulačka se nyní načte bezpečně až v prohlížeči */}
        <SoilCalculator />

        <div style={{ marginTop: "60px", padding: "30px", background: "#f8f9fa", borderRadius: "12px" }}>
          <h3>Jak měřit květináče?</h3>
          <p>
            Vždy měřte <strong>vnitřní rozměr</strong> nádoby. Pokud má květináč kónický tvar (dole je užší), 
            zadejte průměrný rozměr mezi horním a spodním okrajem, abyste získali co nejpřesnější výsledek. 
            Nezapomeňte, že hlína se časem trochu "sesedne", takže doporučujeme koupit o 5–10 % substrátu více.
          </p>
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <ShareButtons url="https://domovniguru.cz/kalkulacky/kolik-hliny" title="Kalkulačka: Kolik hlíny potřebuji?" />
        </div>
      </div>
    </div>
  );
}
