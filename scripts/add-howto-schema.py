#!/usr/bin/env python3
"""
Přidá HowTo JSON-LD schema do návodového blogového článku.

Usage:
  python3 scripts/add-howto-schema.py <slug> [<slug2> ...]

Kroky se extrahují automaticky ze sekcí s <h2> nadpisy.
Sekce faq, related, souvis, chyby, tipy jsou přeskočeny.

Example:
  python3 scripts/add-howto-schema.py jak-malovat-zed zapojit-svetlo-na-strop
"""

import sys, re
from datetime import date

TODAY = date.today().strftime("%Y-%m-%dT08:00:00Z")
MONTHS_CS = {
    1: "ledna", 2: "února", 3: "března", 4: "dubna", 5: "května",
    6: "června", 7: "července", 8: "srpna", 9: "září", 10: "října",
    11: "listopadu", 12: "prosince"
}

# Section IDs to skip (not actual steps)
SKIP_PATTERNS = [
    "faq", "related", "souvis", "chyby", "tipy", "tip", "poznamka",
    "nastroje", "co-budete-potrebovat", "co-budet", "naklady", "cena",
    "kdy", "proc", "shrn", "zaver", "uvod", "intro"
]

def today_cs():
    d = date.today()
    return f"{d.day}. {MONTHS_CS[d.month]} {d.year}"

def should_skip(section_id):
    sid = section_id.lower()
    return any(p in sid for p in SKIP_PATTERNS)

def clean_text(text):
    text = re.sub(r'<[^>]+>', '', text)       # strip HTML tags
    text = re.sub(r'\{[^}]+\}', '', text)      # strip JSX expressions
    text = re.sub(r'className=["\'][^"\']*["\']', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    # Truncate to 300 chars at sentence boundary
    if len(text) > 300:
        cut = text[:300].rfind('.')
        text = text[:cut+1] if cut > 150 else text[:300]
    return text

def extract_steps(content):
    steps = []
    # Find all sections: <section id="X"> ... <h2>Title</h2> ... first paragraph
    sections = re.finditer(
        r'<section\s+id=["\']([^"\']+)["\'][^>]*>(.*?)(?=<section\s+id=|</article>)',
        content, re.DOTALL
    )
    for m in sections:
        section_id = m.group(1)
        section_body = m.group(2)

        if should_skip(section_id):
            continue

        # Extract h2 title
        h2 = re.search(r'<h2[^>]*>(.*?)</h2>', section_body, re.DOTALL)
        if not h2:
            continue
        title = clean_text(h2.group(1))

        # Extract first meaningful paragraph
        paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', section_body, re.DOTALL)
        description = ""
        for p in paragraphs:
            cleaned = clean_text(p)
            if len(cleaned) > 40:  # skip very short paragraphs
                description = cleaned
                break

        if not description:
            description = title  # fallback

        steps.append({"name": title, "text": description})

    return steps

def build_howto_node(slug, name, description, steps, indent=2):
    """Build HowTo node. indent=2 closes previous item (  }, {). indent=4 opens standalone ({)."""
    i1 = ' ' * indent        # "  " or "    "
    i2 = ' ' * (indent + 2)  # "    " or "      "
    i3 = ' ' * (indent + 4)  # "      " or "        "
    lines = []
    if indent == 2:
        lines.append('  }, {')
    else:
        lines.append(f'{i1}{{')   # standalone open — previous node already closed
    lines.append(f'{i2}"@type": "HowTo",')
    lines.append(f'{i2}"@id": "https://www.domovniguru.cz/blog/{slug}#howto",')
    n = name.replace('"', '\\"')
    d = description.replace('"', '\\"')
    lines.append(f'{i2}"name": "{n}",')
    lines.append(f'{i2}"description": "{d}",')
    lines.append(f'{i2}"step": [')
    for idx, step in enumerate(steps):
        comma = "," if idx < len(steps) - 1 else ""
        sname = step["name"].replace('"', '\\"')
        stext = step["text"].replace('"', '\\"')
        lines.append(f'{i3}{{ "@type": "HowToStep", "name": "{sname}", "text": "{stext}" }}{comma}')
    lines.append(f'{i2}]')
    if indent != 2:
        lines.append(f'{i1}}}')  # close the node for standalone format
    return '\n'.join(lines)

def process(slug):
    path = f"app/blog/{slug}/page.tsx"

    with open(path, "r") as f:
        content = f.read()

    if '"HowTo"' in content:
        print(f"SKIP: {slug} already has HowTo schema")
        return True

    # Extract article name from headline
    name_m = re.search(r'"headline":\s*"([^"]+)"', content)
    name = name_m.group(1) if name_m else slug

    # Description from meta
    desc_m = re.search(r'description: "([^"]+)"', content)
    description = desc_m.group(1)[:200] if desc_m else ""

    # Extract steps
    steps = extract_steps(content)

    if len(steps) < 2:
        print(f"ERROR: Only {len(steps)} steps found in {slug} — skipping")
        print("  Article may not be a how-to guide, or sections need manual review.")
        return False

    print(f"  Found {len(steps)} steps:")
    for i, s in enumerate(steps):
        print(f"  {i+1}. {s['name'][:60]}")

    howto_insert = build_howto_node(slug, name, description, steps, indent=2)
    howto_insert_4 = build_howto_node(slug, name, description, steps, indent=4)

    # Insert before closing of @graph — handles multiple indentation styles
    patterns = [
        (r'(\n  }\]\n\};)',              '\n' + howto_insert + '\n  }]\n};'),
        (r'(\n  \},\n  \],\n\};)',       '\n' + howto_insert + '\n  },\n  ],\n};'),
        (r'(\n    \},\n  \],\n\};)',     '\n' + howto_insert + '\n  }\n  ],\n};'),
        # 4-space indent, no commas on closing lines (howto_insert_4 is self-contained with closing })
        (r'(\n      \]\n    \}\n  \]\n\};)', '\n      ]\n    },\n' + howto_insert_4 + '\n  ]\n};'),
        (r'(\s*\}\]\s*\};)',             '\n' + howto_insert + '\n  }]\n};'),
    ]
    new_content = content
    for pattern, replacement in patterns:
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content != content:
            break

    if new_content == content:
        print(f"ERROR: Could not find insertion point in {slug}")
        return False

    content = new_content

    # Update dateModified (first occurrence)
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

    # Safety: no duplicate dateModified
    dm_count = len(re.findall(r'"dateModified"', content))
    if dm_count > 1:
        print(f"ERROR: {dm_count} dateModified — aborting")
        return False

    with open(path, "w") as f:
        f.write(content)

    print(f"OK: {slug} ({len(steps)} steps)")
    return True


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    ok, fail = 0, 0
    for slug in sys.argv[1:]:
        print(f"\n--- {slug} ---")
        if process(slug):
            ok += 1
        else:
            fail += 1

    print(f"\nHotovo: {ok} OK, {fail} přeskočeno/chyba")
