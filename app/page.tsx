"use client";
import React from "react";
import Link from "next/link";

export default function DomovniGuru() {
  const kalkulacky = [
    { icon: "🪣", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" },
    { icon: "🏗️", title: "Kolik betonu potřebuji?", desc: "Objem, pytlů nebo m³ hotového betonu.", href: "/kalkulacky/kolik-betonu" },
    { icon: "🌿", title: "Kolik tapet potřebuji?", desc: "Obvod místnosti, výška, počet rolí.", href: "/kalkulacky/kolik-tapet" },
    { icon: "💧", title: "Kolik tepelné izolace?", desc: "Plocha stěny, tloušťka, počet desek.", href: "/kalkulacky/tepelna-izolace" },
  ];

  const navody = [
    { icon: "🔧", time: "10 min", title: "Jak vyčistit sifon?", desc: "Smradí odpad nebo pomalu odtéká? Vyřeš to za 10 minut." },
    { icon: "🚿", time: "30 min", title: "Jak utěsnit vanu silikonem?", desc: "Plíseň ve spáře nebo zatékání? Krok za krokem." },
    { icon: "🪟", time: "15 min", title: "Jak nastavit okna na zimu?", desc: "Přetočení kování = teplejší byt a nižší účty." },
    { icon: "🧹", time: "20 min", title: "Jak vyčistit spáry v dlažbě?", desc: "Zčernalé spáry bez drhnutí. Funguje to." },
    { icon: "💡", time: "25 min", title: "Jak vyměnit zásuvku?", desc: "Bezpečně, levně a bez elektrikáře." },
    { icon: "🌡️", time: "10 min", title: "Jak odvzdušnit radiátor?", desc: "Studený radiátor nahoře? Takhle to napravíš." },
  ];

  const blog = [
    { cat: "MALOVÁNÍ", title: "Jak malovat zeď – kompletní průvodce pro začátečníky", desc: "Krok za krokem: příprava podkladu, nátěr, výběr barvy.", time: "5 min čtení" },
    { cat: "ELEKTRIKA", title: "LED vs. žárovky – co se skutečně vyplatí?", desc: "Srovnání spotřeby, životnosti a ceny. Kdy přejít na LED?", time: "4 min čtení" },
    { cat: "ZAHRADA", title: "Jak připravit zahradu na jaro – kompletní checklist", desc: "Co udělat v březnu a dubnu, aby zahrada vypadala skvěle.", time: "6 min čtení" },
  ];

  return (
    <div className="dg-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .dg-site { font-family: 'DM Sans', sans-serif; background: #fafaf8; color: #1a1a1a; padding-bottom: 40px; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
        
        .hero { padding: 90px 0 70px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: end; border-bottom: 1px solid #e5e5e0; }
        .h1 { font-family: 'DM Serif Display', serif; font-size: 64px; line-height: 1.05; margin: 0; font-weight: 400; }
        .h1 em { font-style: italic; color: #888; }
        .hero-right { display: flex; flex-direction: column; gap: 30px; }
        .hero-p { font-size: 18px; color: #666; margin: 0; font-weight: 300; line-height: 1.6; }
        
        .btn-row { display: flex; gap: 12px; }
        .btn { height: 48px; padding: 0 25px; display: inline-flex; align-items: center; border-radius: 4px; font-size: 13px; font-weight: 600; text-transform: uppercase; text-decoration: none; transition: 0.2s; }
        .btn-black { background: #111; color: #fff; }
        .btn-outline { background: #fff; color: #111; border: 1px solid #ddd; }

        .sec { padding: 80px 0 0; }
        .sec-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 35px; border-bottom: 1px solid #e5e5e0; padding-bottom: 15px; }
        .sec-label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #888; letter-spacing: 0.05em; }
        .sec-link { font-size: 12px; font-weight: 600; color: #888; text-decoration: none; }

        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .card { background: #fff; border: 1px solid #e5e5e0; border-radius: 12px; padding: 30px; text-decoration: none; color: inherit; transition: 0.3s; display: flex; flex-direction: column; }
        .card:hover { border-color: #111; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
        .card-tag-row { display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; text-transform: uppercase; color: #888; margin-bottom: 12px; }
        .card-h { font-family: 'DM Serif Display', serif; font-size: 20px; margin-bottom: 12px; line-height: 1.3; }
        .card-p { font-size: 14px; color: #666; margin-bottom: 20px; font-weight: 300; flex-grow: 1; }
        .card-foot { font-size: 13px; font-weight: 600; padding-top: 20px; border-top: 1px solid #f5f5f0; }

        .card-grey { background: #f2f2ee; border: none; }
        .check-list { list-style: none; padding: 0; margin: 0; }
        .check-list li { font-size: 14px; color: #666; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
        .check-list li::before { content: "○"; color: #ccc; }

        .blog-cta { background: #0f0f0e; border-radius: 16px; padding: 60px; margin: 80px 0; display: flex; justify-content: space-between; align-items: center; color: #fff; }
        .tag-cloud { display: flex; flex-wrap: wrap; gap: 10px; max-width: 600px; margin-top: 20px; }
        .tag { background: rgba(255,255,255,0.1); padding: 8px 16px; border-radius: 20px; font-size: 13px; color: #aaa; }

        .footer { border-top: 1px solid #e5e5e0; padding: 80px 0 40px; margin-top: 80px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 60px; }
        .foot-link { display: block; color: #666; text-decoration: none; font-size: 14px; margin-bottom: 12px; }

        @media (max-width: 900px) { .hero, .grid, .footer-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="wrap">
        <header className="hero">
          <div>
            <div className="eyebrow">Praktický průvodce domácností</div>
            <h1 className="h1">Méně přemýšlení,<br /><em>více hotovo.</em></h1>
          </div>
          <div className="hero-right">
            <p className="hero-p">Kalkulačky na materiál, návody krok za krokem a checklisty pro každou sezónu. Rychle zjistíš, co koupit, kolik toho potřebuješ a jak to vyřešit bez stresu.</p>
            <div className="btn-row">
              <Link href="/kalkulacky" className="btn btn-black">Kalkulačky →</Link>
              <Link href="/navody" className="btn btn-outline">Návody</Link>
              <Link href="/blog" className="btn btn-outline">Blog</Link>
            </div>
          </div>
        </header>

        {/* 6 KALKULAČEK */}
        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Kalkulačky materiálu</span>
            <Link href="/kalkulacky" className="sec-link">Všechny kalkulačky →</Link>
          </div>
          <div className="grid">
            {kalkulacky.map((k, i) => (
              <Link key={i} href={k.href} className="card">
                <span style={{ fontSize: '32px' }}>{k.icon}</span>
                <div className="card-tag-row" style={{ marginTop: '20px' }}><span>Kalkulačka</span></div>
                <div className="card-h">{k.title}</div>
                <p className="card-p">{k.desc}</p>
                <div className="card-foot">Spustit →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6 NÁVODŮ */}
        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Návody krok za krokem</span>
            <Link href="/navody" className="sec-link">Všechny návody →</Link>
          </div>
          <div className="grid" style={{ gridTemplateRows: 'auto auto' }}>
            {navody.map((n, i) => (
              <Link key={i} href="#" className="card">
                <div className="card-tag-row"><span>Návod</span><span>⏱ {n.time}</span></div>
                <span style={{ fontSize: '24px', marginBottom: '10px', display: 'block' }}>{n.icon}</span>
                <div className="card-h">{n.title}</div>
                <p className="card-p">{n.desc}</p>
                <div className="card-foot">Číst →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3 CHECKLISTY */}
        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Sezónní checklisty</span>
            <Link href="/checklisty" className="sec-link">Všechny checklisty →</Link>
          </div>
          <div className="grid">
            <CheckCard icon="🌱" title="Jaro v domácnosti" items={["Vyčistit okapy", "Zkontrolovat střechu po zimě", "Přepnout okna na letní těsnění", "Odvětrat sklep"]} />
            <CheckCard icon="❄️" title="Příprava na zimu" items={["Odvzdušnit radiátory", "Nastavit okna na zimní těsnění", "Zkontrolovat kotel", "Utěsnit průvany u dveří"]} />
            <CheckCard icon="🏠" title="Stěhování do nového" items={["Zkontrolovat elektřinu a vodu", "Vyměnit zámky", "Změřit místnosti", "Nafotit stav před nastěhováním"]} />
          </div>
        </section>

        {/* 3 ČLÁNKY Z BLOGU */}
        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Nejnovější z blogu</span>
            <Link href="/blog" className="sec-link">Celý blog →</Link>
          </div>
          <div className="grid">
            {blog.map((b, i) => (
              <Link key={i} href="#" className="card">
                <div className="card-tag-row"><span>{b.cat}</span></div>
                <div className="card-h" style={{ fontSize: '18px' }}>{b.title}</div>
                <p className="card-p">{b.desc}</p>
                <div className="card-foot" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>⏱ {b.time}</span><span>Číst →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BLACK CTA BOX */}
        <div className="blog-cta">
          <div>
            <div style={{ fontSize: '28px', fontFamily: 'DM Serif Display, serif' }}>100 článků v 5 kategoriích</div>
            <div className="tag-cloud">
              <span className="tag">Malování & barvy 20</span>
              <span className="tag">Elektrika & osvětlení 20</span>
              <span className="tag">Zahrada & terasa 20</span>
              <span className="tag">Stěhování & rekonstrukce 20</span>
              <span className="tag">Sezónní údržba 20</span>
            </div>
          </div>
          <Link href="/blog" className="btn btn-black" style={{ background: '#fff', color: '#000' }}>Procházet blog →</Link>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-grid">
            <div><div style={{ fontWeight: 'bold', marginBottom: '20px' }}>DomovniGuru</div><p style={{ fontSize: '14px', color: '#666' }}>Praktické kalkulačky, návody a checklisty pro každého majitele domu nebo bytu.</p></div>
            <div><div className="sec-label" style={{ marginBottom: '20px' }}>Kalkulačky</div><Link href="#" className="foot-link">Barva</Link><Link href="#" className="foot-link">Laminát</Link><Link href="#" className="foot-link">Dlažba</Link><Link href="#" className="foot-link">Beton</Link></div>
            <div><div className="sec-label" style={{ marginBottom: '20px' }}>Blog</div><Link href="#" className="foot-link">Malování</Link><Link href="#" className="foot-link">Elektrika</Link><Link href="#" className="foot-link">Zahrada</Link></div>
            <div><div className="sec-label" style={{ marginBottom: '20px' }}>Web</div><Link href="#" className="foot-link">Návody</Link><Link href="#" className="foot-link">Checklisty</Link><Link href="#" className="foot-link">O webu</Link><Link href="#" className="foot-link">Kontakt</Link></div>
          </div>
          <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#aaa' }}>
            <span>© 2025 DomovniGuru</span>
            <div><Link href="#" style={{ color: '#aaa', marginRight: '20px' }}>Soukromí</Link><Link href="#" style={{ color: '#aaa' }}>Podmínky</Link></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function CheckCard({ icon, title, items }: any) {
  return (
    <div className="card card-grey">
      <span style={{ fontSize: '32px', display: 'block', marginBottom: '15px' }}>{icon}</span>
      <div className="card-tag-row"><span>Checklist</span></div>
      <div className="card-h">{title}</div>
      <ul className="check-list">
        {items.map((item: string, i: number) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}
