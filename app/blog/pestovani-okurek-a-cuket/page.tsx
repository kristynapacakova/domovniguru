import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak pěstovat okurky a cukety na zahradě – kompletní návod",
  description: "Výsadba, zálivka, hnojení a ochrana proti plísním – praktický návod na pěstování okurek a cuket.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/pestovani-okurek-a-cuket" },
  openGraph: { title: "Jak pěstovat okurky a cukety na zahradě – kompletní návod", description: "Výsadba, zálivka, hnojení a ochrana proti plísním – praktický návod na pěstování okurek a cuket.", url: "https://www.domovniguru.cz/blog/pestovani-okurek-a-cuket", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-12T08:00:00Z", modifiedTime: "2026-06-12T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C4%9Bstovat%20okurky%20a%20cukety%20na%20zahrad%C4%9B%20%E2%80%93%20kompletn%C3%AD%20n%C3%A1vod&cat=blog", width: 1200, height: 630, alt: "Jak pěstovat okurky a cukety na zahradě – kompletní návod" }] },
  twitter: { card: "summary_large_image", title: "Jak pěstovat okurky a cukety na zahradě – kompletní návod", description: "Výsadba, zálivka, hnojení a ochrana proti plísním – praktický návod na pěstování okurek a cuket." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/pestovani-okurek-a-cuket#article", "headline": "Jak pěstovat okurky a cukety na zahradě – kompletní návod", "datePublished": "2026-06-12T08:00:00Z", "dateModified": "2026-06-12T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["pěstování okurek", "pěstování cuket", "okurky na zahradě", "cukety výsadba", "padlí okurek"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Zahrada & terasa", "item": "https://www.domovniguru.cz/blog/kategorie/zahrada" }, { "@type": "ListItem", "position": 4, "name": "Jak pěstovat okurky a cukety na zahradě", "item": "https://www.domovniguru.cz/blog/pestovani-okurek-a-cuket" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Kdy se vysazují okurky a cukety na zahradu?", "acceptedAnswer": { "@type": "Answer", "text": "Předpěstovaná sadba se vysazuje po posledních mrazících, typicky od poloviny května do začátku června. Půda by měla mít alespoň 12–15 °C." } }, { "@type": "Question", "name": "Jak často zalévat okurky a cukety?", "acceptedAnswer": { "@type": "Answer", "text": "Okurky a cukety potřebují pravidelnou zálivku, ideálně 2–3krát týdně vydatně, ráno nebo večer. V horkých dnech může být potřeba zalévat denně, vždy ke kořenům, ne na listy." } }, { "@type": "Question", "name": "Proč mají okurky bílý povlak na listech?", "acceptedAnswer": { "@type": "Answer", "text": "Bílý moučnatý povlak je nejčastěji padlí okurkové. Vzniká při kolísání teplot, suchu u kořenů a vlhku na listech. Pomáhá pravidelná zálivka, prostřih a postřik mlékem nebo fungicidem." } }, { "@type": "Question", "name": "Jak velké rozestupy potřebují cukety?", "acceptedAnswer": { "@type": "Answer", "text": "Cukety jsou rozrůstavé rostliny a potřebují rozestupy alespoň 80–100 cm mezi rostlinami v obou směrech, ideálně 1 rostlina na 1 m²." } }, { "@type": "Question", "name": "Jak poznat, kdy sklízet okurky a cukety?", "acceptedAnswer": { "@type": "Answer", "text": "Salátové okurky se sklízí při délce 15–20 cm, nakladačky kolem 8–12 cm. Cukety se nejlépe sklízejí mladé, při délce 15–20 cm, kdy mají nejlepší chuť a slupku lze snadno propíchnout nehtem." } }] }] };

const RELATED = [
  { title: "Jak pěstovat rajčata na zahradě i balkoně", href: "/blog/jak-pestovat-rajcata", read: "5 min" },
  { title: "Jak pěstovat papriky – návod pro začátečníky", href: "/blog/jak-pestovat-papriky", read: "5 min" },
  { title: "Jak správně zalévat zahradu a záhony", href: "/blog/jak-spravne-zalevat", read: "4 min" },
  { title: "Jak hnojit zahradu během sezóny", href: "/blog/jak-hnojit-zahradu", read: "5 min" },
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
              <Link href="/blog/kategorie/zahrada">Zahrada & terasa</Link><span className="breadcrumb-sep">/</span>
              <span>Jak pěstovat okurky a cukety na zahradě</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/zahrada" className="article-cat-pill">🌿 Zahrada & terasa</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak pěstovat okurky a cukety na zahradě</h1>
              <p className="article-lead">Okurky a cukety patří k nejvděčnějším zeleninám na zahradě – při správné péči nasadí úrodu, kterou nestihneš zpracovat. Ukážeme ti, jak vybrat odrůdy, vysadit rostliny, správně je zalévat a hnojit a jak je ochránit před padlím a škůdci.</p>
              <div className="article-meta-row"><span>Aktualizováno: 12. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#vyber-odrud">Výběr odrůd a předpěstování</a></li>
                <li><a href="#vysadba">Výsadba a rozestupy</a></li>
                <li><a href="#zaliva-hnojeni">Zálivka a hnojení během sezóny</a></li>
                <li><a href="#opora">Opora a vedení rostlin</a></li>
                <li><a href="#ochrana">Ochrana proti padlí a škůdcům</a></li>
                <li><a href="#sklizen">Sklizeň a uchování úrody</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="vyber-odrud">
              <h2>1. Výběr odrůd a předpěstování / výsev</h2>
              <p>U okurek rozlišujeme především salátové okurky (na čerstvou spotřebu) a nakladačky (na nakládání a sterilizaci). Pro pěstování na zahradě i ve foliovníku se osvědčují odrůdy odolné vůči padlí a okurkové mozaice – štítek na sáčku semen by měl uvádět zkratky jako PM (powdery mildew) nebo CMV. Cukety vybírej podle účelu – keříčkové odrůdy (zelené i žluté) jsou kompaktnější a hodí se i na menší záhony.</p>
              <p>Předpěstování sadby zahájíš 3–4 týdny před plánovaným výsadbou, tedy zhruba v polovině až konci dubna. Semena se sázejí jednotlivě do menších kelímků nebo sadbovačů do hloubky 1,5–2 cm, půda by měla být lehká, propustná a udržovaná vlhká. Klíčení probíhá při teplotě 22–25 °C, semena vzejdou za 4–8 dní.</p>
              <p>Pokud nechceš sadbu předpěstovávat, můžeš okurky i cukety vysévat přímo do záhonu od poloviny května, kdy už nehrozí mrazy a půda je dostatečně prohřátá (alespoň 12–15 °C). Přímý výsev je jednodušší, ale rostliny dozrávají o 1–2 týdny později než předpěstovaná sadba.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Před výsadbou sadbu na pár dní „zatvrzuj" – přes den ji vynášej na zahradu na sluníčko a chráněné místo, večer vracej dovnitř. Rostliny si tak zvyknou na venkovní podmínky a lépe se ujmou.</div>
            </section>

            <section id="vysadba">
              <h2>2. Výsadba a rozestupy</h2>
              <p>Okurky i cukety mají rády slunné, závětrné stanoviště s výživnou, humusovitou půdou. Před výsadbou je vhodné záhon obohatit o vyzrálý kompost nebo hnůj – obě plodiny patří mezi tzv. silné spotřebitele a na chudé půdě se jim nedaří.</p>
              <p>Sadbu vysazuj po posledních mrazících, ideálně od poloviny května do začátku června, v podvečer nebo za zamračeného počasí, aby se rostliny zbytečně nestresovaly přímým sluncem. Sazenice zasaď do stejné hloubky, v jaké rostly v kelímku, kořenový bal lehce zalij.</p>
              <p>Rozestupy se liší podle typu rostliny:</p>
              <ul>
                <li><strong>Tyčkové okurky</strong> – 40–50 cm mezi rostlinami v řadě, 80–100 cm mezi řadami</li>
                <li><strong>Keříčkové okurky</strong> – 30–40 cm mezi rostlinami</li>
                <li><strong>Cukety</strong> – 80–100 cm mezi rostlinami v obou směrech, ideálně 1 rostlina na 1 m²</li>
              </ul>
              <p>Cukety zaberou hodně místa, proto se vyplatí jim věnovat samostatný záhon nebo okraj zahrady, kde se mohou volně rozrůstat.</p>
            </section>

            <section id="zaliva-hnojeni">
              <h2>3. Zálivka a hnojení během sezóny</h2>
              <p>Okurky i cukety jsou náročné na vlhkost – mají povrchový kořenový systém a rychle rostoucí listy s velkým výparem. Zalévej pravidelně, ideálně 2–3krát týdně vydatně, v horkých dnech i denně. Voda by měla vždy cílit ke kořenům, nikoli na listy, aby se nezvyšovalo riziko houbových chorob. Vhodné je mulčování slámou nebo posečenou trávou, které udrží vlhkost a omezí zaplevelení.</p>
              <p>Kolik vody rostliny skutečně potřebují závisí na velikosti záhonu, počasí a typu půdy. Pokud si nejsi jistá, kolik zalévat, pomůže ti <Link href="/kalkulacky/kolik-zavlahy" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačka zálivky</Link>, která spočítá orientační množství vody podle plochy a teploty.</p>
              <p>Hnojení začíná zhruba 2–3 týdny po výsadbě, kdy rostliny zakořenily a začínají růst. V prvních týdnech postačí hnojivo s vyšším obsahem dusíku pro podporu růstu listů, po nasazení květů a plodů přejdi na hnojivo s vyšším obsahem draslíku a fosforu, které podporuje tvorbu a kvalitu plodů. Hnojí se zpravidla jednou za 10–14 dní, vždy do vlhké půdy.</p>
              <p>Přesné dávkování hnojiva podle velikosti záhonu a typu hnojiva si můžeš ověřit pomocí <Link href="/kalkulacky/kolik-hnojiva" style={{ color: "#2a6496", textDecoration: "underline" }}>kalkulačky hnojení</Link> – předejdeš tak přehnojení, které plodinám škodí stejně jako jeho nedostatek.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Organické hnojivo (kompost, kopřivový macerát, hnůj) je pro okurky a cukety šetrnější a podporuje i zdravou půdní mikroflóru. Umělá hnojiva volíme spíše jako doplněk při viditelných příznacích nedostatku živin.</div>
            </section>

            <section id="opora">
              <h2>4. Opora a vedení rostlin</h2>
              <p>Tyčkové okurky se pěstují na opoře – tyčích, mřížích nebo síti – která jim umožní růst vzhůru. Vedení na oporu šetří místo, zlepšuje proudění vzduchu kolem rostlin, snižuje riziko hub a usnadňuje sklizeň. Postranní výhony (zálistky) se u tyčkových okurek pravidelně odstraňují, aby rostlina soustředila energii do hlavního stonku a plodů.</p>
              <p>Keříčkové okurky a cukety oporu obvykle nepotřebují, ale i u nich pomáhá, pokud rostlinu trochu nadzvedneš na slámu nebo podložku – plody se tak nedotýkají vlhké země a méně hnijí.</p>
              <p>U cuket se vyplatí jednou za čas odstranit nejstarší, žluté nebo poškozené listy u báze rostliny – zlepší se tím proudění vzduchu a snadněji najdeš plody schované pod velkými listy.</p>
            </section>

            <section id="ochrana">
              <h2>5. Ochrana proti padlí a škůdcům</h2>
              <h3>Padlí okurkové</h3>
              <p>Padlí se projevuje bílým moučnatým povlakem na listech a stoncích. Vzniká typicky při kolísání teplot mezi dnem a nocí, suchu u kořenů v kombinaci s vlhkým vzduchem kolem listů. Prevence spočívá v pravidelné zálivce ke kořenům, dostatečných rozestupech pro proudění vzduchu a odstraňování napadených listů hned po objevení příznaků. Při silnějším napadení pomáhá postřik roztokem syrovátky nebo mléka s vodou (1:9), případně registrovaný fungicid.</p>
              <h3>Plísně a hniloba plodů</h3>
              <p>Vlhko a nedostatečné proudění vzduchu mohou vést k plísním na plodech, zejména u cuket, které leží na zemi. Pomáhá mulčování, podložení plodů a omezení zálivky na listy.</p>
              <h3>Škůdci</h3>
              <ul>
                <li><strong>Mšice</strong> – napadají mladé výhony a spodní strany listů, pomáhá ostrý proud vody nebo postřik přírodním přípravkem na bázi řepkového oleje</li>
                <li><strong>Slimáci</strong> – u mladých rostlin mohou způsobit velké škody přes noc, účinné jsou pivní lapáky, drť z vaječných skořápek nebo bariéry kolem záhonu</li>
                <li><strong>Svilušky</strong> – objevují se za horkého a suchého počasí, projevují se drobnými žlutými skvrnami na listech, pomáhá zvýšená vzdušná vlhkost a postřik vodou</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pravidelná kontrola rostlin (ideálně každý druhý den) odhalí první příznaky problémů včas, kdy se ještě dají řešit bez chemie.</div>
            </section>

            <section id="sklizen">
              <h2>6. Sklizeň a uchování úrody</h2>
              <p>Salátové okurky sklízej při délce 15–20 cm, kdy mají nejlepší chuť a křupavost. Nakladačky se sklízejí menší, kolem 8–12 cm. Pravidelná sklizeň (ideálně každý druhý den) podporuje tvorbu nových plodů – pokud okurky přerostou a zežloutnou, rostlina zpomalí nasazování dalších.</p>
              <p>Cukety se nejlépe sklízejí mladé, při délce 15–20 cm. Slupka by se měla snadno propíchnout nehtem – pokud je už tvrdá, plod přerostl a chuťově i texturně ztrácí. Stejně jako u okurek platí, že čím častěji sklízíš, tím déle rostlina plodí.</p>
              <p>Čerstvé okurky vydrží v chladu (lednice, sklep) přibližně týden. Na delší uchování se hodí nakládání do sterilizovaných sklenic nebo kvašení. Cukety se dají krátce blanšírovat a zamrazit na pozdější použití do polévek a omáček, případně zpracovat na cuketové placky nebo chutney.</p>
              <div className="article-tip"><strong>💡 Tip:</strong> Přebytek úrody zvládneš zužitkovat i sušením – tenké plátky cuket usušené na nejnižší teplotě v troubě nebo sušičce vydrží měsíce a hodí se do zimních polévek.</div>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Kdy se vysazují okurky a cukety na zahradu?", a: "Předpěstovaná sadba se vysazuje po posledních mrazících, typicky od poloviny května do začátku června. Půda by měla mít alespoň 12–15 °C." },
                  { q: "Jak často zalévat okurky a cukety?", a: "Okurky a cukety potřebují pravidelnou zálivku, ideálně 2–3krát týdně vydatně, ráno nebo večer. V horkých dnech může být potřeba zalévat denně, vždy ke kořenům, ne na listy." },
                  { q: "Proč mají okurky bílý povlak na listech?", a: "Bílý moučnatý povlak je nejčastěji padlí okurkové. Vzniká při kolísání teplot, suchu u kořenů a vlhku na listech. Pomáhá pravidelná zálivka, prostřih a postřik mlékem nebo fungicidem." },
                  { q: "Jak velké rozestupy potřebují cukety?", a: "Cukety jsou rozrůstavé rostliny a potřebují rozestupy alespoň 80–100 cm mezi rostlinami v obou směrech, ideálně 1 rostlina na 1 m²." },
                  { q: "Jak poznat, kdy sklízet okurky a cukety?", a: "Salátové okurky se sklízí při délce 15–20 cm, nakladačky kolem 8–12 cm. Cukety se nejlépe sklízejí mladé, při délce 15–20 cm, kdy mají nejlepší chuť a slupku lze snadno propíchnout nehtem." },
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
                    <div className="card-eyebrow-row"><span>Zahrada & terasa</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#vyber-odrud">Výběr odrůd a předpěstování</a></li>
                <li><a href="#vysadba">Výsadba a rozestupy</a></li>
                <li><a href="#zaliva-hnojeni">Zálivka a hnojení</a></li>
                <li><a href="#opora">Opora a vedení rostlin</a></li>
                <li><a href="#ochrana">Ochrana proti padlí</a></li>
                <li><a href="#sklizen">Sklizeň a uchování</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/zahrada" className="sidebar-cat-link">🌿 Zahrada & terasa<span>Více článků →</span></Link>
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
