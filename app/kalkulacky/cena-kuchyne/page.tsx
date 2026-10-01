import type { Metadata } from "next";
import Link from "next/link";
import CenaKuchyneCalculator from "@/app/components/CenaKuchyneCalculator";
import AffiliateCTA from "@/app/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Kalkulačka ceny kuchyně 2026 – IKEA, studio nebo na míru?",
  description: "Spočítejte orientační cenu nové kuchyňské linky včetně spotřebičů, pracovní desky a montáže. Srovnání IKEA vs. studio vs. truhlář.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/cena-kuchyne" },
  openGraph: { title: "Kalkulačka ceny kuchyně 2026 – IKEA, studio nebo na míru?", description: "Spočítejte orientační cenu nové kuchyňské linky včetně spotřebičů, pracovní desky a montáže. Srovnání IKEA vs. studio vs. truhlář.", url: "https://www.domovniguru.cz/kalkulacky/cena-kuchyne", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20ceny%20kuchyn%C4%9B%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka ceny kuchyně 2026" }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Kolik stojí kuchyňská linka 3 metry?", "acceptedAnswer": { "@type": "Answer", "text": "Při základním standardu IKEA okolo 8 000 Kč za běžný metr vyjde samotná linka na 24 000 Kč. S laminátovou pracovní deskou za 1 800 Kč/m přidáte 5 400 Kč a se základní sestavou spotřebičů, tedy troubou, varnou deskou a digestoří, dalších 25 000 Kč. Při svépomocné montáži je celek přibližně 54 400 Kč bez DPH. Tatáž linka z kuchyňského studia ve standardu 22 000 Kč/m se stejnou deskou a spotřebiči stojí okolo 96 400 Kč." } },
      { "@type": "Question", "name": "O kolik je kuchyň z IKEA levnější než z kuchyňského studia?", "acceptedAnswer": { "@type": "Answer", "text": "U skříněk je rozdíl podstatný: IKEA v základu vychází okolo 8 000 Kč za běžný metr, v premium řadě 14 000 Kč, zatímco studio začíná na 22 000 Kč a v premium variantě je na 38 000 Kč za metr. Truhlář na míru se pohybuje okolo 55 000 Kč za metr. Po započtení stejné desky a spotřebičů bývá celková úspora 30 až 50 procent. Studio ale dodává zaměření, návrh, atypické doplňky a jednu odpovědnost za celou realizaci." } },
      { "@type": "Question", "name": "Kolik stojí montáž kuchyňské linky?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka počítá s 3 500 Kč za běžný metr linky, takže třímetrová kuchyň vyjde na 10 500 Kč a čtyřmetrová na 14 000 Kč. V ceně bývá sestavení a ukotvení skříněk, osazení desky, vyřezání otvorů pro dřez a varnou desku a zapojení vestavných spotřebičů. Zvlášť se obvykle účtuje připojení plynu a revize, kterou smí provést jen oprávněná osoba, a rozvody vody či elektřiny, pokud se mění jejich poloha." } },
      { "@type": "Question", "name": "Jakou pracovní desku vybrat a kolik stojí?", "acceptedAnswer": { "@type": "Answer", "text": "Laminát stojí okolo 1 800 Kč za běžný metr a při kvalitním zatěsnění u dřezu vydrží osm až deset let. Dřevo a masiv se pohybují okolo 5 500 Kč za metr, vyžadují ale pravidelné olejování. Kámen a kompozit na bázi křemene vycházejí přibližně na 9 000 Kč za metr a přežijí kuchyň samotnou. Na třímetrové lince je rozdíl mezi laminátem a kamenem okolo 21 600 Kč, což je u celkového rozpočtu položka, která stojí za rozmyšlení." } },
      { "@type": "Question", "name": "Jsou ceny v kalkulačce s DPH a co v nich není?", "acceptedAnswer": { "@type": "Answer", "text": "Kalkulačka počítá orientační ceny bez DPH, u spotřebitelského nákupu je tedy nutné připočítat 21 procent. Ve výpočtu dále nejsou zahrnuty doprava a vynesení do bytu, demontáž a odvoz staré kuchyně, obklad nebo skleněná zástěna za linkou, dřez s baterií, osvětlení pracovní plochy, úpravy rozvodů vody a elektřiny ani malování. V praxi tyto položky přidají 15 až 30 procent k vypočtené částce." } }
    ]
  }, {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
      { "@type": "ListItem", "position": 2, "name": "Kalkulačky", "item": "https://www.domovniguru.cz/kalkulacky" },
      { "@type": "ListItem", "position": 3, "name": "Cena kuchyně", "item": "https://www.domovniguru.cz/kalkulacky/cena-kuchyne" }
    ]
  }]
};

