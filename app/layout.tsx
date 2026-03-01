import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "DomovniGuru",
  description: "Praktický průvodce domácností",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}>
        <nav style={{ 
          position: 'sticky', top: 0, zIndex: 100, 
          background: 'rgba(250, 250, 248, 0.9)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e5e5e0' 
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ fontWeight: '600', fontSize: '18px', textDecoration: 'none', color: '#000', letterSpacing: '-0.02em' }}>DomovniGuru</Link>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/kalkulacky" className="nav-link">Kalkulačky</Link>
              <Link href="/navody" className="nav-link">Návody</Link>
              <Link href="/checklisty" className="nav-link">Checklisty</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/o-webu" className="nav-link">O webu</Link>
            </div>
          </div>
          <style>{`
            .nav-link { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #666; text-decoration: none; letter-spacing: 0.05em; transition: 0.2s; }
            .nav-link:hover { color: #000; }
          `}</style>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
