import AffiliateCTA from "@/app/components/AffiliateCTA";
import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "../../components/ShareButtons";
import SoilClient from "./SoilClient"; // Importujeme ten most

export const metadata: Metadata = {
  title: "Kalkulačka objemu zeminy: Kolik litrů substrátu koupit? 2026",
  description: "Spočítejte si přesně, kolik litrů hlíny potřebujete pro své květináče a truhlíky. Výpočet pro kulaté i hranaté nádoby.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-hliny" },
  openGraph: { url: "https://www.domovniguru.cz/kalkulacky/kolik-hliny", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik litrů substrátu se vejde do květináče?", "acceptedAnswer": { "@type": "Answer", "text": "Objem hranatého květináče zjistíte vynásobením šířky, délky a výšky náplně v centimetrech a vydělením tisícem. Nádoba 30 × 30 cm naplněná do výšky 30 cm má tedy 27 litrů. U kulatého květináče o průměru 30 cm a stejné výšce vychází objem jen 21,2 litru, protože kruh zabírá přibližně 79 procent plochy opsaného kvadrátu." } },
      { "@type": "Question", "name": "Mám měřit vnitřní, nebo vnější rozměr nádoby?", "acceptedAnswer": { "@type": "Answer", "text": "Vždy vnitřní. Stěny keramického nebo betonového květináče mají běžně 1,5 až 3 centimetry a u menších nádob tím objem klesne i o pětinu. U kónických květináčů, které se zužují ke dnu, zadejte průměr mezi horním a spodním okrajem — jinak výsledek nadsadíte o deset až patnáct procent." } },
      { "@type": "Question", "name": "Proč se v pytli substrátu udává jiný objem, než pak nasypu?", "acceptedAnswer": { "@type": "Answer", "text": "Objem na pytli se měří u volně sypaného a provzdušněného substrátu. Po nasypání, zalití a usednutí ztratí rašelinový substrát přibližně deset až dvacet procent objemu. U 50litrového pytle to znamená reálných 40 až 45 litrů. Proto k vypočítanému objemu připočítejte alespoň desetiprocentní rezervu." } },
      { "@type": "Question", "name": "Potřebuji na dno květináče drenážní vrstvu?", "acceptedAnswer": { "@type": "Answer", "text": "U nádoby s odtokovým otvorem a kvalitním substrátem drenáž nutná není a některé studie ukazují, že vrstva kameniva zasycenou zónu naopak zvedne blíž ke kořenům. Přínosná je u nádob bez otvoru, u truhlíků na slunci a u sukulentů: dva až tři centimetry keramzitu nebo drceného kameniva. Tuto vrstvu pak odečtěte od výšky náplně, kterou zadáváte do kalkulačky." } },
      { "@type": "Question", "name": "Jak často se substrát v květináči mění?", "acceptedAnswer": { "@type": "Answer", "text": "U rychle rostoucích pokojových rostlin každé jedna až dvě sezóny, u pomalu rostoucích a velkých kádí stačí vyměnit horní třetinu a doplnit hnojivo. Letničky v truhlících dostávají nový substrát každý rok. Starý substrát je slanější, utažený a zbavený živin — poznáte to podle vody, která po zálivce stéká po povrchu a nevsakuje se." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik hlíny", "item": "https://www.domovniguru.cz/kalkulacky/kolik-hliny" }
    ]
  }]
};

