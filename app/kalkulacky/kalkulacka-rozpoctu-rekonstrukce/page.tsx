import type { Metadata } from "next";
import Link from "next/link";
import RozpocetRekonstrukceCalculator from "@/app/components/RozpocetRekonstrukceCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka rozpočtu rekonstrukce bytu 2026 – odhad ceny",
  description: "Spočítejte si orientační rozpočet rekonstrukce bytu podle plochy, standardu materiálů a počtu mokrých provozů. Okamžitý odhad ceny vč. rezervy.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kalkulacka-rozpoctu-rekonstrukce" },
  openGraph: { title: "Kalkulačka rozpočtu rekonstrukce bytu 2026", description: "Spočítejte si orientační rozpočet rekonstrukce bytu podle plochy, standardu materiálů a počtu mokrých provozů. Okamžitý odhad ceny vč. rezervy.", url: "https://www.domovniguru.cz/kalkulacky/kalkulacka-rozpoctu-rekonstrukce", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20rozpo%C4%8Dtu%20rekonstrukce%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka rozpočtu rekonstrukce bytu 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik stojí rekonstrukce bytu 65 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Ve středním standardu 14 000 Kč/m² vychází základní náklad na 910 000 Kč. Dva mokré provozy, tedy koupelna a kuchyně, přidávají po 80 000 Kč, celkem 160 000 Kč. Mezisoučet je 1 070 000 Kč a po přidání osmnáctiprocentní rezervy vychází celkový odhad přibližně 1 262 600 Kč. V nízkém standardu by stejný byt stál kolem 802 000 Kč, ve vysokém kolem 1 877 000 Kč." } },
      { "@type": "Question", "name": "Jaký je rozdíl mezi nízkým, středním a vysokým standardem?", "acceptedAnswer": { "@type": "Answer", "text": "Nízký standard, 8 000 Kč/m², znamená rozpočtové obklady, laminát nižší třídy a základní sanitu — typicky byt k pronájmu. Střední standard, 14 000 Kč/m², zahrnuje značkové materiály, kvalitní vinyl nebo laminát a standardní vybavení koupelny a kuchyně, což odpovídá většině rekonstrukcí k vlastnímu bydlení. Vysoký standard, 22 000 Kč/m², počítá s prémiovými materiály, dřevěnou podlahou a vestavěnou technikou." } },
      { "@type": "Question", "name": "Proč se počítá rezerva 18 procent?", "acceptedAnswer": { "@type": "Answer", "text": "Ve starším bytě se po vybourání téměř vždy objeví něco, co nebylo možné dopředu vidět: vlhkost ve zdivu, poddimenzovaná elektroinstalace, zkorodované stoupačky, nerovné podlahy nebo chybějící hydroizolace. Rezerva pokrývá i změny rozhodnutí v průběhu stavby. Bez ní se rekonstrukce v polovině zastaví kvůli nedostatku peněz, což ji prodlouží a nakonec ještě prodraží." } },
      { "@type": "Question", "name": "Co se počítá jako mokrý provoz?", "acceptedAnswer": { "@type": "Answer", "text": "Mokrý provoz je koupelna, samostatné WC nebo kuchyň, tedy prostor s rozvody vody a odpadů. Kalkulačka za každý z nich přidává fixních 80 000 Kč, protože tyto prostory vyžadují hydroizolaci, nové rozvody, obklady a sanitu nebo kuchyňskou linku. Náklad je fixní, nikoli podle plochy, protože instalace sprchy či záchodu stojí v malé i velké místnosti téměř totéž." } },
      { "@type": "Question", "name": "Jak se cena rekonstrukce liší podle regionu?", "acceptedAnswer": { "@type": "Answer", "text": "Ceny prací v Praze, Brně a dalších velkých městech bývají o 15 až 30 procent vyšší než v menších městech a na venkově, hlavně kvůli mzdovým nákladům řemeslníků a převisu poptávky po spolehlivých realizačních firmách. Materiál je naopak cenově podobný všude. Pokud rekonstruujete v Praze, zvolte v kalkulačce o stupeň vyšší standard, než jaký ve skutečnosti plánujete." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Rozpočet rekonstrukce", "item": "https://www.domovniguru.cz/kalkulacky/kalkulacka-rozpoctu-rekonstrukce" }
    ]
  }]
};

