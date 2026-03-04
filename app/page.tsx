"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const KALKULACKY = [
  { icon: "🪣", title: "Kolik barvy potřebuji?",       desc: "Plocha, vrstvy, litry. Bez přemýšlení.",          href: "/kalkulacky/kolik-barvy" },
  { icon: "📐", title: "Kolik laminátu potřebuji?",    desc: "m² + rezerva + počet balení.",                    href: "/kalkulacky/kolik-laminatu" },
  { icon: "🧱", title: "Kolik dlažby potřebuji?",      desc: "Plocha, spáry, odpad. Přesně na balení.",         href: "/kalkulacky/kolik-dlazby" },
  { icon: "🏗️", title: "Kolik betonu potřebuji?",      desc: "Objem, pytlů nebo m³ hotového betonu.",           href: "/kalkulacky/kolik-betonu" },
  { icon: "🌿", title: "Kolik tapet potřebuji?",       desc: "Obvod místnosti, výška, počet rolí.",             href: "/kalkulacky/kolik-tapet" },
  { icon: "💧", title: "Kolik tepelné izolace?",       desc: "Plocha stěny, tloušťka, počet desek.",            href: "/kalkulacky/tepelna-izolace" },
] as const;

const NAVODY = [
  { icon: "🔧", time: "10 min", title: "Jak vyčistit sifon?",              desc: "Smradí odpad nebo pomalu odtéká? Vyřeš to za 10 minut.", href: "/navody/jak-vycistit-sifon" },
  { icon: "🚿", time: "30 min", title: "Jak utěsnit vanu silikonem?",      desc: "Plíseň ve spáře nebo zatékání? Krok za krokem.",        href: "/navody/jak-utesnit-vanu" },
  { icon: "🪟", time: "15 min", title: "Jak nastavit okna na zimu?",       desc: "Přetočení kování = teplejší byt a nižší účty.",         href: "/navody/nastaveni-oken" },
  { icon: "🧹", time: "20 min", title: "Jak vyčistit spáry v dlažbě?",    desc: "Zčernalé spáry bez drhnutí. Funguje.",                  href: "/navody/cisteni-spar" },
  { icon: "💡", time: "25 min", title: "Jak vyměnit zásuvku?",             desc: "Bezpečně, levně, bez elektrikáře.",                     href: "/navody/vymena-zasuvky" },
  { icon: "🌡️", time: "10 min", title: "Jak odvzdušnit radiátor?",        desc: "Studený radiátor nahoře? Takhle to napravíš.",          href: "/navody/odvzdusneni-radiatoru" },
] as const;

const CHECKLISTY = [
  {
    icon: "🌱", tag: "Checklist · Jaro", title: "Jaro v domácnosti",
    items: ["Vyčistit okapy", "Zkontrolovat střechu po zimě", "Přepnout okna na letní těsnění", "Odvětrat sklep"],
  },
  {
    icon: "❄️", tag: "Checklist · Podzim", title: "Příprava na zimu",
    items: ["Odvzdušnit radiátory", "Nastavit okna na zimní těsnění", "Zkontrolovat kotel", "Utěsnit průvany"],
  },
  {
    icon: "🏠", tag: "Checklist · Stěhování", title: "Stěhování do nového",
    items: ["Zkontrolovat elektřinu a vodu", "Vyměnit zámky", "Změřit místnosti", "Nafotit stav bytu"],
  },
] as const;

const BLOG_POSTS = [
  { cat: "Malování",  title: "Jak malovat zeď – kompletní průvodce pro začátečníky", desc: "Příprava podkladu, nátěr, výběr barvy. Bez chyb.",              read: "5 min", href: "/blog/jak-malovat-zed" },
  { cat: "Elektrika", title: "LED vs. žárovky – co se skutečně vyplatí?",             desc: "Srovnání spotřeby, životnosti a ceny. Kdy přejít na LED?",    read: "4 min", href: "/blog/led-vs-zarovky" },
  { cat: "Zahrada",   title: "Jak připravit zahradu na jaro – kompletní checklist",   desc: "Co udělat v březnu a dubnu, aby zahrada vypadala skvěle.",    read: "6 min", href: "/blog/jarni-zahrada" },
] as const;

const BLOG_CATS = [
  { label: "Malování & barvy",          href: "/blog/kategorie/malovani",       count: 20 },
  { label: "Elektrika & osvětlení",     href: "/blog/kategorie/elektrika",      count: 20 },
  { label: "Zahrada & terasa",          href: "/blog/kategorie/zahrada",        count: 22 },
  { label: "Stěhování & rekonstrukce",  href: "/blog/kategorie/stehovani",      count: 20 },
  { label: "Sezónní údržba",            href: "/blog/kategorie/sezonni-udrzba", count: 20 },
] as const;

