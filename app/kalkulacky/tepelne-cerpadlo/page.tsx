// ════════════════════════════════════════════════════════════════
// SEO SEKCE — vlož do app/kalkulacky/tepelne-cerpadlo/page.tsx
// pod komponentu <HeatPumpCalculator />
// ════════════════════════════════════════════════════════════════

// UKÁZKA KOMPLETNÍ PAGE.TSX:

import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import HeatPumpCalculator from "@/app/components/HeatPumpCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka tepelného čerpadla – návratnost",
  description:
    "Spočítej dobu návratnosti tepelného čerpadla. Zadej aktuální náklady, investici a dotaci NZÚ 2026 – výsledek ihned.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/tepelne-cerpadlo" },
  openGraph: {
    title: "Kalkulačka tepelného čerpadla 2026",
    description: "Návratnost investice s dotací NZÚ. Výsledek okamžitě.",
    url: "https://www.domovniguru.cz/kalkulacky/tepelne-cerpadlo",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20tepeln%C3%A9ho%20%C4%8Derpadla%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka tepelného čerpadla 2026" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jak kalkulačka počítá návratnost tepelného čerpadla?", "acceptedAnswer": { "@type": "Answer", "text": "Roční úspora vzniká vynásobením současných nákladů na topení procentem, které odpovídá vašemu stávajícímu zdroji: 65 procent u elektrokotle a přímotopu, 38 procent u plynového kotle a 20 procent u tuhých paliv. Od ceny instalace se odečte dotace, čímž vznikne čistá investice, a ta se vydělí roční úsporou. Výsledkem je doba návratnosti v letech." } },
      { "@type": "Question", "name": "Za jak dlouho se tepelné čerpadlo vrátí při přechodu z plynu?", "acceptedAnswer": { "@type": "Answer", "text": "Při ročních nákladech 45 000 Kč za plyn činí úspora 38 procent, tedy 17 100 Kč za rok. Investice 250 000 Kč snížená o dotaci 100 000 Kč dává čistou investici 150 000 Kč, kterou úspora pokryje za 8,8 roku. U přechodu z elektrokotle se stejnými vstupy je úspora 29 250 Kč ročně a návratnost spadne na 5,1 roku." } },
      { "@type": "Question", "name": "Kolik je dotace NZÚ na tepelné čerpadlo v roce 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Program Nová zelená úsporám poskytuje rodinným domům až 100 000 Kč na čerpadlo vzduch–voda a až 120 000 Kč na typ země–voda. Podmínkou je sezónní účinnost SCOP alespoň 3,5, instalace oprávněnou firmou a podání žádosti před zahájením prací — na už instalované čerpadlo dotaci zpětně získat nelze. Podporu lze kombinovat s krajskými kotlíkovými dotacemi." } },
      { "@type": "Question", "name": "Proč je výsledná návratnost v praxi delší než z kalkulačky?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka pracuje s jedinou průměrnou úsporou a nezahrnuje provoz záložní topné tyče v mrazech, servisní náklady ani změny cen energií. Reálná spotřeba závisí na sezónní účinnosti SCOP, teplotě otopné vody, stavu zateplení a zvoleném tarifu. Nejčastějším důvodem horšího výsledku jsou vysokoteplotní radiátory, které čerpadlo nutí dodávat vodu o 55 stupních místo 40, což snižuje účinnost o čtvrtinu." } },
      { "@type": "Question", "name": "Může si tepelné čerpadlo nainstalovat svépomocí?", "acceptedAnswer": { "@type": "Answer", "text": "Nemůže. Chladivový okruh obsahuje fluorované plyny a smí s ním pracovat jen osoba s platným certifikátem, elektrické připojení vyžaduje samostatný jištěný přívod a revizní zprávu. Instalace oprávněnou firmou je navíc podmínkou dotace NZÚ i záruky výrobce. Svépomocí lze připravit pouze stavební část, například betonový základ pro venkovní jednotku a prostupy pro potrubí." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Tepelné čerpadlo", "item": "https://www.domovniguru.cz/kalkulacky/tepelne-cerpadlo" }
    ]
  }]
};

export default function TepelneCerpadloKalkulackaPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "720px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Tepelné čerpadlo</span>
        </nav>

        {/* Nadpis */}
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kalkulačka návratnosti tepelného čerpadla
        </h1>
        <p style={{ fontSize: "17px", color: "#5a7a9a", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej aktuální náklady na topení, odhadovanou cenu čerpadla a výši dotace — kalkulačka ti okamžitě spočítá dobu návratnosti investice.
        </p>

        {/* KALKULAČKA */}
        <HeatPumpCalculator />

        {/* ══ SEO TEXT ══════════════════════════════════════════════ */}
        <div style={{ marginTop: "56px", borderTop: "1px solid #d0dce8", paddingTop: "40px" }}>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#0f2233" }}>
            Bivalentní bod – klíčový parametr který ovlivňuje návratnost více než cena čerpadla
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#2a3a4a", fontWeight: 300, marginBottom: "16px" }}>
            Bivalentní bod je venkovní teplota, při které tepelné čerpadlo přestává pokrývat celou tepelnou potřebu domu a zapíná se záložní zdroj — nejčastěji elektrická topná tyč nebo záložní kotel. Moderní čerpadla vzduch–voda pracují efektivně až do –20 °C, ale jejich COP (účinnost) klesá s klesající teplotou: při +7 °C dosahuje COP 4–5, při –10 °C klesá na 2–2,5 a při –20 °C může být jen 1,5. Každý den provozu záložní topné tyče dramaticky prodlužuje dobu návratnosti, protože záložní zdroj spotřebovává elektřinu s účinností 1:1 — tedy bez úspory. Při výběru čerpadla proto nestačí porovnávat jmenovitý COP — ptej se na SCOP (sezónní koeficient) pro klimatickou zónu střední Evropy a na bivalentní bod konkrétní instalace.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#0f2233" }}>
            Dotace Nová zelená úsporám 2026 – jak mění ekonomiku tepelných čerpadel
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#2a3a4a", fontWeight: 300, marginBottom: "16px" }}>
            Program Nová zelená úsporám (NZÚ) spravovaný Státním fondem životního prostředí ČR poskytuje v roce 2026 dotaci až 100 000 Kč na tepelné čerpadlo vzduch–voda a až 120 000 Kč na typ země–voda pro rodinné domy. U průměrné instalace za 250 000 Kč dotace snižuje čistou investici o 40 %, čímž se u přechodu z elektrokotle zkracuje návratnost z 8–9 let na pouhých 4–5 let. Podmínkou je minimální sezónní efektivita SCOP 3,5, instalace oprávněnou firmou a podání žádosti <em>před</em> zahájením prací — zpětná dotace na již instalované čerpadlo není možná. Dotaci lze kombinovat s krajskými kotlíkovými dotacemi a celková podpora může dosáhnout 50–60 % pořizovací ceny.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", color: "#0f2233" }}>
            Proč předimenzované čerpadlo zkracuje životnost a zvyšuje náklady
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.85, color: "#2a3a4a", fontWeight: 300, marginBottom: "0" }}>
            Intuitivní logika "čím větší tím lepší" u tepelných čerpadel nefunguje — naopak. Předimenzované čerpadlo (s výkonem výrazně vyšším než tepelná ztráta domu) pracuje v krátkých cyklech: rychle zahřeje vodu v zásobníku, vypne se a za chvíli znovu nastartuje. Každý start kompresoru způsobuje mechanické opotřebení a tepelný stres — kompresor navržený na 100 000 startů při normálním provozu za 10 let může při cyklování dosáhnout tohoto limitu za 3–4 roky. Výsledkem je předčasná výměna kompresoru za 40 000–80 000 Kč a dramatické zhoršení ekonomiky celé investice. Správně dimenzované čerpadlo by mělo pokrýt 70–80 % tepelné potřeby domu při průměrné zimní teplotě a pracovat v dlouhých, plynulých cyklech. Přesné dimenzování vyžaduje výpočet tepelné ztráty domu dle ČSN EN 12831 — nezapomeň na tuto položku při poptávání instalace.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka pracuje se třemi vstupy — ročními náklady na topení, cenou instalace a výší dotace — a typem dosavadního zdroje, který určuje, kolik se dá vlastně ušetřit. U elektrokotle a přímotopu se počítá s úsporou 65 procent, protože čerpadlo s koeficientem výkonu okolo tří dodá stejné teplo za třetinu elektřiny. U plynového kotle je úspora 38 procent včetně odpadlého paušálu za plyn. U tuhých paliv jde jen o 20 procent, protože uhlí a dřevo samy patří k nejlevnějším palivům a hlavní přínos je komfort.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotný vzorec je jednoduchý: roční úspora je součin současných nákladů a procentní úspory, čistá investice je cena instalace mínus dotace a návratnost je čistá investice dělená roční úsporou. Konkrétní příklad: plynový kotel s ročními náklady 45 000 Kč dává úsporu 17 100 Kč, náklady po výměně tedy spadnou na 27 900 Kč. Investice 250 000 Kč mínus dotace 100 000 Kč je čistá investice 150 000 Kč a návratnost 8,8 roku. Při stejných vstupech, ale přechodu z elektrokotle, je úspora 29 250 Kč a návratnost pouhých 5,1 roku.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výsledek je barevně odlišený: do sedmi let jde o výbornou návratnost, do dvanácti let o dobrou a nad dvanáct let o výsledek, u kterého je potřeba hledat prostor pro zlepšení — vyšší dotací, jiným dodavatelem nebo nejprve zateplením. Model nezahrnuje inflaci cen energií, servis ani provoz záložní topné tyče v mrazech.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tepelné čerpadlo je dlouhodobá investice a většina zklamání vzniká ještě před podpisem smlouvy:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Čerpadlo do nezateplené budovy.</strong> Dům s vysokou tepelnou ztrátou potřebuje vysokou teplotu otopné vody, při které účinnost čerpadla klesá. Nejprve střecha a fasáda, teprve potom zdroj tepla.</li>
            <li><strong>Ponechané vysokoteplotní radiátory.</strong> Staré článkové radiátory navržené na 75 stupňů nutí čerpadlo pracovat na hraně. Výměna za větší plochy zvýší účinnost o čtvrtinu.</li>
            <li><strong>Žádost o dotaci až po instalaci.</strong> Žádost musí být podána před zahájením prací, jinak o celou podporu přijdete.</li>
            <li><strong>Neošetřený tarif.</strong> Bez přechodu na sazbu pro tepelná čerpadla, typicky D57d, platíte za každou kilowatthodinu výrazně více a návratnost se prodlouží o roky.</li>
            <li><strong>Chybějící akumulace.</strong> Bez akumulační nádoby nebo dostatečného objemu vody v systému čerpadlo cykluje, krátké starty opotřebovávají kompresor a spotřeba roste.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Na co myslet před pořízením</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            <strong>Instalaci tepelného čerpadla musí provést odborná firma.</strong> Chladivový okruh obsahuje fluorované plyny a smí s ním manipulovat pouze držitel platného certifikátu, elektrické připojení vyžaduje samostatný jištěný přívod a revizní zprávu a u čerpadel země–voda je navíc potřeba povolení k zásahu do podzemních vod. Oprávněná firma je zároveň podmínkou dotace i záruky výrobce.
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Čerpadlo vzduch–voda na klíč.</strong> Pro dům 150 m² 250 000 až 380 000 Kč včetně montáže a hydrauliky.</li>
            <li><strong>Čerpadlo země–voda.</strong> S vrty 400 000 až 600 000 Kč, z toho samotné vrty 1 200 až 1 800 Kč za metr hloubky.</li>
            <li><strong>Výpočet tepelné ztráty podle ČSN EN 12831.</strong> 3 000 až 8 000 Kč. Bez něj se čerpadlo dimenzuje odhadem a riziko předimenzování je vysoké.</li>
            <li><strong>Akumulační nádoba a zásobník teplé vody.</strong> 15 000 až 40 000 Kč podle objemu.</li>
            <li><strong>Úprava elektroinstalace.</strong> Nový přívod, jištění a případné navýšení hlavního jističe 8 000 až 25 000 Kč, revize 1 500 až 3 000 Kč.</li>
            <li><strong>Pravidelný servis.</strong> Roční kontrola tlaku, průtoku a nastavení ekvitermní křivky stojí 2 000 až 4 000 Kč a bývá podmínkou prodloužené záruky na kompresor.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak kalkulačka počítá návratnost tepelného čerpadla?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Roční úspora vzniká vynásobením současných nákladů na topení procentem, které odpovídá vašemu stávajícímu zdroji: 65 procent u elektrokotle a přímotopu, 38 procent u plynového kotle a 20 procent u tuhých paliv. Od ceny instalace se odečte dotace, čímž vznikne čistá investice, a ta se vydělí roční úsporou. Výsledkem je doba návratnosti v letech.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Za jak dlouho se tepelné čerpadlo vrátí při přechodu z plynu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při ročních nákladech 45 000 Kč za plyn činí úspora 38 procent, tedy 17 100 Kč za rok. Investice 250 000 Kč snížená o dotaci 100 000 Kč dává čistou investici 150 000 Kč, kterou úspora pokryje za 8,8 roku. U přechodu z elektrokotle se stejnými vstupy je úspora 29 250 Kč ročně a návratnost spadne na 5,1 roku.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik je dotace NZÚ na tepelné čerpadlo v roce 2026?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Program Nová zelená úsporám poskytuje rodinným domům až 100 000 Kč na čerpadlo vzduch–voda a až 120 000 Kč na typ země–voda. Podmínkou je sezónní účinnost SCOP alespoň 3,5, instalace oprávněnou firmou a podání žádosti před zahájením prací — na už instalované čerpadlo dotaci zpětně získat nelze. Podporu lze kombinovat s krajskými kotlíkovými dotacemi.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč je výsledná návratnost v praxi delší než z kalkulačky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka pracuje s jedinou průměrnou úsporou a nezahrnuje provoz záložní topné tyče v mrazech, servisní náklady ani změny cen energií. Reálná spotřeba závisí na sezónní účinnosti SCOP, teplotě otopné vody, stavu zateplení a zvoleném tarifu. Nejčastějším důvodem horšího výsledku jsou vysokoteplotní radiátory, které čerpadlo nutí dodávat vodu o 55 stupních místo 40, což snižuje účinnost o čtvrtinu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Může si tepelné čerpadlo nainstalovat svépomocí?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nemůže. Chladivový okruh obsahuje fluorované plyny a smí s ním pracovat jen osoba s platným certifikátem, elektrické připojení vyžaduje samostatný jištěný přívod a revizní zprávu. Instalace oprávněnou firmou je navíc podmínkou dotace NZÚ i záruky výrobce. Svépomocí lze připravit pouze stavební část, například betonový základ pro venkovní jednotku a prostupy pro potrubí.
            </p>
          </details>
        </div>

        {/* Mohlo by vás zajímat */}
        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6a8aaa", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Tepelné čerpadlo: Kompletní průvodce výběrem 2026", href: "/blog/tepelne-cerpadlo-pruvodce", icon: "♨️" },
              { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", icon: "💰" },
              { title: "Jak odvzdušnit radiátor – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", icon: "🌡️" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{
                display: "block", background: "#f0f7ff",
                border: "1px solid #bedaf0", borderRadius: "10px",
                padding: "14px 16px", textDecoration: "none",
              }}>
                <div style={{ fontSize: "18px", marginBottom: "6px" }}>{r.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#0f2233", lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ fontSize: "12px", color: "#6a9aba", marginTop: "6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
