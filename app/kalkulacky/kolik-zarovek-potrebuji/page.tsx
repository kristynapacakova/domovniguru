import type { Metadata } from "next";
import Link from "next/link";
import ZarovkyCalculator from "@/app/components/ZarovkyCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka počtu žárovek 2026 – kolik lumenů potřebuje místnost",
  description: "Kolik LED žárovek a kolik lumenů potřebuje vaše místnost? Zadejte plochu a typ místnosti – kalkulačka okamžitě spočítá doporučený počet žárovek.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-zarovek-potrebuji" },
  openGraph: { title: "Kalkulačka počtu žárovek 2026", description: "Kolik LED žárovek a kolik lumenů potřebuje vaše místnost? Zadejte plochu a typ místnosti – kalkulačka okamžitě spočítá doporučený počet žárovek.", url: "https://www.domovniguru.cz/kalkulacky/kolik-zarovek-potrebuji", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20po%C4%8Dtu%20%C5%BE%C3%A1rovek%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka počtu žárovek 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik lumenů potřebuje místnost na metr čtvereční?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka pracuje s hodnotami 100 lm/m² pro ložnici, 150 lm/m² pro obývací pokoj, 200 lm/m² pro koupelnu, 250 lm/m² pro pracovnu a 300 lm/m² pro kuchyni. Rozdíl odpovídá náročnosti činností: v ložnici jde o klidné osvětlení pro odpočinek, zatímco u kuchyňské linky se pracuje s nožem a horkými nádobami, takže je potřeba trojnásobek světla." } },
      { "@type": "Question", "name": "Kolik LED žárovek je potřeba do obývacího pokoje 20 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Při 150 lm/m² potřebuje obývací pokoj o ploše 20 m² celkem 3 000 lumenů. Při běžné LED žárovce s 800 lm to vychází na 3,75 kusu, a protože se počet zaokrouhluje nahoru, výsledek jsou 4 žárovky. Místo jednoho silného zdroje je lepší rozdělit světlo do stropního svítidla, stojací lampy a doplňkového svítidla u sedačky." } },
      { "@type": "Question", "name": "Kolik wattů odpovídá 800 lumenům u LED žárovky?", "acceptedAnswer": { "@type": "Answer", "text": "LED žárovka s 800 lumeny má spotřebu typicky 7 až 10 W, podle účinnosti konkrétního modelu. Stejný světelný výkon dávala klasická wolframová žárovka se 60 W. Orientačně platí, že 800 lm nahrazuje 60 W, 1 000 lm asi 75 W a 1 500 lm přibližně 100 W klasické žárovky. Watty u LED tedy vypovídají jen o spotřebě, nikoli o množství světla." } },
      { "@type": "Question", "name": "Jakou barevnou teplotu světla vybrat do které místnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Teplá bílá 2700 až 3000 K působí útulně a hodí se do ložnice, obývacího pokoje a jídelny. Neutrální bílá 4000 K podporuje soustředění a patří do kuchyně, koupelny a pracovny. Studenou bílou nad 5000 K používejte jen v garáži, dílně nebo technické místnosti. V jedné místnosti se barevné teploty nemíchají — rozdíl je na první pohled vidět jako nesourodé odstíny." } },
      { "@type": "Question", "name": "Mohu si svítidla a žárovky zapojit sám?", "acceptedAnswer": { "@type": "Answer", "text": "Výměna žárovky v existujícím svítidle je běžná domácí údržba. Jakýkoli zásah do pevné elektroinstalace — nové vývody, přidání vypínače, zapojení LED pásku s napájecím zdrojem nebo instalace vestavných bodovek do podhledu — ale patří osobě s odbornou kvalifikací a po dokončení se dokládá revizní zprávou. Ve sprše a u vany navíc platí přísné požadavky na krytí svítidla podle zóny." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Počet žárovek", "item": "https://www.domovniguru.cz/kalkulacky/kolik-zarovek-potrebuji" }
    ]
  }]
};

export default function KolikZarovekPotrebujiPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Počet žárovek</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik žárovek potřebuji do místnosti?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu místnosti a vyber její typ — kalkulačka ti okamžitě spočítá potřebné množství lumenů a doporučený počet LED žárovek.</p>

        <ZarovkyCalculator />
        <AffiliateCTA merchant="aku" text="Nakoupit žárovky a svítidla" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Lumeny vs. watty – jak vybrat správné osvětlení</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dříve se síla osvětlení odhadovala podle wattů, protože klasické wolframové žárovky měly u všech výrobců podobnou účinnost. U LED žárovek to ale neplatí — stejný výkon ve wattech může u různých výrobků dát úplně jiné množství světla. Proto je správné jednotkou pro plánování osvětlení lumen (lm), který udává skutečné množství vyzářeného světla. Watt naopak vyjadřuje jen spotřebu elektřiny. Orientačně platí, že 800 lm odpovídá přibližně 60W klasické žárovce, 1000 lm zhruba 75W žárovce a 1500 lm asi 100W žárovce — LED žárovka ale na dosažení stejného světelného výkonu spotřebuje jen zlomek této energie, typicky 8–15 W.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kromě množství světla je důležitá i jeho barevná teplota, udávaná v kelvinech (K). Teplé bílé světlo (2700–3000 K) působí příjemně a útulně, podporuje uvolnění a je proto ideální do obývacího pokoje a ložnice, kde chcete vytvořit klidnou atmosféru na odpočinek. Neutrální až studené bílé světlo (4000 K a více) naopak zvyšuje pozornost a usnadňuje soustředění na detaily — hodí se do kuchyně, koupelny nebo pracovny, kde potřebujete dobře vidět při vaření, holení nebo práci u počítače. Špatně zvolená teplota světla dokáže i dostatečně silné osvětlení znepříjemnit — studené světlo v ložnici působí nepříjemně chladně a rušivě, teplé světlo v pracovně naopak unavuje oči a snižuje koncentraci.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Při plánování osvětlení se vyplatí myslet i na rozmístění svítidel, nejen na celkový součet lumenů. Jedno silné stropní svítidlo uprostřed místnosti často vytváří tvrdé stíny, ostré přechody mezi světlem a tmou a nerovnoměrně osvětlené koutky. Více slabších zdrojů světla rozmístěných po místnosti — stropní svítidla doplněná stojací lampou, nástěnnými svítidly nebo LED páskem — rozloží světlo rovnoměrněji, omezí stíny a umožní podle potřeby kombinovat různé zóny osvětlení (například jasné světlo na čtení a tlumenější ambientní světlo na večerní odpočinek). Tento přístup je zvlášť užitečný v obývacích pokojích a kuchyních s jídelním koutem, kde se v jedné místnosti odehrávají různé činnosti vyžadující jinou intenzitu světla.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má dva kroky. Nejprve se plocha místnosti vynásobí doporučenou světelnou hustotou pro daný typ místnosti, čímž vznikne celková potřeba lumenů. Ta se pak vydělí světelným tokem jedné žárovky a výsledek se zaokrouhlí nahoru na celé kusy — půl žárovky koupit nelze a je lepší mít světla o něco víc než o chlup méně. Vzorec tedy je: počet žárovek = (plocha × lm/m²) ÷ světelný tok jedné žárovky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka počítá s pěti hodnotami světelné hustoty: ložnice 100 lm/m², obývací pokoj 150 lm/m², koupelna 200 lm/m², pracovna a kancelář 250 lm/m² a kuchyně 300 lm/m². Rozdíl mezi ložnicí a kuchyní je trojnásobný a odpovídá tomu, jak náročné činnosti se v místnosti dějí — v ložnici se hlavně odpočívá, u kuchyňské linky se pracuje s nožem a vařící vodou.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: obývací pokoj 20 m² při 150 lm/m² potřebuje 3 000 lumenů. S běžnou LED žárovkou 800 lm to je 3,75 kusu, po zaokrouhlení nahoru tedy 4 žárovky. Kuchyně stejné velikosti už vyžaduje 20 × 300 = 6 000 lumenů, tedy 8 žárovek po 800 lm nebo 6 kusů po 1 000 lm. Ložnice 14 m² naopak vystačí s 1 400 lumeny — dvě žárovky po 800 lm. Právě z tohoto vzorce je vidět, proč se u větších místností vyplatí silnější zdroje: osm bodových svítidel se v kuchyni rozmístí snáz než patnáct slabých.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Výběr podle wattů.</strong> U LED nevypovídá příkon o množství světla téměř nic. Na obalu hledejte údaj v lumenech, ne ve wattech ani ekvivalent v závorce.</li>
            <li><strong>Všechno světlo v jednom bodě.</strong> Jedna žárovka s 3 000 lumeny nad hlavou tvoří ostré stíny a oslňuje. Stejné množství rozdělené do tří až čtyř zdrojů vypadá úplně jinak.</li>
            <li><strong>Míchání barevných teplot.</strong> Jedna žárovka 2700 K a druhá 4000 K ve stejném svítidle nebo místnosti vytvoří nesourodý nažloutlý a namodralý kontrast, který je ihned vidět.</li>
            <li><strong>Ignorování barvy povrchů.</strong> Tmavý nábytek, antracitová podlaha a sytě barevné stěny světlo pohlcují. V takové místnosti připočtěte 20 až 30 procent lumenů navíc.</li>
            <li><strong>Nestmívatelná žárovka ve stmívaném obvodu.</strong> Běžná LED žárovka na stmívači bliká, bzučí a brzy se poškodí. Potřebujete model označený jako dimmable a kompatibilní stmívač.</li>
            <li><strong>Nedostatečné krytí v koupelně.</strong> V zóně u vany a sprchy musí svítidlo splňovat požadované krytí IP, běžné stropní svítidlo z pokoje tam nepatří.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            K samotným žárovkám patří ještě několik položek, bez kterých se osvětlení nedá dokončit:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Svítidla s odpovídající paticí</strong> — E27, E14, GU10 nebo GX53. Patici si ověřte před nákupem žárovek, přechodky jsou nouzové řešení.</li>
            <li><strong>Napájecí zdroj a profil k LED pásku</strong>, pokud plánujete pásek pod linkou nebo v podhledu, orientačně 400 až 1 200 Kč.</li>
            <li><strong>Stmívač nebo vícenásobný vypínač</strong> na rozdělení světelných scén, 400 až 1 500 Kč za kus.</li>
            <li><strong>Doplňková svítidla</strong> — stojací lampa, nástěnné světlo nad postel, pracovní osvětlení pod kuchyňskou linku.</li>
            <li><strong>Žárovky s indexem podání barev CRI nad 90</strong> do kuchyně, koupelny a pracovny, kde chcete vidět skutečné barvy.</li>
            <li><strong>Rezervní žárovky</strong> stejného modelu — po letech se stejný odstín už nekoupí a rozdíl ve svítidle bude patrný.</li>
          </ul>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výměna žárovky ve stávajícím svítidle je běžná domácí údržba. Jakmile ale jde o zásah do pevné elektroinstalace — nový světelný vývod, přidání vypínače, zapojení napájecího zdroje LED pásku nebo bodovek do podhledu — patří práce odborně kvalifikované osobě a hotová instalace se dokládá revizní zprávou. V koupelně navíc o volbě svítidla rozhoduje zóna u vany a sprchy a požadované krytí IP, takže se tím nedoporučujeme zabývat svépomocí.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik lumenů potřebuje místnost na metr čtvereční?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka pracuje s hodnotami 100 lm/m² pro ložnici, 150 lm/m² pro obývací pokoj, 200 lm/m² pro koupelnu, 250 lm/m² pro pracovnu a 300 lm/m² pro kuchyni. Rozdíl odpovídá náročnosti činností: v ložnici jde o klidné osvětlení pro odpočinek, zatímco u kuchyňské linky se pracuje s nožem a horkými nádobami, takže je potřeba trojnásobek světla.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik LED žárovek je potřeba do obývacího pokoje 20 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při 150 lm/m² potřebuje obývací pokoj o ploše 20 m² celkem 3 000 lumenů. Při běžné LED žárovce s 800 lm to vychází na 3,75 kusu, a protože se počet zaokrouhluje nahoru, výsledek jsou 4 žárovky. Místo jednoho silného zdroje je lepší rozdělit světlo do stropního svítidla, stojací lampy a doplňkového svítidla u sedačky.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik wattů odpovídá 800 lumenům u LED žárovky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              LED žárovka s 800 lumeny má spotřebu typicky 7 až 10 W, podle účinnosti konkrétního modelu. Stejný světelný výkon dávala klasická wolframová žárovka se 60 W. Orientačně platí, že 800 lm nahrazuje 60 W, 1 000 lm asi 75 W a 1 500 lm přibližně 100 W klasické žárovky. Watty u LED tedy vypovídají jen o spotřebě, nikoli o množství světla.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jakou barevnou teplotu světla vybrat do které místnosti?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Teplá bílá 2700 až 3000 K působí útulně a hodí se do ložnice, obývacího pokoje a jídelny. Neutrální bílá 4000 K podporuje soustředění a patří do kuchyně, koupelny a pracovny. Studenou bílou nad 5000 K používejte jen v garáži, dílně nebo technické místnosti. V jedné místnosti se barevné teploty nemíchají — rozdíl je na první pohled vidět jako nesourodé odstíny.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Mohu si svítidla a žárovky zapojit sám?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Výměna žárovky v existujícím svítidle je běžná domácí údržba. Jakýkoli zásah do pevné elektroinstalace — nové vývody, přidání vypínače, zapojení LED pásku s napájecím zdrojem nebo instalace vestavných bodovek do podhledu — ale patří osobě s odbornou kvalifikací a po dokončení se dokládá revizní zprávou. Ve sprše a u vany navíc platí přísné požadavky na krytí svítidla podle zóny.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat LED žárovku", href: "/blog/jak-vybrat-led-zarovku", icon: "💡" },
              { title: "LED vs. klasické žárovky", href: "/blog/led-vs-zarovky", icon: "🔆" },
              { title: "Kalkulačka úspory LED osvětlení", href: "/kalkulacky/led-uspora", icon: "⚡" },
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
    </>
  );
}
