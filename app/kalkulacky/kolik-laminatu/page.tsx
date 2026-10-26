// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-laminatu/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import LaminatCalculator from "@/app/components/LaminatCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka laminátu – kolik balení podlahy",
  description: "Spočítej počet balení laminátu nebo vinylové podlahy s rezervou na prořezy. Zadej rozměry místnosti a m² v balení – výsledek ihned.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-laminatu" },
  openGraph: { title: "Kalkulačka laminátu 2026", description: "Balení laminátu s rezervou na prořezy. Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-laminatu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20lamin%C3%A1tu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka laminátu 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik balení laminátu potřebuji na 20 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Na místnost 5 × 4 metry, tedy 20 m², připadá s desetiprocentní rezervou 22 m² materiálu. Při balení o obsahu 2,2 m² to znamená přesně 10 balení. Pokud má vybraný dekor v balení jen 1,97 m², potřebujete 12 balení, protože výsledek se vždy zaokrouhluje nahoru na celá balení — obsah balení je proto nutné vzít z etikety, nikdy neodhadovat." } },
      { "@type": "Question", "name": "Proč se u laminátu počítá desetiprocentní rezerva?", "acceptedAnswer": { "@type": "Answer", "text": "Prořezy u stěn, u zárubní a kolem trubek tvoří u běžné místnosti 8 až 12 procent materiálu, protože poslední řada i poslední prkno v řadě se vždy zkracují a odřezek se často nedá použít. U diagonální pokládky nebo u vzoru rybina stoupá odpad na 15 až 20 procent. Navíc je rozumné nechat si jedno až dvě prkna v rezervě — stejná šarže nemusí být za rok k dispozici." } },
      { "@type": "Question", "name": "Musí laminát před pokládkou aklimatizovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, uzavřená balení musí ležet v místnosti, kde se bude pokládat, nejméně 48 hodin. Laminát i vinyl reagují na teplotu a vlhkost a prkno přinesené z chladné garáže ještě dny po pokládce mění rozměr, což vede k vyboulení nebo k rozevření spojů. Doporučené podmínky jsou 15 až 25 °C a relativní vlhkost 45 až 65 procent." } },
      { "@type": "Question", "name": "Jak velká musí být dilatační mezera u stěn?", "acceptedAnswer": { "@type": "Answer", "text": "Standardně 8 až 12 milimetrů po celém obvodu, včetně zárubní, trubek a prahů — mezeru zakryje soklová lišta, která se kotví do stěny, nikdy do podlahy. U plochy delší než 8 metrů v jednom směru nebo při průchodu dveřmi se vkládá dilatační profil. Bez dilatace se plovoucí podlaha při změně vlhkosti vzepře uprostřed místnosti a náprava znamená celou pokládku zopakovat." } },
      { "@type": "Question", "name": "Dá se laminát položit do koupelny?", "acceptedAnswer": { "@type": "Answer", "text": "Běžný laminát s HDF jádrem do koupelny nepatří — jádro ve spojích nasákne vodu a nevratně nabobtná. Vhodnou alternativou je vinylová podlaha SPC nebo lepený vinyl, které jsou vodotěsné v celém průřezu, případně klasická dlažba. Pokud se laminát do koupelny přesto pokládá, musí mít výslovně uvedenou vodotěsnost spojů a utěsněný obvod." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik laminátu", "item": "https://www.domovniguru.cz/kalkulacky/kolik-laminatu" }
    ]
  }]
};

