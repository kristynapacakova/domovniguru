// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-tapet/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import TapetyCalculator from "@/app/components/TapetyCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka tapet – kolik rolí potřebuju",
  description: "Spočítej počet rolí tapet včetně odpadu na vzor (raport). Zadej obvod místnosti, výšku a rozměry role – výsledek okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-tapet" },
  openGraph: { title: "Kalkulačka tapet 2026", description: "Počet rolí tapet s raportem vzoru. Výsledek okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-tapet", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20tapet%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka tapet 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik rolí tapet potřebuji na běžný pokoj?", "acceptedAnswer": { "@type": "Answer", "text": "Pokoj o obvodu 14 metrů a výšce stropů 2,6 metru vyžaduje 27 pásů tapety. Z role standardních rozměrů 0,53 × 10,05 metru vyjdou při hladké tapetě tři pásy, takže potřebujete 9 rolí. U vzorované tapety s velkým raportem vyjdou z role jen dva pásy a počet rolí stoupne na 14, tedy o více než polovinu." } },
      { "@type": "Question", "name": "Co je raport vzoru a jak zvyšuje spotřebu tapet?", "acceptedAnswer": { "@type": "Answer", "text": "Raport je vzdálenost, po které se vzor na tapetě opakuje. Každý pás musí začínat na stejném místě vzoru, takže jeho délka se zaokrouhluje nahoru na celý násobek raportu. Při výšce stropu 2,6 metru a raportu 1,2 metru je potřeba pás dlouhý 3,6 metru a jeden metr z každého pásu končí v odpadu. Čím větší raport, tím méně pásů z role a tím více rolí celkem." } },
      { "@type": "Question", "name": "Odečítá kalkulačka okna a dveře?", "acceptedAnswer": { "@type": "Answer", "text": "Počet pásů se počítá z celého obvodu místnosti, otvory se od něj neodečítají — výsledek tak v sobě nese přirozenou rezervu na poškozené pásy a na navazování v rozích. Zadaná okna a dveře ovlivňují jen informativní údaj o ploše stěn, kde se každý otvor odečítá jako 1,8 m². U velké prosklené stěny nebo francouzských dveří si můžete jeden až dva pásy odečíst ručně." } },
      { "@type": "Question", "name": "Proč musí být všechny role ze stejné šarže?", "acceptedAnswer": { "@type": "Answer", "text": "Tisk tapet je analogový proces a každá výrobní série má mírně odlišnou sytost barev. V obchodě rozdíl nepoznáte, ale dvě role z různých šarží nalepené vedle sebe vytvoří na stěně viditelný přechod. Číslo šarže je vytištěné na etiketě každé role, proto kupujte celé množství najednou a jednu roli si nechte v rezervě na pozdější opravy." } },
      { "@type": "Question", "name": "Vlies nebo papírová tapeta — co se lepí snáz?", "acceptedAnswer": { "@type": "Answer", "text": "Vliesová tapeta je pro kutila jednodušší: lepidlo se nanáší na zeď, tapeta se nenamáčí, nerozpíná se a dá se po stěně ještě posunout. Papírová tapeta se musí natřít lepidlem, nechat prosáknout a při schnutí se stahuje, takže spoje se snáz rozevřou. Vinylová tapeta na vliesovém nosiči je navíc omyvatelná a vhodná do kuchyně." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik tapet", "item": "https://www.domovniguru.cz/kalkulacky/kolik-tapet" }
    ]
  }]
};

