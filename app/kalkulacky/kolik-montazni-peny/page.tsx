import type { Metadata } from "next";
import Link from "next/link";
import PenaCalculator from "@/app/components/PenaCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka montážní pěny 2026 – kolik plechovek PU pěny?",
  description: "Kolik plechovek montážní pěny na okna a dveře? Zadej počet otvorů – výpočet okamžitě. Zdarma, bez registrace.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-montazni-peny" },
  openGraph: { title: "Kalkulačka montážní pěny 2026 – kolik plechovek PU pěny?", description: "Kolik plechovek montážní pěny na okna a dveře? Zadej počet otvorů – výpočet okamžitě. Zdarma, bez registrace.", url: "https://www.domovniguru.cz/kalkulacky/kolik-montazni-peny", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20mont%C3%A1%C5%BEn%C3%AD%20p%C4%9Bny%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka montážní pěny 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Na kolik metrů spáry vystačí jedna plechovka pěny?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka počítá s 10 běžnými metry spáry na jednu plechovku 750 ml, což odpovídá spáře o šířce 10 až 15 mm. U širší spáry kolem 25 mm klesne výtěžnost na 5 až 6 metrů, u úzké spáry 8 mm naopak stoupne na 12 až 14 metrů. Pistolová pěna je výtěžnější než trubičková, protože z pistole se dávkuje přesněji a méně materiálu zůstane v hadici." } },
      { "@type": "Question", "name": "Jak zjistím obvod okna, který mám zadat?", "acceptedAnswer": { "@type": "Answer", "text": "Obvod je dvojnásobek součtu šířky a výšky stavebního otvoru. Okno 120 × 90 cm má obvod 2 × (120 + 90) = 420 cm, dveře 90 × 200 cm pak 2 × (90 + 200) = 580 cm. U dveří se spodní strana často nepění, takže lze obvod zkrátit o šířku; u balkonových dveří s prahem se naopak pění celý obvod." } },
      { "@type": "Question", "name": "Jaký je rozdíl mezi nízkoexpanzní a běžnou montážní pěnou?", "acceptedAnswer": { "@type": "Answer", "text": "Běžná montážní pěna zvětší objem třikrát až pětkrát a vyvine ve spáře tlak, který dokáže prohnout rám okna směrem dovnitř. Nízkoexpanzní okenní pěna expanduje jen jedenapůlkrát až dvakrát, takže rám nedeformuje a je pro osazování oken a dveří jediná správná volba. Rozdíl v ceně je 50 až 150 Kč na plechovku a nevyplatí se na něm šetřit." } },
      { "@type": "Question", "name": "Proč se spára před pěnou navlhčuje?", "acceptedAnswer": { "@type": "Answer", "text": "Jednosložková PU pěna tvrdne reakcí se vzdušnou vlhkostí. Na suchém a nasákavém podkladu, typicky na pórobetonu nebo na čerstvé omítce, se vlhkost z pěny okamžitě vsákne a uvnitř zůstane nevytvrzené, křehké jádro s dutinami. Rozprašovač s vodou na obě strany spáry před aplikací a lehké přemlžení povrchu pěny po nanesení tento problém spolehlivě odstraní." } },
      { "@type": "Question", "name": "Stačí u okna jen pěna, nebo je nutná i páska?", "acceptedAnswer": { "@type": "Answer", "text": "Samotná pěna není dostatečné těsnění. Norma ČSN 74 6077 předpokládá třívrstvé provedení spáry: zevnitř parotěsnou pásku, ve středu pěnu jako tepelnou izolaci a zvenku paropropustnou pásku nebo komprimační těsnicí pásku. Nechráněná pěna degraduje ultrafialovým zářením a vodou a do spáry začne vzlínat vlhkost, která vede ke kondenzaci a plísni na ostění." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik montážní pěny", "item": "https://www.domovniguru.cz/kalkulacky/kolik-montazni-peny" }
    ]
  }]
};

