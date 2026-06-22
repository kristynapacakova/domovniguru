#!/usr/bin/env python3
"""
Přidá FAQPage JSON-LD do blog článku a aktualizuje dateModified.

Usage:
  python3 scripts/add-faq-schema.py <slug>

  Otázky se berou automaticky z HTML FAQ sekce souboru.
  Funguje pro oba formáty: faq-summary/faq-body i faq-q/faq-a.

Example:
  python3 scripts/add-faq-schema.py fasadni-barva-vyber
  python3 scripts/add-faq-schema.py malovat-cely-byt-za-vikend
"""

import sys, re
from datetime import date

TODAY = date.today().strftime("%Y-%m-%dT08:00:00Z")

MONTHS_CS = {
    1: "ledna", 2: "února", 3: "března", 4: "dubna", 5: "května",
    6: "června", 7: "července", 8: "srpna", 9: "září", 10: "října",
    11: "listopadu", 12: "prosince"
}

def today_cs():
    d = date.today()
    return f"{d.day}. {MONTHS_CS[d.month]} {d.year}"

def extract_faq_from_html(content):
    """Extract Q&A pairs from HTML FAQ section (both formats)."""
    questions = []

    # Format 1: faq-summary / faq-body (newer articles)
    pairs = re.findall(
        r'className="faq-summary">(.+?)<span[^>]*>▾',
        content, re.DOTALL
    )
    answers = re.findall(
        r'className="faq-body">(.+?)</div>',
        content, re.DOTALL
    )
    if pairs and answers:
        for q, a in zip(pairs, answers):
            questions.append({
                "q": q.strip(),
                "a": re.sub(r'<[^>]+>', '', a).strip()
            })
        return questions

    # Format 2: inline array { q: "...", a: "..." } (older articles)
    pairs2 = re.findall(
        r'\{\s*q:\s*"(.+?)",\s*a:\s*"(.+?)"\s*\}',
        content, re.DOTALL
    )
    if pairs2:
        for q, a in pairs2:
            questions.append({"q": q.strip(), "a": a.strip()})
        return questions

    return []

def build_faq_node_lines(slug, questions):
    lines = []
    lines.append('  }, {')
    lines.append('    "@type": "FAQPage",')
    lines.append(f'    "@id": "https://www.domovniguru.cz/blog/{slug}#faq",')
    lines.append('    "mainEntity": [')
    for i, item in enumerate(questions):
        comma = "," if i < len(questions) - 1 else ""
        q = item["q"].replace('\\', '\\\\').replace('"', '\\"')
        a = item["a"].replace('\\', '\\\\').replace('"', '\\"')
        lines.append(
            f'      {{ "@type": "Question", "name": "{q}", '
            f'"acceptedAnswer": {{ "@type": "Answer", "text": "{a}" }} }}{comma}'
        )
    lines.append('    ]')
    return '\n'.join(lines)

def process(slug):
    path = f"app/blog/{slug}/page.tsx"

    with open(path, "r") as f:
        content = f.read()

    # Guard: already has FAQPage?
    if '"FAQPage"' in content:
        print(f"SKIP: {slug} already has FAQPage")
        # Still update dateModified and visible date
        content = re.sub(
            r'"dateModified":\s*"[^"]*"',
            f'"dateModified": "{TODAY}"',
            content, count=1
        )
        content = re.sub(
            r'Aktualizováno: [^<"]+',
            f'Aktualizováno: {today_cs()}',
            content
        )
        with open(path, "w") as f:
            f.write(content)
        print(f"  Updated dateModified and visible date only")
        return True

    # Extract FAQ questions from HTML
    questions = extract_faq_from_html(content)
    if not questions:
        print(f"ERROR: No FAQ questions found in HTML for {slug}")
        print("  Add faq-summary/faq-body elements to the page first.")
        return False

    print(f"  Found {len(questions)} questions in HTML:")
    for i, item in enumerate(questions):
        print(f"  {i+1}. {item['q'][:70]}")

    # Build and insert FAQPage node
    faq_insert = build_faq_node_lines(slug, questions)

    # Insert FAQPage before the closing }]; of jsonLd
    # Handles: multi-line, single-line, and files with extra consts before RELATED
    new_content = re.sub(
        r'(\n  }\]\n\};)',
        '\n' + faq_insert + '\n  }]\n};',
        content, count=1
    )

    if new_content == content:
        # Single-line @graph: "}] };"
        new_content = re.sub(
            r'(\s*\}\]\s*\};)',
            '\n' + faq_insert + '\n  }];\n};',
            content, count=1
        )

    if new_content == content:
        print(f"ERROR: Could not find insertion point in {slug}")
        print("  JSON-LD format may be non-standard. Edit manually.")
        return False

    content = new_content

    # Update dateModified (first occurrence only)
    content = re.sub(
        r'"dateModified":\s*"[^"]*"',
        f'"dateModified": "{TODAY}"',
        content, count=1
    )

    # Update visible date
    content = re.sub(
        r'Aktualizováno: [^<"]+',
        f'Aktualizováno: {today_cs()}',
        content
    )

    # Safety check: no duplicate dateModified
    dm_count = len(re.findall(r'"dateModified"', content))
    if dm_count > 1:
        print(f"ERROR: {dm_count} dateModified occurrences — aborting")
        return False

    with open(path, "w") as f:
        f.write(content)

    print(f"OK: {slug}")
    print(f"  dateModified → {TODAY}")
    print(f"  visible date → {today_cs()}")
    return True


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    for slug in sys.argv[1:]:
        print(f"\n--- {slug} ---")
        process(slug)
