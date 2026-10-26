import type { Metadata } from "next";
import Link from "next/link";
import RecKoupelnyCalculator from "@/app/components/RecKoupelnyCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka rekonstrukce koupelny 2026 – kolik stojí přestavba?",
  description: "Kolik stojí rekonstrukce koupelny? Zadej plochu a standard – orientační odhad nákladů okamžitě. Ekonomická 15 000, prémiová 40 000 Kč/m².",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-rekonstrukce-koupelny-odhad" },
  openGraph: { title: "Kalkulačka rekonstrukce koupelny 2026", description: "Kolik stojí rekonstrukce koupelny? Zadej plochu a standard – orientační odhad nákladů okamžitě. Ekonomická 15 000, prémiová 40 000 Kč/m².", url: "https://www.domovniguru.cz/kalkulacky/cena-rekonstrukce-koupelny-odhad", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20rekonstrukce%20koupelny%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka rekonstrukce koupelny 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik stojí rekonstrukce koupelny 6 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Při středním standardu 25 000 Kč/m² vychází koupelna 6 m² na 150 000 Kč, po připočtení záchodové mísy na 170 000 Kč. Kalkulačka k tomu uvádí rozsah 145 000 až 196 000 Kč, protože počítá s odchylkou patnácti procent v obou směrech. V ekonomickém standardu 15 000 Kč/m² by stejná koupelna stála kolem 102 000 Kč, v prémiovém kolem 272 000 Kč." } },
      { "@type": "Question", "name": "Co je v ceně za metr čtvereční zahrnuto?", "acceptedAnswer": { "@type": "Answer", "text": "Cena za metr čtvereční zahrnuje bourací práce a odvoz suti, nové rozvody vody a odpadů, elektroinstalaci, hydroizolaci, obklady a dlažbu včetně lepidla a spárovací hmoty, sanitu a základní vybavení. Nezahrnuje návrh od architekta, nadstandardní materiály, přesun stoupacího potrubí ani řešení složitých dispozic. Právě tyto položky bývají důvodem, proč se reálná cena vyšplhá nad odhad." } },
      { "@type": "Question", "name": "Proč malá koupelna nevyjde výrazně levněji než velká?", "acceptedAnswer": { "@type": "Answer", "text": "Velká část rozpočtu nezávisí na ploše. Rozvody vody a odpadů, instalace sprchy, vany, umyvadla a záchodu, elektrický okruh i přesuny pracovníků na stavbu stojí v koupelně o čtyřech metrech skoro totéž jako v sedmimetrové. Proto se cena za metr čtvereční u malých koupelen zvyšuje a v menších místnostech se vyplatí zadat do kalkulačky vyšší částku na metr." } },
      { "@type": "Question", "name": "Jak dlouho rekonstrukce koupelny trvá?", "acceptedAnswer": { "@type": "Answer", "text": "U běžné koupelny v bytě počítejte se třemi až pěti týdny. Bourání a odvoz suti zaberou dva až tři dny, rozvody a elektroinstalace tři až pět dnů, pak následuje hydroizolace a technologická přestávka. Obkládání trvá čtyři až sedm dnů, spárování a montáž sanity dalších pár dnů. Zpoždění nejčastěji způsobí nedodaná dlažba nebo sanita, takže materiál mějte na místě před začátkem." } },
      { "@type": "Question", "name": "Kolik řemeslníků má nacenit a jak se chránit v ceně?", "acceptedAnswer": { "@type": "Answer", "text": "Nechte si nacenit alespoň tři dodavatele a porovnávejte položkové rozpočty, ne jen celkovou částku — jinak nepoznáte, co v nabídce chybí. Ve smlouvě trvejte na popisu prací, platebním harmonogramu podle dokončených etap, pevné ceně s podmínkami pro vícenáklady a záruce nejméně 36 měsíců. Zálohu nikdy neplaťte v plné výši předem, obvyklá první záloha pokrývá materiál." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Cena rekonstrukce koupelny", "item": "https://www.domovniguru.cz/kalkulacky/cena-rekonstrukce-koupelny-odhad" }
    ]
  }]
};

export default function CenaRekonstrukceKoupelnyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena rekonstrukce koupelny</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí rekonstrukce koupelny?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu koupelny a standard rekonstrukce — kalkulačka ti okamžitě odhadne orientační náklady od základní až po prémium provedení.</p>

        <RecKoupelnyCalculator />
        <AffiliateCTA merchant="bonami" text="Vybavit koupelnu" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Orientační ceny rekonstrukce koupelny v ČR 2026</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rekonstrukce koupelny patří k nejnákladnějším stavebním pracím v bytě, protože zahrnuje bourací práce, rozvody vody a kanalizace, elektroinstalaci, obklady a dlažby, sanitu a vybavení. Ekonomická rekonstrukce (dlaždičky střední třídy, standardní sanita, tuzemský řemeslník) vychází na 12 000–18 000 Kč/m². Střední standard (italská nebo španělská dlažba, design umyvadlo, sprchový kout se závěsnou toaletou) stojí 20 000–30 000 Kč/m². Prémiová rekonstrukce (přírodní kámen, volně stojící vana, přiznaný beton, designová armatura Hansgrohe nebo Grohe) přesahuje 35 000–50 000 Kč/m². Průměrná koupelna v ČR má 4–7 m².
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Největší položkou v rozpočtu bývá instalatérská práce a materiál (rozvody, topný žebřík, sanita) — typicky 35–45 % celkových nákladů. Obklady a dlažba tvoří 20–30 % nákladů a jsou zároveň největší volbou designu. Malá koupelna 4 m² může mít stejnou cenu jako větší 7 m², pokud má složitější dispozici nebo luxusnější materiály. Na ceně se projevuje i stav stávajících rozvodů — v panelovém domě ze 70. let se téměř vždy mění celá rozvod studené a teplé vody.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Pro získání realistické nabídky doporučujeme nechat si nacenit alespoň 3 řemeslníky. Cenové rozsahy jsou v ČR velké — v Praze zaplatíte o 20–40 % více než v krajích. Při výběru řemeslníka nerozhoduje jen cena, ale i reference, ukázky předchozích prací a ochota komunikovat o detailech. Vždy si sjednávejte smlouvu s popisem prací, platebním harmonogramem (nikdy ne 100 % zálohou) a zárukou min. 36 měsíců na skryté vady.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Odhad vychází z nákladů na metr čtvereční, které se vynásobí plochou koupelny. K tomuto základu se přidává příplatek za záchodovou mísu, pokud ji v kalkulačce zapnete — ten je stanoven jako 0,8násobek ceny za metr čtvereční, protože instalace závěsného záchodu s předstěnovým modulem a napojením odpadu stojí přibližně stejně jako zhotovení jednoho metru čtverečního koupelny ve vybraném standardu. Součet obou položek je středním odhadem, který se nakonec zaokrouhlí na celé tisíce.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kolem středního odhadu se dopočítá rozsah od a do: dolní hranice je 85 procent střední hodnoty, horní 115 procent. Tato patnáctiprocentní odchylka v obou směrech odpovídá tomu, jak se v praxi rozcházejí nabídky různých dodavatelů na stejný rozsah prací. Výsledek proto nečtěte jako jedno číslo, ale jako interval — a za realistickou cenu považujte spíše jeho horní polovinu, pokud rekonstruujete starší byt.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: koupelna 6 m² ve středním standardu 25 000 Kč/m² se záchodovou mísou. Základ je 6 × 25 000 = 150 000 Kč, příplatek za záchod 25 000 × 0,8 = 20 000 Kč, střední odhad tedy 170 000 Kč. Rozsah vychází na 145 000 až 196 000 Kč. Stejná koupelna v ekonomickém standardu 15 000 Kč/m² by stála kolem 102 000 Kč a v prémiovém standardu 40 000 Kč/m² přibližně 272 000 Kč. Rozdíl mezi nejnižší a nejvyšší variantou je tedy téměř trojnásobný a rozhoduje o něm především volba materiálů.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Rozpočet bez rezervy.</strong> Ve starším bytě se po vybourání téměř vždy objeví něco navíc — zkorodované stoupačky, vlhké zdivo, chybějící hydroizolace. Patnáct až dvacet procent rezervy není luxus, ale podmínka dokončení.</li>
            <li><strong>Srovnávání nabídek podle jednoho čísla.</strong> Nejnižší nabídka bývá nejnižší proto, že v ní něco chybí. Porovnávejte položkové rozpočty a kontrolujte, zda je v nich odvoz suti, hydroizolace a osazení sanity.</li>
            <li><strong>Vysoká záloha předem.</strong> Zálohu plaťte na materiál, dál plaťte po dokončených etapách. Sto procent zaplacených dopředu znamená, že na dodavatele nemáte žádnou páku.</li>
            <li><strong>Výběr obkladů až v průběhu prací.</strong> Dodací lhůty u dlažby bývají týdny. Pokud materiál není na stavbě před bouráním, stavba stojí a náklady na prostoje rostou.</li>
            <li><strong>Vynechaná hydroizolace.</strong> Stěrková hydroizolace pod obklad ve sprše a na podlaze stojí jen pár tisíc, ale její chybění znamená po letech vlhkost u sousedů a kompletní předělání.</li>
            <li><strong>Přesun odpadu bez kontroly spádu.</strong> Umyvadlo nebo záchod přesunutý o dva metry potřebuje dostatečný spád odpadu. Řešení přes zvýšení podlahy nebo kalové čerpadlo výrazně navyšuje rozpočet.</li>
            <li><strong>Žádné revize a protokoly.</strong> Výchozí revize elektroinstalace a protokol o tlakové zkoušce vody jsou podkladem pro záruku i pro pojišťovnu, pokud se objeví škoda.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Na co v rozpočtu nezapomenout</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Položky, které z odhadu na metr čtvereční obvykle vypadnou a v rozpočtu se pak projeví jako vícenáklady:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Odvoz a likvidace suti</strong> — kontejner na stavební odpad 3 500 až 7 000 Kč, u bytu bez výtahu připočtěte vynesení.</li>
            <li><strong>Výměna stoupaček</strong> v panelovém domě 15 000 až 35 000 Kč, obvykle po dohodě se společenstvím vlastníků.</li>
            <li><strong>Předstěnový modul a závěsný záchod</strong> s tlačítkem 7 000 až 20 000 Kč, u podomítkové baterie dalších 5 000 až 15 000 Kč.</li>
            <li><strong>Topný žebřík</strong> 3 000 až 12 000 Kč, s elektrickou patronou nebo kombinovaným provozem na horní hranici.</li>
            <li><strong>Elektrické podlahové topení</strong> pod dlažbu 1 500 až 3 000 Kč/m² včetně termostatu.</li>
            <li><strong>Hydroizolační stěrka a těsnicí pásy</strong> 500 až 1 200 Kč/m² — nejlepší investice v celé koupelně.</li>
            <li><strong>Ventilátor s doběhem nebo čidlem vlhkosti</strong> 1 500 až 6 000 Kč, bez odvětrání se v koupelně drží plíseň.</li>
            <li><strong>Dveře, zárubeň a prahová lišta</strong> 4 000 až 15 000 Kč — po změně výšky podlahy je výměna často nevyhnutelná.</li>
            <li><strong>Nábytek, zrcadlo s osvětlením a doplňky</strong> 10 000 až 50 000 Kč, položka, na kterou v rozpočtu bývá nejméně místa.</li>
            <li><strong>Rezerva 15 až 20 procent</strong> z celkové částky na skryté vady a změny v průběhu realizace.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí rekonstrukce koupelny 6 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při středním standardu 25 000 Kč/m² vychází koupelna 6 m² na 150 000 Kč, po připočtení záchodové mísy na 170 000 Kč. Kalkulačka k tomu uvádí rozsah 145 000 až 196 000 Kč, protože počítá s odchylkou patnácti procent v obou směrech. V ekonomickém standardu 15 000 Kč/m² by stejná koupelna stála kolem 102 000 Kč, v prémiovém kolem 272 000 Kč.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Co je v ceně za metr čtvereční zahrnuto?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Cena za metr čtvereční zahrnuje bourací práce a odvoz suti, nové rozvody vody a odpadů, elektroinstalaci, hydroizolaci, obklady a dlažbu včetně lepidla a spárovací hmoty, sanitu a základní vybavení. Nezahrnuje návrh od architekta, nadstandardní materiály, přesun stoupacího potrubí ani řešení složitých dispozic. Právě tyto položky bývají důvodem, proč se reálná cena vyšplhá nad odhad.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč malá koupelna nevyjde výrazně levněji než velká?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Velká část rozpočtu nezávisí na ploše. Rozvody vody a odpadů, instalace sprchy, vany, umyvadla a záchodu, elektrický okruh i přesuny pracovníků na stavbu stojí v koupelně o čtyřech metrech skoro totéž jako v sedmimetrové. Proto se cena za metr čtvereční u malých koupelen zvyšuje a v menších místnostech se vyplatí zadat do kalkulačky vyšší částku na metr.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak dlouho rekonstrukce koupelny trvá?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U běžné koupelny v bytě počítejte se třemi až pěti týdny. Bourání a odvoz suti zaberou dva až tři dny, rozvody a elektroinstalace tři až pět dnů, pak následuje hydroizolace a technologická přestávka. Obkládání trvá čtyři až sedm dnů, spárování a montáž sanity dalších pár dnů. Zpoždění nejčastěji způsobí nedodaná dlažba nebo sanita, takže materiál mějte na místě před začátkem.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik řemeslníků má nacenit a jak se chránit v ceně?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nechte si nacenit alespoň tři dodavatele a porovnávejte položkové rozpočty, ne jen celkovou částku — jinak nepoznáte, co v nabídce chybí. Ve smlouvě trvejte na popisu prací, platebním harmonogramu podle dokončených etap, pevné ceně s podmínkami pro vícenáklady a záruce nejméně 36 měsíců. Zálohu nikdy neplaťte v plné výši předem, obvyklá první záloha pokrývá materiál.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kolik stojí rekonstrukce koupelny – detailní rozbor", href: "/blog/cena-rekonstrukce-koupelny", icon: "🚿" },
              { title: "Jak plánovat rekonstrukci bytu", href: "/blog/planovani-rekonstrukce-bytu", icon: "📋" },
              { title: "Jak najít a prověřit řemeslníka", href: "/blog/najit-proveri-remeslnika", icon: "🔧" },
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
