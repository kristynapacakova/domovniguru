import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import OsivoCalculator from "@/app/components/OsivoCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka osiva trávníku 2026 – kolik kg osiva na zahradu?",
  description: "Spočítej přesné množství travního osiva podle plochy a typu trávníku. Rekreační, okrasný, sportovní nebo stínový trávník — výsledek ihned zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-osiva" },
  openGraph: {
    title: "Kalkulačka osiva trávníku 2026 – kolik kg osiva na zahradu?",
    description: "Kolik kilogramů osiva potřebuju na trávník? Spočítej přesně podle plochy a zvoleného typu směsi.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-osiva",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20osiva%20tr%C3%A1vn%C3%ADku%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka osiva trávníku 2026" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik kg travního osiva potřebuji na 100 m²?", "acceptedAnswer": { "@type": "Answer", "text": "U rekreační směsi s dávkou 25 g/m² je to 2,5 kg, u okrasného trávníku s 35 g/m² 3,5 kg a u odolné sportovní směsi s 45 g/m² 4,5 kg. Stínová směs se vysévá v dávce 30 g/m², tedy 3 kg na 100 m². Při dosevu stávajícího trávníku se dávka snižuje na polovinu, takže u rekreační směsi vystačí 1,25 kg." } },
      { "@type": "Question", "name": "Kdy je nejlepší čas na výsev trávníku?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvhodnější jsou dvě okna v roce: duben až květen a srpen až polovina září. Osivo potřebuje ke klíčení půdu prohřátou alespoň na 8 až 10 °C a trvale vlhký povrch. Podzimní termín bývá úspěšnější, protože plevele už nejsou tak agresivní a půda drží vlhkost. Červnu a červenci se vyhněte — v horku je nutné zalévat i třikrát denně a klíčky stejně často uschnou." } },
      { "@type": "Question", "name": "Vyplatí se vysít osiva víc, než kalkulačka doporučí?", "acceptedAnswer": { "@type": "Answer", "text": "Nevyplatí. Při přesevu vyklíčí semena příliš blízko sebe, rostliny si konkurují o světlo i živiny a zůstanou slabé, s tenkými stébly a náchylností k houbovým chorobám, zejména k plísni sněžné. Doporučené dávky 25 až 45 g/m² už s určitou ztrátou počítají. Rozumná rezerva je deset procent na dosev vyplavených míst, ne dvojnásobek." } },
      { "@type": "Question", "name": "Jak dlouho trvá, než travní osivo vyklíčí?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na složení směsi. Jílek vytrvalý vzchází za 5 až 7 dní, kostřava červená za 10 až 14 dní a lipnice luční až za 21 dní. Běžná směs proto vzchází nerovnoměrně a plocha vypadá tři týdny nesouvisle — to je normální, ne chyba výsevu. Celý porost se uzavře za šest až osm týdnů, první seč přichází při výšce 8 až 10 cm." } },
      { "@type": "Question", "name": "Musím před dosevem trávník vertikutovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, bez odstranění stařiny se dosev téměř nevyplatí. Semeno musí dosednout na půdu, a pokud leží na vrstvě plsti, nemá z čeho klíčit a vysuší se. Trávník nejprve sežněte nakrátko na 2 až 3 cm, vertikutujte do dvou směrů, vyhrabte stařinu a teprve pak vysévejte poloviční dávku. Povrch pak lehce zasypte substrátem a tři týdny udržujte vlhký." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik osiva", "item": "https://www.domovniguru.cz/kalkulacky/kolik-osiva" }
    ]
  }]
};

