import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jak připravit chatu nebo chalupu na zimu",
  description: "Voda, topení, okna i zabezpečení – kompletní checklist, jak chatu nebo chalupu připravit na zimní odstávku.",
  alternates: { canonical: "https://www.domovniguru.cz/blog/priprava-chaty-na-zimu" },
  openGraph: { title: "Jak připravit chatu nebo chalupu na zimu", description: "Voda, topení, okna i zabezpečení – kompletní checklist, jak chatu nebo chalupu připravit na zimní odstávku.", url: "https://www.domovniguru.cz/blog/priprava-chaty-na-zimu", siteName: "DomovniGuru", locale: "cs_CZ", type: "article", publishedTime: "2026-06-24T08:00:00Z", modifiedTime: "2026-06-24T08:00:00Z", authors: ["DomovniGuru"], images: [{ url: "/api/og?title=Jak%20p%C5%99ipravit%20chatu%20nebo%20chalupu%20na%20zimu&cat=blog", width: 1200, height: 630, alt: "Jak připravit chatu nebo chalupu na zimu" }] },
  twitter: { card: "summary_large_image", title: "Jak připravit chatu nebo chalupu na zimu", description: "Voda, topení, okna i zabezpečení – kompletní checklist, jak chatu nebo chalupu připravit na zimní odstávku." },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Article", "@id": "https://www.domovniguru.cz/blog/priprava-chaty-na-zimu#article", "headline": "Jak připravit chatu nebo chalupu na zimu", "datePublished": "2026-06-24T08:00:00Z", "dateModified": "2026-06-24T08:00:00Z", "author": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "publisher": { "@type": "Organization", "name": "DomovniGuru", "url": "https://www.domovniguru.cz" }, "inLanguage": "cs", "keywords": ["příprava chaty na zimu", "zazimování chalupy", "vypuštění vody chata", "zabezpečení chaty", "zazimování studny", "checklist chata zima"] }, { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "https://www.domovniguru.cz" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.domovniguru.cz/blog" }, { "@type": "ListItem", "position": 3, "name": "Sezónní údržba", "item": "https://www.domovniguru.cz/blog/kategorie/sezonni-udrzba" }, { "@type": "ListItem", "position": 4, "name": "Příprava chaty na zimu", "item": "https://www.domovniguru.cz/blog/priprava-chaty-na-zimu" }] }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Musím na zimu vypustit celý vodovodní systém na chatě?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud chatu přes zimu nevytápíš ani neudržuješ temperovanou, je vypuštění vody nutné. Voda v potrubí, bojleru i nádržce toalety při zamrznutí zvětší objem a může roztrhnout potrubí, armatury i samotný bojler." } }, { "@type": "Question", "name": "Jak zazimovat studnu na chatě?", "acceptedAnswer": { "@type": "Answer", "text": "U studny je potřeba vypustit čerpadlo a potrubí vedoucí od studny do domu, ideálně i s vyfouknutím zbytkové vody vzduchem. Samotnou studniční šachtu zakryj víkem a zatepli v místě, kde čerpadlo nebo potrubí vystupuje nad úroveň nezámrzné hloubky." } }, { "@type": "Question", "name": "Je lepší chatu přes zimu temperovat, nebo úplně vypnout topení?", "acceptedAnswer": { "@type": "Answer", "text": "Záleží na typu objektu. U zděných chalup s rozvody vody uvnitř stěn může mírné temperování (kolem 5–8 °C) ochránit instalace před zamrznutím a omezit vlhkost. U dřevěných chat bez rozvodů uvnitř konstrukce je obvykle jednodušší a levnější vodu úplně vypustit a topení vypnout." } }, { "@type": "Question", "name": "Jak ochránit chatu před vloupáním během dlouhé zimní nepřítomnosti?", "acceptedAnswer": { "@type": "Answer", "text": "Pomáhá kombinace viditelných i nenápadných opatření – kvalitní zámky, mříže nebo okenice na přízemních oknech, časovač na světle, informování sousedů nebo místního correspondenta, a v ideálním případě kamerový systém nebo GSM hlásič napojený na mobil." } }, { "@type": "Question", "name": "Co s elektřinou na chatě přes zimu?", "acceptedAnswer": { "@type": "Answer", "text": "Pokud chatu nebudeš temperovat, vypni hlavní jistič kromě okruhu, který chceš zachovat (např. mrazák nebo zabezpečovací systém). Odpojené spotřebiče ze zásuvky navíc ochráníš před přepětím při bouřce nebo výpadku proudu." } }] }] };

