// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/tepelna-izolace/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import IzolaceCalculator from "@/app/components/IzolaceCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka tepelné izolace – kolik balení",
  description: "Spočítej počet balení tepelné izolace (minerální vata, EPS, XPS) s rezervou na prořezy. Zadej plochu a m² v balení – výsledek okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/tepelna-izolace" },
  openGraph: { title: "Kalkulačka tepelné izolace 2026", description: "Balení minerální vaty nebo EPS s rezervou. Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/tepelna-izolace", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20tepeln%C3%A9%20izolace%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka tepelné izolace 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jak kalkulačka zohledňuje tloušťku izolace?", "acceptedAnswer": { "@type": "Answer", "text": "Tloušťka je už obsažená v údaji o počtu metrů čtverečních v balení, který opíšete z etikety. Minerální vata o tloušťce 100 mm má v balení typicky 5,76 m², stejná vata o tloušťce 200 mm jen 2,88 m², takže se počet balení automaticky zdvojnásobí. Pokud chcete 200 mm skládat ve dvou vrstvách po 100 mm, zadejte dvojnásobnou plochu nebo pusťte výpočet dvakrát." } },
      { "@type": "Question", "name": "Kolik desek izolace je v jednom balení?", "acceptedAnswer": { "@type": "Answer", "text": "U fasádního polystyrenu EPS 70 F o tloušťce 100 mm je v balíku 5 desek 1 000 × 500 mm, tedy 2,5 m². Desky o tloušťce 50 mm bývají po deseti kusech, tedy 5 m² v balíku. Minerální vata do krovu se dodává v balících po 5,76 nebo 7,2 m² podle tloušťky, tvrdé fasádní lamely po 1,2 až 2,4 m². Vždy je rozhodující číslo na etiketě konkrétního balení." } },
      { "@type": "Question", "name": "Proč kalkulačka přidává deset procent na prořezy?", "acceptedAnswer": { "@type": "Answer", "text": "Izolace se vždy řeže na míru mezi krokve, kolem ostění, hmoždinek a prostupů a odřezky se dají znovu použít jen částečně. Deset procent odpovídá běžné stěně nebo střeše s několika otvory. U členité fasády s arkýři a mnoha okny je rozumných 15 % a u jednoduché velké plochy bez prostupů vystačí 5 %. Kalkulačka proto umožňuje rezervu nastavit od nuly do 25 %." } },
      { "@type": "Question", "name": "Jaká tloušťka izolace se dnes doporučuje?", "acceptedAnswer": { "@type": "Answer", "text": "Pro fasády se doporučuje 160 až 200 mm, pro šikmé střechy a stropy do nevytápěné půdy 240 až 300 mm a pro podlahy na terénu 100 až 160 mm. Minerální vata o tloušťce 100 mm má tepelný odpor přibližně 2,5 m²K/W, při 200 mm 5,0 m²K/W. Přechod od 100 mm na 200 mm sníží tepelnou ztrátu danou plochou asi o polovinu, zatímco cena izolantu vzroste jen o jeho vlastní materiál." } },
      { "@type": "Question", "name": "Minerální vata, EPS, nebo XPS?", "acceptedAnswer": { "@type": "Answer", "text": "Minerální vata je nehořlavá a paropropustná, patří do dřevostaveb, šikmých střech a na fasády nad 22,5 metru výšky. Pěnový polystyren EPS je nejlevnější, snadno se zpracovává a hodí se na běžné fasády a podlahy. Extrudovaný polystyren XPS má minimální nasákavost a používá se na sokly, základy a podlahy na terénu, kde hrozí kontakt s vodou. V jedné vrstvě se materiály nemíchají." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Tepelná izolace", "item": "https://www.domovniguru.cz/kalkulacky/tepelna-izolace" }
    ]
  }]
};

