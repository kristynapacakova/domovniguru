import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <nav style={{ 
          position: 'sticky', top: 0, z-index: 50, 
          background: 'rgba(250,250,248,0.9)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(15,15,14,0.1)' 
        }}>
          <div style={{ 
            maxWidth: '1100px', margin: '0 auto', padding: '0 32px', 
            height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' 
          }}>
            <Link href="/" style={{ fontFamily: "'DM Serif Display', serif", fontSize: '18px', textDecoration: 'none', color: '#0f0f0e' }}>
              DomovniGuru
            </Link>
            <div style={{ display: 'flex', gap: '28px' }}>
              <Link href="/kalkulacky" style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', color: '#78776e', textDecoration: 'none' }}>Kalkulačky</Link>
              <Link href="/navody" style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', color: '#78776e', textDecoration: 'none' }}>Návody</Link>
              <Link href="/blog" style={{ fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', color: '#78776e', textDecoration: 'none' }}>Blog</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
