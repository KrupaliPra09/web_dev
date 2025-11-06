DosePack — Sticky Slide Scroll Demo
==================================

What this is
------------
A responsive web page implementing a sticky main section with 3 slides. While the main section is active it remains sticky and each scroll (desktop) or swipe (mobile) moves exactly one slide. After the third slide the section unpins and normal scrolling continues.

Tech
----
- HTML, CSS, plain JavaScript (no frameworks).
- Optional assets exported from Figma are used from the `assets/` folder.

How to run locally
------------------
1. Place all project files in a folder.
2. Put your exported images from Figma in the `assets/` folder matching the filenames described in the project.
3. Open `index.html` in a browser, or run a local server:
   - Python 3: `python -m http.server 5500` then visit `http://localhost:5500`

Files to edit for final design
------------------------------
- `styles.css` — tweak font sizes/paddings/colors to match Figma exact values.
- `assets/` — replace placeholder images with Figma exports.

Notes
-----
- The code respects `prefers-reduced-motion`.
- Keyboard (Up/Down) navigation and basic accessibility focus handling are included.