export default function SoilCalculatorPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "60px 0" }}>
      <nav className="breadcrumb">
        <Link href="/">Domů</Link> / <Link href="/kalkulacky">Kalkulačky</Link> / <span>Kolik hlíny?</span>
      </nav>

      <div style={{ maxWidth: "800px", margin: "40px auto" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "40px", marginBottom: "20px" }}>
          Kalkulačka objemu zeminy a substrátu
        </h1>
        <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
          Neodhadujte litry od oka. Tento nástroj vám přesně spočítá, kolik pytlů budete v obchodě potřebovat.
        </p>

        {/* Teď je to čisté a bezpečné */}
        <SoilClient />
        <AffiliateCTA merchant="hnojik" text="Nakoupit substrát" />

        <div style={{ marginTop: "60px", padding: "30px", background: "#f8f9fa", borderRadius: "12px" }}>
          <h3>Jak měřit květináče?</h3>
          <p>
            Vždy měřte <strong>vnitřní rozměr</strong> nádoby. Pokud má květináč kónický tvar, 
            zadejte průměrný rozměr mezi horním a spodním okrajem.
          </p>
        </div>

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jaký substrát patří do květináčů a truhlíků</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Zahradní zemina z záhonu do nádoby nepatří. V omezeném objemu květináče se po několika zálivkách utáhne, přestane propouštět vzduch a kořeny se v ní udusí. Pěstební substráty se proto míchají z rašeliny nebo kokosových vláken, perlitu či keramzitu pro vzdušnost a kompostu jako zdroje živin. Takový substrát drží vodu, ale zároveň přebytek vody propustí ke dnu — to je u nádobového pěstování podstatnější než obsah hnojiva.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pro většinu letniček, bylinek a pokojových rostlin vystačí univerzální substrát s mírně kyselým pH 5,5 až 6,5. Speciální směsi mají důvod: substrát pro rododendrony a azalky je výrazně kyselejší, směs pro kaktusy a sukulenty obsahuje až třetinu písku a drti, substrát pro orchideje je tvořen převážně kůrou a rašeliníkem. Rajčata a papriky v kádích ocení substrát s pomalu rozpustným hnojivem, protože v nádobě spotřebují živiny během šesti až osmi týdnů.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Objem nádoby je u pěstování v květináči limit, který nic nenahradí. Bylinky vystačí s pěti až osmi litry, letničky v truhlíku potřebují alespoň šest litrů na rostlinu, rajče v kádi minimálně dvacet litrů a malá dřevina třicet až padesát litrů. Právě proto se vyplatí objem nádoby znát přesně — z něj se odvozuje nejen nákup substrátu, ale i to, co do nádoby vůbec můžete vysadit.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka počítá objem nádoby v litrech a rozlišuje dva tvary. U hranatého květináče nebo truhlíku vynásobí šířku, délku a výšku náplně v centimetrech a výsledek vydělí tisícem — jeden litr totiž odpovídá tisíci kubických centimetrů. U kulaté nádoby vezme zadaný rozměr jako průměr, vydělí ho dvěma na poloměr a objem spočítá jako π × poloměr² × výška, opět dělené tisícem. Výsledek se zaokrouhluje na desetiny litru.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: hranatý truhlík 80 × 20 cm plněný do výšky 18 cm má objem 80 × 20 × 18 = 28 800 cm³, tedy 28,8 litru. Na dva takové truhlíky tak vystačí jediný 60litrový pytel substrátu. Kulatý květináč o průměru 30 cm plněný do výšky 30 cm má naopak jen 21,2 litru, i když hranatá nádoba se stejnými vnějšími mírami má 27 litrů. Rozdíl dělá právě kruhová podstava, která zaplní přibližně 79 procent plochy opsaného čtverce.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Zásadní je zadávat výšku náplně, nikoliv celkovou výšku nádoby. Substrát se vždy sype asi dva až tři centimetry pod horní okraj, aby při zálivce nepřetékal, a pokud dáváte na dno drenáž z keramzitu, odečtěte i tu. U kónických květináčů, které se ke dnu zužují, zadejte průměr přibližně v polovině výšky — s horním průměrem by výsledek vyšel o deset až patnáct procent vyšší, než se do nádoby skutečně vejde.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Při nákupu substrátu se opakují stále stejné omyly — většina z nich vede k tomu, že lidé přivezou buď o polovinu méně, nebo o dva pytle víc, než potřebují:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Měření vnějšího rozměru.</strong> Stěny keramického nebo betonového květináče mají 1,5 až 3 cm na každé straně. U nádoby 30 × 30 cm to znamená rozdíl několika litrů.</li>
            <li><strong>Zadání celé výšky nádoby.</strong> Substrát se sype dva až tři centimetry pod okraj. U nízkého truhlíku je to pětina objemu.</li>
            <li><strong>Nezohledněná drenáž.</strong> Tři centimetry keramzitu na dně odeberou u kulatého květináče o průměru 30 cm přes dva litry substrátu.</li>
            <li><strong>Zapomenutý objem kořenového balu.</strong> Při přesazování zabere bal přesazované rostliny část objemu, u větší pokojovky klidně třetinu. Substrátu je pak potřeba výrazně méně.</li>
            <li><strong>Nulová rezerva.</strong> Substrát po zalití sedne o deset až dvacet procent a na jaře se nádoby dosypávají. Jeden pytel navíc se vždy hodí.</li>
            <li><strong>Použití zahradní zeminy.</strong> V nádobě se utáhne, zadržuje vodu a nepropouští vzduch. Kořeny hnijí a rostlina zakrní.</li>
            <li><strong>Nádoba bez odtokového otvoru.</strong> Bez odtoku se voda hromadí u dna a i nejlepší substrát přestane fungovat. Otvor se dá do keramiky vyvrtat korunkou na dlaždice.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Substrát je u osazování nádob nejlevnější položka. Orientační ceny pro jedno balkonové osazení:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Univerzální substrát</strong> — 50litrový pytel za 90 až 180 Kč, specializované směsi pro sukulenty nebo orchideje 60 až 120 Kč za 5 až 10 litrů.</li>
            <li><strong>Keramzit nebo drcené kamenivo</strong> na drenáž — 80 až 150 Kč za 10 litrů.</li>
            <li><strong>Perlit</strong> na odlehčení hutného substrátu — 100 až 160 Kč za 10 litrů, přidává se 10 až 20 procent objemu.</li>
            <li><strong>Pomalu rozpustné hnojivo</strong> na celou sezónu — 150 až 300 Kč za balení 500 g, dávkuje se 2 až 4 g na litr substrátu.</li>
            <li><strong>Zavlažovací knoty nebo truhlík se zásobníkem</strong> — 150 až 600 Kč; na slunné terase výrazně sníží potřebu denní zálivky.</li>
            <li><strong>Netkaná textilie</strong> na dno nádoby, aby substrát neprotékal otvory — 15 až 25 Kč za metr čtvereční.</li>
            <li><strong>Mulč z borkové kůry nebo dekorativní drti</strong> na povrch, který zpomalí odpar — 100 až 200 Kč za pytel.</li>
            <li><strong>Lopatka, hrubé rukavice a plachta</strong> na čisté přesazení — do 400 Kč dohromady.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik litrů substrátu se vejde do květináče?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Objem hranatého květináče zjistíte vynásobením šířky, délky a výšky náplně v centimetrech a vydělením tisícem. Nádoba 30 × 30 cm naplněná do výšky 30 cm má tedy 27 litrů. U kulatého květináče o průměru 30 cm a stejné výšce vychází objem jen 21,2 litru, protože kruh zabírá přibližně 79 procent plochy opsaného kvadrátu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Mám měřit vnitřní, nebo vnější rozměr nádoby?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Vždy vnitřní. Stěny keramického nebo betonového květináče mají běžně 1,5 až 3 centimetry a u menších nádob tím objem klesne i o pětinu. U kónických květináčů, které se zužují ke dnu, zadejte průměr mezi horním a spodním okrajem — jinak výsledek nadsadíte o deset až patnáct procent.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč se v pytli substrátu udává jiný objem, než pak nasypu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Objem na pytli se měří u volně sypaného a provzdušněného substrátu. Po nasypání, zalití a usednutí ztratí rašelinový substrát přibližně deset až dvacet procent objemu. U 50litrového pytle to znamená reálných 40 až 45 litrů. Proto k vypočítanému objemu připočítejte alespoň desetiprocentní rezervu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Potřebuji na dno květináče drenážní vrstvu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U nádoby s odtokovým otvorem a kvalitním substrátem drenáž nutná není a některé studie ukazují, že vrstva kameniva zasycenou zónu naopak zvedne blíž ke kořenům. Přínosná je u nádob bez otvoru, u truhlíků na slunci a u sukulentů: dva až tři centimetry keramzitu nebo drceného kameniva. Tuto vrstvu pak odečtěte od výšky náplně, kterou zadáváte do kalkulačky.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak často se substrát v květináči mění?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U rychle rostoucích pokojových rostlin každé jedna až dvě sezóny, u pomalu rostoucích a velkých kádí stačí vyměnit horní třetinu a doplnit hnojivo. Letničky v truhlících dostávají nový substrát každý rok. Starý substrát je slanější, utažený a zbavený živin — poznáte to podle vody, která po zálivce stéká po povrchu a nevsakuje se.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <ShareButtons url="https://www.domovniguru.cz/kalkulacky/kolik-hliny" title="Kalkulačka: Kolik hlíny potřebuji?" />
        </div>
      </div>
    </div>
    </>
  );
}
