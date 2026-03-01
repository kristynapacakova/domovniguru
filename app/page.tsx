export default function DomovniGuru() {
  const kalkulacky = [
    { icon: "🪣", tag: "Kalkulačka", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", tag: "Kalkulačka", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", tag: "Kalkulačka", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" },
    { icon: "🏗️", tag: "Kalkulačka", title: "Kolik betonu potřebuji?", desc: "Objem, pytlů nebo m³ hotového betonu.", href: "/kalkulacky/kolik-betonu" },
    { icon: "🌿", tag: "Kalkulačka", title: "Kolik tapet potřebuji?", desc: "Obvod místnosti, výška, počet rolí.", href: "/kalkulacky/kolik-tapet" },
    { icon: "💧", tag: "Kalkulačka", title: "Kolik tepelné izolace?", desc: "Plocha, tloušťka, tepelný odpor.", href: "/kalkulacky/kolik-izolace" },
  ];

  const categories = [
    { icon: "🎨", label: "Malování", href: "/blog/kategorie/malovani" },
    { icon: "⚡", label: "Elektrika", href: "/blog/kategorie/elektrika" },
    { icon: "🌿", label: "Zahrada", href: "/blog/kategorie/zahrada" },
    { icon: "🏠", label: "Stěhování", href: "/blog/kategorie/stehovani" },
    { icon: "❄️", label: "Údržba", href: "/blog/kategorie/sezonni-udrzba" },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans text-[#1c19
