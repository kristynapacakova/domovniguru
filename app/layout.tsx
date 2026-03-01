import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <nav style={{ 
          position: 'sticky', top: 0, zIndex: 100, 
          background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #eee' 
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ fontWeight: 'bold', fontSize: '20px', textDecoration: 'none', color: '#000' }}>DomovniGuru</Link>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/kalkulacky" style={{ fontSize: '13px', fontWeight: 500, textTransform: 'uppercase', color: '#666', textDecoration: 'none' }}>Kalkulačky</Link>
              <Link href="/navody" style={{ fontSize: '13px', fontWeight: 500, textTransform: 'uppercase', color: '#666', textDecoration: 'none' }}>Návody</Link>
              <Link href="/checklisty" style={{ fontSize: '13px', fontWeight: 500, textTransform: 'uppercase', color: '#666', textDecoration: 'none' }}>Checklisty</Link>
              <Link href="/blog" style={{ fontSize: '13px', fontWeight: 500, textTransform: 'uppercase', color: '#666', textDecoration: 'none' }}>Blog</Link>
              <Link href="/o-nas" style={{ fontSize: '13px', fontWeight: 500, textTransform: 'uppercase', color: '#666', textDecoration: 'none' }}>O webu</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
