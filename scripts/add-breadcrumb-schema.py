#!/usr/bin/env python3
"""
Přidá BreadcrumbList JSON-LD schema do blogového článku.

Usage:
  python3 scripts/add-breadcrumb-schema.py <slug> [<slug2> ...]
  python3 scripts/add-breadcrumb-schema.py --all

Kategorie se detekují automaticky z odkazu article-cat-pill v HTML článku.
"""

import sys, re
from datetime import date

BASE = "https://www.domovniguru.cz"
TODAY = date.today().strftime("%Y-%m-%dT08:00:00Z")

MONTHS_CS = {
    1: "ledna", 2: "února", 3: "března", 4: "dubna", 5: "května",
    6: "června", 7: "července", 8: "srpna", 9: "září", 10: "října",
    11: "listopadu", 12: "prosince"
}

CATEGORY_NAMES = {
    "malovani":     "Malování & barvy",
    "zahrada":      "Zahrada & terasa",
    "elektrika":    "Elektrika & osvětlení",
    "sezonni-udrzba": "Sezónní údržba",
    "stehovani":    "Stěhování & rekonstrukce",
}

def today_cs():
    d = date.today()
    return f"{d.day}. {MONTHS_CS[d.month]} {d.year}"

def detect_category(content):
    m = re.search(r'href=["\']?/blog/kategorie/([a-z-]+)["\']?', content)
    return m.group(1) if m else None

def get_headline(content):
    m = re.search(r'"headline":\s*"([^"]+)"', content)
    return m.group(1) if m else None

def build_breadcrumb(slug, headline, cat_slug, cat_name):
    """Returns a standalone @graph array item (starting with {, ending with })."""
    article_name = headline.replace('"', '\\"')
    return (
        f'  {{\n'
        f'    "@type": "BreadcrumbList",\n'
        f'    "@id": "{BASE}/blog/{slug}#breadcrumb",\n'
        f'    "itemListElement": [\n'
        f'      {{ "@type": "ListItem", "position": 1, "name": "Domů", "item": "{BASE}" }},\n'
        f'      {{ "@type": "ListItem", "position": 2, "name": "Blog", "item": "{BASE}/blog" }},\n'
        f'      {{ "@type": "ListItem", "position": 3, "name": "{cat_name}", "item": "{BASE}/blog/kategorie/{cat_slug}" }},\n'
        f'      {{ "@type": "ListItem", "position": 4, "name": "{article_name}", "item": "{BASE}/blog/{slug}" }}\n'
        f'    ]\n'
        f'  }}'
    )

def insert_breadcrumb(content, slug, headline, cat_slug):
    cat_name = CATEGORY_NAMES.get(cat_slug, cat_slug)
    bc = build_breadcrumb(slug, headline, cat_slug, cat_name)

    # Insert as a new item before @graph closing ] — handles multiple formats.
    # bc is a standalone node (starts with {, ends with }).
    # We must close the previous node with "," before inserting.
    patterns = [
        # Standard: \n  }]\n};  — } closes last item, ] closes @graph
        (r'\n  \}\]\n\};',       '\n  },\n' + bc + '\n  ]\n};'),
        # 4-space self-closing: \n    }\n  ]\n};
        (r'\n    \}\n  \]\n\};', '\n    },\n' + bc + '\n  ]\n};'),
        # 2-space with comma: \n  },\n  ]\n};
        (r'\n  \}\n  \],\n\};',  '\n  },\n' + bc + '\n  ],\n};'),
        # 4-space FAQPage close + @graph with comma: \n    },\n  ],\n};
        (r'\n    \},\n  \],\n\};', '\n    },\n' + bc + '\n  ],\n};'),
        # 2-space @graph close without comma: \n  ]\n};
        (r'\n  \]\n\};',         '\n  },\n' + bc + '\n  ]\n};'),
    ]

    for pattern, replacement in patterns:
        new = re.sub(pattern, replacement, content, count=1)
        if new != content:
            return new

    return None

def process(slug):
    path = f"app/blog/{slug}/page.tsx"

    with open(path, "r") as f:
        content = f.read()

    if '"BreadcrumbList"' in content:
        print(f"SKIP: {slug} already has BreadcrumbList")
        return True

    headline = get_headline(content)
    if not headline:
        print(f"ERROR: No headline found in {slug}")
        return False

    cat_slug = detect_category(content)
    if not cat_slug:
        print(f"ERROR: No category link found in {slug}")
        return False

    new_content = insert_breadcrumb(content, slug, headline, cat_slug)
    if new_content is None:
        print(f"ERROR: Could not find insertion point in {slug}")
        return False

    # Update dateModified (first occurrence only)
    new_content = re.sub(
        r'"dateModified":\s*"[^"]*"',
        f'"dateModified": "{TODAY}"',
        new_content, count=1
    )

    # Safety: no duplicate dateModified
    dm_count = len(re.findall(r'"dateModified"', new_content))
    if dm_count > 1:
        print(f"ERROR: {dm_count} dateModified in {slug} — aborting")
        return False

    with open(path, "w") as f:
        f.write(new_content)

    cat_name = CATEGORY_NAMES.get(cat_slug, cat_slug)
    print(f"OK: {slug} [{cat_name}]")
    return True


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)

    if args == ["--all"]:
        import os, glob
        slugs = sorted(
            os.path.basename(os.path.dirname(f))
            for f in glob.glob("app/blog/*/page.tsx")
        )
    else:
        slugs = args

    ok, fail = 0, 0
    for slug in slugs:
        if process(slug):
            ok += 1
        else:
            fail += 1

    print(f"\nHotovo: {ok} OK, {fail} přeskočeno/chyba")
