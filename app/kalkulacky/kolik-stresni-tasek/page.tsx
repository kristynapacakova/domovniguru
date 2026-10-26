import type { Metadata } from "next";
import Link from "next/link";
import StresniTaskyCalculator from "@/app/components/StresniTaskyCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka střešních tašek 2026 – kolik tašek na střechu?",
  description: "Kolik střešních tašek potřebuji? Zadej plochu a sklon střechy – výpočet počtu tašek s rezervou okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-stresni-tasek" },
  openGraph: { title: "Kalkulačka střešních tašek 2026", description: "Kolik střešních tašek potřebuji? Zadej plochu a sklon střechy – výpočet počtu tašek s rezervou okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-stresni-tasek", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20st%C5%99e%C5%A1n%C3%ADch%20ta%C5%A1ek%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka střešních tašek 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Jaký koeficient sklonu mám do kalkulačky zadat?", "acceptedAnswer": { "@type": "Answer", "text": "Koeficient je poměr skutečné plochy svahu k půdorysu a rovná se jedné dělené kosinem sklonu. Pro plochou střechu je 1,00, pro 15° 1,04, pro 20° 1,06, pro 30° 1,15 a pro 45° 1,41. Když sklon neznáte, změřte výšku hřebene nad pozednicí a polovinu šířky domu: podíl krokve a poloviny šířky je přímo hledaný koeficient." } },
      { "@type": "Question", "name": "Kolik tašek na metr čtvereční má moje krytina?", "acceptedAnswer": { "@type": "Answer", "text": "Velkoformátová betonová taška typu Tegalit nebo Bramac vychází na 10 až 14 kusů na m², keramická drážková taška na 9 až 12 kusů, klasická bobrovka s dvojitým krytím na 28 až 36 kusů a velkoformátová plechová taška na 1 až 3 kusy. Přesné číslo je vždy v technickém listu konkrétního modelu, protože závisí na krycí šířce a na rozteči latí." } },
      { "@type": "Question", "name": "Kolik palet vyjde a kolik celá krytina váží?", "acceptedAnswer": { "@type": "Answer", "text": "Na paletě bývá 192 až 240 betonových tašek a 200 až 300 keramických, u bobrovek i 450 kusů. Výsledek z kalkulačky proto vydělte počtem kusů na paletě u vybraného modelu a zaokrouhlete nahoru. Betonová krytina váží kolem 45 kg/m², keramická 40 až 45 kg/m², takže na 100 m² střechy jde o 4 až 5 tun materiálu včetně latění." } },
      { "@type": "Question", "name": "Betonová, nebo keramická taška?", "acceptedAnswer": { "@type": "Answer", "text": "Betonová taška je o 30 až 50 % levnější, má stabilní rozměry a široký výběr barev, ale povrchový nástřik časem bledne a v prvních letech mírně vykvétá vápnem. Keramická pálená taška vydrží 50 až 100 let, barvu drží v celé hmotě a lépe odolává mrazu, zaplatíte ale víc a žádá si přesnější latění, protože má větší rozměrové tolerance." } },
      { "@type": "Question", "name": "Jakou rezervu nastavit a proč zbytek nevyhazovat?", "acceptedAnswer": { "@type": "Answer", "text": "Výchozích 10 % odpovídá členitější střeše s úžlabími a vikýři, u jednoduché sedlové střechy vystačí 5 až 7 %. Zbylé tašky se nikdy nevyhazují: po pár letech bývá model z výroby stažený a odstín nové šarže se už s původní krytinou neshoduje. Dvacet až třicet tašek v suché kůlně je nejlevnější pojistka proti rozbití větrem nebo padajícím stromem." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik střešních tašek", "item": "https://www.domovniguru.cz/kalkulacky/kolik-stresni-tasek" }
    ]
  }]
};