export default function CenaKuchynePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Cena kuchyně</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Kolik stojí nová kuchyně?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Cena kuchyňské linky se liší řádově podle toho, zda sáhnete po IKEA sestavě, kuchyňském studiu nebo truhláři na míru. Zadejte délku linky, typ spotřebičů a materiál pracovní desky — kalkulačka vám okamžitě spočítá orientační celkovou cenu i rozpad nákladů.</p>

        <CenaKuchyneCalculator />
        <AffiliateCTA merchant="bonami" text="Vybavit kuchyni" />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak ušetřit na kuchyni bez kompromisů</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            IKEA kuchyně představují nejdostupnější cestu k nové lince s rozumnou kvalitou. Zásadní úspora přichází při svépomocné montáži — IKEA k tomu přímo vybízí a online plánovač IKEA Home Planner usnadní celý návrh. Pokud přesto zvolíte montážní firmu, dbejte na to, aby měla zkušenosti přímo s IKEA systémem Sektion nebo Metod, jinak hrozí zbytečné vícenáklady. Celkové náklady na IKEA kuchyni se svépomocnou montáží jsou typicky 30–50 % nižší oproti kuchyňskému studiu srovnatelné délky.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Pracovní deska je prvek, který nejvíce ovlivňuje vizuální dojem kuchyně — a zároveň ten, kde se vyplatí nepodceňovat kvalitu. Laminátová deska za zlomek ceny kamene po 5–7 letech začne vykazovat otlaky a bobtnání u dřezu. Pokud je rozpočet omezený, volte raději kompaktní laminát větší tloušťky (38 mm), který odolá vlhkosti lépe než tenčí varianty. Kámen nebo kompozit (křemen) se při správné péči nezničí desetiletí a opticky povýší i základní kuchyňskou skříňku.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Na čem v kuchyni nešetřit: závěsy dvířek, pojezdy zásuvek a úchytky. Levné panty po roce začínají skřípat a špatně držet, levné pojezdy zásuvek se drhnou. Dobré závěsy (Blum, Hettich) stojí o pár set korun více na dvířko, ale vydrží desítky tisíc otevření bez problémů. Stejně tak splachovací mechanismus dřezu a baterie — investice do kvalitního mixeru se vrátí v pohodlném každodenním používání a minimální údržbě.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Jak se výpočet dělá</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Kalkulačka sestavuje cenu ze čtyř položek. Tři se odvozují od délky linky v běžných metrech: skříňky, pracovní deska a případná montáž. Spotřebiče jsou paušál, protože trouba ani myčka nestojí v delší kuchyni víc. Celková cena je tedy délka × cena skříněk za metr + délka × cena desky za metr + paušál za spotřebiče + délka × 3 500 Kč, pokud montáž zadáte firmě. Výsledek je orientační a bez DPH.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Jednotkové ceny vycházejí z pěti úrovní standardu: IKEA základní 8 000 Kč/m, IKEA premium 14 000 Kč/m, studio standard 22 000 Kč/m, studio premium 38 000 Kč/m a truhlář na míru 55 000 Kč/m. U pracovní desky je to laminát 1 800 Kč/m, dřevo 5 500 Kč/m a kámen 9 000 Kč/m. Spotřebiče mají tři cenové hladiny: základní sestava 25 000 Kč, mid-range s myčkou a lednicí 55 000 Kč a prémiová výbava 120 000 Kč.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Konkrétní příklad: třímetrová linka IKEA v základním standardu stojí 3 × 8 000 = 24 000 Kč, laminátová deska 3 × 1 800 = 5 400 Kč, základní spotřebiče 25 000 Kč a při svépomocné montáži nic dalšího — celkem 54 400 Kč. Čtyřmetrová linka ze studia ve standardní řadě je 4 × 22 000 = 88 000 Kč, kamenná deska 36 000 Kč, spotřebiče mid-range 55 000 Kč a montáž firmou 14 000 Kč, dohromady 193 000 Kč. Rozdíl je víc než trojnásobek, přitom délka linky se změnila jen o metr.
          </p>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Nejčastější chyby</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rozpočet na kuchyň nevyčerpají skříňky, ale věci, které v nabídce nebyly:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Srovnávání nabídek, které nejsou srovnatelné.</strong> Jedna obsahuje spotřebiče a montáž, druhá jen korpusy. Rozepište si každou nabídku na stejné čtyři položky — skříňky, deska, spotřebiče, práce.</li>
            <li><strong>Zapomenuté rozvody.</strong> Přesun dřezu nebo myčky o metr znamená nové vedení vody a odpadu, zásuvku a často i sekání do zdi. Dvacet až čtyřicet tisíc navíc kalkulačka nezahrnuje.</li>
            <li><strong>Levná deska u dřezu.</strong> Laminát je rozumná volba, ale jen s pečlivě zatěsněnou hranou. Nabublalá deska znamená výměnu celé délky, nikoli jednoho dílu.</li>
            <li><strong>Úspora na kování.</strong> Závěsy a pojezdy se používají každý den po celou dobu života kuchyně. Rozdíl mezi anonymním a kvalitním kováním je pár tisíc na celou linku.</li>
            <li><strong>Nezohledněná digestoř a odvod.</strong> Odvodní digestoř vyžaduje potrubí ven, které v panelovém bytě často nelze vést. Recirkulační verze znamená průběžné náklady na filtry.</li>
            <li><strong>Objednání bez přesného zaměření.</strong> Vlastní měření pásmem nestačí, zdi nejsou v pravém úhlu a podlaha není v rovině. Jediný centimetr rozdílu znamená nedovírající dvířka nebo mezeru u stěny.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Co ještě budete potřebovat</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Položky, které kalkulačka nepočítá, ale v rozpočtu nakonec vždy jsou. Ceny jsou orientační včetně DPH:
          </p>
          <ul style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Dřez a baterie</strong> — nerezový dřez 1 500 až 4 000 Kč, granitový 3 000 až 9 000 Kč, baterie 1 500 až 8 000 Kč, sifon s přípojkou pro myčku 400 až 900 Kč.</li>
            <li><strong>Zástěna za linkou</strong> — keramický obklad 500 až 1 500 Kč/m², lakované sklo na míru 3 000 až 6 000 Kč/m², laminátová zástěna 1 200 až 2 500 Kč za metr.</li>
            <li><strong>Osvětlení pracovní plochy</strong> — LED pásek s profilem a zdrojem 600 až 2 000 Kč na linku, hotová podlinková svítidla 400 až 1 200 Kč za kus.</li>
            <li><strong>Doprava a vynesení</strong> 800 až 3 000 Kč, demontáž a odvoz staré kuchyně do sběrného dvora 2 000 až 6 000 Kč.</li>
            <li><strong>Úpravy rozvodů</strong> — nová zásuvka 600 až 1 500 Kč, přesun vody a odpadu 5 000 až 20 000 Kč, jistič pro varnou desku 1 500 až 4 000 Kč. Zapojení plynu a revize jen oprávněnou osobou, 2 000 až 5 000 Kč.</li>
            <li><strong>Vnitřní vybavení skříněk</strong> — organizéry na příbory 300 až 1 200 Kč, výsuvný koš 1 000 až 3 500 Kč, potravinová skříň s výsuvy 4 000 až 12 000 Kč.</li>
            <li><strong>Nářadí při svépomocné montáži</strong> — aku vrtačka, vodováha, kmitací pila nebo frézka na výřezy, svěrky a silikon. Nové vybavení 3 000 až 8 000 Kč, půjčení frézky 300 až 600 Kč na den.</li>
            <li><strong>Rezerva</strong> — 10 procent rozpočtu na nepředvídané úpravy, u rekonstrukce staršího bytu spíš 15 procent.</li>
          </ul>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px", marginTop: "36px" }}>Časté otázky</h2>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí kuchyňská linka 3 metry?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Při základním standardu IKEA okolo 8 000 Kč za běžný metr vyjde samotná linka na 24 000 Kč. S laminátovou pracovní deskou za 1 800 Kč/m přidáte 5 400 Kč a se základní sestavou spotřebičů, tedy troubou, varnou deskou a digestoří, dalších 25 000 Kč. Při svépomocné montáži je celek přibližně 54 400 Kč bez DPH. Tatáž linka z kuchyňského studia ve standardu 22 000 Kč/m se stejnou deskou a spotřebiči stojí okolo 96 400 Kč.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>O kolik je kuchyň z IKEA levnější než z kuchyňského studia?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              U skříněk je rozdíl podstatný: IKEA v základu vychází okolo 8 000 Kč za běžný metr, v premium řadě 14 000 Kč, zatímco studio začíná na 22 000 Kč a v premium variantě je na 38 000 Kč za metr. Truhlář na míru se pohybuje okolo 55 000 Kč za metr. Po započtení stejné desky a spotřebičů bývá celková úspora 30 až 50 procent. Studio ale dodává zaměření, návrh, atypické doplňky a jednu odpovědnost za celou realizaci.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Kolik stojí montáž kuchyňské linky?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka počítá s 3 500 Kč za běžný metr linky, takže třímetrová kuchyň vyjde na 10 500 Kč a čtyřmetrová na 14 000 Kč. V ceně bývá sestavení a ukotvení skříněk, osazení desky, vyřezání otvorů pro dřez a varnou desku a zapojení vestavných spotřebičů. Zvlášť se obvykle účtuje připojení plynu a revize, kterou smí provést jen oprávněná osoba, a rozvody vody či elektřiny, pokud se mění jejich poloha.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jakou pracovní desku vybrat a kolik stojí?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Laminát stojí okolo 1 800 Kč za běžný metr a při kvalitním zatěsnění u dřezu vydrží osm až deset let. Dřevo a masiv se pohybují okolo 5 500 Kč za metr, vyžadují ale pravidelné olejování. Kámen a kompozit na bázi křemene vycházejí přibližně na 9 000 Kč za metr a přežijí kuchyň samotnou. Na třímetrové lince je rozdíl mezi laminátem a kamenem okolo 21 600 Kč, což je u celkového rozpočtu položka, která stojí za rozmyšlení.
            </p>
          </details>
          <details style={{ border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 18px", marginBottom: "8px", background: "#fff" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "15px", color: "#2a2a28" }}>Jsou ceny v kalkulačce s DPH a co v nich není?</summary>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
              Kalkulačka počítá orientační ceny bez DPH, u spotřebitelského nákupu je tedy nutné připočítat 21 procent. Ve výpočtu dále nejsou zahrnuty doprava a vynesení do bytu, demontáž a odvoz staré kuchyně, obklad nebo skleněná zástěna za linkou, dřez s baterií, osvětlení pracovní plochy, úpravy rozvodů vody a elektřiny ani malování. V praxi tyto položky přidají 15 až 30 procent k vypočtené částce.
            </p>
          </details>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Kuchyňská linka – na míru vs. IKEA vs. studio", href: "/blog/kuchynska-linka-na-miru-vs-ikea", icon: "🍳" },
              { title: "Rekonstrukce koupelny – průvodce a ceny", href: "/blog/rekonstrukce-koupelny-pruvodce", icon: "🚿" },
              { title: "Cena rekonstrukce koupelny", href: "/kalkulacky/cena-rekonstrukce-koupelny-odhad", icon: "🏠" },
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
