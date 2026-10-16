/* ==========================================================================
   CONFIG — edit this object to personalize the whole site.
   Leave a value empty ("" or []) to hide it. Set `enabled: false` to hide a section.
   ========================================================================== */
const CONFIG = {
  site: {
    name: "Your Name",
    brand: "Your Name",
    role: "Product & UI designer",
    title: "Your Name — Figma Portfolio",
    description: "UI and product design portfolio with interactive Figma files you can click through.",
    location: "City, Country",
    email: "hello@example.com",
    statusLabel: "Frame 1284",          // small label above the status box, like a Figma layer name
    status: "Open for work (and strong opinions on kerning)"
  },
  theme: {
    palette: "figma",                // "figma" | "figma-red" | "ember" | "moss" | "rose" | "sand" | "default" (the original blue)
    accent: "",                      // optional: any hex color, overrides the palette's accent
    defaultMode: "system"            // "light" | "dark" | "system"
  },
  // Order = order on the page.
  sections: [
    { id: "about",      enabled: true, label: "About",      title: "Hi, I move things 2px" },
    { id: "work",       enabled: true, label: "Work",       title: "Figma files, open for poking" },
    { id: "skills",     enabled: true, label: "Skills",     title: "Tools of the trade" },
    { id: "services",   enabled: true, label: "Services",   title: "Ways to hire me" },
    { id: "experience", enabled: true, label: "Experience", title: "The résumé, but fun" }
  ],
  hero: {
    headline: ["I'm Fuujin.", "Frames named.", "Allegedly."],
    subtext: "Fuujin here. I design interfaces in Figma, name the layers (eventually) and hand developers files they don't have to sigh at. Every project below opens as a real Figma file, so yes, you may poke it.",
    primaryCta:   { label: "Open the Figma files", href: "#work" },
    secondaryCta: { label: "Say hello", href: "mailto:hello@example.com" }, // use your own email
    cursors: [ // animated "multiplayer cursors": x/y = start position (% of hero), notes cycle, optional path: [[dx,dy] x3] in px. Delete to hide.
      { name: "Client", notes: ["make the logo bigger", "can it pop more?", "love it, one tiny change", "can Fuujin do it by tonight?"], color: "#d6336c", x: "58%", y: "22%" },
      { name: "Dev",    notes: ["that's not in the spec", "works on my machine", "who named this layer?", "Fuujin named it. Mostly."],  color: "#0b7285", x: "9%",  y: "62%" }
    ]
  },
  about: {
    paragraphs: [
      "Replace this with who you are and what you design. Keep it human: what you care about, what you are good at, and the kind of work you want next.",
      "Fun fact slot: tell people your design hill to die on. Mine could be that “final_v7_REAL” is not a version control system."
    ],
    stats: [ // optional
      { value: "1,284", label: "Layers named “Frame 1284”" },
      { value: "7",     label: "Files called “final_v7_REAL”" },
      { value: "∞",     label: "Pixels nudged by one" }
    ]
  },
  projects: {
    allLabel: "All",
    canvasCols: 6,   // frames per row on the canvas (each category gets its own labelled section)
    // Extra layers dropped around the canvas (draggable, purely for fun). type: sticky | comment | text | frame | phone | nav | buttons | tokens | swatches | arrow.
    // Leave out x/y and they get a random spot (in the gaps when they fit). Add `color` / `rot` (degrees) on stickies if you want. Delete the list to hide them all.
    extras: [
      { type: "sticky",  text: "Dev: that's not in the spec" },
      { type: "sticky",  text: "TODO: delete this frame (do not delete this frame)" },
      { type: "sticky",  text: "Client: can we see it in green?" },
      { type: "sticky",  text: "// TODO: fix before launch (launched 3 months ago)" },
      { type: "sticky",  text: "works on my machine ¯\\_(ツ)_/¯" },
      { type: "sticky",  text: "Dev: who named this layer?" },
      { type: "sticky",  text: "padding: 13px?? why" },
      { type: "sticky",  text: "Client: make the logo bigger" },
      { type: "sticky",  text: "Dev: pls export @2x" },
      { type: "sticky",  text: "git blame says it was me" },
      { type: "sticky",  text: "ship it, fix it later" },
      { type: "sticky",  text: "Dev: z-index: 99999 fixes it" },
      { type: "comment", text: "why is this 2px off?" },
      { type: "comment", text: "love it, ship it" },
      { type: "comment", text: "can we make it pop?" },
      { type: "comment", text: "this breaks on safari" },
      { type: "comment", text: "nit: kerning" },
      { type: "comment", text: "approved (pending 14 more approvals)" },
      { type: "comment", text: "who touched the auto layout?" },
      { type: "comment", text: "Dev: it's not a bug, it's a feature" },
      { type: "text",    text: "final_v7_REAL" },
      { type: "text",    text: "final_FINAL_v2" }
    ],
    // `image` = path to a picture; `ratio` = its aspect ratio, "w/h" (default "4/3"). Posters are 4/5 so nothing gets cropped.
    // `figma` = a Figma file / prototype / FigJam share link (figma.com). It is embedded live in the details window.
    // `link` (live site) and `repo` (source) are optional. Nothing renders unless you provide it.
    // Frames are grouped by `category`, in the order the categories first appear below.
    items: [
      // ---- Posters ----
      { title: "KEIZUKI", category: "Poster", ratio: "4/5", image: "images/work/keizuki.webp", summary: "Graffiti title on grainy manga ink.", description: "A monochrome manga panel on a paper texture, with a hand-painted red title across the top.", tags: ["Anime", "Manga", "Lettering"] },
      { title: "VERSTAPPEN, four-time champion", category: "Poster", ratio: "4/5", image: "images/work/verstappen-champion.webp", summary: "Halftone type in a navy palette.", description: "Max Verstappen in Red Bull navy. Oversized condensed type, a halftone treatment on the driver and a “Four time champion” lockup underneath.", tags: ["F1", "Halftone", "Typography"] },
      { title: "PEAK", category: "Poster", ratio: "4/5", image: "images/work/peak.webp", summary: "A mountain ridge cut into giant red type.", description: "Giant red letters sit behind a mountain ridge. Latitude and longitude, a short fact about Everest's limestone and the country sit along the bottom edge.", tags: ["Typography", "Landscape", "Layout"] },
      { title: "RUN", category: "Poster", ratio: "4/5", image: "images/work/run.webp", summary: "Run with the Wind, in a wall of red type.", description: "Giant red RUN letters behind Yōhei Sakaguchi mid-stride, on a crumpled paper texture, with small captions in both corners.", tags: ["Anime", "Typography", "Texture"] },
      { title: "BANKAI.", category: "Poster", ratio: "4/5", image: "images/work/bankai.webp", summary: "Ink, torn paper and one blue haircut.", description: "A Bleach poster in black-and-white paper textures. The only colour is the blue hair, plus a single “BANKAI.” thought bubble.", tags: ["Anime", "Bleach", "Texture"] },
      { title: "Charles Leclerc #16", category: "Poster", ratio: "4/5", image: "images/work/leclerc-16.webp", summary: "A top-down Ferrari on red diagonals.", description: "Minimal Ferrari poster. The car is seen from above on bold red and white diagonals, with a motion trail below it and a small number 16 lockup.", tags: ["F1", "Minimal", "Ferrari"] },
      { title: "Transworld Snowboarding, streak cover", category: "Poster", ratio: "4/5", image: "images/work/snowboarding-streak-cover.webp", summary: "A magazine cover with a pixel-stretch speed trail.", description: "A Transworld SNOWboarding cover mock-up. The rider is cut out with a white outline and trailed by a stretched-pixel streak to sell the speed.", tags: ["Editorial", "Cover", "Photo manipulation"] },
      { title: "YUTA", category: "Poster", ratio: "4/5", image: "images/work/yuta.webp", summary: "Manga ink against a stacked red wordmark.", description: "A black-and-white manga cut-out of Yuta leaning out of a tall red block of stacked letters.", tags: ["Anime", "Jujutsu Kaisen", "Typography"] },
      { title: "DROP IN", category: "Poster", ratio: "4/5", image: "images/work/drop-in.webp", summary: "Big red type, a rider and a ribbon of motion.", description: "Oversized condensed type sits across a snowboarder mid-air, with a multicolour streak running down the slope, a small “hi.” badge and a coordinates footer.", tags: ["Snowboarding", "Typography", "Photo manipulation"] },
      { title: "KOBENI", category: "Poster", ratio: "4/5", image: "images/work/kobeni.webp", summary: "Spray-paint type over a fisheye city.", description: "Kobeni from Chainsaw Man in black-and-white linework over a fisheye city, with a spray-painted red title and a katakana line.", tags: ["Anime", "Manga", "Lettering"] },
      { title: "Momo Ayase, Dandadan", category: "Poster", ratio: "4/5", image: "images/work/momo-dandadan.webp", summary: "Cropped tiles, chalk stars, mirrored type.", description: "Momo split into a grid of cropped tiles on red crumpled paper, with hand-drawn stars and a Chinese pull quote repeated mirrored at the bottom.", tags: ["Anime", "Grid", "Chinese type"] },
      { title: "Transworld Snowboarding, “hi.” cover", category: "Poster", ratio: "4/5", image: "images/work/snowboarding-hi-cover.webp", summary: "A rail slide on a red-and-navy streak.", description: "A second SNOWboarding cover. The rider slides a rail built from the streak effect, with a barcode block and a small “hi.” badge.", tags: ["Editorial", "Cover", "Snowboarding"] },
      { title: "MAKI", category: "Poster", ratio: "4/5", image: "images/work/maki.webp", summary: "Eyes on top, tall red letters below.", description: "A tight crop of Maki's glasses above a heavy red condensed wordmark.", tags: ["Anime", "Jujutsu Kaisen", "Typography"] },
      { title: "reach, visible by choice", category: "Poster", ratio: "4/5", image: "images/work/reach.webp", summary: "A visible grid, styled like a brand lookbook.", description: "A monochrome Jujutsu Kaisen layout built on a visible grid, with a serif wordmark and tiny uppercase labels, like a fashion label's campaign page.", tags: ["Anime", "Grid", "Editorial"] },
      { title: "Select all squares with THIS TOPIC", category: "Poster", ratio: "4/5", image: "images/work/captcha-topic.webp", summary: "A CAPTCHA where the answer is a character.", description: "A parody CAPTCHA over a street-mirror photo, with an anime figure hiding in one of the squares.", tags: ["Anime", "Parody", "Photo manipulation"] },
      { title: "VERSTAPPEN, after dark", category: "Poster", ratio: "4/5", image: "images/work/verstappen-dark.webp", summary: "Three helmets, one name, a lot of red.", description: "A moodier Verstappen poster. Red condensed type fades into the dark behind three cut-out views of the driver in Red Bull gear.", tags: ["F1", "Dark", "Typography"] },
      { title: "Oh shit.", category: "Poster", ratio: "4/5", image: "images/work/oh-shit-clouds.webp", summary: "One manga character, one very long fall.", description: "A manga cut-out in free fall above a sea of clouds, with a single thought bubble.", tags: ["Anime", "Collage", "Photo manipulation"] },
      { title: "Snowberry tiramisu", category: "Poster", ratio: "4/5", image: "images/work/snowberry-tiramisu.webp", summary: "A small menu poster for a Davao café.", description: "A product poster for a strawberry tiramisu: script wordmark, a red ribbon, a short description and the café's handle.", tags: ["Food", "Branding", "Layout"] },

      // ---- Web ----
      { title: "Skilled-Match", category: "Web app", summary: "Clients post jobs on the web. Workers swipe through them on mobile.", description: "A job-matching platform where clients post work through a web app and skilled workers find jobs through a mobile app with a Tinder-style swipe interface.", tags: ["Laravel", "Blade", "Mobile", "Swipe UI"], repo: "https://github.com/jhoncarlnayao/Skilled-Match" },
      { title: "PurrfectPlanner", category: "Web app", summary: "To-dos as tickets, with sticky notes.", description: "A playful productivity tool that turns your to-dos into tickets, complete with subjects, time slots, colors and sticky notes. Built as a PWA with a feline flair.", tags: ["PWA", "HTML", "JavaScript"], repo: "https://github.com/jhoncarlnayao/PurrfectPlanner-" },
      { title: "Readme-Generator", category: "Web app", summary: "A README generator with live preview.", description: "A simple and efficient README generator with a live preview, built for developers who want quick, clean project documentation.", tags: ["HTML", "Live preview"], repo: "https://github.com/jhoncarlnayao/Readme-Generator" },
      { title: "r-sum-.exe", category: "Web app", summary: "No sign-up, no setup. A resume builder that runs.", description: "A resume builder with no sign-up and no setup. Open it and start typing.", tags: ["HTML", "Resume"], repo: "https://github.com/jhoncarlnayao/r-sum-.exe" },
      { title: "DevCard", category: "Web app", summary: "GitHub and LeetCode stats as a profile card.", description: "A web app that generates a shareable profile card from your GitHub and LeetCode profiles.", tags: ["GitHub", "LeetCode", "Web app"] },
      { title: "flip.", category: "Web app", summary: "A split-flap clock that also keeps you focused.", description: "A web app with a split-flap clock, a Pomodoro timer and a typing test.", tags: ["Clock", "Pomodoro", "Typing test"] },
      { title: "BANTAY", category: "Web app", summary: "Attendance tracking, built with Laravel.", description: "An attendance system built with Laravel.", tags: ["Laravel", "PHP"] },
      { title: "Gym Membership System", category: "Web app", summary: "Admin and member dashboards for a gym.", description: "A gym membership management system with separate admin and member dashboards, built with Laravel 12, MySQL and Tailwind with Flowbite.", tags: ["Laravel 12", "MySQL", "Tailwind", "Flowbite"] },
      { title: "YTSave", category: "Web app", summary: "A YouTube downloader.", description: "A YouTube downloader built with Node.js, Express, yt-dlp and ffmpeg.", tags: ["Node.js", "Express", "yt-dlp", "ffmpeg"] },

      // ---- Software & scripts ----
      { title: "AutoHarvest-Minescript", category: "Software & scripts", summary: "Wheat that harvests itself.", description: "A Minescript Python script that detects, harvests and replants wheat in Minecraft, simulating real player clicks.", tags: ["Python", "Minescript", "Minecraft"], repo: "https://github.com/jhoncarlnayao/AutoHarvest-Minescript" },
      { title: "Inventory-Management-System", category: "Software & scripts", summary: "Products, stock levels and full CRUD, in C#.", description: "A C# inventory management system with CRUD functionality for managing products and tracking stock levels.", tags: ["C#", "CRUD"], repo: "https://github.com/jhoncarlnayao/Inventory-Management-System" }
    ]
  },
  skillsLayout: "components", // "components" = Figma component sets on a dotted canvas | "layers" = layers panel + cards
  // level: 1 Learning · 2 Comfortable · 3 Solid · 4 Strong · 5 Expert. `level` and `note` are optional; a plain string also works.
  skills: [
    { group: "Design", items: [
      { name: "Figma",           level: 5, note: "Prototypes, components, auto layout." },
      { name: "Design systems",  level: 4, note: "Tokens, type scales, monochrome UI." },
      { name: "Prototyping",     level: 4 },
      { name: "Tutorial content", level: 3, note: "Figma tips for TikTok and Instagram." }
    ] },
    { group: "Frontend", items: [
      { name: "HTML + CSS",   level: 5 },
      { name: "Tailwind CSS", level: 5, note: "My default for every build." },
      { name: "JavaScript",   level: 4 },
      { name: "React",        level: 3, note: "Small, focused tools." },
      { name: "PWA",          level: 4, note: "Offline-first, localStorage-driven." }
    ] },
    { group: "Backend", items: [
      { name: "Laravel", level: 3, note: "For larger systems." },
      { name: "Python",  level: 3, note: "Terminal projects." }
    ] },
    { group: "Soft skills", items: [
      { name: "Listening to feedback" },
      { name: "Saying “that’s a feature”" },
      { name: "Coffee" }
    ] }
  ],
  services: [
    { title: "Interface design",  text: "Screens that look good and make sense. In that order? No, both at once." },
    { title: "Design systems",    text: "Components, tokens and docs, so the 14 shades of blue become one." },
    { title: "Clickable prototypes", text: "Test ideas in Figma before anyone writes a line of code (or a line of regret)." }
  ],
  experienceLayout: "history", // "history" = Figma version history panel | "timeline" = simple vertical timeline
  experience: [ // students: use education, internships, awards
    { period: "2023 – Present", role: "Role or degree", org: "Company or school", text: "What you did, plus one honest detail, like surviving a rebrand." },
    { period: "2021 – 2023",    role: "Role or degree", org: "Company or school", text: "What you did or learned. Extra credit for a stakeholder anecdote." }
  ],
  socials: [ // entries without a url are hidden
    { label: "Figma",     url: "https://www.figma.com" },
    { label: "LinkedIn",  url: "https://www.linkedin.com" },
    { label: "Instagram", url: "https://www.instagram.com" }
  ],
  footer: {
    tagline: "Designing in Figma and apologizing to developers for the spacing.",
    socialsTitle: "Socials",
    cta: { // the "Let's work together" button opens a popup listing these channels
      label: "Let's work together",
      text: "Pick whichever you check most. I reply faster than a design review thread.",
      channels: [ // use your own details; entries without a url are hidden
        { label: "Google",    detail: "hello@example.com", url: "mailto:hello@example.com" },
        { label: "TikTok",    detail: "@yourhandle",       url: "https://www.tiktok.com" },
        { label: "Instagram", detail: "@yourhandle",       url: "https://www.instagram.com" },
        { label: "GitHub",    detail: "yourhandle",        url: "https://github.com" }
      ]
    },
    sign: "All rights reserved. Layers not included.",
    // `source`: "sections" | "services" | "projects" fills a column automatically, or give `links: [{ label, href }]`.
    columns: [
      { title: "Pages",    source: "sections" },
      { title: "Services", source: "services" },
      { title: "Projects", source: "projects" }
    ],
    legal: [] // e.g. [{ label: "Privacy Policy", href: "privacy.html" }]
  }
};

