import type { Metadata } from "next";
import Link from "next/link";
import VykonKlimatizaceCalculator from "@/app/components/VykonKlimatizaceCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka výkonu klimatizace 2026 – kolik kW/BTU pro mou místnost?",
  description: "Vypočítejte potřebný výkon klimatizace podle plochy, výšky stropu a orientace místnosti. Okamžitý výsledek v kW i BTU.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/vykon-klimatizace" },
  openGraph: { title: "Kalkulačka výkonu klimatizace 2026 – kolik kW/BTU pro mou místnost?", description: "Vypočítejte potřebný výkon klimatizace podle plochy, výšky stropu a orientace místnosti. Okamžitý výsledek v kW i BTU.", url: "https://www.domovniguru.cz/kalkulacky/vykon-klimatizace", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20v%C3%BDkonu%20klimatizace%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka výkonu klimatizace 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik kW klimatizace potřebuji na pokoj 20 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Pokoj o ploše 20 m² s výškou stropu 2,7 metru má objem 54 m³, což při třiceti wattech na kubický metr dává základ 1 620 W. U severní orientace se základ snižuje na 1 458 W a doporučená jednotka je nejmenší běžná velikost 2,0 kW. U silně osluněné místnosti na jih nebo západ vyjde 2 236 W a doporučení se posune na 2,5 kW." } },
      { "@type": "Question", "name": "Jak kalkulačka počítá potřebný výkon?", "acceptedAnswer": { "@type": "Answer", "text": "Nejprve vynásobí plochu místnosti výškou stropu a získá objem, ten vynásobí hodnotou 30 W na kubický metr. Výsledek pak koriguje dvěma koeficienty: podle orientace (sever 0,9, východ 1,0, jih nebo západ 1,15) a podle míry oslunění (stinná 0,85, normální 1,0, silně osluněná 1,2). Výkon ve wattech se dělí tisícem na kilowatty a násobí hodnotou 3,412 na jednotky BTU za hodinu." } },
      { "@type": "Question", "name": "Proč kalkulačka zaokrouhluje výkon nahoru?", "acceptedAnswer": { "@type": "Answer", "text": "Klimatizace se v Česku prodávají v pevné řadě 2,0, 2,5, 3,2, 3,5, 4,5, 5,5 a 7,0 kW, jiné velikosti běžně neseženete. Kalkulačka proto vybere první velikost, která vypočtený výkon pokryje, a nikdy nenavrhne jednotku slabší. Poddimenzovaná klimatizace běží v nejteplejších dnech nepřetržitě na maximum, požadovanou teplotu nedosáhne a spotřebuje přitom více elektřiny než správně zvolený model." } },
      { "@type": "Question", "name": "Co je BTU a jak ho přepočítám na kilowatty?", "acceptedAnswer": { "@type": "Answer", "text": "BTU za hodinu je britská tepelná jednotka, kterou používají především asijští a američtí výrobci v označení modelů. Jeden watt odpovídá 3,412 BTU za hodinu, takže kilowatt chladicího výkonu je přibližně 3 412 BTU. Jednotka označovaná jako 9000 BTU má tedy výkon okolo 2,6 kW a model 12000 BTU přibližně 3,5 kW." } },
      { "@type": "Question", "name": "Může si klimatizaci nainstalovat sám majitel?", "acceptedAnswer": { "@type": "Answer", "text": "Nemůže. Split klimatizace obsahuje fluorovaný chladivový okruh a manipulovat s ním smí pouze osoba s certifikátem podle zákona o látkách ovlivňujících klimatický systém Země. Instalace navíc vyžaduje vakuování okruhu, tlakovou zkoušku, samostatný jištěný přívod a elektrickou revizi. Neodborný zásah znamená ztrátu záruky, pokutu a riziko úniku chladiva." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Výkon klimatizace", "item": "https://www.domovniguru.cz/kalkulacky/vykon-klimatizace" }
    ]
  }]
};

