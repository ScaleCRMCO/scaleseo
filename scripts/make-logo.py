"""Generate the Scale SEO paper-airplane logo files.

Uses the exact paper-airplane sketch from the homepage campaign section
(src/app/sections/home/CampaignAreas.tsx, icon "cta"): same paths, same
5-unit round strokes at 80% opacity, and the same turbulence filter that
gives it the hand-drawn edge. Every file draws in that icon's own 120-unit
coordinate space and only changes the viewBox, so the filter roughness is
identical to the site.

Run `python3 scripts/make-logo.py`, then
`NODE_PATH=$(npm root -g) node scripts/render-logo-pngs.js` for PNG/ICO.
"""
import os

NAVY = "#031B36"
ORANGE = "#FF2C16"
LIGHT_BLUE = "#B6FFFF"

PLANE = (
    '<path d="M16 58L104 20 82 100 58 72z"/>'
    '<path d="M58 72l46-52"/>'
    '<path d="M58 72l-6 26 14-16"/>'
    '<path d="M14 92l14-8M30 106l8-12"/>'
)

# Drawing bounds (incl. stroke) and the square framing around it
MIN_X, MIN_Y, MAX_X, MAX_Y = 9, 15, 109, 111


def logo(color, bg=None, pad=18):
    w = MAX_X - MIN_X
    h = MAX_Y - MIN_Y
    side = max(w, h) + 2 * pad
    x = MIN_X - (side - w) / 2
    y = MIN_Y - (side - h) / 2
    rect = (
        f'<rect x="{x}" y="{y}" width="{side}" height="{side}" fill="{bg}"/>'
        if bg else ""
    )
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x} {y} {side} {side}" '
        f'width="512" height="512">'
        f'<filter id="sketch" filterUnits="userSpaceOnUse" x="{x}" y="{y}" '
        f'width="{side}" height="{side}">'
        '<feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4"/>'
        '<feDisplacementMap in="SourceGraphic" scale="4"/></filter>'
        f"{rect}"
        f'<g filter="url(#sketch)" fill="none" stroke="{color}" stroke-opacity="0.8" '
        f'stroke-width="5" stroke-linecap="round" stroke-linejoin="round">{PLANE}</g>'
        "</svg>\n"
    )


root = os.path.join(os.path.dirname(__file__), "..", "public")
brand = os.path.join(root, "brand")
os.makedirs(brand, exist_ok=True)

files = {
    # Square versions (sharp corners)
    "scaleseo-logo-navy.svg": logo(ORANGE, NAVY),
    "scaleseo-logo-navy-light-blue.svg": logo(LIGHT_BLUE, NAVY),
    "scaleseo-logo-light-blue.svg": logo(NAVY, LIGHT_BLUE),
    # Transparent marks
    "scaleseo-mark-orange.svg": logo(ORANGE, pad=4),
    "scaleseo-mark-navy.svg": logo(NAVY, pad=4),
    "scaleseo-mark-light-blue.svg": logo(LIGHT_BLUE, pad=4),
}
# Clear out files from the earlier generator
for old in ("scaleseo-mark-orange-bold.svg", "scaleseo-mark-orange-bold.png"):
    p = os.path.join(brand, old)
    if os.path.exists(p):
        os.remove(p)
for name, content in files.items():
    with open(os.path.join(brand, name), "w") as f:
        f.write(content)

# Favicon: light blue square, navy plane (tighter padding so it reads small)
with open(os.path.join(root, "favicon.svg"), "w") as f:
    f.write(logo(NAVY, LIGHT_BLUE, pad=10))

print("wrote", ", ".join(files), "+ favicon.svg")
