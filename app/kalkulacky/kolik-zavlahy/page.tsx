import type { Metadata } from "next";
import Link from "next/link";
import ZavlahaCalculator from "@/app/components/ZavlahaCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka zavlažování 2026 – kolik litrů vody na zahradu?",
  description: "Kolik litrů vody potřebuje vaše zahrada za týden? Zadej plochu a typ rostlin – výpočet potřeby zavlažování okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-zavlahy" },
  openGraph: { title: "Kalkulačka zavlažování 2026", description: "Kolik litrů vody potřebuje vaše zahrada za týden? Zadej plochu a typ rostlin – výpočet potřeby zavlažování okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-zavlahy", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20zavla%C5%BEov%C3%A1n%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka zavlažování 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik litrů vody potřebuje trávník za týden?", "acceptedAnswer": { "@type": "Answer", "text": "V letních měsících počítejte 20 litrů na metr čtvereční za týden, v období sucha a na propustné písčité půdě až 25 litrů. Trávník o ploše 200 m² tak spotřebuje přibližně 4 000 litrů, tedy 4 m³ vody týdně. Na jaře a na podzim potřeba klesá na 8 až 12 l/m², protože odpar je nižší. Zeleninové záhony mají potřebu 15 l/m², keře a vzrostlé dřeviny jen 8 l/m²." } },
      { "@type": "Question", "name": "Je lepší zalévat denně, nebo méně často a více?", "acceptedAnswer": { "@type": "Answer", "text": "Vždy méně často a vydatněji. Dvě až tři zálivky v týdnu po 7 až 10 litrech na metr čtvereční promočí půdu do hloubky 15 až 20 cm a kořeny jdou za vodou dolů. Každodenní mělká zálivka po 3 litrech namočí jen horní 3 cm, kořenový systém zůstane plochý a trávník uschne během prvního týdne bez zalévání. Výjimkou je čerstvě vysetý trávník a nově vysazené letničky, které se první dva až tři týdny zalévají denně." } },
      { "@type": "Question", "name": "Kdy je nejlepší čas na zalévání?", "acceptedAnswer": { "@type": "Answer", "text": "Mezi šestou a devátou hodinou ráno. Půda i vzduch jsou chladné, odpar je minimální a listy do poledne oschnou, takže nehrozí houbové choroby. Večerní zálivka po sedmnácté hodině je druhá nejlepší volba, ale na trávníku zvyšuje riziko plísní, protože list zůstane celou noc mokrý. Zálivka v poledne ztratí odparem 30 až 50 procent vody a kapky na listech mohou působit jako čočky." } },
      { "@type": "Question", "name": "Jak zjistím, zda jsem zalil dost?", "acceptedAnswer": { "@type": "Answer", "text": "Nejspolehlivější je zkouška rýčem: po zálivce zaryjte do záhonu nebo trávníku a podívejte se, do jaké hloubky je půda vlhká. Mělo by to být 15 až 20 cm u trávníku a 25 až 30 cm u keřů. U postřikovačů rozmístěte po ploše tři prázdné konzervy nebo kelímky a změřte, za jak dlouho se v nich nasbírá 1 cm vody — to odpovídá 10 litrům na metr čtvereční. Tím zjistíte skutečný výkon své závlahy." } },
      { "@type": "Question", "name": "Kolik vody ušetří kapková závlaha a mulčování?", "acceptedAnswer": { "@type": "Answer", "text": "Kapková závlaha dodá vodu přímo ke kořenům a sníží spotřebu o 30 až 60 procent proti postřikovačům, protože nedochází k odparu z listů ani ke smáčení cestiček. Vrstva mulče 7 až 10 cm omezí odpar z povrchu půdy o dalších 30 až 50 procent a prodlouží interval mezi zálivkami zhruba o polovinu. Kombinace mulče, kapkové závlahy a ranního spouštění dokáže snížit roční spotřebu vody na zahradě přibližně na polovinu." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik vody na zavlažování", "item": "https://www.domovniguru.cz/kalkulacky/kolik-zavlahy" }
    ]
  }]
};

