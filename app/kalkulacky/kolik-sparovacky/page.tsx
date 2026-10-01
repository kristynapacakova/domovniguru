import type { Metadata } from "next";
import Link from "next/link";
import SparovackaCalculator from "@/app/components/SparovackaCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka spárovačky 2026 – kolik kg spárovačky potřebuji?",
  description: "Spočítej přesnou spotřebu spárovačky podle plochy dlažby, rozměrů dlaždic a šíře spár. Výsledek v kg a pytlích okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-sparovacky" },
  openGraph: { title: "Kalkulačka spárovačky 2026", description: "Kolik kg spárovačky na dlažbu? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-sparovacky", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20sp%C3%A1rov%C3%A1%C4%8Dky%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka spárovačky 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik kg spárovačky potřebuji na 1 m² dlažby?", "acceptedAnswer": { "@type": "Answer", "text": "U dlažby 30×30 cm se spárou 3 mm a hloubkou 8 mm je to přibližně 0,26 kg/m². U formátu 60×60 cm se stejnou spárou vystačí asi 0,13 kg/m², zatímco u mozaiky 5×5 cm s hloubkou spáry 3 mm vyroste spotřeba na 0,6 kg/m². Spotřeba spárovačky roste s menším formátem dlaždice a se šířkou i hloubkou spáry." } },
      { "@type": "Question", "name": "Jak dlouho po lepení dlažby se může spárovat?", "acceptedAnswer": { "@type": "Answer", "text": "U běžného cementového lepidla je to minimálně 24 hodin, u flexibilního lepidla a silnějších vrstev 48 hodin. U velkoformátových desek lepených dvojitě nebo u pokládky na nesavý podklad je rozumné počkat i 72 hodin. Spárování do nevyzrálého lepidla způsobuje barevné flekatění a praskání spár." } },
      { "@type": "Question", "name": "Cementová nebo epoxidová spárovačka do sprchy?", "acceptedAnswer": { "@type": "Answer", "text": "Do sprchového koutu a na plochy v trvalém kontaktu s vodou patří epoxidová spárovačka — je nenasákavá, odolná čisticím prostředkům a neposkytuje živnou půdu plísni. Cementová spárovačka s hydrofobní přísadou je přijatelná na zdi koupelny mimo přímý ostřik. Kouty, přechod podlahy ke stěně a okolí vany se nikdy nespárují natvrdo, ale pružným sanitárním silikonem." } },
      { "@type": "Question", "name": "Jak hluboko má spárovačka zasahovat?", "acceptedAnswer": { "@type": "Answer", "text": "Spára má být vyplněna do přibližně dvou třetin tloušťky dlaždice. U keramiky 10 mm tedy zadejte hloubku 7 mm, u mozaiky s tloušťkou 4 mm počítejte s 3 mm. Hlubší vyplnění spotřebu zbytečně zvyšuje, mělčí spára se naopak časem vydrolí, protože hmota nemá dost materiálu, kterým by držela." } },
      { "@type": "Question", "name": "Proč je spárovačka po vyschnutí flekatá a nestejně barevná?", "acceptedAnswer": { "@type": "Answer", "text": "Nejčastější příčinou je různé množství záměsové vody v jednotlivých dávkách a příliš mokré vymývání povrchu, které vyplaví z povrchu spáry pigment a pojivo. Roli hraje i nestejná savost podkladu pod spárou a vlhkost z nedostatečně vyzrálého lepidla. Pomáhá odměřovat vodu odměrkou, zpracovat celou plochu najednou a vymývat jen dobře vyždímanou houbou." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik spárovačky", "item": "https://www.domovniguru.cz/kalkulacky/kolik-sparovacky" }
    ]
  }]
};

