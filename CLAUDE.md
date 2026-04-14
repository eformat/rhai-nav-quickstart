# rhai-nav-quickstart

Next.js + TypeScript + Tailwind CSS + PatternFly 6 static SPA.

## Stack

- **Framework:** Next.js with `output: "export"` for static site generation
- **UI:** PatternFly 6 components (`@patternfly/react-core`, `@patternfly/react-icons`)
- **Styling:** Tailwind CSS with class-based dark mode (`@custom-variant dark`)
- **Theme:** Red Hat branded — `#CC0000` red, black/white, RedHatText font

## Navigation cards

Clicking a card opens the site in an embedded iframe with a back button.

- Voice Agents Smart Start: https://rhai-code.github.io/voice-agents
- Factory Floor Tycoon Smart Start: https://rhai-code.github.io/factory-floor-tycoon-agentic-demo
- Word Swarm Smart Start: https://rhai-code.github.io/wordswarm

## Theme

Light/dark mode toggle with localStorage persistence. Defaults to light.
Theme colors defined in `src/app/globals.css` via `@theme`.

## Build & publish

- `make dev` — local dev server
- `make build` — static build to `docs/` for GitHub Pages (sets basePath to `/rhai-nav-quickstart`)
- `make clean` — remove `.next`, `out`, `docs`

GitHub Pages: deploy from `docs/` directory on main branch.