export default function KolikZavlahyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik vody na zavlažování</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik vody potřebuje moje zahrada?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu zahrady a potřebu vody na m² — kalkulačka ti okamžitě spočítá, kolik litrů potřebuješ na jedno zavlažování a za týden.</p>

        <ZavlahaCalculator />
        <AffiliateCTA merchant="zahrada" text="Vybrat zavlažování" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně zavlažovat – zásady efektivní zálivky</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Potřeba vody se liší podle druhu rostlin a půdy. Trávník potřebuje 15–25 litrů na m² týdně v létě — v obdobích sucha i více. Záhony se zeleninou a letničkami mají vyšší potřebu (15–20 l/m²/týden), protože rychle rostou a odpařují vodu listy. Keře a dřeviny mají hlubší kořenový systém a vystačí si s 8–12 l/m²/týden. Výpočet předpokládá průměrné podmínky — v horkém a slunném letním týdnu může být skutečná potřeba o 30–50 % vyšší.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Načasování zálivky výrazně ovlivňuje efektivitu. Ranní zavlažování (6–9 hodin) je nejúčinnější — půda i vzduch jsou chladné, odpařování minimální a listy mají čas do poledne oschnout, čímž se snižuje riziko houbových chorob. Večerní zálivka (po 17 h) je druhá nejlepší možnost. Zálivka v poledne ztrácí 30–50 % vody odpařováním a způsobuje tepelný stres u rostlin. Kapková nebo podpovrchová zavlažování jsou nejefektivnější — přivádějí vodu přímo ke kořenům a snižují spotřebu o 30–60 % oproti sprinklerům.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Zachycování dešťové vody do nádrže (cisterna, sud) je ekologické a ekonomické — v průměrném českém roce padne 500–700 mm srážek, z střechy 100 m² lze zachytit 40–60 m³ vody ročně. To pokryje potřebu průměrné zahrady 100 m² po celou sezónu. Mulčování záhonů 7–10 cm vrstvou organického materiálu snižuje odpařování z půdy o 30–50 % a prodlužuje interval mezi zalévání. Kombinace mulčování + ranní zálivka + kapkový systém je nejlepší způsob, jak minimalizovat spotřebu vody při zachování zdravé zahrady.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet vychází z toho, že potřeba vody se udává jako vrstva srážek na plochu. Týdenní spotřeba je součin plochy v m² a potřeby v litrech na metr čtvereční za týden. Z ní se dopočítá dávka na jednu zálivku — týdenní objem se vydělí počtem dnů, kdy skutečně zaléváte. Měsíční spotřeba je čtyřnásobek týdenní. Klíčové je, že údaj v l/m² je zároveň údaj o hloubce promočení: 10 litrů na metr čtvereční znamená vrstvu vody 1 cm, tedy 10 mm srážek.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: zahrada 180 m², převážně trávník s potřebou 20 l/m² za týden. Týdenní spotřeba je 180 × 20 = 3 600 litrů, tedy 3,6 m³. Při zavlažování třikrát týdně vychází 1 200 litrů na jedno spuštění, což je zhruba 6,7 litru na metr čtvereční, tedy necelých 7 mm srážek. Za měsíc jde o 14 400 litrů, za sezónu od května do září přibližně 65 m³. U vodovodní vody za 110 až 130 Kč za m³ včetně stočného to je 7 000 až 8 500 Kč — proto se podružný vodoměr i dešťová nádrž vyplatí do dvou sezón.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě věci je potřeba dopočítat. První jsou srážky: každých 10 mm deště za týden ušetří 10 litrů na metr čtvereční, takže po vydatném dešti se zálivka vynechá úplně — srážkoměr je nejlevnější nástroj na snížení spotřeby. Druhá je půda: na písčité propustné půdě rozdělte stejné množství do více menších dávek, protože voda proteče pod kořenovou zónu, zatímco těžká hlinitá půda zvládne naráz i 15 litrů na metr čtvereční, ale nasává je pomaleji. Plochu zadávejte jen jako skutečně zavlažovanou výměru, bez terasy a cestiček.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Zalévání je nejčastější zahradní činnost a zároveň ta, u které se chybuje nejvíc. Tyto chyby stojí nejvíc vody i rostlin:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Mělká zálivka každý den.</strong> Tři litry na metr čtvereční denně namočí jen horní centimetry půdy. Kořeny zůstanou u povrchu a trávník uschne při prvním týdnu bez vody. Lepší jsou dvě až tři vydatné zálivky týdně.</li>
            <li><strong>Zalévání v poledne.</strong> Třetina až polovina vody se odpaří, než stihne vsáknout, a rostliny dostanou tepelný šok. Spouštějte závlahu mezi šestou a devátou ráno.</li>
            <li><strong>Automatická závlaha bez čidla srážek.</strong> Systém, který zalévá i během dešťů, promarní za sezónu několik metrů kubických vody. Čidlo se vrátí za jednu sezónu.</li>
            <li><strong>Neověřený výkon postřikovačů.</strong> Bez měření nikdo neví, kolik vody skutečně dopadne. Rozmístěte po ploše kelímky a změřte dobu, za kterou se v nich nasbírá 1 cm vody.</li>
            <li><strong>Zálivka listů místo půdy.</strong> U rajčat, okurek, dýní a růží způsobuje smáčení listů plísně a padlí. Voda patří pod rostlinu, ideálně kapkovací hadicí nebo přímo ke kořenům.</li>
            <li><strong>Stejná dávka po celou sezónu.</strong> Potřeba vody v červenci je proti květnu a září až dvojnásobná. Dávku a frekvenci upravujte podle teploty, srážek a fáze růstu.</li>
            <li><strong>Zapomenuté truhlíky.</strong> Květináč na slunci vyschne za jediný den, protože objem substrátu je malý. Truhlíky se zalévají odděleně, zpravidla denně.</li>
            <li><strong>Nevypuštěný systém před zimou.</strong> Voda ve ventilech a postřikovačích zmrzne a praskne. Na konci října systém profoukněte kompresorem.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spočítané litry se musí někam a nějak dostat. Rozsah výbavy závisí na tom, zda zaléváte hadicí, nebo stavíte systém:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Zahradní hadice 1/2&quot; nebo 3/4&quot;</strong> s rychlospojkami a navijákem: 1 200–3 500 Kč podle délky a kvality.</li>
            <li><strong>Kapková hadice nebo kapkovací potrubí</strong> 15–40 Kč za běžný metr, startovací sada s regulátorem tlaku a filtrem 800–2 500 Kč.</li>
            <li><strong>Postřikovače</strong> — výsuvné rotační na trávník 250–700 Kč za kus, statické na záhony od 150 Kč. Na 180 m² trávníku počítejte se šesti až osmi kusy.</li>
            <li><strong>Zavlažovací počítač nebo ventil s časovačem</strong> (700–3 000 Kč) a <strong>čidlo srážek či půdní vlhkosti</strong> (400–1 500 Kč), které zabrání zalévání do deště.</li>
            <li><strong>Dešťový sud 300 l</strong> za 1 000–2 500 Kč nebo <strong>podzemní nádrž 3–5 m³</strong> včetně osazení 25 000–60 000 Kč. Z 100 m² střechy lze za rok zachytit 40 až 60 m³ vody.</li>
            <li><strong>Čerpadlo na dešťovou vodu</strong> (domácí vodárna 2 500–7 000 Kč, ponorné do sudu od 1 500 Kč). Samospádem z nádrže kapkovou závlahu nerozběhnete.</li>
            <li><strong>Srážkoměr</strong> (150–500 Kč) a tři prázdné konzervy nebo kelímky na kontrolu výkonu postřikovačů — nejlevnější diagnostika závlahy.</li>
            <li><strong>Podružný zahradní vodoměr</strong> (900–2 500 Kč plus montáž). Voda na zalévání neodtéká do kanalizace, takže po jeho nahlášení se za ni neplatí stočné.</li>
            <li><strong>Mulč</strong> na záhony (pytel 60–70 l za 120–250 Kč) jako nejúčinnější „bezplatná" závlaha — omezí odpar o 30 až 50 procent.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik litrů vody potřebuje trávník za týden?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              V letních měsících počítejte 20 litrů na metr čtvereční za týden, v období sucha a na propustné písčité půdě až 25 litrů. Trávník o ploše 200 m² tak spotřebuje přibližně 4 000 litrů, tedy 4 m³ vody týdně. Na jaře a na podzim potřeba klesá na 8 až 12 l/m², protože odpar je nižší. Zeleninové záhony mají potřebu 15 l/m², keře a vzrostlé dřeviny jen 8 l/m².
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Je lepší zalévat denně, nebo méně často a více?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Vždy méně často a vydatněji. Dvě až tři zálivky v týdnu po 7 až 10 litrech na metr čtvereční promočí půdu do hloubky 15 až 20 cm a kořeny jdou za vodou dolů. Každodenní mělká zálivka po 3 litrech namočí jen horní 3 cm, kořenový systém zůstane plochý a trávník uschne během prvního týdne bez zalévání. Výjimkou je čerstvě vysetý trávník a nově vysazené letničky, které se první dva až tři týdny zalévají denně.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kdy je nejlepší čas na zalévání?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Mezi šestou a devátou hodinou ráno. Půda i vzduch jsou chladné, odpar je minimální a listy do poledne oschnou, takže nehrozí houbové choroby. Večerní zálivka po sedmnácté hodině je druhá nejlepší volba, ale na trávníku zvyšuje riziko plísní, protože list zůstane celou noc mokrý. Zálivka v poledne ztratí odparem 30 až 50 procent vody a kapky na listech mohou působit jako čočky.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak zjistím, zda jsem zalil dost?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nejspolehlivější je zkouška rýčem: po zálivce zaryjte do záhonu nebo trávníku a podívejte se, do jaké hloubky je půda vlhká. Mělo by to být 15 až 20 cm u trávníku a 25 až 30 cm u keřů. U postřikovačů rozmístěte po ploše tři prázdné konzervy nebo kelímky a změřte, za jak dlouho se v nich nasbírá 1 cm vody — to odpovídá 10 litrům na metr čtvereční. Tím zjistíte skutečný výkon své závlahy.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik vody ušetří kapková závlaha a mulčování?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kapková závlaha dodá vodu přímo ke kořenům a sníží spotřebu o 30 až 60 procent proti postřikovačům, protože nedochází k odparu z listů ani ke smáčení cestiček. Vrstva mulče 7 až 10 cm omezí odpar z povrchu půdy o dalších 30 až 50 procent a prodlouží interval mezi zálivkami zhruba o polovinu. Kombinace mulče, kapkové závlahy a ranního spouštění dokáže snížit roční spotřebu vody na zahradě přibližně na polovinu.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", icon: "💧" },
              { title: "Zavlažovací systém – jak ho nainstalovat", href: "/blog/zavlaha-zahrada-postup", icon: "🌿" },
              { title: "Kalkulačka mulče na záhony", href: "/kalkulacky/kolik-mulce", icon: "🌿" },
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
