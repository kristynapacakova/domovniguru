import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Spotřebiče v pohotovostním režimu – kolik stojí standby 2026",
  description: "Kolik energie a peněz spotřebují vaše spotřebiče v pohotovostním režimu? Tabulka standby příkonů, roční náklady a praktické tipy jak fantomovou spotřebu omezit.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit" },
  openGraph: { title: "Spotřebiče v pohotovostním režimu – kolik stojí standby 2026", description: "TV, router, mikrovlnka, konzole – kolik berou ve standby a jak na fantomovou spotřebu.", url: "https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-17T08:00:00Z", modifiedTime: "2026-06-17T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Spot%C5%99eb%C4%8De%20v%20pohotovostn%C3%ADm%20re%C5%BEimu%20%E2%80%93%20kolik%20stoj%C3%AD%20standby%202026&cat=blog", width: 1200, height: 630, alt: "Spotřebiče v pohotovostním režimu – kolik stojí standby 2026" }] },
  twitter: { card: "summary_large_image", title: "Spotřebiče v pohotovostním režimu – kolik stojí standby 2026", description: "Kolik berou spotřebiče ve standby a jak fantomovou spotřebu omezit." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit#article",
      "headline": "Spotřebiče v pohotovostním režimu – kolik stojí standby a jak ušetřit",
      "datePublished": "2026-06-17T08:00:00Z",
      "dateModified": "2026-06-17T08:00:00Z",
      "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" },
      "inLanguage": "cs",
      "keywords": ["standby spotřeba", "fantomová spotřeba", "vampire power", "pohotovostní režim spotřebiče", "kolik bere TV ve standby", "vypínací lišta", "úspora elektřiny"]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Co je to fantomová spotřeba (vampire power)?", "acceptedAnswer": { "@type": "Answer", "text": "Fantomová spotřeba je elektřina, kterou spotřebiče odebírají i ve vypnutém nebo pohotovostním (standby) režimu — typicky pro hodiny, dálkové ovládání, síťové připojení nebo paměť nastavení. Jednotlivě jde o malé hodnoty (0,5–15 W), ale součet u 10–15 spotřebičů v domácnosti dokáže běžet nonstop celý rok." } },
        { "@type": "Question", "name": "Kolik stojí standby spotřeba ročně?", "acceptedAnswer": { "@type": "Answer", "text": "Průměrná domácnost s 10–15 spotřebiči v pohotovostním režimu zaplatí typicky 300–800 Kč ročně. Domácnost s herní konzolí, více televizory a síťovými prvky se může dostat i přes 1000 Kč ročně jen za elektřinu, kterou spotřebiče berou když je „nepoužíváte“." } },
        { "@type": "Question", "name": "Mám vypínat router, když nejsem doma?", "acceptedAnswer": { "@type": "Answer", "text": "Router obvykle nevypínejte, pokud potřebujete internet nonstop — třeba pro chytrou domácnost, kamery nebo vzdálený přístup. Router bere jen 5–10 W, takže úspora je malá a opakované restarty zkracují jeho životnost a zpomalují připojení po zapnutí." } },
        { "@type": "Question", "name": "Vyplatí se koupit vypínací lištu nebo chytrou zásuvku?", "acceptedAnswer": { "@type": "Answer", "text": "Ano, vypínací lišta s tlačítkem stojí 150–400 Kč a vrátí se do 1–2 let, pokud na ní máte TV, set-top box a herní konzoli. Chytrá zásuvka s časovačem (300–600 Kč) se vyplatí u zařízení, která chcete vypínat automaticky podle rozvrhu, např. v noci nebo v pracovní době." } },
        { "@type": "Question", "name": "Jak změřím standby spotřebu doma?", "acceptedAnswer": { "@type": "Answer", "text": "Nejjednodušší je wattmetr do zásuvky (cca 200–400 Kč) — zapojíte ho mezi zásuvku a spotřebič a během pár sekund vidíte aktuální příkon ve wattech. Změřte postupně všechny spotřebiče, které zůstávají zapojené, a sečtěte hodnoty pro odhad roční spotřeby." } },
        { "@type": "Question", "name": "Má smysl odpojovat nabíječku, když v ní nic nenabíjím?", "acceptedAnswer": { "@type": "Answer", "text": "Moderní nabíječky berou prázdné jen 0,1–0,5 W, takže finanční úspora je minimální (pár korun ročně na nabíječku). Smysl to má spíš z bezpečnostních důvodů a kvůli prodloužení životnosti nabíječky, ne primárně pro úsporu peněz." } }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit#howto",
      "name": "Spotřebiče v pohotovostním režimu – kolik stojí standby a jak ušetřit",
      "description": "Kolik energie a peněz spotřebují vaše spotřebiče v pohotovostním režimu? Tabulka standby příkonů, roční náklady a praktické tipy jak fantomovou spotřebu omezit.",
      "step": [
        { "@type": "HowToStep", "name": "Co je fantomová spotřeba", "text": "Spotřebiče odebírají proud i ve vypnutém nebo pohotovostním stavu — pro hodiny, dálkové ovládání nebo síťové připojení." },
        { "@type": "HowToStep", "name": "Kolik berou typické spotřebiče ve standby", "text": "Přehled standby příkonů běžných spotřebičů v domácnosti." },
        { "@type": "HowToStep", "name": "Kolik to stojí ročně", "text": "Odhad ročních nákladů na standby spotřebu podle počtu a typu spotřebičů." },
        { "@type": "HowToStep", "name": "Jak fantomovou spotřebu omezit", "text": "Vypínací lišty, chytré zásuvky a odpojování nabíječek." },
        { "@type": "HowToStep", "name": "Co naopak nevypínat", "text": "Router, lednička a zařízení vyžadující pravidelné aktualizace." },
        { "@type": "HowToStep", "name": "Jak na to prakticky", "text": "Proměřte spotřebu wattmetrem, identifikujte největší žrouty a postupně je řešte." }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" },
        { "@type": "ListItem", "position": 3, "name": "Elektrika & osvětlení", "item": "https://www.domovniguru.cz/blog/kategorie/elektrika" },
        { "@type": "ListItem", "position": 4, "name": "Spotřebiče v pohotovostním režimu – kolik stojí standby a jak ušetřit", "item": "https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit" }
      ]
    }
  ],
};

