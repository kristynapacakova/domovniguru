"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

interface ArticleStat {
  slug: string;
  helpful: number;
  notHelpful: number;
  total: number;
  pct: number;
}

export default function HodnoceniPage() {
  const [stats, setStats]       = useState<ArticleStat[]>([]);
  const [loading, setLoading]   = useState(true);
  const [sortBy, setSortBy]     = useState<"total" | "pct">("total");

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase
      .from("article_votes")
      .select("slug, type")
      .then(({ data }) => {
        if (!data) { setLoading(false); return; }
        const map: Record<string, { helpful: number; notHelpful: number }> = {};
        for (const row of data) {
          if (!map[row.slug]) map[row.slug] = { helpful: 0, notHelpful: 0 };
          if (row.type === "helpful") map[row.slug].helpful++;
          else map[row.slug].notHelpful++;
        }
        const result: ArticleStat[] = Object.entries(map).map(([slug, v]) => ({
          slug,
          helpful: v.helpful,
          notHelpful: v.notHelpful,
          total: v.helpful + v.notHelpful,
          pct: v.helpful + v.notHelpful > 0 ? Math.round((v.helpful / (v.helpful + v.notHelpful)) * 100) : 0,
        }));
        setStats(result);
        setLoading(false);
      });
  }, []);

  const sorted = [...stats].sort((a, b) => sortBy === "total" ? b.total - a.total : b.pct - a.pct);
  const totalVotes   = stats.reduce((s, a) => s + a.total, 0);
  const totalHelpful = stats.reduce((s, a) => s + a.helpful, 0);
  const avgPct       = totalVotes > 0 ? Math.round((totalHelpful / totalVotes) * 100) : 0;

  const readable = (slug: string) =>
    slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", paddingTop: "60px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px 80px" }}>
        <header style={{ marginBottom: "40px", borderBottom: "1px solid #e5e5e0", paddingBottom: "28px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "12px" }}>
            Statistiky
          </div>
          <h1 style={{ fontFamily: "var(--font-serif, serif)", fontSize: "40px", margin: "0 0 16px", fontWeight: 400 }}>
            Hodnocení článků
          </h1>

          {!loading && stats.length > 0 && (
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { label: "Celkem hlasů",     value: totalVotes },
                { label: "Článků hodnoceno", value: stats.length },
                { label: "Průměrná spokojenost", value: `${avgPct} %` },
              ].map(s => (
                <div key={s.label} style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "10px", padding: "14px 20px", minWidth: "140px" }}>
                  <div style={{ fontSize: "11px", color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{s.label}</div>
                  <div style={{ fontSize: "24px", fontWeight: 700, color: "#1a1a18" }}>{s.value}</div>
                </div>
              ))}
            </div>
          )}
        </header>

        {loading && (
          <p style={{ color: "#888", fontSize: "15px" }}>Načítám hodnocení…</p>
        )}

        {!loading && !supabase && (
          <div style={{ background: "#fff4e0", border: "1px solid #f0d080", borderRadius: "10px", padding: "16px 20px", fontSize: "14px", color: "#7a5800" }}>
            ⚠️ Supabase není připojen. Přidej <code>NEXT_PUBLIC_SUPABASE_URL</code> a <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> do Vercel Environment Variables.
          </div>
        )}

        {!loading && stats.length === 0 && supabase && (
          <p style={{ color: "#888", fontSize: "15px" }}>Zatím žádné hlasy. Čtenáři ještě nehlasovali.</p>
        )}

        {!loading && stats.length > 0 && (
          <>
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              <span style={{ fontSize: "13px", color: "#888", alignSelf: "center" }}>Seřadit:</span>
              {(["total", "pct"] as const).map(key => (
                <button key={key} onClick={() => setSortBy(key)} style={{
                  padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: 600,
                  border: "1px solid #e0e0d8", cursor: "pointer",
                  background: sortBy === key ? "#1a1a18" : "#fff",
                  color: sortBy === key ? "#fff" : "#444",
                }}>
                  {key === "total" ? "Počet hlasů" : "% spokojenosti"}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {sorted.map((a, i) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  style={{ textDecoration: "none", display: "block", background: "#fff", border: "1px solid #e8e8e0", borderRadius: "10px", padding: "14px 18px", transition: "border-color 150ms" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", color: "#bbb", fontWeight: 700, minWidth: "24px" }}>#{i + 1}</span>

                    <div style={{ flex: 1, minWidth: "200px" }}>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a18", marginBottom: "2px" }}>
                        {readable(a.slug)}
                      </div>
                      <div style={{ fontSize: "12px", color: "#aaa" }}>/blog/{a.slug}</div>
                    </div>

                    {/* Progress bar */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                      <div style={{ width: "100px", height: "6px", background: "#f0ece8", borderRadius: "4px", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${a.pct}%`, background: a.pct >= 70 ? "#4caf82" : a.pct >= 50 ? "#f0b429" : "#e06060", borderRadius: "4px" }} />
                      </div>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: a.pct >= 70 ? "#2a6a48" : a.pct >= 50 ? "#8a6010" : "#903030", minWidth: "38px" }}>
                        {a.pct} %
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: "12px", fontSize: "13px", flexShrink: 0 }}>
                      <span title="Pomohl">👍 {a.helpful}</span>
                      <span title="Nepomohl">👎 {a.notHelpful}</span>
                      <span style={{ color: "#aaa" }}>· {a.total} celkem</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