/* ==========================================================================
   Helpers
   ========================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = { get: k => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
const safeUrl = u => /^(https?:|mailto:|#)/i.test(u || "") ? u : "";
const figmaUrl = u => /^https:\/\/([\w-]+\.)?figma\.com\//i.test(u || "") ? u : "";
const enabled = CONFIG.sections.filter(s => s.enabled);
const sec = id => CONFIG.sections.find(s => s.id === id);

const btn = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition";
const btnPrimary = `${btn} bg-accent text-onaccent hover:brightness-110`;
const btnGhost = `${btn} border border-line hover:bg-fg hover:text-bg`;
const fPrimary = "inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-medium text-onaccent transition hover:brightness-110";
const fGhost = "inline-flex items-center justify-center gap-2 rounded-md border border-line px-6 py-3 font-medium transition hover:bg-fg hover:text-bg";
const wrap = "mx-auto max-w-[1500px] px-5 md:px-10";
const ratioOf = p => { const [a, b] = String(p.ratio || "4/3").split("/").map(Number); return a > 0 && b > 0 ? a / b : 4 / 3; };
const ratioCss = p => `aspect-ratio:${ratioOf(p)}`;
const reveal = "data-reveal";

/* ==========================================================================
   Theme
   ========================================================================== */
const themeBg = { light: "#eceef2", dark: "#0d1117" };   // used for the browser's theme-color meta

// Flat palettes: warm or neutral paper, one accent. No blues.
const PALETTES = {
  // Figma's own UI neutrals (light #f5f5f5 / dark #1e1e1e) with Figma's purple or brand red-orange as the accent
  figma:       { accent: "#9747ff", footer: "#121212", light: { bg: "#f5f5f5", fg: "#1e1e1e", mute: "#6b6b6b" }, dark: { bg: "#1e1e1e", fg: "#f5f5f5", mute: "#b3b3b3" } },
  "figma-red": { accent: "#dd3f16", footer: "#121212", light: { bg: "#f5f5f5", fg: "#1e1e1e", mute: "#6b6b6b" }, dark: { bg: "#1e1e1e", fg: "#f5f5f5", mute: "#b3b3b3" } },
  ember: { accent: "#d93a0b", footer: "#0e0b09", light: { bg: "#f3f0ea", fg: "#16130f", mute: "#6b645a" }, dark: { bg: "#14110e", fg: "#f3f0ea", mute: "#a69d90" } },
  moss:  { accent: "#1a7f45", footer: "#0a0e0b", light: { bg: "#eef0ea", fg: "#10150f", mute: "#5d665a" }, dark: { bg: "#0f1410", fg: "#eef0ea", mute: "#9aa597" } },
  rose:  { accent: "#e11d48", footer: "#0d0809", light: { bg: "#f4eeee", fg: "#1a1213", mute: "#6e5f61" }, dark: { bg: "#150f10", fg: "#f4eeee", mute: "#a89a9c" } },
  sand:  { accent: "#b45309", footer: "#0e0c08", light: { bg: "#f1ede4", fg: "#1a1712", mute: "#6a6354" }, dark: { bg: "#15130e", fg: "#f1ede4", mute: "#a59d8b" } }
};

