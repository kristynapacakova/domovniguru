import type { Metadata } from "next";
import Link from "next/link";
import KompostCalculator from "@/app/components/KompostCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka kompostu 2026 – kolik pytlů kompostu na záhony?",
  description: "Kolik pytlů kompostu potřebuji na záhony? Zadej plochu a tloušťku vrstvy – výpočet litrů a pytlů okamžitě.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-kompostu" },
  openGraph: { title: "Kalkulačka kompostu 2026 – kolik pytlů kompostu na záhony?", description: "Kolik pytlů kompostu potřebuji na záhony? Zadej plochu a tloušťku vrstvy – výpočet litrů a pytlů okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-kompostu", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20kompostu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka kompostu 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik litrů kompostu potřebuji na 1 m² záhonu?", "acceptedAnswer": { "@type": "Answer", "text": "Na jeden metr čtvereční připadá deset litrů kompostu za každý centimetr vrstvy. Doporučená vrstva pro záhony je 4 až 7 cm, tedy 40 až 70 litrů na metr čtvereční. U přesevu trávníku se aplikuje jen 1 až 2 cm, což odpovídá 10 až 20 litrům na metr čtvereční." } },
      { "@type": "Question", "name": "Kdy se kompost na záhony aplikuje?", "acceptedAnswer": { "@type": "Answer", "text": "Hlavní termín je předjaří a jaro, od března do května, těsně před výsevem nebo výsadbou — kompost se zapraví do horních 10 až 15 cm půdy a živiny jsou k dispozici v době, kdy rostliny začínají růst. Druhý vhodný termín je podzim, od října do listopadu, kdy se kompost rozprostře na povrch a nechá se do půdy zapravit mrazem a žížalami. Trávník se přesévá kompostem na jaře nebo na konci srpna, nikdy ne v letním horku." } },
      { "@type": "Question", "name": "Dá se kompost předávkovat?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. Vrstvy nad deset centimetrů ročně vnášejí do půdy nadbytek fosforu a dusíku, které se vyplavují do spodních vod, a u plodové zeleniny vedou k bujnému růstu listů na úkor plodů. U kořenové zeleniny, jako je mrkev nebo petržel, způsobí příliš bohatá půda rozvětvené a deformované kořeny. Pro běžný záhon je rozumné maximum 5 až 7 cm za sezónu." } },
      { "@type": "Question", "name": "Jak poznám zralý kompost?", "acceptedAnswer": { "@type": "Answer", "text": "Zralý kompost je tmavě hnědý až černý, drobtovitý, voní po lesní zemi a nejsou v něm rozpoznatelné původní zbytky. Nezralý kompost je zelenavý nebo hnědožlutý, páchne kysele či amoniakem a při rozdrcení v ruce drží v hrudkách. Takový kompost dočasně váže z půdy dusík a jeho kyseliny poškozují mladé kořeny, proto ho nechte dozrát ještě šest až dvanáct týdnů." } },
      { "@type": "Question", "name": "Nahradí kompost hnojivo?", "acceptedAnswer": { "@type": "Answer", "text": "Jen částečně. Kompost obsahuje jen zlomek procenta dusíku, fosforu a kalia a uvolňuje je velmi pomalu, zato dodává organickou hmotu a mikrobiální život, které žádné minerální hnojivo nenahradí. U náročných plodin, jako jsou rajčata, dýně nebo kukuřice, proto kompost doplňte hnojivem v průběhu sezóny. U nenáročných bylinek a kořenové zeleniny kompost obvykle vystačí sám." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik kompostu", "item": "https://www.domovniguru.cz/kalkulacky/kolik-kompostu" }
    ]
  }]
};

