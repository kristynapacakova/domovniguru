"use client";
import React from "react";

export default function CategoryPage({ params }) {
  // Použijeme React.use k rozbalení parametrů, což je v Next.js 15 povinné
  // Ale obalíme to do try-catch, aby to nikdy nezhodilo web
  let slug = "vse";
  try {
    const resolved = React.use(params);
    slug = resolved?.slug || "vse";
  } catch (e) {
    slug = "nacitani";
  }

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "3rem" }}>📂 Kategorie: {slug}</h1>
      <p style={{ color: "#666", fontSize: "1.2rem" }}>
        Stránka se úspěšně načetla. Obsah pro sekci <strong>{slug}</strong> připravujeme.
      </p>
      <div style={{ marginTop: "30px" }}>
        <a href="/blog" style={{ 
          padding: "10px 20px", 
          background: "#000", 
          color: "#fff", 
          borderRadius: "5px", 
          textDecoration: "none" 
        }}>
          ← Zpět na blog
        </a>
      </div>
    </div>
  );
}