export default function KolikOsivaPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik osiva</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik osiva na trávník potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej rozměry plochy, zvol typ trávníku a způsob výsevu — kalkulačka ti okamžitě spočítá potřebné množství osiva i startovacího hnojiva.
        </p>

        <OsivoCalculator />
        <AffiliateCTA merchant="hnojik" text="Nakoupit travní osivo" />
        <ShareButtons url="https://www.domovniguru.cz/kalkulacky/kolik-osiva" title="Kalkulačka osiva trávníku 2026 – kolik kg osiva na zahradu?" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak vybrat správné osivo a kdy vysévat pro nejlepší výsledky
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výběr správné travní směsi je pro vzhled trávníku důležitější než přesné množství osiva. Rekreační trávníky jsou určeny pro rodiny s dětmi a domácí mazlíčky — obsahují odolné druhy jako jílek vytrvalý (Lolium perenne) a kostřavu červenou (Festuca rubra), které snáší intenzivní sešlapávání. Okrasné trávníky jsou tvořeny jemnějšími druhy, jako je lipnice luční (Poa pratensis), a vyžadují pravidelnější péči. Pro stinné části zahrady — pod stromy nebo na severní straně — existují speciální stínové směsi s vyšším podílem kostřav, které přežijí i v podmínkách s méně než 3–4 hodinami přímého slunce denně.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nejlepší termín pro nový výsev je jaro (duben až květen) nebo konec léta (srpen až polovina září). Jarní výsev těží z dostatku vlhkosti z půdy, ale musíš počítat s konkurencí plevelů, které v té době rovněž vzcházejí. Podzimní výsev naopak probíhá v době, kdy jsou plevele méně agresivní, a tráva stihne zakořenit ještě před zimou. Vyhni se výsevu v červnu a červenci — v horkém a suchém počasí je nutné zálivky třikrát denně, jinak osivo vyschne ještě před vyklíčením.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Před výsevem půdu dobře zpracuj — rozrušení do hloubky 10–15 cm, doplnění substrátu v případě chudé půdy a urovnání povrchu hráběmi. Startovací hnojivo s vysokým obsahem fosforu (podporuje klíčení a tvorbu kořenů) zapracuj do vrchní vrstvy 3–5 cm. Po výsevu osivo přikryj lehce hráběmi a přiválcuj, aby semena přilnula k půdě. První tři týdny udržuj povrch vlhký zalíváním jemným rozprašovačem — silný proud vody semena smyje nebo přesune. První sečení proveď, až tráva dorůstá výšky 8–10 cm, a seč pouze do výšky 5 cm.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výpočet má tři vstupy a jeden jednoduchý vzorec. Nejprve se z délky a šířky pozemku určí plocha v metrech čtverečních. Ta se vynásobí výsevní dávkou zvolené směsi v gramech na metr čtvereční a výsledek se vydělí tisícem, aby vyšly kilogramy. Nakonec se přidá koeficient způsobu výsevu: nový trávník se seje v plné dávce, dosev stávajícího porostu stačí na padesát procent, protože se zaplňují jen prořídlá místa. Dávky jsou pevně dané typem směsi — rekreační 25 g/m², stínová 30 g/m², okrasná 35 g/m² a odolná sportovní 45 g/m².
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: pozemek 10 × 8 metrů dává plochu 80 m². U rekreační směsi s dávkou 25 g/m² a novém výsevu vyjde 80 × 25 = 2 000 g, tedy 2 kg osiva. Kdybys na stejné ploše zakládal odolný sportovní trávník, dostaneš 80 × 45 = 3 600 g, tedy 3,6 kg. Při dosevu rekreační směsí se počítá polovina, tedy 1 kg. Výsledek se vždy zaokrouhluje nahoru na desetiny kilogramu, abys nekupoval balení, které těsně nestačí.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka vedle osiva dopočítá i dvě praktické hodnoty. Startovací hnojivo se dávkuje 30 gramů na metr čtvereční, u zmíněných 80 m² tedy 2,4 kg. Doporučená zálivka vychází z pěti litrů vody na metr čtvereční a den, u stejné plochy tedy přibližně 400 litrů denně po dobu prvních tří týdnů. Právě tahle položka bývá největší překvapení — zavlažování nového trávníku je náročnější než samotný výsev a bez něj se investice do osiva znehodnotí.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nepovedený trávník se málokdy nepovede kvůli špatnému osivu. Skoro vždy za to může jedna z těchto chyb:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Výsev v nevhodném termínu.</strong> Červen a červenec jsou nejhorší volba, stejně jako výsev do nevyhřáté půdy v březnu. Držte se dubna až května a srpna až poloviny září.</li>
            <li><strong>Dvojnásobná dávka „pro jistotu".</strong> Přehoustlý výsev dá slabá tenká stébla, která v první zimě vymrznou nebo podlehnou plísni sněžné. Dodržte dávku podle typu směsi.</li>
            <li><strong>Vysetí nasucho.</strong> Pokud povrch mezi klíčením jen jednou proschne, většina naklíčených semen zahyne a znovu už nevzejdou. Tři týdny bez vynechání jednoho dne.</li>
            <li><strong>Silný proud hadice.</strong> Voda semena smyje do nižších míst a trávník pak vzejde v pruzích a hnízdech. Používejte jemnou sprchu nebo oscilační zavlažovač.</li>
            <li><strong>Nezpracovaná a neurovnaná půda.</strong> Neudusaný podklad se po zálivce sedne a vzniknou kaluže a vyvýšeniny, které už nikdy nedostanete do roviny. Povrch před výsevem urovnejte hráběmi a lehce přiválcujte.</li>
            <li><strong>Dosev bez vertikutace.</strong> Semeno položené na stařinu nemá kontakt s půdou a vyschne. Před dosevem vždy nejprve odstraňte plsť.</li>
            <li><strong>První seč příliš nakrátko.</strong> Mladý trávník se seká z 8–10 cm na 5 cm, ne na dva centimetry. Ostrý nůž a nenaplněný koš jsou podmínkou, jinou tráva vytrhnete s kořeny.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Osivo je u zakládání trávníku jen jedna položka z několika. Orientační ceny pro plochu kolem 80 m²:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Travní osivo</strong> — 250 až 450 Kč za kilogram podle kvality směsi, u 80 m² tedy 500 až 1 600 Kč.</li>
            <li><strong>Startovací hnojivo s fosforem</strong> — balení 5 kg vyjde na 300 až 500 Kč a vystačí na přibližně 160 m².</li>
            <li><strong>Travní substrát nebo zahradní zemina</strong> na doplnění chudé půdy — 80 až 150 Kč za 50litrový pytel, na jednocentimetrovou vrstvu u 80 m² počítejte s 800 litry.</li>
            <li><strong>Zahradní válec</strong> napouštěný vodou — 1 200 až 2 500 Kč, v půjčovně kolem 200 Kč na den.</li>
            <li><strong>Vertikutátor</strong> pro dosev — denní půjčovna 400 až 700 Kč, nákup od 3 000 Kč.</li>
            <li><strong>Oscilační zavlažovač nebo postřikovač</strong> s jemnou sprchou — 400 až 1 200 Kč; bez něj se první tři týdny nedají zvládnout.</li>
            <li><strong>Hrábě na rozhrnutí a zapravení osiva</strong> a rozmetadlo pro rovnoměrný výsev — 300 až 900 Kč.</li>
            <li><strong>Netkaná textilie</strong> na ochranu proti ptákům a vysychání u malých ploch — 15 až 25 Kč za metr čtvereční.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik kg travního osiva potřebuji na 100 m²?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U rekreační směsi s dávkou 25 g/m² je to 2,5 kg, u okrasného trávníku s 35 g/m² 3,5 kg a u odolné sportovní směsi s 45 g/m² 4,5 kg. Stínová směs se vysévá v dávce 30 g/m², tedy 3 kg na 100 m². Při dosevu stávajícího trávníku se dávka snižuje na polovinu, takže u rekreační směsi vystačí 1,25 kg.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kdy je nejlepší čas na výsev trávníku?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nejvhodnější jsou dvě okna v roce: duben až květen a srpen až polovina září. Osivo potřebuje ke klíčení půdu prohřátou alespoň na 8 až 10 °C a trvale vlhký povrch. Podzimní termín bývá úspěšnější, protože plevele už nejsou tak agresivní a půda drží vlhkost. Červnu a červenci se vyhněte — v horku je nutné zalévat i třikrát denně a klíčky stejně často uschnou.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Vyplatí se vysít osiva víc, než kalkulačka doporučí?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nevyplatí. Při přesevu vyklíčí semena příliš blízko sebe, rostliny si konkurují o světlo i živiny a zůstanou slabé, s tenkými stébly a náchylností k houbovým chorobám, zejména k plísni sněžné. Doporučené dávky 25 až 45 g/m² už s určitou ztrátou počítají. Rozumná rezerva je deset procent na dosev vyplavených míst, ne dvojnásobek.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak dlouho trvá, než travní osivo vyklíčí?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Záleží na složení směsi. Jílek vytrvalý vzchází za 5 až 7 dní, kostřava červená za 10 až 14 dní a lipnice luční až za 21 dní. Běžná směs proto vzchází nerovnoměrně a plocha vypadá tři týdny nesouvisle — to je normální, ne chyba výsevu. Celý porost se uzavře za šest až osm týdnů, první seč přichází při výšce 8 až 10 cm.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Musím před dosevem trávník vertikutovat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ano, bez odstranění stařiny se dosev téměř nevyplatí. Semeno musí dosednout na půdu, a pokud leží na vrstvě plsti, nemá z čeho klíčit a vysuší se. Trávník nejprve sežněte nakrátko na 2 až 3 cm, vertikutujte do dvou směrů, vyhrabte stařinu a teprve pak vysévejte poloviční dávku. Povrch pak lehce zasypte substrátem a tři týdny udržujte vlhký.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak sekat trávník – průvodce péčí o zahradu", href: "/blog/jak-sekat-travnik", icon: "🌿" },
              { title: "Kalkulačka hlíny a substrátu", href: "/kalkulacky/kolik-hliny", icon: "🪴" },
              { title: "Kalkulačka barvy na zeď", href: "/kalkulacky/kolik-barvy", icon: "🪣" },
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
