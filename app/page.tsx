"use client"; // Nutné pro Next.js 15+
import React from "react";
import Link from "next/link";

export default function DomovniGuru() {
  const kalkulacky = [
    { icon: "🪣", tag: "Kalkulačka", title: "Kolik barvy potřebuji?", desc: "Plocha, vrstvy, litry. Bez přemýšlení.", href: "/kalkulacky/kolik-barvy" },
    { icon: "📐", tag: "Kalkulačka", title: "Kolik laminátu potřebuji?", desc: "m² + rezerva + počet balení.", href: "/kalkulacky/kolik-laminatu" },
    { icon: "🧱", tag: "Kalkulačka", title: "Kolik dlažby potřebuji?", desc: "Plocha, spáry, odpad. Přesně na balení.", href: "/kalkulacky/kolik-dlazby" },
    { icon: "🏗️", tag: "Kalkulačka", title: "Kolik betonu potřebuji?", desc: "Objem, pytlů nebo m³ hotového betonu.", href: "/kalkulacky/kolik-betonu" },
    { icon: "🌿", tag: "Kalkulačka", title: "Kolik tapet potřebuji?", desc: "Obvod místnosti, výška, počet rolí.", href: "/kalkulacky/kolik-tapet" },
    { icon: "💧", tag: "Kalkulačka", title: "Kolik tepelné izolace?", desc: "Plocha stěny, tloušťka, počet desek.", href: "/kalkulacky/tepelna-izolace" },
  ];

  const navody = [
    { icon: "🔧", tag: "Návod", title: "Jak vyčistit sifon?", desc: "Smradí odpad nebo pomalu odtéká? Vyřeš to za 10 minut.", href: "/navody/vycistit-sifon", time: "10 min" },
    { icon: "🚿", tag: "Návod", title: "Jak utěsnit vanu silikonem?", desc: "Plíseň ve spáře nebo zatékání? Krok za krokem.", href: "/navody/utesnit-vanu", time: "30 min" },
    { icon: "🪟", tag: "Návod", title: "Jak nastavit okna na zimu?", desc: "Přetočení kování = teplejší byt a nižší účty.", href: "/navody/okna-na-zimu", time: "15 min" },
    { icon: "🧹", tag: "Návod", title: "Jak vyčistit spáry v dlažbě?", desc: "Zčernalé spáry bez drhnutí. Funguje.", href: "/navody/vycistit-spary", time: "20 min" },
    { icon: "💡", tag: "Návod", title: "Jak vyměnit zásuvku?", desc: "Bezpečně, levně, bez elektrikáře.", href: "/navody/vymenit-zasuvku", time: "25 min" },
    { icon: "🌡️", tag: "Návod", title: "Jak odvzdušnit radiátor?", desc: "Studený radiátor nahoře? Takhle to napravíš.", href: "/navody/odvzdusnit-radiator", time: "10 min" },
  ];

  const checklisty = [
    { icon: "🌱", title: "Jaro v domácnosti", items: ["Vyčistit okapy", "Zkontrolovat střechu po zimě", "Přepnout okna na letní těsnění", "Odvětrat sklep"], tag: "Checklist · Jaro" },
    { icon: "❄️", title: "Příprava na zimu", items: ["Odvzdušnit radiátory", "Nastavit okna na zimní těsnění", "Zkontrolovat kotel", "Utěsnit průvany u dveří"], tag: "Checklist · Podzim" },
    { icon: "🏠", title: "Stěhování do nového", items: ["Zkontrolovat elektřinu a vodu", "Vyměnit zámky", "Změřit místnosti", "Nafotit