export default function KolikSparovackyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik spárovačky</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik spárovačky potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu dlažby, rozměry dlaždic a šíři spár — kalkulačka spočítá přesné kilogramy i počet pytlů.</p>

        <SparovackaCalculator />
        <AffiliateCTA merchant="podlahy" text="Nakoupit spárovačku" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně vybrat a aplikovat spárovačku</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spárovačka není jen estetický detail — chrání konstrukční spáry před vodou, nečistotami a mikrobiálním růstem. Špatně zvolená nebo špatně nanesená spárovačka může způsobit výrazně vyšší náklady na opravu, než je cena samotného produktu. Cementové spárovačky (nejčastější volba pro interiéry) jsou dostupné v desítkách barev, ale pro mokré prostory — sprchové kouty, soklíky, plochy v přímém kontaktu s vodou — vždy volte epoxidovou spárovačku nebo cementovou s přísadou hydrofobizátoru.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Před spárováním musí lepidlo úplně vyschnout — zpravidla 24 hodin u standardního, 48 hodin u flexibilního lepidla. Pokud spárujete příliš brzy, vlhkost z lepidla degraduje strukturu spárovačky a způsobí praskání. Spáry před aplikací vyčistěte od zbytků lepidla a prachu (ideálně průmyslovým vysavačem a kartáčem), jinak spárovačka nepřilne ke dnu spáry a časem vykrouží.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Po nanesení a vytvarování spáry (gumovým hladítkem diagonálně přes dlaždice) nechte spárovačku lehce zatuhnout — typicky 20–40 minut při pokojové teplotě — a poté odstraňte přebytky vlhkým hadrem nebo houbou. Nečekejte příliš dlouho: zatvrdlá spárovačka na povrchu dlaždic se odstraňuje obtížně a kyselými čisticími prostředky, které mohou poškodit povrch glazury.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se spotřeba počítá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spárovačka se nepočítá podle plochy dlažby, ale podle objemu spár, které je potřeba vyplnit. Výpočet má tři kroky. Nejprve se zjistí celková délka spár na jednom metru čtverečním — ta vyjde ze vztahu (A + B) ÷ (A × B), kde A a B jsou rozměry dlaždice. Dále se spočítá průřez spáry jako šíře × hloubka. Součin délky a průřezu dává objem v litrech a ten se vynásobí objemovou hmotností hmoty, u cementových spárovaček přibližně 1,6 kg na litr.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétně: dlažba 30×30 cm má na metru čtverečním 6,7 běžného metru spár. Při šíři 3 mm a hloubce 8 mm je průřez 24 mm², objem tedy 0,16 litru a spotřeba 0,26 kg/m². Na 10 m² koupelny to znamená 2,6 kg, s desetiprocentní rezervou necelé 3 kg — jediný pytel po 5 kg. Právě proto se u spárovačky kupuje v malých baleních a zbytečně velký pytel skončí nevyužitý.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Z výpočtu plyne jeden důležitý závěr: rozhodující je formát dlaždice, ne velikost místnosti. Čím menší dlaždice, tím více spár na metr čtvereční a tím vyšší spotřeba. Mozaika 5×5 cm má na metru čtverečním 40 metrů spár, tedy šestkrát víc než formát 30×30 cm. Naopak u velkoformátových desek 60×60 cm spadne spotřeba na polovinu. Stejně silně působí hloubka: zadáte-li místo 8 mm celých 12 mm, spotřeba se zvedne o polovinu. Proto se hloubka odvozuje od tloušťky dlaždice jako její dvě třetiny, ne od maximálního možného vyplnění.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spárování trvá zlomek času pokládky, ale rozhoduje o tom, jak bude dlažba vypadat a jak dlouho vydrží. Chyby se přitom opakují stále stejné:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Nestejné dávkování vody.</strong> Každá další namíchaná dávka s jiným množstvím vody vyschne do jiného odstínu. Vodu odměřujte odměrkou, ne „od oka", a dodržte zrání směsi 3 až 5 minut s krátkým domícháním.</li>
            <li><strong>Příliš mokré vymývání.</strong> Houba nasáklá vodou vyplaví z povrchu spáry pigment a cement. Vzniknou bílé mapy a prášivý povrch. Houbu vždy dobře vyždímejte a vodu v kbelíku často měňte.</li>
            <li><strong>Nevyčištěné spáry.</strong> Zbytky lepidla ve spáře zmenší prostor pro hmotu, takže spára bude jen tenkou kosmetickou vrstvou, která se vydrolí. Před spárováním spáry vyškrábněte a vysajte.</li>
            <li><strong>Natvrdo spárované kouty.</strong> Rohy, přechod podlahy ke stěně, okolí vany a dilatace musí být pružné — tedy sanitární silikon, nikdy cementová hmota. Tvrdá spára v koutě vždy popraská.</li>
            <li><strong>Neimpregnovaný přírodní kámen.</strong> Mramor, travertin a některé druhy betonové dlažby savostí nasají pigment ze spárovačky a zůstanou trvale zabarvené. Před spárováním se povrch impregnuje.</li>
            <li><strong>Pozdní odstranění zbytků.</strong> Zaschlý cementový film se už odstraňuje jen kyselým čističem, který může naleptat glazuru i čerstvou spáru. Povrch přetřete, dokud je film ještě matný a poddajný.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spárovačka sama je nejmenší nákladová položka. Bez správného vybavení ale práci nelze odvést čistě:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Gumové spárovací hladítko</strong> na vtlačení hmoty diagonálně přes spáry, u epoxidu tvrdší pryžová stěrka.</li>
            <li><strong>Vymývací kbelík se sítem a válečky</strong> a dvě houby — jedna hrubá na první stažení, jedna hladká na dokončení.</li>
            <li><strong>Míchadlo s nízkými otáčkami</strong> a odměrka na vodu; u malé dávky stačí důkladné ruční promíchání.</li>
            <li><strong>Sanitární silikon</strong> v odstínu spárovačky, pistole, hladítko na silikon a maskovací páska na čistou linii.</li>
            <li><strong>Impregnace</strong> — na přírodní kámen před spárováním, na cementové spáry v kuchyni a koupelně po vyzrání.</li>
            <li><strong>Mikrovláknová utěrka nebo filc</strong> na finální dočištění zbytkového cementového filmu.</li>
            <li><strong>Rukavice a ochrana očí.</strong> Cementová spárovačka je silně alkalická, epoxidová obsahuje dráždivé pryskyřice.</li>
            <li><strong>Čistič cementových zbytků</strong> pro případ, že se povrch nedočistí včas — vždy nejprve vyzkoušejte na odřezku.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik kg spárovačky potřebuji na 1 m² dlažby?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U dlažby 30×30 cm se spárou 3 mm a hloubkou 8 mm je to přibližně 0,26 kg/m². U formátu 60×60 cm se stejnou spárou vystačí asi 0,13 kg/m², zatímco u mozaiky 5×5 cm s hloubkou spáry 3 mm vyroste spotřeba na 0,6 kg/m². Spotřeba spárovačky roste s menším formátem dlaždice a se šířkou i hloubkou spáry.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak dlouho po lepení dlažby se může spárovat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U běžného cementového lepidla je to minimálně 24 hodin, u flexibilního lepidla a silnějších vrstev 48 hodin. U velkoformátových desek lepených dvojitě nebo u pokládky na nesavý podklad je rozumné počkat i 72 hodin. Spárování do nevyzrálého lepidla způsobuje barevné flekatění a praskání spár.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Cementová nebo epoxidová spárovačka do sprchy?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Do sprchového koutu a na plochy v trvalém kontaktu s vodou patří epoxidová spárovačka — je nenasákavá, odolná čisticím prostředkům a neposkytuje živnou půdu plísni. Cementová spárovačka s hydrofobní přísadou je přijatelná na zdi koupelny mimo přímý ostřik. Kouty, přechod podlahy ke stěně a okolí vany se nikdy nespárují natvrdo, ale pružným sanitárním silikonem.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak hluboko má spárovačka zasahovat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Spára má být vyplněna do přibližně dvou třetin tloušťky dlaždice. U keramiky 10 mm tedy zadejte hloubku 7 mm, u mozaiky s tloušťkou 4 mm počítejte s 3 mm. Hlubší vyplnění spotřebu zbytečně zvyšuje, mělčí spára se naopak časem vydrolí, protože hmota nemá dost materiálu, kterým by držela.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč je spárovačka po vyschnutí flekatá a nestejně barevná?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nejčastější příčinou je různé množství záměsové vody v jednotlivých dávkách a příliš mokré vymývání povrchu, které vyplaví z povrchu spáry pigment a pojivo. Roli hraje i nestejná savost podkladu pod spárou a vlhkost z nedostatečně vyzrálého lepidla. Pomáhá odměřovat vodu odměrkou, zpracovat celou plochu najednou a vymývat jen dobře vyždímanou houbou.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kolik dlažby potřebuji?", href: "/kalkulacky/kolik-dlazby", icon: "🧱" },
              { title: "Kolik lepidla na dlažbu?", href: "/kalkulacky/kolik-lepidla-na-dlazbu", icon: "🏗️" },
              { title: "Kladení dlažby v koupelně", href: "/blog/kladeni-dlazby-v-koupelne", icon: "🚿" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display: "block", background: "#f8f4f0", border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 16px", textDecoration: "none" }}>
                <div style={{ fontSize: "18px", marginBottom: "6px" }}>{r.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#2a2a28", lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ fontSize: "12px", color: "#8a8a80", marginTop: "6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
