"""Generate the Scale SEO paper-airplane logo files.

The hand-drawn wobble is baked into the path geometry (rather than an SVG
filter) so the files look the same in browsers, design tools, email clients
and social platforms. Re-run with `python3 scripts/make-logo.py` to
regenerate everything in public/brand/ and the favicon SVG.
"""
import math
import os
import random

NAVY = "#031B36"
ORANGE = "#FF2C16"
LIGHT_BLUE = "#B6FFFF"

# Plane geometry in a 120 x 120 drawing space (same shape as the site's
# sketch icon): outer wing, centre fold, and the small folded keel.
LINES = [
    [(16, 58), (104, 20)],
    [(104, 20), (82, 100)],
    [(82, 100), (58, 72)],
    [(58, 72), (16, 58)],
    [(58, 72), (104, 20)],
    [(58, 72), (52, 98)],
    [(52, 98), (66, 82)],
]
KEEL = [(58, 72), (52, 98), (66, 82)]  # filled triangle under the fold

rng = random.Random(11)


def wobble_line(p0, p1, amp=0.9, steps=28):
    """Points along p0->p1 nudged sideways by smooth low-frequency noise,
    with slightly overshot ends like a marker stroke."""
    (x0, y0), (x1, y1) = p0, p1
    dx, dy = x1 - x0, y1 - y0
    length = math.hypot(dx, dy)
    nx, ny = -dy / length, dx / length
    overshoot = rng.uniform(0.5, 1.5) / length
    phases = [rng.uniform(0, 2 * math.pi) for _ in range(3)]
    pts = []
    for i in range(steps + 1):
        t = -overshoot + (1 + 2 * overshoot) * i / steps
        n = (math.sin(t * 2.1 * math.pi + phases[0]) * 0.6
             + math.sin(t * 5.3 * math.pi + phases[1]) * 0.3
             + math.sin(t * 11.7 * math.pi + phases[2]) * 0.1)
        # taper the wobble towards the ends so corners stay crisp
        n *= math.sin(min(max(t, 0), 1) * math.pi) ** 0.5
        pts.append((x0 + dx * t + nx * n * amp, y0 + dy * t + ny * n * amp))
    return pts


def path_from(pts, sx, ox, oy):
    return "M" + " L".join(f"{ox + x * sx:.2f} {oy + y * sx:.2f}" for x, y in pts)


def plane_svg_group(color, size, pad, stroke):
    """<g> containing the plane, fitted into a size x size box with padding."""
    # drawing bounds
    minx, maxx, miny, maxy = 16, 104, 20, 100
    scale = (size - 2 * pad) / max(maxx - minx, maxy - miny)
    ox = (size - (maxx - minx) * scale) / 2 - minx * scale
    oy = (size - (maxy - miny) * scale) / 2 - miny * scale
    sw = stroke * scale
    parts = []
    keel = " L".join(f"{ox + x * scale:.2f} {oy + y * scale:.2f}" for x, y in KEEL)
    parts.append(f'<path d="M{keel} Z" fill="{color}"/>')
    for a, b in LINES:
        # two passes per line for the sketchy double-stroke look
        for k in range(2):
            pts = wobble_line(a, b, amp=0.7 + 0.4 * k)
            parts.append(
                f'<path d="{path_from(pts, scale, ox, oy)}" '
                f'stroke-width="{sw * (1 if k == 0 else 0.7):.2f}"/>'
            )
    return (
        f'<g fill="none" stroke="{color}" stroke-linecap="round" '
        f'stroke-linejoin="round">' + "".join(parts) + "</g>"
    )


def svg(size, inner, bg=None, radius=0):
    rect = (
        f'<rect width="{size}" height="{size}" rx="{radius}" fill="{bg}"/>'
        if bg else ""
    )
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" '
        f'width="{size}" height="{size}">{rect}{inner}</svg>\n'
    )


root = os.path.join(os.path.dirname(__file__), "..", "public")
brand = os.path.join(root, "brand")
os.makedirs(brand, exist_ok=True)

S = 512
files = {
    # Square app/social icons, like the Canva mock-up
    "scaleseo-logo-navy.svg": svg(S, plane_svg_group(ORANGE, S, 96, 2.5), NAVY),
    "scaleseo-logo-light-blue.svg": svg(S, plane_svg_group(NAVY, S, 96, 2.5), LIGHT_BLUE),
    # Transparent marks
    "scaleseo-mark-orange.svg": svg(S, plane_svg_group(ORANGE, S, 24, 2.5)),
    "scaleseo-mark-navy.svg": svg(S, plane_svg_group(NAVY, S, 24, 2.5)),
    # Heavier-stroke mark for large on-site use (footer)
    "scaleseo-mark-orange-bold.svg": svg(S, plane_svg_group(ORANGE, S, 24, 4.2)),
}
for name, content in files.items():
    with open(os.path.join(brand, name), "w") as f:
        f.write(content)

# Favicon: navy square with a heavier stroke so it survives at 16px
with open(os.path.join(root, "favicon.svg"), "w") as f:
    f.write(svg(S, plane_svg_group(ORANGE, S, 88, 4.6), NAVY, radius=64))

print("wrote", ", ".join(files), "+ favicon.svg")
