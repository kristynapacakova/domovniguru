import type { Metadata } from "next";
import Link from "next/link";
import BodovkyCalculator from "@/app/components/BodovkyCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka LED bodovek 2026 – kolik bodovek do podhledu?",
  description: "Spočítej doporučený počet LED bodovek do sádrokartonového podhledu podle plochy, typu místnosti a světelného toku. Rozmístění i příkon okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-bodovek-do-podhledu" },
  openGraph: { title: "Kalkulačka LED bodovek 2026", description: "Kolik bodovek do podhledu? Doporučený počet i rozmístění okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-bodovek-do-podhledu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20LED%20bodovek&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka LED bodovek 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik bodovek potřebuji do obývacího pokoje 20 m²?", "acceptedAnswer": { "@type": "Answer", "text": "Obývací pokoj se navrhuje na 150 luxů. Při ploše 20 m² a udržovacím činiteli 1,25 je potřebný světelný tok 3 750 lumenů. S běžnou bodovkou o 400 lumenech to znamená 10 kusů a celkový příkon okolo 50 W. Rozmístění vyjde na mřížku 3 × 4 s roztečí přibližně 1,4 metru. Pokud má pokoj i stojací lampu nebo lustr nad jídelní částí, lze počet bodovek snížit o dva až tři kusy." } },
      { "@type": "Question", "name": "Jaká má být rozteč mezi bodovkami v podhledu?", "acceptedAnswer": { "@type": "Answer", "text": "V praxi se bodovky rozmisťují s roztečí 0,8 až 1,2 metru a od stěn se odsazují 40 až 60 centimetrů. Užší rozteč vyhladí přechody mezi světelnými kužely, širší vytvoří viditelné tmavé pásy na stropě i na podlaze. Platí, že rozteč by neměla přesáhnout vzdálenost bodovky od osvětlované plochy — při podhledu ve výšce 2,5 metru a pracovní desce v 0,9 metru je to 1,6 metru jako absolutní maximum." } },
      { "@type": "Question", "name": "Jaká musí být výška podhledu pro LED bodovky?", "acceptedAnswer": { "@type": "Answer", "text": "Vestavná LED bodovka potřebuje nad sádrokartonem zástavbovou hloubku 30 až 80 milimetrů podle modelu, k tomu je nutné připočítat prostor pro napájecí zdroj a pro vedení kabelu. V praxi se podhled snižuje o 60 až 100 milimetrů. Nejnižší bodovky typu slim mají hloubku jen 25 milimetrů a vejdou se i do podhledu zavěšeného 40 milimetrů pod strop. Vždy si ověřte zástavbovou hloubku v datovém listu konkrétního svítidla před nákupem profilů." } },
      { "@type": "Question", "name": "Jaká teplota barvy světla se hodí do které místnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Do obývacího pokoje a ložnice patří teplá bílá 2 700 až 3 000 K, která působí útulně. Do kuchyně, koupelny a pracovny se hodí neutrální bílá 4 000 K, u níž jsou barvy potravin i vzorků věrné a která lépe udržuje pozornost. Studená bílá nad 5 000 K se v domácnosti nedoporučuje. Důležitý je i index podání barev — hledejte hodnotu CRI alespoň 90, u levných bodovek s CRI 80 vypadají potraviny i pleť nepřirozeně." } },
      { "@type": "Question", "name": "Mohu si bodovky do podhledu zapojit sám?", "acceptedAnswer": { "@type": "Answer", "text": "Vyříznutí otvorů do sádrokartonu, zacvaknutí svítidel a jejich propojení předem připravenými konektory jsou práce, které zvládne poučený laik. Připojení nového okruhu do rozvodnice, jistič, úpravu stávající elektroinstalace a výchozí revizi však smí provést pouze osoba s oprávněním podle vyhlášky č. 50/1978 Sb. Bez revizní zprávy může pojišťovna v případě škody z vadné elektroinstalace krátit plnění. Zásahy do elektroinstalace proto přenechte elektrikáři." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik bodovek do podhledu", "item": "https://www.domovniguru.cz/kalkulacky/kolik-bodovek-do-podhledu" }
    ]
  }]
};

export default function KolikBodovekDoPodhleduPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik bodovek do podhledu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik LED bodovek do podhledu?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu místnosti, její typ a světelný tok jedné bodovky — kalkulačka spočítá doporučený počet LED bodovek, jejich rozmístění i celkový příkon.</p>

        <BodovkyCalculator />
        <AffiliateCTA merchant="aku" text="Nakoupit LED bodovky" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak správně navrhnout osvětlení podhledu</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet bodovek do sádrokartonového podhledu se neurčuje od oka, ale podle požadované intenzity osvětlení, kterou udávají luxy (lumeny na metr čtvereční). Každý typ místnosti má jiné nároky: obývacímu pokoji stačí kolem 150 luxů, kuchyni s pracovní plochou 300 luxů, koupelně 200 luxů, chodbě 100 luxů a pracovně s náročnou zrakovou prací až 400 luxů. Potřebný světelný tok pak vypočítáte jako plochu místnosti vynásobenou požadovanými luxy a udržovacím činitelem, který kompenzuje stárnutí a zaprášení svítidel.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Když znáte celkový potřebný světelný tok v lumenech, stačí ho vydělit světelným tokem jedné bodovky. Běžná LED bodovka do podhledu dnes svítí zhruba 350 až 500 lumenů při příkonu okolo 5 wattů. Výsledek zaokrouhlete nahoru a rozmístěte bodovky do pravidelné mřížky — rovnoměrné rozmístění je důležitější než přesný počet, protože bodová světla vytvářejí kužely a při řídkém rozmístění vznikají mezi nimi tmavší místa.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Při návrhu myslete i na rozteč a odstup od stěn: bodovky obvykle rozmisťujeme s roztečí 0,8 až 1,2 metru a od zdí je odsazujeme přibližně 40 až 60 centimetrů, aby světlo nekončilo tvrdým stínem u stěny. Nad kuchyňskou linkou, jídelním stolem nebo zrcadlem v koupelně se vyplatí přidat bodovky navíc nebo je doplnit jiným typem svítidla — samotné stropní bodovky totiž tvoří stíny a nemusí dostatečně nasvítit svislé pracovní plochy.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má dva kroky. Nejprve se určí potřebný světelný tok místnosti podle vzorce plocha × požadovaná osvětlenost v luxech × udržovací činitel 1,25. Činitel je rezerva na to, že svítidla během života slábnou a zaprašují se. Ve druhém kroku se celkový tok vydělí světelným tokem jedné bodovky a výsledek se zaokrouhlí nahoru na celé kusy. Příkon kalkulačka odhaduje na 5 W na bodovku, což odpovídá LED modulům s účinností okolo 80 lm/W.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: kuchyň o ploše 12 m² se navrhuje na 300 luxů. Potřebný tok je 12 × 300 × 1,25 = 4 500 lumenů. S bodovkami po 400 lumenech vychází 11,25, tedy po zaokrouhlení 12 kusů a příkon 60 W. Stejně velká chodba s nárokem 100 luxů potřebuje jen 1 500 lumenů, tedy 4 bodovky — typ místnosti tak s výsledkem hýbe nejvíc.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozmístění kalkulačka navrhuje jako nejbližší pravidelnou mřížku — u 12 bodovek vyjde 3 × 4 a rozteč jako odmocnina z plochy na jednu bodovku, zde přesně 1,0 metru. Mřížka je ovšem jen výchozí bod: reálný podhled má nosnou konstrukci z profilů CD s osovou vzdáleností 400 nebo 500 mm a bodovky se musí vejít mezi profily, ne do nich. Před vrtáním si proto mřížku rozkreslete na strop a porovnejte ji s polohou profilů, vedení a případné vzduchotechniky.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Bodovky se do podhledu zasekávají natrvalo — opravit návrh znamená zaplácnout otvor a přestěrkovat strop. Chyby se opakují stále stejné:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Bodovky jako jediné osvětlení.</strong> Strop plný bodovek osvětlí podlahu, ale nechá svislé plochy ve stínu. Vždy doplňte druhou vrstvu — lustr nad stolem, LED pásek v nice, svítidlo u pohovky.</li>
            <li><strong>Svítidlo vybrané až po vyřezání otvorů.</strong> Průměry montážních otvorů se liší, běžné je 68, 75 nebo 83 mm. Nejprve vyberte svítidlo, pak kupte odpovídající korunku.</li>
            <li><strong>Nekontrolovaná zástavbová hloubka.</strong> Podhled snížený o 40 mm nepojme bodovku, která potřebuje 70 mm plus prostor pro zdroj. Pak už zbývá jen slim verze s horší optikou.</li>
            <li><strong>Nesprávné krytí v koupelně.</strong> Nad sprchou a vanou je potřeba krytí alespoň IP44, do zóny 0 pak IP65 a bezpečné napětí. Běžná bodovka s IP20 tam nepatří.</li>
            <li><strong>Míchání různých teplot barvy.</strong> Bodovky 3 000 K a 4 000 K v jedné místnosti vytvoří nesourodé světlo. Kupujte celou sadu z jedné výrobní série.</li>
            <li><strong>Zapomenuté stmívání.</strong> Stmívatelnou bodovku je potřeba koupit rovnou se stmívatelným zdrojem a kompatibilním stmívačem. Dodatečná výměna znamená demontáž všech svítidel.</li>
            <li><strong>Zaizolovaná bodovka v podkroví.</strong> Svítidlo zasypané minerální vlnou se přehřívá a elektronika zdroje rychle odejde. Hledejte verzi určenou pro překrytí izolací nebo použijte ochranný box.</li>
          </ul>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            <strong>Bezpečnostní poznámka:</strong> jakýkoli zásah do elektroinstalace — nový okruh, jistič, úprava rozvodnice i připojení svítidel na stávající vedení — patří do rukou elektrikáře s oprávněním. Nová instalace vyžaduje výchozí revizní zprávu.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Samotné bodovky tvoří jen polovinu rozpočtu. Ceny jsou orientační včetně DPH:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>LED bodovka</strong> 150 až 400 Kč za kus v základní kvalitě, 500 až 1 200 Kč za značkovou s CRI nad 90 a stmíváním.</li>
            <li><strong>Napájecí zdroj</strong> — u svítidel na 230 V žádný, u 12V nebo 24V systému 400 až 1 500 Kč. Zdroj musí být přístupný revizním otvorem.</li>
            <li><strong>Kabel CYKY 3×1,5</strong> 25 až 45 Kč/m, u 10 bodovek počítejte s 20 až 30 metry. Konektory Wago 15 až 40 Kč za kus.</li>
            <li><strong>Vykružovací korunka</strong> na sádrokarton v průměru 68 až 83 mm: 200 až 500 Kč. Stmívač kompatibilní s LED 500 až 1 500 Kč, chytrý 1 200 až 3 000 Kč.</li>
            <li><strong>Materiál podhledu</strong>, pokud ho teprve stavíte — profily CD a UD 35 až 60 Kč/m, sádrokarton 180 až 350 Kč/m², závěsy, šrouby, páska a tmel 80 až 150 Kč/m².</li>
            <li><strong>Nářadí</strong> — aku vrtačka, detektor vedení a kovu (600 až 2 000 Kč), laser na rozkreslení mřížky, zkoušečka napětí, respirátor a brýle.</li>
            <li><strong>Práce elektrikáře</strong> — zapojení okruhu s deseti bodovkami 2 500 až 6 000 Kč, výchozí revizní zpráva 1 500 až 4 000 Kč.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik bodovek potřebuji do obývacího pokoje 20 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Obývací pokoj se navrhuje na 150 luxů. Při ploše 20 m² a udržovacím činiteli 1,25 je potřebný světelný tok 3 750 lumenů. S běžnou bodovkou o 400 lumenech to znamená 10 kusů a celkový příkon okolo 50 W. Rozmístění vyjde na mřížku 3 × 4 s roztečí přibližně 1,4 metru. Pokud má pokoj i stojací lampu nebo lustr nad jídelní částí, lze počet bodovek snížit o dva až tři kusy.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká má být rozteč mezi bodovkami v podhledu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              V praxi se bodovky rozmisťují s roztečí 0,8 až 1,2 metru a od stěn se odsazují 40 až 60 centimetrů. Užší rozteč vyhladí přechody mezi světelnými kužely, širší vytvoří viditelné tmavé pásy na stropě i na podlaze. Platí, že rozteč by neměla přesáhnout vzdálenost bodovky od osvětlované plochy — při podhledu ve výšce 2,5 metru a pracovní desce v 0,9 metru je to 1,6 metru jako absolutní maximum.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká musí být výška podhledu pro LED bodovky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Vestavná LED bodovka potřebuje nad sádrokartonem zástavbovou hloubku 30 až 80 milimetrů podle modelu, k tomu je nutné připočítat prostor pro napájecí zdroj a pro vedení kabelu. V praxi se podhled snižuje o 60 až 100 milimetrů. Nejnižší bodovky typu slim mají hloubku jen 25 milimetrů a vejdou se i do podhledu zavěšeného 40 milimetrů pod strop. Vždy si ověřte zástavbovou hloubku v datovém listu konkrétního svítidla před nákupem profilů.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká teplota barvy světla se hodí do které místnosti?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Do obývacího pokoje a ložnice patří teplá bílá 2 700 až 3 000 K, která působí útulně. Do kuchyně, koupelny a pracovny se hodí neutrální bílá 4 000 K, u níž jsou barvy potravin i vzorků věrné a která lépe udržuje pozornost. Studená bílá nad 5 000 K se v domácnosti nedoporučuje. Důležitý je i index podání barev — hledejte hodnotu CRI alespoň 90, u levných bodovek s CRI 80 vypadají potraviny i pleť nepřirozeně.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Mohu si bodovky do podhledu zapojit sám?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Vyříznutí otvorů do sádrokartonu, zacvaknutí svítidel a jejich propojení předem připravenými konektory jsou práce, které zvládne poučený laik. Připojení nového okruhu do rozvodnice, jistič, úpravu stávající elektroinstalace a výchozí revizi však smí provést pouze osoba s oprávněním podle vyhlášky č. 50/1978 Sb. Bez revizní zprávy může pojišťovna v případě škody z vadné elektroinstalace krátit plnění. Zásahy do elektroinstalace proto přenechte elektrikáři.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Podhled s LED bodovkami", href: "/blog/podhled-s-led-bodovkami", icon: "🔦" },
              { title: "Jak osvětlit kuchyňskou linku", href: "/blog/osvetlit-kuchynskou-linku", icon: "🍳" },
              { title: "Kolik žárovek potřebuji?", href: "/kalkulacky/kolik-zarovek-potrebuji", icon: "💡" },
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
