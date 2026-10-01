// ════════════════════════════════════════════════════════════════
// SOUBOR: app/kalkulacky/kolik-mulce/page.tsx
// ════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";
import MulcCalculator from "@/app/components/MulcCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka mulče 2026 – kolik pytlů potřebuji na záhony?",
  description: "Kolik pytlů mulče na záhony? Zadej plochu a tloušťku vrstvy – výpočet litrů a pytlů okamžitě. Optimální vrstva: 5–10 cm.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-mulce" },
  openGraph: { title: "Kalkulačka mulče 2026", description: "Kolik pytlů mulče na záhony? Zadej plochu a tloušťku vrstvy – výpočet litrů a pytlů okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/kolik-mulce", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20mul%C4%8De%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka mulče 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik litrů mulče potřebuji na 1 m² záhonu?", "acceptedAnswer": { "@type": "Answer", "text": "Na jeden metr čtvereční ve vrstvě 1 cm padne 10 litrů mulče. Při doporučené vrstvě 7 cm je to tedy 70 litrů na metr čtvereční, tedy přesně jeden standardní pytel. Pro vrstvu 5 cm počítejte 50 litrů a pro 10 cm celých 100 litrů na metr čtvereční. Z toho vyplývá, že deset metrů čtverečních záhonu ve vrstvě 7 cm spotřebuje 700 litrů, tedy deset pytlů." } },
      { "@type": "Question", "name": "Jak silná má být vrstva mulče?", "acceptedAnswer": { "@type": "Answer", "text": "Optimum pro okrasné záhony je 7 až 10 cm, minimum pro potlačení plevele 5 cm. Tenčí vrstva neudrží vlhkost ani nezastíní klíčící plevel a je zbytečným výdajem. U jemných materiálů, jako je drcená kůra frakce 0 až 10 mm nebo kompost, zůstaňte u 5 cm, protože hustě ulehnou a silnější vrstva brání průchodu vzduchu. U hrubých štěpků a kůry frakce 20 až 40 mm můžete jít až k 10 cm." } },
      { "@type": "Question", "name": "Musím pod mulč dávat geotextilii?", "acceptedAnswer": { "@type": "Answer", "text": "U okrasných záhonů s trvalkami a cibulovinami ne — netkaná textilie zabrání rozrůstání rostlin, zarůstá kořeny plevele a za několik let se obtížně odstraňuje. Smysl má pod kamenné mulče, kačírek a drť, kde zabrání promíchání kameniva s půdou, a pod mulčovanými cestičkami. Vrstva 7 až 10 cm organického mulče potlačí plevel sama a navíc se postupně rozkládá do půdy." } },
      { "@type": "Question", "name": "Proč mulč z borové kůry okyseluje půdu?", "acceptedAnswer": { "@type": "Answer", "text": "Borová kůra má pH přibližně 4 až 5 a při rozkladu uvolňuje organické kyseliny, které postupně snižují pH horní vrstvy půdy. Rododendronům, azalkám, borůvkám a vřesovištním rostlinám to vyhovuje. U levandule, šalvěje, kostřavy a většiny skalniček, které chtějí neutrální až vápenitou půdu, je lepší drcený vápenec, štěrk nebo kompostovaná štěpka. Hlubší vrstvy půdy ovlivní kůra až po několika letech." } },
      { "@type": "Question", "name": "Kdy mulčovat a jak často mulč doplňovat?", "acceptedAnswer": { "@type": "Answer", "text": "Nejvhodnější je pozdní jaro, kdy se půda prohřeje nad 12 °C a trvalky už vyrašily — mulčování do studené půdy prohřátí zdrží o dva až tři týdny. Druhým termínem je podzim, kdy mulč chrání kořeny před promrzáním. Kůra se rozloží za dva až tři roky, štěpka za jeden až dva roky, takže vrstvu každoročně doplňte o 2 až 3 cm. Starý mulč se neodstraňuje, nový se sype na něj." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Kolik mulče", "item": "https://www.domovniguru.cz/kalkulacky/kolik-mulce" }
    ]
  }]
};

