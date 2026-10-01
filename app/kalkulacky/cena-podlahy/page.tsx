import type { Metadata } from "next";
import Link from "next/link";
import CenaPodlahyCalculator from "@/app/components/CenaPodlahyCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka ceny podlahy 2026 – kolik stojí nová podlaha?",
  description: "Kolik stojí nová podlaha? Zadej plochu, cenu materiálu a pokládky – celkový odhad nákladů okamžitě. Laminát, vinyl, parkety.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-podlahy" },
  openGraph: { title: "Kalkulačka ceny podlahy 2026", description: "Kolik stojí nová podlaha? Zadej plochu, cenu materiálu a pokládky – celkový odhad nákladů okamžitě. Laminát, vinyl, parkety.", url: "https://www.domovniguru.cz/kalkulacky/cena-podlahy", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20ceny%20podlahy%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka ceny podlahy 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik stojí nová podlaha na metr čtvereční včetně pokládky?", "acceptedAnswer": { "@type": "Answer", "text": "U laminátu se běžně dostanete na 400 až 900 Kč za metr čtvereční včetně podložky a práce, u vinylu SPC na 600 až 1 400 Kč a u třívrstvých dřevěných podlah na 1 300 až 2 600 Kč. Masivní parkety s broušením a lakováním na místě překročí 3 000 Kč za metr čtvereční. Svépomocná pokládka plovoucí podlahy snižuje tuto částku přibližně o 150 až 300 Kč za metr čtvereční." } },
      { "@type": "Question", "name": "Počítá kalkulačka rezervu na prořez i do pokládky a podložky?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, a je to úmyslné. Rezerva na prořez zvětšuje jen plochu materiálu, protože odřezky musíte zaplatit. Podložka i práce se počítají z čisté plochy místnosti, protože řemeslník fakturuje skutečně položené metry a podložka se nespojuje s prořezem. Díky tomu odhad nepřestřelí a odpovídá tomu, co uvidíte na faktuře." } },
      { "@type": "Question", "name": "Je podložka pod podlahu nutná a jakou vybrat?", "acceptedAnswer": { "@type": "Answer", "text": "U každé plovoucí podlahy ano — vyrovnává drobné nerovnosti, tlumí kročejový hluk a chrání zámky spojů. Pro laminát se hodí podložka 2 až 3 mm, pro vinyl SPC jen tuhá podložka do 1,5 mm, protože silná a stlačitelná vrstva láme zámky. Na betonovém podkladu patří pod podložku ještě parozábrana z PE folie 0,2 mm. Lepené vinylové a dřevěné podlahy se naopak kladou bez podložky, přímo do lepidla." } },
      { "@type": "Question", "name": "Co v odhadu ceny podlahy není zahrnuto?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka počítá materiál, podložku a pokládku. Mimo zůstávají soklové lišty a jejich montáž, přechodové a dilatační profily, demontáž a odvoz staré podlahy, vyrovnání podkladu samonivelační hmotou, podřezání zárubní a dveří a případné úpravy podlahového vytápění. U celkového rozpočtu bývá rozumné přidat k výsledku dalších 15 až 25 procent právě na tyto položky." } },
      { "@type": "Question", "name": "Vyplatí se položit podlahu svépomocí?", "acceptedAnswer": { "@type": "Answer", "text": "U laminátu a vinylu se zámkovým systémem click ano — v místnosti bez složitých tvarů to zvládne i začátečník a ušetří 150 až 300 Kč za metr čtvereční, tedy u pokoje 20 m² okolo 3 000 až 6 000 Kč. U lepeného vinylu, dřevěných parket a všude, kde je nutné vyrovnávat podklad stěrkou, se vyplatí řemeslník. Chyba v rovinnosti podkladu se u dřeva projeví vrzáním a rozestupujícími se spoji, které už svépomocí neopravíte." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Cena podlahy", "item": "https://www.domovniguru.cz/kalkulacky/cena-podlahy" }
    ]
  }]
};