export default function KolikKompostuPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik kompostu</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik kompostu na záhony potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu záhonů a tloušťku vrstvy kompostu — kalkulačka ti okamžitě spočítá přesné množství v litrech a počet pytlů k nákupu.</p>

        <KompostCalculator />
        <AffiliateCTA merchant="hnojik" text="Nakoupit kompost a substrát" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Proč kompostovat a jak kompost správně aplikovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kompost je nejhodnotnější forma organické hmoty pro zahradu — obohacuje půdu o živiny, zlepšuje její strukturu a podporuje mikrobiologický život, který je základem zdravého zahradnictví. Na záhony se kompost aplikuje na jaře před výsadbou nebo setím v tloušťce 4–7 cm — zapracujte ho hráběmi nebo motykou do horní vrstvy půdy (10–15 cm). Trávník se kompostuje jinak: rozhoďte 1–2 cm jemně prosátého kompostu přes celou plochu a nechte ho přirozeně zapracovat deštěm a porostem. Tato metoda (&quot;topdressing&quot;) zlepšuje pH, strukturu a živiny bez nutnosti hloubkového zpracování.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kvalitní kompost poznáte podle barvy (tmavě hnědý až černý), zápachu (zemitý, ne kyselý nebo hnilobný) a struktury (drobtovitá, bez velkých nezkompostovaných kusů). Z vlastního kompostéru získáte kompost za 6–18 měsíců podle teplotního řízení. Pokud ho nevyrábíte sami, kupujte certifikovaný kompost s označením &quot;zralý&quot;. Nezralý kompost (zelenavý, kyselý zápach) obsahuje látky škodlivé pro kořeny a dočasně váže dusík z půdy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kompostování vlastního organického odpadu je ekonomicky i ekologicky nejvýhodnější. Do kompostéru patří: zbytky zeleniny a ovoce, kávová sedlina, čajové sáčky, posekená tráva (v tenkých vrstvách), listí, dřevní štěpky a zemina. Nepatří tam: maso, kosti, mléčné výrobky (přitahují hlodavce), nemocné rostliny, citrusy ve větším množství. Kompost prokládejte vrstvami: mokrá a suchá hmota v poměru 1:2 zajišťuje správnou vlhkost a vzdušnost potřebnou pro aktivity mikroorganismů.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kompost se nekupuje na kilogramy, ale na litry, a litry se spočítají z plochy a tloušťky vrstvy. Vzorec je jednoduchý: plocha v metrech čtverečních × tloušťka vrstvy v centimetrech × 10 = objem v litrech. Desítka ve vzorci není náhodná — jeden metr čtvereční pokrytý vrstvou jednoho centimetru má objem 0,01 m³, což je právě deset litrů. Počet pytlů se pak získá vydělením objemu objemem jednoho balení a zaokrouhlením nahoru, protože půl pytle v obchodě nekoupíte.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: záhon o ploše 15 m², vrstva 5 cm. Výpočet dává 15 × 5 × 10 = 750 litrů kompostu. Při běžném balení 40 litrů to znamená 750 ÷ 40 = 18,75, po zaokrouhlení nahoru 19 pytlů. Kdybyste zvolili 50litrová balení, vystačí 15 pytlů. Pro přesev trávníku o stejné ploše vrstvou 2 cm vyjde jen 300 litrů, tedy 8 pytlů po 40 litrech — rozdíl mezi záhonem a trávníkem je víc než dvojnásobný.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Při větších objemech přestává mít nákup v pytlích smysl. Od přibližně dvou kubíků, tedy 2 000 litrů, se vyplatí zavolat dodávku sypaného kompostu valníkem nebo kontejnerem — cena za litr bývá dvakrát až třikrát nižší. Pozor také na to, že objem na pytli se udává u volně sypaného kompostu; po rozprostření a usednutí vrstva o pět až deset procent poklesne. U plánovaných 5 cm proto ve skutečnosti rozprostřete spíš 5,5 cm.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kompost je nenáročný materiál a zkazit se s ním dá málo — ale pár chyb dokáže celou sezónu pokazit:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Použití nezralého kompostu.</strong> Kyselý zápach a zelenavá barva znamenají, že proces ještě běží. Takový kompost odebírá z půdy dusík a jeho organické kyseliny pálí kořeny sadby.</li>
            <li><strong>Příliš silná vrstva.</strong> Víc než 10 cm ročně je plýtvání a u plodové zeleniny vede k bujnému listu bez plodů. Pro záhon je rozumné maximum 5 až 7 cm za sezónu.</li>
            <li><strong>Kompost jen navrstvený na povrch záhonu.</strong> Na záhonu se musí zapravit do horních 10 až 15 cm, jinak na slunci vyschne a živiny se nedostanou ke kořenům. Výjimkou je trávník, kde se přesev naopak nezapravuje.</li>
            <li><strong>Hrubý kompost na trávník.</strong> Nepřesátý kompost zůstane na povrchu v hrudkách, zadusí trávu a po sečení se roznese po celé zahradě. Pro trávník kompost vždy přesejte sítem 10 mm.</li>
            <li><strong>Aplikace v nevhodném termínu.</strong> Letní horko a zmrzlá půda jsou obě špatné. Jarní termín je březen až květen, podzimní říjen až listopad.</li>
            <li><strong>Kompost z nemocných rostlin.</strong> Spory plísní a nádorovitost košťálovin přežijí domácí kompost bez horké fáze. Nemocné rostliny do kompostu nepatří.</li>
            <li><strong>Příliš bohatý kompost pod kořenovou zeleninu.</strong> Mrkev a petržel v bohaté půdě tvoří rozvětvené a chlupaté kořeny. Pro ně kompostujte záhon rok předem.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Orientační ceny materiálu a vybavení pro kompostování a aplikaci na záhony:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Balený zralý kompost</strong> — 60 až 130 Kč za 40litrový pytel, tedy 1,5 až 3 Kč za litr.</li>
            <li><strong>Sypaný kompost s dovozem</strong> — 400 až 900 Kč za kubík plus doprava 500 až 1 500 Kč; vyplatí se od dvou kubíků výš.</li>
            <li><strong>Zahradní kompostér</strong> 600 až 1 000 litrů — 1 200 až 3 500 Kč, termokompostér 4 000 až 8 000 Kč.</li>
            <li><strong>Urychlovač kompostu</strong> s bakteriální kulturou — 150 až 300 Kč za balení na jeden kompostér.</li>
            <li><strong>Přesívací síto 10 mm</strong> na kompost pro trávník — 400 až 1 200 Kč.</li>
            <li><strong>Kolečko a lopata</strong> na rozvoz — kolečko 1 000 až 2 500 Kč, široká lopata do 500 Kč.</li>
            <li><strong>Kultivátor nebo rycí vidle</strong> na zapravení kompostu do horní vrstvy půdy — 500 až 1 500 Kč.</li>
            <li><strong>Doplňkové hnojivo</strong> pro náročné plodiny v průběhu sezóny — 200 až 400 Kč za balení 1 kg.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik litrů kompostu potřebuji na 1 m² záhonu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Na jeden metr čtvereční připadá deset litrů kompostu za každý centimetr vrstvy. Doporučená vrstva pro záhony je 4 až 7 cm, tedy 40 až 70 litrů na metr čtvereční. U přesevu trávníku se aplikuje jen 1 až 2 cm, což odpovídá 10 až 20 litrům na metr čtvereční.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kdy se kompost na záhony aplikuje?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Hlavní termín je předjaří a jaro, od března do května, těsně před výsevem nebo výsadbou — kompost se zapraví do horních 10 až 15 cm půdy a živiny jsou k dispozici v době, kdy rostliny začínají růst. Druhý vhodný termín je podzim, od října do listopadu, kdy se kompost rozprostře na povrch a nechá se do půdy zapravit mrazem a žížalami. Trávník se přesévá kompostem na jaře nebo na konci srpna, nikdy ne v letním horku.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Dá se kompost předávkovat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Ano. Vrstvy nad deset centimetrů ročně vnášejí do půdy nadbytek fosforu a dusíku, které se vyplavují do spodních vod, a u plodové zeleniny vedou k bujnému růstu listů na úkor plodů. U kořenové zeleniny, jako je mrkev nebo petržel, způsobí příliš bohatá půda rozvětvené a deformované kořeny. Pro běžný záhon je rozumné maximum 5 až 7 cm za sezónu.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak poznám zralý kompost?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Zralý kompost je tmavě hnědý až černý, drobtovitý, voní po lesní zemi a nejsou v něm rozpoznatelné původní zbytky. Nezralý kompost je zelenavý nebo hnědožlutý, páchne kysele či amoniakem a při rozdrcení v ruce drží v hrudkách. Takový kompost dočasně váže z půdy dusík a jeho kyseliny poškozují mladé kořeny, proto ho nechte dozrát ještě šest až dvanáct týdnů.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Nahradí kompost hnojivo?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Jen částečně. Kompost obsahuje jen zlomek procenta dusíku, fosforu a kalia a uvolňuje je velmi pomalu, zato dodává organickou hmotu a mikrobiální život, které žádné minerální hnojivo nenahradí. U náročných plodin, jako jsou rajčata, dýně nebo kukuřice, proto kompost doplňte hnojivem v průběhu sezóny. U nenáročných bylinek a kořenové zeleniny kompost obvykle vystačí sám.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak kompostovat – průvodce pro začátečníky", href: "/blog/jak-kompostovat", icon: "♻️" },
              { title: "Vyvýšené záhony – kompletní průvodce", href: "/blog/vyvysene-zahony", icon: "🌱" },
              { title: "Jak pěstovat rajčata od výsevu po sklizeň", href: "/blog/jak-pestovat-rajcata", icon: "🍅" },
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
