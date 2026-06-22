"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

interface FeedbackRow {
  id: string;
  rating: number;
  comment: string | null;
  name: string | null;
  created_at: string;
}

export default function ArticleFeedback() {
  const pathname = usePathname();
  const segments = (pathname ?? "").split("/").filter(Boolean);
  const isArticle = segments[0] === "blog" && segments.length === 2;
  const slug = isArticle ? segments[1] : null;

  const [rows, setRows] = useState<FeedbackRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!slug || !supabase) {
      setLoading(false);
      return;
    }
    supabase
      .from("article_feedback")
      .select("id, rating, comment, name, created_at")
      .eq("slug", slug)
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        setRows(data ?? []);
        setLoading(false);
      });
  }, [slug]);

  if (!slug || !supabase) return null;

  const avg = rows.length ? rows.reduce((s, r) => s + r.rating, 0) / rows.length : 0;
  const comments = rows.filter((r) => r.comment && r.comment.trim().length > 0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0 || !supabase) return;
    setSubmitting(true);
    const trimmedComment = comment.trim() || null;
    const trimmedName = name.trim() || null;
    const { error } = await supabase.from("article_feedback").insert({
      slug,
      rating,
      comment: trimmedComment,
      name: trimmedName,
    });
    setSubmitting(false);
    if (!error) {
      setSubmitted(true);
      setRows((prev) => [
        { id: `local-${Date.now()}`, rating, comment: trimmedComment, name: trimmedName, created_at: new Date().toISOString() },
        ...prev,
      ]);
      setComment("");
      setName("");
    }
  }

  return (
    <section style={{ margin: "48px 0", padding: "28px", background: "#faf8f5", border: "1px solid #ede8e0", borderRadius: "12px" }}>
      <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "#1a1a18" }}>Líbil se ti článek?</h3>

      {!loading && rows.length > 0 && (
        <div style={{ fontSize: "13px", color: "#6a6a60", marginBottom: "16px" }}>
          Průměrné hodnocení: <strong>{avg.toFixed(1)} / 5</strong> ({rows.length} {rows.length === 1 ? "hodnocení" : "hodnocení"})
        </div>
      )}

      {submitted ? (
        <p style={{ color: "#2a6e4a", fontWeight: 600, fontSize: "14px" }}>Děkujeme za hodnocení! 🙌</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                onMouseEnter={() => setHoverRating(n)}
                onMouseLeave={() => setHoverRating(0)}
                aria-label={`Hodnotit ${n} z 5`}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "26px", lineHeight: 1, padding: 0, color: (hoverRating || rating) >= n ? "#f5b942" : "#d8d2c8" }}
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Napiš svou zkušenost nebo dotaz (nepovinné)…"
            rows={3}
            maxLength={1000}
            style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #ddd6cc", fontSize: "14px", fontFamily: "inherit", resize: "vertical", marginBottom: "10px", boxSizing: "border-box" }}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jméno (nepovinné)"
            maxLength={60}
            style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #ddd6cc", fontSize: "14px", marginBottom: "12px", boxSizing: "border-box" }}
          />
          <button
            type="submit"
            disabled={rating === 0 || submitting}
            style={{ background: rating === 0 ? "#ccc" : "#1a1a18", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", fontWeight: 600, fontSize: "14px", cursor: rating === 0 ? "default" : "pointer" }}
          >
            {submitting ? "Odesílám…" : "Odeslat hodnocení"}
          </button>
        </form>
      )}

      {comments.length > 0 && (
        <div style={{ marginTop: "24px", borderTop: "1px solid #ede8e0", paddingTop: "20px" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "12px", color: "#6a6a60", textTransform: "uppercase", letterSpacing: ".04em" }}>Komentáře čtenářů</div>
          {comments.slice(0, 10).map((c) => (
            <div key={c.id} style={{ marginBottom: "16px", fontSize: "14px" }}>
              <div style={{ color: "#f5b942", fontSize: "13px" }}>{"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}</div>
              <div style={{ color: "#3a3a38", lineHeight: 1.55 }}>{c.comment}</div>
              {c.name && <div style={{ fontSize: "12px", color: "#9a9a90", marginTop: "2px" }}>– {c.name}</div>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
