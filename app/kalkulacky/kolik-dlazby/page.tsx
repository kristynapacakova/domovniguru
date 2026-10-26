// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-dlazby/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import DlazbCalculator from "@/app/components/DlazbCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka dlažby 2026 – kolik dlaždic potřebuju s rezervou?",
  description: "Spočítej přesný počet dlaždic včetně 10% rezervy na prořezy a rohy. Zadej rozměry místnosti a dlaždice – výsledek okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-dlazby" },
  openGraph: { title: "Kalkulačka dlažby 2026", description: "Počet dlaždic s rezervou na prořezy. Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-dlazby", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20dla%C5%BEby%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka dlažby 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik dlaždic 60 × 60 cm potřebuji na 12 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Jedna dlaždice 60 × 60 cm má plochu 0,36 m², na 12 m² je tedy potřeba 34 kusů bez jakékoli rezervy. S doporučenou desetiprocentní rezervou na prořezy vychází 38 kusů. Protože se dlažba kupuje po krabicích, obvykle po třech nebo čtyřech kusech, nakoupíte reálně 10 krabic po čtyřech kusech, tedy 40 dlaždic." } },
      { "@type": "Question", "name": "Jak velkou rezervu na prořezy mám zadat?", "acceptedAnswer": { "@type": "Answer", "text": "Pro běžnou pokládku na vazbu v pravidelné místnosti stačí 10 procent. U diagonální pokládky, u vzoru rybina nebo u dlažby, kterou je nutné skládat podle kresby, zadejte 15 až 20 procent. Dalších pět procent přidejte u velkoformátových desek nad 80 cm, kde se poškozený kus nedá využít jako odřezek, a u členité místnosti s výklenky a sloupky." } },
      { "@type": "Question", "name": "Počítá kalkulačka se šířkou spár?", "acceptedAnswer": { "@type": "Answer", "text": "Ne, počet kusů se počítá z čistého formátu dlaždice bez spáry, což výsledek mírně nadsazuje. U formátu 60 × 60 cm se spárou 3 mm je skutečná rozteč 60,3 cm a reálná potřeba je o přibližně jedno procento nižší. Tato odchylka pracuje ve váš prospěch — je to další malá rezerva nad zadaných deset procent." } },
      { "@type": "Question", "name": "Proč musí být dlažba z jedné šarže?", "acceptedAnswer": { "@type": "Answer", "text": "Keramická a slinutá dlažba se vypaluje v sériích a každá šarže má mírně odlišný odstín i kalibr, tedy skutečný rozměr. Rozdíl v odstínu uvidíte až na položené ploše v denním světle, rozdíl v kalibru se projeví nestejnými spárami. Číslo šarže i kalibrační třída jsou vytištěné na krabici, proto kupujte celé množství najednou a několik kusů si uložte na pozdější opravy." } },
      { "@type": "Question", "name": "Jak přepočítám kusy na krabice?", "acceptedAnswer": { "@type": "Answer", "text": "Vydělte počet kusů množstvím v jedné krabici a zaokrouhlete nahoru. Na etiketě najdete počet kusů i plochu v m² na krabici: u formátu 60 × 60 cm to bývají 3 nebo 4 kusy, tedy 1,08 až 1,44 m², u formátu 30 × 60 cm obvykle 7 kusů, tedy 1,26 m². Některé prodejny účtují dlažbu právě po metrech čtverečních balení, ne po kusech." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik dlažby", "item": "https://www.domovniguru.cz/kalkulacky/kolik-dlazby" }
    ]
  }]
};