const RELATED = [
  { title: "Příprava domu na zimu – kompletní checklist", href: "/blog/priprava-domu-na-zimu", read: "10 min" },
  { title: "Jak zazimovat venkovní kohoutky a zahradní hadice", href: "/blog/zazimovani-venkovnich-kohoutku-a-hadic", read: "5 min" },
  { title: "Jak zazimovat sekačku a další zahradní techniku", href: "/blog/zazimovani-zahradni-techniky", read: "5 min" },
  { title: "Jak připravit garáž na zimu – kompletní checklist", href: "/blog/jak-pripravit-garaz-na-zimu", read: "8 min" },
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
              <Link href="/blog/kategorie/sezonni-udrzba">Sezónní údržba</Link><span className="breadcrumb-sep">/</span>
              <span>Příprava chaty na zimu</span>
            </nav>
            <header className="article-header">
              <div className="article-meta-top">
                <Link href="/blog/kategorie/sezonni-udrzba" className="article-cat-pill">❄️ Sezónní údržba</Link>
                <span className="article-read-time">⏱ 6 min čtení</span>
              </div>
              <h1 className="article-h1">Jak připravit chatu nebo chalupu na zimu</h1>
              <p className="article-lead">Chata nebo chalupa, kterou přes zimu nenavštěvuješ pravidelně, potřebuje před odjezdem mnohem důkladnější přípravu než běžně obývaný dům. Zamrzlá voda v potrubí, vlhkost bez větrání nebo nezabezpečené okno dokážou způsobit škody, které objevíš až na jaře. Tady je kompletní checklist, co všechno před zimní odstávkou zkontrolovat a udělat.</p>
              <div className="article-meta-row"><span>Aktualizováno: 24. června 2026</span><span>·</span><span>DomovniGuru</span></div>
            </header>
            <nav className="toc" aria-label="Obsah článku">
              <div className="toc-label">Obsah článku</div>
              <ol className="toc-list">
                <li><a href="#voda">Vypuštění vodovodního systému a bojleru</a></li>
                <li><a href="#studna">Zazimování studny a venkovních kohoutků</a></li>
                <li><a href="#zabezpeceni">Zabezpečení proti vloupání</a></li>
                <li><a href="#strecha">Kontrola střechy a okapů</a></li>
                <li><a href="#nabytek">Zahradní nábytek a technika</a></li>
                <li><a href="#vetrani">Větrání a prevence plísně</a></li>
                <li><a href="#elektrina">Elektřina a topení – vypnout, nebo temperovat?</a></li>
                <li><a href="#checklist">Checklist před odjezdem</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ol>
            </nav>

            <section id="voda">
              <h2>Vypuštění vodovodního systému a bojleru proti zamrznutí</h2>
              <p>Pokud chatu na zimu zcela opouštíš a nebudeš ji temperovat, je vypuštění vody to nejdůležitější, co musíš udělat. Zamrzlá voda zvyšuje objem a dokáže roztrhnout potrubí, baterie, bojler i WC nádržku – škody se často objeví až při prvním zatopení na jaře.</p>
              <ul>
                <li><strong>Uzavři hlavní přívod vody</strong> a vypusť potrubí od nejvyššího bodu směrem k nejnižšímu výpustnému kohoutku</li>
                <li><strong>Vypusť bojler</strong> – odpojený od sítě, otevři vypouštěcí ventil a nech vodu kompletně odtéct</li>
                <li><strong>Toaletní nádržka a sifon</strong> – vypusť vodu z nádržky a do sifonů (umyvadlo, dřez, WC) nalij nemrznoucí směs nebo lihový roztok, aby se zabránilo zamrznutí zbytkové vody a poškození vodní zápachové uzávěry</li>
                <li><strong>Pračka a myčka</strong> – pokud zůstávají na chatě, odpoj přívodní i odpadní hadici a vyfoukni zbytkovou vodu, případně nech odbornou zimní přípravu</li>
                <li><strong>Vyfoukání potrubí vzduchem</strong> – kompresor nebo i ruční pumpa pomůže vytlačit zbytkovou vodu z míst, kam gravitace nedosáhne</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Po vypuštění necháváš všechny vodovodní kohoutky a ventily v otevřené poloze – uzavřený systém by mohl zadržet vzduchovou kapsu se zbytkovou vodou.</div>
            </section>

            <section id="studna">
              <h2>Zazimování studny a venkovních kohoutků</h2>
              <p>Stejný princip jako u vnitřního vodovodu platí i pro venkovní rozvody. Specifika podrobně řeší náš článek o tom, jak <Link href="/blog/zazimovani-venkovnich-kohoutku-a-hadic" style={{ color: "#2a6496", textDecoration: "underline" }}>zazimovat venkovní kohoutky a zahradní hadice</Link> – shrnutí pro chatu:</p>
              <ul>
                <li><strong>Studniční čerpadlo a potrubí</strong> – vypusť vodu z čerpadla i přívodního potrubí mezi studnou a domem, u ponorných čerpadel je obvykle nutné čerpadlo vytáhnout, pokud hrozí zamrznutí v nezámrzné hloubce</li>
                <li><strong>Studniční šachta</strong> – zakryj víkem a v horní části zatepli, aby mráz nepronikl k armaturám</li>
                <li><strong>Venkovní kohoutky a zahradní hadice</strong> – uzavři přívod, vypusť zbytkovou vodu a hadice uskladni v nezámrzném prostoru</li>
                <li><strong>Zahradní zavlažovací systém</strong> – pokud ho na pozemku máš, je nutné ho profouknout a vypustit celý systém, voda v podzemních rozvodech jinak při mrazu praskne trubky</li>
              </ul>
            </section>

            <section id="zabezpeceni">
              <h2>Zabezpečení proti vloupání při dlouhé nepřítomnosti</h2>
              <p>Chaty a chalupy jsou kvůli dlouhé zimní nepřítomnosti častým cílem vloupání. Kombinace viditelných a nenápadných opatření funguje nejlépe.</p>
              <ul>
                <li><strong>Kvalitní zámky a bezpečnostní kování</strong> na všech vstupních dveřích, případně mříže nebo okenice na přízemních oknech</li>
                <li><strong>Časovač na osvětlení</strong> – simuluje přítomnost, zapíná světlo v různých částech objektu v náhodných intervalech</li>
                <li><strong>GSM hlásič nebo kamerový systém</strong> s upozorněním na mobil při pohybu nebo otevření dveří – i levnější bateriová řešení dnes fungují velmi spolehlivě</li>
                <li><strong>Informování sousedů nebo správce chatové oblasti</strong> – ať ví, že je chata na zimu prázdná a mohou si všimnout neobvyklého pohybu</li>
                <li><strong>Odstranění cenností a snadno přenosné techniky</strong> – co nemusí zůstat na chatě, odvez domů</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pojišťovny u chat často vyžadují konkrétní zabezpečovací prvky (typ zámku, mříže) jako podmínku pro plnění při vloupání – zkontroluj si pojistné podmínky předem.</div>
            </section>

            <section id="strecha">
              <h2>Kontrola střechy a okapů před zimou</h2>
              <p>Na neobývanou chatu nikdo nedohlédne, pokud se v zimě objeví protékající střecha nebo ucpaný okap – škoda se může táhnout celé měsíce, než ji objevíš. Před odjezdem se vyplatí střechu i okapy zkontrolovat důkladně.</p>
              <ul>
                <li><strong>Okapy a svody</strong> – vyčisti od listí a nečistot, ucpaný okap při tání snadno zamrzne a může se odtrhnout od konstrukce váhou ledu</li>
                <li><strong>Krytina</strong> – vizuálně zkontroluj uvolněné nebo poškozené tašky, plechy či šindele, drobné závady oprav ještě před prvním sněhem</li>
                <li><strong>Komín a prostupy střechou</strong> – zkontroluj těsnost lemování kolem komína, větracích a odtahových prostupů</li>
                <li><strong>Větve stromů nad střechou</strong> – ořež větve, které by mohly pod tíhou sněhu nebo námrazy spadnout na střechu</li>
              </ul>
            </section>

            <section id="nabytek">
              <h2>Uskladnění a ochrana zahradního nábytku a techniky</h2>
              <p>Zahradní nábytek, gril, ale i sekačka a další technika přes zimu venku rychle degradují vlivem vlhkosti, mrazu a UV záření. Podrobný postup pro techniku najdeš v článku, jak <Link href="/blog/zazimovani-zahradni-techniky" style={{ color: "#2a6496", textDecoration: "underline" }}>zazimovat sekačku a další zahradní techniku</Link>, zde shrnutí pro chatu celkově:</p>
              <ul>
                <li><strong>Zahradní nábytek</strong> – uskladni v suché kůlně nebo garáži, pokud to nejde, alespoň zakryj nepropustnou, ale prodyšnou plachtou</li>
                <li><strong>Sekačka, křovinořez, motorová technika</strong> – vypusť nebo stabilizuj palivo, vyčisti, uskladni v suchu</li>
                <li><strong>Bazén a zahradní vybavení</strong> – pokud máš na chatě bazén, je potřeba ho před zimou speciálně připravit (snížení hladiny, zazimovací sada chemie)</li>
                <li><strong>Skleník a pěstební nádoby</strong> – vyprázdni nádoby s vodou, terakotové květináče v mrazu praskají</li>
              </ul>
            </section>

            <section id="vetrani">
              <h2>Větrání a prevence plísně při dlouhodobé neobsazenosti</h2>
              <p>Uzavřený a nevětraný objekt bez vytápění je ideální prostředí pro plíseň, zejména pokud venku mrzne a uvnitř zůstává byť jen mírně vyšší vlhkost ze zbytkové vlhkosti zdiva nebo dřeva.</p>
              <ul>
                <li><strong>Mikroventilace</strong> – nechej pootevřené větrací štěrbiny nebo mírně pootočená okna do ventilační polohy, pokud to zabezpečení objektu dovoluje</li>
                <li><strong>Otevřené dveře skříní a vnitřních prostor</strong> – podpoří proudění vzduchu i v uzavřeném objektu</li>
                <li><strong>Odvlhčovač s automatickým vypínáním</strong> – pokud má chata elektřinu zachovanou, malý odvlhčovač s nádržkou udrží vnitřní vlhkost v rozumných mezích</li>
                <li><strong>Sáčky se silikagelem nebo vápnem</strong> – v menších prostorech (komory, skříně) pomohou pohltit přebytečnou vlhkost bez elektřiny</li>
              </ul>
              <div className="article-tip"><strong>💡 Tip:</strong> Pokud máš možnost, naplánuj si na zimu alespoň jednu kontrolní návštěvu v polovině sezóny – odhalíš případné problémy dřív, než napáchají velké škody.</div>
            </section>

            <section id="elektrina">
              <h2>Elektřina a topení – úplné vypnutí, nebo temperování?</h2>
              <p>Rozhodnutí, jestli chatu přes zimu úplně odstavit, nebo mírně temperovat, závisí na konstrukci objektu a vodovodních rozvodech.</p>
              <ul>
                <li><strong>Úplné vypnutí</strong> – vhodné u dřevěných chat bez rozvodů uvnitř konstrukce, kde je voda zcela vypuštěná; ušetří energii, ale objekt může více vlhnout</li>
                <li><strong>Temperování na 5–8 °C</strong> – vhodné u zděných chalup s rozvody vedenými ve zdech, kde by úplné vypnutí vedlo k zamrznutí nedostupných úseků potrubí; omezuje i kondenzaci vlhkosti</li>
                <li><strong>Jistič a zásuvky</strong> – vypni hlavní jistič kromě okruhu, který chceš zachovat (mrazák, zabezpečení, temperování), spotřebiče odpoj ze zásuvek kvůli přepětí</li>
                <li><strong>Plynové spotřebiče</strong> – uzavři hlavní přívod plynu, pokud na chatě není zachovaný provoz</li>
              </ul>
            </section>

            <section id="checklist">
              <h2>Checklist před odjezdem</h2>
              <ul>
                <li>Vypuštěný vodovodní systém, bojler a sifony s nemrznoucí směsí</li>
                <li>Zazimovaná studna, venkovní kohoutky a zahradní hadice</li>
                <li>Zkontrolovaná a vyčištěná střecha, okapy a svody</li>
                <li>Uskladněný nebo zakrytý zahradní nábytek a technika</li>
                <li>Zabezpečené vstupy, případně aktivovaný kamerový nebo GSM systém</li>
                <li>Rozhodnuto o temperování vs. úplném vypnutí elektřiny a topení</li>
                <li>Zajištěné mikrovětrání nebo odvlhčovač proti plísni</li>
                <li>Informovaní sousedé nebo správce oblasti o dlouhé nepřítomnosti</li>
              </ul>
            </section>

            <section id="faq">
              <h2>Časté otázky</h2>
              <div className="faq-list">
                {[
                  { q: "Musím na zimu vypustit celý vodovodní systém na chatě?", a: "Pokud chatu přes zimu nevytápíš ani neudržuješ temperovanou, je vypuštění vody nutné. Voda v potrubí, bojleru i nádržce toalety při zamrznutí zvětší objem a může roztrhnout potrubí, armatury i samotný bojler." },
                  { q: "Jak zazimovat studnu na chatě?", a: "U studny je potřeba vypustit čerpadlo a potrubí vedoucí od studny do domu, ideálně i s vyfouknutím zbytkové vody vzduchem. Samotnou studniční šachtu zakryj víkem a zatepli v místě, kde čerpadlo nebo potrubí vystupuje nad úroveň nezámrzné hloubky." },
                  { q: "Je lepší chatu přes zimu temperovat, nebo úplně vypnout topení?", a: "Záleží na typu objektu. U zděných chalup s rozvody vody uvnitř stěn může mírné temperování (kolem 5–8 °C) ochránit instalace před zamrznutím a omezit vlhkost. U dřevěných chat bez rozvodů uvnitř konstrukce je obvykle jednodušší a levnější vodu úplně vypustit a topení vypnout." },
                  { q: "Jak ochránit chatu před vloupáním během dlouhé zimní nepřítomnosti?", a: "Pomáhá kombinace viditelných i nenápadných opatření – kvalitní zámky, mříže nebo okenice na přízemních oknech, časovač na světle, informování sousedů nebo místního correspondenta, a v ideálním případě kamerový systém nebo GSM hlásič napojený na mobil." },
                  { q: "Co s elektřinou na chatě přes zimu?", a: "Pokud chatu nebudeš temperovat, vypni hlavní jistič kromě okruhu, který chceš zachovat (např. mrazák nebo zabezpečovací systém). Odpojené spotřebiče ze zásuvky navíc ochráníš před přepětím při bouřce nebo výpadku proudu." },
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
                    <div className="card-eyebrow-row"><span>Sezónní údržba</span><span>⏱ {r.read}</span></div>
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
                <li><a href="#voda">Vypuštění vody a bojleru</a></li>
                <li><a href="#studna">Zazimování studny</a></li>
                <li><a href="#zabezpeceni">Zabezpečení</a></li>
                <li><a href="#strecha">Střecha a okapy</a></li>
                <li><a href="#nabytek">Nábytek a technika</a></li>
                <li><a href="#vetrani">Větrání a plíseň</a></li>
                <li><a href="#elektrina">Elektřina a topení</a></li>
                <li><a href="#checklist">Checklist</a></li>
                <li><a href="#faq">Časté otázky</a></li>
              </ul></nav>
            </div>
            <div className="sidebar-widget">
              <div className="sidebar-widget-title">Kategorie</div>
              <Link href="/blog/kategorie/sezonni-udrzba" className="sidebar-cat-link">❄️ Sezónní údržba<span>24 článků →</span></Link>
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
