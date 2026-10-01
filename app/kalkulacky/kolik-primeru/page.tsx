// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-primeru/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import PrimerCalculator from "@/app/components/PrimerCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka penetrace 2026 – kolik litrů primeru potřebuji?",
  description: "Kolik litrů penetrace před malováním? Zadej plochu a vydatnost – výpočet okamžitě. Na savé omítky doporučujeme 2 vrstvy.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-primeru" },
  openGraph: { title: "Kalkulačka penetrace 2026", description: "Kolik litrů penetrace před malováním? Zadej plochu a vydatnost – výpočet okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-primeru", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20penetrace%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka penetrace 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kolik litrů penetrace potřebuji na 100 m² stěn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na 100 m² běžné vyzrálé omítky při vydatnosti 10 m²/l vyjde jedna vrstva na 10 litrů. Na silně savém podkladu (nová sádrová omítka, porobeton, sádrokarton) klesá vydatnost na 4–6 m²/l, takže jedna vrstva spotřebuje 17–25 litrů. Pokud penetrujete dvakrát, množství vynásobte dvěma, přičemž druhá vrstva bývá úspornější – podklad už je částečně uzavřený."
          }
        },
        {
          "@type": "Question",
          "name": "Musí se penetrace ředit vodou?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Koncentráty se ředí vždy, hotové penetrace k přímému použití nikdy. U koncentrátu udává poměr výrobce na obalu, nejčastěji 1:1 až 1:5 podle savosti podkladu. U hotových disperzních penetrací se první vrstva na extrémně savý podklad někdy ředí 5–10 % vody, aby lépe vsákla. Nikdy neřeďte více, než výrobce povoluje – přeředěná penetrace nevytvoří funkční film a podklad zůstane savý."
          }
        },
        {
          "@type": "Question",
          "name": "Jak dlouho musí penetrace schnout před malováním?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Při pokojové teplotě 20 °C a běžné vlhkosti je penetrace zaschlá za 2–4 hodiny, ale plně vyzrálá až po 12–24 hodinách. Malovat lze obvykle po 4 hodinách, u hloubkových penetrací a na betonu počkejte celý den. V chladné nebo vlhké místnosti se doba prodlužuje dvojnásobně. Zkouška je jednoduchá: po zaschlé penetraci se prst nelepí a povrch nezanechává matné stopy."
          }
        },
        {
          "@type": "Question",
          "name": "Kolik stojí penetrace na byt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotová disperzní penetrace stojí 60–140 Kč/l, koncentrát 120–250 Kč/l, ale po naředění vyjde na 25–60 Kč za litr hotové směsi. Hloubková penetrace na beton a drolivé podklady se pohybuje 180–350 Kč/l. Na byt se 120 m² stěn tak zaplatíte orientačně 700–2 000 Kč za jednu vrstvu, tedy 6–17 Kč na m² – ve srovnání s úsporou barvy jde o jednu z nejvýnosnějších investic celého projektu."
          }
        },
        {
          "@type": "Question",
          "name": "Dá se penetrace vynechat, když maluji na starý nátěr?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pokud je starý nátěr soudržný, nekříduje a jde o stejný typ barvy (latex na latex), lze penetraci vynechat a malovat přímo. Penetrovat je nutné vždy, když se nátěr pod rukou pudruje, odlupuje se, jsou v něm záplaty po tmelení, přecházíte z hlinkové barvy na latex, nebo jde o kuchyň či chodbu, kde je povrch zamaštěný. Rychlý test: přejeďte stěnu tmavou dlaní – zůstane-li bílý prach, penetrace je povinná."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz/" },
        { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
        { "@type": "ListItem", "position": 3, "name": "Kolik penetrace", "item": "https://www.domovniguru.cz/kalkulacky/kolik-primeru" }
      ]
    }
  ]
};

