# Arax Design System

**Arax** is a lemonade / craft-soda brand from Yerevan, Armenia. Glass bottles with cream labels, a green "ARAX" wordmark and hand-drawn botanicals; flavours pair fruit with herbs (lemon · balm mint, grapefruit · sage, sea buckthorn · chili, quince · sea buckthorn, lavender · bearberry, echinacea · blackcurrant, pine · lemon). The brand's voice lives on Instagram, in Russian, speaking to a young expat/local café crowd ("араксоголики").

## Sources
Nine images uploaded by the user (now in `assets/`, originals in `uploads/`):
- Logo: red disc, blue ring, blue wavy lowercase "arax" wordmark → `assets/logo.jpg`
- Six coloured-pencil "where to buy" illustrations, each a stockist venue with its street address (Fabula, Kruzhok, Gargoyle, Hummus Kimchi, a yellow bottles post, and the pink "Где купить ARAX" cover) → `assets/illustrations/`
- Two collage posts (birthday event poster, farewell post) → `assets/collage/`

No codebase, Figma, website, font files or decks were provided.

## Products / surfaces
- **Instagram feed** — the only surface evidenced. Recreated in `ui_kits/instagram/`.
- Packaging (bottle labels) appears only inside illustrations; no label files were supplied.

## CONTENT FUNDAMENTALS
- **Language:** Russian for captions and headlines; English for event words ("BIRTHDAY") and all street addresses ("73 Israyelyan St", "40 Sayat-Nova Ave"). Flavour names on labels are English caps.
- **Tone:** friendly, insider, a little cheeky — the audience is "араксоголики" (araxoholics). Sign-offs like "до встречи, араксоголики". Locations are local in-jokes: "та самая теннисная площадка" (*that* tennis court).
- **Person:** addresses the reader as a group (plural "вы" implied); the brand rarely says "we".
- **Casing:** handwritten notes are lowercase ("до встречи…"); event titles and flavours are ALL CAPS; the logo is lowercase; "ARAX" in running text and on labels is caps.
- **Format:** very short — a headline, a date (DD.MM), a time (HH:MM), a place. No paragraphs on-image. Questions work as headlines ("Где купить ARAX").
- **Emoji:** none on-image. Iconic elements are drawn (stars, pins, megaphone) instead.

## VISUAL FOUNDATIONS
- **Two modes.** (1) *Coloured-pencil illustrations*: a full-bleed single ground colour (sun yellow, sky blue, leaf green, blush pink, amber) with visible pencil grain, naive drawing of venues, bottles and people. (2) *Collage*: a scribbly crayon-sky blue ground, photo cut-outs with white torn borders, torn paper/notebook labels, crayon stars in many colours, halftone B&W megaphone with yellow lightning.
- **Colour:** logo red `#95110f` + logo blue `#1a3a94` are the identity pair but appear mostly in the logo. Posts are driven by warm crayon tones — sun `#f8d733`, orange `#f39a2b`, leaf `#3f8f3a`, sky `#1d84cb`, blush `#f8d8cb`. Label green is the recurring "ARAX" colour. One dominant ground per post; never gradients.
- **Type:** hand-lettered everywhere. Labels use rounded bold caps; notes use casual handwriting; addresses use a bubbly white sans with a dark outline and drop. Substitutes: Rubik (label/UI), Caveat (hand), Neucha (crayon caps).
- **Backgrounds:** full-bleed flat colour with pencil texture, or illustration. No photography as background — photos only as cut-outs.
- **Texture:** grain is essential (pencil/crayon). We cannot generate it; use the supplied illustrations when texture matters.
- **Borders & edges:** torn paper (`--torn-edge`), white cut-out halos around photos/stickers (`--shadow-sticker`). No hairline UI borders on-image.
- **Shadows:** soft paper drop (`--shadow-paper`), lifted cut-out (`--shadow-lift`). No inner shadows.
- **Rotation:** labels and cut-outs are slightly tilted (±1–4°). Nothing perfectly aligned in collage mode.
- **Corner radii:** pill for the search bar and buttons; paper scraps have torn, not rounded, corners; the logo is a circle.
- **Cards:** cream paper (`--paper-white`), 4px corners, paper drop shadow, optional polaroid image.
- **Layout:** 3:4 portrait posts; headline top-centre, key info (date/time/place) stacked bottom-left, sticker/megaphone bottom-right; address sticker centred across the illustration.
- **Transparency/blur:** none, except dark scrims for modal UI.
- **Imagery vibe:** warm, sunny, nostalgic (90s childhood photos), grainy.
- **Motion (inferred, none in source):** playful — bouncy easing (`--ease-bounce`), small tilt on hover; press = scale .96. No fades-for-fades'-sake.
- **Hover/press:** hover brightens slightly and tilts -1.5°; press shrinks.

## ICONOGRAPHY
- No icon system in the source. Icons are **drawn objects**: crayon stars, red map pin, magnifier on the search pill, halftone megaphone, lightning bolts, botanical label drawings.
- No emoji, no unicode icons, no icon font.
- In UI, keep icons minimal: the SearchPill lens is the only SVG glyph (simple 2-stroke). For anything else, prefer text labels. If a UI needs a set, use [Lucide](https://lucide.dev) at stroke 2.4, rounded caps — **a substitution, not brand-sourced**.
- Stars/megaphone could not be extracted cleanly from the posts; they exist only inside `assets/collage/*`.

## Fonts — substitution flag
No font files were provided. Google Fonts substitutes (all Cyrillic-capable): **Rubik** (label caps, stickers, body), **Caveat** (handwritten notes), **Neucha** (crayon caps). The logo wordmark is raster-only; do not typeset it.

## Components
Brand (`components/brand/`): **Logo**, **AddressSticker**, **TornLabel**.
Core (`components/core/`): **Button**, **SearchPill**, **FlavorTag**, **PaperCard**.
No source defined a component inventory; this set is sized to the brand's needs. SearchPill, TornLabel and AddressSticker are taken directly from motifs in the posts; Button, FlavorTag and PaperCard are intentional additions for UI work.

## Index
- `styles.css` — entry; imports `tokens/{fonts,colors,typography,spacing}.css`
- `guidelines/` — specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives + cards
- `ui_kits/instagram/` — feed grid, carousel viewer, EventPoster template
- `assets/` — logo, illustrations, collage posts
- `thumbnail.html`, `SKILL.md`
