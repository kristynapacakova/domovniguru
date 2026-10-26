import type { Metadata } from "next";
import Link from "next/link";
import PodlahoveTopeniCalculator from "@/app/components/PodlahoveTopeniCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka podlahového topení 2026 – délka trubky a výkon",
  description: "Kolik metrů trubky nebo kabelu na podlahové topení? Zadej plochu a rozteč – výpočet délky a výkonu okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/podlahove-topeni" },
  openGraph: { title: "Kalkulačka podlahového topení 2026", description: "Kolik metrů trubky nebo kabelu na podlahové topení? Zadej plochu a rozteč – výpočet délky a výkonu okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/podlahove-topeni", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20podlahov%C3%A9ho%20top%C4%9Bn%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka podlahového topení 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik metrů trubky potřebuji na 1 m² podlahového topení?", "acceptedAnswer": { "@type": "Answer", "text": "Délka potrubí na metr čtvereční se rovná jednomu metru dělenému roztečí v metrech. Při rozteči 15 cm to je 6,7 m na m², při rozteči 10 cm 10 m na m² a při rozteči 20 cm jen 5 m na m². Místnost 15 m² s roztečí 15 cm tedy spotřebuje přibližně 100 metrů trubky. K tomu připočtěte přívodní úsek od rozdělovače k místnosti, a to v obou směrech." } },
      { "@type": "Question", "name": "Jaká rozteč trubek je pro podlahové topení správná?", "acceptedAnswer": { "@type": "Answer", "text": "Standardem pro obytné místnosti je rozteč 15 cm, která při teplotě topné vody 35 až 40 °C dává výkon kolem 80 až 120 W/m². V koupelnách a u prosklených stěn se zahušťuje na 10 cm, kde výkon vystoupá na 150 až 200 W/m². V chodbách a komorách naopak stačí 20 cm. Pod 10 cm se nejde kvůli omezené teplotě povrchu podlahy, která u obytných místností nesmí přesáhnout 29 °C." } },
      { "@type": "Question", "name": "Jak dlouhý smí být jeden okruh podlahového topení?", "acceptedAnswer": { "@type": "Answer", "text": "U trubky 16×2 mm se jeden okruh navrhuje na maximálně 80 až 100 metrů, u trubky 17×2 mm asi 110 metrů a u 20×2 mm až 120 metrů. Delší okruh má příliš velkou tlakovou ztrátu, čerpadlo jej neprotlačí a konec okruhu zůstane studený. Spočítanou celkovou délku proto vydělte touto hodnotou — výsledek je počet samostatných okruhů, které se napojí na rozdělovač." } },
      { "@type": "Question", "name": "Jaká podlahová krytina je vhodná nad podlahové topení?", "acceptedAnswer": { "@type": "Answer", "text": "Nejlépe vede teplo keramická dlažba a přírodní kámen, kde tepelný odpor je téměř nulový. Vinyl a SPC s označením pro podlahové topení jsou vhodné, u laminátu a dřeva musí celková skladba včetně podložky mít odpor do 0,15 m²K/W. Masivní dřevo nad 15 mm a koberec s vyšším vlasem se nedoporučují — koberec funguje jako izolace a sníží výkon topení i o polovinu." } },
      { "@type": "Question", "name": "Musí podlahové topení zapojit odborník?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Zásah do otopné soustavy i do elektroinstalace patří do rukou osoby s příslušnou odbornou kvalifikací. Elektrické podlahové topení musí být jištěno proudovým chráničem s reziduálním proudem 30 mA a po instalaci je nutná výchozí revize elektrického zařízení. U vodní soustavy se před zalitím betonem provádí tlaková zkouška s protokolem, který je podmínkou záruky výrobce i uznání případné škody pojišťovnou." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Podlahové topení", "item": "https://www.domovniguru.cz/kalkulacky/podlahove-topeni" }
    ]
  }]
};