export default function KolikPrimeruPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik penetrace</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik penetrace (primeru) potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu stěn, vydatnost penetrace a počet vrstev — kalkulačka ti okamžitě spočítá přesné množství v litrech.</p>

        <PrimerCalculator />
        <AffiliateCTA merchant="naradi" text="Nakoupit penetraci" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Proč penetrovat a kdy použít dvě vrstvy</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Penetrace (primer) je tenká vrstva přípravného nátěru, která sjednocuje savost podkladu před malováním nebo lepením. Nové sádrové a vápenopískové omítky jsou extrémně savé — bez penetrace barva proniká hluboko do povrchu, výsledný povrch je matný a nerovnoměrný a spotřeba barvy se zvyšuje o 20–40 %. Na starých omítkách nebo beton penetrace naopak zlepšuje přilnavost, takže barva neodpadá a neprasklelá. Každý výrobce udává vydatnost na litr — ta bývá 8–12 m²/l na standardních podkladech, ale na silně savých materiálech (sádra, porobeton) klesá na 4–6 m²/l.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě vrstvy penetrace jsou doporučovány vždy, když: (1) jde o novou, ještě nevyschlou omítku, (2) malujete na porobeton nebo na hrubou vápennou omítku, (3) předchozí nátěr se drolí nebo loupá, nebo (4) přecházíte z tmavé barvy na světlou a chcete dosáhnout krycí schopnosti na dvě vrstvy finální barvy. Mezi vrstvami počkejte minimálně 2–4 hodiny do úplného vyschnutí — vlhká penetrace neváže a druhá vrstva ji stáhne zpět.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Penetraci nanášejte válečkem nebo štětkou, stejnými nástroji jako barvu. Ředění závisí na výrobci — nejčastěji 5–10 % vodou pro první vrstvu na vysoce savé povrchy. Pro betonové povrchy, kde musí primer proniknout do hloubky (např. garážová podlaha), zvolte speciální hloubkovou penetraci (deep penetration primer), která váže volné části a posiluje podklad. Po vyschnutí penetrace lehce přebruste povrch brusnou houbičkou — odstraníte stojící vlákna papíru z omítky a nátěr barvy bude rovnoměrnější.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Vzorec je jednoduchý: <strong>litry penetrace = plocha v m² ÷ vydatnost v m²/l × počet vrstev</strong>. Plochu stěn získáte jako obvod pokoje krát výška stropu; u stropu je plocha totožná s podlahovou plochou. Pokoj 4 × 5 m s výškou 2,6 m má obvod 18 m, tedy 46,8 m² stěn. Při vydatnosti 10 m²/l a jedné vrstvě to dělá 4,7 litru — koupíte tedy balení 5 l.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nejdůležitější a zároveň nejvíc podceňovaná proměnná je vydatnost. Výrobce ji uvádí pro ideální, mírně savý podklad, takže na obalu bývá optimistické číslo 10–12 m²/l. Reálná vydatnost na nové sádrové omítce, porobetonu nebo sádrokartonové desce je ale jen 4–6 m²/l, na hrubé vápenocementové omítce 6–8 m²/l a na už jednou malované soudržné stěně 12–15 m²/l. Pokud podklad neznáte, počítejte s nižší hodnotou z rozsahu — zbylá penetrace vydrží v uzavřeném obalu roky, zatímco přerušená práce kvůli došlému materiálu stojí celý den.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            U koncentrátů pozor na to, co kalkulačka počítá. Zadáváte-li vydatnost z obalu koncentrátu, dostanete litry koncentrátu, které ještě naředíte. Příklad: koncentrát s vydatností 40 m²/l ředěný 1:4 — na 100 m² potřebujete 2,5 l koncentrátu, ze kterých vznikne 12,5 l hotové penetrace. Jde o nejčastější záměnu při nákupu a zároveň o důvod, proč koncentrát bývá při přepočtu na hotovou směs výrazně levnější.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Penetrace je nejlevnější část celého malování, přesto se na ní odehrává většina vad, které se projeví až po zaschnutí barvy. Tomuto se vyhněte:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Penetrace na zaprášený podklad.</strong> Primer váže prach, ale jen do určité míry. Stěnu po broušení vždy nejdřív vysajte nebo setřete vlhkým hadrem — jinak vznikne vrstva zalepeného prachu, která se později odloupne spolu s barvou.</li>
            <li><strong>Příliš silná vrstva.</strong> Penetrace se nenanáší jako barva. Nadbytek vytvoří na povrchu lesklý, uzavřený film, na který barva špatně drží a dělá šmouhy. Správně má povrch po zaschnutí matný až satén, nikoli sklovitý lesk.</li>
            <li><strong>Přeředění koncentrátu.</strong> Snaha vystačit s jedním balením vede k tomu, že se ředí 1:8 místo 1:4. Taková směs podklad nezpevní ani neuzavře a celá práce je zbytečná.</li>
            <li><strong>Malování na vlhkou penetraci.</strong> Barva stáhne nevyzrálý primer zpět, výsledkem jsou tahy válečkem viditelné i po druhém nátěru.</li>
            <li><strong>Jedna vrstva na extrémně savý podklad.</strong> Na porobetonu nebo nové sádře se první vrstva okamžitě vsákne a povrch zůstane savý. Druhou vrstvu poznáte podle toho, že se penetrace už nevsakuje okamžitě.</li>
            <li><strong>Nepenetrované záplaty po tmelení.</strong> Tmel je savější než okolní stěna. Pokud se opravená místa nepenetrují, prosvítají přes nátěr jako světlejší fleky — klasický efekt, kvůli kterému se maluje třetí vrstva.</li>
            <li><strong>Penetrace pod 5 °C.</strong> Disperzní primery pod touto teplotou netvoří film. V nevytápěných prostorách sáhněte po produktu určeném pro nízké teploty.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Penetruje se stejným nářadím jako maluje, ale vyplatí se mít na primer samostatnou sadu — penetrace válečku ztvrdne vlas a na finální nátěr už se nehodí.
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Váleček s krátkým vlasem (8–10 mm)</strong> a vanička s mřížkou — na hladké stěny a stropy (dohromady 300–600 Kč).</li>
            <li><strong>Štětka (malířský ovál) nebo plochý štětec 6 cm</strong> na rohy, kouty a okolí zásuvek (100–250 Kč).</li>
            <li><strong>Teleskopická tyč</strong> 1,5–3 m, aby se dalo penetrovat strop bez neustálého přelézání štaflí (200–500 Kč).</li>
            <li><strong>Brusná houbička nebo papír P120–P150</strong> na přebroušení povrchu před penetrací i po zaschnutí (50–200 Kč).</li>
            <li><strong>Krycí fólie a malířská páska</strong> — penetrace je sice průhledná, ale po zaschnutí vytvoří na podlaze nebo na okně lepkavý film, který se odstraňuje obtížně.</li>
            <li><strong>Odměrka a kbelík 10–12 l</strong> na ředění koncentrátu v přesném poměru. Odhad „od oka“ je přímá cesta k přeředěné směsi.</li>
            <li><strong>Vlhkoměr</strong> (od cca 400 Kč) u novostaveb — nová omítka musí mít vlhkost pod 4 % a zrát zhruba 4 týdny na centimetr tloušťky, než se penetruje.</li>
            <li><strong>Tmel a stěrka</strong> na díry a praskliny: opravy se dělají před penetrací, nikdy po ní.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik litrů penetrace potřebuji na 100 m² stěn?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Na 100 m² běžné vyzrálé omítky při vydatnosti 10 m²/l vyjde jedna vrstva na 10 litrů. Na silně savém podkladu (nová sádrová omítka, porobeton, sádrokarton) klesá vydatnost na 4–6 m²/l, takže jedna vrstva spotřebuje 17–25 litrů. Pokud penetrujete dvakrát, množství vynásobte dvěma, přičemž druhá vrstva bývá úspornější — podklad už je částečně uzavřený.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Musí se penetrace ředit vodou?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Koncentráty se ředí vždy, hotové penetrace k přímému použití nikdy. U koncentrátu udává poměr výrobce na obalu, nejčastěji 1:1 až 1:5 podle savosti podkladu. U hotových disperzních penetrací se první vrstva na extrémně savý podklad někdy ředí 5–10 % vody, aby lépe vsákla. Nikdy neřeďte více, než výrobce povoluje — přeředěná penetrace nevytvoří funkční film a podklad zůstane savý.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak dlouho musí penetrace schnout před malováním?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Při pokojové teplotě 20 °C a běžné vlhkosti je penetrace zaschlá za 2–4 hodiny, ale plně vyzrálá až po 12–24 hodinách. Malovat lze obvykle po 4 hodinách, u hloubkových penetrací a na betonu počkejte celý den. V chladné nebo vlhké místnosti se doba prodlužuje dvojnásobně. Zkouška je jednoduchá: po zaschlé penetraci se prst nelepí a povrch nezanechává matné stopy.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí penetrace na byt?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Hotová disperzní penetrace stojí 60–140 Kč/l, koncentrát 120–250 Kč/l, ale po naředění vyjde na 25–60 Kč za litr hotové směsi. Hloubková penetrace na beton a drolivé podklady se pohybuje 180–350 Kč/l. Na byt se 120 m² stěn tak zaplatíte orientačně 700–2 000 Kč za jednu vrstvu, tedy 6–17 Kč na m² — ve srovnání s úsporou barvy jde o jednu z nejvýnosnějších investic celého projektu.
            </p>
          </details>

          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Dá se penetrace vynechat, když maluji na starý nátěr?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0", marginTop: "12px" }}>
              Pokud je starý nátěr soudržný, nekříduje a jde o stejný typ barvy (latex na latex), lze penetraci vynechat a malovat přímo. Penetrovat je nutné vždy, když se nátěr pod rukou pudruje, odlupuje se, jsou v něm záplaty po tmelení, přecházíte z hlinkové barvy na latex, nebo jde o kuchyň či chodbu, kde je povrch zamaštěný. Rychlý test: přejeďte stěnu tmavou dlaní — zůstane-li bílý prach, penetrace je povinná.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Proč malovat s penetrací – a co hrozí bez ní", href: "/blog/penetrace-pred-malovanim", icon: "🪣" },
              { title: "Jak malovat zeď – kompletní průvodce", href: "/blog/jak-malovat-zed", icon: "🖌️" },
              { title: "Kalkulačka barvy na zeď", href: "/kalkulacky/kolik-barvy", icon: "🪣" },
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
