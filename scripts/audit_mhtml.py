from __future__ import annotations

import json
import hashlib
import re
import sys
from email import policy
from email.parser import BytesParser
from html import unescape
from pathlib import Path


TAG_RE = re.compile(r"<[^>]+>")
SPACE_RE = re.compile(r"\s+")


def clean_html(value: str) -> str:
    value = re.sub(r"<(script|style)\b[^>]*>.*?</\1>", " ", value, flags=re.I | re.S)
    return SPACE_RE.sub(" ", unescape(TAG_RE.sub(" ", value))).strip()


def matches(html: str, tag: str) -> list[str]:
    pattern = rf"<{tag}\b[^>]*>(.*?)</{tag}>"
    return [clean_html(item) for item in re.findall(pattern, html, flags=re.I | re.S) if clean_html(item)]


def attribute_values(html: str, tag: str, attribute: str) -> list[str]:
    pattern = rf"<{tag}\b[^>]*\b{attribute}\s*=\s*['\"]([^'\"]+)['\"]"
    return list(dict.fromkeys(unescape(item) for item in re.findall(pattern, html, flags=re.I)))


def parse_file(path: Path, extract_dir: Path | None = None) -> dict[str, object]:
    message = BytesParser(policy=policy.default).parsebytes(path.read_bytes())
    html = ""
    assets: list[dict[str, object]] = []

    for part in message.walk():
        content_type = part.get_content_type()
        payload = part.get_payload(decode=True) or b""
        if content_type == "text/html" and not html:
            charset = part.get_content_charset() or "utf-8"
            html = payload.decode(charset, errors="replace")
        elif not part.is_multipart():
            extracted = None
            if extract_dir and content_type.startswith("image/") and payload:
                digest = hashlib.sha256(payload).hexdigest()[:12]
                suffix = {
                    "image/jpeg": ".jpg",
                    "image/png": ".png",
                    "image/gif": ".gif",
                    "image/webp": ".webp",
                }.get(content_type, ".bin")
                extract_dir.mkdir(parents=True, exist_ok=True)
                extracted_path = extract_dir / f"{digest}{suffix}"
                if not extracted_path.exists():
                    extracted_path.write_bytes(payload)
                extracted = str(extracted_path)
            assets.append(
                {
                    "type": content_type,
                    "location": part.get("Content-Location"),
                    "bytes": len(payload),
                    "extracted": extracted,
                }
            )

    title = matches(html, "title")
    meta_description_match = re.search(
        r"<meta\b(?=[^>]*\bname=['\"]description['\"])[^>]*\bcontent=['\"]([^'\"]*)['\"]",
        html,
        flags=re.I,
    )

    return {
        "file": path.name,
        "title": title[0] if title else "",
        "description": unescape(meta_description_match.group(1)) if meta_description_match else "",
        "headings": {f"h{level}": matches(html, f"h{level}") for level in range(1, 7)},
        "links": attribute_values(html, "a", "href"),
        "images": attribute_values(html, "img", "src"),
        "alt": attribute_values(html, "img", "alt"),
        "text": clean_html(html)[:20000],
        "assets": assets,
    }


def main() -> None:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else "planta_old")
    extract_dir = None
    if "--extract-images" in sys.argv:
        index = sys.argv.index("--extract-images")
        extract_dir = Path(sys.argv[index + 1])
    results = [parse_file(path, extract_dir) for path in sorted(root.glob("*.mhtml"))]
    if "--compact" in sys.argv:
        results = [
            {
                "file": item["file"],
                "title": item["title"],
                "description": item["description"],
                "headings": item["headings"],
                "text": item["text"],
                "link_count": len(item["links"]),
                "image_count": len(item["images"]),
                "asset_types": sorted(
                    {
                        asset["type"]
                        for asset in item["assets"]
                        if isinstance(asset, dict) and asset.get("type")
                    }
                ),
            }
            for item in results
        ]
    print(json.dumps(results, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
