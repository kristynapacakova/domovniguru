import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <nav style={{ 
          position: 'sticky', top: 0, zIndex: 100, 
          background: 'rgba(250,250,248,0.9)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(15,15,14,0.1)' 
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ fontFamily: 'serif', fontSize: '18px', textDecoration: 'none', color: '#0f0f0e', fontWeight: 'bold' }}>DomovniGuru</Link>
            <div style={{ display: 'flex', gap: '28px' }}>
              <Link href="/kalkulacky" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#78776e', textDecoration: 'none' }}>Kalkulačky</Link>
              <Link href="/navody" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: '#78776e', textDecoration: 'none' }}>Návody</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
