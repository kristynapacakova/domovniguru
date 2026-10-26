import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import BarvyCalculator from "@/app/components/BarvyCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka barvy na zeď 2026 – kolik litrů potřebuju?",
  description: "Kolik litrů barvy potřebuješ? Zadej rozměry místnosti, počet nátěrů a vydatnost – výpočet spotřeby barvy na m² ihned. Zdarma, bez registrace.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-barvy" },
  openGraph: {
    title: "Kalkulačka barvy na zeď 2026",
    description: "Kolik litrů barvy potřebuju? Spočítej přesně podle rozměrů místnosti.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-barvy",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20barvy%20na%20ze%C4%8F%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka barvy na zeď 2026" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik litrů barvy potřebuji na 1 m² stěny?", "acceptedAnswer": { "@type": "Answer", "text": "Při běžné vydatnosti 10 m²/l spotřebujete na jeden nátěr přibližně 0,1 litru na metr čtvereční, u standardních dvou nátěrů tedy 0,2 l/m². Pokoj 4 × 3 metry s výškou 2,6 m má po odečtení okna a dveří okolo 33 m² stěn, což znamená asi 6,7 litru barvy na dva nátěry. Na hrubší nebo savější omítce reálná vydatnost klesá na 6 až 8 m²/l a spotřeba odpovídajícím způsobem roste." } },
      { "@type": "Question", "name": "Kolik nátěrů barvy je potřeba?", "acceptedAnswer": { "@type": "Answer", "text": "Standardem jsou dva nátěry — jeden nátěr téměř nikdy nekryje rovnoměrně a po vyschnutí se objeví pruhy po válečku. Tři nátěry počítejte při přechodu z tmavé nebo syté barvy na světlou, u sytých pigmentů jako žlutá, červená a oranžová a při přemalování stěny s mapami po vodě. Jediný nátěr má smysl jen jako obnova stejného odstínu na nepoškozené stěně." } },
      { "@type": "Question", "name": "Je nutná penetrace před malováním?", "acceptedAnswer": { "@type": "Answer", "text": "Penetraci potřebujete na nové sádrové a vápenocementové omítky, na sádrokarton, na stěrkovaný a brousený podklad a všude tam, kde byl odstraněn starý nátěr. Nepenetrovaná savá plocha vytáhne z barvy pojivo, nátěr zůstane prášivý a spotřeba vzroste o 20 až 40 procent. Litr koncentrátu zředěného podle návodu vystačí na 15 až 25 m² a vrátí se už na první ušetřené plechovce barvy." } },
      { "@type": "Question", "name": "Kolik stojí materiál na vymalování pokoje?", "acceptedAnswer": { "@type": "Answer", "text": "U pokoje s cca 35 m² stěn a dvěma nátěry potřebujete okolo 7 litrů barvy. Levná bílá interiérová barva v 10litrovém balení vyjde na 400 až 800 Kč, kvalitní otěruvzdorná tónovaná barva na 1 500 až 2 500 Kč. K tomu připočtěte 300 až 600 Kč za penetraci, 150 až 300 Kč za krepovou pásku a zakrývací fólii a případně 300 až 600 Kč za váleček s tyčí a vanu, pokud je nemáte." } },
      { "@type": "Question", "name": "Proč barva nekryje ani po dvou nátěrech?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastěji jde o barvu s nízkou krycí schopností, o příliš silné zředění vodou nebo o natenko vyválečkovanou vrstvu, kdy se barva místo nanášení rozetře. Druhou skupinou příčin je podklad — nepenetrovaná savá omítka, zbytky starého vápenného nátěru nebo nerovnoměrně stěrkovaná plocha. U sytých odstínů s malým podílem bílého pigmentu je třetí nátěr prostě technologická nutnost, ne vada barvy." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik barvy", "item": "https://www.domovniguru.cz/kalkulacky/kolik-barvy" }
    ]
  }]
};

