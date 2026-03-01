"use client";
import React from "react";
import Link from "next/link";

export default function BlogClanek() {
  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <article style={{ maxWidth: "700px", margin: "0 auto", padding: "0 32px" }}>
        <Link href="/blog" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600 }}>← BLOG</Link>
        
        <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "52px", margin: "30px 0", lineHeight: 1.1 }}>
          Jak malovat zeď jako profesionál
        </h1>
        
        <p style={{ fontSize: "20px", color: "#666", lineHeight: 1.6, fontWeight: 300, marginBottom: "40px", fontStyle: "italic" }}>
          Malování je nejlevnější cesta, jak změnit atmosféru domova. Ale i tak má svá pravidla.
        </p>

        <div style={{ color: "#333", lineHeight: 1.8, fontSize: "17px", fontWeight: 300 }}>
          <p>Prvním krokem je vždy příprava. Pokud podceníte zakrytí nábytku a přípravu podkladu, strávíte více času úklidem než samotným malováním...</p>
          <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "28px", marginTop: "40px" }}>Výběr správné barvy</h2>
          <p>Není barva jako barva. Do koupelny volte omyvatelné nátěry, do ložnice stačí klasická paropropustná barva...</p>
        </div>
      </article>
    </div>
  );
}