export default function PodlahoveTopeniPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Podlahové topení</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Délka trubky pro podlahové topení</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu místnosti a rozteč trubek nebo kabelu — kalkulačka ti okamžitě spočítá celkovou délku potrubí a instalovaný výkon.</p>

        <PodlahoveTopeniCalculator />
        <AffiliateCTA merchant="podlahy" text="Nakoupit podlahové topení" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Vodní vs. elektrické podlahové topení – jak vybrat a dimenzovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Podlahové topení existuje ve dvou základních variantách: vodní (teplovodní) a elektrické. Vodní podlahové topení cirkuluje teplou vodu (30–45 °C) v síti plastových trubek uložených v betonové mazanině — je ideální pro celkové vytápění domu nebo bytu a provozně levnější díky nízkým teplotám, kde tepelná čerpadla pracují nejefektivněji. Elektrické podlahové topení (odporové kabely nebo fólie) se instaluje rychleji a levněji, ale provozní náklady jsou vyšší. Elektrické topení je oblíbené pro rekonstrukce koupelen jako doplňkový zdroj tepla — pod dlažbou poskytuje příjemné teplo nohou.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozteč trubek nebo kabelu určuje hustotu topného pole a tedy výkon. Standardní rozteč 15 cm dává výkon 80–120 W/m², která pokryje tepelné ztráty běžného obývacího pokoje nebo ložnice. Pro koupelny, kde je větší tepelná ztráta (velké okno, studená venkovní zeď) a kde topení slouží i jako sušák ručníků, použijte rozteč 10 cm (výkon 150–200 W/m²). Při rozteči pod 10 cm hrozí přehřátí podlahové krytiny — maximální teplota povrchu podlahy by neměla překročit 29 °C (v koupelnách 33 °C).
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Podlahová krytina musí být kompatibilní s podlahovým topením. Nejlepšími vodiči tepla jsou keramická dlažba (λ ≈ 1,3 W/mK) a přírodní kámen. Vinylové SPC a kamenoplastové podlahy jsou vhodné a označují se symbolem podlahového topení. Laminát musí mít odpor ≤ 0,15 m²K/W — kontrolujte etiketu. Masivní dřevo nad 15 mm tloušťky se pro podlahové topení obecně nedoporučuje kvůli riziku praskání při opakovaných teplotních cyklech. Koberec je tepelným izolantem a výrazně snižuje účinnost topení.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Délka potrubí vychází z jednoduché geometrické úvahy. Představte si místnost rozdělenou na pásy široké právě tolik, kolik je rozteč trubek — každý pás obsahuje jeden průběh trubky po celé své délce. Počet pásů na metr šířky je 100 dělené roztečí v centimetrech, a protože každý pás má na metru čtverečním délku jeden metr, platí vzorec délka = plocha × 100 ÷ rozteč. Výsledek je v metrech, pokud plochu zadáte v metrech čtverečních a rozteč v centimetrech.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: ložnice 15 m² s roztečí 15 cm. Výpočet dá 15 × 100 ÷ 15 = 100 metrů trubky. Při zadaném výkonu 120 W/m² je instalovaný výkon 15 × 120 ÷ 1000 = 1,8 kW, protože druhý vzorec je výkon = plocha × výkon na m² ÷ 1000 a převádí watty na kilowatty. Stejná místnost se zahuštěnou roztečí 10 cm už potřebuje 150 metrů trubky — délka roste nepřímo s roztečí, zatímco plocha zůstává stejná.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Spočítaná délka je čistá délka topného pole. K ní se přičítá přívod od rozdělovače k místnosti v obou směrech, tedy dvojnásobek vzdálenosti, a přibližně jeden metr rezervy na každý okruh na zatáčky a napojení. Výslednou délku pak vydělte maximální délkou jednoho okruhu — u trubky 16×2 mm je to 80 až 100 metrů — a dostanete počet okruhů, které se na rozdělovači samostatně vyvažují.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Jeden příliš dlouhý okruh.</strong> Když se 180 metrů trubky napojí jako jedna smyčka, tlaková ztráta překročí možnosti čerpadla a konec okruhu zůstane vlažný. Plochu rozdělte na dva kratší, přibližně stejně dlouhé okruhy.</li>
            <li><strong>Trubky pod kuchyňskou linkou a vanou.</strong> Topné pole se pokládá jen do plochy, kterou chcete opravdu temperovat. Pod vestavěným nábytkem a vanou je teplo zbytečné, materiálově nákladné a nábytku škodí.</li>
            <li><strong>Chybějící dilatace a okrajový pás.</strong> Mazanina se při ohřevu roztahuje. Bez okrajové dilatační pásky u stěn a bez dilatační spáry u ploch nad 40 m² nebo delších než 8 metrů praská potěr i dlažba.</li>
            <li><strong>Zalití bez tlakové zkoušky.</strong> Potrubí se betonuje pod zkušebním tlakem a po protokolované tlakové zkoušce. Netěsnost objevená po zalití znamená rozbourání podlahy.</li>
            <li><strong>Vynechaný náběhový program.</strong> Nový potěr se po vyzrání musí nahřívat postupně podle plánu výrobce, zpravidla po 5 °C denně. Prudké zatopení vede k trhlinám.</li>
            <li><strong>Koberec nebo silná podložka na hotové topení.</strong> Každý milimetr izolace mezi trubkou a vzduchem snižuje výkon. Skladba se vybírá před pokládkou, ne až podle nábytku.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Trubka nebo kabel je jen část skladby. Bez následujících položek topení nefunguje nebo se nepřevezme:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Systémová deska nebo tepelná izolace</strong> s nopy či příložkami pro uchycení trubky, orientačně 250 až 500 Kč/m².</li>
            <li><strong>Rozdělovač se skříňkou</strong>, průtokoměry a odvzdušněním, podle počtu okruhů přibližně 6 000 až 15 000 Kč.</li>
            <li><strong>Směšovací sestava</strong> s čerpadlem a termostatickým ventilem, která drží teplotu topné vody na 35 až 40 °C, 8 000 až 18 000 Kč.</li>
            <li><strong>Regulace</strong> — prostorový termostat na každou zónu a servopohony na rozdělovači, 1 500 až 4 000 Kč za zónu.</li>
            <li><strong>Potěr s plastifikátorem</strong> pro podlahové topení, včetně dilatačních pásů a profilů, 250 až 450 Kč/m².</li>
            <li><strong>Okrajová dilatační páska</strong> po celém obvodu a dilatační profily v přechodech dveří.</li>
            <li><strong>U elektrického topení navíc</strong> podlahové čidlo v chráničce, krabice s rezervou pro výměnu čidla a proudový chránič 30 mA v rozvaděči.</li>
          </ul>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka slouží k odhadu materiálu a hrubé orientaci v nákladech. Samotný zásah do otopné soustavy ani do elektroinstalace si nedělejte sami: návrh musí vycházet z tepelných ztrát místnosti, elektrické topení patří pod proudový chránič 30 mA a po instalaci je povinná výchozí revize elektrického zařízení. U vodní soustavy nechte zpracovat protokol o tlakové zkoušce — je to podmínka záruky i podklad pro pojišťovnu, pokud se později objeví únik.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik metrů trubky potřebuji na 1 m² podlahového topení?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Délka potrubí na metr čtvereční se rovná jednomu metru dělenému roztečí v metrech. Při rozteči 15 cm to je 6,7 m na m², při rozteči 10 cm 10 m na m² a při rozteči 20 cm jen 5 m na m². Místnost 15 m² s roztečí 15 cm tedy spotřebuje přibližně 100 metrů trubky. K tomu připočtěte přívodní úsek od rozdělovače k místnosti, a to v obou směrech.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká rozteč trubek je pro podlahové topení správná?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Standardem pro obytné místnosti je rozteč 15 cm, která při teplotě topné vody 35 až 40 °C dává výkon kolem 80 až 120 W/m². V koupelnách a u prosklených stěn se zahušťuje na 10 cm, kde výkon vystoupá na 150 až 200 W/m². V chodbách a komorách naopak stačí 20 cm. Pod 10 cm se nejde kvůli omezené teplotě povrchu podlahy, která u obytných místností nesmí přesáhnout 29 °C.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak dlouhý smí být jeden okruh podlahového topení?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U trubky 16×2 mm se jeden okruh navrhuje na maximálně 80 až 100 metrů, u trubky 17×2 mm asi 110 metrů a u 20×2 mm až 120 metrů. Delší okruh má příliš velkou tlakovou ztrátu, čerpadlo jej neprotlačí a konec okruhu zůstane studený. Spočítanou celkovou délku proto vydělte touto hodnotou — výsledek je počet samostatných okruhů, které se napojí na rozdělovač.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká podlahová krytina je vhodná nad podlahové topení?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nejlépe vede teplo keramická dlažba a přírodní kámen, kde tepelný odpor je téměř nulový. Vinyl a SPC s označením pro podlahové topení jsou vhodné, u laminátu a dřeva musí celková skladba včetně podložky mít odpor do 0,15 m²K/W. Masivní dřevo nad 15 mm a koberec s vyšším vlasem se nedoporučují — koberec funguje jako izolace a sníží výkon topení i o polovinu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Musí podlahové topení zapojit odborník?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ano. Zásah do otopné soustavy i do elektroinstalace patří do rukou osoby s příslušnou odbornou kvalifikací. Elektrické podlahové topení musí být jištěno proudovým chráničem s reziduálním proudem 30 mA a po instalaci je nutná výchozí revize elektrického zařízení. U vodní soustavy se před zalitím betonem provádí tlaková zkouška s protokolem, který je podmínkou záruky výrobce i uznání případné škody pojišťovnou.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak ušetřit na vytápění", href: "/blog/usetrit-na-vytapeni", icon: "🔥" },
              { title: "Jak správně topit", href: "/blog/jak-spravne-topit", icon: "🌡️" },
              { title: "Kalkulačka tepelné izolace", href: "/kalkulacky/tepelna-izolace", icon: "💧" },
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
