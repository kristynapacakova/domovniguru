import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import CihelCalculator from "@/app/components/CihelCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka cihel a tvárnic 2026 – kolik kusů a palet potřebuju?",
  description: "Spočítej přesný počet cihel nebo tvárnic na zeď. Podporuje Ytong, Porotherm i klasické pálené cihly. Výsledek včetně počtu palet — zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-cihel" },
  openGraph: {
    title: "Kalkulačka cihel a tvárnic 2026 – kolik kusů a palet potřebuju?",
    description: "Kolik cihel nebo tvárnic potřebuju? Spočítej přesně pro Ytong, Porotherm i klasické zdivo.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-cihel",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20cihel%20a%20tv%C3%A1rnic%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka cihel a tvárnic 2026" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik cihel nebo tvárnic potřebuji na 1 m² zdi?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží výhradně na formátu zdicího prvku. Tvárnice Ytong P4-500 o tloušťce 17,5 cm vychází na 14,7 kusu na m², Porotherm 30 na 16 kusů, Ytong P2-400 o tloušťce 30 cm jen na 8 kusů a klasická pálená cihla ve zdivu 25 cm na 51 kusů. Kalkulačka s těmito spotřebami počítá přímo a navíc přidává 5 % ztratného." } },
      { "@type": "Question", "name": "Musím od plochy zdi odečítat okna a dveře?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, kalkulačka záměrně počítá plnou plochu zdi bez otvorů. Plochu každého okna a dveří si odečtěte sami ještě před zadáním rozměrů: okno 900 × 1 200 mm má 1,08 m², dveřní otvor 900 × 2 100 mm 1,89 m². U velkých prosklených ploch jde o desítky tvárnic, u jednoho okna v příčce je naopak rozumné otvor neodečítat a brát ho jako rezervu." } },
      { "@type": "Question", "name": "Kolik váží paleta tvárnic a jak ji dostanu na stavbu?", "acceptedAnswer": { "@type": "Answer", "text": "Paleta Ytongu o tloušťce 17,5 cm váží kolem 250 až 300 kg, paleta Ytongu 30 cm přes 700 kg a paleta Porothermu 30 se blíží 1 200 kg. Paleta klasických pálených cihel po 300 kusech má přes 700 kg. Nákladní auto s hydraulickou rukou složí paletu asi do 6 metrů od vozu, takže přístupová cesta musí být zpevněná a dostatečně únosná." } },
      { "@type": "Question", "name": "Jaké ztratné se u zdiva počítá?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka automaticky přidává 5 %, což odpovídá běžné přímé zdi s jedním nebo dvěma otvory. U členitého zdiva s kouty, ostěním, nárožími a šikmým zakončením pod krovem je rozumné počítat s 8 až 10 %, protože velká část prvků se musí řezat. Naopak u objednávky nad deset palet se dá ztratné držet nízko, protože zbytky z jedné zdi se dají využít v další." } },
      { "@type": "Question", "name": "Ytong, Porotherm, nebo klasická pálená cihla?", "acceptedAnswer": { "@type": "Answer", "text": "Pórobeton Ytong je lehký, snadno se řeže a hodí se na příčky a svépomocné stavby. Keramický broušený blok Porotherm má vyšší pevnost v tlaku a lepší akumulaci tepla, je ale těžší a náročnější na rovinnost založení. Klasická pálená cihla se dnes používá hlavně na opravy, viditelné zdivo a klenby, protože 51 kusů na m² znamená pětkrát až šestkrát více manipulace než u tvárnic." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik cihel", "item": "https://www.domovniguru.cz/kalkulacky/kolik-cihel" }
    ]
  }]
};

