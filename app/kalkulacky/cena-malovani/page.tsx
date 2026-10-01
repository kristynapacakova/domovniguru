import type { Metadata } from "next";
import Link from "next/link";
import CenaMalovaniCalculator from "@/app/components/CenaMalovaniCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka ceny malování 2026 – kolik stojí vymalovat byt?",
  description: "Kolik stojí vymalovat byt nebo dům? Zadej plochu stěn a cenu práce – celkový odhad nákladů na malování okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-malovani" },
  openGraph: { title: "Kalkulačka ceny malování 2026", description: "Kolik stojí vymalovat byt nebo dům? Zadej plochu stěn a cenu práce – celkový odhad nákladů na malování okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/cena-malovani", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20ceny%20malom%C3%A1n%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka ceny malování 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kolik stojí vymalovat byt 2+1?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Byt 2+1 má typicky 55–65 m² podlahové plochy, což odpovídá přibližně 110–150 m² stěn. Při sazbě 140–280 Kč/m² zaplatíte za práci malíře orientačně 18 000–38 000 Kč, materiál přidá dalších 5 000–13 000 Kč. Celkem tedy počítejte s 23 000–50 000 Kč podle regionu a standardu barev. Svépomocí se dostanete na cenu materiálu, tedy zhruba 5 000–13 000 Kč."
          }
        },
        {
          "@type": "Question",
          "name": "Je materiál zahrnutý v ceně od malíře?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Záleží na dohodě. Většina malířů nabízí cenu za m² samostatně za práci a materiál účtuje zvlášť podle skutečné spotřeby, případně s přirážkou 10–20 %. Někteří fakturují jednu sazbu včetně materiálu, pak bývá 220–380 Kč/m². Vždy si nechte napsat do nabídky, zda cena obsahuje penetraci, tmelení, zakrytí nábytku a úklid – právě tyto položky bývají zdrojem dodatečných nákladů."
          }
        },
        {
          "@type": "Question",
          "name": "Kolik stojí malování za metr čtvereční v roce 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Za práci se v Praze a Brně platí 200–280 Kč/m² stěn, v menších městech a na venkově 140–200 Kč/m². Materiál vychází na 40–60 Kč/m² u ekonomických barev, 70–100 Kč/m² u střední třídy a 150–250 Kč/m² u prémiových odstínů. Celková cena včetně materiálu se tak nejčastěji pohybuje mezi 190 a 400 Kč/m² stěn."
          }
        },
        {
          "@type": "Question",
          "name": "Vyplatí se malovat svépomocí?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "U jednoho pokoje s rovnými stěnami a výškou do 2,8 m se svépomoc vyplatí téměř vždy – ušetříte 60–70 % celkové ceny. U celého bytu, vysokých stropů, členitých stěn nebo při přechodu z tmavé barvy na světlou roste riziko nerovnoměrného nátěru a potřeba lešení, takže rozdíl v ceně rychle vyváží čas a případné opravy. Zkušený kutil zvládne 10–15 m²/h, začátečník 5–8 m²/h."
          }
        },
        {
          "@type": "Question",
          "name": "Účtuje se malování podle plochy stěn, nebo podle podlahové plochy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standardem v ČR je cena za m² malované plochy, tedy stěn a případně stropu, nikoli za m² podlahy. Plochu stěn spočítáte jako obvod pokoje krát výška stropu. U běžného bytu odpovídá přibližně 1,8–2,5násobku podlahové plochy. Pokud vám někdo nabízí cenu za m² podlahy, ověřte si, jakým přepočtem k ní došel – u vysokých stropů bývá taková nabídka výrazně nadhodnocená."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz/" },
        { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
        { "@type": "ListItem", "position": 3, "name": "Cena malování", "item": "https://www.domovniguru.cz/kalkulacky/cena-malovani" }
      ]
    }
  ]
};

