"use client";
import React from "react";

export default function TestPage() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#f0f0f0'
    }}>
      <h1 style={{ color: '#ff4444' }}>⚠️ TEST SPOJENÍ ⚠️</h1>
      <p>Pokud vidíte tuto zprávu, struktura složek je SPRÁVNĚ.</p>
      <a href="/" style={{ marginTop: '20px', color: 'blue' }}>Zpět domů</a>
    </div>
  );
}