const RELATED = [
  { title: "Jak snížit účet za elektřinu doma", href: "/blog/snizit-ucet-za-elektrinu", read: "7 min" },
  { title: "Jak číst elektroměr", href: "/blog/jak-cist-elektromer", read: "5 min" },
  { title: "LED vs. žárovky – co se vyplatí víc", href: "/blog/led-vs-zarovky", read: "6 min" },
  { title: "Chytrá domácnost – jak začít", href: "/blog/chytra-domacnost-zaciname", read: "6 min" },
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
              <span>Spotřebiče v pohotovostním režimu</span>
            </nav>

            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/elektrika" className="article-cat-pill">⚡ Elektrika & osvětlení</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Spotřebiče v pohotovostním režimu – kolik stojí standby a jak ušetřit</h1>
              <p className="article-lead">Televize, router, mikrovlnka i nabíječky berou proud i ve vypnutém stavu. Jednotlivě jde o malé částky, ale za rok se z fantomové spotřeby může stát stovky korun navíc na účtu za elektřinu. Spočítejte si kolik to je u vás a jak to omezit bez ztráty pohodlí.</p>
              <div className="article-meta-row"><span>Aktualizováno: 17. června 2026</span><span>·</span><span>DomovniGuru</span></div>
              <ShareButtons url="https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit" title="Spotřebiče v pohotovostním režimu – kolik stojí standby a jak ušetřit" />
            </header>

            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vampire-power">Co je fantomová spotřeba (vampire power)</a></li>
                <li><a href="#tabulka">Kolik berou typické spotřebiče ve standby</a></li>
                <li><a href="#naklady">Kolik to stojí ročně</a></li>
                <li><a href="#omezit">Jak fantomovou spotřebu omezit</a></li>
                <li><a href="#nevypinat">Co naopak nevypínat</a></li>
                <li><a href="#postup">Jak na to prakticky</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>

            <section id="vampire-power">
              <h2>Co je fantomová spotřeba (vampire power)</h2>
              <p>Většina elektronických spotřebičů se ve skutečnosti nikdy úplně nevypíná. Tlačítko „off" na dálkovém ovládání nebo na panelu spotřebič jen přepne do pohotovostního režimu (standby) — interní elektronika dál drží napětí, aby spotřebič mohl okamžitě reagovat na zapnutí, udržoval hodiny, paměť nastavení nebo síťové připojení.</p>
              <p>Tomuto jevu se anglicky říká <strong>vampire power</strong> nebo <strong>phantom load</strong> — fantomová spotřeba. Je to proud, který si spotřebič „upíře" ze sítě, aniž byste ho aktivně používali. U jednoho spotřebiče je to zanedbatelné množství, ale v běžné domácnosti se standby spotřebiči počítají na desítky.</p>
              <ul>
                <li><strong>Proč to spotřebiče dělají:</strong> Rychlé zapnutí dálkovým ovládáním, udržení hodin a časovačů, síťové připojení (Wi-Fi, aktualizace), zapamatování posledního nastavení.</li>
                <li><strong>Kde to nejvíc bolí:</strong> Zařízení, která jsou zapojená 24 hodin denně 365 dní v roce — set-top box, router, herní konzole v klidovém režimu.</li>
                <li><strong>Co to neznamená:</strong> Nejde o závadu ani plýtvání ze strany výrobce — je to nutný kompromis mezi pohodlím a spotřebou.</li>
              </ul>
            </section>

            <section id="tabulka">
              <h2>Kolik berou typické spotřebiče ve standby</h2>
              <p>Standby příkon se liší podle typu a stáří spotřebiče. Novější zařízení s certifikací Energy Star bývají úspornější, starší elektronika může brát i víc. Orientační hodnoty pro běžnou domácnost:</p>
              <table className="article-table">
                <thead>
                  <tr><th>Spotřebič</th><th>Standby příkon</th><th>Odhad Kč/rok</th></tr>
                </thead>
                <tbody>
                  <tr><td>Televize (LED/OLED)</td><td>0,5–3 W</td><td>15–80 Kč</td></tr>
                  <tr><td>Set-top box / router (běží nonstop)</td><td>5–10 W</td><td>150–270 Kč</td></tr>
                  <tr><td>Mikrovlnka s hodinami</td><td>2–4 W</td><td>55–110 Kč</td></tr>
                  <tr><td>Herní konzole (klidový režim)</td><td>10–15 W</td><td>270–400 Kč</td></tr>
                  <tr><td>Nabíječka zapojená bez zařízení</td><td>0,1–0,5 W</td><td>3–14 Kč</td></tr>
                </tbody>
              </table>
              <p>Výpočet vychází z ceny elektřiny kolem 6–7 Kč/kWh a nepřetržitého provozu 24/7. Set-top box a router mívají nejvyšší dopad právě proto, že jsou v provozu skutečně celý rok bez výjimky, na rozdíl od TV nebo konzole, které alespoň občas „pracují" naplno.</p>
            </section>

            <section id="naklady">
              <h2>Kolik to stojí ročně</h2>
              <p>Sečtěte standby spotřebu všech zařízení v domácnosti a výsledek vás možná překvapí. Typická domácnost má 10–15 spotřebičů, které zůstávají zapojené v pohotovostním režimu — TV, router, set-top box, mikrovlnka, troubu s displejem, pračku, sušičku, nabíječky telefonů a notebooků, reproduktory, herní konzoli.</p>
              <ul>
                <li><strong>Běžná domácnost (10–15 standby spotřebičů):</strong> typicky 300–800 Kč ročně jen za fantomovou spotřebu.</li>
                <li><strong>Domácnost s herní konzolí a více televizory:</strong> klidně přes 1000 Kč ročně — konzole v klidovém režimu a druhá TV s set-top boxem dokážou navýšit účet citelně.</li>
                <li><strong>Domácnost se starší elektronikou:</strong> starší zařízení (CRT televize, staré routery, staré nabíječky) mívají vyšší standby příkon než moderní ekvivalenty.</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> 500 Kč ročně na standby spotřebu nezní jako moc, ale za 5 let je to 2 500 Kč „vyhozených" za elektřinu, kterou jste aktivně nepoužili. U herní konzole nebo druhé TV se vyplatí investovat do vypínací lišty hned.</div>
            </section>

            <section id="omezit">
              <h2>Jak fantomovou spotřebu omezit</h2>
              <ul>
                <li><strong>Vypínací lišta s tlačítkem:</strong> Nejlevnější a nejúčinnější řešení. Zapojte do ní TV, set-top box, herní konzoli a reproduktory — jedním kliknutím odpojíte všechno najednou, žádné samostatné odpojování kabelů.</li>
                <li><strong>Chytrá zásuvka s časovačem:</strong> Umožní automaticky vypnout zařízení podle rozvrhu, třeba v noci nebo když jste v práci. Vhodná pro zařízení, která nepotřebujete mít pořád v pohotovosti.</li>
                <li><strong>Odpojování nabíječek:</strong> Finanční přínos je malý (pár korun na nabíječku ročně), ale snižuje riziko přehřátí a prodlužuje životnost nabíječky — vyplatí se to spíš z bezpečnostních důvodů.</li>
                <li><strong>Nastavení automatického vypnutí:</strong> Mnohé televize a konzole mají v menu možnost automatického přechodu do hlubšího spánku nebo úplného vypnutí po určité době nečinnosti — stačí to jednou zapnout v nastavení.</li>
              </ul>
              <div className="article-tip"><strong>⚠️ Pozor:</strong> Některé set-top boxy po úplném odpojení od proudu potřebují po zapnutí delší dobu na nahrání kanálů nebo aktualizaci softwaru. Pokud vám to vadí, vypínejte jen zařízení, kde to nevadí (TV, konzole, reproduktory).</div>
            </section>

            <section id="nevypinat">
              <h2>Co naopak nevypínat</h2>
              <ul>
                <li><strong>Router:</strong> Pokud potřebujete internet nonstop — třeba pro chytrou domácnost, kamery nebo vzdálený přístup — router nevypínejte. Bere jen 5–10 W, takže úspora je minimální, a opakované restarty zkracují životnost a zpomalují připojení po zapnutí.</li>
                <li><strong>Lednička a mraznička:</strong> Samozřejmost — tyto spotřebiče musí běžet nepřetržitě, aby udržely potraviny v bezpečné teplotě.</li>
                <li><strong>Zařízení vyžadující pravidelné aktualizace:</strong> Set-top boxy a chytré televize si často aktualizují software a programovou nabídku v noci. Časté odpojování od proudu může způsobit, že zařízení nebude mít aktuální data nebo bude po zapnutí pomalejší.</li>
              </ul>
            </section>

            <section id="postup">
              <h2>Jak na to prakticky</h2>
              <ul>
                <li><strong>Krok 1 — Proměřte spotřebu wattmetrem:</strong> Levný wattmetr do zásuvky (cca 200–400 Kč) vám během sekund ukáže přesný příkon konkrétního spotřebiče. Bez měření jde jen o odhady.</li>
                <li><strong>Krok 2 — Identifikujte největší žrouty:</strong> Postupně proměřte všechny spotřebiče, které zůstávají zapojené. Soustřeďte se na ty s nejvyšším standby příkonem — herní konzole, set-top box, starší elektronika.</li>
                <li><strong>Krok 3 — Řešte postupně:</strong> Nejdřív vyřešte největší žrouty (vypínací lišta na TV koutek), pak teprve drobnosti jako nabíječky. Nemá smysl začínat od položek, které ušetří pár korun ročně.</li>
              </ul>
              <p>Wattmetr se vyplatí i dlouhodobě — kromě standby spotřeby jím odhalíte i jiné neefektivní spotřebiče v domácnosti, třeba starou ledničku nebo nevhodně nastavený bojler.</p>
            </section>

            <section id="faq">
              <h2>Časté otázky (FAQ)</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">Co je to fantomová spotřeba (vampire power)?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Fantomová spotřeba je elektřina, kterou spotřebiče odebírají i ve vypnutém nebo pohotovostním (standby) režimu — typicky pro hodiny, dálkové ovládání, síťové připojení nebo paměť nastavení. Jednotlivě jde o malé hodnoty (0,5–15 W), ale součet u 10–15 spotřebičů v domácnosti dokáže běžet nonstop celý rok.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Kolik stojí standby spotřeba ročně?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Průměrná domácnost s 10–15 spotřebiči v pohotovostním režimu zaplatí typicky 300–800 Kč ročně. Domácnost s herní konzolí, více televizory a síťovými prvky se může dostat i přes 1000 Kč ročně jen za elektřinu, kterou spotřebiče berou když je „nepoužíváte".</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Mám vypínat router, když nejsem doma?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Router obvykle nevypínejte, pokud potřebujete internet nonstop — třeba pro chytrou domácnost, kamery nebo vzdálený přístup. Router bere jen 5–10 W, takže úspora je malá a opakované restarty zkracují jeho životnost a zpomalují připojení po zapnutí.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Vyplatí se koupit vypínací lištu nebo chytrou zásuvku?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Ano, vypínací lišta s tlačítkem stojí 150–400 Kč a vrátí se do 1–2 let, pokud na ní máte TV, set-top box a herní konzoli. Chytrá zásuvka s časovačem (300–600 Kč) se vyplatí u zařízení, která chcete vypínat automaticky podle rozvrhu, např. v noci nebo v pracovní době.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Jak změřím standby spotřebu doma?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Nejjednodušší je wattmetr do zásuvky (cca 200–400 Kč) — zapojíte ho mezi zásuvku a spotřebič a během pár sekund vidíte aktuální příkon ve wattech. Změřte postupně všechny spotřebiče, které zůstávají zapojené, a sečtěte hodnoty pro odhad roční spotřeby.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">Má smysl odpojovat nabíječku, když v ní nic nenabíjím?<span className="faq-icon">▾</span></summary>
                  <div className="faq-body">Moderní nabíječky berou prázdné jen 0,1–0,5 W, takže finanční úspora je minimální (pár korun ročně na nabíječku). Smysl to má spíš z bezpečnostních důvodů a kvůli prodloužení životnosti nabíječky, ne primárně pro úsporu peněz.</div>
                </details>
              </div>
            </section>

            <ShareButtons url="https://www.domovniguru.cz/blog/spotrebice-ve-standby-jak-usetrit" title="Spotřebiče v pohotovostním režimu – kolik stojí standby a jak ušetřit" />

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
                <li><a href="#vampire-power">Co je fantomová spotřeba</a></li>
                <li><a href="#tabulka">Příkony ve standby</a></li>
                <li><a href="#naklady">Kolik to stojí ročně</a></li>
                <li><a href="#omezit">Jak to omezit</a></li>
                <li><a href="#nevypinat">Co nevypínat</a></li>
                <li><a href="#postup">Jak na to prakticky</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/elektrika" className="sidebar-cat-link">⚡ Elektrika & osvětlení<span>20 článků →</span></Link>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .article-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;padding:48px 0 80px;align-items:start}
        .article-header{margin-bottom:32px}
        .article-meta-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .article-cat-pill{display:inline-flex;align-items:center;height:24px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:background 120ms}
        .article-cat-pill:hover{background:#e8e7e2;color:var(--text)}
        .article-read-time{font-size:12px;color:var(--muted);font-weight:500}
        .article-h1{font-family:var(--font-serif);font-size:clamp(26px,3.5vw,40px);line-height:1.1;font-weight:400;letter-spacing:-.01em;margin-bottom:16px}
        .article-lead{font-size:18px;line-height:1.65;color:var(--muted);font-weight:300;margin-bottom:14px}
        .article-meta-row{display:flex;gap:8px;font-size:12px;color:var(--muted);font-weight:500}
        .toc{background:var(--surface);border-radius:10px;padding:20px 24px;margin-bottom:40px}
        .toc-label{font-size:11px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
        .toc-list{padding-left:18px;display:flex;flex-direction:column;gap:6px}
        .toc-list li a{font-size:14px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms}
        .toc-list li a:hover{color:var(--text)}
        .article-body section{margin-bottom:48px}
        .article-body h2{font-family:var(--font-serif);font-size:clamp(20px,2.5vw,26px);font-weight:400;line-height:1.2;margin-bottom:16px;border-top:1px solid var(--border);padding-top:24px;margin-top:8px}
        .article-body h3{font-family:var(--font-sans);font-size:16px;font-weight:600;margin-top:24px;margin-bottom:10px;color:var(--text)}
        .article-body p{font-size:16px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:14px}
        .article-body ul,.article-body ol{padding-left:22px;margin-bottom:16px;display:flex;flex-direction:column;gap:8px}
        .article-body li{font-size:15px;line-height:1.6;color:#2a2a28;font-weight:300}
        .article-body strong{font-weight:600;color:var(--text)}
        .article-tip{background:#fff8e8;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0;padding:14px 18px;font-size:14px;line-height:1.6;color:#78716c;margin:20px 0}
        .article-table{width:100%;border-collapse:collapse;margin:20px 0;font-size:14px}
        .article-table th,.article-table td{padding:10px 14px;border:1px solid var(--border);text-align:left}
        .article-table th{background:var(--surface);font-weight:600;color:var(--text);font-size:12px;letter-spacing:.03em;text-transform:uppercase}
        .article-table td{color:#2a2a28;font-weight:300}
        .faq-list{display:flex;flex-direction:column;gap:8px;margin-top:16px}
        .faq-item{border:1px solid var(--border);border-radius:10px;overflow:hidden}
        .faq-summary{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;cursor:pointer;font-size:15px;font-weight:500;color:var(--text);background:var(--surface);list-style:none;gap:12px}
        .faq-summary:hover{background:#e8e7e2}
        .faq-icon{flex-shrink:0;color:var(--muted);transition:transform 200ms;font-size:14px}
        details[open] .faq-icon{transform:rotate(180deg)}
        .faq-body{padding:14px 18px;font-size:14px;line-height:1.7;color:#4a4a48;font-weight:300;border-top:1px solid var(--border);background:#fff}
        .related-section{margin-top:56px}
        .related-section h2{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:20px;padding-top:24px;border-top:1px solid var(--border)}
        .related-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .article-sidebar{position:sticky;top:80px;display:flex;flex-direction:column;gap:16px}
        .sidebar-widget{background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px}
        .sidebar-widget-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:14px}
        .sidebar-toc{list-style:none;display:flex;flex-direction:column;gap:8px}
        .sidebar-toc li a{font-size:13px;color:var(--muted);text-decoration:none;font-weight:400;transition:color 120ms;line-height:1.4;display:block}
        .sidebar-toc li a:hover{color:var(--text)}
        .sidebar-cat-link{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:500;color:var(--text);text-decoration:none;padding:8px 0;border-bottom:1px solid var(--border);transition:color 120ms}
        .sidebar-cat-link:hover{color:var(--muted)}
        .sidebar-cat-link span{font-size:12px;color:var(--muted)}
        @media(max-width:960px){.article-layout{grid-template-columns:1fr;gap:0}.article-sidebar{position:static;margin-top:40px}.related-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
