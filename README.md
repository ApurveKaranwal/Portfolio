# APURVE.DEV Portfolio

This repository contains the source for `apurve.xyz`, a static single-page personal portfolio for Apurve Karanwal.

The site is intentionally dense and playful. It is not just a profile page. It mixes portfolio content with a faux operating-system aesthetic, interactive overlays, mini-games, ambient animation systems, browser-audio feedback, keyboard-triggered easter eggs, a fake terminal, an AR viewer, and several hidden "toy" features.

This README is written as both:

- a product/feature document explaining what the website does
- a maintenance document explaining how the current implementation works

## Contents

- [1. Project Overview](#1-project-overview)
- [Project Preview](#project-preview)
- [Feature Matrix](#feature-matrix)
- [2. Stack and Dependencies](#2-stack-and-dependencies)
- [3. Repository Layout](#3-repository-layout)
- [4. Running the Site Locally](#4-running-the-site-locally)
- [5. High-Level Experience Flow](#5-high-level-experience-flow)
- [6. Full Section-by-Section Content Map](#6-full-section-by-section-content-map)
- [7. Every Visible Control and What It Does](#7-every-visible-control-and-what-it-does)
- [8. Hidden Features, Secret Modes, and Easter Eggs](#8-hidden-features-secret-modes-and-easter-eggs)
- [9. CLI Terminal Command Reference](#9-cli-terminal-command-reference)
- [10. Mini-Games and Interactive Systems](#10-mini-games-and-interactive-systems)
- [11. External Integrations and Browser APIs](#11-external-integrations-and-browser-apis)
- [12. DOM and ID Reference](#12-dom-and-id-reference)
- [13. Styling and Visual System](#13-styling-and-visual-system)
- [14. JavaScript Architecture and Behavior Map](#14-javascript-architecture-and-behavior-map)
- [15. Link and Asset Inventory](#15-link-and-asset-inventory)
- [16. Maintenance Guide](#16-maintenance-guide)
- [17. Known Quirks and Current Limitations](#17-known-quirks-and-current-limitations)

## Project Preview

Suggested additions for future polish:

- hero section screenshot
- Pong modal screenshot
- CLI terminal screenshot
- Matrix mode screenshot
- radio player screenshot
- AR modal screenshot

If you want to turn this README into a public-facing showcase, create a `docs/` or `assets/readme/` folder and add:

```text
assets/readme/hero.png
assets/readme/pong.png
assets/readme/cli.png
assets/readme/matrix.png
assets/readme/radio.png
assets/readme/ar.png
```

Then add standard Markdown image blocks such as:

```md
![Hero section](assets/readme/hero.png)
```

## Feature Matrix

| Area | Present | Notes |
|---|---|---|
| Static portfolio content | Yes | Main portfolio sections are all in `index.html` |
| Responsive layout | Yes | Tailwind utilities plus custom CSS |
| Custom theme system | Yes | Root color variables in `styles.css` |
| Animated preloader | Yes | Fake boot/loading sequence |
| Typewriter hero subtitle | Yes | Started after preloader finishes |
| Live time/date panel | Yes | Updates once per second |
| Social/profile links | Yes | GitHub, Discord, X, LinkedIn, Medium |
| Resume download flow | Yes | Modal-confirmed download |
| Project repo launcher modal | Yes | Featured repo links route through code modal |
| Pong mini-game | No | Removed |
| CLI terminal overlay | Yes | Portfolio shell commands (`whoami`, `ls`, `cat`, etc.) |
| Konami code | No | Removed |
| Boss fight | No | Removed |
| Matrix mode | No | Removed |
| CRT mode | No | Removed |
| Dark-web mode | No | Removed |
| Self-destruct effect | No | Removed |
| Sandbox JS executor | No | Removed |
| Heist mini-game | No | Removed |
| Custom cursor and trail | Yes | Mouse-following cursor system |
| Ambient particle/canvas systems | Yes | Spiderweb, glyphs, lines, particles |
| Lo-fi draggable radio | Yes | Hidden YouTube-backed playback |
| AR viewer | Yes | `model-viewer` with remote astronaut model |
| Backend/API data layer | No | No app backend or `fetch` usage |
| Persistent state | No | All UI/game state resets on refresh |
| Build pipeline | No | Static files only |
| Automated tests | No | No testing setup in repo |

## 1. Project Overview

The website is a static cyberpunk / retro-console themed portfolio built with plain HTML, CSS, and JavaScript.

Primary goals of the site:

- present Apurve Karanwal's profile, projects, and credentials
- showcase personality through an intentionally gamified interface
- turn ordinary portfolio actions into interactions
- hide several surprise features for users who explore the page

Core user-facing content areas:

- hero/profile section
- key skills
- open-source contributions
- featured projects
- academic/university projects
- embedded systems / IoT work
- Hela Labs ambassador section
- experience
- certifications
- education and awards
- blogs / Medium stories
- hobbies / interests
- contact CTA

Core experience-enhancement systems:

- animated preloader
- live time/date panel
- terminal-style project repo launcher
- resume confirmation modal
- Pong mini-game
- pseudo-shell CLI
- Matrix override sequence
- boss fight click-game
- sandbox code injector
- password guessing heist mini-game
- draggable lo-fi radio
- AR viewer
- audio feedback
- custom cursor and trail
- CRT mode
- dark-web mode
- self-destruct animation

## 2. Stack and Dependencies

### Core stack

- `index.html`
- `styles.css`
- `script.js`

This repo has:

- no framework
- no bundler
- no package manager manifest
- no build step
- no backend

It is a static frontend.

### Third-party resources loaded by the page

From `index.html`:

- Tailwind CDN: `https://cdn.tailwindcss.com`
- Google Fonts `Inter`
- Google Fonts `Press Start 2P`
- Google Fonts `Space Mono`
- Font Awesome `6.5.2`
- Three.js `r128`
- `model-viewer` `3.1.1`

Loaded dynamically by `script.js`:

- YouTube IFrame API: `https://www.youtube.com/iframe_api`

### Browser/platform features used

- DOM APIs
- Canvas 2D API
- SVG DOM APIs
- Web Audio API
- Intersection Observer API
- `requestAnimationFrame`
- `setInterval` / `setTimeout`
- `window.open`
- responsive `resize` handlers

### What is not used

- no `fetch`
- no REST or GraphQL calls
- no authentication
- no cookies
- no `localStorage`
- no `sessionStorage`
- no service worker
- no client-side router

## 3. Repository Layout

```text
.
|-- CNAME
|-- index.html
|-- README.md
|-- resume.pdf
|-- script.js
|-- styles.css
`-- wa.png
```

### File purpose

`index.html`

- contains the entire page structure
- contains all visible sections
- defines every modal, overlay, canvas, floating widget, and interactive anchor/button
- loads all third-party CSS/JS resources

`styles.css`

- defines the color palette
- defines the pixel/block visual language
- contains modal, overlay, game, animation, cursor, and responsive styling
- contains multiple special-mode styles such as CRT, glitch, and hidden-feature presentation

`script.js`

- contains all runtime behavior
- builds animated background elements
- powers modals, CLI, games, secret modes, audio, radio, AR, and easter eggs

`resume.pdf`

- downloadable resume asset

`wa.png`

- hero/profile image

`CNAME`

- custom domain record pointing to `apurve.xyz`

## 4. Running the Site Locally

No install step is required.

### Option A: Open directly

Open `index.html` in a browser.

### Option B: Serve over HTTP

Using Python:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

Serving locally is useful because some embedded features behave more predictably over HTTP than with a raw `file://` URL.

## 5. High-Level Experience Flow

What the user sees from first load:

1. Preloader overlay blocks the page.
2. Progress bar fills with fake staged loading text.
3. Preloader fades out and scrolling becomes available again.
4. Hero subtitle starts typewriting.
5. Ambient visuals continue running in the background.
6. Hover/click audio becomes available if the user unmutes.
7. The user can browse standard portfolio sections.
8. If they explore further, they can discover games, terminal commands, hidden sequences, and special modes.

There is no login, no onboarding, and no data entry requirement. The site is discoverable immediately.

## 6. Full Section-by-Section Content Map

This section documents what content currently exists in the page, in order.

### Header

Brand text:

- `APURVE.DEV`

Header actions:

- Resume
- GitHub
- Discord
- X
- LinkedIn
- Medium
- Pong
- CLI

### Hero section

Contains:

- circular profile image from `wa.png`
- main title `APURVE KARANWAL`
- typewriter subtitle
- primary CTA `> EXECUTE_WORK_VIEW`
- secondary CTA `AR MODE`

Typewriter text:

```text
> **[STATUS: ONLINE]** Aspiring Full-Stack Developer | IoT Engineer. Turning ideas into interactive systems.
```

### System Status section

Displays:

- `STATUS: NOMINAL`
- `UPTIME: 74:12:05`
- live time
- live date
- `LOCATION: ASIA/DELHI`

Also contains the classified trigger area:

- warning label
- red secret button
- Konami-code hint text

### Key Skills section

Current visible skills:

- Python
- FastAPI
- Node.js
- JavaScript
- HTML5
- CSS3
- Express.js
- Git/GitHub
- Docker
- Cloudinary
- Multer
- MySQL
- SQLite
- IoT
- NodeMCU
- Arduino
- MongoDB

### Open Source section

Current cards:

- `FOSS-Community/progress-tracker`
- `coming soon...`
- `coming soon...`

Documented contribution for the first card:

- improve error handling
- add Node.js check
- auto `.html` extension
- wrap in `main()`

### Featured Projects section

Current cards, in displayed order:

1. PNGProtect
2. memepage
3. pyOCR
4. mdfmt
5. Cha-Ching!
6. RAG PIPELINE
7. WOMEN SAFETY SYSTEM
8. CipherVault
9. TextForge
10. HOME AUTOMATION
11. Expense Tracker
12. COVID-19 TRACKER
13. SMART IRRIGATION
14. Securo
15. Shirt Smith
16. coming soon...
17. coming soon...
18. coming soon...

These cards are special because their `> VIEW_REPOSITORY` buttons do not open immediately. They route through the code-session modal first.

### Academic Projects section

Current cards:

- CS50 Python
- Web Development Fundamentals
- Design Thinking
- coming soon...
- coming soon...
- coming soon...

### Embedded Systems / Lab Builds section

Current bullet cards:

- Women Safety System
- Alcohol Detection System
- Smart Plant Monitoring System
- Bluetooth Remote Control Car
- Keypad Door Unlock System
- Awaken Driver Glasses

### Hela Labs Ambassador section

Contains:

- `HELA LABS` title
- `Regional Ambassador` label
- descriptive ecosystem/ambassador copy
- CTA `> ACCESS_PORTAL`
- CTA `[?] INQUIRE`

### Experience and Certifications section

Professional track items:

- IoT & Robotics Project Developer (Personal)
- Active Member: FOSSCU-K
- Active Member: Geek Room KIET (GRK)
- Active Member: Google Developer Group (GDG)

Certifications items:

- CS50P - Introduction to Programming with Python
- Inspire MANAK Award (2x)

### Education and Awards section

Current cards:

- B.TECH (IT), KIET Group of Institutions, 2025-2029
- FIRST PRIZE WINNER, Bansuri Mahotsav 2022

### Blogs section

Current article cards:

1. `Single Threaded architecture of Redis`
2. `Coming Soon`
3. `Coming Soon`

Current published article date shown:

- `11 May 2026`

Section also includes:

- `> VISIT_MEDIUM`

### Hobbies section

Current interests named in text:

- piano
- songs/music
- PC games
- books

### Contact CTA section

Contains:

- large call-to-action heading
- invitation to collaborate or hire
- button `> SEND_MESSAGE_EMAIL`

### Footer

Contains:

- `System Status: OK. Built by Apurve with heart | All rights reserved 2025`
- hidden red nuke button in the lower-right corner

## 7. Every Visible Control and What It Does

This section is intentionally exhaustive.

### Header button: Resume

DOM id:

- `resume-download-btn`

Behavior:

- default anchor download is intercepted
- opens the resume modal instead
- modal message is randomized from a small set of humorous lines
- confirm creates a temporary anchor and downloads `resume.pdf`
- downloaded filename is forced to `Apurve_Karanwal_Resume.pdf`

Close paths:

- click `> ABSOLUTELY! DOWNLOAD NOW` to download
- click `> MAYBE LATER...` to cancel
- click outside modal to close

### Header button: GitHub

Opens:

- `https://github.com/ApurveKaranwal`

### Header button: Discord

Opens:

- `https://discord.com/users/1365348956074147860`

### Header button: X

Opens:

- `https://x.com/Apurve_Karanwal`

### Header button: LinkedIn

Opens:

- `https://www.linkedin.com/in/apurvekaranwal/`

### Header button: Medium

Opens:

- `https://medium.com/@apurvekaranwal282`

### Header button: Pong

DOM id:

- `pong-game-btn`

Behavior:

- opens Pong modal
- resets score to `0 - 0`
- resets speed level to `1x (Normal)`
- resets ball to center
- starts the game loop
- resizes the canvas to fit container width on smaller screens

### Header button: CLI

DOM id:

- `cli-mode-btn`

Behavior:

- opens terminal overlay
- focuses terminal input
- prints welcome banner

### Hero button: > EXECUTE_WORK_VIEW

Behavior:

- links to `#projects`
- scrolls to Featured Projects

### Hero button: AR MODE

DOM id:

- `ar-mode-btn`

Behavior:

- opens `#ar-modal`
- shows `model-viewer` with remote astronaut model

### Secret button: DEFINITELY DO NOT CLICK HERE!

DOM id:

- `secret-override-btn`

Behavior:

- triggers Matrix override sequence directly

### Project cards: > VIEW_REPOSITORY

Scope:

- only on `.project-card` links whose text includes `VIEW`

Behavior:

- prevents direct navigation
- finds the enclosing project card title
- opens the code modal
- simulates coding/session boot lines
- reveals the modal repo button after the final line
- modal repo button opens the original GitHub link in a new tab

### Open-source links: > View PR

Behavior:

- regular outbound links
- no special modal flow

### Academic links: > View Code/Report

Behavior:

- regular outbound links

### Blog links: > READ

Behavior:

- regular outbound links to Medium

### CTA button: > ACCESS_PORTAL

Behavior:

- opens `https://helalabs.com`

### CTA button: [?] INQUIRE

Behavior:

- opens default mail client using `mailto:apurvekaranwal2025@gmail.com`

### CTA button: > SEND_MESSAGE_EMAIL

Behavior:

- opens default mail client to the same email address

### Footer hidden red button

DOM id:

- `nuke-btn`

Behavior:

- starts self-destruct countdown
- visually drops major page elements after countdown finishes

### Audio toggle

DOM id:

- `audio-toggle`

Behavior:

- initializes audio context on first use
- switches between muted and unmuted state
- swaps icon classes between volume-off and volume-on

## 8. Hidden Features, Secret Modes, and Easter Eggs

### 8.1 Konami code

Exact key sequence:

```text
ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight b a
```

Behavior:

- sequence is tracked globally
- if `startBossFight` exists, the boss fight begins
- after boss defeat, Matrix sequence starts
- if not available, Matrix starts directly

### 8.2 Matrix override sequence

Triggered by:

- secret red button
- CLI command `matrix`
- Konami code -> boss fight -> win

Sequence flow:

1. page gets `ui-shake` and `ui-glitch` classes
2. short delay
3. hacking terminal overlay appears
4. logs print one by one:
   - `INITIATING OVERRIDE PROTOCOL...`
   - `BYPASSING MAINFRAME FIREWALL...`
   - `DECRYPTING AES-256 KERNEL...`
   - `ACCESS GRANTED.`
   - `WAKING UP...`
5. hacking terminal hides
6. Matrix rain begins on full-screen canvas
7. achievement popup appears

Matrix rain details:

- glyph source combines Katakana, uppercase Latin letters, and digits
- draw interval runs every `30ms`
- mouse proximity changes nearby characters to bright white and scatters them slightly
- clicking the Matrix canvas closes the effect once

Achievement popup:

- title `Achievement Unlocked`
- description `The Red Pill`

### 8.3 Boss fight

Triggered by:

- Konami code

Behavior:

- overlay displays a ghost icon as the boss
- health starts at `10`
- health bar width reflects health
- boss moves left/right with random vertical jitter
- each click does one damage
- at zero health:
  - movement stops
  - explosion class is applied
  - overlay closes
  - Matrix starts after short delay

### 8.4 CRT mode

Triggered by typing:

```text
retro
```

Behavior:

- toggles `crt-mode` on `body`

### 8.5 Dark-web mode

Triggered by typing:

```text
tor
```

Behavior:

- toggles `dark-web-mode` on `body`
- attempts to rename selected headings
- changes header resume label to `DECRYPT DOSSIER`
- toggling off restores the resume label and any captured heading text

### 8.6 Self-destruct / nuke

Triggered by:

- clicking hidden red footer button

Behavior:

- `#nuke-overlay` becomes visible
- countdown starts from `05`
- after countdown:
  - overlay hides
  - all `section`, `header`, `footer`, and `canvas` elements get a fall-down treatment
  - elements are translated downward and randomly rotated

This is visual only. It does not delete content or reload the page.

### 8.7 Sandbox code injector

Accessible via:

- CLI command `sandbox`

Behavior:

- opens `#sandbox-modal`
- textarea accepts JavaScript
- clicking `EXECUTE` runs:

```js
new Function(code)();
```

- errors are shown with `alert`

This feature gives full execution inside page context. It is intentionally unsafe.

### 8.8 Heist mini-game

Accessible via:

- CLI command `hack`

Behavior:

- opens `#heist-modal`
- randomly selects 6 words from an 8-word pool
- one of those 6 is the password
- user clicks candidate words
- log reports exact position matches
- attempts start at `4`

Word pool:

- HACKER
- SYSTEM
- SECURE
- ACCESS
- CYBER
- MATRIX
- CODING
- FUTURE

Success path:

- exact match found
- success message shown
- modal closes
- alert congratulates the user

Failure path:

- attempts reach zero
- system locked message shown
- modal closes

### 8.9 Custom cursor and cursor trail

Behavior:

- custom cursor moves to live mouse position
- trailing element eases behind the main cursor
- body gets `cursor-hover` while hovering interactive elements

### 8.10 Lo-fi radio

Behavior:

- radio widget is shown automatically
- can be dragged by its header
- uses YouTube as hidden audio source
- visualizer bars animate while music is playing

Video used:

- `36YnV9STBqc`

### 8.11 AR mode

Behavior:

- opens full-screen modal
- shows `model-viewer`
- uses remote astronaut model
- supports WebXR / Scene Viewer / Quick Look where available

## 9. CLI Terminal Command Reference

The CLI overlay is not decorative only. It supports multiple commands.

### Terminal boot message

Shown when CLI opens:

```text
Welcome to APURVE.DEV Terminal v1.0.0
Type 'help' to see available commands.
```

### Command parser behavior

- input is trimmed
- input is lowercased before routing
- command is echoed with prompt
- output is appended to terminal body

### Supported commands

`help`

- prints built-in command list

`whoami`

- prints:
  - name
  - role
  - location
  - status
  - short bio

`ls`

- prints fake filesystem entries:
  - `skills.txt`
  - `projects.dir`
  - `education.txt`
  - `hobbies.txt`
  - `resume.pdf`
  - `top_secret.enc`

`cat skills.txt`

- prints language, backend, database, tools, and hardware stacks

`cat education.txt`

- prints B.Tech summary

`cat hobbies.txt`

- prints four hobbies/interests

`cat top_secret.enc`

- prints access denied / encryption message

`sudo cat top_secret.enc`

- prints:
  - decrypting filler
  - `The cake is a lie.`
  - hint to try `matrix` or `retro`

`cat <anything else>`

- prints no-such-file error

`echo <text>`

- prints the provided text

`date`

- prints `new Date().toString()`

`matrix`

- prints initialization message
- closes CLI after delay
- launches Matrix sequence

`retro`

- toggles CRT mode

`sandbox`

- closes CLI
- opens sandbox modal

`hack`

- closes CLI
- opens heist mini-game

`sudo <anything else>`

- prints a fake failed sudo/password flow

`open projects`

- closes CLI
- scrolls to `#projects`

`open skills`

- scrolls to `#skills`

`open contact`

- accepted by parser
- no matching `#contact` element currently exists

`open about`

- accepted by parser
- no matching `#about` element currently exists

`clear`

- clears terminal output

`exit`

- closes the overlay

Any other non-empty input:

- prints `Command not found: <cmd>`

## 10. Mini-Games and Interactive Systems

### 10.1 Pong

Pong is a local two-player game rendered on `#pong-canvas`.

Controls:

- left paddle: `W`
- left paddle down: `S`
- right paddle up: `ArrowUp`
- right paddle down: `ArrowDown`
- pause/resume: `Space`
- speed selection: `1` to `5`

Speed labels:

- `1` -> `0.5x (Snail)`
- `2` -> `1x (Normal)`
- `3` -> `1.5x (Fast)`
- `4` -> `2x (Very Fast)`
- `5` -> `2.5x (Insane)`

Game state variables:

- `gameRunning`
- `gamePaused`
- `leftScore`
- `rightScore`
- `ballSpeed`
- `speedLevel`

Game mechanics:

- paddles move only within canvas bounds
- ball bounces off top and bottom walls
- ball bounces off paddles
- score increments when ball exits left or right
- ball resets to center after each point
- reset angle contains slight randomness

Touch support:

- four on-screen touch buttons map to keyboard directions
- touch and mouse events are both handled on those controls

Responsive behavior:

- opening the modal recalculates canvas dimensions based on container width

### 10.2 Preloader

Preloader details:

- random increments from `1` to `5`
- subtext changes based on progress range
- final state switches label to `ACCESS GRANTED`
- final delay before fade-out keeps the effect feeling intentional

### 10.3 Code session modal

Purpose:

- converts plain repo links into a staged "enter coding session" interaction

Message sequence:

1. `npm start && open_editor`
2. `brewing_coffee()...`
3. `opening_vscode()...`
4. `activating_lofi_beats()...`
5. `oh_no()... debugging_mode_ON!!`
6. `CODE_SESSION_READY! Happy Coding!`

Timing:

- each line appears every `400ms`
- repo-view button appears after final line

### 10.4 Live clock

Updates every second using locale formatting.

Dynamic fields:

- `#live-time`
- `#live-date`

### 10.5 Ambient visuals

Several continuous visual systems are always active:

- blockchain nodes
- floating symbols
- hex grid
- rising particles
- random SVG connection lines
- spiderweb canvas network
- scanline overlay
- floating skull

### 10.6 Audio feedback

Sound generation is procedural, not file-based.

Profiles:

- hover -> sine
- click -> square
- matrix -> sawtooth

Attachment points:

- all anchors
- all buttons
- `.project-card`
- `.pixel-block-3d`

## 11. External Integrations and Browser APIs

### External URLs referenced in source

Platform/profile links:

- `https://github.com/ApurveKaranwal`
- `https://discord.com/users/1365348956074147860`
- `https://x.com/Apurve_Karanwal`
- `https://www.linkedin.com/in/apurvekaranwal/`
- `https://medium.com/@apurvekaranwal282`
- `https://helalabs.com`
- `mailto:apurvekaranwal2025@gmail.com`

Project repository links:

- `https://github.com/FOSS-Community/progress-tracker/commit/2c9d980a8aef91ad658eb2def9600de67bf0a488`
- `https://github.com/ApurveKaranwal/PNGProtect`
- `https://github.com/ApurveKaranwal/memepage`
- `https://github.com/ApurveKaranwal/pyOCR`
- `https://github.com/ApurveKaranwal/mdfmt`
- `https://github.com/ApurveKaranwal/Cha-Ching`
- `https://github.com/ApurveKaranwal/RAG_pipeline`
- `https://github.com/ApurveKaranwal/WOMEN_SAFETY_SYSTEM`
- `https://github.com/ApurveKaranwal/CipherVault`
- `https://github.com/ApurveKaranwal/TextForge`
- `https://github.com/ApurveKaranwal/Home-Automation`
- `https://github.com/ApurveKaranwal/Expense_Tracker`
- `https://github.com/ApurveKaranwal/Covid-19-Tracker-OLed-Project`
- `https://github.com/ApurveKaranwal/SMART_IRRIGATION`
- `https://github.com/ApurveKaranwal/Securo`
- `https://github.com/ApurveKaranwal/ShirtSmith`
- `https://github.com/ApurveKaranwal/CS50_Python`
- `https://github.com/ApurveKaranwal/WebDesign_Assignment_MSE1`
- `https://github.com/ApurveKaranwal/DT_Assignment`

Blog/article links:

- `https://medium.com/@apurvekaranwal282/the-counterintuaitive-genius-of-redis-why-single-threaded-is-its-biggest-strength-9389c7d34d27`
- `https://medium.com/@apurvekaranwal282`

Runtime-loaded resources:

- `https://modelviewer.dev/shared-assets/models/Astronaut.glb`
- `https://www.youtube.com/iframe_api`

### Third-party libraries by purpose

Tailwind

- utility-first classes in HTML

Font Awesome

- icons for social buttons, buttons, overlays, and widgets

Google Fonts

- `Inter` for body/UI text
- `Press Start 2P` for pixel headings
- `Space Mono` for terminal/tech flavor

model-viewer

- AR and 3D model display

YouTube IFrame API

- hidden embedded audio source for the draggable radio

Three.js

- script is included
- no obvious active runtime usage in `script.js`

## 12. DOM and ID Reference

Important IDs currently present in the page:

- `main-body`
- `hexagon-grid`
- `code-modal`
- `code-project-name`
- `code-terminal`
- `code-view-btn`
- `code-close-btn`
- `resume-modal`
- `resume-message`
- `resume-confirm-btn`
- `resume-cancel-btn`
- `pong-modal`
- `pong-canvas`
- `pong-touch-controls`
- `touch-left-up`
- `touch-left-down`
- `touch-right-up`
- `touch-right-down`
- `pong-score`
- `speed-indicator`
- `pong-close-btn`
- `preloader`
- `loader-text`
- `progress-bar`
- `loader-subtext`
- `audio-toggle`
- `audio-icon`
- `matrix-canvas`
- `resume-download-btn`
- `pong-game-btn`
- `cli-mode-btn`
- `hero-typewriter`
- `ar-mode-btn`
- `system-status`
- `live-time`
- `live-date`
- `secret-override-btn`
- `skills`
- `open-source`
- `projects`
- `academic-projects`
- `more-projects`
- `ambassador-role`
- `experience`
- `education`
- `blogs`
- `hobbies`
- `nuke-btn`
- `cli-mode-overlay`
- `cli-output`
- `cli-input`
- `nuke-overlay`
- `nuke-countdown`
- `custom-cursor`
- `cursor-trail`
- `spiderweb-canvas`
- `boss-fight-overlay`
- `boss-health-bar`
- `boss-character`
- `cyber-skull-container`
- `cyber-skull`
- `radio-player`
- `radio-header`
- `radio-controls`
- `radio-play-btn`
- `radio-visualizer`
- `yt-player-container`
- `sandbox-modal`
- `close-sandbox-btn`
- `sandbox-editor`
- `run-sandbox-btn`
- `heist-modal`
- `heist-attempts`
- `heist-words`
- `heist-logs`
- `close-heist-btn`
- `ar-modal`
- `close-ar-btn`
- `ar-viewer`
- `hacking-terminal`
- `terminal-content`
- `achievement-notification`

This list is useful when editing `script.js`, because most behavior is manually wired by ID.

## 13. Styling and Visual System

### Theme palette

Current root variables from `styles.css`:

- `--color-bg-dark: #2c4241`
- `--color-card-main: #4a6c6b`
- `--color-card-border: #142120`
- `--color-accent-main: #b8e0e0`
- `--color-accent-secondary: #fcd34d`
- `--color-text-light: #e0f2f1`
- `--color-text-dark: #142120`

Visual direction:

- pixel/block UI
- Minecraft-like earthy palette
- retro-console overlays
- heavy drop-shadow / pressed-button interaction
- mixed cyberpunk + arcade styling

### Typography roles

`Inter`

- default body copy

`Space Mono`

- terminal copy
- labels
- supporting "tech" text

`Press Start 2P`

- headings
- hero title
- major labels and retro titles

### Notable styling systems

- scrollbars are customized
- text selection colors are customized
- scanline overlay is animated
- pixel text flicker animation is reused across headings
- block/button elements use a pseudo-3D pressed effect
- project cards invert the interaction by lifting upward on hover
- several sections use staggered fade-in
- special modes rely on body-level class toggles

## 14. JavaScript Architecture and Behavior Map

`script.js` currently uses two top-level `DOMContentLoaded` handlers.

### First DOMContentLoaded block responsibilities

- create blockchain nodes
- create floating symbols
- create hexagon grid
- create floating particles
- create SVG connecting lines
- wire code-session modal
- intercept project repository buttons
- wire resume modal
- wire Pong modal and game loop
- wire mobile Pong controls
- wire Pong keyboard controls
- start typewriter system
- run preloader
- update live clock/date
- register Intersection Observer for animated sections

### Second DOMContentLoaded block responsibilities

- initialize audio system
- attach hover/click sound hooks
- wire audio toggle
- track Konami code
- set up Matrix sequence
- track mouse for Matrix interaction
- wire secret override button
- create custom cursor / trail behavior
- wire retro mode sequence
- wire nuke button
- wire CLI overlay and command parser
- start spiderweb canvas animation
- wire dark-web mode sequence
- define boss fight behavior
- animate cyber skull rotation
- wire sandbox modal
- define heist game
- wire AR modal
- wire lo-fi radio and YouTube player

### Global-ish state values

The site uses local mutable variables instead of a formal state store. Examples:

- `audioCtx`
- `isMuted`
- `currentSequence`
- `retroSequence`
- `torSequence`
- `isMatrixActive`
- `mouseX`
- `mouseY`
- `gameRunning`
- `gamePaused`
- `gameLoopId`
- `isNuked`
- `isRadioPlaying`
- `ytPlayer`

### Event density

The page uses many direct listeners:

- multiple `document.addEventListener("keydown", ...)`
- multiple `document.addEventListener("mousemove", ...)`
- button `click` handlers
- overlay click-to-close handlers
- resize handlers
- touch handlers
- mouse drag handlers

This is workable for a static site, but it means behavior is spread across the file and should be edited carefully.

### Source reference map

Important function entry points in `script.js`:

- `openCodeModal(...)` at line `110`
- `openResumeModal()` at line `185`
- `downloadResume()` at line `195`
- `resetBall()` at line `351`
- `openPongGame()` at line `366`
- `closePongGame()` at line `394`
- `startTypewriter()` at line `463`
- `updateClock()` at line `513`
- `playSound(type)` at line `572`
- `triggerMatrix()` at line `666`
- `startMatrixRain()` at line `714`
- `window.startBossFight = function() { ... }` at line `1090`
- `window.initHeistGame = function() { ... }` at line `1177`
- `window.onYouTubeIframeAPIReady = function() { ... }` at line `1291`
- `onPlayerReady(event)` at line `1303`

Important event-binding anchors in `script.js`:

- resume button click handler at line `205`
- Pong open button binding at line `404`
- audio toggle binding at line `617`
- Konami sequence declaration at line `628`
- retro sequence declaration at line `834`
- nuke button handler at line `856`
- CLI keydown command parser at line `898`
- dark-web sequence declaration at line `1058`
- sandbox execute binding at line `1166`
- AR open/close bindings at lines `1243-1244`

Important markup anchors in `index.html`:

- resume header button at line `153`
- Pong button at line `195`
- CLI button at line `202`
- AR button at line `230`
- system-status section at line `237`
- secret override button at line `253`
- skills section at line `266`
- open-source section at line `291`
- featured projects section at line `344`
- academic projects section at line `618`
- more-projects section at line `708`
- ambassador section at line `764`
- experience section at line `816`
- education section at line `880`
- blogs section at line `912`
- hobbies section at line `1004`
- footer nuke button at line `1041`
- radio player at line `1083`
- sandbox modal at line `1095`
- heist modal at line `1107`
- AR modal at line `1118`

## 15. Link and Asset Inventory

### Local assets

- `wa.png`
- `resume.pdf`
- `styles.css`
- `script.js`

### Remote assets

- Google fonts CSS
- Font Awesome CSS
- Tailwind CDN script
- Three.js script
- `model-viewer` module script
- YouTube IFrame API
- remote `.glb` model

### Deployment/domain

`CNAME` currently contains:

```text
apurve.xyz
```

## 16. Maintenance Guide

### To update profile text or section copy

Edit:

- `index.html`

### To change colors/theme

Edit:

- `:root` variables in `styles.css`

### To add or remove project cards

Edit:

- Featured Projects markup in `index.html`

Important note:

- project repo buttons in `.project-card` are intercepted automatically only when the anchor text contains `VIEW` and the `href` contains `github`

### To change the resume file

Replace:

- `resume.pdf`

If you also want a different downloaded filename:

- update `link.download` in `script.js`

### To change the radio track

Edit in `script.js`:

- YouTube `videoId` currently set to `36YnV9STBqc`

### To change the AR model

Edit in `index.html`:

- `#ar-viewer` `src`

### To remove or disable secret features

Primary logic locations in `script.js`:

- Konami sequence
- Matrix functions
- retro mode sequence
- dark-web mode sequence
- CLI command handlers
- sandbox modal execution
- heist initializer
- nuke button handler

### To add more CLI commands

Edit:

- the large `if / else if` chain under the CLI input keydown handler in `script.js`

Remember to update:

- the `help` output text
- this README command reference

### To add README screenshots

Recommended approach:

1. create `assets/readme/`
2. capture desktop screenshots for hero, CLI, Pong, Matrix, radio, and AR
3. export optimized PNG or WebP assets
4. insert them near the top under `Project Preview`

Suggested naming:

- `hero-desktop.png`
- `cli-overlay.png`
- `pong-modal.png`
- `matrix-mode.png`
- `radio-player.png`
- `ar-modal.png`

### To turn this into a cleaner data-driven site later

A good future refactor would separate:

- content data into JSON or JS objects
- rendering from content
- modal/game logic into named modules
- repeated event wiring into smaller functions

That would reduce how much hardcoded copy currently lives in `index.html`.

## Roadmap

Potential improvements, ordered by practical value:

### Content and documentation

- add real README screenshots/GIFs
- document deployment workflow explicitly
- add contribution guidelines if the repo becomes public-collaboration friendly
- add a changelog for notable UI/game additions

### Frontend architecture

- split `script.js` into modules by system: audio, CLI, games, overlays, secrets
- centralize selectors in a single DOM map
- move repeated strings and project data into a structured config
- remove unused dependencies such as Three.js if it remains unused

### UX and accessibility

- improve keyboard focus visibility across overlays
- add escape-key close behavior for modals
- improve AR fallback messaging for unsupported devices
- add visible help/hint affordances for hidden features
- add reduced-motion handling for users who prefer less animation

### Performance

- reduce the number of continuously running animation loops
- pause background animation systems when tabs are hidden
- compress image assets
- lazy-load optional heavy systems where possible

### Safety and maintainability

- remove or gate the sandbox feature in public production builds
- add linting and formatting
- add a minimal smoke-test checklist
- add source comments around the most coupled event flows

### To add more project links

Edit the corresponding anchor `href` in `index.html`.

If the card is a Featured Project card, it will continue using the code modal automatically.

## 17. Known Quirks and Current Limitations

This section documents the current implementation honestly.

### `open contact` and `open about` do not resolve

The CLI parser supports:

- `open contact`
- `open about`

But `index.html` currently has no:

- `id="contact"`
- `id="about"`

So the terminal behaves as if it can open them, but no scroll target exists.

### Dark-web heading mutation selector is narrow

The script looks for:

- `h2.pixel-text`

Many important section headings are `h3`, so some intended heading renames may not happen.

### Three.js is loaded but apparently unused

The script tag is present in HTML, but the current JavaScript does not appear to use Three.js directly.

### Sandbox is intentionally unsafe

`new Function(code)()` executes arbitrary code in page context. This is fine as a self-authored static novelty feature, but it is not safe to reuse in a shared or trust-sensitive environment.

### Some content is hardcoded

Examples:

- uptime
- location string
- project descriptions
- education dates
- blog card data

There is no CMS or data file.

### No persistence

These states reset on refresh:

- mute/unmute state
- dark-web mode
- CRT mode
- terminal history
- game state
- radio state
- Matrix state

### No automated quality tooling

Not present in this repo:

- tests
- lint config
- formatter config
- CI pipeline

### Current README code references are line-sensitive

The line numbers documented in this README match the source as inspected during this documentation pass. If `index.html` or `script.js` changes substantially, those references should be refreshed.

### Source contains some encoding artifacts

A few decorative characters in the source appear to have passed through imperfect encoding at some point. They do not stop the site from functioning, but they are worth cleaning if polish matters.

## Final Summary

This portfolio is a static frontend with much more interaction than a typical personal website. The visible content is straightforward, but the site experience depends heavily on `script.js`: that file controls modal routing, games, keyboard secrets, audio, animation systems, the fake CLI, the radio player, and the AR viewer.

If you maintain this project, treat it as a small interactive application rather than a simple landing page.
