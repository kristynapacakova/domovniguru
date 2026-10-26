import type { Metadata } from "next";
import Link from "next/link";
import UsporaZatepleniCalculator from "@/app/components/UsporaZatepleniCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka úspory zateplení 2026 – návratnost investice do izolace",
  description: "Spočítejte roční úsporu na vytápění po zateplení fasády, střechy nebo oken a zjistěte dobu návratnosti investice.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/uspora-zatepleni" },
  openGraph: { title: "Kalkulačka úspory zateplení 2026 – návratnost investice do izolace", description: "Spočítejte roční úsporu na vytápění po zateplení fasády, střechy nebo oken a zjistěte dobu návratnosti investice.", url: "https://www.domovniguru.cz/kalkulacky/uspora-zatepleni", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20%C3%BAspory%20zateplen%C3%AD%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka úspory zateplení 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik procent nákladů na vytápění ušetří zateplení?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka pracuje se čtyřmi rozsahy: samotná fasáda sníží náklady o 20 procent, fasáda se střechou nebo půdou o 33 procent, fasáda se střechou a okny o 42 procent a komplexní zateplení včetně podlahy o 50 procent. Hodnoty odpovídají typickému nezateplenému rodinnému domu z druhé poloviny dvacátého století. U domu s částečnou izolací bude skutečná úspora nižší." } },
      { "@type": "Question", "name": "Jak kalkulačka počítá návratnost zateplení?", "acceptedAnswer": { "@type": "Answer", "text": "Roční úspora vznikne vynásobením současných nákladů na vytápění procentem podle zvoleného rozsahu. Nové roční náklady jsou původní náklady mínus tato úspora. Dobu návratnosti kalkulačka spočítá jako odhadovanou cenu zateplení dělenou roční úsporou, bez zahrnutí dotace. Pokud vyjde návratnost delší než třicet let, kalkulačka na to upozorní." } },
      { "@type": "Question", "name": "Za jak dlouho se zateplení fasády vrátí?", "acceptedAnswer": { "@type": "Answer", "text": "Při ročních nákladech 40 000 Kč sníží zateplení fasády výdaje o 8 000 Kč, nové náklady tedy budou 32 000 Kč. Investice 300 000 Kč se při této úspoře vrátí za 37,5 roku. Po odečtení dotace Nová zelená úsporám ve výši poloviny způsobilých výdajů spadne čistá investice na 150 000 Kč a návratnost na necelých devatenáct let." } },
      { "@type": "Question", "name": "Čím začít — fasádou, nebo střechou?", "acceptedAnswer": { "@type": "Answer", "text": "Začíná se střechou a stropem nejvyššího podlaží. Teplo stoupá vzhůru a nezateplenou střechou uniká až čtvrtina tepla, přitom izolace podlahy půdy je nejlevnější opatření vůbec. Teprve potom přichází fasáda a nakonec okna. Zateplení fasády při zachování starých netěsnících okenních rámů přinese nižší úsporu, než model naznačuje, protože tepelné mosty u ostění přetrvávají." } },
      { "@type": "Question", "name": "Jaká tloušťka izolace fasády je optimální?", "acceptedAnswer": { "@type": "Answer", "text": "U běžné cihlové stěny se dnes volí 140 až 200 milimetrů polystyrenu nebo minerální vlny. Přechod ze sta na sto čtyřicet milimetrů ještě přinese citelné snížení ztráty, od dvou set milimetrů je už přírůstek úspory malý a peníze se lépe investují do výměny okna nebo rekuperace. Rozhodující není jen tloušťka, ale i vyřešení tepelných mostů u ostění, balkonů a soklu." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Úspora zateplení", "item": "https://www.domovniguru.cz/kalkulacky/uspora-zatepleni" }
    ]
  }]
};