export default function KolikLaminatuPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik laminátu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik laminátu potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry místnosti a m² v balení — kalkulačka přidá rezervu na prořezy a dilataci.</p>

        <LaminatCalculator />
        <AffiliateCTA merchant="podlahy" text="Nakoupit laminátovou podlahu" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>10% rezerva a aklimatizace – proč jsou klíčové</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Laminátová nebo vinylová podlaha se při pokládce vždy zkracuje u stěn a dveří — prořezy tvoří typicky 8–12 % materiálu. Pokud pokládáš laminát diagonálně (na šikmo), odpad může být 15–20 %. Rezerva 10 % není zbytečnost — je to standard doporučovaný všemi výrobci a instalatéry. Navíc je vhodné ponechat si 1–2 prkna pro případné budoucí opravy poškozených prken; náhradní prkna ze stejné šarže nemusí být po roce dostupná.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Aklimatizace je nezbytný krok který mnoho kutilů přeskočí s fatálními následky. Laminát je hygroskopický — reaguje na vlhkost vzduchu a teplotu. Prkno uskladněné ve studené garáži a položené do teplé místnosti se bude rozměrově měnit ještě dny po pokládce, což způsobuje vyboulení nebo mezery ve spojích. Před pokládkou nechej uzavřená balení ležet v místnosti 48 hodin. Ideální podmínky: teplota 15–25 °C, vlhkost 45–65 %.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Dilatační mezera u stěn (obvykle 8–12 mm) není volitelná — je fyzicky nutná pro teplotní roztažnost. Zakryje ji soklová lišta, takže vizuálně nevadí. Bez dilatace dojde při změnách teploty nebo vlhkosti k vyboulení podlahy uprostřed místnosti — a náprava znamená demontáž a novou pokládku. Používej vždy plastové klínky pro udržení konzistentní mezery po celém obvodu místnosti.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má tři kroky. Délka krát šířka místnosti dává čistou plochu v m². Ta se vynásobí koeficientem rezervy, tedy při deseti procentech hodnotou 1,1. Výsledná plocha s rezervou se vydělí počtem metrů čtverečních v jednom balení a zaokrouhlí nahoru na celá balení — žádný obchod vám neprodá dvě třetiny balíku.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            S výchozími hodnotami: místnost 5 × 4 m má 20 m², s desetiprocentní rezervou 22 m². Při balení o 2,2 m² to je přesně 10 balení. Právě tady se ukazuje, proč je obsah balení nejdůležitější vstup celého výpočtu: stejná místnost při balení 1,974 m² (osm prken 1 285 × 192 mm) vyžaduje 11,14 balení, tedy 12 balení a 23,7 m² materiálu. Obsah balení se u různých dekorů stejné řady liší a bývá mezi 1,7 a 2,6 m² — vždy ho opište z etikety.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě poznámky k přesnosti. Kalkulačka počítá plochu, ne jednotlivá prkna, takže nezohlední, že v úzké místnosti může poslední podélná řada vyžadovat rozříznutí každého prkna a zbytek je nepoužitelný — v takovém případě zvedněte rezervu na 15 procent. Naopak zaokrouhlení na celá balení často přidá další procenta materiálu nad zadanou rezervu, což je vítané. Pokud pokládáte ve více místnostech, spočítejte každou zvlášť (každá má vlastní prořezy), ale nakupte vše najednou z jedné šarže.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Deset procent rezervy u diagonální pokládky.</strong> Kladení na koso nebo do rybiny spotřebuje 15 až 20 procent navíc. Na konci pak chybí poslední dvě řady.</li>
            <li><strong>Obsah balení odhadem.</strong> Dvě desetiny metru rozdílu v balení udělají u třiceti metrů podlahy rozdíl dvou balení. Číslo je vždy na etiketě.</li>
            <li><strong>Podlaha bez podložky nebo parozábrany.</strong> Podložka vyrovnává mikronerovnosti a tlumí kroky; na betonovém podkladu je navíc nutná PE fólie proti zbytkové vlhkosti, i když beton vypadá suchý.</li>
            <li><strong>Vynechaná nebo zanesená dilatace.</strong> Prkno dotlačené ke stěně, k zárubni nebo k trubce vytvoří pevný bod, od kterého se podlaha vzepře. Mezera musí zůstat po celém obvodu.</li>
            <li><strong>Pokládka bez aklimatizace.</strong> Osmačtyřicet hodin v uzavřených baleních v cílové místnosti je minimum, jinak se podlaha hýbe ještě týdny po dokončení.</li>
            <li><strong>Krátké prkno na konci řady.</strong> Poslední kus v řadě by neměl být kratší než 30 cm, jinak spoj nedrží. Řady se proto přesazují o třetinu až polovinu délky prkna.</li>
            <li><strong>Nekontrolovaná rovinnost podkladu.</strong> Tolerance je přibližně 2 mm na dvoumetrové lati. Větší nerovnost se musí přebrousit nebo přestěrkovat, podložka ji nevyrovná.</li>
            <li><strong>Laminát na podlahové vytápění s hustou podložkou.</strong> Celá skladba včetně podložky by neměla přesáhnout tepelný odpor 0,15 m²K/W, jinak vytápění nestíhá a účinnost prudce klesá.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            K podlaze patří skladba a lišty, které v ceně za metr čtvereční obvykle nejsou. Orientační ceny:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Podložka 2–3 mm</strong> — 20 až 60 Kč/m². Na podlahové vytápění speciální typ s nízkým tepelným odporem, pod vinyl SPC tenčí tvrdá podložka.</li>
            <li><strong>Parozábrana PE fólie 0,2 mm</strong> — 10 až 20 Kč/m². Povinná na všech betonových a anhydritových podkladech, pásy se překládají o 20 cm a přelepují.</li>
            <li><strong>Soklové lišty</strong> — 60 až 150 Kč za běžný metr plus klipy nebo montážní lepidlo za 150 až 400 Kč. U místnosti 5 × 4 m jde o 18 metrů lišt.</li>
            <li><strong>Přechodové a ukončovací lišty</strong> — 150 až 400 Kč za kus, obvykle jedna do každých dveří.</li>
            <li><strong>Dilatační klínky</strong> — 80 až 150 Kč za sadu. Levnější než jakákoli oprava vzepřené podlahy.</li>
            <li><strong>Přirážecí blok a stahovák</strong> — 200 až 500 Kč. Bez stahováku nedotáhnete poslední řadu u stěny.</li>
            <li><strong>Pila</strong> — ruční pilka na laminát za 300 Kč na pár řezů, pokosová nebo kmitací pila od 1 000 Kč při větší ploše. Na jemné řezy použijte pilový list s hustými zuby, jinak se dekor vyštipuje.</li>
            <li><strong>Nivelační stěrka</strong> — 250 až 500 Kč za 25 kg, plus penetrace 300 až 600 Kč, pokud je podklad nerovný.</li>
            <li><strong>Silikon nebo krycí růžice</strong> — 150 až 300 Kč na utěsnění průchodů trubek topení.</li>
            <li><strong>Podlaha samotná</strong> — laminát třídy zátěže 32 s povrchem AC4 za 250 až 450 Kč/m², vinyl SPC za 500 až 900 Kč/m².</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik balení laminátu potřebuji na 20 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Na místnost 5 × 4 metry, tedy 20 m², připadá s desetiprocentní rezervou 22 m² materiálu. Při balení o obsahu 2,2 m² to znamená přesně 10 balení. Pokud má vybraný dekor v balení jen 1,97 m², potřebujete 12 balení, protože výsledek se vždy zaokrouhluje nahoru na celá balení — obsah balení je proto nutné vzít z etikety, nikdy neodhadovat.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč se u laminátu počítá desetiprocentní rezerva?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Prořezy u stěn, u zárubní a kolem trubek tvoří u běžné místnosti 8 až 12 procent materiálu, protože poslední řada i poslední prkno v řadě se vždy zkracují a odřezek se často nedá použít. U diagonální pokládky nebo u vzoru rybina stoupá odpad na 15 až 20 procent. Navíc je rozumné nechat si jedno až dvě prkna v rezervě — stejná šarže nemusí být za rok k dispozici.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Musí laminát před pokládkou aklimatizovat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ano, uzavřená balení musí ležet v místnosti, kde se bude pokládat, nejméně 48 hodin. Laminát i vinyl reagují na teplotu a vlhkost a prkno přinesené z chladné garáže ještě dny po pokládce mění rozměr, což vede k vyboulení nebo k rozevření spojů. Doporučené podmínky jsou 15 až 25 °C a relativní vlhkost 45 až 65 procent.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak velká musí být dilatační mezera u stěn?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Standardně 8 až 12 milimetrů po celém obvodu, včetně zárubní, trubek a prahů — mezeru zakryje soklová lišta, která se kotví do stěny, nikdy do podlahy. U plochy delší než 8 metrů v jednom směru nebo při průchodu dveřmi se vkládá dilatační profil. Bez dilatace se plovoucí podlaha při změně vlhkosti vzepře uprostřed místnosti a náprava znamená celou pokládku zopakovat.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Dá se laminát položit do koupelny?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Běžný laminát s HDF jádrem do koupelny nepatří — jádro ve spojích nasákne vodu a nevratně nabobtná. Vhodnou alternativou je vinylová podlaha SPC nebo lepený vinyl, které jsou vodotěsné v celém průřezu, případně klasická dlažba. Pokud se laminát do koupelny přesto pokládá, musí mít výslovně uvedenou vodotěsnost spojů a utěsněný obvod.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak klást vinyl podlahu", href: "/blog/kladeni-vinyl-podlahy", icon: "🪵" },
              { title: "Jak renovovat parketovou podlahu", href: "/blog/renovovat-parkety", icon: "✨" },
              { title: "Jak stěhovat velké spotřebiče při rekonstrukci", href: "/blog/prestehovat-velke-spotrebice", icon: "📦" },
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
