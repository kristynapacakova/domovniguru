"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ArticleRating() {
  const pathname = usePathname();
  const segments = (pathname ?? "").split("/").filter(Boolean);
  const isArticle = segments[0] === "blog" && segments.length === 2;
  const slug = isArticle ? segments[1] : null;

  const [counts, setCounts]       = useState<{ helpful: number; notHelpful: number } | null>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!slug) return;
    setCounts(null);

    // Mount point right below the "Aktualizováno: … · DomovniGuru" row
    const meta = document.querySelector(".article-meta-row");
    let mount: HTMLDivElement | null = null;
    if (meta) {
      mount = document.createElement("div");
      meta.insertAdjacentElement("afterend", mount);
      setContainer(mount);
    } else {
      setContainer(null);
    }

    if (supabase) {
      Promise.all([
        supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "helpful"),
        supabase.from("article_votes").select("*", { count: "exact", head: true }).eq("slug", slug).eq("type", "not_helpful"),
      ]).then(([h, n]) => setCounts({ helpful: h.count ?? 0, notHelpful: n.count ?? 0 }));
    }

    // Live update when the user votes in the feedback popup
    const onVote = (e: Event) => {
      const type = (e as CustomEvent).detail?.type;
      if (type !== "helpful" && type !== "not_helpful") return;
      setCounts(prev => ({
        helpful:    (prev?.helpful ?? 0)    + (type === "helpful" ? 1 : 0),
        notHelpful: (prev?.notHelpful ?? 0) + (type === "not_helpful" ? 1 : 0),
      }));
    };
    window.addEventListener("article-voted", onVote);

    return () => {
      window.removeEventListener("article-voted", onVote);
      if (mount) mount.remove();
    };
  }, [slug]);

  if (!slug || !container) return null;

  const total = counts ? counts.helpful + counts.notHelpful : null;
  const pct   = total && total > 0 ? Math.round((counts!.helpful / total) * 100) : null;

  const badge = (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: pct === null ? "#f5f5f2" : pct >= 70 ? "#edfaf3" : "#fff4f0",
      border: `1px solid ${pct === null ? "#e0e0d8" : pct >= 70 ? "#b0dfc0" : "#f0c0a0"}`,
      borderRadius: "20px",
      padding: "5px 14px",
      fontSize: "13px",
      color: pct === null ? "#9a9a90" : pct >= 70 ? "#2a5a38" : "#7a3820",
      marginTop: "12px",
    }}>
      {pct === null ? (
        <span>☆ Zatím bez hodnocení</span>
      ) : (
        <>
          <span>{pct >= 70 ? "👍" : "🤔"}</span>
          <span style={{ fontWeight: 600 }}>{pct} % čtenářů označilo za užitečný</span>
          <span style={{ fontSize: "12px", color: pct >= 70 ? "#6a9a78" : "#b08060" }}>· {total} {total === 1 ? "hlas" : total! < 5 ? "hlasy" : "hlasů"}</span>
        </>
      )}
    </div>
  );

  return createPortal(badge, container);
}