export default function KolikMontazniPenyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik montážní pěny</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik montážní pěny potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej počet oken a dveří s jejich obvodem — kalkulačka ti okamžitě spočítá celkovou délku spár a počet plechovek PU pěny.</p>

        <PenaCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit montážní pěnu" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně aplikovat montážní pěnu a čeho se vyvarovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Montážní PU (polyuretanová) pěna je nejpoužívanější tesnicí a upevňovací materiál pro okna, dveře a prostupy zdí. Expanduje na 2–3násobek svého objemu a po vytvrzení (4–24 hodin) tvoří tuhý, tepelně i zvukově izolující výplň. Dostupná je v jednodílné verzi (stačí vlhkost vzduchu pro vytvrzení) a dvoudílné (profesionální, rovnoměrnější pěna). Pro okna a dveře se nejčastěji používá tzv. nízko-expandní pěna, která nevyvíjí příliš velký tlak na rámy a nezpůsobuje jejich deformaci — standardní montážní pěna se expandí na 3–5násobek, nízko-expandní jen na 1,5–2násobek.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Klíčem k správné aplikaci je zvlhčení povrchu před nanesením. Pěna vytvrzuje chemickou reakcí s vlhkostí — suchý, nezvlhčený povrch pěnu nezváže a vznikají dutiny. Rozprašovačem lehce navlhčete obě strany spáry i samotný výlitek. Aplikujte v pruzích, nikoli v jedné vrstvě — při silnějším nanášení pěna expanduje nerovnoměrně a může deformovat rámy. Nechte 15–30 minut sušit a pak aplikujte druhou vrstvu, pokud je to nutné. Finálně přikrytá parotěsnou páskou pěna vydrží dekády.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Přebytek pěny po vytvrzení (24 hodin) odřízněte ostrým nožem nebo speciální pilou. Nevytvrzená pěna je extrémně obtížně odstranitelná — acetonové přípravky jen částečně pomáhají. Na vytvrzenou pěnu přilepte interiérovou parozábrannou pásku (brání difúzi par do spáry) a exteriérové paropropustnou nebo akrylátový tmel. Kombinace pěna + pásky je dnes standardem pro energeticky úsporné montáže oken a je předepsána normou ČSN 74 6077.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Montážní pěna se nepočítá podle plochy okna, ale podle délky spáry, kterou je nutné vyplnit. Kalkulačka proto vynásobí počet oken obvodem jednoho okna, počet dveří obvodem jedněch dveří, oba výsledky sečte a převede z centimetrů na metry. Celkovou délku spár pak vydělí výtěžností jedné plechovky, se kterou se počítá 10 běžných metrů na balení 750 ml, a zaokrouhlí nahoru na celou plechovku. Obvod se zadává v centimetrech a spočítáte jej jako dvojnásobek součtu šířky a výšky stavebního otvoru.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Příklad pro výměnu oken v menším bytě: tři okna 120 × 90 cm mají obvod 420 cm, dvoje dveře 90 × 200 cm obvod 580 cm. Celkem to je 3 × 420 + 2 × 580 = 2 420 cm, tedy 24,2 metru spár. Po vydělení deseti metry na plechovku vyjde 2,42, zaokrouhleno nahoru tři plechovky. Výchozí hodnoty v kalkulačce, 280 a 350 cm, odpovídají menším oknům a vnitřním dveřím — vždy je přepište podle vlastního změřeného obvodu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výtěžnost deseti metrů na plechovku platí pro spáru o šířce 10 až 15 mm a hloubce odpovídající profilu rámu. U starého zdiva se spárou 25 až 30 mm klesne výtěžnost na pět až šest metrů, takže je rozumné výsledek zdvojnásobit. Naopak u pěny s nízkou expanzí a přesně vyklínovaného rámu se dostanete i nad dvanáct metrů. Jednu plechovku navíc se vyplatí koupit vždy: pěna ve rozdělané plechovce vydrží v pistoli jen několik týdnů a dokupovat ji kvůli poslednímu metru spáry je zbytečná cesta.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Chyby při pěnování se projeví až po první zimě, kdy se na ostění objeví kondenzát a plíseň nebo okno začne drhnout. Nejčastěji za tím stojí následující:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Pěna jako nosný prvek.</strong> Rám musí držet mechanicky — turbošrouby nebo rámovými hmoždinkami přibližně každých 70 cm — a stát na nosných podložkách. Pěna je tepelná izolace, nikoli upevnění.</li>
            <li><strong>Vyplnění spáry najednou.</strong> Při jednom silném nánosu pěna expanduje nerovnoměrně, vytvoří dutiny a tlakem prohne rám. Pění se ve dvou vrstvách po jednom až dvou centimetrech s pauzou 15 minut.</li>
            <li><strong>Běžná pěna místo nízkoexpanzní.</strong> Trojnásobná až pětinásobná expanze dokáže prohnout rám o několik milimetrů natolik, že okno přestane těsnit a křídlo se zavírá silou.</li>
            <li><strong>Pěnování do suché spáry.</strong> Bez navlhčení zůstane uvnitř nevytvrzené jádro. Studený povrch pod 5 °C problém zhoršuje — zimní pěna funguje do −10 °C, letní ne.</li>
            <li><strong>Nezakrytá pěna.</strong> Ultrafialové záření pěnu rozpadá na prach během jedné až dvou sezón. Zevnitř patří parotěsná páska, zvenku paropropustná páska nebo komprimační těsnicí pásek a následně omítka či lišta.</li>
            <li><strong>Odříznutí přebytku příliš brzy.</strong> Pěna má být vytvrzená celým průřezem, tedy po 12 až 24 hodinách. Nevytvrzená pěna se při řezu rozmaže a lepkavý zbytek z rámu nebo ze skla nesundáte bez poškození povrchu.</li>
            <li><strong>Plechovka držená vzhůru nohama.</strong> Pistolová i trubičková pěna se aplikuje nádobou dnem vzhůru. V opačné poloze z plechovky vyletí hnací plyn a dvě třetiny materiálu zůstanou uvnitř.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pěna je z celé montáže okna nejmenší nákladová položka. Těsnicí pásky a kotvení stojí obvykle víc než pěna sama:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Nízkoexpanzní okenní pěna 750 ml</strong> za 200 až 400 Kč v pistolovém provedení, trubičková varianta 120 až 220 Kč.</li>
            <li><strong>Aplikační pistole</strong> 300 až 1 200 Kč. Kovová pistole s teflonovým vnitřkem se vyplatí už od tří plechovek, protože dávkuje přesněji a dá se čistit.</li>
            <li><strong>Čistič PU pěny</strong> 100 až 200 Kč — na proplach pistole po každém použití a na okamžité setření nevytvrzené pěny. Na vytvrzenou pěnu už nezabere.</li>
            <li><strong>Parotěsná páska na interiér</strong> 15 až 30 Kč/bm a paropropustná páska na exteriér 20 až 40 Kč/bm; u 24 metrů spár jde o 1 000 až 1 700 Kč.</li>
            <li><strong>Komprimační těsnicí páska</strong> jako alternativa vnějšího těsnění, 40 až 90 Kč/bm podle šířky spáry a požadované třídy.</li>
            <li><strong>Turbošrouby nebo rámové hmoždinky</strong> 8 až 20 Kč/ks, na jedno okno 8 až 12 kusů, plus plastové nosné a distanční podložky za 100 až 250 Kč za sadu.</li>
            <li><strong>Rozprašovač na vodu</strong> do 100 Kč, odlamovací nůž s dlouhým ostřím, pokrývací fólie a maskovací páska na ochranu rámu a parapetu.</li>
            <li><strong>Nitrilové rukavice a brýle.</strong> Nevytvrzená pěna z kůže prakticky nejde odstranit a izocyanáty v ní jsou dráždivé, pracujte proto v dobře větrané místnosti.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Na kolik metrů spáry vystačí jedna plechovka pěny?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka počítá s 10 běžnými metry spáry na jednu plechovku 750 ml, což odpovídá spáře o šířce 10 až 15 mm. U širší spáry kolem 25 mm klesne výtěžnost na 5 až 6 metrů, u úzké spáry 8 mm naopak stoupne na 12 až 14 metrů. Pistolová pěna je výtěžnější než trubičková, protože z pistole se dávkuje přesněji a méně materiálu zůstane v hadici.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak zjistím obvod okna, který mám zadat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Obvod je dvojnásobek součtu šířky a výšky stavebního otvoru. Okno 120 × 90 cm má obvod 2 × (120 + 90) = 420 cm, dveře 90 × 200 cm pak 2 × (90 + 200) = 580 cm. U dveří se spodní strana často nepění, takže lze obvod zkrátit o šířku; u balkonových dveří s prahem se naopak pění celý obvod.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaký je rozdíl mezi nízkoexpanzní a běžnou montážní pěnou?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Běžná montážní pěna zvětší objem třikrát až pětkrát a vyvine ve spáře tlak, který dokáže prohnout rám okna směrem dovnitř. Nízkoexpanzní okenní pěna expanduje jen jedenapůlkrát až dvakrát, takže rám nedeformuje a je pro osazování oken a dveří jediná správná volba. Rozdíl v ceně je 50 až 150 Kč na plechovku a nevyplatí se na něm šetřit.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč se spára před pěnou navlhčuje?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Jednosložková PU pěna tvrdne reakcí se vzdušnou vlhkostí. Na suchém a nasákavém podkladu, typicky na pórobetonu nebo na čerstvé omítce, se vlhkost z pěny okamžitě vsákne a uvnitř zůstane nevytvrzené, křehké jádro s dutinami. Rozprašovač s vodou na obě strany spáry před aplikací a lehké přemlžení povrchu pěny po nanesení tento problém spolehlivě odstraní.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Stačí u okna jen pěna, nebo je nutná i páska?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Samotná pěna není dostatečné těsnění. Norma ČSN 74 6077 předpokládá třívrstvé provedení spáry: zevnitř parotěsnou pásku, ve středu pěnu jako tepelnou izolaci a zvenku paropropustnou pásku nebo komprimační těsnicí pásku. Nechráněná pěna degraduje ultrafialovým zářením a vodou a do spáry začne vzlínat vlhkost, která vede ke kondenzaci a plísni na ostění.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak utěsnit okna na zimu", href: "/blog/jak-utesnit-okna-na-zimu", icon: "🪟" },
              { title: "Jak vyměnit staré dveře", href: "/blog/vymenit-stare-dvere", icon: "🚪" },
              { title: "Jak zateplit byt bez rekonstrukce", href: "/blog/zateplit-byt-bez-rekonstrukce", icon: "🏠" },
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