export default function KolikCihelPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik cihel</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik cihel a tvárnic potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej délku a výšku zdi a zvol typ zdiva — kalkulačka ti okamžitě spočítá počet kusů i palet včetně 5% ztratného na řezy a odpad.
        </p>

        <CihelCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit zdicí materiál" />
        <ShareButtons url="https://www.domovniguru.cz/kalkulacky/kolik-cihel" title="Kalkulačka cihel a tvárnic 2026 – kolik kusů a palet potřebuju?" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak vybrat správný typ zdiva a proč záleží na spotřebě
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výběr typu zdiva zásadně ovlivňuje nejen cenu materiálu, ale i spotřebu práce a malty. Klasická pálená cihla formátu 250 × 120 × 65 mm má spotřebu přibližně 51 kusů na m² zdiva tloušťky 25 cm — to je mnohem více kusů než u moderních pórobetonových tvárnic Ytong, kde vychází jen 8–15 kusů na m². Vyšší počet kusů klasické cihly sice neznamená automaticky vyšší cenu (cihla je levnější kus od kusu), ale výrazně prodlužuje dobu zdění a zvyšuje spotřebu malty.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tvárnice Ytong P4-500 tloušťky 17,5 cm jsou oblíbenou volbou pro příčky v bytových jádrech a přístavbách. Díky nízké hmotnosti (přibližně 8–9 kg/kus) je lze snadno zpracovávat i bez pomocníka. Ytong P2-400 tloušťky 30 cm nabízí lepší tepelnou izolaci a hodí se pro obvodové stěny menších staveb nebo přístavků. Porotherm 30 je keramický broušený blok s vysokou pevností a výbornou akumulací tepla — oblíbená volba pro rodinné domy. Při zdění na tenkovrstvou maltu stačí spára 1–3 mm, což ušetří materiál a urychlí práci.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Nezapomeň, že kalkulačka počítá plnou plochu zdi bez odečtení otvorů. U zdiva s oknem nebo dveřmi odečti plochu každého otvoru ručně před zadáváním — standardní okno 900 × 1 200 mm zabírá 1,08 m² a standardní dveřní otvor 900 × 2 100 mm asi 1,89 m². Přeprava zdícího materiálu je fyzicky i logisticky náročná — 1 paleta Ytong 17,5 cm váží přibližně 250 kg, paleta Porotherm 30 může vážit i 1 200 kg. Při plánování zásobování počítej s dostatečně únosnou přístupovou cestou.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má tři kroky a je z něj dobře vidět, že rozhodující není velikost zdi, ale formát zdicího prvku. Nejprve se z délky a výšky zdi získá plocha v metrech čtverečních. Ta se vynásobí spotřebou kusů na metr čtvereční, která je pevně svázaná s typem zdiva: Ytong P4-500 o tloušťce 17,5 cm má 14,7 ks/m², Porotherm 30 celých 16 ks/m², Ytong P2-400 o tloušťce 30 cm pouhých 8 ks/m² a klasická pálená cihla ve zdivu 25 cm rovných 51 ks/m². Výsledek se nakonec vynásobí koeficientem 1,05, tedy pětiprocentním ztratným, a zaokrouhlí nahoru na celý kus.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: příčka 5 × 2,6 metru má 13 m². Při volbě Ytong P4-500 vyjde 13 × 14,7 = 191 kusů, se ztratným 201 kusů. Protože na paletě je 30 tvárnic, kalkulačka ukáže 7 palet. Stejná zeď postavená z klasických pálených cihel znamená 13 × 51 = 663 kusů, se ztratným 697 kusů, což jsou při 300 cihlách na paletě 3 palety. Počet kusů se tedy liší třiapůlkrát, zatímco plocha zdi je naprosto stejná.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet palet se vždy zaokrouhluje nahoru, takže u malých zdí zbyde část palety navíc. To není chyba výpočtu, ale realita dodávek — zdicí materiál se prodává po celých paletách a rozpaletování si stavebniny obvykle připlácejí. Pokud vám chybí pár kusů do další palety, vyplatí se zeď mírně přeplánovat nebo zbytek využít na sokl, komínové obezdění či zahradní zídku.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Chybný odhad množství zdiva se projeví buď zastavenou stavbou kvůli chybějícím tvárnicím, nebo paletami, které po dokončení zůstanou na zahradě. Opakují se přitom stále stejné nepřesnosti:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Záměna tloušťky zdi s výškou zdiva.</strong> Do kalkulačky patří délka a výška plochy zdi, nikoli její tloušťka. Tloušťka je už obsažena ve volbě typu zdiva a sama na počet kusů na metr čtvereční nemá vliv.</li>
            <li><strong>Nezohledněné otvory u velkých prosklení.</strong> U obvodové stěny s francouzským oknem 2,4 × 2,2 metru jde o 5,3 m², tedy téměř 80 tvárnic Ytongu — a to už je dvě a půl palety navíc.</li>
            <li><strong>Objednávka bez zakládací vrstvy.</strong> První řada se zakládá do silnější vrstvy zakládací malty na dokonale vyrovnaný podklad. Kdo tuto maltu neobjedná, nemůže začít zdít, i když má tvárnice složené.</li>
            <li><strong>Řezání broušených bloků kotoučem na beton.</strong> Keramické bloky Porotherm se řežou stolní pilou s diamantovým kotoučem nebo ocaskou na zdivo, jinak se rozpadnou žebra a blok přestane být nosný.</li>
            <li><strong>Chybějící propojení s nosnou konstrukcí.</strong> Příčka se k nosné zdi kotví plochými nerezovými sponami ve každé druhé až třetí ložné spáře, u stropu se nechává dilatační spára. Příčka natvrdo vetknutá do stropu popraská.</li>
            <li><strong>Složení palet na nepřipravené místo.</strong> Pórobeton nasákne vodou z deště a mokrá tvárnice se hůř zdí i řeže. Palety patří na rovný, odvodněný terén a pod fólii, kterou stačí nestrhávat celou.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotné tvárnice jsou jen část rozpočtu. Bez doplňkového materiálu a několika specifických nástrojů se zeď nedá postavit rovně ani bezpečně:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Tenkovrstvá zdicí malta nebo lepidlo</strong> — pytel 25 kg za 180 až 300 Kč vystačí přibližně na 3 až 5 m² zdiva o tloušťce 17,5 cm.</li>
            <li><strong>Zakládací malta</strong> na vyrovnání první řady, 25 kg za 150 až 250 Kč; u delší zdi počítejte s jedním pytlem na 4 až 6 běžných metrů.</li>
            <li><strong>Zubové hladítko nebo nanášecí lžíce</strong> v šířce zdiva, 400 až 900 Kč. Pro každou tloušťku zdi je jiná šířka, nelze improvizovat.</li>
            <li><strong>Pila na pórobeton</strong> 400 až 900 Kč a hoblík na pórobeton 500 až 1 000 Kč; u keramických bloků místo nich ocaska na zdivo nebo půjčená stolní pila za 400 až 800 Kč na den.</li>
            <li><strong>Dvoumetrová vodováha</strong> 500 až 1 200 Kč, gumová palička 150 až 300 Kč a zednická šňůra s kolíky do 150 Kč.</li>
            <li><strong>Ploché nerezové spony</strong> na napojení k nosné zdi, 15 až 30 Kč za kus, plus výztuž do ložné spáry u delších příček.</li>
            <li><strong>Překlady nad otvory</strong> — nosné i nenosné, od 400 Kč za kus podle délky a typu zdiva; objednávají se zvlášť, kalkulačka je nepočítá.</li>
            <li><strong>Míchadlo s nízkými otáčkami</strong> 1 500 až 3 000 Kč, stavební kolečko, kbelíky a respirátor FFP2 na řezání pórobetonu.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik cihel nebo tvárnic potřebuji na 1 m² zdi?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Záleží výhradně na formátu zdicího prvku. Tvárnice Ytong P4-500 o tloušťce 17,5 cm vychází na 14,7 kusu na m², Porotherm 30 na 16 kusů, Ytong P2-400 o tloušťce 30 cm jen na 8 kusů a klasická pálená cihla ve zdivu 25 cm na 51 kusů. Kalkulačka s těmito spotřebami počítá přímo a navíc přidává 5 % ztratného.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Musím od plochy zdi odečítat okna a dveře?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ano, kalkulačka záměrně počítá plnou plochu zdi bez otvorů. Plochu každého okna a dveří si odečtěte sami ještě před zadáním rozměrů: okno 900 × 1 200 mm má 1,08 m², dveřní otvor 900 × 2 100 mm 1,89 m². U velkých prosklených ploch jde o desítky tvárnic, u jednoho okna v příčce je naopak rozumné otvor neodečítat a brát ho jako rezervu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik váží paleta tvárnic a jak ji dostanu na stavbu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Paleta Ytongu o tloušťce 17,5 cm váží kolem 250 až 300 kg, paleta Ytongu 30 cm přes 700 kg a paleta Porothermu 30 se blíží 1 200 kg. Paleta klasických pálených cihel po 300 kusech má přes 700 kg. Nákladní auto s hydraulickou rukou složí paletu asi do 6 metrů od vozu, takže přístupová cesta musí být zpevněná a dostatečně únosná.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaké ztratné se u zdiva počítá?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka automaticky přidává 5 %, což odpovídá běžné přímé zdi s jedním nebo dvěma otvory. U členitého zdiva s kouty, ostěním, nárožími a šikmým zakončením pod krovem je rozumné počítat s 8 až 10 %, protože velká část prvků se musí řezat. Naopak u objednávky nad deset palet se dá ztratné držet nízko, protože zbytky z jedné zdi se dají využít v další.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Ytong, Porotherm, nebo klasická pálená cihla?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pórobeton Ytong je lehký, snadno se řeže a hodí se na příčky a svépomocné stavby. Keramický broušený blok Porotherm má vyšší pevnost v tlaku a lepší akumulaci tepla, je ale těžší a náročnější na rovinnost založení. Klasická pálená cihla se dnes používá hlavně na opravy, viditelné zdivo a klenby, protože 51 kusů na m² znamená pětkrát až šestkrát více manipulace než u tvárnic.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Sádrokarton příčka – postup krok za krokem", href: "/blog/sadrokarton-pricka-postup", icon: "🧱" },
              { title: "Kolik SDK desek a profilů potřebuju?", href: "/kalkulacky/kolik-sdk", icon: "📐" },
              { title: "Kalkulačka střešních tašek", href: "/kalkulacky/kolik-stresnych-tasek", icon: "🏠" },
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