export default function VykonKlimatizacePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Výkon klimatizace</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik kW klimatizace potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Správně dimenzovaná klimatizace chladí efektivně a nepředimenzovaná ani poddimenzovaná jednotka plýtvá energií. Zadejte plochu místnosti, výšku stropu a orientaci — kalkulačka okamžitě vypočítá potřebný výkon v kW i BTU a doporučí nejbližší standardní velikost dostupnou na trhu.</p>

        <VykonKlimatizaceCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně vybrat výkon klimatizace</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Základem výpočtu je objem místnosti (plocha × výška stropu) vynásobený specifickým tepelným ziskem. Pro české klima se běžně používá hodnota 30–35 W/m³ — kalkulačka počítá se 30 W/m³ jako výchozím bodem. Výsledný výkon se pak koriguje podle toho, kolik tepla do místnosti přichází zvenku: jižní a západní fasády jsou sluncem zasaženy nejdéle, a proto potřebují silnější jednotku než místnosti orientované na sever.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výška stropu hraje zásadní roli, která se v jednoduchých „pravidlech palce" (W/m²) často přehlíží. Místnost s výškou stropu 3 m má o 20 % větší objem než stejně velká místnost s výškou 2,5 m — a potřebuje odpovídajícíobjemový výkon. Proto kalkulačka pracuje s W/m³ místo W/m². Pokud máte podkrovní místnost se šikmými stropy, zadejte průměrnou výšku.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Výsledek kalkulačky je orientační základ — v praxi je třeba zohlednit také počet a velikost oken (prosklená fasáda může zdvojnásobit tepelný zisk), tepelné mosty ve zdi, přítomnost výpočetní techniky nebo spotřebičů a počet osob. Klimatizace se standardně vyrábí ve velikostech 2,0 / 2,5 / 3,2 / 3,5 / 4,5 / 5,5 a 7,0 kW — kalkulačka zaokrouhlí výsledek nahoru na nejbližší dostupnou velikost, aby výkon nestačil nestačil.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má tři kroky. Nejprve se z plochy a výšky stropu určí objem místnosti, který se vynásobí specifickým tepelným ziskem 30 W na kubický metr — hodnotou odpovídající běžně zastíněné místnosti v českém klimatu. Druhým krokem je korekce na orientaci: severní strana se násobí koeficientem 0,9, východní 1,0 a jižní nebo západní 1,15, protože odpolední slunce na ni dopadá v době, kdy je venkovní vzduch nejteplejší. Třetí krok koriguje míru oslunění — stinná místnost koeficientem 0,85, normální 1,0 a silně osluněná 1,2.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétně: ložnice 18 m² s výškou stropu 2,6 metru má objem 46,8 m³, základní zisk tedy 1 404 W. Okno míří na západ, takže se násobí koeficientem 1,15, a místnost je normálně osluněná, tedy koeficientem 1,0. Výsledek je 1 615 W, zaokrouhleně 1,6 kW a 5 509 BTU za hodinu. Kalkulačka doporučí nejmenší běžnou jednotku 2,0 kW. Stejně velká místnost na severní stranu a ve stínu by vyšla na 1 074 W — i tam ale 2,0 kW zůstává nejmenší dostupnou velikostí.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Oba koeficienty se násobí mezi sebou, takže se jejich vliv sčítá: silně osluněná místnost na jihozápad má proti zastíněné severní místnosti stejného objemu potřebu vyšší o 62 procent. Hodnota v BTU za hodinu vzniká vynásobením wattů číslem 3,412 a slouží jen k porovnání s katalogy výrobců, kteří jednotky takto označují. Výsledný výkon je čistě chladicí — u tepelných čerpadel vzduch–vzduch je topný výkon zpravidla o deset až dvacet procent vyšší a dimenzuje se zvlášť podle tepelné ztráty místnosti.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Chybně dimenzovaná nebo chybně umístěná klimatizace spotřebuje víc, chladí hůř a dožije se méně let, než by měla:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Předimenzovaná jednotka.</strong> Příliš silná klimatizace rychle srazí teplotu, vypne se a znovu nastartuje. Krátké cykly opotřebovávají kompresor a místnost zůstává vlhká, protože jednotka nemá čas odvést kondenzát.</li>
            <li><strong>Výpočet na metry čtvereční.</strong> Pravidlo „sto wattů na metr čtvereční" ignoruje výšku stropu. Podkroví s pětimetrovým vrcholem má dvojnásobný objem než stejně velká místnost v panelovém bytě.</li>
            <li><strong>Zanedbaná prosklená plocha.</strong> Celoskleněná stěna na jižní straně může tepelný zisk zdvojnásobit. Pokud nelze doplnit vnější žaluzie nebo fólii, je třeba zvolit o jednu velikost silnější jednotku.</li>
            <li><strong>Jedna vnitřní jednotka na celý byt.</strong> Chlad se nešíří přes zavřené dveře ani zalomenou chodbu. Pro více místností je správné řešení multisplit s vlastní jednotkou v každé místnosti.</li>
            <li><strong>Nevhodné umístění vnitřní jednotky.</strong> Výdech mířící přímo na postel nebo pracovní místo způsobuje bolesti hlavy a prochladnutí. Jednotka patří tak, aby proud vzduchu obíhal místnost po stropě.</li>
            <li><strong>Zapomenutý odvod kondenzátu.</strong> Vnitřní jednotka vyrobí v letním dni několik litrů vody. Bez spádové hadice nebo kondenzátního čerpadla voda zateče do stěny.</li>
            <li><strong>Nevyčištěné filtry.</strong> Zanesený filtr snižuje průtok vzduchu, prodlužuje chlazení a zvyšuje spotřebu. Filtry se proplachují každé tři až čtyři týdny v sezóně.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Na co myslet před pořízením</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            <strong>Instalaci split klimatizace musí provést odborná firma.</strong> S fluorovaným chladivem smí manipulovat jen osoba s certifikátem, okruh je nutné odvakuovat a tlakově zkoušet, přívod musí mít vlastní jištění a elektroinstalaci je třeba doložit revizní zprávou. Svépomocná montáž znamená ztrátu záruky, riziko úniku chladiva a v případě kontroly pokutu.
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Jednotka.</strong> Split 2,5 kW od zavedené značky stojí 15 000 až 28 000 Kč, model 3,5 kW 20 000 až 35 000 Kč. Multisplit pro tři místnosti začíná okolo 55 000 Kč.</li>
            <li><strong>Montáž.</strong> Standardní instalace s potrubím do tří metrů vyjde na 8 000 až 15 000 Kč. Delší trasa, průraz nosnou zdí nebo práce z lešení cenu dál zvyšují.</li>
            <li><strong>Elektropřívod a revize.</strong> Nový jištěný okruh z rozvaděče stojí 3 000 až 8 000 Kč, revizní zpráva 1 500 až 3 000 Kč.</li>
            <li><strong>Souhlas s umístěním venkovní jednotky.</strong> V bytovém domě je třeba povolení společenství vlastníků, v památkové zóně i stanovisko stavebního úřadu. Jednotku nelze zavěsit na fasádu bez schválení.</li>
            <li><strong>Provozní náklady.</strong> Jednotka 2,5 kW se třídou SEER okolo 7 spotřebuje v letní sezóně přibližně 250 až 400 kWh, tedy 1 500 až 2 500 Kč.</li>
            <li><strong>Pravidelný servis.</strong> Kontrola tlaku chladiva a dezinfekce výměníku jednou za dva roky stojí 1 500 až 3 000 Kč a je podmínkou prodloužené záruky.</li>
            <li><strong>Hlučnost.</strong> Venkovní jednotka má 45 až 55 dB. V zástavbě s krátkými odstupy sledujte hlukové limity v nočních hodinách a zvolte tišší model nebo protihlukový kryt.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik kW klimatizace potřebuji na pokoj 20 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pokoj o ploše 20 m² s výškou stropu 2,7 metru má objem 54 m³, což při třiceti wattech na kubický metr dává základ 1 620 W. U severní orientace se základ snižuje na 1 458 W a doporučená jednotka je nejmenší běžná velikost 2,0 kW. U silně osluněné místnosti na jih nebo západ vyjde 2 236 W a doporučení se posune na 2,5 kW.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak kalkulačka počítá potřebný výkon?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nejprve vynásobí plochu místnosti výškou stropu a získá objem, ten vynásobí hodnotou 30 W na kubický metr. Výsledek pak koriguje dvěma koeficienty: podle orientace (sever 0,9, východ 1,0, jih nebo západ 1,15) a podle míry oslunění (stinná 0,85, normální 1,0, silně osluněná 1,2). Výkon ve wattech se dělí tisícem na kilowatty a násobí hodnotou 3,412 na jednotky BTU za hodinu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč kalkulačka zaokrouhluje výkon nahoru?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Klimatizace se v Česku prodávají v pevné řadě 2,0, 2,5, 3,2, 3,5, 4,5, 5,5 a 7,0 kW, jiné velikosti běžně neseženete. Kalkulačka proto vybere první velikost, která vypočtený výkon pokryje, a nikdy nenavrhne jednotku slabší. Poddimenzovaná klimatizace běží v nejteplejších dnech nepřetržitě na maximum, požadovanou teplotu nedosáhne a spotřebuje přitom více elektřiny než správně zvolený model.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Co je BTU a jak ho přepočítám na kilowatty?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              BTU za hodinu je britská tepelná jednotka, kterou používají především asijští a američtí výrobci v označení modelů. Jeden watt odpovídá 3,412 BTU za hodinu, takže kilowatt chladicího výkonu je přibližně 3 412 BTU. Jednotka označovaná jako 9000 BTU má tedy výkon okolo 2,6 kW a model 12000 BTU přibližně 3,5 kW.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Může si klimatizaci nainstalovat sám majitel?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nemůže. Split klimatizace obsahuje fluorovaný chladivový okruh a manipulovat s ním smí pouze osoba s certifikátem podle zákona o látkách ovlivňujících klimatický systém Země. Instalace navíc vyžaduje vakuování okruhu, tlakovou zkoušku, samostatný jištěný přívod a elektrickou revizi. Neodborný zásah znamená ztrátu záruky, pokutu a riziko úniku chladiva.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak vybrat klimatizaci – kompletní průvodce", href: "/blog/jak-vybrat-klimatizaci", icon: "❄️" },
              { title: "Spotřeba elektřiny domácnosti", href: "/kalkulacky/spotreba-elektriciny", icon: "⚡" },
              { title: "Chytrý termostat – jak funguje a kolik ušetří", href: "/blog/chytry-termostat-uspora-vytapeni", icon: "🌡️" },
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
