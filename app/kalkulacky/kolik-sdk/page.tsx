import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import SdkCalculator from "@/app/components/SdkCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka sádrokartonu 2026 – kolik desek a profilů potřebuju?",
  description: "Spočítej přesné množství SDK desek, CW a UW profilů, šroubů a tmelu na sádrokartonovou příčku. Zadej rozměry a počet vrstev — výsledek ihned zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-sdk" },
  openGraph: {
    title: "Kalkulačka sádrokartonu 2026 – kolik desek a profilů potřebuju?",
    description: "Kolik SDK desek a profilů potřebuju na příčku? Spočítej přesně podle rozměrů a počtu vrstev.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-sdk",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20s%C3%A1drokartonu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka sádrokartonu 2026" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik SDK desek potřebuji na příčku 3,5 × 2,6 metru?", "acceptedAnswer": { "@type": "Answer", "text": "Příčka má plochu 9,1 m². Deska 1 200 × 2 500 mm pokryje 3 m², takže na jednu stranu vycházejí 4 desky a při jednovrstvém opláštění je to 8 desek celkem. U dvojitého opláštění, které se používá do koupelen a kvůli akustice, se počet zdvojnásobí na 16 desek." } },
      { "@type": "Question", "name": "Jaká je správná rozteč CW profilů?", "acceptedAnswer": { "@type": "Answer", "text": "Standardní rozteč svislých CW profilů je 60 centimetrů, což odpovídá šířce desky 1 200 mm dělené na dvě poloviny — spoj desek pak vždy padne na profil. Rozteč 40 centimetrů se používá pod keramický obklad, u příček vyšších než 3 metry a tam, kde se na stěnu zavěšuje nábytek." } },
      { "@type": "Question", "name": "Kolik šroubů potřebuji na jednu sádrokartonovou desku?", "acceptedAnswer": { "@type": "Answer", "text": "Přibližně 25 kusů na desku, s čímž počítá i kalkulačka. Odpovídá to rozteči okolo 25 centimetrů na okrajích desky a 30 centimetrů v ploše u svislých profilů. Na první vrstvu se používají šrouby TN 3,5 × 25 mm, na druhou vrstvu delší 3,5 × 35 mm. Hlavička musí být zapuštěná pod povrch kartonu, ale nesmí jej protrhnout — proto se nasazuje hloubkový omezovač." } },
      { "@type": "Question", "name": "Kolik tmelu spotřebuji na sádrokartonovou příčku?", "acceptedAnswer": { "@type": "Answer", "text": "Počítá se přibližně 0,3 kg na metr čtvereční opláštění, takže u příčky 9,1 m² tmelené z obou stran vychází okolo 6 kilogramů. Toto množství zahrnuje tři vrstvy: vyplnění spár s vloženou výztužnou páskou, přestěrkování hlaviček šroubů a finální tenkou vrstvu před brusem. Dvojité opláštění spotřebu tmelu nezvyšuje, protože se tmelí jen vrchní vrstva." } },
      { "@type": "Question", "name": "Musím do příčky dávat minerální vatu?", "acceptedAnswer": { "@type": "Answer", "text": "Z hlediska statiky ne, z hlediska akustiky ano. Prázdná dutina mezi deskami funguje jako rezonanční box a neprůzvučnost takové příčky je přibližně o 10 decibelů nižší, než když je dutina vyplněná. Vata by měla zabírat okolo dvou třetin hloubky kostry, tedy 60 mm do profilu CW 75." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik SDK", "item": "https://www.domovniguru.cz/kalkulacky/kolik-sdk" }
    ]
  }]
};