export default function KalkulackaRozpoctuRekonstrukcePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Rozpočet rekonstrukce</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kalkulačka rozpočtu rekonstrukce bytu</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu bytu, vyber standard materiálů a počet mokrých provozů k rekonstrukci — kalkulačka ti okamžitě spočítá orientační rozpočet vč. rezervy na nečekané vícenáklady.</p>

        <RozpocetRekonstrukceCalculator />
        <AffiliateCTA merchant="bonami" text="Vybavit domácnost" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Z čeho se skládá rozpočet rekonstrukce bytu</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozpočet rekonstrukce bytu se obvykle skládá ze tří hlavních složek. Základní náklad zahrnuje práce a materiály na celé ploše bytu — bourací a zednické práce, nové podlahy, malby, elektroinstalaci a další úpravy, které se počítají na metr čtvereční podle vybraného standardu. Druhou výraznou položkou jsou mokré provozy, tedy koupelny a kuchyně, kde se kromě obkladů a dlažby řeší i rozvody vody, odpadů a často i sanita a kuchyňská linka — tyto prostory bývají podstatně dražší na metr čtvereční než zbytek bytu, a proto se v praxi často počítají samostatnou fixní částkou na každý provoz. Třetí složkou je rezerva na vícenáklady, kterou by si měl naplánovat každý, kdo se chystá do rekonstrukce.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Proč si vždy nechat rezervu minimálně 15–20 %? Při rekonstrukci staršího bytu se téměř vždy objeví skryté problémy, které nejde odhalit před zahájením prací — vlhkost ve zdech, zastaralé nebo poddimenzované elektrické rozvody, prasklé nebo zarostlé potrubí, nerovné podlahy vyžadující dodatečné vyrovnání, nebo statické problémy u panelových domů. Rezerva pokrývá také změny rozhodnutí v průběhu realizace, kdy si investor dodatečně vybere dražší obklady, jiné dveře nebo přidá další úpravu, která původně nebyla v plánu. Bez rezervy hrozí, že se rekonstrukce zastaví v polovině z důvodu nedostatku financí, což prodlužuje dobu realizace a v důsledku celý projekt prodražuje.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Cena rekonstrukce se výrazně liší podle standardu použitých materiálů. Nízký standard znamená rozpočtové obklady, dlažby a sanitu, jednodušší podlahové krytiny a základní elektroinstalaci — vhodné typicky pro bytu k pronájmu. Střední standard zahrnuje kvalitnější značkové materiály, lepší podlahy (vinyl, laminát vyšší třídy) a standardní vybavení koupelny a kuchyně, což odpovídá většině rekonstrukcí bytů k vlastnímu bydlení. Vysoký standard počítá s prémiovými materiály, designovými prvky, kvalitní dřevěnou podlahou, vestavnou elektronikou a často i úpravami nad rámec běžné rekonstrukce, jako je klimatizace nebo rekuperace. Kromě standardu hraje velkou roli i region — ceny prací v Praze a velkých městech bývají o 15–30 % vyšší než v menších městech a na venkově, hlavně díky vyšším mzdovým nákladům řemeslníků a vyšší poptávce po kvalitních realizačních firmách. Z těchto důvodů je tato kalkulačka pouze orientační pomůckou pro prvotní plánování rozpočtu — pro přesnou cenu je vždy potřeba oslovit konkrétní realizační firmu a nechat si zpracovat individuální nabídku na základě rozsahu prací a stavu bytu.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má tři kroky. Nejprve se plocha bytu vynásobí cenou za metr čtvereční podle zvoleného standardu — nízký standard počítá s 8 000 Kč/m², střední se 14 000 Kč/m² a vysoký s 22 000 Kč/m². Tím vznikne základní náklad na celou plochu. Ve druhém kroku se přidá fixní částka 80 000 Kč za každý mokrý provoz, tedy za každou koupelnu, samostatné WC nebo kuchyň. Součet obou položek je mezisoučet, k němuž se nakonec přičte rezerva ve výši 18 procent mezisoučtu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad odpovídá výchozímu nastavení kalkulačky. Byt má 65 m², standard je střední a rekonstruují se dva mokré provozy. Základní náklad je 65 × 14 000 = 910 000 Kč, mokré provozy 2 × 80 000 = 160 000 Kč, mezisoučet tedy 1 070 000 Kč. Rezerva osmnáct procent dává 192 600 Kč a celkový odhadovaný rozpočet 1 262 600 Kč. Stejný byt v nízkém standardu by vyšel na asi 802 000 Kč, ve vysokém na přibližně 1 877 000 Kč.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Všimněte si, proč jsou mokré provozy počítané fixní částkou a ne podle plochy. Instalace sprchy, záchodu a umyvadla, hydroizolace, nové rozvody a kuchyňská linka stojí v malé i velké místnosti téměř stejně, takže přepočet na metry čtvereční by u malých koupelen náklad výrazně podcenil. Pokud rekonstruujete jen část bytu, zadejte do kalkulačky plochu skutečně dotčených místností, ne celkovou podlahovou plochu bytu — jinak odhad vyjde nereálně vysoko.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Rozpočet napnutý na maximum.</strong> Když se celá dostupná částka rozdělí na materiál a práce, první skrytá závada stavbu zastaví. Rezervu nepovažujte za volné peníze, ale za součást rozpočtu.</li>
            <li><strong>Dodavatel vybraný podle nejnižší ceny.</strong> Nejnižší nabídka bývá nejnižší proto, že v ní něco chybí. Porovnávejte položkové rozpočty a kontrolujte rozsah, ne jen výsledné číslo.</li>
            <li><strong>Zapomenuté povolení od společenství vlastníků.</strong> Zásah do nosných zdí, stoupaček nebo společných rozvodů potřebuje souhlas, u nosných konstrukcí i statické posouzení a ohlášení.</li>
            <li><strong>Vynechané vybavení v rozpočtu.</strong> Kuchyňská linka, spotřebiče, nábytek, svítidla a stínění bývají mimo nabídku stavební firmy a tvoří často desítky procent celkového výdaje.</li>
            <li><strong>Platba předem bez harmonogramu.</strong> Platby rozdělte podle dokončených etap. Záloha nad třicet procent bez odvedené práce je riziko, které se nedá nijak kompenzovat.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Na co v rozpočtu nezapomenout</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Položky, které z odhadu na metr čtvereční obvykle vypadnou, ale v hotovosti se projeví vždy:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Projekt a stavební dozor</strong> 20 000 až 80 000 Kč, u zásahu do nosných konstrukcí navíc statický posudek 8 000 až 20 000 Kč.</li>
            <li><strong>Odvoz a likvidace suti</strong> 4 000 až 15 000 Kč podle počtu kontejnerů, u bytu bez výtahu připočtěte vynesení.</li>
            <li><strong>Nová elektroinstalace s rozvaděčem</strong> 1 500 až 3 000 Kč/m² včetně výchozí revize elektrického zařízení.</li>
            <li><strong>Interiérové dveře se zárubněmi</strong> 6 000 až 20 000 Kč za kus včetně montáže.</li>
            <li><strong>Kuchyňská linka se spotřebiči</strong> 80 000 až 350 000 Kč — nejčastěji podceněná položka celé rekonstrukce.</li>
            <li><strong>Náhradní bydlení a skladování nábytku</strong> po dobu stavby, u několikatýdenní rekonstrukce klidně 30 000 až 80 000 Kč.</li>
            <li><strong>Úklid po stavbě a malování na závěr</strong> 10 000 až 30 000 Kč.</li>
            <li><strong>Rezerva 15 až 20 procent</strong> z celkové částky, kterou kalkulačka počítá jako 18 procent mezisoučtu.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí rekonstrukce bytu 65 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ve středním standardu 14 000 Kč/m² vychází základní náklad na 910 000 Kč. Dva mokré provozy, tedy koupelna a kuchyně, přidávají po 80 000 Kč, celkem 160 000 Kč. Mezisoučet je 1 070 000 Kč a po přidání osmnáctiprocentní rezervy vychází celkový odhad přibližně 1 262 600 Kč. V nízkém standardu by stejný byt stál kolem 802 000 Kč, ve vysokém kolem 1 877 000 Kč.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaký je rozdíl mezi nízkým, středním a vysokým standardem?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nízký standard, 8 000 Kč/m², znamená rozpočtové obklady, laminát nižší třídy a základní sanitu — typicky byt k pronájmu. Střední standard, 14 000 Kč/m², zahrnuje značkové materiály, kvalitní vinyl nebo laminát a standardní vybavení koupelny a kuchyně, což odpovídá většině rekonstrukcí k vlastnímu bydlení. Vysoký standard, 22 000 Kč/m², počítá s prémiovými materiály, dřevěnou podlahou a vestavěnou technikou.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč se počítá rezerva 18 procent?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ve starším bytě se po vybourání téměř vždy objeví něco, co nebylo možné dopředu vidět: vlhkost ve zdivu, poddimenzovaná elektroinstalace, zkorodované stoupačky, nerovné podlahy nebo chybějící hydroizolace. Rezerva pokrývá i změny rozhodnutí v průběhu stavby. Bez ní se rekonstrukce v polovině zastaví kvůli nedostatku peněz, což ji prodlouží a nakonec ještě prodraží.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Co se počítá jako mokrý provoz?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Mokrý provoz je koupelna, samostatné WC nebo kuchyň, tedy prostor s rozvody vody a odpadů. Kalkulačka za každý z nich přidává fixních 80 000 Kč, protože tyto prostory vyžadují hydroizolaci, nové rozvody, obklady a sanitu nebo kuchyňskou linku. Náklad je fixní, nikoli podle plochy, protože instalace sprchy či záchodu stojí v malé i velké místnosti téměř totéž.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak se cena rekonstrukce liší podle regionu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ceny prací v Praze, Brně a dalších velkých městech bývají o 15 až 30 procent vyšší než v menších městech a na venkově, hlavně kvůli mzdovým nákladům řemeslníků a převisu poptávky po spolehlivých realizačních firmách. Materiál je naopak cenově podobný všude. Pokud rekonstruujete v Praze, zvolte v kalkulačce o stupeň vyšší standard, než jaký ve skutečnosti plánujete.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Plánování rekonstrukce bytu", href: "/blog/planovani-rekonstrukce-bytu", icon: "📋" },
              { title: "Jak odhadnout cenu rekonstrukce", href: "/blog/odhadnout-cenu-rekonstrukce", icon: "💰" },
              { title: "Kalkulačka ceny rekonstrukce koupelny", href: "/kalkulacky/cena-rekonstrukce-koupelny-odhad", icon: "🛁" },
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