export default function CenaPodlahyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena podlahy</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí nová podlaha?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu místnosti, cenu materiálu a pokládky — kalkulačka ti okamžitě odhadne celkové náklady na novou podlahu v korunách.</p>

        <CenaPodlahyCalculator />
        <AffiliateCTA merchant="podlahy" text="Vybrat novou podlahu" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Přehled cen podlah a nákladů na pokládku 2026</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Ceny podlahových materiálů v ČR pokrývají velmi široké spektrum. Laminátové podlahy (AC3–AC5) jsou nejdostupnějším řešením — ekonomická třída AC3 stojí 150–250 Kč/m², kvalitní AC5 pro intenzivní provoz 400–700 Kč/m². Vinylové SPC podlahy (stone plastic composite) jsou odolnější vůči vodě a vhodné do koupelen a kuchyní — ceny se pohybují 350–900 Kč/m². Dřevěné parkety a třívrstvé dřevo začínají na 800 Kč/m² u dubových 3-vrstvých desek a dosahují 2 500–5 000 Kč/m² za masivní exotické dřevo. Keramická dlažba (kalkulačka kolik-dlazby) je kategorií sama pro sebe.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pokládku podlahy lze zadat řemeslníkovi nebo provést svépomocně. Profesionální pokládka stojí 150–300 Kč/m² pro laminát a vinyl, 300–600 Kč/m² pro parkety (broušení, lakování). Svépomocná pokládka laminátu není obtížná — jde o systém click-lock bez lepidla. Parkety vyžadují zkušenosti a specializované nářadí. Podložka (kročejová izolace) je nezbytná pro zvukový útlum — stojí 30–80 Kč/m² a pokládá se pod laminát i vinyl.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Před výpočtem celkových nákladů zohledněte i přípravné práce: vyrovnání betonové vrstvy (samonivelační hmota stojí 100–200 Kč/m², práce 150–300 Kč/m²), demontáž staré podlahy (50–150 Kč/m²), soklové lišty (30–80 Kč/bm) a případné zakrytí topných trubek nebo kabelu v podlaze. U bytů v panelovém domě ověřte, zda nová podlaha nepřekračuje povolenou váhu — masivní kamenná dlažba nebo lité podlahy mohou mít vyšší m² hmotnost než stavební projekt předpokládá.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Odhad se skládá ze tří samostatných položek, které kalkulačka sečte. Materiál se počítá z plochy zvětšené o prořez, tedy plocha × (1 + rezerva ÷ 100) × cena materiálu. Podložka a pokládka se naopak počítají z čisté plochy, protože podložku kladete v celku bez odpadu a řemeslník fakturuje skutečně položené metry. Celková cena je součtem těchto tří čísel a jednotlivé položky vidíte v kalkulačce rozepsané, aby bylo poznat, kde se dá ušetřit.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad s výchozími hodnotami: pokoj 20 m², vinyl za 400 Kč/m², pokládka 200 Kč/m², podložka 50 Kč/m² a rezerva 10 %. Materiálu se nakoupí na 22 m², což je 8 800 Kč. Podložka vyjde na 20 × 50 = 1 000 Kč, práce na 20 × 200 = 4 000 Kč. Celkem 13 800 Kč, tedy 690 Kč za metr čtvereční hotové podlahy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě čísla v kalkulačce mají největší vliv a vyplatí se s nimi pohrát. Pokud stejný pokoj položíte svépomocí, zadáte pokládku 0 Kč a odhad spadne na 9 800 Kč — ušetříte přesně 4 000 Kč. A pokud přejdete z vinylu na laminát AC4 za 250 Kč/m², klesne materiál na 5 500 Kč a celek na 10 500 Kč. Rezervu naopak nesnižujte pod 10 %: u pokládky napříč, do rybinového vzoru nebo v místnosti s mnoha výklenky jí nastavte 15 %, protože dokupovat později chybějící metr ze stejné výrobní šarže je téměř vždy problém s odstínem.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozpočet na podlahu se nejčastěji přestřelí ne kvůli ceně materiálu, ale kvůli položkám, na které nikdo nemyslel. A u samotné pokládky bývají chyby nevratné:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Rozpočet jen na materiál.</strong> K ceně podlahy patří podložka, lišty, profily, demontáž staré krytiny a její odvoz. Souhrn těchto položek dělá klidně čtvrtinu ceny celé zakázky.</li>
            <li><strong>Přeskočené měření rovinnosti.</strong> Norma připouští odchylku 2 mm na dvoumetrové lati. Pokud podklad nezměříte dvoumetrovou latí předem, dozvíte se o stěrce až ve chvíli, kdy je materiál koupený a řemeslník stojí v místnosti.</li>
            <li><strong>Pokládka bez aklimatizace.</strong> Balíky mají ležet 48 hodin naležato v místnosti, kde se budou klást. Studený materiál položený přes den se po vytopení rozepne a vytlačí spáry nebo se vzedme u stěny.</li>
            <li><strong>Vynechaná dilatační mezera.</strong> U stěn a sloupků patří 8 až 10 mm mezery, u rozměrných ploch i dilatační profil ve dveřích. Plovoucí podlaha dotažená ke stěně se vždy někde vyboulí.</li>
            <li><strong>Silná podložka pod vinyl SPC.</strong> Měkká pěna 3 mm je pro laminát ideální, pod tuhý SPC panel ale způsobí pružení a lámání zámků. Tam patří podložka do 1,5 mm určená výrobcem.</li>
            <li><strong>Chybějící parozábrana na betonu.</strong> Zbytková vlhkost v anhydritu nebo betonu projde podložkou. Bez PE folie 0,2 mm s přesahy a přelepenými spoji podlaha nasákne a začne pracovat.</li>
            <li><strong>Lišty přišroubované do podlahy.</strong> Soklová lišta se kotví do stěny, nikdy do krytiny — jinak zafixuje plovoucí podlahu a znemožní jí dilataci.</li>
            <li><strong>Nákup na více objednávek.</strong> Odstín se mezi výrobními šaržemi liší, proto kupujte celé množství včetně rezervy najednou.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tyto položky kalkulačka nepočítá, ale v rozpočtu se objeví vždy. Orientační ceny roku 2026:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Soklové lišty:</strong> MDF s folií 40–90 Kč/bm, masivní dub 150–350 Kč/bm, k nim klipy nebo montážní lepidlo 100–180 Kč/kartuše. Na pokoj 20 m² počítejte 18 až 20 běžných metrů.</li>
            <li><strong>Přechodové, ukončovací a dilatační profily</strong> 150–400 Kč za kus — jeden do každých dveří a na přechod k dlažbě.</li>
            <li><strong>Parozábrana PE 0,2 mm</strong> 15–35 Kč/m² a lepicí páska na spoje 90–150 Kč/role.</li>
            <li><strong>Příprava podkladu:</strong> penetrace 250–500 Kč za 5 l, samonivelační stěrka 180–300 Kč za 25 kg, což při vrstvě 3 mm vystačí přibližně na 5 m².</li>
            <li><strong>Lepidlo</strong> u lepeného vinylu nebo dřeva: 1 200–2 200 Kč za balení na 15 až 20 m², plus ozubená špachtla 150–400 Kč.</li>
            <li><strong>Nářadí:</strong> distanční klínky 100–200 Kč, přítlačný blok a tahadlo 300–600 Kč, kvalitní ruční řezačka na laminát 1 500–3 500 Kč (nebo pokosová pila), dvoumetrová lať 500–1 200 Kč, kolenní chrániče a průmyslový vysavač.</li>
            <li><strong>Odvoz a likvidace staré podlahy:</strong> kontejner 1 500–3 500 Kč podle velikosti, případně poplatek ve sběrném dvoře.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí nová podlaha na metr čtvereční včetně pokládky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U laminátu se běžně dostanete na 400 až 900 Kč za metr čtvereční včetně podložky a práce, u vinylu SPC na 600 až 1 400 Kč a u třívrstvých dřevěných podlah na 1 300 až 2 600 Kč. Masivní parkety s broušením a lakováním na místě překročí 3 000 Kč za metr čtvereční. Svépomocná pokládka plovoucí podlahy snižuje tuto částku přibližně o 150 až 300 Kč za metr čtvereční.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Počítá kalkulačka rezervu na prořez i do pokládky a podložky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ne, a je to úmyslné. Rezerva na prořez zvětšuje jen plochu materiálu, protože odřezky musíte zaplatit. Podložka i práce se počítají z čisté plochy místnosti, protože řemeslník fakturuje skutečně položené metry a podložka se nespojuje s prořezem. Díky tomu odhad nepřestřelí a odpovídá tomu, co uvidíte na faktuře.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Je podložka pod podlahu nutná a jakou vybrat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U každé plovoucí podlahy ano — vyrovnává drobné nerovnosti, tlumí kročejový hluk a chrání zámky spojů. Pro laminát se hodí podložka 2 až 3 mm, pro vinyl SPC jen tuhá podložka do 1,5 mm, protože silná a stlačitelná vrstva láme zámky. Na betonovém podkladu patří pod podložku ještě parozábrana z PE folie 0,2 mm. Lepené vinylové a dřevěné podlahy se naopak kladou bez podložky, přímo do lepidla.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Co v odhadu ceny podlahy není zahrnuto?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka počítá materiál, podložku a pokládku. Mimo zůstávají soklové lišty a jejich montáž, přechodové a dilatační profily, demontáž a odvoz staré podlahy, vyrovnání podkladu samonivelační hmotou, podřezání zárubní a dveří a případné úpravy podlahového vytápění. U celkového rozpočtu bývá rozumné přidat k výsledku dalších 15 až 25 procent právě na tyto položky.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Vyplatí se položit podlahu svépomocí?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U laminátu a vinylu se zámkovým systémem click ano — v místnosti bez složitých tvarů to zvládne i začátečník a ušetří 150 až 300 Kč za metr čtvereční, tedy u pokoje 20 m² okolo 3 000 až 6 000 Kč. U lepeného vinylu, dřevěných parket a všude, kde je nutné vyrovnávat podklad stěrkou, se vyplatí řemeslník. Chyba v rovinnosti podkladu se u dřeva projeví vrzáním a rozestupujícími se spoji, které už svépomocí neopravíte.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak klást vinyl podlahu krok za krokem", href: "/blog/kladeni-vinyl-podlahy", icon: "🪵" },
              { title: "Kalkulačka laminátu", href: "/kalkulacky/kolik-laminatu", icon: "📐" },
              { title: "Jak renovovat parketovou podlahu", href: "/blog/renovovat-parkety", icon: "✨" },
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