export default function KolikBarvyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik barvy</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik barvy potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej rozměry místnosti, počet nátěrů a vydatnost barvy — kalkulačka ti okamžitě spočítá přesné množství v litrech.
        </p>

        <BarvyCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit barvy a nářadí" />

        <ShareButtons url="https://www.domovniguru.cz/kalkulacky/kolik-barvy" title="Kalkulačka barvy na zeď 2026 – kolik litrů potřebuju?" />

        {/* SEO TEXT */}
        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak správně změřit plochu stěn a proč na tom záleží
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Správné změření plochy stěn je základ přesného odhadu spotřeby barvy. Nejčastější chybou je nezapočítání odečtu oken a dveří — průměrné okno zabírá 1,5–2 m² a standardní dveře asi 1,8 m². Při místnosti se třemi okny a jedněmi dveřmi to dělá 6–8 m² navíc, což při vydatnosti 10 m²/litr znamená zbytečně zakoupené téměř jedno celé balení. Používej pásmo nebo laserový měřič — metrem na švu snadno vznikne chyba 5–10 cm na stěnu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spotřebu barvy výrazně ovlivňuje stav a barva podkladu. Na tmavou nebo silně nabarvenou stěnu bude bílá barva potřebovat tři nátěry místo dvou — a pro přechod z tmavé na světlou barvu se vyplatí nejprve nanést tónovaný základní nátěr (základ ve světlejším odstínu cílové barvy). Na hrubé nebo savé omítky — například nové sádrové omítky nebo porobeton — doporučujeme nejprve penetraci. Bez ní barva prosakuje hlouběji do povrchu a spotřeba vzroste o 20–40 %.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Výsledek kalkulačky vychází z ideálních podmínek — rovný povrch, standardní penetrovaný podklad, válečkem. V praxi vždy přidej alespoň 10 % rezervu pro drobné opravy, případné přetírání a zbytky v nádobě. Pokud maluje začátečník nebo se používá štětec místo válečku, počítej s rezervou až 15 %. Barvu nakupuj raději o jedno balení více — zbylou barvu uschovej pro záplatování škrábanců a otlačenin v budoucnu.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka pracuje ve třech krocích. Nejprve spočítá hrubou plochu jako délka stěny × výška × počet stěn. Z té odečte otvory — každé zadané okno nebo dveře se odečítají paušálně jako 1,5 m². Výsledná čistá plocha se vynásobí počtem nátěrů a vydělí vydatností barvy v m² na litr. Litry se nakonec zaokrouhlí nahoru na jedno desetinné místo, takže i drobný zbytek znamená o desetinu litru víc.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Na výchozích hodnotách to vypadá takto: 4 m délka × 2,6 m výška × 4 stěny dává 41,6 m² hrubé plochy. Dva otvory z ní uberou 3 m², čistá plocha je tedy 38,6 m². Při dvou nátěrech natíráte celkem 77,2 m² a při vydatnosti 10 m²/l to vychází na 7,72 litru, které kalkulačka zobrazí jako 7,8 litru. Prakticky to znamená jedno desetilitrové balení, nebo tři tříkilové kombinace, pokud chcete mít zbytek na opravy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Protože kalkulačka násobí jedinou délku počtem stěn, u nepravidelné místnosti zadávejte vstupy jinak. Pokoj 4 × 3 m nemá čtyři stejné stěny: sečtěte obvod (2 × 4 + 2 × 3 = 14 m), zadejte ho do pole délka a počet stěn nastavte na 1. Vyjde 36,4 m² místo nadsazených 41,6 m². Stejným trikem spočítáte strop: počet stěn 1, do délky zadejte délku místnosti a do výšky její šířku. A protože výsledek žádnou rezervu neobsahuje, přidejte si k němu ještě 10 % — u štětce nebo velmi strukturované omítky 15 %.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nákup barvy se kazí skoro vždy stejnými omyly. Většina z nich stojí jednu zbytečnou plechovku nebo jeden nervózní výjezd do hobbymarketu uprostřed malování:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Počítat s jedním nátěrem.</strong> Jeden nátěr nekryje ani bílou na bílou. Do kalkulačky patří dvojka, u přechodu z tmavé trojka — jinak je výsledek rovnou o polovinu nižší, než kolik reálně spotřebujete.</li>
            <li><strong>Vydatnost z etikety brát jako fakt.</strong> Údaj 12–14 m²/l platí pro jeden nátěr na hladkém penetrovaném podkladu. Na štukové omítce počítejte 8–10 m²/l, na nepenetrované sádrové stěně 6–8 m²/l.</li>
            <li><strong>Paušál 1,5 m² na každý otvor.</strong> U malého sklepního okna je nadsazený, u francouzského okna o ploše 4 m² naopak hluboko pod skutečností — takové okno zadejte jako tři otvory.</li>
            <li><strong>Vynechaná penetrace.</strong> Ušetřených 400 Kč za penetraci se vrátí jako plechovka barvy navíc, prášivý povrch a nerovnoměrné krytí po zaschnutí.</li>
            <li><strong>Dva různé namíchané odstíny.</strong> Tónování je strojové, ale šarže se liší. Celé množství nechte namíchat najednou a plechovky před prací slijte do jednoho vědra.</li>
            <li><strong>Přerušení mokrého okraje.</strong> Pauza na oběd uprostřed stěny zanechá viditelný pruh. Jedna stěna se vždy maluje v jednom tahu, od okna směrem do místnosti.</li>
            <li><strong>Dotírání zasychající barvy.</strong> Válečkování plochy, která už začala táhnout, strhne vrstvu a vytvoří mapy. Opravy se dělají až přes celý další nátěr, ne lokálně.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Barva je jen část nákladů. Pokud malujete poprvé, počítejte s následující výbavou — ceny jsou orientační, podle běžné nabídky hobbymarketů:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Váleček s klecí a teleskopickou tyčí</strong> — 300 až 600 Kč. Na hladkou stěnu váleček s vlasem 10–12 mm, na strukturovanou 18 mm.</li>
            <li><strong>Malířská vana s žebrovanou plochou</strong> — 150 až 300 Kč. Vědro s mřížkou je alternativa, ale váleček se v něm hůř odvaluje.</li>
            <li><strong>Penetrace</strong> — 300 až 600 Kč za 5litrový koncentrát, po zředění vystačí na 100 až 200 m². Nutná na všechny savé a stěrkované podklady.</li>
            <li><strong>Plochý štětec 50–60 mm</strong> — 100 až 250 Kč. Předmalovává rohy, okolí lišt a hrany, kam váleček nedosáhne.</li>
            <li><strong>Krepová páska a zakrývací fólie</strong> — 150 až 300 Kč celkem. Páska pro malíře s ostrou hranou drží lépe než běžná lepenka a nestrhává starý nátěr.</li>
            <li><strong>Akrylový tmel nebo sádrová stěrka</strong> — 100 až 250 Kč. Na praskliny, díry po hmoždinkách a vlasové trhliny v rozích; brousí se mřížkou P120 za 50 až 100 Kč.</li>
            <li><strong>Barva samotná</strong> — základní bílá interiérová 40 až 80 Kč/l v 10litrovém balení, otěruvzdorná tónovaná 150 až 250 Kč/l. Do kuchyně a koupelny volte mycí nátěr s označením odolnosti v mokrém oděru třídy 1 nebo 2.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik litrů barvy potřebuji na 1 m² stěny?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při běžné vydatnosti 10 m²/l spotřebujete na jeden nátěr přibližně 0,1 litru na metr čtvereční, u standardních dvou nátěrů tedy 0,2 l/m². Pokoj 4 × 3 metry s výškou 2,6 m má po odečtení okna a dveří okolo 33 m² stěn, což znamená asi 6,7 litru barvy na dva nátěry. Na hrubší nebo savější omítce reálná vydatnost klesá na 6 až 8 m²/l a spotřeba odpovídajícím způsobem roste.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik nátěrů barvy je potřeba?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Standardem jsou dva nátěry — jeden nátěr téměř nikdy nekryje rovnoměrně a po vyschnutí se objeví pruhy po válečku. Tři nátěry počítejte při přechodu z tmavé nebo syté barvy na světlou, u sytých pigmentů jako žlutá, červená a oranžová a při přemalování stěny s mapami po vodě. Jediný nátěr má smysl jen jako obnova stejného odstínu na nepoškozené stěně.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Je nutná penetrace před malováním?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Penetraci potřebujete na nové sádrové a vápenocementové omítky, na sádrokarton, na stěrkovaný a brousený podklad a všude tam, kde byl odstraněn starý nátěr. Nepenetrovaná savá plocha vytáhne z barvy pojivo, nátěr zůstane prášivý a spotřeba vzroste o 20 až 40 procent. Litr koncentrátu zředěného podle návodu vystačí na 15 až 25 m² a vrátí se už na první ušetřené plechovce barvy.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí materiál na vymalování pokoje?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U pokoje s cca 35 m² stěn a dvěma nátěry potřebujete okolo 7 litrů barvy. Levná bílá interiérová barva v 10litrovém balení vyjde na 400 až 800 Kč, kvalitní otěruvzdorná tónovaná barva na 1 500 až 2 500 Kč. K tomu připočtěte 300 až 600 Kč za penetraci, 150 až 300 Kč za krepovou pásku a zakrývací fólii a případně 300 až 600 Kč za váleček s tyčí a vanu, pokud je nemáte.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč barva nekryje ani po dvou nátěrech?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nejčastěji jde o barvu s nízkou krycí schopností, o příliš silné zředění vodou nebo o natenko vyválečkovanou vrstvu, kdy se barva místo nanášení rozetře. Druhou skupinou příčin je podklad — nepenetrovaná savá omítka, zbytky starého vápenného nátěru nebo nerovnoměrně stěrkovaná plocha. U sytých odstínů s malým podílem bílého pigmentu je třetí nátěr prostě technologická nutnost, ne vada barvy.
            </p>
          </details>
        </div>

        {/* MOHLO BY VÁS ZAJÍMAT */}
        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Jak vybrat barvu na zeď – psychologie a typy pojiv", href: "/blog/jak-vybrat-barvu-na-zed", icon: "🎨" },
              { title: "Jak malovat rohy a lišty bez přetahování", href: "/blog/jak-malovat-rohy-a-listy", icon: "📐" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display:"block", background:"#f8f4f0", border:"1px solid #e8e0d8", borderRadius:"10px", padding:"14px 16px", textDecoration:"none", transition:"background 120ms" }}>
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
