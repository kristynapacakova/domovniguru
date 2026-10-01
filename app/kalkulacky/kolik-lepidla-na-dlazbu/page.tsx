import type { Metadata } from "next";
import Link from "next/link";
import LepidloNaDlazbCalculator from "@/app/components/LepidloNaDlazbCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka lepidla na dlažbu 2026 – kolik kg potřebuji?",
  description: "Spočítej přesnou spotřebu lepidla na dlažbu podle plochy a typu lepidla. Výsledek v kg a pytlích okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-lepidla-na-dlazbu" },
  openGraph: { title: "Kalkulačka lepidla na dlažbu 2026", description: "Kolik kg lepidla na dlažbu? Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-lepidla-na-dlazbu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20lepidla%20na%20dla%C5%BEbu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka lepidla na dlažbu 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik kg lepidla potřebuji na 1 m² dlažby?", "acceptedAnswer": { "@type": "Answer", "text": "U standardního cementového lepidla C1 a malých formátů počítejte s 3 kg/m², u flexibilního lepidla C2 nebo S1 s 4,5 kg/m², u vysoce flexibilního S2 s 5,5 kg/m² a u epoxidového lepidla R2 s 7 kg/m². Rozhodující je velikost zubu stěrky: jeden milimetr skutečné vrstvy lepidla odpovídá přibližně 1,3 až 1,5 kg suché směsi na metr čtvereční." } },
      { "@type": "Question", "name": "Kolik m² dlažby vystačí pytel lepidla 25 kg?", "acceptedAnswer": { "@type": "Answer", "text": "Při spotřebě 3 kg/m² vystačí pytel 25 kg na přibližně 8 m², při 4,5 kg/m² na necelých 6 m² a při 5,5 kg/m² na 4,5 m². U velkoformátových desek s dvojitým lepením počítejte jen se 3 až 4 m² z jednoho pytle. Vždy kupte o jeden pytel více — dokoupení z jiné výrobní šarže nemusí mít stejné vlastnosti." } },
      { "@type": "Question", "name": "Jakou zubovou stěrku zvolit podle formátu dlaždice?", "acceptedAnswer": { "@type": "Answer", "text": "Na mozaiku a malé obklady do 10×10 cm stačí zuby 4 mm, na formáty do 15×15 cm 6 mm, na dlažbu do 30×30 cm 8 mm, do 60×60 cm 10 mm a u velkoformátových desek nad 60 cm se používají zuby 12 mm a více, často v kombinaci s dvojitým lepením. Čím větší formát, tím větší zub — jinak nelze dosáhnout plnoplošného lepení." } },
      { "@type": "Question", "name": "Jaké lepidlo na dlažbu s podlahovým vytápěním?", "acceptedAnswer": { "@type": "Answer", "text": "Vždy flexibilní lepidlo třídy C2 s deformovatelností S1, u anhydritového potěru nebo velkých formátů raději S2. Standardní lepidlo C1 teplotní dilataci potěru nezvládne a dlažba se začne odlepovat nebo praskat. Před lepením musí být dokončena topná zkouška a potěr vychladlý na pokojovou teplotu." } },
      { "@type": "Question", "name": "Jak dlouho musí lepidlo tvrdnout před chůzí a spárováním?", "acceptedAnswer": { "@type": "Answer", "text": "Běžné cementové lepidlo je pochozí po 24 hodinách a spárovat lze po 24 hodinách, u flexibilních a silnějších vrstev až po 48 hodinách. Otevřená doba, tedy čas, kdy lze dlaždici ještě vložit do naneseného lepidla, je přitom jen 15 až 30 minut. Plné zatížení a zatěsnění silikonem přichází zpravidla po 7 dnech." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik lepidla na dlažbu", "item": "https://www.domovniguru.cz/kalkulacky/kolik-lepidla-na-dlazbu" }
    ]
  }]
};

export default function KolikLepidlaNaDlazbPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik lepidla na dlažbu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik lepidla na dlažbu potřebuji?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu a vyber typ lepidla — kalkulačka spočítá kilogramy i počet pytlů s rezervou.</p>

        <LepidloNaDlazbCalculator />
        <AffiliateCTA merchant="podlahy" text="Nakoupit lepidlo na dlažbu" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak vybrat správné lepidlo na dlažbu</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Lepidla na dlažbu se dělí podle normy ČSN EN 12004 do tříd. Standardní lepidlo třídy C1 (cementové, normální) je vhodné pro keramiku na pevné a rovné podklady v interiéru. Flexibilní lepidlo C2 (nebo označení S1/S2 pro deformovatelnost) je nutností na podlahové vytápění, na anhydritové potěry, na větší formáty dlaždic (nad 30×30 cm) a do koupelen nebo venkovních prostor. Epoxidové lepidlo R2 je nejodolnější — chemicky, mechanicky i teplotně — ale také nejdražší a technicky nejnáročnější na zpracování.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spotřeba lepidla závisí nejen na specifikaci výrobce, ale zejména na rovnosti podkladu. Pokud podklad vykazuje odchylky větší než 3 mm na 2 m latě, je třeba nejprve vyrovnat samonivelační stěrkou — snaha kompenzovat nerovnosti extra tloušťkou lepidla vede k praskání nebo k tomu, že se dlažba nikdy nepřilne plnoploše. Zubová stěrka se volí dle velikosti formátu: 6 mm zuby na dlažbu do 15×15 cm, 8–10 mm na formáty do 30×30 cm, 12 mm a více na velkoformátové desky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Klíčové pravidlo: každá dlaždice musí být plnoploše přilepena. To znamená, že po sejmutí čerstvě položené dlaždice by mělo mít lepidlo kontakt s alespoň 90 % plochy (v exteriéru a mokrém prostředí 100 %). Dutiny pod dlaždicí jsou místem, kde se hromadí vlhkost, dochází ke kondenzaci a v zimě ke kryogennímu rozrušení. „Dutá" dlaždice je zárodek pozdějšího prasknutí.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se spotřeba lepidla počítá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotný výpočet je jednoduchý: plocha v m² × spotřeba v kg/m² × rezerva. Veškerá nejistota je ve druhém čísle. Spotřeba totiž není vlastnost lepidla, ale výsledek toho, jak vysokou vrstvu na podkladu vytvoří zubová stěrka. Praktické pravidlo zní, že jeden milimetr skutečné vrstvy lepidla odpovídá přibližně 1,3 až 1,5 kg suché směsi na metr čtvereční. Stěrka se 6mm zuby zanechá po přitlačení dlaždice vrstvu kolem 2 mm, tedy asi 3 kg/m². Zuby 10 mm vedou na 4,5 kg/m², zuby 12 mm a více už na 5,5 až 6 kg/m².
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Proto kalkulačka pracuje se spotřebou podle typu lepidla: standardní C1 počítá 3 kg/m², flexibilní C2 nebo S1 4,5 kg/m², vysoce flexibilní S2 5,5 kg/m² a epoxidové R2 7 kg/m². Nejde o to, že by flexibilní lepidlo bylo „těžší" — jen se používá na větší formáty a s hrubšími zuby. Příklad: koupelna o 12 m² s flexibilním lepidlem znamená 12 × 4,5 = 54 kg, s desetiprocentní rezervou 59,4 kg, tedy tři pytle po 25 kg.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě situace spotřebu zvedají nad tabulkovou hodnotu. První je dvojité lepení (buttering–floating), kdy se lepidlo hřebenuje na podklad i tenkou vrstvou na rub dlaždice — u velkoformátových desek, na terasách a na soklech je to povinnost a spotřeba roste o 30 až 50 %. Druhou je nerovný podklad: každý milimetr nerovnosti, který se „dorovnává" lepidlem, se v konečném množství projeví. Řezání a prostupy naopak spotřebu nesnižují, protože odřezky se obvykle nedají využít — proto se rezerva 10 % považuje za minimum a u členitých prostorů se volí 15 %.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Většina reklamací dlažby nevzniká kvůli špatnému lepidlu, ale kvůli způsobu, jakým bylo použito. Tyto body se opakují nejčastěji:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Přetažená otevřená doba.</strong> Nahřebenované lepidlo má jen 15 až 30 minut, než na povrchu vznikne kůžička. Dlaždice vložená později se jen přilepí k zaschlé vrstvě a kontakt je minimální. Nanášejte proto nejvýš 1 až 2 m² dopředu a kontrolujte prstem, zda se lepidlo ještě lepí.</li>
            <li><strong>Vynechaná penetrace.</strong> Savý potěr odebere lepidlu záměsovou vodu dřív, než zhydratuje. Výsledkem je prášivá vrstva bez pevnosti. Anhydrit navíc musí být přebroušen a odsán.</li>
            <li><strong>Příliš mnoho vody při míchání.</strong> Řidší lepidlo se snáz hřebenuje, ale ztrácí pevnost a víc sesedá. Dodržujte dávkování na pytli a po pěti minutách zrání směs ještě jednou promíchejte.</li>
            <li><strong>Namíchaná velká dávka.</strong> Zpracovatelnost v kbelíku je zpravidla 2 až 3 hodiny. Lepidlo, které už tuhne, nelze zachránit dolitím vody — tím se nevratně zničí.</li>
            <li><strong>Hřebenování v různých směrech.</strong> Drážky veďte vždy jedním směrem, aby mohl při přitlačení vytékat vzduch. Kruhové pohyby uzavírají vzduchové kapsy.</li>
            <li><strong>Ignorované dilatace.</strong> Spáru u stěny, v místě dilatace potěru a u ploch nad 25 m² nesmí lepidlo přemostit. Právě tudy se do dlažby přenášejí pohyby podkladu.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Lepidlo bývá jen třetinou nákladů na materiál. Než začnete, spočítejte si i tyto položky — nejvíc času se ztrácí dojížděním pro zapomenutou maličkost:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Penetrace</strong> — 0,1 až 0,2 l/m² podle savosti podkladu, na anhydrit a silně savý beton ve dvou nátěrech.</li>
            <li><strong>Samonivelační stěrka</strong> na vyrovnání, pokud podklad vykazuje víc než 3 mm odchylky na dvoumetrové lati. Počítejte asi 1,6 kg/m² na každý milimetr vrstvy.</li>
            <li><strong>Hydroizolační stěrka a těsnicí pásy</strong> do sprchy, pod vanu a na podlahu koupelny včetně rohových tvarovek a manžet na prostupy.</li>
            <li><strong>Zubová stěrka</strong> ve správné velikosti, hladká strana na roztírání kontaktní vrstvy, gumová palička a vodováha nebo laser.</li>
            <li><strong>Míchadlo s nízkými otáčkami</strong> (do 600 ot/min) a dva kbelíky — jeden na míchání, druhý na vodu.</li>
            <li><strong>Distanční křížky nebo nivelační klipový systém</strong>, který u velkých formátů zároveň srovnává převýšení hran.</li>
            <li><strong>Řezačka dlažby</strong> na rovné řezy a úhlová bruska s diamantovým kotoučem na výřezy, případně vrtací korunka na prostupy.</li>
            <li><strong>Spárovačka, sanitární silikon</strong> v odpovídajícím odstínu a přechodové nebo dilatační profily.</li>
            <li><strong>Ochrana</strong> — rukavice, chrániče kolen, brýle při řezání a vysavač na zbytkový prach.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik kg lepidla potřebuji na 1 m² dlažby?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U standardního cementového lepidla C1 a malých formátů počítejte s 3 kg/m², u flexibilního lepidla C2 nebo S1 s 4,5 kg/m², u vysoce flexibilního S2 s 5,5 kg/m² a u epoxidového lepidla R2 s 7 kg/m². Rozhodující je velikost zubu stěrky: jeden milimetr skutečné vrstvy lepidla odpovídá přibližně 1,3 až 1,5 kg suché směsi na metr čtvereční.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik m² dlažby vystačí pytel lepidla 25 kg?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při spotřebě 3 kg/m² vystačí pytel 25 kg na přibližně 8 m², při 4,5 kg/m² na necelých 6 m² a při 5,5 kg/m² na 4,5 m². U velkoformátových desek s dvojitým lepením počítejte jen se 3 až 4 m² z jednoho pytle. Vždy kupte o jeden pytel více — dokoupení z jiné výrobní šarže nemusí mít stejné vlastnosti.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jakou zubovou stěrku zvolit podle formátu dlaždice?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Na mozaiku a malé obklady do 10×10 cm stačí zuby 4 mm, na formáty do 15×15 cm 6 mm, na dlažbu do 30×30 cm 8 mm, do 60×60 cm 10 mm a u velkoformátových desek nad 60 cm se používají zuby 12 mm a více, často v kombinaci s dvojitým lepením. Čím větší formát, tím větší zub — jinak nelze dosáhnout plnoplošného lepení.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaké lepidlo na dlažbu s podlahovým vytápěním?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Vždy flexibilní lepidlo třídy C2 s deformovatelností S1, u anhydritového potěru nebo velkých formátů raději S2. Standardní lepidlo C1 teplotní dilataci potěru nezvládne a dlažba se začne odlepovat nebo praskat. Před lepením musí být dokončena topná zkouška a potěr vychladlý na pokojovou teplotu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak dlouho musí lepidlo tvrdnout před chůzí a spárováním?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Běžné cementové lepidlo je pochozí po 24 hodinách a spárovat lze po 24 hodinách, u flexibilních a silnějších vrstev až po 48 hodinách. Otevřená doba, tedy čas, kdy lze dlaždici ještě vložit do naneseného lepidla, je přitom jen 15 až 30 minut. Plné zatížení a zatěsnění silikonem přichází zpravidla po 7 dnech.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kolik dlažby potřebuji?", href: "/kalkulacky/kolik-dlazby", icon: "🧱" },
              { title: "Kolik spárovačky potřebuji?", href: "/kalkulacky/kolik-sparovacky", icon: "🪣" },
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