export default function KolikStresniTaskPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik střešních tašek</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik střešních tašek potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej půdorysnou plochu střechy a koeficient sklonu — kalkulačka ti okamžitě spočítá skutečnou plochu sklonu a počet tašek k nákupu.</p>

        <StresniTaskyCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit střešní materiál" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Typy střešních tašek a jak správně vypočítat množství</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Střešní tašky se dělí podle materiálu na betonové a keramické (pálené). Betonové tašky jsou levnější (20–60 Kč/ks), dostupné v mnoha tvarech a barvách, ale jsou těžší (3,5–5 kg/ks) a vyžadují silnější krokve. Keramické (pálenky) jsou lehčí (2,5–3,5 kg/ks), trvanlivější (50–100 let), lépe odolávají mrazu a mají přirozený vzhled — ale jsou dražší (40–120 Kč/ks). Speciální tašky zahrnují: hřebenáče, nárožní, úžlabní a větrací tašky — ty nejsou zahrnuty v základním výpočtu, ale jsou potřeba pro každou střechu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet tašek na m² závisí na tvaru a formátu tašky. Standardní betonová obdélníková taška (Tegalit, Bramac) pokryje 8–12 ks/m². Klasická bobrovka nebo esovka má vyšší překryv a počet dosahuje 15–28 ks/m². Střešní systémy s větším formátem (velkoformátové plechové tašky) mohou pokrýt až 1–3 ks/m². Vždy se řiďte specifikací konkrétního výrobce a modelu — kalkulačka počítá s zadaným počtem na m², který najdete v technickém listu tašky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Sklon střechy výrazně ovlivňuje skutečnou pokládkovou plochu. Zatímco u ploché střechy je půdorysná plocha přibližně rovna ploše střechy, u sedlové střechy se sklonem 45° je plocha střechy o 41 % větší než půdorys domu. Minimální sklon pro většinu betonových a keramických tašek je 17–22° — při nižším sklonu hrozí zatékání vody pod tašky. Při sklonu pod 17° je nutné použít speciální nízko-skloné tašky nebo fóliovou krytinu. Střecha s pravidelnou revizí (každé 3–5 let) a výměnou popraskané omítky nebo chybějících tašek vydrží bez větší opravy 30–50 let.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka pracuje ve třech krocích. Z půdorysné plochy střechy, tedy z plochy, kterou dům zabírá na zemi včetně přesahů, se nejprve vynásobením koeficientem sklonu udělá skutečná plocha svahů. Ta se vynásobí zadanou rezervou v procentech a nakonec počtem tašek na metr čtvereční podle technického listu vybrané krytiny. Výsledek se zaokrouhlí nahoru na celý kus. Políčko „Plocha střechy“ přitom ukazuje plochu svahů ještě bez rezervy, zatímco finální počet tašek už rezervu obsahuje — čísla tedy spolu nevycházejí podílem a není to chyba.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad s výchozími hodnotami: půdorys 80 m², sklon 30° tedy koeficient 1,15, keramická taška s 12 kusy na m² a rezerva 10 %. Plocha svahů je 80 × 1,15 = 92 m², s rezervou 101,2 m², a počet tašek 101,2 × 12 = 1 215 kusů. Při 200 keramických taškách na paletě to znamená 7 palet k objednání a necelé čtyři tuny krytiny, kterou je potřeba dostat na lešení a na latě.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nejsilnější vliv na výsledek má překvapivě krytina, ne sklon. Kdybyste na stejnou střechu použili bobrovku s dvojitým krytím a 32 kusy na m², vyjde 3 239 kusů — skoro třikrát víc tašek a místo sedmi palet jich objednáte čtrnáct, protože na paletě bobrovek je zhruba 240 kusů. Naopak velkoformátová plechová taška s 1,5 kusu na m² znamená 152 kusů, které se vejdou na jednu paletu. Proto má smysl počet kusů na metr čtvereční opsat z listu konkrétního modelu, a ne zadávat průměr.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Při objednávce krytiny se chyby platí dvakrát — poprvé materiálem, podruhé dopravou palet, která u střešních tašek není zanedbatelná položka:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Zadaná plocha svahů místo půdorysu.</strong> Kdo už změřenou plochu svahů ještě vynásobí koeficientem sklonu, nadhodnotí množství o 15 až 40 %. Do prvního políčka patří půdorys, sklon se započítává až koeficientem.</li>
            <li><strong>Průměrný počet tašek na m² místo údaje z technického listu.</strong> Rozdíl mezi 10 a 14 kusy na m² je u střechy 100 m² skoro 500 tašek, tedy dvě palety a desítky tisíc korun.</li>
            <li><strong>Objednávka z více šarží.</strong> Betonové tašky z různých výrobních dávek se mohou lišit odstínem. Celou krytinu je potřeba objednat najednou, u větších střech s písemným požadavkem na jednu šarži.</li>
            <li><strong>Krytina vybraná bez ohledu na únosnost krovu.</strong> Výměna lehké plechové krytiny o hmotnosti 5 až 7 kg/m² za betonovou taškou o 45 kg/m² znamená u 100 m² střechy čtyři tuny přitížení a bez posudku krovu je riziková.</li>
            <li><strong>Složení palet na nevhodné místo.</strong> Paleta tašek má půl tuny i víc, na zatravněném terénu se zařízne a hydraulická ruka ji už nezvedne. Místo složení patří zpevněné, rovné a přístupné z komunikace.</li>
            <li><strong>Krytina pod minimálním sklonem.</strong> Většina betonových a keramických tašek má bezpečný sklon od 17 až 22°. U nižšího sklonu nepomůže ani větší rezerva — je nutná jiná krytina nebo lepená hydroizolace pod latěním.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Cena samotných tašek bývá jen polovina nákladů na střešní plášť. Druhou polovinu tvoří tvarovky, latění a klempířina, které se objednávají odděleně:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Plošné tašky</strong> — betonové 25 až 60 Kč/ks, keramické 40 až 120 Kč/ks; cena za metr čtvereční se tak pohybuje od 300 do 1 200 Kč.</li>
            <li><strong>Hřebenáče a nárožníky</strong> 60 až 150 Kč/ks, počítá se 2,5 kusu na běžný metr, k tomu větrací pás hřebene za 150 až 300 Kč/bm a držáky hřebenové latě.</li>
            <li><strong>Okrajové, odvětrávací a prostupové tašky</strong> — okrajová od 80 Kč, odvětrávací od 300 Kč, prostupová sestava pro komín nebo anténu 800 až 2 000 Kč.</li>
            <li><strong>Difuzní pojistná hydroizolace</strong> 30 až 70 Kč/m² a kontralatě 30 × 50 mm s latěmi 40 × 60 mm za 25 až 45 Kč/bm.</li>
            <li><strong>Okapní systém</strong> od 250 Kč/bm v plastu a od 450 Kč/bm v titanzinku, včetně okapnice a ochranné mřížky proti listí.</li>
            <li><strong>Protisněhové tašky nebo zachytávače</strong> nad vstupy a nad okapem, 150 až 400 Kč za kus; u sklonu nad 35° jsou prakticky povinné.</li>
            <li><strong>Doprava a složení</strong> — u objednávky nad pět palet počítejte s 2 000 až 5 000 Kč podle vzdálenosti, plus případný střešní výtah za 500 až 900 Kč na den.</li>
            <li><strong>Bezpečnostní vybavení</strong> — postroj s lanem a tlumičem pádu za 2 000 až 4 000 Kč, protiskluzová obuv a lešení s okopovou zábranou.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaký koeficient sklonu mám do kalkulačky zadat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Koeficient je poměr skutečné plochy svahu k půdorysu a rovná se jedné dělené kosinem sklonu. Pro plochou střechu je 1,00, pro 15° 1,04, pro 20° 1,06, pro 30° 1,15 a pro 45° 1,41. Když sklon neznáte, změřte výšku hřebene nad pozednicí a polovinu šířky domu: podíl krokve a poloviny šířky je přímo hledaný koeficient.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik tašek na metr čtvereční má moje krytina?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Velkoformátová betonová taška typu Tegalit nebo Bramac vychází na 10 až 14 kusů na m², keramická drážková taška na 9 až 12 kusů, klasická bobrovka s dvojitým krytím na 28 až 36 kusů a velkoformátová plechová taška na 1 až 3 kusy. Přesné číslo je vždy v technickém listu konkrétního modelu, protože závisí na krycí šířce a na rozteči latí.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik palet vyjde a kolik celá krytina váží?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Na paletě bývá 192 až 240 betonových tašek a 200 až 300 keramických, u bobrovek i 450 kusů. Výsledek z kalkulačky proto vydělte počtem kusů na paletě u vybraného modelu a zaokrouhlete nahoru. Betonová krytina váží kolem 45 kg/m², keramická 40 až 45 kg/m², takže na 100 m² střechy jde o 4 až 5 tun materiálu včetně latění.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Betonová, nebo keramická taška?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Betonová taška je o 30 až 50 % levnější, má stabilní rozměry a široký výběr barev, ale povrchový nástřik časem bledne a v prvních letech mírně vykvétá vápnem. Keramická pálená taška vydrží 50 až 100 let, barvu drží v celé hmotě a lépe odolává mrazu, zaplatíte ale víc a žádá si přesnější latění, protože má větší rozměrové tolerance.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jakou rezervu nastavit a proč zbytek nevyhazovat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Výchozích 10 % odpovídá členitější střeše s úžlabími a vikýři, u jednoduché sedlové střechy vystačí 5 až 7 %. Zbylé tašky se nikdy nevyhazují: po pár letech bývá model z výroby stažený a odstín nové šarže se už s původní krytinou neshoduje. Dvacet až třicet tašek v suché kůlně je nejlevnější pojistka proti rozbití větrem nebo padajícím stromem.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak odvzdušnit radiátory – krok za krokem", href: "/blog/jak-odvzdusnit-radiatory", icon: "🔧" },
              { title: "Jak vyčistit okapy – bezpečně a efektivně", href: "/blog/jak-vycistit-okapy", icon: "🏠" },
              { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", icon: "❄️" },
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