export default function CenaMalovaniPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena malování</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí vymalovat byt nebo dům?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu stěn, cenu práce a materiálu — kalkulačka ti okamžitě odhadne celkové náklady na malování v korunách.</p>

        <CenaMalovaniCalculator />
        <AffiliateCTA merchant="naradi" text="Vybavit se na malování" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Ceny malování v ČR – orientační přehled 2026</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Ceny malování v České republice se liší podle regionu, složitosti práce a standardu použitých materiálů. V Praze a Brně se cena práce zkušeného malíře pohybuje 200–280 Kč/m² stěn, v krajích mimo velká města 140–200 Kč/m². Tato sazba obvykle zahrnuje přípravu povrchu (lehké broušení, přetmelení menších trhlin), penetraci a dva nátěry latexovou barvou. Přihnojení rohu, malování na výšku přes 3 m (potřeba pojízdného lešení) nebo přechod z tmavé barvy na světlou (3 nátěry místo 2) zdražují práci o 20–40 %.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Materiálové náklady závisí na kvalitě použitých produktů. Ekonomická varianta (tuzemská barva, penetrace): 40–60 Kč/m². Střední třída (Primalex, Sokrates, Dulux): 70–100 Kč/m². Prémium (Farrow & Ball, Little Greene, speciální fasádní barvy): 150–250 Kč/m². Do kalkulace zahrňte i spotřebu penetrace (30–50 Kč/m²), folii na zakrytí podlah, malířskou pásku a případné tmelení trhlin. Pro typický 3+1 byt s 80 m² stěn vychází materiál na 4 000–8 000 Kč.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Svépomocné malování stojí pouze cenu materiálu — práce je &quot;zdarma&quot;. Ale počítejte s časem: zkušený kutile maluje 10–15 m²/hodinu, začátečník 5–8 m²/hodinu. Byt 60 m² (100 m² stěn) tak kutila zaměstná na víkend. Profesionální malíř totéž zvládne za 1 pracovní den. Čas strávený malováním mimo svůj byt (nájem, hotel) pak snižuje ekonomický přínos svépomocné práce. Pokud chystáte malování při stěhování nebo rekonstrukci, zvažte i náklady na přechodné bydlení.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka počítá podle jednoduchého vzorce: <strong>celková cena = plocha stěn × (cena práce za m² + cena materiálu za m²)</strong>. Klíčový vstup je plocha stěn, ne podlahová plocha. Získáte ji tak, že sečtete délky všech stěn v pokoji (obvod) a vynásobíte je výškou stropu. Pokoj 4 × 5 m s výškou 2,6 m má obvod 18 m, tedy 18 × 2,6 = 46,8 m² stěn. U běžného českého bytu vychází plocha stěn přibližně na 1,8–2,5násobek podlahové plochy — čím menší a členitější pokoje, tím vyšší násobek.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Okna a dveře se v praxi odečítají jen tehdy, když jejich souhrnná plocha přesahuje asi 10 % plochy stěn. Důvod je prozaický: kolem otvorů se pracuje pomaleji, je potřeba pečlivě vylepit pásku a dotáhnout rohy, takže ušetřený nátěr se vyrovná s vyšší pracností. Standardní okno 150 × 150 cm má 2,25 m², dveře 2 × 0,8 m mají 1,6 m². Pokud máte v obýváku prosklenou stěnu nebo balkonové dveře, odečtení se už vyplatí.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Strop se počítá zvlášť a účtuje se obvykle se přirážkou 10–30 % proti stěnám, protože se maluje nad hlavou z lešení nebo štaflí. Jeho plocha je rovna podlahové ploše. Výsledek kalkulačky berte jako orientační rozpočet, od kterého se budete odrážet při porovnávání nabídek — konečná cena závisí na stavu podkladu, počtu nátěrů a tom, kolik přípravných prací si uděláte sami.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Většina rozpočtů na malování se nerozpadne kvůli ceně barvy, ale kvůli položkám, se kterými nikdo nepočítal. Tyto body podceňuje v praxi téměř každý:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Počítání podle podlahové plochy.</strong> Nabídka „200 Kč/m²“ u bytu 60 m² může znamenat 12 000 Kč, nebo 24 000 Kč — podle toho, zda jde o podlahu, nebo o stěny. Vždy se ptejte, z jakého čísla cena vychází.</li>
            <li><strong>Přechod z tmavé na světlou.</strong> Tmavě modrá nebo červená stěna potřebuje tři, někdy čtyři nátěry. To znamená o 50–100 % více barvy i práce. Pomůže krycí bílá penetrace nebo barva s vyšší krycí schopností.</li>
            <li><strong>Vynechaná penetrace.</strong> Ušetříte 30–50 Kč/m² na penetraci, ale savá omítka pohltí o 20–40 % více barvy — tedy obvykle více, než jste ušetřili, a výsledek bude nerovnoměrný.</li>
            <li><strong>Nezahrnuté přípravné práce.</strong> Tmelení prasklin, přebroušení starého nátěru, odstranění tapet nebo odmaštění stěn v kuchyni jsou samostatné položky. Odstranění tapet se účtuje běžně 60–120 Kč/m².</li>
            <li><strong>Nákup barvy po litrech „na doraz“.</strong> Barva z různých šarží se může odstínem mírně lišit. Kupte raději o 10–15 % více v jedné dodávce a zbytek si nechte na pozdější opravy.</li>
            <li><strong>Zapomenutý úklid a likvidace.</strong> Krycí fólie, pásky, zbytky barvy a čištění po práci představují u celého bytu reálně 500–1 500 Kč a několik hodin času.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pokud malujete svépomocí, k barvě si připravte ještě tento seznam. U prvního malování se vybavení vyplatí koupit v základní kvalitě — levný váleček pouští vlákna do nátěru a škodí víc, než ušetří.
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Váleček a teleskopická tyč</strong> — váleček 25 cm s výškou vlasu 10–12 mm pro hladké stěny, 18 mm na hrubší omítky (250–600 Kč), tyč 1,5–3 m za 200–500 Kč.</li>
            <li><strong>Malířská mřížka a vanička</strong> — bez nich váleček nabere příliš barvy a bude kapat (150–350 Kč).</li>
            <li><strong>Štětec plochý 5–6 cm</strong> na rohy, lišty a okolí vypínačů (100–250 Kč).</li>
            <li><strong>Penetrace</strong> — 30–50 Kč/m², u nových sádrových omítek počítejte s dvěma vrstvami. Spotřebu snadno dopočítáte v naší kalkulačce penetrace.</li>
            <li><strong>Malířská páska a krycí fólie</strong> — kvalitní páska s měkkým okrajem 80–150 Kč/role, fólie s páskou na okna 100–200 Kč, zakrývací plachta na podlahu 150–400 Kč.</li>
            <li><strong>Tmel a stěrka na opravy</strong> — sádrový tmel na díry po hmoždinkách a praskliny, hladítko, brusná houbička P120–P150 (dohromady 300–700 Kč).</li>
            <li><strong>Štafle nebo pojízdné lešení</strong> — u stropů a výšek nad 3 m je lešení bezpečnější a rychlejší; půjčovna stojí 200–400 Kč/den.</li>
            <li><strong>Ochranné pomůcky</strong> — čepice, brýle při malování stropu, respirátor při broušení tmelu.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí vymalovat byt 2+1?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Byt 2+1 má typicky 55–65 m² podlahové plochy, což odpovídá přibližně 110–150 m² stěn. Při sazbě 140–280 Kč/m² zaplatíte za práci malíře orientačně 18 000–38 000 Kč, materiál přidá dalších 5 000–13 000 Kč. Celkem tedy počítejte s 23 000–50 000 Kč podle regionu a standardu barev. Svépomocí se dostanete na cenu materiálu, tedy zhruba 5 000–13 000 Kč.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Je materiál zahrnutý v ceně od malíře?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Záleží na dohodě. Většina malířů nabízí cenu za m² samostatně za práci a materiál účtuje zvlášť podle skutečné spotřeby, případně s přirážkou 10–20 %. Někteří fakturují jednu sazbu včetně materiálu, pak bývá 220–380 Kč/m². Vždy si nechte napsat do nabídky, zda cena obsahuje penetraci, tmelení, zakrytí nábytku a úklid — právě tyto položky bývají zdrojem dodatečných nákladů.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí malování za metr čtvereční v roce 2026?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Za práci se v Praze a Brně platí 200–280 Kč/m² stěn, v menších městech a na venkově 140–200 Kč/m². Materiál vychází na 40–60 Kč/m² u ekonomických barev, 70–100 Kč/m² u střední třídy a 150–250 Kč/m² u prémiových odstínů. Celková cena včetně materiálu se tak nejčastěji pohybuje mezi 190 a 400 Kč/m² stěn.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Vyplatí se malovat svépomocí?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              U jednoho pokoje s rovnými stěnami a výškou do 2,8 m se svépomoc vyplatí téměř vždy — ušetříte 60–70 % celkové ceny. U celého bytu, vysokých stropů, členitých stěn nebo při přechodu z tmavé barvy na světlou roste riziko nerovnoměrného nátěru a potřeba lešení, takže rozdíl v ceně rychle vyváží čas a případné opravy. Zkušený kutil zvládne 10–15 m²/h, začátečník 5–8 m²/h.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Účtuje se malování podle plochy stěn, nebo podle podlahové plochy?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Standardem v ČR je cena za m² malované plochy, tedy stěn a případně stropu, nikoli za m² podlahy. Plochu stěn spočítáte jako obvod pokoje krát výška stropu. U běžného bytu odpovídá přibližně 1,8–2,5násobku podlahové plochy. Pokud vám někdo nabízí cenu za m² podlahy, ověřte si, jakým přepočtem k ní došel — u vysokých stropů bývá taková nabídka výrazně nadhodnocená.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Kalkulačka barvy na zeď", href: "/kalkulacky/kolik-barvy", icon: "🪣" },
              { title: "Kalkulačka penetrace", href: "/kalkulacky/kolik-primeru", icon: "🪣" },
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