function applyPalette() {
  const P = PALETTES[CONFIG.theme.palette];
  if (!P) return null;
  const rgba = (hex, a) => { const h = hex.replace("#", ""); return `rgba(${[0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)).join(",")},${a})`; };
  const set = (t, a) => `--bg:${t.bg};--fg:${t.fg};--mute:${t.mute};--line:${rgba(t.fg, a)}`;
  const css = `
    :root{${set(P.light, .16)}}
    .dark{${set(P.dark, .18)}}
    .inv{${set(P.dark, .18)}}
    .dark .inv{${set(P.light, .16)}}
    .footer-panel{--bg:${P.footer};--fg:${P.dark.fg};--mute:${P.dark.mute};--line:${rgba(P.dark.fg, .28)};background:color-mix(in srgb,rgb(var(--accent-rgb)) 20%,${P.footer})}`;
  const el = document.createElement("style");
  el.id = "palette"; el.textContent = css;
  document.head.appendChild(el);
  themeBg.light = P.light.bg; themeBg.dark = P.dark.bg;
  return P;
}

function applyAccent(P) {
  const hex = (CONFIG.theme.accent || P?.accent || "#2f4bff").replace("#", "");
  const full = hex.length === 3 ? hex.replace(/./g, c => c + c) : hex;
  const [r, g, b] = [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16));
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const root = document.documentElement.style;
  root.setProperty("--accent-rgb", `${r} ${g} ${b}`);
  root.setProperty("--on-accent", lum > 0.6 ? "#0d1117" : "#ffffff");
}

function setMode(dark, persist) {
  document.documentElement.classList.toggle("dark", dark);
  const t = $("#theme-toggle");
  t.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  $('meta[name="theme-color"]').content = dark ? themeBg.dark : themeBg.light;
  if (persist) store.set("theme", dark ? "dark" : "light");
}