export default function KolikDlazbyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik dlažby</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik dlažby potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej rozměry místnosti a dlaždice — kalkulačka přidá 10% rezervu na prořezy a rohy.</p>

        <DlazbCalculator />
        <AffiliateCTA merchant="podlahy" text="Nakoupit dlažbu" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Proč je 10% rezerva u dlažby nutností, ne volbou</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U každé pokládky dlažby vznikají prořezy — u rohů, sloupků, výklenků a kolem sanitárních zařízení. I v zdánlivě čtvercové místnosti tvoří prořezy typicky 8–12 % z celkové plochy. U vzorované nebo diagonálně kladené dlažby může odpad vzrůst až na 15–20 %. Pokud koupíš přesně tolik kusů kolik vychází z plochy místnosti, téměř jistě ti bude na konci chybět 3–10 dlaždic — a druhá objednávka ze stejné šarže nemusí být dostupná.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Šarže (výrobní série) je klíčový pojem u dlažby. Stejný model dlažby vyrobený v jiné šarži může mít mírně odlišný odstín nebo strukturu povrchu — rozdíl nemusí být viditelný v obchodě pod umělým světlem, ale na položené podlaze v přirozeném světle bude patrný. Vždy kupuj všechny dlaždice najednou a z jedné šarže (číslo je na krabici nebo etiketě). Zbývající dlaždice ulož — jsou neocenitelné pro budoucí opravy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Před pokládkou nechej dlažbu 24–48 hodin aklimatizovat v místnosti. Keramická a porcelánová dlažba jsou sice relativně stabilní, ale prudká změna teploty (z chladného skladu do teplé koupelny) může způsobit mikrotrhliny nebo deformace maltového lože. Materiál skladuj ve svislé poloze (na hraně) nebo naplocho na rovné ploše — nikdy nenakládej krabice na výšku přes 4–5 vrstev, hrozí prasknutí spodních kusů.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má čtyři kroky. Z délky a šířky místnosti vznikne plocha v m². Z délky a šířky dlaždice vznikne plocha jednoho kusu. Plocha místnosti se vydělí plochou dlaždice a zaokrouhlí nahoru — to je počet kusů bez rezervy. Nakonec se tento počet vynásobí koeficientem rezervy a znovu zaokrouhlí nahoru na celé kusy. Rezerva se tedy přidává ke kusům, ne k ploše, a nikdy nevyjde půl dlaždice.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Na výchozích hodnotách: místnost 4 × 3 m má 12 m². Dlaždice 60 × 60 cm, tedy 0,6 × 0,6 m, má plochu 0,36 m². Dělením vyjde 33,3 a po zaokrouhlení 34 kusů. S desetiprocentní rezervou je to 37,4 a tedy 38 kusů. Zvedněte rezervu na 20 procent kvůli diagonální pokládce a výsledek je 41 kusů. Pozor na jednotky: délka dlaždice se zadává v metrech, tedy 0,6 — nikoli 60.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet záměrně ignoruje šířku spáry. Při spáře 3 mm je skutečná rozteč dlaždic 60,3 cm, takže reálně byste potřebovali asi o jedno procento kusů méně — tato odchylka funguje jako další tichá rezerva. Poslední krok si udělejte sami: dlažba se neprodává po kusech, ale po krabicích. Osmatřicet kusů formátu 60 × 60 cm znamená 10 krabic po čtyřech, tedy 40 dlaždic a 14,4 m² materiálu. Počet kusů i m² v balení je vždy na etiketě krabice.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Zadat rozměr dlaždice v centimetrech.</strong> Hodnota 60 místo 0,6 udělá z dlaždice obří desku a výsledkem je jediný kus. Všechny rozměry patří do kalkulačky v metrech.</li>
            <li><strong>Nakoupit přesně podle plochy.</strong> Bez rezervy vám na konci bude chybět pár kusů, které už ze stejné šarže neseženete. Nula v poli rezerva je volba jen pro orientační propočet ceny.</li>
            <li><strong>Nechat 10 % u diagonální pokládky.</strong> Při kladení na koso se každý okrajový kus řeže na dva nevyužitelné trojúhelníky. Patnáct až dvacet procent je zde minimum.</li>
            <li><strong>Zapomenout na sokl, stupně a výklenky.</strong> Soklové pásky, obklad schodů, zídka u vany nebo nika ve sprše se v ploše místnosti neobjeví, materiál ale spotřebují.</li>
            <li><strong>Ignorovat kalibr.</strong> Dlažba z různých výrobních běhů se liší i o milimetr či dva ve skutečném rozměru. Smícháním dvou kalibrů vzniknou nestejné spáry, které se už nedají srovnat.</li>
            <li><strong>Nerozvrhnout si pokládku.</strong> Když se začne od stěny bez rozvržení, u opačné strany nebo u vstupu zůstane několikacentimetrový pásek. Rozvržení od středu místnosti rozdělí řez na dva stejné a vizuálně přijatelné okraje.</li>
            <li><strong>Pokládat na nerovný nebo prašný podklad.</strong> Nerovnost nad 3 mm na dvoumetrové lati se lepidlem nevyrovná. Podklad se nivelační stěrkou srovná a vždy penetruje, jinak lepidlo nepřilne.</li>
            <li><strong>Nezkontrolovat kusy před pokládkou.</strong> Praskliny a odštípnuté hrany se reklamují jen do zahájení pokládky. Celé množství se před prací rozbalí a protřídí.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotná dlažba je u koupelny nebo kuchyně často méně než polovina nákladů. Orientační ceny doplňkového materiálu a nářadí:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Flexibilní lepidlo C2TE</strong> — 250 až 500 Kč za 25 kg. Spotřeba 3 až 5 kg/m² při zubu 8 mm, u velkoformátu s dvojitým nanášením 6 až 8 kg/m².</li>
            <li><strong>Zubové hladítko</strong> — 150 až 400 Kč. Velikost zubu 6 mm pro malý formát, 8 až 10 mm pro 60 × 60 cm, 12 mm pro desky nad 80 cm.</li>
            <li><strong>Spárovací kříže nebo klínky</strong> — 100 až 300 Kč. Nivelační klipový systém na velkoformát stojí 300 až 700 Kč a brání vzniku převýšených hran.</li>
            <li><strong>Řezačka na dlažbu</strong> — ruční za 1 000 až 3 000 Kč, denní půjčení profesionální 200 až 400 Kč. Na výřezy a slinutý materiál ještě úhlová bruska s diamantovým kotoučem za 300 až 800 Kč.</li>
            <li><strong>Penetrace a nivelační stěrka</strong> — penetrace 300 až 600 Kč, samonivelační stěrka 250 až 500 Kč za 25 kg (vystačí na 5 až 8 m² při 3 mm).</li>
            <li><strong>Hydroizolační stěrka a těsnicí pásy</strong> — 1 000 až 2 500 Kč na sprchový kout. Ve sprše a pod vanou je to povinná vrstva, ne volitelný doplněk.</li>
            <li><strong>Spárovačka</strong> — 200 až 500 Kč za 5 kg. Do sprchy epoxidová za 800 až 1 500 Kč za 2 kg.</li>
            <li><strong>Sanitární silikon</strong> — 150 až 250 Kč za kartuši v odstínu spárovačky, do toho pistole a hladítko na silikon.</li>
            <li><strong>Gumová palička, vodováha 1 m, kbelík s mřížkou a respirátor</strong> — 800 až 1 500 Kč celkem, pokud začínáte od nuly.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik dlaždic 60 × 60 cm potřebuji na 12 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Jedna dlaždice 60 × 60 cm má plochu 0,36 m², na 12 m² je tedy potřeba 34 kusů bez jakékoli rezervy. S doporučenou desetiprocentní rezervou na prořezy vychází 38 kusů. Protože se dlažba kupuje po krabicích, obvykle po třech nebo čtyřech kusech, nakoupíte reálně 10 krabic po čtyřech kusech, tedy 40 dlaždic.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak velkou rezervu na prořezy mám zadat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pro běžnou pokládku na vazbu v pravidelné místnosti stačí 10 procent. U diagonální pokládky, u vzoru rybina nebo u dlažby, kterou je nutné skládat podle kresby, zadejte 15 až 20 procent. Dalších pět procent přidejte u velkoformátových desek nad 80 cm, kde se poškozený kus nedá využít jako odřezek, a u členité místnosti s výklenky a sloupky.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Počítá kalkulačka se šířkou spár?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ne, počet kusů se počítá z čistého formátu dlaždice bez spáry, což výsledek mírně nadsazuje. U formátu 60 × 60 cm se spárou 3 mm je skutečná rozteč 60,3 cm a reálná potřeba je o přibližně jedno procento nižší. Tato odchylka pracuje ve váš prospěch — je to další malá rezerva nad zadaných deset procent.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč musí být dlažba z jedné šarže?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Keramická a slinutá dlažba se vypaluje v sériích a každá šarže má mírně odlišný odstín i kalibr, tedy skutečný rozměr. Rozdíl v odstínu uvidíte až na položené ploše v denním světle, rozdíl v kalibru se projeví nestejnými spárami. Číslo šarže i kalibrační třída jsou vytištěné na krabici, proto kupujte celé množství najednou a několik kusů si uložte na pozdější opravy.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak přepočítám kusy na krabice?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Vydělte počet kusů množstvím v jedné krabici a zaokrouhlete nahoru. Na etiketě najdete počet kusů i plochu v m² na krabici: u formátu 60 × 60 cm to bývají 3 nebo 4 kusy, tedy 1,08 až 1,44 m², u formátu 30 × 60 cm obvykle 7 kusů, tedy 1,26 m². Některé prodejny účtují dlažbu právě po metrech čtverečních balení, ne po kusech.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak pokládat betonové dlaždice na terasu", href: "/blog/pokladat-betonove-dlazdice", icon: "🔲" },
              { title: "Jak vyčistit spáry v dlažbě", href: "/navody/jak-vycistit-spary-v-dlazbe", icon: "🧹" },
              { title: "Jak utěsnit vanu silikonem", href: "/navody/jak-utesnit-vanu-silikonem", icon: "🚿" },
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
