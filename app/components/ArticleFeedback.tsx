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

  useEffect(() => {
    if (!slug) return;

    // Reset everything for the new article
    setGone(false);
    setVoted(null);
    setCounts(null);
    setVisible(false);

    // If already voted on this specific article, hide (badge click can reopen)
    const stored = localStorage.getItem(`article_vote_${slug}`) as VoteType | null;
    const alreadyVoted = stored === "helpful" || stored === "not_helpful";
    if (alreadyVoted) {
      setVoted(stored);
      setGone(true);
    }

    // Show only after the reader reaches the end of the article —
    // primary trigger: the "Mohlo by vás zajímat" section
    const target = alreadyVoted ? null : document.querySelector(".related-section");
    let observer: IntersectionObserver | null = null;
    if (target) {
      observer = new IntersectionObserver(
        entries => {
          if (entries.some(e => e.isIntersecting)) {
            setVisible(true);
            observer?.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(target);
    }

    // Fallback for articles without .related-section: 85 % of page scrolled
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const totalH = document.documentElement.scrollHeight;
      if (totalH > 0 && scrolled / totalH >= 0.85) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    if (!alreadyVoted && !target) window.addEventListener("scroll", onScroll, { passive: true });

    // Load counts
    if (supabase) {
      Promise.all([
        supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "helpful"),
        supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "not_helpful"),
      ]).then(([h, n]) => setCounts({ helpful: h.count ?? 0, notHelpful: n.count ?? 0 }));
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [slug]);

  // Badge click opens the popup on demand (even to re-show the thanks + stats)
  useEffect(() => {
    if (!slug) return;
    const onOpen = () => {
      setGone(false);
      setVisible(true);
    };
    window.addEventListener("article-rating-open", onOpen);
    return () => window.removeEventListener("article-rating-open", onOpen);
  }, [slug]);

  if (!slug || gone) return null;

  async function vote(type: VoteType) {
    if (voted || !slug) return;
    if (supabase) {
      const { error } = await supabase.from("article_votes").insert({ slug, type });
      if (!error) {
        setCounts(prev => prev
          ? { helpful: prev.helpful + (type === "helpful" ? 1 : 0), notHelpful: prev.notHelpful + (type === "not_helpful" ? 1 : 0) }
          : null);
      }
    }
    localStorage.setItem(`article_vote_${slug}`, type);
    setVoted(type);
    window.dispatchEvent(new CustomEvent("article-voted", { detail: { slug, type } }));
    setTimeout(() => setGone(true), 3000);
  }

  const total = (counts?.helpful ?? 0) + (counts?.notHelpful ?? 0);

  return (
    <>
      <style>{`
        @keyframes feedbackIn {
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .fb-btn {
          display: flex; flex-direction: column; align-items: center;
          gap: 6px; padding: 16px 28px;
          border-radius: 14px; border: 2px solid transparent;
          cursor: pointer; font-family: inherit;
          transition: transform 120ms, box-shadow 120ms;
          min-width: 130px;
        }
        .fb-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
        .fb-btn:active { transform: translateY(0); }
        .fb-yes { background: #edfaf3; border-color: #6fcf97; color: #1a5c38; }
        .fb-no  { background: #fff4f0; border-color: #f4a37a; color: #7a3010; }
      `}</style>

      <div style={{
        position: "fixed",
        bottom: "32px",
        left: "50%",
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(120px)",
        opacity: visible ? 1 : 0,
        transition: "transform 420ms cubic-bezier(0.34,1.56,0.64,1), opacity 300ms ease",
        zIndex: 300,
        width: "calc(100% - 32px)",
        maxWidth: "480px",
      }}>
        <div style={{
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
          padding: "28px 28px 24px",
          textAlign: "center",
          position: "relative",
        }}>
          <button
            onClick={() => setGone(true)}
            aria-label="Zavřít"
            style={{
              position: "absolute", top: "12px", right: "14px",
              background: "none", border: "none", cursor: "pointer",
              fontSize: "20px", color: "#b0b0a8", lineHeight: 1, padding: "4px",
            }}
          >×</button>

          {voted ? (
            <div style={{ animation: "feedbackIn 400ms ease forwards" }}>
              <div style={{ fontSize: "42px", marginBottom: "10px" }}>🙌</div>
              <div style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a18", marginBottom: "4px" }}>
                Děkujeme za zpětnou vazbu!
              </div>
              {counts !== null && total > 0 && (
                <div style={{ fontSize: "13px", color: "#8a8a80" }}>
                  {counts.helpful} z {total} čtenářů říká, že článek pomohl
                </div>
              )}
            </div>
          ) : (
            <>
              <div style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a18", marginBottom: "6px" }}>
                Pomohl vám tento článek?
              </div>
              <div style={{ fontSize: "13px", color: "#8a8a80", marginBottom: "22px" }}>
                Hlasujte anonymně — pomáhá nám to psát lepší obsah.
              </div>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                <button className="fb-btn fb-yes" onClick={() => vote("helpful")}>
                  <span style={{ fontSize: "32px" }}>👍</span>
                  <span style={{ fontSize: "15px", fontWeight: 700 }}>Ano, pomohl</span>
                  {counts !== null && (
                    <span style={{ fontSize: "12px", color: "#4a9a6a" }}>{counts.helpful} hlasů</span>
                  )}
                </button>
                <button className="fb-btn fb-no" onClick={() => vote("not_helpful")}>
                  <span style={{ fontSize: "32px" }}>👎</span>
                  <span style={{ fontSize: "15px", fontWeight: 700 }}>Moc ne</span>
                  {counts !== null && (
                    <span style={{ fontSize: "12px", color: "#b06040" }}>{counts.notHelpful} hlasů</span>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
