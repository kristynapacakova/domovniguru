"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ArticleRating() {
  const pathname = usePathname();
  const segments = (pathname ?? "").split("/").filter(Boolean);
  const isArticle = segments[0] === "blog" && segments.length === 2;
  const slug = isArticle ? segments[1] : null;

  const [counts, setCounts] = useState<{ helpful: number; notHelpful: number } | null>(null);

  useEffect(() => {
    if (!slug || !supabase) return;
    setCounts(null);
    Promise.all([
      supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "helpful"),
      supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "not_helpful"),
    ]).then(([h, n]) => setCounts({ helpful: h.count ?? 0, notHelpful: n.count ?? 0 }));
  }, [slug]);

  if (!slug || !counts) return null;

  const total = counts.helpful + counts.notHelpful;
  if (total === 0) return null;

  const pct = Math.round((counts.helpful / total) * 100);
  const stars = pct >= 80 ? "⭐⭐⭐⭐⭐" : pct >= 60 ? "⭐⭐⭐⭐" : pct >= 40 ? "⭐⭐⭐" : "⭐⭐";

  return (
    <div className="wrap">
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: pct >= 70 ? "#edfaf3" : "#fff4f0",
        border: `1px solid ${pct >= 70 ? "#b0dfc0" : "#f0c0a0"}`,
        borderRadius: "20px",
        padding: "5px 14px",
        fontSize: "13px",
        color: pct >= 70 ? "#2a5a38" : "#7a3820",
        marginBottom: "4px",
        marginTop: "8px",
      }}>
        <span>{pct >= 70 ? "👍" : "🤔"}</span>
        <span style={{ fontWeight: 600 }}>{pct} % čtenářů označilo za užitečný</span>
        <span style={{ color: pct >= 70 ? "#6a9a78" : "#b08060", fontSize: "12px" }}>· {total} {total === 1 ? "hlas" : total < 5 ? "hlasy" : "hlasů"}</span>
      </div>
    </div>
  );
}
