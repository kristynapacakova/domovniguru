import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <nav className="main-nav">
          <div className="wrap nav-inner">
            <Link href="/" className="nav-brand">DomovniGuru</Link>
            <div className="nav-links">
              <Link href="/kalkulacky">Kalkulačky</Link>
              <Link href="/navody">Návody</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
