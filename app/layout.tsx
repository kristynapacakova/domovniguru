import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <nav style={{ 
          position: 'sticky', top: 0, zIndex: 100, 
          background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e5e5e0' 
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ fontWeight: '600', fontSize: '18px', textDecoration: 'none', color: '#000', letterSpacing: '-0.02em' }}>DomovniGuru</Link>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/kalkulacky" className="nav-l">Kalkulačky</Link>
              <Link href="/navody" className="nav-l">Návody</Link>
              <Link href="/checklisty" className="nav-l">Checklisty</Link>
              <Link href="/blog" className="nav-l">Blog</Link>
              <Link href="/o-webu" className="nav-l">O webu</Link>
            </div>
          </div>
          <style>{`.nav-l { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #666; text-decoration: none; letter-spacing: 0.05em; } .nav-l:hover { color: #000; }`}</style>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