function initTheme() {
  const saved = store.get("theme") || CONFIG.theme.defaultMode;
  const dark = saved === "dark" || (saved === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  setMode(dark, false);
  $("#theme-toggle").addEventListener("click", () => setMode(!document.documentElement.classList.contains("dark"), true));
}

/* ==========================================================================
   Section builders
   ========================================================================== */
const heading = (id, extra = "") => `
  <div class="mb-12 md:mb-20 ${extra}">
    <p class="mb-3 text-sm text-mute"><span aria-hidden="true">#</span> ${esc(sec(id).label)}</p>
    <h2 class="display text-5xl sm:text-7xl md:text-[8rem]">${esc(sec(id).title)}</h2>
  </div>`;

function hero() {
  const { site, hero: h } = CONFIG;
  const lines = h.headline.map((l, i) => `<span class="hero-line"><span style="--i:${i}">${esc(l)}</span></span>`).join("");
  return `
  <section id="home" aria-label="Introduction" class="relative flex flex-col justify-end overflow-hidden pb-10 pt-48 md:min-h-screen md:pt-32">
    ${(h.cursors || []).map((c, i) => {
      const notes = c.notes || [c.note || ""], k = i % 2 ? -1 : 1;
      const mob = c.m || [{ x: "6%", y: "5.25rem" }, { x: "18%", y: "8rem" }][i] || { x: "10%", y: "6rem" };
      const vars = (c.path || [[48, 34], [-26, 56], [30, -18]]).map(([x, y], n) => `--x${n + 1}:${x * k}px;--y${n + 1}:${y}px`).join(";");
      return `<div aria-hidden="true" class="cursor pointer-events-none absolute z-10" style="left:${esc(c.x)};top:${esc(c.y)};--mx:${esc(mob.x)};--my:${esc(mob.y)};--dur:${11 + i * 3}s;--delay:${0.4 + i * 0.7}s;${vars}"><span class="cur-ring" style="border-color:${esc(c.color)}"></span><svg width="20" height="20" viewBox="0 0 24 24" fill="${esc(c.color)}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"><path d="M4 3l16 7-7 2-2 7z"/></svg><span class="-mt-1 ml-4 block w-max rounded-full rounded-tl-none px-3 py-1 text-sm text-white max-md:px-2.5 max-md:text-xs" style="background:${esc(c.color)}">${esc(c.name)}: <span class="cur-note" data-notes="${esc(JSON.stringify(notes))}">${esc(notes[0])}</span></span></div>`;
    }).join("")}
    <div class="${wrap} w-full">
      <div class="mb-8 mt-6 flex flex-wrap items-center gap-x-3 gap-y-4 text-sm text-mute">
        ${site.status ? `<span class="sel"><span class="sel-tag">${esc(site.statusLabel || "Availability")}</span>${esc(site.status)}<i class="sel-h" style="left:-4px;top:-4px"></i><i class="sel-h" style="right:-4px;top:-4px"></i><i class="sel-h" style="left:-4px;bottom:-4px"></i><i class="sel-h" style="right:-4px;bottom:-4px"></i></span>` : ""}
        <span>${esc(site.role)}</span>${site.location ? `<span>${esc(site.location)}</span>` : ""}
      </div>
      <h1 class="display text-[clamp(3.25rem,13.5vw,13rem)] pb-2">${lines}</h1>
      <div class="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:items-end">
        <p class="max-w-xl text-lg text-mute md:text-xl">${esc(h.subtext)}</p>
        <div class="flex flex-wrap gap-3">
          ${h.primaryCta?.label ? `<a class="${fPrimary}" href="${esc(h.primaryCta.href)}">${esc(h.primaryCta.label)}</a>` : ""}
          ${h.secondaryCta?.label ? `<a class="${fGhost}" href="${esc(h.secondaryCta.href)}">${esc(h.secondaryCta.label)}</a>` : ""}
        </div>
      </div>
    </div>
  </section>`;
}

function about() {
  const a = CONFIG.about;
  return `
  <section id="about" class="ruler inv bg-bg py-24 text-fg md:py-40">
    <div class="${wrap}">
      ${heading("about")}
      <div class="grid gap-12 md:grid-cols-12">
        <div class="space-y-6 text-xl leading-relaxed md:col-span-7 md:text-3xl md:leading-snug" ${reveal}>
          ${a.paragraphs.map((p, i) => `<p class="${i ? "text-mute text-lg md:text-xl" : ""}">${esc(p)}</p>`).join("")}
        </div>
        ${a.stats?.length ? `<aside aria-label="Quick facts" class="border border-line md:col-span-4 md:col-start-9" ${reveal}>
          <div class="border-b border-line px-4 py-2 text-sm text-mute">${esc(a.statsTitle || "Properties")}</div>
          <dl>${a.stats.map(x => `<div class="flex items-baseline justify-between gap-4 border-b border-line px-4 py-4 last:border-b-0"><dt class="text-mute">${esc(x.label)}</dt><dd class="display text-4xl">${esc(x.value)}</dd></div>`).join("")}</dl>
        </aside>` : ""}
      </div>
    </div>
  </section>`;
}

/* ==========================================================================
   Static Figma-style side panels for #work (decorative, not interactive)
   ========================================================================== */
function figmaPanels() {
  const ic = (d, c = "h-3.5 w-3.5") => `<svg class="${c} shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const P = {
    frame: '<path d="M7 4v16M17 4v16M4 7h16M4 17h16"/>',
    comp: '<path d="M12 3l8 9-8 9-8-9z"/>',
    text: '<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',
    note: '<path d="M4 4h16v12h-6l-4 4v-4H4z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    page: '<path d="M6 3h8l4 4v14H6z"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    // alignment row
    a1: '<path d="M4 4v16"/><rect x="8" y="7" width="12" height="4"/><rect x="8" y="13" width="7" height="4"/>',
    a2: '<path d="M12 4v16"/><rect x="5" y="7" width="14" height="4"/><rect x="8" y="13" width="8" height="4"/>',
    a3: '<path d="M20 4v16"/><rect x="4" y="7" width="12" height="4"/><rect x="9" y="13" width="7" height="4"/>',
    a4: '<path d="M4 4h16"/><rect x="7" y="8" width="4" height="12"/><rect x="13" y="8" width="4" height="7"/>',
    a5: '<path d="M4 12h16"/><rect x="7" y="5" width="4" height="14"/><rect x="13" y="8" width="4" height="8"/>',
    a6: '<path d="M4 20h16"/><rect x="7" y="4" width="4" height="12"/><rect x="13" y="9" width="4" height="7"/>'
  };
  const kind = t => ["buttons", "tokens", "swatches"].includes(t) ? "comp" : t === "text" ? "text" : t === "sticky" || t === "comment" ? "note" : t === "arrow" ? "arrow" : "frame";
  const rows = [
    ...CONFIG.projects.items.map((p, i) => ({ n: p.title, k: "frame", sel: i === 0 })),
    ...(CONFIG.projects.extras || []).map(x => ({ n: x.name || x.text || x.type, k: kind(x.type) }))
  ].slice(0, 18);
  const layer = r => `<div class="flex items-center gap-2 px-3 py-1 ${r.sel ? "bg-accent/20" : ""}">${ic(P[r.k])}<span class="truncate">${esc(r.n)}</span><span class="ml-auto opacity-40">${ic(P.eye, "h-3 w-3")}</span></div>`;
  const page = (n, on) => `<div class="flex items-center gap-2 px-3 py-1 ${on ? "bg-accent/20" : "text-mute"}"><span class="w-3.5">${on ? ic(P.check) : ""}</span><span class="truncate">${esc(n)}</span></div>`;
  const hex = String(CONFIG.theme.accent || "#2f4bff").replace("#", "").toUpperCase();
  const field = (l, v) => `<div class="flex items-center gap-2 rounded border border-line px-2 py-1.5"><span class="w-3 text-mute">${l}</span><span>${v}</span></div>`;
  const head = (t, plus = true) => `<div class="mb-2 flex items-center justify-between"><span class="font-medium">${t}</span>${plus ? `<span class="opacity-60">${ic(P.plus)}</span>` : ""}</div>`;
  const sect = "border-b border-line px-3 py-3";

  const left = `
  <aside aria-hidden="true" class="hidden w-60 shrink-0 select-none flex-col overflow-hidden border border-r-0 border-line bg-bg text-xs lg:flex">
    <div class="flex items-center gap-2 border-b border-line px-3 py-2.5">${ic(ICONS.figma, "h-4 w-4")}<span class="font-medium">${esc(CONFIG.site.brand)}</span><span class="text-mute">/ Portfolio</span><span class="ml-auto opacity-60">${ic(P.chev)}</span></div>
    <div class="flex border-b border-line"><span class="border-b-2 border-accent px-3 py-2 font-medium">Layers</span><span class="px-3 py-2 text-mute">Assets</span></div>
    <div class="border-b border-line py-1">
      <p class="flex items-center justify-between px-3 py-1.5 text-mute"><span>Pages</span>${ic(P.plus)}</p>
      ${page("Cover", false)}${page("Work", true)}${page("Archive", false)}
    </div>
    <div class="min-h-0 flex-1 overflow-hidden py-1">
      <p class="px-3 py-1.5 text-mute">Layers</p>
      ${rows.map(layer).join("")}
    </div>
  </aside>`;

  const right = `
  <aside aria-hidden="true" class="hidden w-64 shrink-0 select-none flex-col overflow-hidden border border-l-0 border-line bg-bg text-xs lg:flex">
    <div class="flex items-center gap-1 border-b border-line pr-3">
      <span class="border-b-2 border-accent px-3 py-2.5 font-medium">Design</span><span class="px-2 py-2.5 text-mute">Prototype</span>
      <span class="ml-auto flex items-center gap-1 text-mute">100%${ic(P.chev, "h-3 w-3")}</span>
    </div>
    <div class="flex items-center justify-between border-b border-line px-3 py-2">
      <span class="flex -space-x-1.5"><span class="grid h-5 w-5 place-items-center rounded-full border border-bg bg-accent text-[10px] text-onaccent">${esc(CONFIG.site.brand.slice(0, 1))}</span><span class="grid h-5 w-5 place-items-center rounded-full border border-bg text-[10px]" style="background:#d6336c;color:#fff">C</span><span class="grid h-5 w-5 place-items-center rounded-full border border-bg text-[10px]" style="background:#0b7285;color:#fff">D</span></span>
      <span class="rounded bg-accent px-3 py-1 font-medium text-onaccent">Share</span>
    </div>
    <div class="flex items-center justify-between border-b border-line px-3 py-2.5 opacity-80">${["a1", "a2", "a3", "a4", "a5", "a6"].map(k => ic(P[k], "h-4 w-4")).join("")}</div>
    <div class="${sect}">
      ${head("Frame", false)}
      <div class="grid grid-cols-2 gap-2">${field("X", 120)}${field("Y", 100)}${field("W", 340)}${field("H", 300)}${field("∠", "0°")}${field("◜", 0)}</div>
    </div>
    <div class="${sect}">
      ${head("Auto layout")}
      <div class="flex items-center gap-2 text-mute">${ic(P.lock)}<span>Clip content</span></div>
    </div>
    <div class="${sect}">
      ${head("Fill")}
      <div class="flex items-center gap-2 rounded border border-line px-2 py-1.5"><span class="h-4 w-4 rounded-sm border border-line" style="background:#${esc(hex)}"></span><span>${esc(hex)}</span><span class="ml-auto text-mute">100%</span></div>
    </div>
    <div class="${sect}">
      ${head("Stroke")}
      <div class="flex items-center gap-2 rounded border border-line px-2 py-1.5"><span class="h-4 w-4 rounded-sm border border-line" style="background:var(--line)"></span><span>1 px</span><span class="ml-auto text-mute">Inside</span></div>
    </div>
    <div class="${sect}">${head("Effects")}<p class="text-mute">Drop shadow</p></div>
    <div class="px-3 py-3">${head("Export")}<div class="grid grid-cols-[1fr_1fr] gap-2">${field("", "1x")}${field("", "PNG")}</div></div>
  </aside>`;
  return { left, right };
}

function work() {
  const cats = [...new Set(CONFIG.projects.items.map(p => p.category).filter(Boolean))];
  const fig = figmaPanels();
  return `
  <section id="work" class="ruler py-24 md:py-40">
    <div class="${wrap}">
      <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">${heading("work", "!mb-0")}</div>
      <div class="mb-8 mt-10 flex flex-wrap items-center justify-between gap-4">
        <div id="filters" role="group" aria-label="Filter projects by category" class="inline-flex flex-wrap gap-1 rounded-lg border border-line p-1">
          ${[CONFIG.projects.allLabel, ...cats].map((c, i) => `<button type="button" data-filter="${i ? esc(c) : "*"}" aria-pressed="${i === 0}" class="tool text-sm">${esc(c)}</button>`).join("")}
        </div>
        <div id="view-toggle" role="group" aria-label="Layout" class="inline-flex gap-1 rounded-lg border border-line p-1">
          <button type="button" data-view="canvas" aria-pressed="true" class="tool text-sm">Canvas</button>
          <button type="button" data-view="grid" aria-pressed="false" class="tool text-sm">Grid</button>
        </div>
      </div>
      <div id="canvas-wrap" class="flex">
        ${fig.left}
        <div id="canvas" tabindex="0" role="group" aria-label="Design canvas. H for hand tool, V for move tool, Ctrl and scroll to zoom, arrow keys move a focused frame, Alt and arrow keys resize it, Enter opens it." class="relative h-[calc(100dvh-6rem)] max-h-[900px] min-h-[480px] min-w-0 flex-1 overflow-hidden border border-line" style="background:color-mix(in srgb,var(--fg) 4%,var(--bg));touch-action:none">
          <div id="world" class="absolute left-0 top-0" style="transform-origin:0 0"></div>
          <p class="pointer-events-none absolute bottom-3 left-3 z-10 max-w-[26rem] text-sm text-mute">Click a frame to select it, drag the handles to resize (Shift keeps ratio, Alt scales from center), double-click to open. H pans, V moves, F full view.</p>
          <div class="cv-bar absolute left-1/2 top-4 z-20 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-1 rounded-lg border border-line bg-bg p-1 shadow-lg" role="toolbar" aria-label="Canvas tools">
            <button type="button" class="tool inline-flex items-center gap-2 text-sm" data-tool="move" aria-pressed="true" aria-label="Move tool (V)" title="Move (V)"><svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 3l16 8-7 2-3 7z"/></svg><span class="hidden sm:inline">Move</span></button>
            <button type="button" class="tool inline-flex items-center gap-2 text-sm" data-tool="hand" aria-pressed="false" aria-label="Hand tool (H)" title="Hand (H)"><svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-4 0v-1a2 2 0 0 0-4 0v1a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-2a2 2 0 0 0-4 0"/></svg><span class="hidden sm:inline">Hand</span></button>
            <span class="mx-1 h-5 w-px bg-line" aria-hidden="true"></span>
            <button type="button" class="tool" data-zoom="-1" aria-label="Zoom out" title="Zoom out (-)">−</button>
            <span id="zoom-readout" class="w-12 text-center text-sm">100%</span>
            <button type="button" class="tool" data-zoom="1" aria-label="Zoom in" title="Zoom in (+)">+</button>
            <button type="button" class="tool text-sm" data-fit aria-label="Fit projects in view" title="Fit (0)">Fit</button>
            <span class="mx-1 h-5 w-px bg-line" aria-hidden="true"></span>
            <button type="button" class="tool inline-flex items-center gap-2 text-sm" data-full aria-pressed="false" aria-label="Full view (F)" title="Full view (F)"><svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg><span id="full-label">Full view</span></button>
          </div>
        </div>
        ${fig.right}
      </div>
      <ul id="project-grid" class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"></ul>
      <p id="project-live" class="sr-only" aria-live="polite"></p>
    </div>
  </section>`;
}

function projectCard(p, i) {
  const visual = p.image
    ? `<img src="${esc(safeUrl(p.image) || p.image)}" alt="" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105">`
    : `<div class="grid h-full w-full place-items-end p-6 transition duration-500 group-hover:scale-105" style="background:linear-gradient(${135 + i * 35}deg,rgb(var(--accent-rgb)) 0%,color-mix(in srgb,rgb(var(--accent-rgb)) ${70 - i * 12}%,var(--fg)) 100%)"><span class="display text-7xl text-onaccent opacity-90 md:text-8xl">${esc(p.title.slice(0, 1))}</span></div>`;
  return `
  <li class="project" data-category="${esc(p.category)}">
    <button type="button" data-project="${i}" class="group block w-full text-left" aria-haspopup="dialog">
      <p class="mb-2 text-sm text-mute"><span aria-hidden="true">#</span> ${esc(p.category)}</p>
      <div class="frame">
        <div class="relative overflow-hidden border border-line" style="${ratioCss(p)}">${visual}${figmaUrl(p.figma) ? '<span class="absolute left-3 top-3 rounded-md bg-fg px-3 py-1 text-xs font-medium text-bg">Live Figma file</span>' : ""}</div>
        <i class="sel-h" style="left:-4px;top:-4px"></i><i class="sel-h" style="right:-4px;top:-4px"></i><i class="sel-h" style="left:-4px;bottom:-4px"></i><i class="sel-h" style="right:-4px;bottom:-4px"></i>
        <span class="frame-size" aria-hidden="true"></span>
      </div>
      <div class="mt-5 flex items-baseline justify-between gap-4 border-b border-line pb-4">
        <h3 class="text-xl font-medium tracking-tight md:text-2xl">${esc(p.title)}</h3>
        <span class="shrink-0 text-sm text-mute">${esc(p.year)}</span>
      </div>
      <p class="mt-3 max-w-md text-mute">${esc(p.summary)}</p>
    </button>
  </li>`;
}

const LEVELS = ["Learning", "Comfortable", "Solid", "Strong", "Expert"];

function skillsLayers() {
  const groups = CONFIG.skills.map(g => ({ ...g, items: (g.items || []).map(x => typeof x === "string" ? { name: x } : x) }));
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const folder = '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>';
  const layer = (key, label, count, on) => `<button type="button" data-sk="${key}" aria-pressed="${on}" class="tool flex w-full items-center gap-3 text-left !py-2.5 text-base">${folder}<span class="min-w-0 flex-1 truncate">${esc(label)}</span><span class="text-sm opacity-70">${count}</span></button>`;
  const card = (x, g, gi, i) => {
    const lv = Math.min(5, Math.max(0, Math.round(+x.level || 0)));
    return `
    <li data-skg="${gi}" class="sk-card group">
      <div class="frame h-full border border-line p-4">
        <div class="flex items-start justify-between gap-3">
          <h3 class="text-lg font-medium leading-tight">${esc(x.name)}</h3>
          <span class="shrink-0 text-xs text-mute"><span aria-hidden="true">#</span> ${esc(g.group)}</span>
        </div>
        ${lv ? `<div class="mt-4 flex gap-1" role="img" aria-label="${LEVELS[lv - 1]}, level ${lv} of 5">${[0, 1, 2, 3, 4].map(n => `<i class="sk-seg" style="--n:${n}"${n < lv ? " data-on" : ""}></i>`).join("")}</div>
        <p class="mt-2 flex justify-between text-xs text-mute"><span>${LEVELS[lv - 1]}</span><span>${lv}/5</span></p>` : ""}
        ${x.note ? `<p class="mt-3 text-sm text-mute">${esc(x.note)}</p>` : ""}
        <i class="sel-h" style="left:-4px;top:-4px"></i><i class="sel-h" style="right:-4px;top:-4px"></i><i class="sel-h" style="left:-4px;bottom:-4px"></i><i class="sel-h" style="right:-4px;bottom:-4px"></i>
      </div>
    </li>`;
  };
  return `
  <section id="skills" class="ruler inv bg-bg py-24 text-fg md:py-40">
    <div class="${wrap}">
      ${heading("skills")}
      <div class="grid gap-6 md:grid-cols-12" ${reveal}>
        <aside aria-label="Skill groups" class="border border-line md:col-span-4 md:self-start">
          <div class="flex items-center justify-between border-b border-line px-4 py-2 text-sm text-mute"><span>${esc(CONFIG.skillsPanelTitle || "Layers")}</span><span>${total}</span></div>
          <div id="skill-filters" role="group" aria-label="Filter skills by group" class="flex flex-col gap-1 p-2">
            ${layer("*", CONFIG.skillsAllLabel || "All skills", total, true)}
            ${groups.map((g, gi) => layer(gi, g.group, g.items.length, false)).join("")}
          </div>
        </aside>
        <ul class="grid content-start gap-3 sm:grid-cols-2 md:col-span-8 xl:grid-cols-3">
          ${groups.map((g, gi) => g.items.map((x, i) => card(x, g, gi, i)).join("")).join("")}
        </ul>
      </div>
      <p id="skills-live" class="sr-only" aria-live="polite"></p>
    </div>
  </section>`;
}

function skillsComponents() {
  const groups = CONFIG.skills.map(g => ({ ...g, items: (g.items || []).map(x => typeof x === "string" ? { name: x } : x) }));
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const ic = (d, c = "h-4 w-4") => `<svg class="${c} shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const diamond = '<path d="M12 3l8 9-8 9-8-9z"/>';
  const inst = x => {
    const lv = Math.min(5, Math.max(0, Math.round(+x.level || 0)));
    const tip = [lv ? `${LEVELS[lv - 1]} · ${lv}/5` : "", x.note || ""].filter(Boolean);
    return `
    <li class="sk-inst group relative" tabindex="0"${lv ? ` aria-label="${esc(x.name)}, ${LEVELS[lv - 1]}, level ${lv} of 5"` : ""}>
      ${tip.length ? `<span class="sk-tip" role="tooltip">${tip.map((t, i) => i ? `<span class="mt-0.5 block opacity-70">${esc(t)}</span>` : `<span class="block font-medium">${esc(t)}</span>`).join("")}</span>` : ""}
      <div class="frame flex items-center gap-2 border border-line bg-bg px-3 py-2.5">
        <span class="text-accent">${ic(diamond)}</span>
        <span class="text-base md:text-lg">${esc(x.name)}</span>
        ${lv ? `<span class="ml-1 flex gap-0.5" aria-hidden="true">${[0, 1, 2, 3, 4].map(n => `<i class="sk-pip" style="--n:${n}"${n < lv ? " data-on" : ""}></i>`).join("")}</span>` : ""}
        <i class="sel-h" style="left:-4px;top:-4px"></i><i class="sel-h" style="right:-4px;top:-4px"></i><i class="sel-h" style="left:-4px;bottom:-4px"></i><i class="sel-h" style="right:-4px;bottom:-4px"></i>
      </div>
    </li>`;
  };
  const tools = [['<path d="M4 3l16 8-7 2-3 7z"/>', true], ['<path d="M7 4v16M17 4v16M4 7h16M4 17h16"/>'], ['<rect x="4" y="4" width="16" height="16" rx="1"/>'], ['<circle cx="12" cy="12" r="8"/>'], ['<path d="M5 6V4h14v2M12 4v16M9 20h6"/>'], ['<path d="M4 4h16v12h-6l-4 4v-4H4z"/>']];
  return `
  <section id="skills" class="ruler inv bg-bg py-24 text-fg md:py-40">
    <div class="${wrap}">
      ${heading("skills")}
      <div class="sk-board border border-line p-5 pt-12 md:p-10 md:pt-16" ${reveal}>
        <div class="mb-10 flex items-center justify-between text-sm text-mute"><span><span aria-hidden="true">#</span> Assets / Components</span><span>${groups.length} sets · ${total} variants</span></div>
        <div class="grid gap-x-10 gap-y-16 md:grid-cols-2">
          ${groups.map(g => `
          <div class="sk-set relative">
            <span class="sk-set-name">${ic(diamond, "h-3.5 w-3.5")}${esc(g.group)}<span class="opacity-60">${g.items.length}</span></span>
            <ul class="flex flex-wrap gap-3 border border-dashed border-accent p-5">${g.items.map(inst).join("")}</ul>
          </div>`).join("")}
        </div>
      </div>
      <div class="mx-auto mt-6 flex w-max items-center gap-1 rounded-lg border border-line bg-bg p-1" aria-hidden="true">
        ${tools.map(([d, on]) => `<span class="grid h-9 w-9 place-items-center rounded-md ${on ? "bg-accent text-onaccent" : "text-mute"}">${ic(d, "h-5 w-5")}</span>`).join("")}
      </div>
    </div>
  </section>`;
}

function skills() { return CONFIG.skillsLayout === "layers" ? skillsLayers() : skillsComponents(); }

function services() {
  return `
  <section id="services" class="ruler py-24 md:py-40">
    <div class="${wrap}">
      ${heading("services")}
      <ul class="border border-line">
        ${CONFIG.services.map(x => `
        <li class="group grid items-center gap-3 border-b border-line px-5 py-8 transition last:border-b-0 hover:bg-accent hover:text-onaccent md:grid-cols-12 md:gap-8 md:py-10" ${reveal}>
          <h3 class="flex items-center gap-4 text-3xl font-medium tracking-tight md:col-span-5 md:text-5xl"><svg class="h-6 w-6 shrink-0 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 8h16M4 16h16M8 4v16M16 4v16"/></svg>${esc(x.title)}</h3>
          <p class="text-lg text-mute transition group-hover:text-onaccent md:col-span-6 md:col-start-7">${esc(x.text)}</p>
        </li>`).join("")}
      </ul>
    </div>
  </section>`;
}

function experienceTimeline() {
  return `
  <section id="experience" class="ruler inv bg-bg py-24 text-fg md:py-40">
    <div class="${wrap}">
      ${heading("experience")}
      <ol class="ml-2 border-l border-line">
        ${CONFIG.experience.map(e => `
        <li class="relative grid gap-2 pb-12 pl-8 last:pb-0 md:grid-cols-12 md:gap-8" ${reveal}>
          <span aria-hidden="true" class="absolute -left-[5px] top-2 h-[9px] w-[9px] border border-accent bg-bg"></span>
          <p class="text-mute md:col-span-3">${esc(e.period)}</p>
          <div class="md:col-span-4"><h3 class="text-2xl font-medium">${esc(e.role)}</h3><p class="text-mute">${esc(e.org)}</p></div>
          <p class="text-lg text-mute md:col-span-5">${esc(e.text)}</p>
        </li>`).join("")}
      </ol>
    </div>
  </section>`;
}

function experienceHistory() {
  const list = CONFIG.experience, n = list.length;
  const ic = (d, c = "h-4 w-4") => `<svg class="${c} shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const who = CONFIG.site.name || CONFIG.site.brand || "";
  const row = (e, i) => `
    <li class="ex-ver relative py-7 pl-14 pr-5 md:grid md:grid-cols-12 md:gap-8" ${reveal}>
      <span aria-hidden="true" class="ex-dot${i === 0 ? " cur" : ""}"></span>
      <div class="md:col-span-3">
        <p class="text-lg"><time>${esc(e.period)}</time></p>
        <p class="mt-2 flex flex-wrap items-center gap-2 text-xs">
          ${i === 0 ? '<span class="rounded bg-accent px-2 py-0.5 font-medium text-onaccent">Current version</span>' : `<span class="rounded border border-line px-2 py-0.5 text-mute">Version ${n - i}</span>`}
        </p>
        <p class="mt-3 flex items-center gap-2 text-xs text-mute"><span aria-hidden="true" class="grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-medium text-onaccent">${esc(who.slice(0, 1) || "•")}</span>${esc(who)}</p>
      </div>
      <div class="mt-4 md:col-span-4 md:mt-0"><h3 class="text-2xl font-medium">${esc(e.role)}</h3><p class="text-mute">${esc(e.org)}</p></div>
      <p class="mt-3 text-lg text-mute md:col-span-5 md:mt-0">${esc(e.text)}</p>
    </li>`;
  return `
  <section id="experience" class="ruler inv bg-bg py-24 text-fg md:py-40">
    <div class="${wrap}">
      ${heading("experience")}
      <div class="border border-line">
        <div class="flex items-center justify-between border-b border-line px-5 py-3 text-sm">
          <span class="flex items-center gap-2 font-medium">${ic('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>')}Version history</span>
          <span class="text-mute">Autosaved · ${n} ${n === 1 ? "version" : "versions"}</span>
        </div>
        <ol>${list.map(row).join("")}</ol>
      </div>
    </div>
  </section>`;
}

function experience() { return CONFIG.experienceLayout === "timeline" ? experienceTimeline() : experienceHistory(); }

const builders = { about, work, skills, services, experience };

/* ==========================================================================
   Navigation, footer, modal
   ========================================================================== */
function renderChrome() {
  const { site, socials } = CONFIG;
  $("#brand").innerHTML = `<span class="mr-2 text-accent" aria-hidden="true">#</span>${esc(site.brand)}`;
  $("#nav-desktop").innerHTML = enabled.map(s => `<li><a data-nav="${s.id}" href="#${s.id}" class="tool block">${esc(s.label)}</a></li>`).join("");
  $("#nav-mobile").innerHTML = enabled.map(s => `<li class="border-b border-line"><a data-nav="${s.id}" href="#${s.id}" class="block py-4">${esc(s.label)}</a></li>`).join("");
  renderFooter();
}

const ICONS = {
  google: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M22 6l-10 7L2 6"/>',
  tiktok: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><path d="M9.75 15.02 15.5 11.75 9.75 8.48z"/>'
};
const socialIcon = label => {
  const l = label.toLowerCase().trim(), k = l === "x" ? "twitter" : Object.keys(ICONS).find(k => l.includes(k));
  return k ? `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>` : `<span aria-hidden="true" class="text-sm font-medium">${esc(label.slice(0, 2))}</span>`;
};
const extAttrs = u => /^https?:/i.test(u) ? ' target="_blank" rel="noopener noreferrer"' : "";

function footerLinks(c) {
  const on = id => sec(id)?.enabled;
  if (c.source === "sections") return enabled.map(s => ({ label: s.label, href: "#" + s.id }));
  if (c.source === "services") return on("services") ? CONFIG.services.map(s => ({ label: s.title, href: "#services" })) : [];
  if (c.source === "projects") return on("work") ? CONFIG.projects.items.map(p => ({ label: p.title, href: "#work" })) : [];
  return c.links || [];
}

function renderFooter() {
  const { site, footer: f, socials } = CONFIG;
  const cols = f.columns.map(c => ({ title: c.title, links: footerLinks(c).filter(l => l.label && safeUrl(l.href)) })).filter(c => c.links.length);
  const soc = socials.filter(s => safeUrl(s.url));
  const channels = (f.cta?.channels || []).filter(c => c.label && safeUrl(c.url));
  const legal = (f.legal || []).filter(l => l.label && safeUrl(l.href));
  $("#footer").innerHTML = `
  <div class="footer-panel relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem]">
    <span aria-hidden="true" class="display pointer-events-none absolute bottom-0 left-[-.04em] select-none whitespace-nowrap leading-[.75]" style="font-size:clamp(7rem,24vw,24rem);color:rgba(255,255,255,.06)">${esc(site.brand)}</span>
    <div class="relative mx-auto grid max-w-[1500px] gap-12 px-5 pb-44 pt-16 sm:grid-cols-2 md:px-10 md:pb-60 md:pt-24 lg:grid-cols-[1.5fr_repeat(${Math.max(cols.length, 1)},1fr)]">
      <div class="sm:col-span-2 lg:col-span-1">
        <p class="text-3xl font-bold tracking-tight">${esc(site.brand)}</p>
        ${f.tagline ? `<p class="mt-3 max-w-xs text-mute">${esc(f.tagline)}</p>` : ""}
        ${f.cta?.label && channels.length ? `<button type="button" data-contact aria-haspopup="dialog" class="${btnPrimary} mt-8 !px-8 !py-4 text-lg">${esc(f.cta.label)}</button>` : ""}
        ${soc.length ? `<h3 class="mt-8 text-lg font-medium">${esc(f.socialsTitle)}</h3>
        <ul class="mt-4 flex flex-wrap gap-3">${soc.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.label)} (opens in a new tab)" class="grid h-12 w-12 place-items-center rounded-full border border-line transition hover:bg-accent hover:text-onaccent hover:border-transparent">${socialIcon(s.label)}</a></li>`).join("")}</ul>` : ""}
      </div>
      ${cols.map(c => `
      <nav aria-label="${esc(c.title)}">
        <h3 class="text-lg font-medium">${esc(c.title)}</h3>
        <ul class="mt-6 space-y-4 text-sm">${c.links.map(l => `<li><a href="${esc(l.href)}"${extAttrs(l.href)} class="underline-offset-4 hover:underline">${esc(l.label)}</a></li>`).join("")}</ul>
      </nav>`).join("")}
    </div>
    <div class="relative" style="background:rgba(0,0,0,.28)">
      <div class="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-6 text-sm md:flex-row md:items-center md:justify-between md:px-10">
        <p>&copy; <span id="year"></span> ${esc(site.name)}. ${esc(f.sign)}</p>
        <ul class="flex flex-wrap gap-6">${legal.map(l => `<li><a href="${esc(l.href)}"${extAttrs(l.href)} class="underline-offset-4 hover:underline">${esc(l.label)}</a></li>`).join("")}<li><a href="#home" class="underline-offset-4 hover:underline">Back to top</a></li></ul>
      </div>
    </div>
  </div>`;
  $("#year").textContent = new Date().getFullYear();
}

function initMenu() {
  const toggle = $("#menu-toggle"), menu = $("#mobile-menu");
  const set = open => { menu.hidden = !open; toggle.setAttribute("aria-expanded", open); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  toggle.addEventListener("click", () => set(menu.hidden));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !menu.hidden) { set(false); toggle.focus(); } });
  matchMedia("(min-width:768px)").addEventListener("change", e => e.matches && set(false));
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = a.getAttribute("href") === "#" ? null : $(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    set(false);
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", a.getAttribute("href"));
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
}

function initCursors() {
  if (reduceMotion) return;
  $$(".cur-note").forEach((el, i) => {
    const notes = JSON.parse(el.dataset.notes || "[]");
    if (notes.length < 2) return;
    let n = 0;
    setInterval(() => {
      el.style.opacity = 0;
      setTimeout(() => { n = (n + 1) % notes.length; el.textContent = notes[n]; el.style.opacity = 1; }, 220);
    }, 4200 + i * 900);
  });
}

function initScrollSpy() {
  const links = $$("[data-nav]");
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.setAttribute("aria-current", l.dataset.nav === en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  enabled.forEach(s => { const el = $("#" + s.id); el && io.observe(el); });
}

function initReveal() {
  const els = $$("[data-reveal]");
  els.forEach(e => e.classList.add("reveal"));
  if (reduceMotion || !("IntersectionObserver" in window)) return els.forEach(e => e.classList.add("in"));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

function initCanvas(openProject) {
  const cv = $("#canvas"), world = $("#world"), wrap = $("#canvas-wrap"), grid = $("#project-grid");
  if (!cv) return;
  const items = CONFIG.projects.items;
  const handles = rs => {
    const c = [["nw", "left:-4px;top:-4px"], ["ne", "right:-4px;top:-4px"], ["sw", "left:-4px;bottom:-4px"], ["se", "right:-4px;bottom:-4px"]];
    const e = [["n", "left:calc(50% - 4px);top:-4px"], ["s", "left:calc(50% - 4px);bottom:-4px"], ["w", "left:-4px;top:calc(50% - 4px)"], ["e", "right:-4px;top:calc(50% - 4px)"]];
    return (rs ? c.concat(e) : c).map(([k, p]) => `<i class="sel-h"${rs ? ` data-h="${k}"` : ""} style="${p}"></i>`).join("") + '<span class="frame-size" aria-hidden="true"></span>';
  };
  const H = handles(false), HR = handles(true);
  // Layout: scattered, like frames dropped around a real Figma page. Change SEED for a new shuffle.
  const SEED = 7, COLS = CONFIG.projects.canvasCols || 6, GX = 80, GY = 120, X0 = 120, Y0 = 120, CAP = 120, FIRST_ROWS = 2;
  let sd = SEED;
  const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
  const order = items.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  const wd = items.map(() => Math.round(250 + rnd() * 90));   // random frame widths
  const pos = [], band = [];
  let yy = Y0;
  for (let r = 0; r * COLS < order.length; r++) {
    const row = order.slice(r * COLS, (r + 1) * COLS);
    let xx = X0;
    row.forEach(i => {
      pos[i] = { x: Math.round(xx + (rnd() - .5) * 60), y: Math.round(yy + (rnd() - .3) * 90) };
      band[i] = r < FIRST_ROWS ? 0 : 1;   // first view fits only the first rows
      xx += wd[i] + GX;
    });
    yy += Math.max(...row.map(i => Math.round(wd[i] / ratioOf(items[i])) + CAP)) + GY;
  }

  // Extras without x/y: try a bunch of random spots and keep the one that covers the least stuff.
  const boxes = items.map((_, i) => ({ l: pos[i].x, t: pos[i].y - 24, r: pos[i].x + wd[i], b: pos[i].y + Math.round(wd[i] / ratioOf(items[i])) + CAP }));
  const maxX = Math.max(...boxes.map(f => f.r)), maxY = Math.max(...boxes.map(f => f.b));
  const NOTE_COLORS = ["#ffe066", "#ffd6e7", "#b2f2bb", "#a5d8ff", "#ffd8a8"];
  const dims = x => x.type === "sticky" ? [x.w || 200, 100] : x.type === "comment" ? [Math.min(380, 70 + String(x.text).length * 8), 46] : x.type === "text" ? [String(x.text).length * 34, 70] : [x.w || 240, x.h || 160];
  const noteBoxes = [];
  const extras = (CONFIG.projects.extras || []).map(x => {
    const [w, h] = dims(x);
    const o = { ...x };
    if (o.type === "sticky") { o.color = o.color || NOTE_COLORS[Math.floor(rnd() * NOTE_COLORS.length)]; o.rot = o.rot ?? Math.round((rnd() - .5) * 9); }
    if (o.x != null && o.y != null) return o;
    let best = null;
    for (let k = 0; k < 90; k++) {
      const nx = Math.round(-280 + rnd() * (maxX + 560 - w)), ny = Math.round(-60 + rnd() * (maxY + 100 - h));
      const hit = (b, pad) => Math.max(0, Math.min(nx + w, b.r + pad) - Math.max(nx, b.l - pad)) * Math.max(0, Math.min(ny + h, b.b + pad) - Math.max(ny, b.t - pad));
      const cost = boxes.reduce((n, b) => n + hit(b, 8), 0) + noteBoxes.reduce((n, b) => n + hit(b, 8) * 4, 0);
      if (!best || cost < best.cost) best = { cost, x: nx, y: ny };
      if (cost === 0) break;
    }
    noteBoxes.push({ l: best.x, t: best.y, r: best.x + w, b: best.y + h });
    o.x = best.x; o.y = best.y;
    return o;
  });
  const visual = (p, i) => p.image
    ? `<img src="${esc(p.image)}" alt="" loading="lazy" draggable="false" class="h-full w-full object-cover">`
    : `<div class="grid h-full w-full place-items-end p-5" style="background:linear-gradient(${135 + i * 35}deg,rgb(var(--accent-rgb)) 0%,color-mix(in srgb,rgb(var(--accent-rgb)) ${70 - i * 12}%,var(--fg)) 100%)"><span class="display text-7xl text-onaccent opacity-90">${esc(p.title.slice(0, 1))}</span></div>`;
  const project = (p, i) => {
    const { x, y } = pos[i];
    return `<div class="cf" data-i="${i}" data-band="${band[i]}" data-category="${esc(p.category)}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Open ${esc(p.title)}" style="left:${x}px;top:${y}px;width:${wd[i]}px">
      <span class="cf-name">${esc(p.title)}</span>
      <div class="cf-body flex flex-col overflow-hidden border border-line bg-bg">
        <div class="ar relative min-h-0 flex-1 overflow-hidden" style="${ratioCss(p)}">${visual(p, i)}${figmaUrl(p.figma) ? '<span class="absolute left-3 top-3 rounded-md bg-fg px-3 py-1 text-xs font-medium text-bg">Live Figma file</span>' : ""}</div>
        <div class="shrink-0 p-4"><h3 class="text-lg font-medium leading-tight tracking-tight">${esc(p.title)}</h3><p class="mt-1 line-clamp-2 text-sm text-mute">${esc(p.summary)}</p></div>
      </div><button type="button" data-open tabindex="-1" aria-hidden="true" class="cf-open">Open ↗</button>${HR}</div>`;
  };
  const extra = x => {
    const st = `left:${x.x}px;top:${x.y}px`;
    if (x.type === "sticky") return `<div class="cf" aria-hidden="true" style="${st}"><div class="p-4 text-[15px] leading-snug text-[#1a1a1a] shadow-md" style="width:${x.w || 200}px;background:${esc(x.color || "#ffe066")};transform:rotate(${x.rot ?? -2}deg)">${esc(x.text)}</div>${H}</div>`;
    if (x.type === "text") return `<div class="cf" aria-hidden="true" style="${st}"><p class="display whitespace-nowrap text-6xl">${esc(x.text)}</p>${H}</div>`;
    if (x.type === "swatches") return `<div class="cf" aria-hidden="true" style="${st}"><span class="cf-name">${esc(x.name || "Colors")}</span><div class="flex border border-line">${[100, 70, 40, 15].map(n => `<div style="width:56px;height:56px;background:color-mix(in srgb,rgb(var(--accent-rgb)) ${n}%,var(--bg))"></div>`).join("")}</div>${H}</div>`;
    const bar = c => `<div class="h-3 ${c} bg-line"></div>`;
    if (x.type === "nav") return `<div class="cf" aria-hidden="true" style="${st}"><span class="cf-name">${esc(x.name || "Navbar")}</span><div class="cf-body flex items-center justify-between border border-line bg-bg px-6" style="width:${x.w || 1000}px;height:64px"><div class="h-5 w-24 bg-fg"></div><div class="flex gap-6">${bar("w-14")}${bar("w-14")}${bar("w-14")}${bar("w-14")}</div><div class="h-9 w-28 bg-accent"></div></div>${HR}</div>`;
    if (x.type === "phone") return `<div class="cf" aria-hidden="true" style="${st}"><span class="cf-name">${esc(x.name || "Mobile")}</span><div class="cf-body flex flex-col gap-3 border border-line bg-bg p-3" style="width:${x.w || 220}px;height:${x.h || 440}px;border-radius:28px"><div class="h-3 w-16 self-center bg-line"></div><div class="h-32 w-full bg-accent opacity-80"></div>${[0, 1, 2].map(() => `<div class="flex gap-3"><div class="h-10 w-10 shrink-0 bg-line"></div><div class="flex-1 space-y-2">${bar("w-full")}${bar("w-2/3")}</div></div>`).join("")}<div class="mt-auto flex justify-around pb-1"><div class="h-5 w-5 bg-fg"></div><div class="h-5 w-5 bg-line"></div><div class="h-5 w-5 bg-line"></div></div></div>${HR}</div>`;
    if (x.type === "buttons") return `<div class="cf" aria-hidden="true" style="${st}"><span class="cf-name">${esc(x.name || "Buttons")}</span><div class="flex items-center gap-3 border border-line bg-bg p-4"><span class="rounded-md bg-accent px-4 py-2 text-sm font-medium text-onaccent">Primary</span><span class="rounded-md border border-line px-4 py-2 text-sm font-medium">Secondary</span><span class="rounded-md px-4 py-2 text-sm font-medium opacity-40">Disabled</span></div>${H}</div>`;
    if (x.type === "tokens") return `<div class="cf" aria-hidden="true" style="${st}"><span class="cf-name">${esc(x.name || "Tokens")}</span><div class="border border-line bg-bg p-4" style="width:260px"><p class="text-sm text-mute">Spacing</p><div class="mt-2 flex items-end gap-2">${[4, 8, 16, 24, 32].map(n => `<div class="bg-accent" style="width:${n}px;height:${n}px"></div>`).join("")}</div><p class="mt-4 text-sm text-mute">Type scale</p><p class="display text-5xl">Aa</p><p class="text-xl">Aa</p><p class="text-sm">Aa</p></div>${H}</div>`;
    if (x.type === "comment") return `<div class="cf" aria-hidden="true" style="${st}"><div class="flex items-start gap-2"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full rounded-bl-none bg-accent text-sm font-medium text-onaccent">C</span><div class="whitespace-nowrap border border-line bg-bg px-3 py-2 text-sm shadow-md">${esc(x.text)}</div></div>${H}</div>`;
    if (x.type === "arrow") { const w = x.w || 90, h = x.h || 0, t = Math.max(0, -h) ; return `<div class="cf" aria-hidden="true" style="${st};pointer-events:none"><svg width="${w + 14}" height="${Math.abs(h) + 24}" viewBox="0 0 ${w + 14} ${Math.abs(h) + 24}" fill="none" stroke="rgb(var(--accent-rgb))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 ${12 + t} C${w / 2} ${12 + t} ${w / 2} ${h + 12 + t} ${w} ${h + 12 + t}"/><path d="M${w - 8} ${h + 5 + t} L${w + 2} ${h + 12 + t} L${w - 8} ${h + 19 + t}"/></svg></div>`; }
    return `<div class="cf" aria-hidden="true" style="${st}"><span class="cf-name">${esc(x.name || "Frame")}</span><div class="cf-body space-y-3 border border-line bg-bg p-4" style="width:${x.w || 240}px;height:${x.h || 160}px"><div class="h-3 w-2/3 bg-line"></div><div class="h-3 w-full bg-line"></div><div class="h-3 w-1/2 bg-line"></div><div class="mt-4 h-10 w-24 bg-accent"></div></div>${HR}</div>`;
  };
  world.innerHTML = items.map(project).join("") + extras.map(extra).join("");

  let tx = 0, ty = 0, sc = 1, tool = "move", space = false, full = false, hover = false, focus = false, drag = null, zTop = 1;
  const apply = () => { world.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`; $("#zoom-readout").textContent = Math.round(sc * 100) + "%"; world.style.setProperty("--inv", 1 / sc); };
  const zoomAt = (f, cx = cv.clientWidth / 2, cy = cv.clientHeight / 2) => {
    const n = Math.min(2, Math.max(0.25, sc * f));
    tx = cx - (cx - tx) * n / sc; ty = cy - (cy - ty) * n / sc; sc = n; apply();
  };
  const fit = first => {
    let x1 = 1e9, y1 = 1e9, x2 = -1e9, y2 = -1e9;
    $$(first ? '.cf[data-band="0"]' : ".cf[data-i]", world).forEach(f => { x1 = Math.min(x1, f.offsetLeft); y1 = Math.min(y1, f.offsetTop); x2 = Math.max(x2, f.offsetLeft + f.offsetWidth); y2 = Math.max(y2, f.offsetTop + f.offsetHeight); });
    if (!cv.clientWidth || x2 < x1) return;
    sc = Math.min(1, cv.clientWidth / (x2 - x1 + 160), cv.clientHeight / (y2 - y1 + 200));
    tx = (cv.clientWidth - (x2 - x1) * sc) / 2 - x1 * sc;
    ty = (cv.clientHeight - (y2 - y1) * sc) / 2 - y1 * sc;
    apply();
  };
  const setTool = t => {
    tool = t;
    $$("[data-tool]", cv).forEach(b => b.setAttribute("aria-pressed", b.dataset.tool === t));
    cv.classList.toggle("hand", t === "hand");
  };
  const setView = on => {
    wrap.classList.toggle("is-off", !on); grid.classList.toggle("is-off", on);
    $$("#view-toggle button").forEach(b => b.setAttribute("aria-pressed", (b.dataset.view === "canvas") === on));
    if (!on) return;
    $$(".cf", world).forEach(sizeLabel);
    fit(true);
  };

  let ph = null, anim = null;
  const EASE = "cubic-bezier(.2,.8,.2,1)";
  const insetFor = r => `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px round 16px)`;
  const setFull = on => {
    if (on === full) return;
    anim?.cancel();
    const b = $("[data-full]", cv);
    full = on;
    b.setAttribute("aria-pressed", on);
    $("#full-label").textContent = on ? "Exit full view" : "Full view";

    if (on) {
      let r;
      if (!ph) {                                  // keep page layout from jumping
        r = wrap.getBoundingClientRect();
        ph = document.createElement("div");
        ph.style.height = r.height + "px";
        wrap.before(ph);
      } else r = ph.getBoundingClientRect();
      wrap.classList.add("cv-full");
      document.body.style.overflow = "hidden";
      fit();
      if (!reduceMotion) anim = wrap.animate(
        [{ clipPath: insetFor(r) }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }],
        { duration: 500, easing: EASE });
    } else {
      const done = () => {
        wrap.classList.remove("cv-full");
        ph?.remove(); ph = null;
        document.body.style.overflow = "";
        anim?.cancel(); anim = null;
        fit();
      };
      if (reduceMotion || !ph) done();
      else {
        anim = wrap.animate(
          [{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: insetFor(ph.getBoundingClientRect()) }],
          { duration: 400, easing: EASE, fill: "forwards" });
        anim.onfinish = done;
      }
    }
    cv.focus({ preventScroll: true });
  };
  document.addEventListener("keydown", e => { if (e.key === "Escape" && full && !$("#project-modal").open) setFull(false); });

  const MIN_W = 120, MIN_H = 90;
  const CUR = { nw: "nwse", se: "nwse", ne: "nesw", sw: "nesw", n: "ns", s: "ns", e: "ew", w: "ew" };
  const sizeLabel = f => { const l = f.querySelector(".frame-size"); if (l) l.textContent = `${Math.round(f.offsetWidth)} × ${Math.round(f.offsetHeight)}`; };
  const setBox = (f, l, t, w, h) => {
    f.classList.add("sized");
    f.style.left = l + "px"; f.style.top = t + "px"; f.style.width = w + "px"; f.style.height = h + "px";
    sizeLabel(f);
  };
  const resize = (d, dx, dy, e) => {
    const k = e.altKey ? 2 : 1, hd = d.rs;
    let w = d.w, h = d.h;
    if (hd.includes("e")) w = d.w + dx * k;
    if (hd.includes("w")) w = d.w - dx * k;
    if (hd.includes("s")) h = d.h + dy * k;
    if (hd.includes("n")) h = d.h - dy * k;
    if (e.shiftKey) {                       // keep aspect ratio
      const r = d.w / d.h;
      if (hd.length === 2) { const sc2 = Math.max(w / d.w, h / d.h); w = d.w * sc2; h = d.h * sc2; }
      else if (hd === "e" || hd === "w") h = w / r;
      else w = h * r;
    }
    w = Math.max(MIN_W, w); h = Math.max(MIN_H, h);
    let l = d.l, t = d.t;
    if (e.altKey) { l = d.l - (w - d.w) / 2; t = d.t - (h - d.h) / 2; }   // resize from center
    else { if (hd.includes("w")) l = d.l + d.w - w; if (hd.includes("n")) t = d.t + d.h - h; }
    setBox(d.f, l, t, w, h);
  };

  cv.addEventListener("pointerdown", e => {
    if (e.target.closest(".cv-bar, [data-open]")) return;
    const f = e.target.closest(".cf");
    $$(".cf.on", world).forEach(x => x.classList.remove("on"));
    cv.setPointerCapture(e.pointerId);
    if (tool === "hand" || space || e.button === 1 || !f) { drag = { pan: true, x: e.clientX, y: e.clientY, tx, ty }; cv.classList.add("grabbing"); }
    else {
      const hd = e.target.closest("[data-h]");
      f.classList.add("on"); f.style.zIndex = ++zTop;
      drag = { f, x: e.clientX, y: e.clientY, l: f.offsetLeft, t: f.offsetTop, w: f.offsetWidth, h: f.offsetHeight, rs: hd ? hd.dataset.h : null, moved: false };
      if (drag.rs) { cv.dataset.rs = drag.rs; cv.style.setProperty("--rs-cur", `var(--c-${CUR[drag.rs]})`); }
    }
  });
  cv.addEventListener("pointermove", e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (drag.pan) { tx = drag.tx + dx; ty = drag.ty + dy; apply(); return; }
    if (drag.rs) { drag.moved = true; resize(drag, dx / sc, dy / sc, e); return; }
    if (!drag.moved && Math.hypot(dx, dy) < 4) return;
    if (!drag.moved) drag.f.classList.add("moving");
    drag.moved = true;
    drag.f.style.left = drag.l + dx / sc + "px"; drag.f.style.top = drag.t + dy / sc + "px";
  });
  const endDrag = () => {
    drag?.f?.classList.remove("moving");
    drag = null;
    delete cv.dataset.rs; cv.style.removeProperty("--rs-cur");
    cv.classList.remove("grabbing");
  };
  cv.addEventListener("pointerup", endDrag);
  cv.addEventListener("pointercancel", endDrag);
  // click selects (and shows handles), double-click or the "Open" pill opens the project
  cv.addEventListener("dblclick", e => {
    const f = e.target.closest(".cf[data-i]");
    if (f && tool !== "hand" && !e.target.closest("[data-h], .cv-bar")) openProject(f.dataset.i, f);
  });
  world.addEventListener("click", e => {
    const o = e.target.closest("[data-open]");
    if (o) { const f = o.closest(".cf"); openProject(f.dataset.i, f); }
  });
  cv.addEventListener("wheel", e => {
    if (!(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    const r = cv.getBoundingClientRect();
    zoomAt(e.deltaY < 0 ? 1.1 : 1 / 1.1, e.clientX - r.left, e.clientY - r.top);
  }, { passive: false });
  cv.addEventListener("pointerenter", () => hover = true);
  cv.addEventListener("pointerleave", () => hover = false);
  cv.addEventListener("focusin", () => focus = true);
  cv.addEventListener("focusout", e => { if (!cv.contains(e.relatedTarget)) focus = false; });
  cv.querySelector(".cv-bar").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.tool) setTool(b.dataset.tool);
    else if (b.dataset.zoom) zoomAt(b.dataset.zoom > 0 ? 1.2 : 1 / 1.2);
    else if ("fit" in b.dataset) fit();
    else if ("full" in b.dataset) setFull(!full);
  });
  world.addEventListener("keydown", e => {
    const f = e.target.closest?.(".cf[data-i]");
    if (f && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); e.stopPropagation(); openProject(f.dataset.i, f); }
  });
  world.addEventListener("keydown", e => {   // Alt + arrows resize the focused frame
    if (!e.altKey || !e.key.startsWith("Arrow")) return;
    const f = e.target.closest?.(".cf");
    if (!f || !f.querySelector("[data-h]")) return;
    e.preventDefault(); e.stopPropagation();
    const d = e.shiftKey ? 50 : 10;
    let w = f.offsetWidth, h = f.offsetHeight;
    if (e.key === "ArrowLeft") w -= d;
    if (e.key === "ArrowRight") w += d;
    if (e.key === "ArrowUp") h -= d;
    if (e.key === "ArrowDown") h += d;
    setBox(f, f.offsetLeft, f.offsetTop, Math.max(MIN_W, w), Math.max(MIN_H, h));
  });
  document.addEventListener("keydown", e => {
    if (!(hover || focus) || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (k === "h") setTool("hand");
    else if (k === "v") setTool("move");
    else if (k === "+" || k === "=") zoomAt(1.2);
    else if (k === "-") zoomAt(1 / 1.2);
    else if (k === "0") fit();
    else if (k === "escape") $$(".cf.on", world).forEach(x => x.classList.remove("on"));
    else if (k === "f") setFull(!full);
    else if (k === " " && !e.target.closest("button")) { e.preventDefault(); space = true; cv.classList.add("hand"); }
    else if (k.startsWith("arrow") && e.target.matches?.(".cf[data-i]")) {
      e.preventDefault();
      const d = e.shiftKey ? 50 : 10, f = e.target;
      if (k === "arrowleft") f.style.left = f.offsetLeft - d + "px";
      if (k === "arrowright") f.style.left = f.offsetLeft + d + "px";
      if (k === "arrowup") f.style.top = f.offsetTop - d + "px";
      if (k === "arrowdown") f.style.top = f.offsetTop + d + "px";
    }
  });
  document.addEventListener("keyup", e => { if (e.key === " " && space) { space = false; cv.classList.toggle("hand", tool === "hand"); } });
  $("#view-toggle").addEventListener("click", e => { const b = e.target.closest("[data-view]"); if (b) setView(b.dataset.view === "canvas"); });
  setView(matchMedia("(min-width:768px)").matches);
}

function initSkills() {
  const root = $("#skill-filters");
  if (!root) return;
  const btns = $$("[data-sk]", root), cards = $$(".sk-card"), live = $("#skills-live");
  root.addEventListener("click", e => {
    const b = e.target.closest("[data-sk]");
    if (!b) return;
    btns.forEach(x => x.setAttribute("aria-pressed", x === b));
    let n = 0;
    cards.forEach(c => {
      const ok = b.dataset.sk === "*" || c.dataset.skg === b.dataset.sk;
      c.classList.toggle("is-off", !ok);
      if (!ok) return;
      c.style.setProperty("--d", Math.min(n++, 12) * 35 + "ms");
      c.classList.remove("sk-in"); void c.offsetWidth; c.classList.add("sk-in");
    });
    live.textContent = `Showing ${n} ${n === 1 ? "skill" : "skills"}`;
  });
}

function initContact() {
  const b = $("[data-contact]"), m = $("#contact-modal");
  if (!b) return;
  const c = CONFIG.footer.cta;
  b.addEventListener("click", () => {
    const list = c.channels.filter(x => x.label && safeUrl(x.url));
    m.innerHTML = `
      <div class="p-6 md:p-10">
        <div class="flex items-start justify-between gap-4">
          <h3 id="contact-title" class="display text-4xl md:text-6xl !leading-[.95]">${esc(c.label)}</h3>
          <button type="button" data-close class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line hover:bg-fg hover:text-bg" aria-label="Close contact window"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
        </div>
        ${c.text ? `<p class="mt-4 text-lg text-mute">${esc(c.text)}</p>` : ""}
        <ul class="mt-8 grid gap-3">${list.map(x => `
          <li><a href="${esc(x.url)}"${extAttrs(x.url)} class="group flex items-center gap-4 border border-line p-4 transition hover:bg-fg hover:text-bg">
            <span class="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-current">${socialIcon(x.label)}</span>
            <span class="min-w-0 flex-1"><span class="block text-lg font-medium">${esc(x.label)}</span><span class="block truncate text-mute group-hover:text-bg">${esc(x.detail || "")}</span></span>
            ${/^https?:/i.test(x.url) ? '<span class="sr-only">(opens in a new tab)</span>' : ""}
          </a></li>`).join("")}</ul>
      </div>`;
    m.showModal();
    document.body.style.overflow = "hidden";
  });
  m.addEventListener("click", e => { if (e.target === m || e.target.closest("[data-close]")) m.close(); });
  m.addEventListener("close", () => { document.body.style.overflow = ""; b.focus(); });
}

function initProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  const items = CONFIG.projects.items;
  grid.innerHTML = items.map(projectCard).join("");
  const readSize = e => {
    const f = e.target.closest?.(".group")?.querySelector(".frame");
    if (!f) return;
    const r = f.getBoundingClientRect();
    f.querySelector(".frame-size").textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
  };
  grid.addEventListener("pointerover", readSize);
  grid.addEventListener("focusin", readSize);
  const modal = $("#project-modal");
  let opener = null;

  $("#filters").addEventListener("click", e => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    $$("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
    let shown = 0;
    $$(".project", grid).forEach(li => {
      const ok = b.dataset.filter === "*" || li.dataset.category === b.dataset.filter;
      li.hidden = !ok; shown += ok;
    });
    $$(".cf[data-category]").forEach(f => f.classList.toggle("dim", b.dataset.filter !== "*" && f.dataset.category !== b.dataset.filter));
    $("#project-live").textContent = `Showing ${shown} ${shown === 1 ? "project" : "projects"}`;
  });

  const openProject = (idx, b) => {
    const p = items[idx];
    opener = b;
    const fig = figmaUrl(p.figma);
    const links = [[fig, "Open in Figma"], [p.link, "View project"], [p.repo, "View source"]].filter(([u]) => safeUrl(u));
    const pic = p.image && !fig ? `<div class="mb-6 overflow-hidden border border-line md:mb-0" style="${ratioCss(p)}"><img src="${esc(p.image)}" alt="${esc(p.title)}" class="h-full w-full object-cover"></div>` : "";
    modal.innerHTML = `
      <div class="p-6 md:p-10">
        <div class="${pic ? "md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:items-start md:gap-10" : ""}">
          ${pic}
          <div class="min-w-0">
            <div class="flex items-start justify-between gap-4">
              <h3 id="modal-title" class="display text-4xl md:text-6xl !leading-[.95]">${esc(p.title)}</h3>
              <button type="button" data-close class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line hover:bg-fg hover:text-bg" aria-label="Close project details"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
            </div>
            <p class="mt-3 text-mute">${esc([p.category, p.year].filter(Boolean).join(", "))}</p>
            <p class="mt-6 text-lg leading-relaxed">${esc(p.description || p.summary)}</p>
            ${fig ? `<div class="mt-6 aspect-[4/3] w-full overflow-hidden border border-line"><iframe title="${esc(p.title)} in Figma" src="https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(fig)}" loading="lazy" allowfullscreen class="h-full w-full"></iframe></div>` : ""}
            ${p.tags?.length ? `<ul class="mt-6 flex flex-wrap gap-2">${p.tags.map(t => `<li class="rounded-md border border-line px-3 py-1 text-sm">${esc(t)}</li>`).join("")}</ul>` : ""}
            ${links.length ? `<div class="mt-8 flex flex-wrap gap-3">${links.map(([u, l], i) => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" class="${i ? fGhost : fPrimary}">${l}<span class="sr-only"> (opens in a new tab)</span></a>`).join("")}</div>` : ""}
          </div>
        </div>
      </div>`;
    modal.showModal();
    document.body.style.overflow = "hidden";
  };
  grid.addEventListener("click", e => { const b = e.target.closest("[data-project]"); if (b) openProject(b.dataset.project, b); });
  modal.addEventListener("click", e => { if (e.target === modal || e.target.closest("[data-close]")) modal.close(); });
  modal.addEventListener("close", () => { document.body.style.overflow = ""; opener?.focus(); });
  initCanvas(openProject);
}

/* ==========================================================================
   Boot
   ========================================================================== */
function init() {
  const { site } = CONFIG;
  document.title = site.title;
  $('meta[name="description"]').content = site.description;
  $('meta[property="og:title"]').content = site.title;
  $('meta[property="og:description"]').content = site.description;
  applyAccent(applyPalette());
  initTheme();
  renderChrome();
  $("#main").insertAdjacentHTML("beforeend", hero() + enabled.map(s => builders[s.id]?.() || "").join(""));
  initMenu();
  initProjects();
  initSkills();
  initContact();
  initCursors();
  initScrollSpy();
  initReveal();
}
init();