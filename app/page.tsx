"use client";

// app/page.tsx – DomovniGuru Homepage
export default function DomovniGuru() {
  const kalkulacky = [
    { icon: "🪣", tag: "Kalkulačka", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", tag: "Kalkulačka", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", tag: "Kalkulačka", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" },
    { icon: "🏗️", tag: "Kalkulačka", title: "Kolik betonu potřebuji?", desc: "Objem, pytlů nebo m³ hotového betonu.", href: "/kalkulacky/kolik-betonu" },
    { icon: "🌿", tag: "Kalkulačka", title: "Kolik tapet potřebuji?", desc: "Obvod místnosti, výška, počet rolí.", href: "/kalkulacky/kolik-tapet" },
    { icon: "💧", tag: "Kalkulačka", title: "Kolik tepelné izolace?", desc: "Plocha, tloušťka, tepelný odpor.", href: "/kalkulacky/kolik-izolace" },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans text-[#1c1917]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        :root { --font-jakarta: 'Plus Jakarta Sans', sans-serif; }
        body { font-family: var(--font-jakarta); margin: 0; }
        .grid-bg { background-image: radial-gradient(#e7e5e4 1px, transparent 1px); background-size: 40px 40px; }
        .card { background: white; border: 1px solid #e7e5e4; border-radius: 24px; transition: all 0.3s ease; }
        .card:hover { border-color: #a8a29e; transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.05); }
        .btn-primary { background: #1c1917; color: white !important; border-radius: 99px; padding: 12px 24px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }
        .nav { height: 80px; display: flex; align-items: center; justify-content: space-between; padding: 0 40px; position: sticky; top: 0; background: rgba(250, 250, 249, 0.8); backdrop-filter: blur(8px); z-index: 50; }
        .logo { font-weight: 800; font-size: 24px; text-decoration: none; color: inherit; }
        .footer { background: #f5f5f4; border-top: 1px solid #e7e5e4; padding: 80px 40px 40px; margin-top: 60px; }
        @media (max-width: 768px) { .nav { padding: 0 20px; } }
      `}</style>

      <div className="grid-bg min-h-screen">
        <nav className="nav">
          <a href="/" className="logo">🏠 DomovniGuru</a>
          <div className="flex items-center gap-4 md:gap-8">
            <a href="/blog" className="font-semibold text-sm no-underline text-[#44403c]">Blog</a>
            <a href="/kontakt" className="btn-primary text-xs md:text-sm">Napište nám</a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
          <header className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f5f5f4] border border-[#e7e5e4] rounded-full text-xs font-bold uppercase tracking-wider text-[#78716c] mb-6">
              Tvůj parťák pro domov
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Udělejte si to sami.<br/>
              <span className="text-[#a8a29e]">Ale bez stresu.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#57534e] leading-relaxed mb-10">
              Přesné kalkulačky a srozumitelné návody. 
              Víme, kolik barvy koupit i jak opravit tekoucí kohoutek.
            </p>
          </header>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">Kalkulačky materiálu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kalkulacky.map((k, i) => (
                <a key={i} href={k.href} className="card p-8 no-underline group">
                  <div className="text-3xl mb-4">{k.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#1c1917]">{k.title}</h3>
                  <p className="text-[#78716c] text-sm leading-relaxed">{k.desc}</p>
                </a>
              ))}
            </div>
          </section>
        </div>

        <footer className="footer">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="logo">🏠 DomovniGuru</div>
            <div className="text-[#78716c] text-sm">© 2026 Všechna práva vyhrazena.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