const SUGGESTIONS = [
  "jak malovat zeď", "rajčata", "zalévat", "LED žárovky", "radiátor", "stěhování",
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(q: string) {
    const trimmed = q.trim();
    if (!trimmed) return;
    router.push(`/blog?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <div style={{ paddingBottom: 0 }}>

      {/* ── Hero ── */}
      <div className="wrap">
        <header className="hero">
          <div>
            <p className="hero-eyebrow">Praktický průvodce domácností</p>
            <h1 className="hero-h1">
              Méně přemýšlení,<br />
              <em>více hotovo.</em>
            </h1>
          </div>
          <div>
            <p className="hero-desc">
              Kalkulačky na materiál, návody krok za krokem a checklisty pro každou sezónu.
              Rychle zjistíš, co koupit, kolik toho potřebuješ a jak to vyřešit bez stresu.
            </p>

            {/* ── Search bar ── */}
            <div className="hero-search-wrap">
              <div className="hero-search-box">
                <span className="hero-search-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.8"/>
                    <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
                <input
                  className="hero-search-input"
                  type="text"
                  placeholder={'Co hledáš? Třeba "jak malovat zeď"...'}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
                  autoComplete="off"
                />
                <button className="hero-search-btn" onClick={() => handleSearch(query)}>
                  Hledat
                </button>
              </div>
              <div className="hero-search-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} className="hero-search-tag" onClick={() => handleSearch(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="btn-row" style={{ marginTop: 24 }}>
              <Link href="/kalkulacky" className="btn btn-black">Kalkulačky →</Link>
              <Link href="/navody"     className="btn btn-outline">Návody</Link>
              <Link href="/blog"       className="btn btn-outline">Blog</Link>
            </div>
          </div>
        </header>
      </div>

      {/* ── Kalkulačky ── */}
      <div className="wrap">
        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Kalkulačky materiálu</span>
            <Link href="/kalkulacky" className="sec-link">Všechny kalkulačky →</Link>
          </div>
          <div className="grid-3">
            {KALKULACKY.map((k) => (
              <Link key={k.href} href={k.href} className="card">
                <span className="card-icon">{k.icon}</span>
                <div className="card-eyebrow">Kalkulačka</div>
                <div className="card-h">{k.title}</div>
                <p className="card-p">{k.desc}</p>
                <div className="card-arrow">Spustit →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── Návody ── */}
      <div className="wrap">
        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Návody krok za krokem</span>
            <Link href="/navody" className="sec-link">Všechny návody →</Link>
          </div>
          <div className="grid-3">
            {NAVODY.map((n) => (
              <Link key={n.href} href={n.href} className="card">
                <div className="card-eyebrow-row">
                  <span>Návod</span>
                  <span>⏱ {n.time}</span>
                </div>
                <span className="card-icon">{n.icon}</span>
                <div className="card-h">{n.title}</div>
                <p className="card-p">{n.desc}</p>
                <div className="card-arrow">Číst →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── Checklisty ── */}
      <div className="wrap">
        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Sezónní checklisty</span>
            <Link href="/checklisty" className="sec-link">Všechny checklisty →</Link>
          </div>
          <div className="grid-3">
            {CHECKLISTY.map((c) => (
              <Link key={c.title} href="/checklisty" className="card card-surface">
                <span className="card-icon">{c.icon}</span>
                <div className="card-eyebrow">{c.tag}</div>
                <div className="card-h">{c.title}</div>
                <ul className="check-list">
                  {c.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── Blog – nejnovější ── */}
      <div className="wrap">
        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Nejnovější z blogu</span>
            <Link href="/blog" className="sec-link">Celý blog →</Link>
          </div>
          <div className="grid-3">
            {BLOG_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className="card">
                <div className="card-eyebrow-row">
                  <span>{p.cat}</span>
                  <span>⏱ {p.read} čtení</span>
                </div>
                <div className="card-h">{p.title}</div>
                <p className="card-p">{p.desc}</p>
                <div className="card-arrow">Číst článek →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── Blog CTA strip ── */}
      <div className="wrap">
        <div className="cta-strip">
          <div>
            <div className="cta-strip-heading">100 článků v 5 kategoriích</div>
            <div className="tag-cloud">
              {BLOG_CATS.map((c) => (
                <Link key={c.href} href={c.href} className="tag">
                  {c.label} <span style={{ opacity: 0.45, marginLeft: 4 }}>{c.count}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/blog" className="btn btn-white">
            Procházet blog →
          </Link>
        </div>
      </div>

      <style>{`
        .hero-search-wrap { margin-top: 28px; }
        .hero-search-box {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1.5px solid #e2dbd0;
          border-radius: 12px;
          padding: 6px 6px 6px 16px;
          gap: 8px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: border-color 150ms, box-shadow 150ms;
        }
        .hero-search-box:focus-within {
          border-color: #1a1814;
          box-shadow: 0 2px 16px rgba(0,0,0,0.10);
        }
        .hero-search-icon { color: #9a9187; display: flex; flex-shrink: 0; }
        .hero-search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 15px;
          font-weight: 300;
          color: #1a1814;
          background: transparent;
          font-family: var(--font-sans, sans-serif);
          min-width: 0;
        }
        .hero-search-input::placeholder { color: #b0a898; }
        .hero-search-btn {
          flex-shrink: 0;
          background: #1a1814;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          font-family: var(--font-sans, sans-serif);
          transition: background 150ms;
        }
        .hero-search-btn:hover { background: #2a2a28; }
        .hero-search-suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .hero-search-tag {
          background: transparent;
          border: 1px solid #e2dbd0;
          border-radius: 999px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 400;
          color: #9a9187;
          cursor: pointer;
          font-family: var(--font-sans, sans-serif);
          transition: border-color 120ms, color 120ms;
        }
        .hero-search-tag:hover { border-color: #1a1814; color: #1a1814; }
      `}</style>

    </div>
  );
}
