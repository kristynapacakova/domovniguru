import "./globals.css";

export const metadata = {
  title: "DomovniGuru",
  description: "Praktický pomocník pro domácnost – kalkulačky a návody.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="antialiased">
        {/* Smazali jsme Header i Footer, protože jsou teď součástí tvého page.tsx */}
        {children}
      </body>
    </html>
  );
}
