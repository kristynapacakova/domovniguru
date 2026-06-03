import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";

export const metadata: Metadata = {
  title: "Jak nasilikonovat vanu jako profík: Návod krok za krokem 2026",
  description: "Plesnivé rohy nebo zatékání za vanu? Naučte se, jak starý silikon odstranit, odmastit spáry a nanést nový tmel tak, aby vydržel roky.",
  alternates: { canonical: "https://www.domovniguru.cz/navody/jak-utesnit-vanu-silikonem" },
  openGraph: { title: "Jak nasilikonovat vanu jako profík: Návod krok za krokem 2026", description: "Plesnivé rohy nebo zatékání za vanu? Naučte se, jak starý silikon odstranit, odmastit spáry a nanést nový tmel tak, aby vydržel roky.", url: "https://www.domovniguru.cz/navody/jak-utesnit-vanu-silikonem", type: "article", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
};

export default function NavodSilikon() {
  const nastroje = [
    "Kvalitní sanitární silikon (s protiplísňovou úpravou)",
    "Aplikační pistole na kartuše",
    "Rozprašovač s mýdlovou vodou",
    "Silikonová stěrka (sada pro různé poloměry)",
    "Papírové utěrky (na přebytečný tmel)",
    "Technický benzín na dokonalé odmaštění"
  ];

  return (
    <>
      <div className="wrap" style={{ padding: "40px 0" }}>
        <article className="article-body" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <nav className="breadcrumb">
            <Link href="/">Domů</Link><span className="breadcrumb-sep">/</span>
            <Link href="/navody">Návody</Link><span className="breadcrumb-sep">/</span>
            <span>Silikonování vany</span>
          </nav>

          <header className="article-header" style={{ margin: "30px 0" }}>
            <div className="article-meta-top">
              <span className="article-cat-pill">🚿 KOUPELNA</span>
              <span className="article-read-time">⏱ 30 min práce</span>
            </div>
            <h1 className="article-h1" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: "1.1" }}>
              Jak nasilikonovat vanu jako profík v roce 2026
            </h1>
            <p className="article-lead" style={{ fontSize: "20px", marginTop: "20px" }}>
              Plesnivé rohy nebo zatékání za vanu? Nový silikon osvěží celou koupelnu. Tajemství není v drahé pistoli, ale v přípravě a mýdlové vodě.
            </p>
            <div style={{ marginTop: "20px" }}>
               <ShareButtons 
                url="https://www.domovniguru.cz/navody/jak-utesnit-vanu-silikonem" 
                title="Jak nasilikonovat vanu jako profík 2026" 
               />
            </div>
          </header>

          <section style={{ background: "#f8f4f0", borderRadius: "16px", padding: "30px", marginBottom: "40px", border: "1px solid #eee" }}>
            <h3 style={{ fontSize: "22px", marginBottom: "20px", fontFamily: "var(--font-serif)" }}>Co budete potřebovat:</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "10px" }}>
              {nastroje.map((n, i) => (
                <li key={i} style={{ fontSize: "15px", display: "flex", alignItems: "start", gap: "8px" }}>
                  <span style={{ color: "#c8a97a" }}>✔</span> {n}
                </li>
              ))}
            </ul>
          </section>

          <div className="content-rich-text" style={{ fontSize: "18px", lineHeight: "1.8", fontWeight: 300 }}>
            <h2 id="krok1">Krok 1: Totální odstranění starého silikonu</h2>
            <p>
              Tohle je ta nejméně zábavná část, ale pokud ji odfláknete, nový silikon na starém nebude držet. Starý tmel musíte vyškrábnout <strong>úplně celý</strong>. 
              Použijte odlamovací nůž nebo speciální plastovou škrabku, abyste nepoškrábali akrylátovou vanu. Zbytky silikonu odstraňte chemickým odstraňovačem silikonu.
            </p>

            <h2 id="krok2">Krok 2: Odmaštění (Základ úspěchu)</h2>
            <p>
              I když povrch vypadá čistě, přejeďte spáru hadříkem namočeným v <strong>technickém benzínu</strong> nebo lihu. Pokud tam zůstane neviditelná mastnota z mýdla nebo kožního tuku, nový silikon se za pár měsíců odchlípne a začne pod něj zatékat voda.
            </p>

            <div className="article-tip" style={{ background: "#fff", border: "2px solid #3a3a38", padding: "25px", borderRadius: "12px", margin: "40px 0" }}>
              <h4 style={{ margin: "0 0 10px 0", textTransform: "uppercase", fontSize: "14px", fontWeight: 700 }}>💡 GURU TIP PRO ROK 2026: NAPUSŤTE VANU</h4>
              <p style={{ margin: 0, fontSize: "16px" }}>
                Před samotným nanášením silikonu napusťte vanu vodou (ideálně do poloviny). Vana si pod váhou vody "sedne" o 1–2 mm. Pokud byste silikonovali prázdnou vanu, mohl by čerstvý silikon při prvním koupání pod vaší vahou prasknout nebo se odtrhnout od zdi. Vypusťte ji až po vytvrdnutí (cca 24h).
              </p>
            </div>

            <h2 id="krok3">Krok 3: Plynulá aplikace</h2>
            <p>
              Seřízněte špičku kartuše pod úhlem 45 stupňů tak, aby šířka otvoru odpovídala šířce spáry. Pomocí aplikační pistole nanášejte silikon plynulým tahem k sobě. Snažte se o rovnoměrnou "housenku" bez přerušování.
            </p>

            <h2 id="krok4">Krok 4: Mýdlové kouzlo</h2>
            <p>
              Tady dělají amatéři největší chybu – olíznou si prst. Sliny obsahují bakterie, které v silikonu časem vytvoří černé tečky (plíseň). 
              Místo toho celou čerstvou spáru postříkejte rozprašovačem s <strong>mýdlovou vodou</strong> (voda + jar). Poté stěrkou jedním tahem silikon uhlaďte. Díky mýdlu se přebytečný silikon nepřilepí na vanu ani na dlaždice a vytvoří dokonalý náběh.
            </p>
          </div>

          <section style={{ marginTop: "60px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", marginBottom: "24px", paddingTop: "24px", borderTop: "1px solid #eee" }}>Časté otázky</h2>
            <div className="faq-list">
              {[
                { q: "Proč musím napustit vanu před silikonováním?", a: "Vana se pod váhou vody o 1–2 mm 'sesedne'. Pokud bys silikonoval prázdnou vanu, čerstvý silikon by při prvním koupání pod tlakem praskl nebo se odtrhl od zdi. Napusť vanu, aplikuj silikon a počkej na zatvrdnutí – teprve pak vypusť." },
                { q: "Jak dlouho čekat po silikonování, než vanu použiji?", a: "Minimálně 24 hodin, ideálně 48 hodin. Silikon potřebuje čas na vulkanizaci (zatvrdnutí). Příliš brzy zahájená kontakt s vodou a mechanické namáhání zhoršují přilnavost a silikon se rychleji odchlipuje." },
                { q: "Jak správně odstranit starý silikon?", a: "Odlamovacím nůžem nebo plastovou škrabkou (aby se povrch vany nepoškrábal) odstraň hlavní hmotu. Zbytky odstraň chemickým odstraňovačem silikonu. Povrch poté odmaštěti technickým benzínem nebo lihem – to je klíčový krok pro přilnutí nového silikonu." },
                { q: "Jak předejít černé plísni v silikonu?", a: "Plíseň vzniká z bakterií a vlhkosti. Prevence: nekontaminuj čerstvý silikon slinami (neolizuj prst!), po aplikaci použij mýdlovou vodu a stěrku. Kupuj sanitární silikon s protiplísňovou úpravou. Po každém koupání větrá koupelnu." },
                { q: "Jaký silikon je nejlepší pro vanu?", a: "Sanitární silikon s označením 'protiplísňový' nebo 'pro koupelny' (antifungální). Je odolnější vůči trvalé vlhkosti a plísni než standardní silikon. Cena 80–150 Kč za kartušu – nešetři na kvalitě, levný silikon vydrží rok nebo dva." },
              ].map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary className="faq-q">{q}</summary>
                  <p className="faq-a">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <footer style={{ marginTop: "60px", padding: "30px", borderTop: "1px solid #eee", textAlign: "center" }}>
            <p style={{ color: "#888" }}>Máte hotovo? Nechte silikon zrát aspoň 12 hodin, než se do vany pustíte se sprchou.</p>
          </footer>
        </article>
      </div>

      <style>{`
        .breadcrumb { font-size: 13px; color: #888; margin-bottom: 20px; }
        .breadcrumb a { color: #888; text-decoration: none; }
        .breadcrumb-sep { margin: 0 8px; }
        .article-cat-pill { background: #3a3a38; color: #fff; padding: 4px 12px; border-radius: 4px; font-size: 10px; font-weight: 700; margin-right: 15px; }
        .article-read-time { font-size: 12px; color: #888; }
        .content-rich-text h2 { font-family: var(--font-serif); font-size: 32px; margin-top: 50px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        @media (max-width: 600px) {
          .article-h1 { font-size: 32px !important; }
        }
        .faq-list{display:flex;flex-direction:column;gap:8px;margin:40px 0}
        .faq-item{border:1px solid #e5e5e0;border-radius:10px;overflow:hidden;background:#fff}
        .faq-q{font-size:15px;font-weight:600;padding:16px 20px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}
        .faq-q:hover{background:#f5f5f2}
        .faq-q::after{content:"+";font-size:18px;font-weight:300;flex-shrink:0;margin-left:12px}
        details[open] .faq-q::after{content:"−"}
        .faq-a{font-size:14px;line-height:1.65;color:#78776e;font-weight:300;padding:0 20px 16px}
      `}</style>
    </>
  );
}
