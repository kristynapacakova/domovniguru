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

  const [counts, setCounts]   = useState<{ helpful: number; notHelpful: number } | null>(null);
  const [voted, setVoted]     = useState<VoteType | null>(null);
  const [visible, setVisible] = useState(false);
  const [gone, setGone]       = useState(false);

  // Appear after 300 px of scrolling
  useEffect(() => {
    if (!slug) return;
    const onScroll = () => { if (window.scrollY > 300) setVisible(true); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  // Load previous vote + counts
  useEffect(() => {
    if (!slug) return;
    const stored = localStorage.getItem(`article_vote_${slug}`) as VoteType | null;
    if (stored === "helpful" || stored === "not_helpful") {
      setVoted(stored);
      setGone(true); // already voted — hide bar
    }
    if (!supabase) return;
    Promise.all([
      supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "helpful"),
      supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "not_helpful"),
    ]).then(([h, n]) => setCounts({ helpful: h.count ?? 0, notHelpful: n.count ?? 0 }));
  }, [slug]);

  if (!slug || gone) return null;

  async function vote(type: VoteType) {
    if (voted || !slug) return;
    if (supabase) {
      const { error } = await supabase.from("article_votes").insert({ slug, type });
      if (error) return;
      setCounts(prev => prev
        ? { helpful: prev.helpful + (type === "helpful" ? 1 : 0), notHelpful: prev.notHelpful + (type === "not_helpful" ? 1 : 0) }
        : null);
    }
    localStorage.setItem(`article_vote_${slug}`, type);
    setVoted(type);
    setTimeout(() => setGone(true), 2500);
  }

  const total = (counts?.helpful ?? 0) + (counts?.notHelpful ?? 0);

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: "#1e1e1c",
      borderTop: "1px solid #3a3a38",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.18)",
      transform: visible ? "translateY(0)" : "translateY(100%)",
      transition: "transform 350ms ease",
      padding: "0 24px",
    }}>
      <div style={{
        maxWidth: "760px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
        padding: "14px 0",
      }}>
        {voted ? (
          <span style={{ fontSize: "14px", color: "#a0e0b8", fontWeight: 600 }}>
            Děkujeme za zpětnou vazbu! 🙌
            {counts !== null && total > 0 && (
              <span style={{ marginLeft: "10px", color: "#7a9a80", fontWeight: 400, fontSize: "13px" }}>
                {counts.helpful} z {total} čtenářů říká, že ano
              </span>
            )}
          </span>
        ) : (
          <>
            <span style={{ fontSize: "14px", color: "#c8c8c0", fontWeight: 500, flexShrink: 0 }}>
              Pomohl vám tento článek?
            </span>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button
                onClick={() => vote("helpful")}
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "8px 18px",
                  border: "1.5px solid #3a6a4a",
                  borderRadius: "8px",
                  background: "#243a2a",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#7ad8a0",
                  whiteSpace: "nowrap",
                }}
              >
                👍 Ano, pomohl
                {counts !== null && (
                  <span style={{ fontSize: "12px", fontWeight: 400, color: "#4a8a60" }}>{counts.helpful}</span>
                )}
              </button>
              <button
                onClick={() => vote("not_helpful")}
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "8px 18px",
                  border: "1.5px solid #5a3a2a",
                  borderRadius: "8px",
                  background: "#2e1e14",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#d8a080",
                  whiteSpace: "nowrap",
                }}
              >
                👎 Moc ne
                {counts !== null && (
                  <span style={{ fontSize: "12px", fontWeight: 400, color: "#8a5a40" }}>{counts.notHelpful}</span>
                )}
              </button>
              <button
                onClick={() => setGone(true)}
                aria-label="Zavřít"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#4a4a40", fontSize: "18px", padding: "4px 8px", lineHeight: 1 }}
              >
                ×
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