export default function KolikTapetPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik tapet</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik tapet potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej obvod místnosti, výšku a rozměry role — kalkulačka počítá správně i s opakováním vzoru (raport).</p>

        <TapetyCalculator />
        <AffiliateCTA merchant="bonami" text="Vybrat tapety a dekorace" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Raport vzoru a šarže – dvě věci které rozhodují o výsledku</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Raport (anglicky pattern repeat) je vzdálenost po které se vzor na tapetě opakuje. U hladkých tapet je raport 0 — každý pás navazuje přesně na předchozí bez odpadu. U vzorované tapety s raportem 32 cm musíš každý pás začínat na stejném místě vzoru, aby linie navazovaly. To znamená, že z každého pásu vyhodíš průměrně půl raportu na horní části — při raportu 32 cm a výšce místnosti 260 cm potřebuješ pás 292 cm místo 260 cm, a z role 10 m dostaneš 3 pásy místo 3,8. Výsledek: potřebuješ o 20–30 % více rolí než u hladkých tapet.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Šarže (lot number, batch number) je identifikátor výrobní série — tisk tapet je analogový proces a každá nová série má mírně odlišné sytosti barev. Tapety z různých šarží mohou být nerozeznatelné v obchodě, ale po nalepení na zeď vedle sebe budou rozdíly viditelné. Proto: vždy kupuj všechny role najednou a zkontroluj, že mají stejné číslo šarže na etiketě. Zbývající role vždy uschovej — pro případné opravy nebo doslepení poškozených míst.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Lepení začínej od největší okna nebo dveří a pokračuj k rohům — tak budou případné nepřesnosti v rozích méně nápadné. Rohem nikdy neprojede celý pás, vždy se musí stříhat a překrývat nebo nařezat do úhlu. Přebytek lepidla okamžitě otírej mokrým hadříkem — zaschlé lepidlo je na tapetě viditelné jako lesklé skvrny.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tapety se nepočítají podle plochy, ale podle pásů. Kalkulačka proto postupuje ve čtyřech krocích. Nejdřív zjistí, kolik pásů je potřeba: obvod místnosti vydělí šířkou role a zaokrouhlí nahoru. Pak určí potřebnou délku jednoho pásu — u hladké tapety je rovna výšce stropu, u vzorované se zaokrouhlí nahoru na celý násobek raportu. Z délky role spočítá, kolik celých pásů se z ní dá uříznout (zbytek se nepočítá), a nakonec vydělí počet potřebných pásů počtem pásů z jedné role a výsledek zaokrouhlí nahoru.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            S výchozími hodnotami to vypadá takto: obvod 14 m dělený šířkou role 0,53 m dává 26,4, tedy 27 pásů. Hladká tapeta bez raportu znamená pás dlouhý 2,6 m, z role 10,05 m vyjdou tři takové pásy a zbyde 2,25 m, které už na celý pás nestačí. Dvacet sedm pásů dělených třemi dává přesně 9 rolí. Změňte raport na 1,2 m a pás musí mít 3,6 m — z role pak vyjdou jen dva pásy a potřeba vyskočí na 14 rolí.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě věci je dobré o tomto výpočtu vědět. První: počet pásů se počítá z celého obvodu a okna ani dveře se od něj neodečítají, protože nad otvory i pod nimi se obvykle lepí zkrácené pásy a odřezky se stejně nevyužijí. Zadaná okna a dveře proto ovlivní jen informativní údaj o ploše stěn, kde se každý otvor odečítá jako 1,8 m². Druhá: zbytek role se nikam nepřevádí. Právě proto se vyplatí zkontrolovat, jaké délky rolí jsou u vybraného dekoru k dispozici — role 15 m místo 10,05 m dá při výšce 2,6 m pět pásů místo tří a sníží odpad ze 22 na pouhá 4 procenta.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Nechat raport na nule u vzorované tapety.</strong> Nejdražší chyba v celém výpočtu. Hodnota raportu je na etiketě role, obvykle jako číslo v centimetrech vedle symbolu dvou posunutých šipek.</li>
            <li><strong>Zadat do obvodu plochu místnosti.</strong> Kalkulačka chce součet délek všech stěn, tedy u pokoje 4 × 3 m hodnotu 14, ne 12.</li>
            <li><strong>Kupovat přesně vypočtený počet rolí.</strong> Jeden pás se skoro vždy poškodí nebo špatně usekne. Jedna role navíc ze stejné šarže je nejlevnější pojistka, jakou si můžete koupit.</li>
            <li><strong>Nekontrolovat šarži u dodatečné objednávky.</strong> Doplněná role z jiné série bude na stěně viditelná, i když v ruce rozdíl nepoznáte.</li>
            <li><strong>Použít nesprávné lepidlo.</strong> Vliesová tapeta se lepí lepidlem naneseným na zeď, papírová se lepidlem natírá a musí prosáknout. Záměna končí odchlípnutými spoji.</li>
            <li><strong>Lepit na nepřipravený podklad.</strong> Savá, prášivá nebo čerstvě stěrkovaná stěna potřebuje penetraci. Na tmavý podklad pod světlou tapetou prosvítá stará barva, proto se stěna přetírá bílou.</li>
            <li><strong>Protáhnout pás rohem.</strong> Žádný roh není dokonale svislý. Pás se v rohu zařízne s přesahem 1–2 cm a navazující se lepí na novou svislici.</li>
            <li><strong>Nastříhat všechny pásy dopředu.</strong> U vzoru se stříhá jen o jeden pás dopředu, s kontrolou navázání.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tapetování je na nářadí nenáročné, ale bez několika specifických pomůcek se čistý spoj udělat nedá. Orientační ceny podle běžné nabídky:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Lepidlo na tapety</strong> — 100 až 250 Kč za balení, které vystačí na 5 až 8 rolí. Vždy v provedení odpovídajícím nosiči tapety (vlies, papír, textil).</li>
            <li><strong>Váleček nebo štětka na lepidlo</strong> — 150 až 300 Kč. U vliesu se lepidlo roztírá na zeď v šířce pásu plus pár centimetrů.</li>
            <li><strong>Tapetovací stěrka nebo kartáč</strong> — 80 až 200 Kč. Vytlačuje vzduch od středu pásu k okrajům, na jemné dekory měkký kartáč.</li>
            <li><strong>Přítlačný váleček na spoje</strong> — 100 až 200 Kč. Bez něj se hrany pásů po zaschnutí rozevřou.</li>
            <li><strong>Tapetovací nůž s lámacími břity a široká špachtle jako příložník</strong> — 200 až 450 Kč. Břit se láme po každém druhém řezu, tupý nůž tapetu trhá.</li>
            <li><strong>Laser nebo olovnice</strong> — 300 až 900 Kč. První pás musí být přesně svislý, jinak se chyba kumuluje.</li>
            <li><strong>Penetrace</strong> — 300 až 600 Kč za 5litrový koncentrát. Sjednotí savost stěny a umožní tapetu později odstranit bez vytrhání omítky.</li>
            <li><strong>Houba, kbelík a hadry</strong> — do 200 Kč na okamžité setření přebytečného lepidla.</li>
            <li><strong>Tapety samotné</strong> — vliesová role 400 až 1 500 Kč, designová nebo textilní od 2 000 Kč za roli.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik rolí tapet potřebuji na běžný pokoj?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Pokoj o obvodu 14 metrů a výšce stropů 2,6 metru vyžaduje 27 pásů tapety. Z role standardních rozměrů 0,53 × 10,05 metru vyjdou při hladké tapetě tři pásy, takže potřebujete 9 rolí. U vzorované tapety s velkým raportem vyjdou z role jen dva pásy a počet rolí stoupne na 14, tedy o více než polovinu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Co je raport vzoru a jak zvyšuje spotřebu tapet?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Raport je vzdálenost, po které se vzor na tapetě opakuje. Každý pás musí začínat na stejném místě vzoru, takže jeho délka se zaokrouhluje nahoru na celý násobek raportu. Při výšce stropu 2,6 metru a raportu 1,2 metru je potřeba pás dlouhý 3,6 metru a jeden metr z každého pásu končí v odpadu. Čím větší raport, tím méně pásů z role a tím více rolí celkem.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Odečítá kalkulačka okna a dveře?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Počet pásů se počítá z celého obvodu místnosti, otvory se od něj neodečítají — výsledek tak v sobě nese přirozenou rezervu na poškozené pásy a na navazování v rozích. Zadaná okna a dveře ovlivňují jen informativní údaj o ploše stěn, kde se každý otvor odečítá jako 1,8 m². U velké prosklené stěny nebo francouzských dveří si můžete jeden až dva pásy odečíst ručně.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč musí být všechny role ze stejné šarže?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Tisk tapet je analogový proces a každá výrobní série má mírně odlišnou sytost barev. V obchodě rozdíl nepoznáte, ale dvě role z různých šarží nalepené vedle sebe vytvoří na stěně viditelný přechod. Číslo šarže je vytištěné na etiketě každé role, proto kupujte celé množství najednou a jednu roli si nechte v rezervě na pozdější opravy.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Vlies nebo papírová tapeta — co se lepí snáz?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Vliesová tapeta je pro kutila jednodušší: lepidlo se nanáší na zeď, tapeta se nenamáčí, nerozpíná se a dá se po stěně ještě posunout. Papírová tapeta se musí natřít lepidlem, nechat prosáknout a při schnutí se stahuje, takže spoje se snáz rozevřou. Vinylová tapeta na vliesovém nosiči je navíc omyvatelná a vhodná do kuchyně.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Tapety vs. barva – co se vyplatí víc?", href: "/blog/tapety-vs-barva", icon: "🖼️" },
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Jak vybrat barvu na zeď", href: "/blog/jak-vybrat-barvu-na-zed", icon: "🎨" },
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
