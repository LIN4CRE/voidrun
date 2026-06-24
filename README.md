# 🌀 VOIDRUN

**VOIDRUN** is a neon bullet-heaven survivor built as a single-file HTML5 Canvas game.
Run the void. Survive the storm.

<p align="center">
  <a href="https://LIN4CRE.github.io/voidrun"><strong>▶ PLAY VOIDRUN NOW</strong></a>
  ·
  <a href="https://github.com/LIN4CRE/voidrun">Source</a>
</p>

---

## ⚡ Quick Start

Open `index.html` in any modern browser — no install, no build step, no dependencies.

```bash
# Optional local static server
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## ✅ Validation

The repository includes a lightweight smoke test and the deploy workflow also checks the inline JavaScript syntax before publishing.

```bash
node scripts/smoke-test.js
node scripts/readiness-check.js
```

---

## 🎯 Features

| Category | Details |
|---|---|
| **Weapons** | Magic Bolt, Fireball, Lightning Arc, Frost Nova, Holy Ring, Void Beam, Energy Orb, Shadow Scythe, Meteor Strike, Poison Cloud, Mirror Image, Chain Storm, Plasma Ball |
| **Enemies** | Slimes, bats, skeletons, golems, wraiths, bosses, elites, and late-game variants |
| **Elite Affixes** | Vampiric, Frenzied, Armored, Explosive, Spectral |
| **Classes** | Void Mage, Flame Knight, Frost Warden, Shadow Rogue, Storm Caller |
| **Game Modes** | Endless, Timed Trial, Blitz, Boss Rush, Pacifist |
| **Progression** | Meta-upgrades, items, achievements, bestiary, gold, XP, and permanent unlocks |
| **Game Feel** | Hit-stop, directional shake, physics damage numbers, impact particles, camera zoom, screen flash, sound priority |
| **Architecture** | Single `index.html`, Canvas 2D, Web Audio API, localStorage persistence |

---

## 🎛️ Controls

| Key | Action |
|---|---|
| **WASD / Arrows** | Move |
| **ESC / P** | Pause |
| **Space / Enter** | Start / confirm |
| **Mouse Click** | Select upgrades / menus |
| **Double-click** | Fullscreen |
| **F3** | FPS counter |
| **F4** | Dev tools |

---

## 🧩 Command Center v3

VOIDRUN includes `voidrun-command-center.js`, a standalone production overlay with command palette, live HUD, run reports, accessibility settings, save tools, diagnostics, daily challenges, build planning, and an active Hook Composition Engine for 2,400 future tuning hooks.

Readiness details: [`docs/READINESS.md`](docs/READINESS.md).

Offline/PWA support is included through `manifest.webmanifest` and `sw.js`.

---

## 🚀 Deployment

GitHub Pages deployment is configured in `.github/workflows/pages.yml`.

On every push to `main`, the workflow:

1. checks out the repository,
2. extracts and syntax-checks inline JavaScript from `index.html`,
3. uploads the static site artifact,
4. deploys it to GitHub Pages.

The game is served from:

<https://LIN4CRE.github.io/voidrun>

---

## 🧬 Nix Brand

VOIDRUN is a **Nix Labs** production.

| Element | Value |
|---|---|
| **Mark** | 🌀 Procedural void spiral |
| **Tagline** | BUILD. CREATE. SHIP. |
| **Motto** | Chaos with direction. |
| **Colors** | `#0a0a1a` · `#00e5ff` · `#ff00e5` · `#ffaa00` |

---

## 📄 License

MIT — play, mod, and share. Keep the Nix Labs credit.