export default function KolikMulcePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Kolik mulče</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik mulče na záhony potřebuju?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej plochu záhonů a tloušťku vrstvy mulče — kalkulačka ti okamžitě spočítá přesné množství v litrech a počet pytlů k nákupu.</p>

        <MulcCalculator />
        <AffiliateCTA merchant="hnojik" text="Nakoupit mulč" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Druhy mulče a jak správně mulčovat záhony</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Mulčování je jedna z nejjednodušších zahradnických technik s velkým dopadem. Vrstva organického materiálu na povrchu půdy snižuje odpařování vody o 30–50 %, potlačuje klíčení plevelů, vyrovnává výkyvy teploty půdy a při rozkladu obohacuje půdu o živiny. Na trh přichází v podobě dřevní kůry (borka), dřevěných štěpků, kokosových vláken, slámy nebo kompostu. Borka je nejoblíbenější pro ozdobné záhony — esteticky vypadá dobře a rozkládá se pomalu (2–3 roky). Dřevní štěpky jsou levnější, ale rozkládají se rychleji a dočasně vážou dusík z půdy.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Tloušťka vrstvy mulče záleží na účelu. Pro potlačení plevelů a udržení vlhkosti potřebujete alespoň 5 cm — tenčí vrstva neplní ani jednu funkci. Optimum pro většinu záhonů je 7–10 cm. U stromů a keřů dbejte, aby mulč nepřiléhal ke kmeni nebo větvím — přímý kontakt způsobuje hnilobu a leptání kůry. Mezi mulčem a kmenem nechte „ochranný kruh" 10–15 cm bez materiálu.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Mulč nanášejte na vlhkou půdu — ideálně po vydatném dešti nebo závlaze. Na záhony s letničkami a cibulovinami odkládejte mulčování do doby, kdy rostliny dosáhnou výšky 10–15 cm, jinak vrstva mulče brání klíčení a rašení. Mulč každoročně doplňujte: borka se rozloží za 2–3 roky a vrstva se přirozeně snižuje. Starý mulč nemusíte odstraňovat — prostě doplňte novou vrstvu na stávající. Přírodní materiály rozložením obohacují půdu a zlepšují její strukturu.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Mulč se nekupuje na kilogramy, ale na litry, protože objemová hmotnost kůry a štěpky se podle vlhkosti mění skoro dvojnásobně. Výpočet proto pracuje jen s objemem: plocha v m² se vynásobí tloušťkou vrstvy v centimetrech a číslem deset. Tato desítka je převod jednotek — metr čtvereční pokrytý vrstvou 1 cm má objem 0,01 m³, což je právě 10 litrů. Druhý krok vydělí celkový objem objemem pytle a zaokrouhlí nahoru, protože pytel se nedá rozdělit.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: záhon podél plotu dlouhý 12 m a široký 1,5 m má plochu 18 m². Při vrstvě 7 cm vychází 18 × 7 × 10 = 1 260 litrů mulče. Při standardním balení 70 litrů je to 18 pytlů, tedy náhodou právě jeden pytel na metr čtvereční — to je praktická pomůcka, kterou si stojí za to pamatovat. Vrstva 7 cm z pytle po 70 litrech pokryje přesně 1 m². U vrstvy 5 cm pokryje jeden takový pytel 1,4 m², u vrstvy 10 cm jen 0,7 m².
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Dvě poznámky k přesnosti. Mulč v pytli je sesednutý a po vysypání se nakypří, takže 1 260 litrů z pytlů dá na záhonu trochu větší objem — během několika týdnů ale zase sesedne a vrstva se vrátí přibližně na spočítanou hodnotu. U větších ploch nad 20 m² se vyplatí koupit mulč volně ložený v m³, protože z pytlů vyjde zhruba dvakrát dražší: 1 260 litrů je 1,26 m³, a za metr kub volné kůry zaplatíte podstatně méně než za osmnáct pytlů. Od plochy záhonu si také odečtěte půdorys vzrostlých trsů trvalek a ochranné kruhy u kmenů stromů.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Mulčování vypadá jako práce, u které se nedá nic zkazit. Přesto se tyto chyby opakují na většině zahrad:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Příliš tenká vrstva.</strong> Dva až tři centimetry kůry záhon jen opticky zatmaví. Plevel takovou vrstvou prorazí a vlhkost se odpaří stejně jako z holé půdy. Pod 5 cm nemá mulčování praktický smysl.</li>
            <li><strong>Mulč nahrnutý ke kmeni.</strong> Takzvaný „mulčový vulkán" okolo kmene udržuje vlhkost na kůře, ta hnije a přitahuje hlodavce, kteří kmen pod mulčem okroužkují. Nechte 10 až 15 cm volného prostoru okolo kmene.</li>
            <li><strong>Mulčování na vyschlou půdu.</strong> Mulč zabrání odpaření vlhkosti, ale také ztíží průnik lehkého deště. Suchý záhon pod mulčem zůstane suchý. Před mulčováním záhon vydatně zalijte.</li>
            <li><strong>Čerstvá štěpka na záhon se zeleninou.</strong> Nezkompostovaná štěpka při rozkladu dočasně váže dusík z povrchové vrstvy půdy a rostliny zbledou. Na zeleninové záhony patří sláma, kompost nebo posekaná tráva, čerstvá štěpka na cestičky.</li>
            <li><strong>Mulčování přes neodstraněný vytrvalý plevel.</strong> Pýr, svlačec a bršlice se mulčem protáhnou nahoru a rozrostou se pod ním do šířky. Vytrvalý plevel se musí nejprve vybrat s kořeny, pak se mulčuje.</li>
            <li><strong>Mulč na neporostlé jednoleté záhony.</strong> Vrstva brání klíčení osiva a rašení cibulovin stejně účinně jako plevelu. Letničky, mrkev a cibule se mulčují až ve vzrůstu 10 až 15 cm.</li>
            <li><strong>Kyselá kůra k vápnomilným rostlinám.</strong> Borová kůra okolo levandule, šalvěje a skalniček postupně sníží pH a rostliny začnou slábnout. K nim patří drť, štěrk nebo kačírek.</li>
            <li><strong>Geotextilie pod organický mulč.</strong> Zabrání propadu rozloženého mulče do půdy, prorostou do ní kořeny plevelů a po třech letech se dá odstranit jen po kusech. Pod kůru a štěpku nepatří.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Mulčování je materiálově jednoduchá práce, ale přeprava a rozprostření objemu v řádu kubíků si o pomůcky říká:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Mulčovací kůra</strong> v pytlích po 60–70 litrech za 120–250 Kč podle frakce, nebo volně ložená za 700–1 400 Kč za m³ včetně dopravy v rámci města.</li>
            <li><strong>Dřevní štěpka</strong> 500–900 Kč za m³, od obecních kompostáren někdy i zdarma. Před použitím na záhon ji nechte alespoň tři měsíce zkompostovat.</li>
            <li><strong>Kolečko</strong> (800–2 000 Kč) a <strong>vidle na hnůj nebo mulč</strong> (400–900 Kč). Lopatou se kůra nabírá podstatně pomaleji.</li>
            <li><strong>Hrábě na rozprostření</strong> (250–600 Kč) a hrábě s krátkým držadlem na urovnání mezi rostlinami (150–350 Kč).</li>
            <li><strong>Zahradní lemování nebo obrubníky</strong> (od 50 Kč za běžný metr plastové lemovací pásky, 150–400 Kč za metr ocelového lemu). Bez lemu mulč postupně uteče do trávníku.</li>
            <li><strong>Geotextilie 100 g/m²</strong> (15–30 Kč za m²) — jen pod kamenné mulče a cestičky, ne pod kůru.</li>
            <li><strong>Pletivo nebo chránič kmene</strong> (50–150 Kč za kus) proti hlodavcům, pokud mulčujete okolo mladých stromků.</li>
            <li><strong>Rukavice a respirátor</strong> (50–300 Kč). Kůra je prašná a může obsahovat spory plísní, zvláště u pytlů skladovaných na slunci.</li>
            <li><strong>Plachta nebo velké pytle</strong> (100–400 Kč) na dočasné uložení volně loženého mulče, abyste jím nezašpinili dlažbu.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik litrů mulče potřebuji na 1 m² záhonu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Na jeden metr čtvereční ve vrstvě 1 cm padne 10 litrů mulče. Při doporučené vrstvě 7 cm je to tedy 70 litrů na metr čtvereční, tedy přesně jeden standardní pytel. Pro vrstvu 5 cm počítejte 50 litrů a pro 10 cm celých 100 litrů na metr čtvereční. Z toho vyplývá, že deset metrů čtverečních záhonu ve vrstvě 7 cm spotřebuje 700 litrů, tedy deset pytlů.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jak silná má být vrstva mulče?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Optimum pro okrasné záhony je 7 až 10 cm, minimum pro potlačení plevele 5 cm. Tenčí vrstva neudrží vlhkost ani nezastíní klíčící plevel a je zbytečným výdajem. U jemných materiálů, jako je drcená kůra frakce 0 až 10 mm nebo kompost, zůstaňte u 5 cm, protože hustě ulehnou a silnější vrstva brání průchodu vzduchu. U hrubých štěpků a kůry frakce 20 až 40 mm můžete jít až k 10 cm.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Musím pod mulč dávat geotextilii?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U okrasných záhonů s trvalkami a cibulovinami ne — netkaná textilie zabrání rozrůstání rostlin, zarůstá kořeny plevele a za několik let se obtížně odstraňuje. Smysl má pod kamenné mulče, kačírek a drť, kde zabrání promíchání kameniva s půdou, a pod mulčovanými cestičkami. Vrstva 7 až 10 cm organického mulče potlačí plevel sama a navíc se postupně rozkládá do půdy.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Proč mulč z borové kůry okyseluje půdu?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Borová kůra má pH přibližně 4 až 5 a při rozkladu uvolňuje organické kyseliny, které postupně snižují pH horní vrstvy půdy. Rododendronům, azalkám, borůvkám a vřesovištním rostlinám to vyhovuje. U levandule, šalvěje, kostřavy a většiny skalniček, které chtějí neutrální až vápenitou půdu, je lepší drcený vápenec, štěrk nebo kompostovaná štěpka. Hlubší vrstvy půdy ovlivní kůra až po několika letech.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kdy mulčovat a jak často mulč doplňovat?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Nejvhodnější je pozdní jaro, kdy se půda prohřeje nad 12 °C a trvalky už vyrašily — mulčování do studené půdy prohřátí zdrží o dva až tři týdny. Druhým termínem je podzim, kdy mulč chrání kořeny před promrzáním. Kůra se rozloží za dva až tři roky, štěpka za jeden až dva roky, takže vrstvu každoročně doplňte o 2 až 3 cm. Starý mulč se neodstraňuje, nový se sype na něj.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak se zbavit plevele bez chemie", href: "/blog/zbavit-se-plevele-bez-chemie", icon: "🌿" },
              { title: "Jak správně zalévat zahradu", href: "/blog/jak-spravne-zalevat", icon: "💧" },
              { title: "Vyvýšené záhony – kompletní průvodce", href: "/blog/vyvysene-zahony", icon: "🌱" },
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
