import type { Metadata } from "next";
import Link from "next/link";
import RozestupCalculator from "@/app/components/RozestupCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka rozestupu rostlin 2026 – kolik rostlin na záhon",
  description: "Kolik rostlin se vejde na váš záhon? Zadejte plochu a rozestup – kalkulačka okamžitě spočítá počet rostlin na m² i celkový počet pro danou plochu.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/rozestup-rostlin-kalkulacka" },
  openGraph: { title: "Kalkulačka rozestupu rostlin 2026", description: "Kolik rostlin se vejde na váš záhon? Zadejte plochu a rozestup – kalkulačka okamžitě spočítá počet rostlin na m² i celkový počet pro danou plochu.", url: "https://www.domovniguru.cz/kalkulacky/rozestup-rostlin-kalkulacka", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20rozestupu%20rostlin%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka rozestupu rostlin 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik rostlin se vejde na 1 m² při rozestupu 30 cm?", "acceptedAnswer": { "@type": "Answer", "text": "Při rozestupu 30 cm v obou směrech vychází 11,1 rostliny na metr čtvereční, protože jedna rostlina zabírá čtverec 0,3 × 0,3 metru, tedy 0,09 m². Při rozestupu 20 cm je to 25 rostlin na metr čtvereční, při 40 cm 6,3 rostliny a při 50 cm jen 4 rostliny. Počet na metr čtvereční se s rozestupem mění kvadraticky, nikoliv lineárně." } },
      { "@type": "Question", "name": "Jak se počítá počet rostlin na záhon?", "acceptedAnswer": { "@type": "Answer", "text": "Rozestup se nejprve převede z centimetrů na metry, pak se spočítá počet rostlin na metr čtvereční jako 1 dělené druhou mocninou rozestupu a tento počet se vynásobí plochou záhonu. Výsledek se zaokrouhluje dolů na celé rostliny, protože půl rostliny vysadit nelze. Příklad: záhon 4 m² s rozestupem 30 cm pojme 44 rostlin." } },
      { "@type": "Question", "name": "Proč vyjde v praxi méně rostlin, než kalkulačka spočítá?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka počítá s čistou osázenou plochou v pravidelném čtvercovém sponu. V praxi ubírají místo okrajové pásy, kam rostlina už nedosáhne, a obslužné pěšinky mezi řádky. U úzkého záhonu o šířce 60 cm vyjde reálně i o pětinu méně rostlin. Proto do kalkulačky zadávejte jen plochu, kterou skutečně osázíte, bez cestiček." } },
      { "@type": "Question", "name": "Je lepší čtvercový, nebo trojúhelníkový spon?", "acceptedAnswer": { "@type": "Answer", "text": "Trojúhelníkový spon, kdy jsou rostliny v sousedních řádcích posunuté o polovinu rozestupu, umístí na stejnou plochu přibližně o 15 procent rostlin víc při zachování stejné vzdálenosti mezi sousedy. Vyplatí se u trvalkových a pokryvných výsadeb, kde se plocha má rychle zapojit. U zeleniny je naopak praktičtější čtvercový spon, protože se v řádcích snáz okopává a sklízí." } },
      { "@type": "Question", "name": "Co dělat, když je záhon už přehoustlý?", "acceptedAnswer": { "@type": "Answer", "text": "U kořenové zeleniny a salátů jednoduše protrhejte — slabší jedince vytáhněte a zbylé nechte v doporučeném rozestupu. U rajčat a paprik, kde se protrhávat nedá, pomůže odstranění spodních listů do výšky 30 cm, vyvazování do výšky a důsledné vylamování zálistků, aby se zlepšilo proudění vzduchu. Zalévejte ke kořeni, nikdy na list, a při prvních známkách plísně zasáhněte dřív než obvykle." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Rozestup rostlin", "item": "https://www.domovniguru.cz/kalkulacky/rozestup-rostlin-kalkulacka" }
    ]
  }]
};

export default function RozestupRostlinKalkulackaPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Rozestup rostlin</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik rostlin se vejde na můj záhon?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadejte plochu záhonu a rozestup mezi rostlinami — kalkulačka vám okamžitě spočítá, kolik rostlin se na záhon vejde a kolik kusů na m².</p>

        <RozestupCalculator />
        <AffiliateCTA merchant="hnojik" text="Nakoupit sadbu a hnojivo" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Proč je správný rozestup rostlin tak důležitý</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozestup mezi rostlinami není jen otázka estetiky nebo úspory místa — má přímý dopad na zdraví a výnos celého záhonu. Příliš hustá výsadba omezuje proudění vzduchu mezi rostlinami, vlhkost se pak déle udržuje na listech a stoncích a vzniká ideální prostředí pro houbové choroby, jako je plíseň bramborová, padlí nebo různé typy hnilob. Naopak dostatečný rozestup umožňuje vzduchu volně proudit, listy rychleji osychají po dešti či zálivce a riziko infekce výrazně klesá.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dalším klíčovým faktorem je konkurence o živiny, vodu a světlo. Když jsou rostliny vysazeny příliš blízko sebe, jejich kořenové systémy si navzájem konkurují o vodu a minerály v půdě, což zpomaluje růst a snižuje výnos i kvalitu plodů. Stejně tak listy sousedních rostlin si vzájemně stíní — rostliny pak musí investovat energii do růstu směrem ke světlu místo do tvorby plodů či kořenů. U slunomilných druhů, jako jsou rajčata nebo paprika, se nedostatek světla projeví výrazně nižší sklizní.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Přehoustnutí záhonu také komplikuje běžnou péči — okopávání, hnojení, sledování škůdců i samotnou sklizeň. Naopak příliš velký rozestup znamená neefektivní využití prostoru a nižší celkový výnos z plochy záhonu. Cílem je proto najít rovnováhu, která odpovídá konkrétnímu druhu rostliny, jejímu vzrůstu a nárokům na prostor. Menší a kompaktnější druhy jako saláty nebo špenát si vystačí s rozestupem 20–25 cm, zatímco rozpínavé a robustní rostliny, jako keře rybízu nebo angreštu, potřebují 60–100 cm prostoru, aby se mohly plně rozrůst.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Orientační rozestupy pro běžné plodiny v zahradě:
          </p>
          <div style={{ overflowX: "auto", marginBottom: "16px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e8e0d8" }}>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#2a2a28" }}>Plodina</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#2a2a28" }}>Doporučený rozestup</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Rajčata", "40–50 cm"],
                  ["Papriky", "35–45 cm"],
                  ["Saláty", "20–25 cm"],
                  ["Špenát", "20–25 cm"],
                  ["Jahody", "30 cm"],
                  ["Mrkev", "5–8 cm"],
                  ["Cibule", "10–15 cm"],
                  ["Okurky (na zemi)", "60–80 cm"],
                  ["Keře (rybíz, angrešt)", "60–100 cm"],
                ].map(([plodina, hodnota]) => (
                  <tr key={plodina} style={{ borderBottom: "1px solid #e8e0d8" }}>
                    <td style={{ padding: "8px 12px", color: "#3a3a30" }}>{plodina}</td>
                    <td style={{ padding: "8px 12px", color: "#3a3a30" }}>{hodnota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tyto hodnoty jsou orientační — konkrétní rozestup se může lišit podle odrůdy, způsobu pěstování (volná půda, vyvýšený záhon, skleník) a místních podmínek. Při pochybnostech je vždy lepší zvolit raději o trochu větší rozestup, protože přehoustlý záhon je obtížné napravit zpětně, zatímco mírně volnější výsadba jen o málo snižuje celkový výnos z plochy.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka vychází z čtvercového sponu, tedy z předpokladu, že rozestup je stejný v řádku i mezi řádky. Každá rostlina pak zabírá čtverec o straně rovné rozestupu. Rozestup se nejprve převede z centimetrů na metry (dělením stem), pak se spočítá počet rostlin na metr čtvereční jako 1 dělené druhou mocninou rozestupu a tento počet se nakonec vynásobí plochou záhonu. Celkový počet se zaokrouhluje dolů na celé rostliny — půl sazenice vysadit nelze.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: záhon 4 m², rozestup 30 cm. Převod dává 0,3 m, druhá mocnina 0,09 m², takže na metr čtvereční se vejde 1 ÷ 0,09 = 11,1 rostliny. Na čtyřech metrech čtverečních to je 44,4, po zaokrouhlení dolů 44 rostlin. Kdybyste u stejného záhonu zvolili rozestup 50 cm, vyjde 1 ÷ 0,25 = 4 rostliny na metr čtvereční a celkem 16 kusů.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Z toho plyne nejdůležitější poznatek: počet rostlin nereaguje na rozestup lineárně, ale kvadraticky. Zvětšení rozestupu z 30 na 40 cm, tedy o třetinu, sníží počet rostlin z 11,1 na 6,3 na metr čtvereční, tedy o 43 procent. Naopak zúžení z 40 na 20 cm počet nezdvojnásobí, ale zečtyřnásobí. Při plánování nákupu sadby se proto vyplatí rozestup měnit po malých krocích a sledovat, jak rychle se počet mění.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Zadání celé plochy záhonu včetně pěšinek.</strong> Do kalkulačky patří jen plocha, kterou skutečně osázíte. Obslužné cestičky a okrajové pásy mohou u úzkých záhonů ubrat pětinu.</li>
            <li><strong>Rozestup podle velikosti sazenice.</strong> Sazenice rajčete je v květnu desetkrát menší než rostlina v srpnu. Rozestup se vždy odvozuje od konečného vzrůstu, ne od toho, co držíte v ruce.</li>
            <li><strong>Použití stejného rozestupu v řádku i mezi řádky u vysokých plodin.</strong> U vyvazovaných rajčat se běžně dělá 40 cm v řádku a 80 až 100 cm mezi řádky, aby se dalo projít a aby se porost provzdušnil.</li>
            <li><strong>Ignorování odrůdy.</strong> Determinantní zakrslé rajče vystačí s 40 cm, indeterminantní tyčkové potřebuje 50 cm a navíc oporu. Rozdíly mezi odrůdami bývají větší než mezi druhy.</li>
            <li><strong>Výsadba na hustotu kvůli výnosu.</strong> Dvojnásobek rostlin nedá dvojnásobnou sklizeň — dá menší plody, pozdější zrání a plísně. Výnos z plochy má své maximum, za nímž klesá.</li>
            <li><strong>Nepočítaná rezerva na úhyn.</strong> Z vysazené sadby se neujme obvykle pět až deset procent. U vzácnějších odrůd se vyplatí koupit o několik kusů víc.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Orientační ceny materiálu pro osázení běžného zeleninového záhonu:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Sadba zeleniny</strong> — 10 až 25 Kč za kus u rajčat a paprik, 4 až 8 Kč u salátů; u 44 rostlin tedy 200 až 1 000 Kč.</li>
            <li><strong>Výsadbová šablona nebo značkovací lať</strong> s odměřeným rozestupem — do 300 Kč, dá se vyrobit i z latě a hřebíků.</li>
            <li><strong>Opory a tyčky</strong> pro vyvazovanou zeleninu — bambusová tyč 30 až 60 Kč, spirálová opora 80 až 150 Kč za kus.</li>
            <li><strong>Mulčovací textilie nebo sláma</strong> na potlačení plevele mezi rostlinami — 15 až 30 Kč za metr čtvereční.</li>
            <li><strong>Kapková hadice s kolíky</strong> pro zálivku ke kořeni místo na list — 600 až 1 500 Kč na záhon.</li>
            <li><strong>Hnojivo pro náročné plodiny</strong> v průběhu sezóny — 200 až 400 Kč za kilogram.</li>
            <li><strong>Sadbovací kolík nebo rýč na sadbu</strong> a kolečko na rozvoz substrátu — 300 až 1 200 Kč.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik rostlin se vejde na 1 m² při rozestupu 30 cm?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při rozestupu 30 cm v obou směrech vychází 11,1 rostliny na metr čtvereční, protože jedna rostlina zabírá čtverec 0,3 × 0,3 metru, tedy 0,09 m². Při rozestupu 20 cm je to 25 rostlin na metr čtvereční, při 40 cm 6,3 rostliny a při 50 cm jen 4 rostliny. Počet na metr čtvereční se s rozestupem mění kvadraticky, nikoliv lineárně.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak se počítá počet rostlin na záhon?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Rozestup se nejprve převede z centimetrů na metry, pak se spočítá počet rostlin na metr čtvereční jako 1 dělené druhou mocninou rozestupu a tento počet se vynásobí plochou záhonu. Výsledek se zaokrouhluje dolů na celé rostliny, protože půl rostliny vysadit nelze. Příklad: záhon 4 m² s rozestupem 30 cm pojme 44 rostlin.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč vyjde v praxi méně rostlin, než kalkulačka spočítá?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka počítá s čistou osázenou plochou v pravidelném čtvercovém sponu. V praxi ubírají místo okrajové pásy, kam rostlina už nedosáhne, a obslužné pěšinky mezi řádky. U úzkého záhonu o šířce 60 cm vyjde reálně i o pětinu méně rostlin. Proto do kalkulačky zadávejte jen plochu, kterou skutečně osázíte, bez cestiček.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Je lepší čtvercový, nebo trojúhelníkový spon?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Trojúhelníkový spon, kdy jsou rostliny v sousedních řádcích posunuté o polovinu rozestupu, umístí na stejnou plochu přibližně o 15 procent rostlin víc při zachování stejné vzdálenosti mezi sousedy. Vyplatí se u trvalkových a pokryvných výsadeb, kde se plocha má rychle zapojit. U zeleniny je naopak praktičtější čtvercový spon, protože se v řádcích snáz okopává a sklízí.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Co dělat, když je záhon už přehoustlý?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U kořenové zeleniny a salátů jednoduše protrhejte — slabší jedince vytáhněte a zbylé nechte v doporučeném rozestupu. U rajčat a paprik, kde se protrhávat nedá, pomůže odstranění spodních listů do výšky 30 cm, vyvazování do výšky a důsledné vylamování zálistků, aby se zlepšilo proudění vzduchu. Zalévejte ke kořeni, nikdy na list, a při prvních známkách plísně zasáhněte dřív než obvykle.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak pěstovat rajčata", href: "/blog/jak-pestovat-rajcata", icon: "🍅" },
              { title: "Jarní zahrada – co nezapomenout", href: "/blog/jarni-zahrada", icon: "🌷" },
              { title: "Kalkulačka osiva na záhon", href: "/kalkulacky/kolik-osiva", icon: "🌾" },
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
