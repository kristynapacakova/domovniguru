"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type VoteType = "helpful" | "not_helpful";

export default function ArticleFeedback() {
  const pathname = usePathname();
  const segments = (pathname ?? "").split("/").filter(Boolean);
  const isArticle = segments[0] === "blog" && segments.length === 2;
  const slug = isArticle ? segments[1] : null;

  const [counts, setCounts] = useState<{ helpful: number; notHelpful: number } | null>(null);
  const [voted, setVoted] = useState<VoteType | null>(null);

  useEffect(() => {
    if (!slug) return;
    const stored = localStorage.getItem(`article_vote_${slug}`) as VoteType | null;
    if (stored === "helpful" || stored === "not_helpful") setVoted(stored);

    if (!supabase) return;
    Promise.all([
      supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "helpful"),
      supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "not_helpful"),
    ]).then(([h, n]) => {
      setCounts({ helpful: h.count ?? 0, notHelpful: n.count ?? 0 });
    });
  }, [slug]);

  if (!slug || !supabase) return null;

  async function vote(type: VoteType) {
    if (voted || !supabase || !slug) return;
    const { error } = await supabase.from("article_votes").insert({ slug, type });
    if (error) return;
    localStorage.setItem(`article_vote_${slug}`, type);
    setVoted(type);
    setCounts(prev =>
      prev
        ? {
            helpful: prev.helpful + (type === "helpful" ? 1 : 0),
            notHelpful: prev.notHelpful + (type === "not_helpful" ? 1 : 0),
          }
        : null
    );
  }

  const total = (counts?.helpful ?? 0) + (counts?.notHelpful ?? 0);
  const helpfulPct = total > 0 ? Math.round(((counts?.helpful ?? 0) / total) * 100) : null;

  const pluralHlasu = (n: number) => (n === 1 ? "hlas" : n >= 2 && n <= 4 ? "hlasy" : "hlasů");

  return (
    <section
      style={{
        margin: "48px 0 32px",
        padding: "24px 28px",
        background: "#faf8f5",
        border: "1px solid #ede8e0",
        borderRadius: "12px",
        maxWidth: "680px",
      }}
    >
      <div style={{ fontSize: "15px", fontWeight: 600, color: "#2a2a28", marginBottom: "16px" }}>
        Pomohl vám tento článek?
      </div>

      {voted ? (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "14px", color: "#3a7a5a", fontWeight: 600 }}>
            Děkujeme za zpětnou vazbu! 🙌
          </span>
          {counts !== null && total > 0 && (
            <span style={{ fontSize: "13px", color: "#8a8a80" }}>
              {counts.helpful} z {total} čtenářů říká, že ano
            </span>
          )}
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            onClick={() => vote("helpful")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              border: "1.5px solid #c0dcc8",
              borderRadius: "8px",
              background: "#f0f8f3",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              color: "#2a5a3a",
              transition: "border-color 150ms",
            }}
          >
            👍 Ano, pomohl
            {counts !== null && (
              <span style={{ fontSize: "12px", fontWeight: 400, color: "#6a9a7a", marginLeft: "2px" }}>
                {counts.helpful}
              </span>
            )}
          </button>
          <button
            onClick={() => vote("not_helpful")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              border: "1.5px solid #ddd0c8",
              borderRadius: "8px",
              background: "#faf4f0",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              color: "#5a3a2a",
              transition: "border-color 150ms",
            }}
          >
            👎 Moc ne
            {counts !== null && (
              <span style={{ fontSize: "12px", fontWeight: 400, color: "#9a7a6a", marginLeft: "2px" }}>
                {counts.notHelpful}
              </span>
            )}
          </button>
        </div>
      )}

      {!voted && helpfulPct !== null && total > 0 && (
        <div style={{ fontSize: "12px", color: "#9a9a90", marginTop: "10px" }}>
          {helpfulPct} % čtenářů označilo článek za užitečný · {total} {pluralHlasu(total)} celkem
        </div>
      )}
    </section>
  );
}