export default function TepelnaIzolacePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Tepelná izolace</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik tepelné izolace potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu a m² v balení — kalkulačka přidá rezervu na prořezy kolem trámů a ostění.</p>

        <IzolaceCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit izolaci" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Tepelné mosty a proč nešetřit na tloušťce izolace</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tepelný most je místo v konstrukci kde tepelný odpor výrazně klesá oproti okolnímu plášti — typicky ocelové nebo dřevěné trámy, kotvící prvky, ostění oken, rohy stěn nebo věnce. Přestože tepelné mosty mohou tvořit pouhá 3–5 % plochy fasády, způsobují 15–30 % celkových tepelných ztrát díky dramaticky vyšší tepelné vodivosti kovů a betonu oproti izolaci. Proto je nezbytné tyto místa překrýt přídavnou vrstvou izolace nebo použít přerušenou tepelnou vazbu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tloušťka izolace není otázkou estetiky — je to fyzická veličina s přímým dopadem na úspory. Pro porovnání: minerální vata 100 mm dosahuje hodnoty Rλ = 2,5 m²K/W, vata 200 mm pak Rλ = 5,0 m²K/W. Zdvojnásobení tloušťky zdvojnásobí tepelný odpor a zhruba o třetinu sníží tepelné ztráty přes danou plochu. Současné normy (ČSN 73 0540) doporučují pro střechy minimálně 240 mm izolace, pro fasády 160–200 mm — a nová výstavba standardně překračuje i tyto hodnoty.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Výběr správného typu izolace záleží na aplikaci. Minerální (kamenná nebo skelná) vata je prodyšná, nehořlavá a vhodná pro střechy, podhledy a dřevostavby. Pěnový polystyren (EPS) je levnější, vhodný pro fasády a podlahy ale méně prodyšný. Extrudovaný polystyren (XPS) má nízkou nasákavost a hodí se do vlhkého prostředí (základy, plochá střecha, podlahy na terénu). Nikdy nesměšuj typy izolace v jedné vrstvě — kombinace různých tepelných vodivostí způsobuje kondenzaci na rozhraní.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má tři kroky. Z délky a šířky zateplované plochy vznikne čistá plocha v metrech čtverečních, ta se vynásobí koeficientem rezervy na prořezy a výsledek se vydělí počtem metrů čtverečních v jednom balení. Poslední krok se zaokrouhluje nahoru, protože izolace se prodává po celých balíkách. Tloušťka izolace se nikde nezadává zvlášť — je už obsažená v údaji o ploše v balení, který opíšete z etikety: vata 100 mm má v balíku 5,76 m², stejná vata o tloušťce 200 mm jen 2,88 m².
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Příklad pro stěnu 8 × 6 metru: čistá plocha je 48 m², s desetiprocentní rezervou 52,8 m². Při balení po 5,76 m² to je 52,8 ÷ 5,76 = 9,17, tedy 10 balení. Zbyde přitom asi 4,8 m² izolace, což je nevyhnutelný důsledek zaokrouhlení nahoru — a zároveň užitečná zásoba na ostění nebo na dodatečné překrytí tepelných mostů. Při 15% rezervě by vyšlo 55,2 m² a stále 10 balení, při 25% rezervě už 11 balení.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Protože kalkulačka pracuje s jednou vrstvou, u dvouvrstvého zateplení s překládanými spárami je potřeba zadat dvojnásobnou plochu nebo výpočet jednoduše spustit dvakrát. Totéž platí pro izolaci mezi krokve a nad krokve nebo pro kombinaci vaty mezi profily a tenké podstropní vrstvy. Tepelný odpor jedné vrstvy přitom spočítáte jako tloušťku v metrech dělenou součinitelem tepelné vodivosti: pro vatu 100 mm a lambdu 0,040 W/mK vychází 0,1 ÷ 0,040 = 2,5 m²K/W.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U zateplení se chyby neprojeví hned, ale postupně — vyšší účty za vytápění, kondenzát v koutech a po několika letech plíseň. Nejčastěji vznikají takto:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Zaměněný údaj o balení.</strong> Na etiketě bývá jak plocha v metrech čtverečních, tak objem v metrech kubických. Do kalkulačky patří plocha; kdo zadá objem, dostane nesmyslně malý počet balení.</li>
            <li><strong>Jedna vrstva místo dvou.</strong> Dvě vrstvy po 100 mm s překládanými spárami izolují lépe než jedna vrstva 200 mm, protože nevzniknou průběžné spáry. Do výpočtu je ale potřeba zadat dvojnásobnou plochu.</li>
            <li><strong>Izolace natlačená nebo volně ložená.</strong> Minerální vata mezi krokve se řeže o 1 až 2 cm šířší než světlost, aby držela třením. Stlačená vata ztrácí tepelný odpor, volně ložená se sesune a nad ní vznikne studená dutina.</li>
            <li><strong>Chybějící nebo prostřílená parozábrana.</strong> U šikmých střech a dřevostaveb musí být z interiéru souvislá parozábrana s přelepenými spoji a utěsněnými prostupy. Jediná neslepená spára dokáže do konstrukce dostat litry vody za sezónu.</li>
            <li><strong>Nezateplené ostění a nadpraží oken.</strong> Pás izolace 30 až 40 mm kolem rámu stojí pár stovek, jeho vynechání ale vytvoří tepelný most přímo tam, kde se nejdřív objeví plíseň.</li>
            <li><strong>Zateplení vlhké konstrukce.</strong> Zdivo s vzlínající vlhkostí nebo zatékáním se nejprve odvlhčí a opraví. Izolací se vlhkost pouze uzavře dovnitř a problém se zhorší.</li>
            <li><strong>Zateplení bez řešení větrání.</strong> Po zateplení a výměně oken se dům prakticky uzavře. Bez pravidelného větrání nebo rekuperace stoupne vlhkost v interiéru a kondenzace se přesune na nejchladnější místo v místnosti.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotný izolant tvoří u kontaktního zateplení fasády jen asi třetinu nákladů na materiál. Zbytek spolkne lepidlo, kotvení a povrchová úprava:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Izolant</strong> — EPS 70 F o tloušťce 100 mm za 130 až 200 Kč/m², fasádní minerální vata 250 až 400 Kč/m², vata do krovu 90 až 160 Kč/m², XPS na sokl 300 až 450 Kč/m².</li>
            <li><strong>Lepicí a stěrková hmota</strong> 200 až 350 Kč za pytel 25 kg; spotřeba je 4 až 6 kg/m² na lepení a dalších 4 až 5 kg/m² na stěrkování s výztužnou tkaninou.</li>
            <li><strong>Zatloukací hmoždinky</strong> 4 až 10 Kč/ks, obvykle 6 až 8 kusů na m², u fasádní vaty s talířovou podložkou; délka se volí podle tloušťky izolace a materiálu zdiva.</li>
            <li><strong>Výztužná perlinka</strong> 30 až 55 Kč/m², zakládací lišta 100 až 200 Kč/bm, rohové lišty s perlinkou 40 až 80 Kč/bm a okenní dilatační profily.</li>
            <li><strong>Penetrace a tenkovrstvá omítka</strong> 250 až 500 Kč/m² včetně práce; u svépomoci počítejte se 120 až 250 Kč/m² jen za materiál.</li>
            <li><strong>Parozábrana a butylové pásky</strong> u střech a dřevostaveb — fólie 25 až 60 Kč/m², lepicí páska 150 až 400 Kč za roli, těsnicí manžety na prostupy od 80 Kč.</li>
            <li><strong>Nůž na minerální vatu</strong> 300 až 700 Kč, řezačka polystyrenu s horkým drátem od 800 Kč, brusné hladítko na EPS a dlouhá lať na kontrolu rovinnosti.</li>
            <li><strong>Ochranné prostředky</strong> — respirátor FFP2, brýle a rukavice. Vlákna minerální vaty silně dráždí kůži i dýchací cesty, zejména při práci nad hlavou.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak kalkulačka zohledňuje tloušťku izolace?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Tloušťka je už obsažená v údaji o počtu metrů čtverečních v balení, který opíšete z etikety. Minerální vata o tloušťce 100 mm má v balení typicky 5,76 m², stejná vata o tloušťce 200 mm jen 2,88 m², takže se počet balení automaticky zdvojnásobí. Pokud chcete 200 mm skládat ve dvou vrstvách po 100 mm, zadejte dvojnásobnou plochu nebo pusťte výpočet dvakrát.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik desek izolace je v jednom balení?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U fasádního polystyrenu EPS 70 F o tloušťce 100 mm je v balíku 5 desek 1 000 × 500 mm, tedy 2,5 m². Desky o tloušťce 50 mm bývají po deseti kusech, tedy 5 m² v balíku. Minerální vata do krovu se dodává v balících po 5,76 nebo 7,2 m² podle tloušťky, tvrdé fasádní lamely po 1,2 až 2,4 m². Vždy je rozhodující číslo na etiketě konkrétního balení.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč kalkulačka přidává deset procent na prořezy?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Izolace se vždy řeže na míru mezi krokve, kolem ostění, hmoždinek a prostupů a odřezky se dají znovu použít jen částečně. Deset procent odpovídá běžné stěně nebo střeše s několika otvory. U členité fasády s arkýři a mnoha okny je rozumných 15 % a u jednoduché velké plochy bez prostupů vystačí 5 %. Kalkulačka proto umožňuje rezervu nastavit od nuly do 25 %.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká tloušťka izolace se dnes doporučuje?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pro fasády se doporučuje 160 až 200 mm, pro šikmé střechy a stropy do nevytápěné půdy 240 až 300 mm a pro podlahy na terénu 100 až 160 mm. Minerální vata o tloušťce 100 mm má tepelný odpor přibližně 2,5 m²K/W, při 200 mm 5,0 m²K/W. Přechod od 100 mm na 200 mm sníží tepelnou ztrátu danou plochou asi o polovinu, zatímco cena izolantu vzroste jen o jeho vlastní materiál.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Minerální vata, EPS, nebo XPS?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Minerální vata je nehořlavá a paropropustná, patří do dřevostaveb, šikmých střech a na fasády nad 22,5 metru výšky. Pěnový polystyren EPS je nejlevnější, snadno se zpracovává a hodí se na běžné fasády a podlahy. Extrudovaný polystyren XPS má minimální nasákavost a používá se na sokly, základy a podlahy na terénu, kde hrozí kontakt s vodou. V jedné vrstvě se materiály nemíchají.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Tepelné čerpadlo – kompletní průvodce 2026", href: "/blog/tepelne-cerpadlo-pruvodce", icon: "♨️" },
              { title: "Jak zateplit byt bez rekonstrukce", href: "/blog/zateplit-byt-bez-rekonstrukce", icon: "🧱" },
              { title: "Jak ušetřit na vytápění bez výměny kotle", href: "/blog/usetrit-na-vytapeni", icon: "💰" },
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