export default function KolikSdkPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik SDK</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik sádrokartonu potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej délku a výšku příčky, počet vrstev desek a to, zda chceš vložit minerální vatu — kalkulačka ti okamžitě spočítá počet SDK desek, CW a UW profilů, šroubů i potřebné množství tmelu.
        </p>

        <SdkCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit SDK materiál" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak správně naplánovat materiál na SDK příčku
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Sádrokartonová příčka se skládá z ocelové kostry z UW a CW profilů a opláštění sádrokartonovými deskami. UW profily (U-shaped Wall) se kotví do podlahy a stropu po celé délce příčky — tvoří rám. CW profily (C-shaped Wall) se vsazují do UW každých 60 cm a tvoří svislé výztuhy. Standardní deska SDK má rozměr 1 200 × 2 500 mm, tedy plochu 3 m². Kalkulačka s tímto rozměrem počítá a přidává rezervu na řezy. Při výšce místnosti do 2,6 m zpravidla vystačí jedna deska na výšku bez příčného spoje, což montáž výrazně zjednodušuje.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet vrstev desek závisí na požadavcích na zvukovou izolaci a požární odolnost. Jednoduchá příčka (1+1) s tloušťkou kostry 75 mm a minerální vatou dosahuje vzduchové neprůzvučnosti Rw přibližně 48–52 dB, což postačuje pro oddělení obývacího pokoje od ložnice. Pro koupelny nebo domácí kina se doporučuje dvojité opláštění (2+2), které zvyšuje neprůzvučnost o 5–8 dB. Minerální vata také zlepšuje tepelnou izolaci — v příčce oddělující vytápěné a nevytápěné prostory je proto téměř nezbytná.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Při tmelení a finální úpravě povrchu počítej se třemi vrstvami tmelu — základní vyplnění spár, přestěrkování a finální přebroušení. Spotřeba tmelu je přibližně 0,3 kg na m² na jednu vrstvu, kalkulačka uvádí celkovou zásobu na obě strany. Na spáry používej armovací sklotextilní pásku, která zabraňuje vzniku trhlin v rozích a na spojích desek. Výsledný povrch je potřeba penetrovat před malováním — sádrová deska je jinak velmi savá a barva by se spotřebovala dvojnásobně.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka počítá každou položku zvlášť, všechny ale vycházejí ze dvou vstupů — délky a výšky příčky. Plocha příčky je jejich součin. Desky: plocha se vydělí třemi metry čtverečními (velikost jedné desky) a zaokrouhlí nahoru, výsledek se vynásobí dvěma stranami a počtem vrstev. UW profily: délka příčky se vydělí třemi metry, přidá se jeden profil, výsledek se zdvojnásobí na podlahu a strop, zaokrouhlí nahoru na celé kusy a přepočte na metry. CW profily: délka se vydělí roztečí 0,6 m, přidá se koncová stojka, zaokrouhlí nahoru a vynásobí výškou příčky. Šrouby: 25 kusů na každou desku. Tmel: 0,3 kg na metr čtvereční z obou stran. Vata: plocha příčky, pokud ji zvolíte.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Na výchozích hodnotách, tedy příčce 3,5 × 2,6 m, to dává konkrétní čísla. Plocha je 9,1 m². Desek na stranu vychází 4 (9,1 ÷ 3 = 3,03 a zaokrouhluje se nahoru), celkem tedy 8 desek při jedné vrstvě a 16 při dvou. UW: 3,5 ÷ 3 + 1 = 2,17, krát dvě strany je 4,33, tedy 5 třímetrových profilů a 15 metrů materiálu. CW: 3,5 ÷ 0,6 + 1 = 6,83, tedy 7 stojek, které při výšce 2,6 m představují 18,2 metru profilu. Šroubů 8 × 25 = 200 kusů, tmelu 9,1 × 2 × 0,3 = 5,46, tedy 6 kilogramů. S volbou minerální vaty 9,1 m² izolace.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Zaokrouhlování nahoru u desek i profilů funguje jako skrytá rezerva na řezy. Druhá vrstva opláštění zdvojnásobí desky i šrouby, ale nemění profily ani tmel: kostra je stejná a tmelí se vždy jen vrchní vrstva. A pokud v příčce plánujete dveře, přidejte si ručně dva CW profily na zesílení ostění a jeden UW profil na překlad — dveřní otvor má vlastní nosný rám, který se k běžným stojkám jen přidává.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Profily bez napojovacího těsnění.</strong> UW a koncové CW profily se k podlaze, stropu a stěnám lepí přes samolepicí těsnicí pásek. Bez něj vzniká akustický most a příčka ztrácí 5 až 8 decibelů neprůzvučnosti.</li>
            <li><strong>Rozteč 60 cm pod obklad.</strong> Pod keramický obklad, závěsné WC nebo těžkou skříňku patří rozteč 40 cm a v místě kotvení nosný prvek — běžná kostra takové zatížení nepřenese.</li>
            <li><strong>Deska dotažená na podlahu.</strong> Dole se nechává mezera 10 mm, u stropu 5 mm — jinak deska nasává vlhkost a praskne.</li>
            <li><strong>Spoje druhé vrstvy ve stejné linii.</strong> Druhá vrstva se přesazuje o půl desky, jinak se trhlina propíše skrz oba pláty.</li>
            <li><strong>Protržený karton pod hlavičkou šroubu.</strong> Šroub bez hloubkového omezovače projde kartonem a nedrží. Hlavička má být zapuštěná tak, aby ji špachtle přejela bez zachytávání.</li>
            <li><strong>Tmelení bez výztužné pásky.</strong> Spára bez sklotextilní nebo papírové pásky popraská vždy, i při perfektním tmelení. Páska se vkládá do první vrstvy tmelu.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kromě desek a profilů spotřebuje příčka celou řadu drobného materiálu. Orientační ceny podle běžné nabídky:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Desky SDK 12,5 mm</strong> — bílá standardní 100 až 180 Kč za kus (3 m²), zelená impregnovaná do koupelny 180 až 280 Kč.</li>
            <li><strong>Profily CW a UW</strong> — 25 až 40 Kč za běžný metr CW 75, 20 až 30 Kč za metr UW 75. U příčky 3,5 × 2,6 m jde o 18 metrů CW a 15 metrů UW.</li>
            <li><strong>Šrouby TN 3,5 × 25 mm</strong> — 150 až 300 Kč za 1 000 kusů, na druhou vrstvu délka 35 mm.</li>
            <li><strong>Natloukací hmoždinky 6 × 40 mm</strong> — 100 až 200 Kč za 100 kusů, kotvení UW profilu každých 80 cm.</li>
            <li><strong>Napojovací těsnicí pásek</strong> — 100 až 200 Kč za roli 30 m, nejlevnější akustické opatření u příčky.</li>
            <li><strong>Výztužná sklotextilní páska</strong> — 80 až 150 Kč za 50 m, na vnější rohy ochranný profil 30 až 60 Kč/m.</li>
            <li><strong>Spárovací a finální tmel</strong> — 300 až 600 Kč za 20 kg, pytel vystačí na okolo 30 m² opláštění.</li>
            <li><strong>Minerální vata 60 mm</strong> — 90 až 150 Kč/m², tedy okolo 1 000 Kč na příčku 9 m².</li>
            <li><strong>Akumulátorový šroubovák s hloubkovým nástavcem</strong> — 500 až 1 500 Kč, nástavec samotný 100 až 200 Kč.</li>
            <li><strong>Nůž na SDK, hoblík na hrany a vykružovák na elektroinstalaci</strong> — 400 až 900 Kč celkem.</li>
            <li><strong>Brusná mřížka P120 s držákem a respirátor FFP2</strong> — 350 až 950 Kč. Sádrový prach je jemný a dostane se všude.</li>
            <li><strong>Penetrace</strong> — 300 až 600 Kč za 5litrový koncentrát, před malováním vždy.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik SDK desek potřebuji na příčku 3,5 × 2,6 metru?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Příčka má plochu 9,1 m². Deska 1 200 × 2 500 mm pokryje 3 m², takže na jednu stranu vycházejí 4 desky a při jednovrstvém opláštění je to 8 desek celkem. U dvojitého opláštění, které se používá do koupelen a kvůli akustice, se počet zdvojnásobí na 16 desek.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jaká je správná rozteč CW profilů?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Standardní rozteč svislých CW profilů je 60 centimetrů, což odpovídá šířce desky 1 200 mm dělené na dvě poloviny — spoj desek pak vždy padne na profil. Rozteč 40 centimetrů se používá pod keramický obklad, u příček vyšších než 3 metry a tam, kde se na stěnu zavěšuje nábytek.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik šroubů potřebuji na jednu sádrokartonovou desku?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Přibližně 25 kusů na desku, s čímž počítá i kalkulačka. Odpovídá to rozteči okolo 25 centimetrů na okrajích desky a 30 centimetrů v ploše u svislých profilů. Na první vrstvu se používají šrouby TN 3,5 × 25 mm, na druhou vrstvu delší 3,5 × 35 mm. Hlavička musí být zapuštěná pod povrch kartonu, ale nesmí jej protrhnout — proto se nasazuje hloubkový omezovač.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik tmelu spotřebuji na sádrokartonovou příčku?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Počítá se přibližně 0,3 kg na metr čtvereční opláštění, takže u příčky 9,1 m² tmelené z obou stran vychází okolo 6 kilogramů. Toto množství zahrnuje tři vrstvy: vyplnění spár s vloženou výztužnou páskou, přestěrkování hlaviček šroubů a finální tenkou vrstvu před brusem. Dvojité opláštění spotřebu tmelu nezvyšuje, protože se tmelí jen vrchní vrstva.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Musím do příčky dávat minerální vatu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Z hlediska statiky ne, z hlediska akustiky ano. Prázdná dutina mezi deskami funguje jako rezonanční box a neprůzvučnost takové příčky je přibližně o 10 decibelů nižší, než když je dutina vyplněná. Vata by měla zabírat okolo dvou třetin hloubky kostry, tedy 60 mm do profilu CW 75.
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
              { title: "Kolik cihel potřebuju – kalkulačka zdiva", href: "/kalkulacky/kolik-cihel", icon: "🏗️" },
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
