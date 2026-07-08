import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chytré zásuvky a měření spotřeby v domácnosti",
  description: "Co umí chytrá zásuvka, jak měřit skutečnou spotřebu spotřebičů, kolik stojí standby režim a jak ušetřit díky automatizaci a WiFi nebo Zigbee zásuvkám.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/chytra-zasuvka-a-mereni-spotreby" },
  openGraph: { title: "Chytré zásuvky a měření spotřeby v domácnosti", description: "Co umí chytrá zásuvka, jak měřit skutečnou spotřebu spotřebičů, kolik stojí standby režim a jak ušetřit díky automatizaci a WiFi nebo Zigbee zásuvkám.", url: "https://www.domovniguru.cz/blog/chytra-zasuvka-a-mereni-spotreby", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-07-08T08:00:00Z", modifiedTime: "2026-07-08T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Chytr%C3%A9%20z%C3%A1suvky%20a%20m%C4%9B%C5%99en%C3%AD%20spot%C5%99eby%20v%20dom%C3%A1cnosti&cat=blog", width: 1200, height: 630, alt: "Chytré zásuvky a měření spotřeby v domácnosti" }] },
  twitter: { card: "summary_large_image", title: "Chytré zásuvky a měření spotřeby v domácnosti", description: "Co umí chytrá zásuvka, jak měřit skutečnou spotřebu spotřebičů, kolik stojí standby režim a jak ušetřit díky automatizaci a WiFi nebo Zigbee zásuvkám." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/chytra-zasuvka-a-mereni-spotreby#article", "headline": "Chytré zásuvky a měření spotřeby v domácnosti", "datePublished": "2026-07-08T08:00:00Z", "dateModified": "2026-07-08T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["chytrá zásuvka", "měření spotřeby", "standby spotřeba", "WiFi zásuvka", "Zigbee", "Home Assistant", "úspora energie"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" }, { "@type": "ListItem", "position": 4, "name": "Chytré zásuvky a měření spotřeby", "item": "https://www.domovniguru.cz/blog/chytra-zasuvka-a-mereni-spotreby" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Co je chytrá zásuvka a co umí?", "acceptedAnswer": { "@type": "Answer", "text": "Chytrá zásuvka je standardní elektrická zásuvka doplněná o WiFi nebo Zigbee modul, který umožňuje spínání na dálku přes smartphone, hlasem nebo automaticky podle časovače. Prémiové modely navíc měří okamžitou spotřebu v wattech, celkové kWh od instalace a zobrazují historii spotřeby v aplikaci." } }, { "@type": "Question", "name": "Kolik stojí standby spotřeba televizoru nebo set-top boxu?", "acceptedAnswer": { "@type": "Answer", "text": "Moderní LED televizor v pohotovostním režimu spotřebuje 0,3–1 W. Starší plazma nebo LCD televizory mohou ve standby brát 5–15 W. Set-top box (satelit, kabelová) bývá nejhorší – starší modely mohou brát 10–20 W i v pohotovosti, přičemž nejsou prakticky nikdy vypnuty. Při ceně 6 Kč/kWh a 15 W standby jde ročně o více než 800 Kč jen za jeden přístroj." } }, { "@type": "Question", "name": "WiFi nebo Zigbee zásuvka – co si vybrat?", "acceptedAnswer": { "@type": "Answer", "text": "WiFi zásuvky jsou levnější a jednodušší na nastavení – fungují bez brány přímo přes domácí WiFi router. Nevýhodou je závislost na internetu a cloudu výrobce. Zigbee zásuvky vyžadují Zigbee hub (jako Sonoff Zigbee Bridge nebo ConBee), ale fungují i bez internetu, mají nižší latenci a lépe se integrují s Home Assistantem. Pro jednoduché použití volte WiFi, pro rozsáhlejší chytrou domácnost Zigbee." } }, { "@type": "Question", "name": "Mohu chytrou zásuvku instalovat sám?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, chytrá zásuvka se zasune do standardní zásuvky 230 V, žádná elektrikářská práce není potřeba. Standardní vestavné chytré zásuvky (místo klasické) vyžadují výměnu zásuvky v krabičce ve zdi – to zvládne šikovný kutil, ale vždy nejprve vypněte jistič a ověřte absenci napětí zkoušečkou. Při pochybnostech přivolejte elektrikáře." } }, { "@type": "Question", "name": "Jak zjistím, které spotřebiče jsou nejdražší?", "acceptedAnswer": { "@type": "Answer", "text": "Nejjednodušší způsob je měřicí zástrčka (wattmetr) za 300–500 Kč. Zastrčte ji mezi zásuvku a spotřebič a nechte ji měřit 24 hodin nebo celý týden. Zobrazí průměrný příkon, celkové kWh a lze spočítat roční náklady. Chytrá zásuvka s měřením spotřeby dělá totéž trvale a data zobrazuje v aplikaci nebo Home Assistantu." } }] }] };

const RELATED = [
  { title: "Spotřebiče ve standby: jak ušetřit", href: "/blog/spotrebice-ve-standby-jak-usetrit", read: "4 min" },
  { title: "Jak snížit účet za elektřinu", href: "/blog/snizit-ucet-za-elektrinu", read: "6 min" },
  { title: "Chytrá domácnost: kde začít", href: "/blog/chytra-domacnost-zaciname", read: "5 min" },
  { title: "USB zásuvky a nabíjecí stanice", href: "/blog/usb-zasuvky-a-nabijeci-stanice", read: "4 min" },
];

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <div className="article-layout">
          <article className="article-body">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog">Blog</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog/kategorie/elektrika">Elektrika & osvětlení</Link><span className="breadcrumb-sep">/</span>
              <span>Chytré zásuvky a měření spotřeby</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 5 min čtení</span>
              </div>
              <h1 className="article-h1">Chytré zásuvky a měření spotřeby v domácnosti</h1>
              <p className="article-lead">Víte, kolik elektřiny spotřebuje váš televizor ve standby nebo kolik stojí starý mrazák v garáži? Chytré zásuvky a levné wattmetry to prozradí na korunu přesně – a zároveň umožní automaticky vypínat spotřebiče přes mobil nebo při odchodu z domova.</p>
              <div className="article-meta-row"><span>Aktualizováno: 8. července 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#co-umi">Co umí chytrá zásuvka</a></li>
                <li><a href="#mereni-spotreby">Jak měřit skutečnou spotřebu spotřebičů</a></li>
                <li><a href="#standby">Standby spotřeba – skrytý zloděj elektřiny</a></li>
                <li><a href="#vyber-zasuvky">Výběr chytré zásuvky: WiFi vs. Zigbee</a></li>
                <li><a href="#kompatibilita">Kompatibilita s Home Assistant, Alexa a Google</a></li>
                <li><a href="#tipy-uspora">Tipy pro reálnou úsporu elektřiny</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="co-umi">
              <h2>Co umí chytrá zásuvka</h2>
              <p>Chytrá zásuvka vypadá jako obyčejná přenosná zásuvka nebo jako vestavná náhrada za klasickou zásuvku ve zdi – ale uvnitř skrývá WiFi nebo Zigbee modul a řídicí elektroniku. Základní funkce, které nabízí každá chytrá zásuvka:</p>
              <ul>
                <li><strong>Vzdálené spínání</strong> – zapnutí a vypnutí přes aplikaci v mobilu odkudkoli na světě, pokud je zásuvka připojená k internetu</li>
                <li><strong>Hlasové ovládání</strong> – integrace s Amazon Alexa, Google Assistant nebo Apple Siri</li>
                <li><strong>Časovač (timer)</strong> – nastavení pevného času zapnutí/vypnutí, např. kávovar se sám zapne v 7:00</li>
                <li><strong>Plán a scény</strong> – složitější automatizace, např. vypnutí všeho při odchodu z domova</li>
              </ul>
              <h3>Chytré zásuvky s měřením spotřeby</h3>
              <p>Prémiové modely navíc měří:</p>
              <ul>
                <li><strong>Okamžitý příkon (W)</strong> – kolik wattů spotřebič právě odebírá</li>
                <li><strong>Celková spotřeba (kWh)</strong> – kolik energie spotřebič odebral celkem od instalace zásuvky</li>
                <li><strong>Historie spotřeby</strong> – grafy denní, týdenní a měsíční spotřeby v aplikaci</li>
                <li><strong>Napětí a proud</strong> – pokročilé modely zobrazují i napájení v sítí</li>
              </ul>
              <p>Tato data jsou zlatý důl pro identifikaci neefektivních spotřebičů. Zjistíte například, že starý mrazák spotřebuje dvakrát víc než nový model A++ a návratnost investice do nového je jen 2–3 roky.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Začněte měřením spotřeby nejdražších spotřebičů v domácnosti – bojler, stará lednička, mrazák, sušička. Výsledky vás mohou překvapit a motivovat k výměně za úspornější model.</div>
            </section>

            <section id="mereni-spotreby">
              <h2>Jak měřit skutečnou spotřebu spotřebičů</h2>
              <h3>Měřicí zástrčka (wattmetr)</h3>
              <p>Nejjednodušší a nejlevnější způsob. Měřicí zástrčka stojí 300–700 Kč a zastrčíte ji mezi zásuvku ve zdi a spotřebič. Zobrazuje okamžitý příkon, celkové kWh a některé modely i cenu elektřiny po zadání tarifu. Nevýhoda: data vidíte jen na displeji zástrčky, ne vzdáleně přes mobil.</p>
              <h3>Chytrá zásuvka s měřením</h3>
              <p>Funguje stejně jako měřicí zástrčka, ale data jsou dostupná v aplikaci, historicky zaznamenávána a lze je exportovat do tabulky nebo Home Assistantu. Cena se pohybuje od 400 do 1200 Kč podle výrobce a protokolu. Populární modely:</p>
              <ul>
                <li><strong>Shelly Plug S nebo Plug Plus</strong> – WiFi, otevřené API, výborná integrace s Home Assistantem, měření spotřeby</li>
                <li><strong>NOUS A1T / A8Z</strong> – WiFi nebo Zigbee, kompatibilní s Tasmota firmware</li>
                <li><strong>Sonoff S26R2 / S40</strong> – WiFi, levné, velká komunita</li>
                <li><strong>Aqara SP-EUC01</strong> – Zigbee, kompaktní, spolehlivé</li>
              </ul>
              <h3>Jak měřit správně</h3>
              <p>Jednorázové měření příkonu nestačí – spotřebiče mají různé cykly. Lednička se zapíná a vypíná kompresor, pračka spotřebuje nejvíce při ohřevu vody. Měřte vždy alespoň 24 hodin, u ledničky ideálně celý týden, aby výsledek zahrnul reálné průměry. Roční spotřebu odhadnete jako: <strong>průměrný příkon (kW) × 8760 hodin = kWh/rok</strong>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máte Home Assistant nebo jinou platformu chytré domácnosti, přidejte chytrou zásuvku s měřením na bojler nebo sušičku. Dostanete přesné náklady na každé praní nebo ohřev teplé vody a můžete optimalizovat provoz.</div>
            </section>

            <section id="standby">
              <h2>Standby spotřeba – skrytý zloděj elektřiny</h2>
              <p>Spotřebiče v pohotovostním režimu (standby) nebo zcela vypnuté, ale stále zapojené do sítě, odebírají elektřinu neustále – 24 hodin denně, 365 dní v roce. Individuálně jsou to malé hodnoty, ale dohromady mohou tvořit <strong>5–15 % celkové roční spotřeby domácnosti</strong>.</p>
              <div className="article-table-wrap">
                <table className="article-table">
                  <thead><tr><th>Spotřebič</th><th>Standby příkon</th><th>Roční spotřeba</th><th>Roční náklady (6 Kč/kWh)</th></tr></thead>
                  <tbody>
                    <tr><td>Moderní LED TV</td><td>0,3–1 W</td><td>2,6–8,8 kWh</td><td>16–53 Kč</td></tr>
                    <tr><td>Set-top box (starší)</td><td>10–20 W</td><td>88–175 kWh</td><td>528–1 050 Kč</td></tr>
                    <tr><td>AV receiver / soundbar</td><td>5–15 W</td><td>44–131 kWh</td><td>264–790 Kč</td></tr>
                    <tr><td>Herní konzole (standby)</td><td>1–10 W</td><td>8,8–88 kWh</td><td>53–528 Kč</td></tr>
                    <tr><td>Nabíječka bez mobilu</td><td>0,1–0,5 W</td><td>0,9–4,4 kWh</td><td>5–26 Kč</td></tr>
                    <tr><td>Mikrovlnná trouba</td><td>2–5 W (display)</td><td>17,5–44 kWh</td><td>105–264 Kč</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Nejhorším viníkem jsou starší set-top boxy a satelitní přijímače, které nikdy opravdu nevypnou a stahují EPG aktualizace i v noci. Výměna za moderní model nebo připojení přes chytrou zásuvku s automatickým vypínáním může ušetřit stovky korun ročně.</p>
              <p>Detailní analýzu standby spotřeby a rady, jak s ní naložit, najdete v článku <Link href="/blog/spotrebice-ve-standby-jak-usetrit" style={{ color: "#2a6496", textDecoration: "underline" }}>spotřebiče ve standby: jak ušetřit</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Použijte prodlužovací kabel s vypínačem nebo chytrou zásuvku na celý AV systém (TV + soundbar + přijímač + konzole). Jedním stisknutím nebo automaticky při odchodu z domova vše skutečně vypnete a ušetříte bez nutnosti vytahovat zástrčky ze zdi.</div>
            </section>

            <section id="vyber-zasuvky">
              <h2>Výběr chytré zásuvky: WiFi vs. Zigbee</h2>
              <p>Dvě nejrozšířenější technologie pro chytré zásuvky mají různé výhody a použití.</p>
              <h3>WiFi zásuvky</h3>
              <p>Připojují se přímo k domácímu WiFi routeru, nepotřebují žádný hub ani bránu. Jednoduché na nastavení – stáhnete aplikaci, připojíte zásuvku na WiFi a máte hotovo. Nevýhody:</p>
              <ul>
                <li>Závislost na cloudu výrobce – pokud výrobce ukončí provoz serveru, zásuvka přestane fungovat vzdáleně</li>
                <li>Závislost na internetu – bez internetu doma nelze ovládat z venku</li>
                <li>Zatěžují domácí WiFi síť (každá zásuvka je další zařízení)</li>
                <li>Vyšší latence oproti Zigbee</li>
              </ul>
              <h3>Zigbee zásuvky</h3>
              <p>Komunikují přes nízkoenergetický Zigbee protokol (2,4 GHz, ale jiný než WiFi). Vyžadují Zigbee koordinátor (hub) – například Sonoff Zigbee Bridge Pro, ConBee III nebo HUSBZB-1. Výhody:</p>
              <ul>
                <li>Fungují lokálně bez internetu i bez cloudu</li>
                <li>Nižší latence a spolehlivější odezva</li>
                <li>Skvělá integrace s Home Assistantem a dalšími lokálními platformami</li>
                <li>Zařízení se navzájem posilují síťový dosah (mesh síť)</li>
              </ul>
              <p>Pro jednoduché použití (jen chci vypínat kávovar přes mobil) volte WiFi zásuvky. Pro budování chytré domácnosti a lokální automatizaci bez závislosti na cloudu jsou Zigbee zásuvky výrazně lepší investicí. Více o tom, jak začít s chytrou domácností, najdete v článku <Link href="/blog/chytra-domacnost-zaciname" style={{ color: "#2a6496", textDecoration: "underline" }}>chytrá domácnost: kde začít</Link>.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud chcete WiFi zásuvky bez závislosti na cloudu, sáhněte po zařízeních kompatibilních s firmwarem Tasmota nebo ESPHome. Tyto open-source firmwary fungují plně lokálně a jsou zdarma.</div>
            </section>

            <section id="kompatibilita">
              <h2>Kompatibilita s Home Assistant, Alexa a Google</h2>
              <p>Před koupí chytré zásuvky ověřte, s jakou platformou je kompatibilní. Různé ekosystémy mají různé možnosti:</p>
              <h3>Amazon Alexa a Google Home</h3>
              <p>Většina WiFi zásuvek velkých výrobců (TP-Link Kasa, Gosund, Meross, Sonoff) je kompatibilní s Alexou a Google Home. Ovládáte je hlasem nebo přes příslušné aplikace. Fungují přes cloud – zásuvka komunikuje přes internet se serverem výrobce, který zprostředkovává příkazy z Alexy nebo Google.</p>
              <h3>Apple HomeKit</h3>
              <p>Zásuvky pro HomeKit musí mít certifikaci MFi. Méně modelů ji má, ale kvalita integrace bývá vyšší. Alternativně lze použít Home Assistant s integracemi jako HomeKit Bridge, který převádí libovolné zařízení do HomeKitu.</p>
              <h3>Home Assistant</h3>
              <p>Home Assistant je nejflexibilnější open-source platforma pro chytrou domácnost. Integruje prakticky každou chytrou zásuvku – Zigbee přes ZHA nebo Z2M, WiFi zásuvky přes nativní integrace nebo Tasmota. Výhodou je plná lokální kontrola, automatizace bez omezení a vlastnictví dat. Integrace Home Assistantu s chytrými zásuvkami a LED pásky ve více místnostech vám dá plnou kontrolu nad spotřebou energie v bytě.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Home Assistant je zdarma, ale vyžaduje vlastní hardware (mini PC nebo Raspberry Pi). Pokud to zvažujete, přečtěte si nejdřív náš přehled <Link href="/blog/chytra-domacnost-zaciname" style={{ color: "#2a6496", textDecoration: "underline" }}>jak začít s chytrou domácností</Link> – porovnává různé přístupy a pomůže vám zvolit ten pravý pro vaší situaci.</div>
            </section>

            <section id="tipy-uspora">
              <h2>Tipy pro reálnou úsporu elektřiny</h2>
              <h3>Automatické vypínání při odchodu z domova</h3>
              <p>Nastavte automatizaci: když poslední člen domácnosti opustí byt (detekce přes GPS mobilu nebo vypnutí alarmu), automaticky se vypnou chytré zásuvky u AV techniky, nabíječek a dalších spotřebičů, které nemusí běžet. Při návratu domů se vše znovu zapne. Jednoduché, ale účinné.</p>
              <h3>Ohřev vody v levném tarifu</h3>
              <p>Pokud máte bojler a víceúrovňový tarif elektřiny (nízkotarifní okna D25d, D26d nebo přebytek ze solárních panelů), nastavte chytrou zásuvku nebo chytrý bojler na ohřev jen v době levné energie. Průměrná domácnost takto ušetří 2 000–5 000 Kč ročně na ohřevu vody.</p>
              <h3>Vypínání starých mrazáků a ledniček</h3>
              <p>Starý mrazák v garáži, který je napůl prázdný, může spotřebovat 300–500 kWh ročně. Zvažte, zda ho neprodáte nebo nevyměníte za moderní model. Pokud ho v zimě využíváte minimálně, připojte ho na chytrou zásuvku a v měsících s nízkou venkovní teplotou ho úplně vypněte – obsah přirozeně zmrazíte ve studené garáži.</p>
              <h3>Hlídání spotřeby přes aplikaci nebo Home Assistant</h3>
              <p>Chytré zásuvky s měřením umožňují sledovat denní spotřebu každého spotřebiče a nastavit upozornění, pokud příkon překročí nezvyklou hodnotu. To může odhalit poruchu (přehřívání motoru, vadný termostat) dříve, než způsobí větší škodu.</p>
              <h3>Ovládání na dálku při dovolené</h3>
              <p>Přes chytrou zásuvku můžete vzdáleně zapnout a vypnout zástrčkový přímotop nebo termostat při neočekávané mrazivé noci, zkontrolovat zda je vše vypnuto nebo simulovat přítomnost v bytě rozsvícením světel v různých časech.</p>
              <p>Kompletní přehled způsobů, jak snížit účet za elektřinu, najdete v článku <Link href="/blog/snizit-ucet-za-elektrinu" style={{ color: "#2a6496", textDecoration: "underline" }}>jak snížit účet za elektřinu</Link>.</p>
              <div className="article-tip"><strong>⚠️ Bezpečnost:</strong> Chytrá zásuvka není vhodná pro spotřebiče s tepelnou ochranou jako jsou kamna nebo přímotopy s výkonem přes 2 000 W, pokud zásuvka není pro tento výkon dimenzovaná. Vždy zkontrolujte maximální povolený příkon zásuvky (obvykle 2 500–3 680 W) a nepřekračujte ho. Při instalaci vestavné chytré zásuvky do zdi vždy vypněte jistič a ověřte absenci napětí zkoušečkou. Při pochybnostech přivolejte elektrikáře.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Co je chytrá zásuvka a co umí?", a: "Chytrá zásuvka je standardní elektrická zásuvka doplněná o WiFi nebo Zigbee modul, který umožňuje spínání na dálku přes smartphone, hlasem nebo automaticky podle časovače. Prémiové modely navíc měří okamžitou spotřebu v wattech, celkové kWh od instalace a zobrazují historii spotřeby v aplikaci." },
                  { q: "Kolik stojí standby spotřeba televizoru nebo set-top boxu?", a: "Moderní LED televizor v pohotovostním režimu spotřebuje 0,3–1 W. Starší plazma nebo LCD televizory mohou ve standby brát 5–15 W. Set-top box (satelit, kabelová) bývá nejhorší – starší modely mohou brát 10–20 W i v pohotovosti, přičemž nejsou prakticky nikdy vypnuty. Při ceně 6 Kč/kWh a 15 W standby jde ročně o více než 800 Kč jen za jeden přístroj." },
                  { q: "WiFi nebo Zigbee zásuvka – co si vybrat?", a: "WiFi zásuvky jsou levnější a jednodušší na nastavení – fungují bez brány přímo přes domácí WiFi router. Nevýhodou je závislost na internetu a cloudu výrobce. Zigbee zásuvky vyžadují Zigbee hub (jako Sonoff Zigbee Bridge nebo ConBee), ale fungují i bez internetu, mají nižší latenci a lépe se integrují s Home Assistantem. Pro jednoduché použití volte WiFi, pro rozsáhlejší chytrou domácnost Zigbee." },
                  { q: "Mohu chytrou zásuvku instalovat sám?", a: "Ano, chytrá zásuvka se zasune do standardní zásuvky 230 V, žádná elektrikářská práce není potřeba. Standardní vestavné chytré zásuvky (místo klasické) vyžadují výměnu zásuvky v krabičce ve zdi – to zvládne šikovný kutil, ale vždy nejprve vypněte jistič a ověřte absenci napětí zkoušečkou. Při pochybnostech přivolejte elektrikáře." },
                  { q: "Jak zjistím, které spotřebiče jsou nejdražší?", a: "Nejjednodušší způsob je měřicí zástrčka (wattmetr) za 300–500 Kč. Zastrčte ji mezi zásuvku a spotřebič a nechte ji měřit 24 hodin nebo celý týden. Zobrazí průměrný příkon, celkové kWh a lze spočítat roční náklady. Chytrá zásuvka s měřením spotřeby dělá totéž trvale a data zobrazuje v aplikaci nebo Home Assistantu." },
                ].map(({ q, a }) => (
                  <details key={q} className="faq-item">
                    <summary className="faq-q">{q}</summary>
                    <p className="faq-a">{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="related-section">
              <h2>Související články</h2>
              <div className="related-grid">
                {RELATED.map((r) => (
                  <Link key={r.href} href={r.href} className="card">
                    <div className="card-eyebrow-row"><span>Elektrika & osvětlení</span><span>⏱ {r.read}</span></div>
                    <div className="card-h" style={{ fontSize: 15 }}>{r.title}</div>
                    <div className="card-arrow">Číst →</div>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Obsah</div>
              <nav><ul className="sidebar-toc">
                <li><a href="#co-umi">Co umí chytrá zásuvka</a></li>
                <li><a href="#mereni-spotreby">Měření spotřeby</a></li>
                <li><a href="#standby">Standby spotřeba</a></li>
                <li><a href="#vyber-zasuvky">WiFi vs. Zigbee</a></li>
                <li><a href="#kompatibilita">Kompatibilita s platformami</a></li>
                <li><a href="#tipy-uspora">Tipy pro úsporu</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>33 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 56px; padding: 48px 0 80px; align-items: start; }
        .article-header { margin-bottom: 32px; }
        .article-meta-top { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .article-cat-pill { display: inline-flex; align-items: center; height: 24px; padding: 0 12px; border-radius: 999px; border: 1px solid var(--border); background: var(--surface); font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: background 120ms; }
        .article-cat-pill:hover { background: #e8e7e2; color: var(--text); }
        .article-read-time { font-size: 12px; color: var(--muted); font-weight: 500; }
        .article-h1 { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); line-height: 1.1; font-weight: 400; letter-spacing: -0.01em; margin-bottom: 16px; }
        .article-lead { font-size: 18px; line-height: 1.65; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .article-meta-row { display: flex; gap: 8px; font-size: 12px; color: var(--muted); font-weight: 500; }
        .toc { background: var(--surface); border-radius: 10px; padding: 20px 24px; margin-bottom: 40px; }
        .toc-label { font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .toc-list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .toc-list li a { font-size: 14px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; }
        .toc-list li a:hover { color: var(--text); }
        .article-body section { margin-bottom: 48px; }
        .article-body h2 { font-family: var(--font-serif); font-size: clamp(20px, 2.5vw, 26px); font-weight: 400; line-height: 1.2; margin-bottom: 16px; border-top: 1px solid var(--border); padding-top: 24px; margin-top: 8px; }
        .article-body h3 { font-family: var(--font-sans); font-size: 16px; font-weight: 600; margin-top: 24px; margin-bottom: 10px; color: var(--text); }
        .article-body p { font-size: 16px; line-height: 1.75; color: #2a2a28; font-weight: 300; margin-bottom: 14px; }
        .article-body ul, .article-body ol { padding-left: 22px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 8px; }
        .article-body li { font-size: 15px; line-height: 1.6; color: #2a2a28; font-weight: 300; }
        .article-body strong { font-weight: 600; color: var(--text); }
        .article-tip { background: #fffbeb; border-left: 3px solid #f59e0b; border-radius: 0 8px 8px 0; padding: 14px 18px; font-size: 14px; line-height: 1.6; color: #78716c; margin: 20px 0; }
        .article-table-wrap { overflow-x: auto; margin: 16px 0 24px; }
        .article-table { width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.5; }
        .article-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); background: var(--surface); }
        .article-table td { padding: 10px 14px; border-bottom: 1px solid var(--border); vertical-align: top; color: #2a2a28; font-weight: 300; }
        .article-table tr:last-child td { border-bottom: none; }
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: #fff; }
        .faq-q { font-size: 15px; font-weight: 600; padding: 16px 20px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; transition: background 120ms; }
        .faq-q:hover { background: var(--surface); }
        .faq-q::after { content: "+"; font-size: 18px; font-weight: 300; flex-shrink: 0; margin-left: 12px; }
        details[open] .faq-q::after { content: "−"; }
        .faq-a { font-size: 14px; line-height: 1.65; color: var(--muted); font-weight: 300; padding: 0 20px 16px; }
        .related-section { margin-top: 56px; }
        .related-section h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; margin-bottom: 20px; padding-top: 24px; border-top: 1px solid var(--border); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .article-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 16px; }
        .sidebar-widget { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
        .sidebar-widget-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .sidebar-toc { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sidebar-toc li a { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 400; transition: color 120ms; line-height: 1.4; display: block; }
        .sidebar-toc li a:hover { color: var(--text); }
        .sidebar-cat-link { display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 500; color: var(--text); text-decoration: none; padding: 8px 0; border-bottom: 1px solid var(--border); transition: color 120ms; }
        .sidebar-cat-link:hover { color: var(--muted); }
        .sidebar-cat-link span { font-size: 12px; color: var(--muted); }
        @media (max-width: 960px) { .article-layout { grid-template-columns: 1fr; gap: 0; } .article-sidebar { position: static; margin-top: 40px; } .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .article-layout { padding: 32px 0 60px; } }
      `}</style>
    </>
  );
}