export default function UsporaZatepleniPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Úspora zateplení</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik ušetřím po zateplení domu?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadejte aktuální náklady na vytápění, zvolte rozsah plánovaného zateplení a kalkulačka okamžitě spočítá roční úsporu v korunách. Zjistíte také orientační dobu návratnosti investice a jak ji zkrátit pomocí dotací NZÚ.</p>

        <UsporaZatepleniCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit zateplovací materiál" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Kdy se zateplení skutečně vyplatí</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Klíčovou roli v ekonomice zateplení hrají dotace z programu Nová zelená úsporám (NZÚ). Při komplexním zateplení rodinného domu lze získat podporu až 50 % způsobilých výdajů, v některých případech i více — dotace tak dokáží zkrátit dobu návratnosti z 20 let na pouhých 8–10 let. Podmínkou je splnění energetických parametrů podle platné normy a doložení projektu certifikovaným energetickým specialistou. Žádost se podává před zahájením prací, nikoliv zpětně.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Na pořadí zateplování záleží. Odborníci doporučují začínat střechou a půdou — teplo přirozeně stoupá nahoru a nezateplená střecha může znamenat ztrátu až 25 % tepla. Teprve poté má smysl řešit fasádu a nakonec okna. Zateplení fasády bez výměny starých netěsnících oken přinese nižší úsporu, než kalkulátor naznačuje, protože tepelné mosty přetrvávají. Správné pořadí maximalizuje efekt každé investované koruny.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Nejčastější chybou při realizaci zateplení je podceňování tloušťky izolantu — úspora roste s tloušťkou, ale od určité hodnoty přírůstek klesá. Další problém představují tepelné mosty u okenních rámů, balkónových desek a rohů budovy, kde nevhodně provedené zateplení může vést ke kondenzaci vlhkosti a plísním. Vždy vyžadujte projekčně podloženou dokumentaci a kvalitního zhotovitele s referencemi — cena špatně provedeného zateplení může být nakonec vyšší než cena zateplení vůbec.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka vychází z vašich současných ročních nákladů na vytápění a z rozsahu zateplení, kterému je přiřazeno procento úspory. Samotná fasáda z polystyrenu nebo minerální vlny znamená 20 procent, fasáda se střechou nebo zaizolovanou půdou 33 procent, fasáda se střechou a novými okny 42 procent a komplexní řešení včetně podlahy nebo stropu nad sklepem 50 procent. Hodnoty odpovídají typickému nezateplenému rodinnému domu postavenému mezi šedesátými a devadesátými lety, tedy stavbě s neizolovanou obvodovou stěnou a původními okny.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotný výpočet je trojkrokový: roční úspora je součin současných nákladů a procenta úspory, nové roční náklady jsou původní náklady mínus úspora a doba návratnosti je odhadovaná cena zateplení dělená roční úsporou. Konkrétně: dům s ročními náklady 40 000 Kč a zateplením fasády za 300 000 Kč ušetří 8 000 Kč ročně, nové náklady budou 32 000 Kč a investice se vrátí za 37,5 roku. Při volbě komplexního zateplení se stejnou cenou by úspora byla 20 000 Kč a návratnost 15 let.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Z toho vyplývá klíčový poznatek: návratnost se nezkracuje tím, že zateplíte méně, ale tím, že zateplíte víc. Rozšíření záběru z fasády na komplexní řešení zvýší cenu zpravidla o polovinu, ale úsporu rovnou o dvě a půl násobku. Model přitom nepracuje s dotací — tu si musíte z výsledku odečíst sami. U zateplení fasády za 300 000 Kč s podporou NZÚ ve výši poloviny způsobilých výdajů spadne čistá investice na 150 000 Kč a návratnost z 37,5 na necelých devatenáct let. Pokud vyjde doba návratnosti nad třicet let, kalkulačka na to sama upozorní.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Zateplení je investice na třicet let a většina vad se projeví až po několika zimách, kdy už je oprava drahá:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Příliš tenký izolant.</strong> Osmdesát milimetrů polystyrenu bylo standardem před dvaceti lety. Dnes se u cihlové stěny volí 140 až 200 mm — rozdíl v ceně je malý, rozdíl v úspoře citelný.</li>
            <li><strong>Neřešené tepelné mosty.</strong> Ostění okna, balkonová deska, sokl a atika jsou místa, kde teplo uniká nejvíc. Nedotažený detail znamená kondenzaci a plísně právě v rohu obytné místnosti.</li>
            <li><strong>Zateplení bez odvětrání.</strong> Utěsněný dům bez výměny vzduchu znamená vlhkost nad 60 procent a plísně za nábytkem. Při komplexní rekonstrukci proto patří k zateplení i řízené větrání s rekuperací.</li>
            <li><strong>Špatná skladba na vlhkou stěnu.</strong> Polystyren na zavlhlé zdivo bez předchozí sanace vlhkost uzavře dovnitř. Takové stěny potřebují paropropustnou minerální vlnu a vyřešenou izolaci proti vodě.</li>
            <li><strong>Žádost o dotaci až po realizaci.</strong> Nová zelená úsporám podporuje jen plánované práce. Bez podané žádosti před začátkem stavby přijdete o celou podporu.</li>
            <li><strong>Fasáda před střechou.</strong> Obrácené pořadí znamená, že nejdražší opatření předbíhá nejlevnější. Izolace podlahy půdy přitom bývá nejrychleji návratná investice vůbec.</li>
            <li><strong>Firma bez referencí a bez certifikovaného systému.</strong> Zateplení je certifikovaná skladba, nikoli součet materiálů z hobbymarketu. Záměna lepidla nebo hmoždinek ruší garanci systému.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Na co myslet před pořízením</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Než začnete poptávat firmy, projděte si tyto položky a orientační ceny, abyste poznali nereálně nízkou nabídku:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Zateplení fasády na klíč.</strong> 1 400 až 2 200 Kč za metr čtvereční včetně lešení, lepidla, hmoždinek, armování a finální omítky. U rodinného domu se 180 m² fasády jde o 250 000 až 400 000 Kč.</li>
            <li><strong>Izolace podlahy půdy.</strong> 400 až 800 Kč za metr čtvereční při foukané celulóze nebo rohožích z minerální vlny. Nejlevnější opatření s nejkratší návratností.</li>
            <li><strong>Zateplení šikmé střechy.</strong> 1 800 až 3 000 Kč za metr čtvereční, u kompletní rekonstrukce s novou krytinou i více.</li>
            <li><strong>Výměna okna.</strong> Trojsklo v plastovém rámu 6 000 až 12 000 Kč za okno včetně montáže a zednického zapravení ostění.</li>
            <li><strong>Projekt a energetické posouzení.</strong> 15 000 až 40 000 Kč podle velikosti domu. U dotace NZÚ je posouzení energetickým specialistou povinnou součástí žádosti.</li>
            <li><strong>Blower door test a termokamera.</strong> Test průvzdušnosti 8 000 až 15 000 Kč, kontrolní snímkování termokamerou 3 000 až 6 000 Kč. Odhalí netěsnosti a tepelné mosty, dokud je lešení ještě na místě.</li>
            <li><strong>Řízené větrání s rekuperací.</strong> 120 000 až 250 000 Kč pro rodinný dům. Po utěsnění obálky jde o doplněk, který řeší vlhkost a kvalitu vzduchu.</li>
            <li><strong>Souhlas úřadů.</strong> V památkové zóně a u objektů s chráněnou fasádou je nutné stanovisko památkářů, u bytového domu rozhodnutí společenství vlastníků.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik procent nákladů na vytápění ušetří zateplení?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka pracuje se čtyřmi rozsahy: samotná fasáda sníží náklady o 20 procent, fasáda se střechou nebo půdou o 33 procent, fasáda se střechou a okny o 42 procent a komplexní zateplení včetně podlahy o 50 procent. Hodnoty odpovídají typickému nezateplenému rodinnému domu z druhé poloviny dvacátého století. U domu s částečnou izolací bude skutečná úspora nižší.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak kalkulačka počítá návratnost zateplení?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Roční úspora vznikne vynásobením současných nákladů na vytápění procentem podle zvoleného rozsahu. Nové roční náklady jsou původní náklady mínus tato úspora. Dobu návratnosti kalkulačka spočítá jako odhadovanou cenu zateplení dělenou roční úsporou, bez zahrnutí dotace. Pokud vyjde návratnost delší než třicet let, kalkulačka na to upozorní.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Za jak dlouho se zateplení fasády vrátí?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při ročních nákladech 40 000 Kč sníží zateplení fasády výdaje o 8 000 Kč, nové náklady tedy budou 32 000 Kč. Investice 300 000 Kč se při této úspoře vrátí za 37,5 roku. Po odečtení dotace Nová zelená úsporám ve výši poloviny způsobilých výdajů spadne čistá investice na 150 000 Kč a návratnost na necelých devatenáct let.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Čím začít — fasádou, nebo střechou?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Začíná se střechou a stropem nejvyššího podlaží. Teplo stoupá vzhůru a nezateplenou střechou uniká až čtvrtina tepla, přitom izolace podlahy půdy je nejlevnější opatření vůbec. Teprve potom přichází fasáda a nakonec okna. Zateplení fasády při zachování starých netěsnících okenních rámů přinese nižší úsporu, než model naznačuje, protože tepelné mosty u ostění přetrvávají.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká tloušťka izolace fasády je optimální?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U běžné cihlové stěny se dnes volí 140 až 200 milimetrů polystyrenu nebo minerální vlny. Přechod ze sta na sto čtyřicet milimetrů ještě přinese citelné snížení ztráty, od dvou set milimetrů je už přírůstek úspory malý a peníze se lépe investují do výměny okna nebo rekuperace. Rozhodující není jen tloušťka, ale i vyřešení tepelných mostů u ostění, balkonů a soklu.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak zateplovat dům – fasáda, střecha a podlaha", href: "/blog/jak-zateplit-dum", icon: "🏠" },
              { title: "Spotřeba plynu na vytápění", href: "/kalkulacky/spotreba-plynu", icon: "🔥" },
              { title: "Chytrý termostat – úspory na vytápění", href: "/blog/chytry-termostat-uspora-vytapeni", icon: "🌡️" },
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
