/* ==========================================================================
   CONFIG — edit this object to personalize the whole site.
   Leave a value empty ("" or []) to hide it. Set `enabled: false` to hide a section.
   ========================================================================== */
const CONFIG = {
  site: {
    name: "Fuujin",
    brand: "Fuujin",
    role: "Student dev & Figma designer",
    title: "fuujin — portfolio",
    description: "4th-year BSIT student building software, designing interfaces, and bringing ideas to life for real people. Freelance dev + Figma work, open for capstone collabs.",
    location: "Davao, PH",
    email: "jhoncarlnayaoxx@gmail.com",
    statusLabel: "Frame 1284",          // small label above the status box, like a Figma layer name
    status: "Open for freelance & capstone collabs"
  },
  theme: {
    palette: "figma",                // "figma" | "figma-red" | "ember" | "moss" | "rose" | "sand" | "default" (the original blue)
    accent: "",                      // optional: any hex color, overrides the palette's accent
    defaultMode: "system"            // "light" | "dark" | "system"
  },
  // Order = order on the page. Tip: [[Tag|word]] in a title draws a Figma "selected layer" box around that word.
  sections: [
    { id: "about",      enabled: true, label: "About",      title: "Hi, I move things [[Text / 2px|`2px`]]" },
    { id: "work",       enabled: true, label: "Work",       title: "Figma files, open for {{serif:poking}}" },
    { id: "skills",     enabled: true, label: "Skills",     title: "Tools of the [[Pixelify Sans · 700|{{pixel:trade}}]]" },
    { id: "services",   enabled: true, label: "Services",   title: "Ways to {{hand:hire}} me" },
    { id: "experience", enabled: true, label: "Experience", title: "The résumé, but {{wide:fun}}" }
  ],
  hero: {
    // Mixed fonts (hero headline + section titles): *word* = serif italic, `word` = mono, {{font:word}} = another font. Fonts: serif, hand, pixel, wide, mono.
    headline: ["I'm *Fuujin*.", "Frames *named*.", "`Allegedly`."],
    subtext: "Fuujin here. I design interfaces in Figma, name the layers (eventually) and hand developers files they don't have to sigh at. Every project below opens as a real Figma file, so yes, you may poke it.",
    primaryCta:   { label: "Open the Figma files", href: "#work" },
    secondaryCta: { label: "Say hello", href: "mailto:jhoncarlnayaoxx@gmail.com" },
    cursors: [ // animated "multiplayer cursors": x/y = start position (% of hero), notes cycle, optional path: [[dx,dy] x3] in px. Delete to hide.
      { name: "Client", notes: ["make the logo bigger", "can it pop more?", "love it, one tiny change", "can Fuujin do it by tonight?"], color: "#d6336c", x: "58%", y: "22%" },
      { name: "Dev",    notes: ["that's not in the spec", "works on my machine", "who named this layer?", "Fuujin named it. Mostly."],  color: "#0b7285", x: "9%",  y: "62%" }
    ]
  },
  // Figma-style comment pins dropped on the page. One short thread per spot, with a joke inside.
  // at = CSS selector of the element to pin to | pin = corner ("tr", "br", "tl" or "bl"). Then author, time, color, text and an optional reply.
  // Set enabled: false (or delete the items) to hide them all.
  comments: {
    enabled: true,
    items: [
      { at: ".footer-panel .sel", pin: "tr", author: "Dev", time: "2m", color: "#0b7285",
        text: "Padding is 17px. Nobody has ever wanted 17px.",
        reply: { author: "Me", time: "1m", text: "The spec said vibes." } },
      { at: "#about aside", pin: "tr", author: "Dev", time: "4h", color: "#0b7285",
        text: "Pixels nudged by one: \u221e. I have seen the commits.",
        reply: { author: "Me", time: "3h", text: "Every single one was necessary." } },
      { at: "#work [data-reveal]", pin: "tr", author: "Client", time: "1d", color: "#d6336c",
        text: "Love these! Can we see them in green?",
        reply: { author: "Me", time: "1d", text: "Open one in Figma and go wild. I'll wait." } },
      { at: "#skills [data-reveal]", pin: "tr", author: "Dev", time: "6h", color: "#0b7285",
        text: "Is Auto Layout a skill or a lifestyle?",
        reply: { author: "Me", time: "5h", text: "Yes." } },
      { at: "#services ul", pin: "tr", author: "Client", time: "2d", color: "#d6336c",
        text: "How much is \u201cone tiny change\u201d?",
        reply: { author: "Me", time: "2d", text: "More than the big ones." } },
      { at: "#experience ol", pin: "tr", author: "QA", time: "3d", color: "#7048e8",
        text: "Found zero typos in this section. Suspicious.",
        reply: { author: "Me", time: "3d", text: "I named the layers, too." } }
    ]
  },
  about: {
    callout: { tag: "Frame 1285", text: "Open for freelance & capstone collabs" }, // Figma-style selected box after the paragraphs; delete to hide
    paragraphs: [
      "Fourth-year BSIT student in Davao. Most of what I know about design I learned by fixing something that looked fine until I looked closer, and I have strong opinions about things that don\u2019t matter to anyone but me.",
      "I build web apps, explore project ideas, and call it research when it\u2019s really just curiosity. I also post Figma tutorials on TikTok and Instagram."
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
    // Extra layers dropped around the canvas (draggable, purely for fun). type:
    //   design (Canva-style: kind = ig | story | slide | thumb | logo | flyer | card | invite, v = colour 0-4)
    //   note (title + lines) | thread (author, text, time, replies, resolved) | status (state: ready | done | wip) | code (name, text) | measure (w, text)
    //   sticky | comment | text | frame | phone | nav | buttons | tokens | swatches | arrow.
    // Leave out x/y and they get a random spot (in the gaps when they fit). Add `color` / `rot` (degrees) on stickies if you want. Delete the list to hide them all.
    extras: [
      // ---- Canva-style designs ----
      { type: "design", kind: "ig",     v: 0 },
      { type: "design", kind: "story",  v: 4 },
      { type: "design", kind: "slide",  v: 0 },
      { type: "design", kind: "thumb",  v: 2 },
      { type: "design", kind: "logo",   v: 0 },
      { type: "design", kind: "flyer",  v: 4 },
      { type: "design", kind: "ig",     v: 1 },
      { type: "design", kind: "card",   v: 1 },
      { type: "design", kind: "story",  v: 2 },
      { type: "design", kind: "invite", v: 3 },
      { type: "design", kind: "slide",  v: 1 },
      { type: "design", kind: "thumb",  v: 3 },
      { type: "design", kind: "ig",     v: 3 },
      { type: "design", kind: "flyer",  v: 0 },
      // ---- Notes ----
      { type: "note", title: "Design notes",   color: "#a5d8ff", lines: ["12-col grid, 24px gutter", "Radius: 6 / 12 / 999", "Accent only for CTAs", "Dark mode = tokens, not new colors"] },
      { type: "note", title: "Handoff checklist", color: "#b2f2bb", lines: ["Export @1x and @2x", "States: hover, focus, disabled", "Alt text on every image", "Check 375px before shipping"] },
      { type: "note", title: "Feedback round 2", color: "#ffd6e7", lines: ["Make the headline bigger", "Less purple", "More purple (other client)", "Keep the whitespace!"] },
      // ---- Comment threads ----
      { type: "thread", author: "Maya",   time: "2h", text: "Can we use 16px padding here to match the card?", color: "#d6336c", replies: [{ author: "Me", text: "Done, updated in the next push." }] },
      { type: "thread", author: "Dev",    time: "1d", text: "Is this component ready for dev? I need the focus state.", color: "#0b7285", resolved: true, replies: [{ author: "Me", text: "Added it. Marked as ready for dev." }] },
      { type: "thread", author: "Client", time: "3d", text: "Love the poster! Any chance of a green version?", color: "#f08c00", replies: [] },
      { type: "thread", author: "QA",     time: "5h", text: "The button label wraps on 320px screens.", color: "#7048e8", replies: [{ author: "Dev", text: "Fixing it in the next commit." }] },
      // ---- Dev mode: status, specs, measurements ----
      { type: "status", state: "ready", name: "Navbar / v3",     text: "Handoff notes attached. 3 changes since last view." },
      { type: "status", state: "ready", name: "Checkout flow",   text: "Specs, assets and tokens are ready." },
      { type: "status", state: "wip",   name: "Dark mode pass",  text: "Still tweaking contrast on cards." },
      { type: "status", state: "done",  name: "Poster series",   text: "Exported at 1080 × 1350." },
      { type: "code", name: "Inspect · .btn-primary", text: ".btn-primary {\n  padding: 8px 16px;\n  border-radius: 6px;\n  background: var(--accent);\n  color: var(--on-accent);\n}" },
      { type: "code", name: "Inspect · .card", text: ".card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border: 1px solid var(--line);\n}" },
      { type: "code", name: "Inspect · .hero-title", text: ".hero-title {\n  font-size: 96px;\n  line-height: 0.88;\n  letter-spacing: -0.05em;\n}" },
      { type: "measure", w: 80,  text: "80" },
      { type: "measure", w: 24,  text: "24" },
      { type: "measure", w: 160, text: "160" },
      { type: "measure", w: 16,  text: "16" },
      { type: "measure", w: 56,  text: "gap 24" },
      // ---- Stickies, comments, text ----
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
      { title: "PurrfectPlanner", category: "Web app", summary: "To-dos as tickets, with sticky notes.", description: "A playful productivity tool that turns your to-dos into tickets, complete with subjects, time slots, colors and sticky notes. Built as a PWA with a feline flair.", tags: ["PWA", "HTML", "JavaScript"], link: "https://purrfect-planner.vercel.app/", repo: "https://github.com/jhoncarlnayao/PurrfectPlanner-" },
      { title: "Readme-Generator", category: "Web app", summary: "A README generator with live preview.", description: "A simple and efficient README generator with a live preview, built for developers who want quick, clean project documentation.", tags: ["HTML", "Live preview"], repo: "https://github.com/jhoncarlnayao/Readme-Generator" },
      { title: "r-sum-.exe", category: "Web app", summary: "No sign-up, no setup. A resume builder that runs.", description: "A resume builder with no sign-up and no setup. Open it and start typing.", tags: ["HTML", "Resume"], repo: "https://github.com/jhoncarlnayao/r-sum-.exe" },
      { title: "DevCard", category: "Web app", summary: "GitHub and LeetCode stats as a profile card.", description: "A web app that generates a shareable profile card from your GitHub and LeetCode profiles.", tags: ["GitHub", "LeetCode", "Web app"], link: "https://devcard-fuujin.vercel.app/" },
      { title: "flip.", category: "Web app", summary: "A split-flap clock that also keeps you focused.", description: "A web app with a split-flap clock, a Pomodoro timer and a typing test.", tags: ["Clock", "Pomodoro", "Typing test"] },
      { title: "BANTAY", category: "Web app", summary: "Attendance tracking, built with Laravel.", description: "An attendance system built with Laravel.", tags: ["Laravel", "PHP"] },
      { title: "Gym Membership System", category: "Web app", summary: "Admin and member dashboards for a gym.", description: "A gym membership management system with separate admin and member dashboards, built with Laravel 12, MySQL and Tailwind with Flowbite.", tags: ["Laravel 12", "MySQL", "Tailwind", "Flowbite"] },
      { title: "Letterbox", category: "Web app", summary: "A Valentine\u2019s card generator with an envelope animation.", description: "Envelope animation, photo upload, html2canvas download and URL sharing. No backend: the whole letter lives in the link.", tags: ["JavaScript", "html2canvas", "URL sharing"], link: "https://letterbox-fuujin.vercel.app/" },
      { title: "Dapit Himlay", category: "Web app", summary: "Find a loved one\u2019s resting place, online.", description: "A Capstone project for Davao Memorial Park, built with Laravel. Find a loved one\u2019s resting place on the grounds, and inquire or buy memorial lots online or by phone.", tags: ["Capstone", "Laravel"] },
      { title: "YTSave", category: "Web app", summary: "A YouTube downloader.", description: "A YouTube downloader built with Node.js, Express, yt-dlp and ffmpeg.", tags: ["Node.js", "Express", "yt-dlp", "ffmpeg"] },

      // ---- Software & scripts ----
      { title: "AutoHarvest-Minescript", category: "Software & scripts", summary: "Wheat that harvests itself.", description: "A Minescript Python script that detects, harvests and replants wheat in Minecraft, simulating real player clicks.", tags: ["Python", "Minescript", "Minecraft"], repo: "https://github.com/jhoncarlnayao/AutoHarvest-Minescript" },
      { title: "Moderation & Utility Bot", category: "Software & scripts", summary: "A Discord bot with a unified mod log.", description: "A Discord.js bot with moderation commands, Roblox community integration and a unified mod-log history.", tags: ["Discord.js", "Roblox", "Moderation"] },
      { title: "Floating Widget Dashboard", category: "Software & scripts", summary: "A shadcn-inspired desktop dashboard.", description: "An Electron dashboard with a shadcn-inspired design system, a Ctrl+K command panel, light and dark mode, and a data table.", tags: ["Electron", "Design system", "Dark mode"] },
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
      { name: "Python",  level: 3, note: "Terminal projects." },
      { name: "Node.js" },
      { name: "Java" },
      { name: "C#" }
    ] },
    { group: "Tooling", items: [
      { name: "Git" },
      { name: "WebAudio API" },
      { name: "PWABuilder" },
      { name: "Vite" }
    ] },
    { group: "Soft skills", items: [
      { name: "Listening to feedback" },
      { name: "Saying “that’s a feature”" },
      { name: "Coffee" }
    ] }
  ],
  services: [ // includes (chips) and note are optional
    { title: "Development", text: "Single-file web apps, PWAs, dashboards and tools with clean, iterated UI. Tailwind, JS, Laravel or Node.js.",
      includes: ["Full frontend build (HTML/CSS/JS, React, Tailwind)", "Backend when needed (Node.js, Laravel, Python)", "Iterative feedback rounds", "Clean, documented, single-file or modular delivery", "PWA/APK packaging on request"],
      note: "Rates discussed per project." },
    { title: "Design", text: "Figma UI systems, poster work and design tutorials. Clean, monochrome, and practical over trendy gradients.",
      includes: ["UI systems and component libraries", "Figma animation and prototyping", "Poster and social content design"],
      note: "Booked per file, turnaround discussed upfront." },
    { title: "Figma file work", text: "A Figma file that needs cleaning up? Components, prototypes and tokens, handed over so developers don\u2019t sigh at it.",
      includes: ["Component libraries with variants & auto-layout", "Clickable prototypes for handoff or user testing", "Design tokens matched to your dev stack", "Optional walkthrough or tutorial recording"] },
    { title: "Capstone help", text: "Open for capstone collabs. Fresh out of Capstone 2, so the pain is still very much remembered." }
  ],
  experienceLayout: "history", // "history" = Figma version history panel | "timeline" = simple vertical timeline
  experience: [ // students: use education, internships, awards
    { period: "Present", role: "BS Information Technology, 4th year", org: "College of Information Technology, Davao", text: "Building web apps, exploring project ideas, and calling it research when it\u2019s really just curiosity." },
    { period: "2026",    role: "Capstone 2, completed",               org: "College of Information Technology",       text: "Dapit Himlay, a Laravel system for Davao Memorial Park: find a loved one\u2019s resting place, then inquire or buy memorial lots online or by phone. Done with Capstone 2, hell yeah." },
    { period: "2026",    role: "Learn PHP certificate",               org: "Udemy",                                   text: "The Laravel side of the stack, now with paperwork." },
    { period: "2024",    role: "Database and HTML & CSS certifications", org: "Certiport",                            text: "Two credentials in one year: databases, and HTML & CSS." },
    { period: "2023",    role: "Java certification",                  org: "Certiport",                               text: "Where the Java part of the stack comes from." }
  ],
  socials: [ // entries without a url are hidden
    { label: "TikTok",    url: "https://www.tiktok.com/@_pojennn" },
    { label: "Gmail",     url: "mailto:jhoncarlnayaoxx@gmail.com" },
    { label: "Instagram", url: "https://www.instagram.com/_pojennn/" },
    { label: "GitHub",    url: "https://github.com/jhoncarlnayao/" },
    { label: "Discord",   url: "https://discord.com/users/871760434842206208" }
  ],
  footer: {
    tagline: "Designing in Figma and apologizing to developers for the spacing.",
    socialsTitle: "Socials",
    cta: { // the "Let's work together" button opens a popup listing these channels
      label: "Let's work together",
      text: "Pick whichever you check most. I reply faster than a design review thread.",
      channels: [ // use your own details; entries without a url are hidden
        { label: "TikTok",    detail: "@_pojennn",          url: "https://www.tiktok.com/@_pojennn" },
        { label: "Gmail",     detail: "jhoncarlnayaoxx@gmail.com",  url: "mailto:jhoncarlnayaoxx@gmail.com" },
        { label: "Instagram", detail: "@_pojennn",          url: "https://www.instagram.com/_pojennn/" },
        { label: "GitHub",    detail: "jhoncarlnayao",      url: "https://github.com/jhoncarlnayao/" },
        { label: "Discord",   detail: "ID 871760434842206208", url: "https://discord.com/users/871760434842206208" }
      ]
    },
    sign: "All rights reserved. Layers not included.",
    // `source`: "sections" | "services" | "projects" fills a column automatically ("projects" lists every project), or give `links: [{ label, href }]`.
    columns: [
      { title: "Pages",    source: "sections" },
      { title: "Services", source: "services" },
      { title: "Projects", links: [ // main projects = the repos pinned on github.com/jhoncarlnayao
        { label: "Skilled-Match",               href: "https://github.com/jhoncarlnayao/Skilled-Match" },
        { label: "PurrfectPlanner",             href: "https://github.com/jhoncarlnayao/PurrfectPlanner-" },
        { label: "Readme-Generator",            href: "https://github.com/jhoncarlnayao/Readme-Generator" },
        { label: "r-sum-.exe",                  href: "https://github.com/jhoncarlnayao/r-sum-.exe" },
        { label: "Inventory-Management-System", href: "https://github.com/jhoncarlnayao/Inventory-Management-System" },
        { label: "AutoHarvest-Minescript",      href: "https://github.com/jhoncarlnayao/AutoHarvest-Minescript" }
      ] }
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
/* copy that works everywhere: async Clipboard API first, then a hidden-textarea fallback
   (the API throws on http://, file://, iframes, or when permission is denied) */
const copyText = async text => {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch (_) { /* fall through to the fallback */ }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none";
  document.body.appendChild(ta);
  const prev = document.activeElement;
  ta.focus(); ta.select(); ta.setSelectionRange(0, text.length);
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (_) { ok = false; }
  ta.remove();
  if (prev && prev.focus) prev.focus();
  return ok;
};
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
  if (t) { t.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme"); t.dataset.tip = dark ? "Light mode: switch to the light theme" : "Dark mode: switch to the dark theme"; }
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
// Dev-mode statuses (Figma-style). Set `status: "ready" | "done" | "wip"` on a project; default = posters are "done", everything else "ready".
const STATUS = { ready: ["Ready for dev", "#14ae5c"], done: ["Completed", "#7b61ff"], wip: ["In progress", "#f5a623"] };
const stOf = p => STATUS[p.status] ? p.status : (p.category === "Poster" ? "done" : "ready");
const CHECK = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';


// Figma-style "selected layer": outlined box, purple-ish name tag above it, four corner handles.
const SEL_H = '<i class="sel-h" style="left:-4px;top:-4px"></i><i class="sel-h" style="right:-4px;top:-4px"></i><i class="sel-h" style="left:-4px;bottom:-4px"></i><i class="sel-h" style="right:-4px;bottom:-4px"></i>';
// *word* -> serif italic, `word` -> mono, {{serif|hand|pixel|wide|mono:word}} -> that font, [[Tag|word]] -> Figma selection box. Everything else stays escaped.
const rich = t => esc(t).replace(/\*([^*]+)\*/g, '<span class="ff-serif">$1</span>').replace(/`([^`]+)`/g, '<span class="ff-mono">$1</span>').replace(/\{\{(serif|hand|pixel|wide|mono):([^}]+)\}\}/g, '<span class="ff-$1">$2</span>').replace(/\[\[([^|\]]+)\|(.+?)\]\]/g, (m, tag, w) => `<span class="sel max-w-full !px-[.1em] !py-0"><span class="sel-tag">${tag}</span>${w}${SEL_H}</span>`);
const selBox = (tag, html, cls = "") => `<span class="sel max-w-full ${cls}">${tag ? `<span class="sel-tag">${esc(tag)}</span>` : ""}${html}${SEL_H}</span>`;
const heading = (id, extra = "") => `
  <div class="mb-12 md:mb-20 ${extra}">
    <p class="mb-3 text-sm text-mute"><span aria-hidden="true">#</span> ${esc(sec(id).label)}</p>
    <h2 class="display text-5xl sm:text-7xl md:text-[8rem]">${rich(sec(id).title)}</h2>
  </div>`;

function hero() {
  const { site, hero: h } = CONFIG;
  const lines = h.headline.map((l, i) => `<span class="hero-line"><span style="--i:${i}">${rich(l)}</span></span>`).join("");
  return `
  <section id="home" aria-label="Introduction" class="relative flex flex-col justify-end overflow-hidden pb-10 pt-28 md:min-h-screen md:pt-32">
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
          ${a.callout?.text ? `<p class="pt-8">${selBox(a.callout.tag, esc(a.callout.text), "!px-5 !py-3 text-base md:text-xl")}</p>` : ""}
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
  const kind = t => ["buttons", "tokens", "swatches", "status"].includes(t) ? "comp" : t === "text" ? "text" : ["sticky", "comment", "note", "thread"].includes(t) ? "note" : t === "arrow" ? "arrow" : "frame";
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

// Left sidebar + "Recommended" strip for the Grid view, styled like Figma's Recents page.
function gridSidebar() {
  const ic = d => `<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const nav = [
    ["Recents", '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', true],
    ["Community", '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'],
    ["Drafts", '<path d="M6 3h8l4 4v14H6z"/>'],
    ["All folders", '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>'],
    ["Resources", '<path d="M4 5h16v14H4zM4 9h16"/>'],
    ["Trash", '<path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13"/>']
  ];
  const folder = '<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>';
  const cats = [...new Set(CONFIG.projects.items.map(p => p.category).filter(Boolean))];
  const row = (l, d, on) => `<div class="flex items-center gap-3 rounded-md px-3 py-2 ${on ? "bg-accent/20 font-medium" : "text-mute"}">${ic(d)}<span class="truncate">${esc(l)}</span></div>`;
  return `
  <aside aria-hidden="true" class="hidden w-56 shrink-0 select-none flex-col border-r border-line text-sm lg:flex">
    <div class="flex items-center gap-2 px-4 py-3"><span class="grid h-6 w-6 place-items-center rounded-full bg-accent text-[11px] text-onaccent">${esc(CONFIG.site.brand.slice(0, 1))}</span><span class="truncate font-medium">${esc(CONFIG.site.name)}</span></div>
    <div class="mx-3 mb-3 flex items-center gap-2 rounded-md border border-line px-3 py-2 text-mute">${ic('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>')}<span>Search</span></div>
    <nav class="flex flex-col gap-0.5 px-2">${nav.map(n => row(...n)).join("")}</nav>
    <p class="mt-5 flex items-center gap-1 px-4 pb-1 text-xs font-medium text-mute">${ic('<path d="M6 9l6 6 6-6"/>').replace("h-4 w-4", "h-3 w-3")}Starred</p>
    <div class="flex flex-col gap-0.5 px-2 pb-4">${cats.map(c => row(c, folder)).join("")}</div>
  </aside>`;
}

function gridRecommended() {
  const items = CONFIG.projects.items;
  const pick = items.slice(0, 5);
  const card = (p, i) => {
    const src = esc(safeUrl(p.image) || p.image || "");
    const thumb = p.image
      ? `<img src="${src}" alt="" loading="lazy" draggable="false" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]">`
      : `<div class="grid h-full w-full place-items-end p-3" style="background:linear-gradient(${135 + i * 35}deg,rgb(var(--accent-rgb)),color-mix(in srgb,rgb(var(--accent-rgb)) 60%,var(--fg)))"><span class="display text-4xl text-onaccent">${esc(p.title.slice(0, 1))}</span></div>`;
    return `<li class="w-44 shrink-0 sm:w-auto">
      <button type="button" data-project="${items.indexOf(p)}" class="group block w-full text-left" aria-haspopup="dialog">
        <div class="aspect-[4/3] overflow-hidden rounded-md border border-line" style="background:color-mix(in srgb,var(--fg) 9%,var(--bg))">${thumb}</div>
        <span class="mt-2 block truncate text-xs font-semibold">${esc(p.title)}</span>
        <span class="block truncate text-xs text-mute">${esc(p.category)}${p.year ? " · " + esc(p.year) : ""}</span>
      </button></li>`;
  };
  return `
  <div class="mb-6 rounded-xl border border-line p-4 md:p-5" style="background:color-mix(in srgb,var(--fg) 4%,var(--bg))">
    <h3 class="mb-4 text-sm font-medium">Recommended from the portfolio</h3>
    <ul class="flex gap-4 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">${pick.map(card).join("")}</ul>
  </div>
  <div class="mb-4 flex items-center gap-1 text-sm" aria-hidden="true"><span class="rounded-md bg-accent/20 px-3 py-1.5 font-medium">Recently viewed</span><span class="px-3 py-1.5 text-mute">Shared files</span><span class="px-3 py-1.5 text-mute">Shared folders</span></div>`;
}

function work() {
  const cats = [...new Set(CONFIG.projects.items.map(p => p.category).filter(Boolean))];
  const fig = figmaPanels();
  return `
  <section id="work" class="ruler py-24 md:py-40">
    <div class="${wrap}">
      <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">${heading("work", "!mb-0")}</div>
      <div class="mb-8 mt-10 flex flex-wrap items-center justify-between gap-4" ${reveal}>
        <div id="filters" role="group" aria-label="Filter projects by category" class="inline-flex flex-wrap gap-1 rounded-lg border border-line p-1">
          ${[CONFIG.projects.allLabel, ...cats].map((c, i) => `<button type="button" data-filter="${i ? esc(c) : "*"}" aria-pressed="${i === 0}" class="tool text-sm">${esc(c)}</button>`).join("")}
        </div>
        <div id="view-toggle" role="group" aria-label="Layout" class="relative inline-flex gap-1 rounded-lg border !border-accent p-1"><span class="sel-tag" aria-hidden="true">Segmented control</span>
          <button type="button" data-view="canvas" aria-pressed="true" class="tool text-sm">Canvas</button>
          <button type="button" data-view="grid" aria-pressed="false" class="tool text-sm">Grid</button>${SEL_H}
        </div>
      </div>
      <div id="canvas-wrap" class="flex">
        ${fig.left}
        <div id="canvas" tabindex="0" role="group" aria-label="Design canvas. H for hand tool, V for move tool, Ctrl and scroll to zoom, arrow keys move a focused frame, Alt and arrow keys resize it, Enter opens it. D toggles dev mode." class="relative h-[calc(100dvh-6rem)] max-h-[900px] min-h-[480px] min-w-0 flex-1 overflow-hidden border border-line" style="background:color-mix(in srgb,var(--fg) 4%,var(--bg));touch-action:none">
          <div id="world" class="absolute left-0 top-0" style="transform-origin:0 0"></div>
          <div id="cv-load" aria-hidden="true">
            <svg class="cv-logo h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS.figma}</svg>
            <p class="text-sm">${esc(CONFIG.site.brand)} <span class="text-mute">/ Portfolio</span></p>
            <div class="cv-prog"><i></i></div>
            <p class="text-xs text-mute">Opening file…</p>
          </div>
          <p class="pointer-events-none absolute bottom-3 left-3 z-10 max-w-[26rem] text-sm text-mute">Click a frame to select it, drag the handles to resize (Shift keeps ratio, Alt scales from center), double-click to open. H pans, V moves, D dev mode, F full view.</p>
          <aside id="dev-panel" class="is-off absolute right-4 top-20 z-20 w-64 max-w-[calc(100%-2rem)] overflow-hidden rounded-lg border border-line bg-bg text-sm shadow-lg" aria-label="Dev mode inspector">
            <div class="flex items-center gap-2 border-b border-line px-3 py-2.5"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg><span class="font-medium">Inspect</span><span class="ml-auto rounded px-1.5 py-0.5 text-[10px] text-white" style="background:#f24e9a">Dev mode</span></div>
            <div id="dev-body" class="max-h-[55vh] overflow-auto px-3 py-3"></div>
          </aside>
          <div class="cv-bar absolute left-1/2 top-4 z-20 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-1 rounded-lg border border-line bg-bg p-1 shadow-lg" role="toolbar" aria-label="Canvas tools">
            <button type="button" class="tool inline-flex items-center gap-2 text-sm" data-tool="move" aria-pressed="true" aria-label="Move tool (V)" title="Move (V)"><svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 3l16 8-7 2-3 7z"/></svg><span class="hidden sm:inline">Move</span></button>
            <button type="button" class="tool inline-flex items-center gap-2 text-sm" data-tool="hand" aria-pressed="false" aria-label="Hand tool (H)" title="Hand (H)"><svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-4 0v-1a2 2 0 0 0-4 0v1a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-2a2 2 0 0 0-4 0"/></svg><span class="hidden sm:inline">Hand</span></button>
            <span class="mx-1 h-5 w-px bg-line" aria-hidden="true"></span>
            <button type="button" class="tool" data-zoom="-1" aria-label="Zoom out" title="Zoom out (-)">−</button>
            <span id="zoom-readout" class="w-12 text-center text-sm">100%</span>
            <button type="button" class="tool" data-zoom="1" aria-label="Zoom in" title="Zoom in (+)">+</button>
            <button type="button" class="tool text-sm" data-fit aria-label="Fit projects in view" title="Fit (0)">Fit</button>
            <span class="mx-1 h-5 w-px bg-line" aria-hidden="true"></span>
            <button type="button" class="tool inline-flex items-center gap-2 text-sm" data-dev aria-pressed="false" aria-label="Dev mode (D)" title="Dev mode (D)"><svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg><span>Dev mode</span></button>
            <span class="mx-1 h-5 w-px bg-line" aria-hidden="true"></span>
            <button type="button" class="tool inline-flex items-center gap-2 text-sm" data-full aria-pressed="false" aria-label="Full view (F)" title="Full view (F)"><svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg><span id="full-label">Full view</span></button>
          </div>
        </div>
        ${fig.right}
      </div>
      <div id="grid-wrap" class="is-off flex overflow-hidden rounded-xl border border-line" ${reveal}>
        ${gridSidebar()}
        <div class="min-w-0 flex-1 p-4 md:p-6">
          ${gridRecommended()}
          <ul id="project-grid" class="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4"></ul>
        </div>
      </div>
      <p id="project-live" class="sr-only" aria-live="polite"></p>
    </div>
  </section>`;
}

// Grid view = Figma "Recents" file browser: dark-ish tile, thumbnail on top, file-type icon + name + meta underneath.
const FILE_ICON = { Poster: "#0d99ff", "Web app": "#14ae5c", "Software & scripts": "#9747ff" };
function projectCard(p, i) {
  const src = esc(safeUrl(p.image) || p.image || "");
  const portrait = ratioOf(p) < 1;
  const thumb = p.image
    ? (portrait
      ? `<img src="${src}" alt="" aria-hidden="true" loading="lazy" draggable="false" class="absolute inset-0 h-full w-full scale-125 object-cover opacity-40 blur-xl"><img src="${src}" alt="" loading="lazy" draggable="false" class="relative h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]">`
      : `<img src="${src}" alt="" loading="lazy" draggable="false" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]">`)
    : `<div class="grid h-full w-full place-items-end p-4" style="background:linear-gradient(${135 + i * 35}deg,rgb(var(--accent-rgb)) 0%,color-mix(in srgb,rgb(var(--accent-rgb)) ${70 - i * 12}%,var(--fg)) 100%)"><span class="display text-6xl text-onaccent opacity-90">${esc(p.title.slice(0, 1))}</span></div>`;
  const st = STATUS[stOf(p)];
  return `
  <li class="project" data-category="${esc(p.category)}">
    <button type="button" data-project="${i}" class="group block w-full overflow-hidden rounded-xl border border-line text-left transition hover:border-accent focus-visible:border-accent" style="background:color-mix(in srgb,var(--fg) 5%,var(--bg))" aria-haspopup="dialog">
      <div class="relative aspect-[16/9] overflow-hidden" style="background:color-mix(in srgb,var(--fg) 9%,var(--bg))">${thumb}${figmaUrl(p.figma) ? '<span class="absolute left-3 top-3 rounded-md bg-fg px-2.5 py-1 text-xs font-medium text-bg">Live Figma file</span>' : ""}</div>
      <div class="flex items-center gap-3 px-4 py-3.5">
        <span aria-hidden="true" class="grid h-6 w-6 shrink-0 place-items-center rounded-md text-white" style="background:${FILE_ICON[p.category] || "rgb(var(--accent-rgb))"}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h16M4 15h16M9 4v16M15 4v16"/></svg></span>
        <span class="min-w-0"><span class="block truncate text-sm font-semibold">${esc(p.title)}</span><span class="mt-0.5 flex items-center gap-1.5 truncate text-xs text-mute"><i aria-hidden="true" class="inline-block h-1.5 w-1.5 shrink-0 rounded-full" style="background:${st[1]}"></i>${esc(p.category)} · ${st[0]}</span></span>
      </div>
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
          <div class="md:col-span-6 md:col-start-7">
            <p class="text-lg text-mute transition group-hover:text-onaccent">${esc(x.text)}</p>
            ${x.includes?.length ? `<ul class="mt-5 flex flex-wrap gap-2 text-sm">${x.includes.map(i => `<li class="rounded-md border border-line px-3 py-1 text-mute transition group-hover:border-current group-hover:text-onaccent">${esc(i)}</li>`).join("")}</ul>` : ""}
            ${x.note ? `<p class="mt-4 text-sm text-mute transition group-hover:text-onaccent">${esc(x.note)}</p>` : ""}
          </div>
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
        <p class="${i === 0 ? "mt-9" : "mt-2"} flex flex-wrap items-center gap-2 text-xs">
          ${i === 0 ? selBox("Badge / Current", '<span class="rounded bg-accent px-2 py-0.5 font-medium text-onaccent">Current version</span>', "!p-1") : `<span class="rounded border border-line px-2 py-0.5 text-mute">Version ${n - i}</span>`}
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
  renderFooter();
}

const ICONS = {
  google: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M22 6l-10 7L2 6"/>',
  gmail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M22 6l-10 7L2 6"/>',
  discord: '<path d="M7.5 6.2C9 5.5 10.4 5.1 12 5.1s3 .4 4.5 1.1c1.8 2.5 2.8 5.3 3 8.8-1.3 1-2.7 1.7-4.2 2.1l-1-1.7M7.5 6.2C5.7 8.7 4.7 11.5 4.5 15c1.3 1 2.7 1.7 4.2 2.1l1-1.7M8.5 15.8c2.2.6 4.8.6 7 0"/><circle cx="9.3" cy="11.3" r="1.1"/><circle cx="14.7" cy="11.3" r="1.1"/>',
  tiktok: '<path d="M21 7.917v4.034a9.948 9.948 0 0 1-5-1.951v4.5a6.5 6.5 0 1 1-8-6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"/>',
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
        ${f.cta?.label && channels.length ? `<div class="mt-10"><span class="sel !p-1.5"><span class="sel-tag">Button / Primary</span><button type="button" data-contact aria-haspopup="dialog" class="${btnPrimary} !px-8 !py-4 text-lg">${esc(f.cta.label)}</button>${SEL_H}</span></div>` : ""}
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
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = a.getAttribute("href") === "#" ? null : $(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
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
  // A multiplayer cursor "drags" each block into place: springy landing, dashed outline, name tag that fades.
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  const who = [[CONFIG.site.brand, "rgb(var(--accent-rgb))"], ["Client", "#d6336c"], ["Dev", "#0b7285"]];
  const els = $$("[data-reveal]");
  // Each section gets its own entrance. Variants cycle inside a section so repeated items (rows, cards) alternate too.
  // Names map to the .fx[data-fx="..."] rules in index.html. Tweak or reorder freely.
  const FX = {
    about:      ["drag", "drag-r"],     // dragged in from the left, then the right
    work:       ["zoom", "rise"],       // frames scale into place / float up
    skills:     ["drop", "pop"],        // dropped from above with a bounce / popped in
    services:   ["wipe", "wipe-r"],     // rows wipe open, alternating direction
    experience: ["focus", "slide-r"]    // blur-to-sharp / slide from the right
  };
  const seen = {};
  els.forEach((e, i) => {
    const [n, c] = who[i % who.length];
    const sec = e.closest("section")?.id || "";
    const list = FX[sec] || FX.about;
    const k = seen[sec] = (seen[sec] ?? -1) + 1;
    e.classList.add("fx"); e.dataset.cur = n; e.dataset.fx = list[k % list.length];
    e.style.setProperty("--cc", c); e.style.setProperty("--fd", (k % 3) * 90 + "ms");
  });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  els.forEach(e => io.observe(e));

  // Canvas: frames get placed one by one, each flashing its selection box, like designs landing on a Figma page.
  const cv = $("#canvas");
  if (cv) {
    $$(".cf", cv).forEach((f, i) => f.style.setProperty("--cd", Math.min(i * 50, 1100) + "ms"));
    const open = () => {
      cv.classList.add("cv-wait");
      $(".cv-prog i", cv).addEventListener("animationend", () => {
        cv.classList.add("cv-ready");
        setTimeout(() => { cv.classList.remove("cv-wait", "cv-ready"); cv.classList.add("cv-in"); }, 350);
      }, { once: true });
    };
    const co = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { open(); co.disconnect(); } }), { threshold: 0.25 });
    co.observe(cv);
  }
}

/* ==========================================================================
   Design tools: Select / Comment / Inspect modes + a Layers panel for the whole page
   ========================================================================== */
function initDesignTools() {
  const store = { get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };
  const svg = d => `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const TIP = { move: ["Browse", "V", "Use the site normally"], select: ["Select", "S", "Hover to see what things are, click to select"], comment: ["Comment", "C", "Click anywhere to leave a note"], inspect: ["Inspect", "I", "Click an element to see its size, spacing and CSS"], layers: ["Layers", "L", "Jump between sections"] };
  const tools = [["move", "Browse (V)", '<path d="M4 3l16 8-7 2-3 7z"/>'], ["select", "Select (S)", '<rect x="4" y="4" width="16" height="16" stroke-dasharray="3 3"/>'], ["comment", "Comment (C)", '<path d="M4 4h16v12h-7l-5 4v-4H4z"/>'], ["inspect", "Inspect (I)", '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>'], ["layers", "Layers (L)", '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>']];
  document.body.insertAdjacentHTML("beforeend", `
  <div data-dt id="dt-dock" role="toolbar" aria-label="Design tools">${tools.map(([k, l, d]) => `<button type="button" class="tool" data-dtool="${k}" aria-pressed="${k === "move"}" aria-label="${l}" data-tip="${TIP[k][0]} (${TIP[k][1]}): ${TIP[k][2]}">${svg(d)}</button>`).join("")}
    <span class="mx-1 w-px self-stretch bg-line" aria-hidden="true"></span>
    <button type="button" id="theme-toggle" class="tool" aria-label="Switch theme" data-tip="Dark mode: switch to the dark theme"><svg class="h-4 w-4 dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg><svg class="hidden h-4 w-4 dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button></div>
  <div data-dt id="dt-toast" role="status" hidden></div>
  <div data-dt id="dt-hl" hidden><span></span></div><div data-dt id="dt-margin" hidden></div><div data-dt id="dt-pad" hidden></div>
  <div data-dt id="dt-sel" hidden><i></i><i></i><i></i><i></i><span></span></div>
  <aside data-dt id="dt-insp" class="is-off" aria-label="Inspect"></aside>
  <aside data-dt id="dt-layers" class="is-off" aria-label="Layers"></aside>
  <div data-dt id="dt-pins" hidden></div>`);
  const hl = $("#dt-hl"), selBox = $("#dt-sel"), mBox = $("#dt-margin"), pBox = $("#dt-pad"), insp = $("#dt-insp"), pins = $("#dt-pins"), layers = $("#dt-layers");
  let mode = "move", selected = null, openId = null, raf = 0;
  const ignore = t => !(t instanceof Element) || t.closest("[data-dt],#canvas,dialog,.fcm");
  const place = (el, r, tag) => { el.style.cssText = `left:${r.left + scrollX}px;top:${r.top + scrollY}px;width:${r.width}px;height:${r.height}px`; if (tag != null) el.lastElementChild.textContent = tag; el.classList.toggle("in", el === hl ? r.top < 26 : r.bottom > innerHeight - 30); el.hidden = false; };
  const size = r => `${Math.round(r.width)} × ${Math.round(r.height)}`;
  const NAMES = { h1: "Heading 1", h2: "Heading 2", h3: "Heading 3", h4: "Heading 4", p: "Text", a: "Link", button: "Button", img: "Image", svg: "Icon", li: "List item", ul: "List", ol: "List", nav: "Navigation", header: "Header", footer: "Footer", aside: "Panel", section: "Section", input: "Input", textarea: "Input", form: "Form", figure: "Figure", dl: "Properties", dt: "Label", dd: "Value", span: "Text", div: "Frame", label: "Label", main: "Page", iframe: "Embed" };
  const describe = el => {
    const t = el.tagName.toLowerCase(), txt = (el.textContent || "").trim().replace(/\s+/g, " ");
    const hasText = txt && ["h1", "h2", "h3", "h4", "p", "a", "button", "li", "span", "label", "dt", "dd"].includes(t);
    return (NAMES[t] || t) + (t === "section" && el.id ? " · " + el.id : "") + (hasText ? ` "${txt.slice(0, 22)}${txt.length > 22 ? "…" : ""}"` : "");
  };
  let toastT = 0;
  const say = k => { const t = $("#dt-toast"); t.textContent = `${TIP[k][0]}: ${TIP[k][2]}`; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2200); };
  const pick = t => { if (ignore(t)) return null; for (let n = t; n && n !== document.body && n !== document.documentElement; n = n.parentElement) { const r = n.getBoundingClientRect(); if (getComputedStyle(n).display !== "inline" && r.width >= 20 && r.height >= 12) return n; } return null; };

  /* ---------- selection + inspect ---------- */
  const px = (cs, p) => ["Top", "Right", "Bottom", "Left"].map(s => Math.max(0, Math.round(parseFloat(cs[p + s]) || 0)));
  const draw = () => {
    raf = 0;
    if (!selected || !selected.isConnected) { selBox.hidden = mBox.hidden = pBox.hidden = true; return; }
    const r = selected.getBoundingClientRect();
    place(selBox, r, `${describe(selected)} · ${size(r)}`);
    if (mode !== "inspect") { mBox.hidden = pBox.hidden = true; return; }
    const cs = getComputedStyle(selected), m = px(cs, "margin"), p = px(cs, "padding");
    mBox.style.cssText = `left:${r.left - m[3] + scrollX}px;top:${r.top - m[0] + scrollY}px;width:${r.width + m[1] + m[3]}px;height:${r.height + m[0] + m[2]}px;border-width:${m[0]}px ${m[1]}px ${m[2]}px ${m[3]}px;border-color:rgba(246,166,80,.45)`; mBox.hidden = false;
    pBox.style.cssText = `left:${r.left + scrollX}px;top:${r.top + scrollY}px;width:${r.width}px;height:${r.height}px;border-width:${p[0]}px ${p[1]}px ${p[2]}px ${p[3]}px;border-color:rgba(70,190,110,.45)`; pBox.hidden = false;
  };
  const redraw = () => { raf ||= requestAnimationFrame(draw); };
  const hex = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return c; const [r, g, b, al = 1] = m[1].split(/[ ,/]+/).map(Number); if (al === 0) return "transparent"; return al < 1 ? `rgba(${r}, ${g}, ${b}, ${+al.toFixed(2)})` : "#" + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, "0")).join(""); };
  const own = el => (el.getAttribute("class") || "").split(/\s+/).filter(c => c && !["fx", "in", "reveal"].includes(c));
  const cleanHtml = el => { const c = el.cloneNode(true); c.querySelectorAll(".fcm").forEach(n => n.remove()); [c, ...c.querySelectorAll("*")].forEach(n => { ["data-reveal", "data-cur", "data-fx", "data-i", "tabindex"].forEach(a => n.removeAttribute(a)); n.classList.remove("fx", "in", "reveal"); if (n.style) { n.style.removeProperty("--cc"); n.style.removeProperty("--fd"); } if (!n.getAttribute("class")) n.removeAttribute("class"); if (n.getAttribute("style") === "") n.removeAttribute("style"); }); const h = c.outerHTML; return h.length > 6000 ? h.slice(0, 6000) + "\n<!-- … trimmed -->" : h; };
  const fillInspect = () => {
    if (!selected) { insp.innerHTML = '<p class="text-mute">Click any element to inspect its size, spacing, type, classes and CSS.</p>'; return; }
    const cs = getComputedStyle(selected), r = selected.getBoundingClientRect(), m = px(cs, "margin").join(" "), p = px(cs, "padding").join(" ");
    const four = q => ["Top", "Right", "Bottom", "Left"].map(x => (Math.round(parseFloat(cs[q + x])) || 0) + "px").join(" ");
    const name = selected.tagName.toLowerCase() + (selected.id ? "#" + selected.id : "");
    const sw = c => `<i class="mr-1.5 inline-block h-3 w-3 rounded-sm border border-line align-middle" style="background:${c}"></i>`;
    const clear = c => c === "rgba(0, 0, 0, 0)";
    const bw = four("border").replace(/Width/g, ""), hasBorder = ["Top", "Right", "Bottom", "Left"].some(x => parseFloat(cs["border" + x + "Width"]) > 0 && cs["border" + x + "Style"] !== "none");
    const zero = v => !v || /^(0px ?)+$/.test(v);
    const props = [["display", cs.display], ["position", cs.position === "static" ? "" : cs.position], ["width", Math.round(r.width) + "px"], ["height", Math.round(r.height) + "px"], ["margin", zero(four("margin")) ? "" : four("margin")], ["padding", zero(four("padding")) ? "" : four("padding")],
      ["flex-direction", cs.display.includes("flex") ? cs.flexDirection : ""], ["gap", cs.gap === "normal" ? "" : cs.gap],
      ["font-family", cs.fontFamily], ["font-size", cs.fontSize], ["font-weight", cs.fontWeight], ["line-height", cs.lineHeight === "normal" ? "" : cs.lineHeight], ["letter-spacing", cs.letterSpacing === "normal" ? "" : cs.letterSpacing], ["text-align", ["start", "left"].includes(cs.textAlign) ? "" : cs.textAlign], ["text-transform", cs.textTransform === "none" ? "" : cs.textTransform],
      ["color", hex(cs.color)], ["background-color", clear(cs.backgroundColor) ? "" : hex(cs.backgroundColor)], ["background-image", cs.backgroundImage === "none" ? "" : cs.backgroundImage],
      ["border-width", hasBorder ? four("border").replace(/\s+/g, " ") : ""], ["border-style", hasBorder ? cs.borderTopStyle : ""], ["border-color", hasBorder ? hex(cs.borderTopColor) : ""],
      ["border-radius", cs.borderRadius === "0px" ? "" : cs.borderRadius], ["box-shadow", cs.boxShadow === "none" ? "" : cs.boxShadow], ["opacity", cs.opacity === "1" ? "" : cs.opacity], ["overflow", cs.overflow === "visible" ? "" : cs.overflow], ["transform", cs.transform === "none" ? "" : cs.transform]].filter(([, v]) => v);
    const sel = "." + name.replace(/[^\w-]/g, "-");
    const note = `/* at ${innerWidth}px wide, ${document.documentElement.classList.contains("dark") ? "dark" : "light"} theme */`;
    insp.dataset.css = `${note}\n${sel} {\n${props.map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}`;
    const cl = own(selected);
    insp.dataset.cls = cl.join(" ");
    insp.dataset.html = cleanHtml(selected);
    const row = (k, v) => `<div class="flex justify-between gap-3 border-b border-line py-1.5"><span class="text-mute">${k}</span><span class="truncate text-right">${v}</span></div>`;
    insp.innerHTML = `<div class="mb-2 flex items-center gap-2"><span class="truncate font-medium">${esc(name)}</span><span class="ml-auto rounded px-1.5 py-0.5 text-[10px] text-white" style="background:#f24e9a">Inspect</span></div>
      ${row("Size", size(r))}${row("Margin", m)}${row("Padding", p)}${row("Font", `${esc(cs.fontFamily.split(",")[0].replace(/"/g, ""))} ${cs.fontSize}`)}${row("Weight", cs.fontWeight)}${row("Color", sw(cs.color) + esc(hex(cs.color)))}${row("Fill", clear(cs.backgroundColor) ? "None" : sw(cs.backgroundColor) + esc(hex(cs.backgroundColor)))}${row("Radius", cs.borderRadius)}
      ${cl.length ? `<p class="mb-1.5 mt-3 text-mute">Classes</p><div class="flex flex-wrap gap-1">${cl.map(c => `<span class="dt-chip">${esc(c)}</span>`).join("")}</div>` : ""}
      <p class="mb-1.5 mt-3 text-mute">CSS</p>
      <pre class="dt-code">${esc(insp.dataset.css).replace(/^( {2})([\w-]+):/gm, '$1<span class="dt-p">$2</span>:')}</pre>
      <div class="mt-2 grid grid-cols-3 gap-1.5"><button type="button" data-copy="css" class="tool border border-line text-center text-xs">Copy CSS</button><button type="button" data-copy="cls" class="tool border border-line text-center text-xs">Classes</button><button type="button" data-copy="html" class="tool border border-line text-center text-xs">HTML</button></div>`;
  };
  insp.addEventListener("click", async e => {
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    const was = b.textContent;
    b.textContent = (await copyText(insp.dataset[b.dataset.copy] || "")) ? "Copied" : "Copy failed";
    setTimeout(() => { b.textContent = was; }, 1400);
  });

  /* ---------- comments ---------- */
  let comments = store.get("fz-comments", []);
  const save = () => store.set("fz-comments", comments);
  const who = () => store.get("fz-name", "");
  const ago = t => { const s = (Date.now() - t) / 1000; return s < 60 ? "now" : s < 3600 ? Math.floor(s / 60) + "m" : s < 86400 ? Math.floor(s / 3600) + "h" : Math.floor(s / 86400) + "d"; };
  const hue = n => { let h = 0; for (const ch of n || "G") h = (h * 31 + ch.charCodeAt(0)) % 360; return h; };
  const av = n => `<span class="dt-av" style="background:hsl(${hue(n)} 55% 42%)">${esc((n || "G").slice(0, 1).toUpperCase())}</span>`;
  const ic = d => `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const renderPins = () => {
    const open = comments.find(c => c.id === openId);
    pins.innerHTML = comments.map(c => { const n = c.thread[0]?.n || who(); return `<button type="button" data-pin="${c.id}" class="dt-pin${c.done ? " done" : ""}" style="left:${c.x * 100}%;top:${c.y}px;background:hsl(${hue(n)} 55% 42%)" aria-label="Comment thread, ${c.thread.length} message${c.thread.length === 1 ? "" : "s"}">${esc((n || "G").slice(0, 1).toUpperCase())}</button>`; }).join("") +
      (open ? `<div class="dt-pop" data-dt style="left:clamp(8px,calc(${open.x * 100}% + 24px),calc(100% - 296px));top:${open.y}px">
        ${open.thread.length ? `<div class="dt-head"><span class="font-medium">Comment${open.done ? " · Resolved" : ""}</span><span class="ml-auto flex"><button type="button" data-act="done" class="dt-ib" aria-label="${open.done ? "Reopen" : "Resolve"}" title="${open.done ? "Reopen" : "Resolve"}">${ic('<path d="M5 12l5 5 9-10"/>')}</button><button type="button" data-act="del" class="dt-ib" aria-label="Delete thread" title="Delete">${ic('<path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13"/>')}</button><button type="button" data-act="close" class="dt-ib" aria-label="Close" title="Close">${ic('<path d="M6 6l12 12M18 6L6 18"/>')}</button></span></div>
        <div class="dt-msgs">${open.thread.map(m => `<div class="dt-msg">${av(m.n)}<div class="min-w-0"><p><b>${esc(m.n)}</b> <span class="text-mute">${ago(m.t)}</span></p><p class="whitespace-pre-wrap break-words">${esc(m.text)}</p></div></div>`).join("")}</div>` : ""}
        ${who() ? "" : '<input data-dt-name placeholder="Your name" maxlength="30" aria-label="Your name">'}
        <div class="dt-comp">${av(who())}<textarea data-dt-text rows="1" maxlength="400" aria-label="Comment" placeholder="${open.thread.length ? "Reply" : "Add a comment"}"></textarea><button type="button" class="dt-send" data-act="post" aria-label="Send comment" title="Send (Enter)">${ic('<path d="M12 19V5M5 12l7-7 7 7"/>')}</button></div>
        <p class="dt-note">Only visible to you, saved on this device</p></div>` : "");
    const msgs = pins.querySelector(".dt-msgs"); if (msgs) msgs.scrollTop = msgs.scrollHeight;
    pins.querySelector("[data-dt-text]")?.focus({ preventScroll: true });
  };
  const closeOpen = () => { if (openId == null) return; comments = comments.filter(c => c.id !== openId || c.thread.length); openId = null; save(); renderPins(); };
  pins.addEventListener("click", e => {
    const pin = e.target.closest("[data-pin]"), act = e.target.closest("[data-act]")?.dataset.act, c = comments.find(x => x.id === openId);
    if (pin) { const id = +pin.dataset.pin; const same = id === openId; closeOpen(); if (!same) { openId = id; renderPins(); } return; }
    if (!act || !c) return;
    if (act === "close") return closeOpen();
    if (act === "post") {
      const text = pins.querySelector("[data-dt-text]").value.trim(), nm = pins.querySelector("[data-dt-name]")?.value.trim();
      if (nm) store.set("fz-name", nm);
      if (!text) return;
      c.thread.push({ n: who() || "Guest", text, t: Date.now() });
    } else if (act === "done") c.done = !c.done;
    else if (act === "del") { comments = comments.filter(x => x !== c); openId = null; }
    save(); renderPins();
  });
  pins.addEventListener("input", e => { const t = e.target.closest("[data-dt-text]"); if (t) { t.style.height = "auto"; t.style.height = t.scrollHeight + "px"; } });
  pins.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey && e.target.closest("[data-dt-text],[data-dt-name]")) { e.preventDefault(); pins.querySelector('[data-act="post"]')?.click(); } });

  /* ---------- layers ---------- */
  const secs = () => [...$$("#main > section[id]").map(s => ({ id: s.id, label: s.id === "home" ? "Hero" : (CONFIG.sections.find(x => x.id === s.id)?.label || s.id), el: s })), ...($("#footer") ? [{ id: "footer", label: "Footer", el: $("#footer") }] : [])];
  const buildLayers = () => {
    const frame = '<path d="M7 4v16M17 4v16M4 7h16M4 17h16"/>';
    layers.innerHTML = `<p class="flex items-center gap-2 px-2 py-1.5 font-medium">${svg('<path d="M6 3h8l4 4v14H6z"/>')}Layers</p>` + secs().map(s => `<button type="button" data-lay="${s.id}" class="dt-lay">${svg(frame)}<span class="truncate">${esc(s.label)}</span></button>`).join("");
  };
  const spy = () => { const list = secs(); let cur = list[0]?.id; list.forEach(s => { if (s.el.getBoundingClientRect().top <= innerHeight * 0.4) cur = s.id; }); if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = list[list.length - 1]?.id; $$("[data-lay]", layers).forEach(b => b.setAttribute("aria-current", b.dataset.lay === cur)); };
  layers.addEventListener("click", e => { const b = e.target.closest("[data-lay]"); if (!b) return; $("#" + b.dataset.lay)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); if (matchMedia("(max-width:1023px)").matches) setLayers(false); });
  layers.addEventListener("mouseover", e => { const b = e.target.closest("[data-lay]"); if (b) { const el = $("#" + b.dataset.lay); place(hl, el.getBoundingClientRect(), b.textContent); } });
  layers.addEventListener("mouseleave", () => { hl.hidden = true; });
  const setLayers = on => { layers.classList.toggle("is-off", !on); $('[data-dtool="layers"]').setAttribute("aria-pressed", on); if (on) spy(); };

  /* ---------- modes ---------- */
  const setMode = m => {
    if (m === "layers") { setLayers(layers.classList.contains("is-off")); return say("layers"); }
    closeOpen(); say(m); mode = m; document.documentElement.dataset.dtmode = m;
    $$("[data-dtool]").forEach(b => b.getAttribute("data-dtool") !== "layers" && b.setAttribute("aria-pressed", b.dataset.dtool === m));
    hl.hidden = true; if (m === "move" || m === "comment") selected = null;
    insp.classList.toggle("is-off", m !== "inspect"); if (m === "inspect") fillInspect();
    draw();
  };
  $("#dt-dock").addEventListener("click", e => { const b = e.target.closest("[data-dtool]"); if (b) setMode(b.dataset.dtool); });
  let last = null;
  const hover = t => {
    if (mode === "move" || (mode === "comment" && openId != null)) { hl.hidden = true; return; }
    const n = pick(t);
    hl.classList.toggle("tag", mode === "comment");
    if (n && n !== selected) { const r = n.getBoundingClientRect(); place(hl, r, `${mode === "comment" ? "Comment on " : ""}${describe(n)}${mode === "comment" ? "" : " · " + size(r)}`); } else hl.hidden = true;
  };
  document.addEventListener("pointermove", e => { last = [e.clientX, e.clientY]; hover(e.target); });
  document.documentElement.addEventListener("pointerleave", () => { hl.hidden = true; });
  document.addEventListener("click", e => {
    if (mode === "move" || ignore(e.target)) return;
    e.preventDefault(); e.stopPropagation();
    if (mode === "comment") {
      closeOpen();
      const c = { id: Date.now(), x: e.pageX / document.documentElement.clientWidth, y: e.pageY, thread: [] };
      comments.push(c); openId = c.id; hl.hidden = true; renderPins(); return;
    }
    selected = pick(e.target); hl.hidden = true; draw(); if (mode === "inspect") fillInspect();
  }, true);
  document.addEventListener("pointerdown", e => { if (openId != null && !e.target.closest(".dt-pop,.dt-pin")) closeOpen(); });
  addEventListener("scroll", () => { redraw(); if (last && mode !== "move" && !matchMedia("(hover:none)").matches && layers.querySelector(":hover") == null) hover(document.elementFromPoint(last[0], last[1])); if (!layers.classList.contains("is-off")) spy(); }, { passive: true });
  addEventListener("resize", redraw);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { if (mode !== "move" || openId != null) setMode("move"); return; }
    if (e.ctrlKey || e.metaKey || e.altKey || e.target.closest?.("input,textarea,select,[contenteditable]") || $("#canvas")?.matches(":hover,:focus-within")) return;
    const m = { v: "move", s: "select", c: "comment", i: "inspect", l: "layers" }[e.key.toLowerCase()];
    if (m) setMode(m);
  });
  pins.hidden = false; renderPins();
  buildLayers(); if (innerWidth >= 1500) setLayers(true);
}

function initCanvas(openProject) {
  const cv = $("#canvas"), world = $("#world"), wrap = $("#canvas-wrap"), grid = $("#grid-wrap");
  if (!cv) return;
  const items = CONFIG.projects.items;
  const handles = rs => {
    const c = [["nw", "left:-4px;top:-4px"], ["ne", "right:-4px;top:-4px"], ["sw", "left:-4px;bottom:-4px"], ["se", "right:-4px;bottom:-4px"]];
    const e = [["n", "left:calc(50% - 4px);top:-4px"], ["s", "left:calc(50% - 4px);bottom:-4px"], ["w", "left:-4px;top:calc(50% - 4px)"], ["e", "right:-4px;top:calc(50% - 4px)"]];
    return (rs ? c.concat(e) : c).map(([k, p]) => `<i class="sel-h"${rs ? ` data-h="${k}"` : ""} style="${p}"></i>`).join("") + '<span class="frame-size" aria-hidden="true"></span>';
  };
  const H = handles(false), HR = handles(true);
  // Canva-style designs. type:"design", kind: ig | story | slide | thumb | logo | flyer | card | invite, v = colour variant (0-4).
  const PALS = [["#7c3aed", "#ec4899", "#ffffff", "#fde047"], ["#0ea5e9", "#22d3ee", "#07243a", "#ffffff"], ["#f97316", "#facc15", "#2b1200", "#ffffff"], ["#16a34a", "#bef264", "#052e16", "#ffffff"], ["#111827", "#374151", "#f9fafb", "#f472b6"]];
  const DESIGNS = {
    ig: v => { const [a, b, c, d] = PALS[v % 5]; return { n: "Instagram Post", w: 260, h: 260, html: `<div style="position:relative;display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;padding:26px;overflow:hidden;background:linear-gradient(135deg,${a},${b});color:${c};font-family:Georgia,serif"><i style="position:absolute;right:-40px;top:-40px;width:140px;height:140px;border-radius:50%;background:${d}"></i><p style="position:relative;font-size:38px;line-height:1;font-weight:700;font-style:italic">make it<br>pop.</p><p style="position:relative;margin-top:14px;font:600 11px system-ui;letter-spacing:.15em;text-transform:uppercase">@yourhandle</p></div>` }; },
    story: v => { const [a, b, c, d] = PALS[v % 5]; return { n: "Instagram Story", w: 180, h: 320, html: `<div style="position:relative;display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;padding:18px;overflow:hidden;background:${a};color:${c};font-family:system-ui"><i style="position:absolute;left:-30px;bottom:70px;width:170px;height:170px;border-radius:50%;background:${b}"></i><p style="position:relative;font:700 10px system-ui;letter-spacing:.2em">NEW DROP</p><p style="position:relative;font:800 48px/.9 system-ui;letter-spacing:-.04em">SALE<br>50%</p><p style="position:relative;align-self:flex-start;padding:6px 12px;border-radius:99px;background:${d};color:${a};font:700 11px system-ui">Swipe up ↑</p></div>` }; },
    slide: v => { const [a, b] = PALS[v % 5]; return { n: "Presentation", w: 320, h: 180, html: `<div style="display:flex;width:100%;height:100%;background:#fff;color:#111;font-family:system-ui"><i style="width:8px;background:${a}"></i><div style="display:flex;flex:1;flex-direction:column;padding:18px 20px"><p style="font:700 9px system-ui;letter-spacing:.18em;color:${a}">Q3 ROADMAP</p><p style="margin-top:6px;font:800 24px/1 system-ui;letter-spacing:-.03em">Ship less,<br>ship better.</p><div style="display:flex;align-items:flex-end;gap:6px;height:56px;margin-top:auto">${[30, 44, 38, 56, 50].map(h => `<i style="flex:1;height:${h}px;border-radius:2px;background:${b}"></i>`).join("")}</div></div></div>` }; },
    thumb: v => { const [a, b, c, d] = PALS[v % 5]; return { n: "YouTube Thumbnail", w: 320, h: 180, html: `<div style="position:relative;width:100%;height:100%;overflow:hidden;background:linear-gradient(120deg,${a},${b});font-family:Impact,'Arial Black',system-ui"><p style="position:absolute;left:16px;top:18px;max-width:200px;color:#fff;font-size:38px;line-height:.95;font-weight:900;text-shadow:3px 3px 0 #000">I BUILT THIS IN 24H</p><i style="position:absolute;right:18px;bottom:16px;display:grid;place-items:center;width:64px;height:64px;border-radius:50%;background:${d};color:${a};font:900 30px system-ui;transform:rotate(-10deg)">?!</i><i style="position:absolute;left:16px;bottom:16px;padding:4px 10px;background:#000;color:#fff;font:700 12px system-ui;letter-spacing:.1em">WATCH NOW</i></div>` }; },
    logo: v => { const [a, b] = PALS[v % 5]; return { n: "Logo", w: 240, h: 240, html: `<div style="display:grid;grid-template-columns:1fr 1fr;width:100%;height:100%;font-family:system-ui"><div style="display:grid;place-items:center;background:#f5f0e6"><b style="font:800 46px Georgia,serif;color:#111">F.</b></div><div style="display:grid;place-items:center;background:${a}"><b style="display:grid;place-items:center;width:64px;height:64px;border-radius:50%;background:#fff;color:${a};font-size:24px">fj</b></div><div style="display:grid;place-items:center;background:#111"><b style="color:#fff;font-size:15px;letter-spacing:.3em">FUUJIN</b></div><div style="display:grid;place-items:center;background:${b}"><i style="width:54px;height:54px;background:#fff;transform:rotate(45deg)"></i></div></div>` }; },
    flyer: v => { const [a, b, c, d] = PALS[v % 5]; return { n: "Flyer", w: 226, h: 320, html: `<div style="position:relative;display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;padding:20px;overflow:hidden;background:${a};color:${c};font-family:system-ui"><i style="position:absolute;right:-50px;top:70px;width:150px;height:150px;border-radius:50%;background:${b};opacity:.9"></i><p style="position:relative;font:700 10px system-ui;letter-spacing:.2em">OCT 24 · DAVAO</p><p style="position:relative;font:800 46px/.88 system-ui;letter-spacing:-.04em">DESIGN<br>NIGHT</p><div style="position:relative;display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid currentColor;font:600 10px system-ui"><span>Free entry</span><span style="padding:4px 8px;background:${d};color:${a}">RSVP</span></div></div>` }; },
    card: v => { const [a, b] = PALS[v % 5]; return { n: "Business Card", w: 280, h: 160, html: `<div style="display:flex;width:100%;height:100%;font-family:system-ui"><div style="display:grid;place-items:center;width:42%;background:${a}"><b style="color:#fff;font:800 34px Georgia,serif">F.</b></div><div style="display:flex;flex:1;flex-direction:column;justify-content:center;gap:4px;padding:16px;background:#fff;color:#111"><b style="font-size:15px">Your Name</b><span style="font-size:10px;color:#666">UI/UX Designer</span><i style="width:24px;height:3px;margin:8px 0;background:${b}"></i><span style="font-size:10px">hello@yourmail.com</span></div></div>` }; },
    invite: v => { const [a, b] = PALS[v % 5]; return { n: "Invitation", w: 240, h: 330, html: `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;width:100%;height:100%;padding:24px;border:8px solid ${a};background:#fbf6ec;color:#2a2118;font-family:Georgia,serif;text-align:center"><p style="font:600 10px system-ui;letter-spacing:.25em;color:${a}">YOU'RE INVITED</p><p style="font-size:34px;line-height:1;font-style:italic">Launch<br>Party</p><i style="width:40px;height:2px;background:${b}"></i><p style="font:500 11px/1.5 system-ui">Saturday · 7 PM<br>Rooftop, Davao City</p></div>` }; }
  };
  const designOf = x => (DESIGNS[x.kind] || DESIGNS.ig)(x.v || 0);
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
  const baseDims = x => x.type === "sticky" ? [x.w || 200, 100] : x.type === "comment" ? [Math.min(380, 70 + String(x.text).length * 8), 46] : x.type === "text" ? [String(x.text).length * 34, 70] : [x.w || 240, x.h || 160];
  const dims = x => {
    if (x.type === "design") { const d = designOf(x); return [d.w, d.h + 24]; }
    if (x.type === "note") return [x.w || 230, 56 + (x.lines || []).length * 24];
    if (x.type === "thread") return [300, 118 + (x.replies || []).length * 52];
    if (x.type === "code") return [x.w || 270, 50 + String(x.text).split("\n").length * 19];
    if (x.type === "status") return [230, 112];
    if (x.type === "measure") return [x.w || 120, 30];
    return baseDims(x);
  };
  const noteBoxes = [];
  const place = x => {
    const [w, h] = dims(x);
    const o = { ...x };
    if (o.type === "sticky") { o.color = o.color || NOTE_COLORS[Math.floor(rnd() * NOTE_COLORS.length)]; o.rot = o.rot ?? Math.round((rnd() - .5) * 9); }
    if (o.x != null && o.y != null) return o;
    let best = null;
    for (let k = 0; k < 160; k++) {
      const nx = Math.round(-200 + rnd() * (maxX + 400 - w)), ny = Math.round(-60 + rnd() * (maxY + 100 - h));
      const hit = (b, pad) => Math.max(0, Math.min(nx + w, b.r + pad) - Math.max(nx, b.l - pad)) * Math.max(0, Math.min(ny + h, b.b + pad) - Math.max(ny, b.t - pad));
      const cost = boxes.reduce((n, b) => n + hit(b, 8), 0) + noteBoxes.reduce((n, b) => n + hit(b, 8) * 4, 0);
      if (!best || cost < best.cost) best = { cost, x: nx, y: ny };
      if (cost === 0) break;
    }
    noteBoxes.push({ l: best.x, t: best.y, r: best.x + w, b: best.y + h });
    o.x = best.x; o.y = best.y;
    return o;
  };
  // Big layers get placed first so they find free space; small ones fill the gaps. Render order stays as written in CONFIG.
  const raw = CONFIG.projects.extras || [];
  const extras = new Array(raw.length);
  raw.map((x, i) => i).sort((a, b) => { const A = dims(raw[a]), B = dims(raw[b]); return B[0] * B[1] - A[0] * A[1]; }).forEach(i => { extras[i] = place(raw[i]); });
  const visual = (p, i) => p.image
    ? `<img src="${esc(p.image)}" alt="" loading="lazy" draggable="false" class="h-full w-full object-cover">`
    : `<div class="grid h-full w-full place-items-end p-5" style="background:linear-gradient(${135 + i * 35}deg,rgb(var(--accent-rgb)) 0%,color-mix(in srgb,rgb(var(--accent-rgb)) ${70 - i * 12}%,var(--fg)) 100%)"><span class="display text-7xl text-onaccent opacity-90">${esc(p.title.slice(0, 1))}</span></div>`;
  const project = (p, i) => {
    const { x, y } = pos[i];
    return `<div class="cf" data-i="${i}" data-band="${band[i]}" data-category="${esc(p.category)}" data-st="${stOf(p)}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Open ${esc(p.title)}" style="left:${x}px;top:${y}px;width:${wd[i]}px">
      <span class="cf-name pn">${esc(p.title)}</span><span class="cf-badge" style="--st:${STATUS[stOf(p)][1]}">${CHECK}<b>${STATUS[stOf(p)][0]}</b></span>
      <div class="cf-body flex flex-col overflow-hidden border border-line bg-bg">
        <div class="ar relative min-h-0 flex-1 overflow-hidden" style="${ratioCss(p)}">${visual(p, i)}${figmaUrl(p.figma) ? '<span class="absolute left-3 top-3 rounded-md bg-fg px-3 py-1 text-xs font-medium text-bg">Live Figma file</span>' : ""}</div>
        <div class="shrink-0 p-4"><h3 class="text-lg font-medium leading-tight tracking-tight">${esc(p.title)}</h3><p class="mt-1 line-clamp-2 text-sm text-mute">${esc(p.summary)}</p></div>
      </div><button type="button" data-open tabindex="-1" aria-hidden="true" class="cf-open">Open ↗</button>${HR}</div>`;
  };
  const extra = x => {
    const st = `left:${x.x}px;top:${x.y}px`;
    if (x.type === "design") { const d = designOf(x); return `<div class="cf" data-name="${esc(d.n)}" aria-hidden="true" style="${st}"><span class="cf-name">${esc(x.name || "Canva · " + d.n)}</span><div class="cf-body overflow-hidden border border-line shadow-md" style="width:${d.w}px;height:${d.h}px">${d.html}</div>${HR}</div>`; }
    if (x.type === "note") return `<div class="cf" data-name="${esc(x.title || "Notes")}" aria-hidden="true" style="${st}"><div class="border border-line bg-bg shadow-md" style="width:${x.w || 230}px"><div class="flex items-center gap-2 border-b border-line px-4 py-2.5 text-sm font-medium"><i style="display:block;width:10px;height:10px;border-radius:2px;background:${esc(x.color || "#ffe066")}"></i>${esc(x.title || "Notes")}</div><ul class="space-y-1.5 px-4 py-3 text-[13px] leading-snug">${(x.lines || []).map(l => `<li class="flex gap-2"><span class="text-mute">–</span><span>${esc(l)}</span></li>`).join("")}</ul></div>${H}</div>`;
    if (x.type === "thread") {
      const msg = (n, t, c, time) => `<div class="flex items-start gap-2 px-3 pt-3"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-medium text-white" style="background:${c}">${esc(String(n).slice(0, 1).toUpperCase())}</span><div class="min-w-0 flex-1"><p class="text-[13px]"><b>${esc(n)}</b>${time ? ` <span class="text-mute">${esc(time)}</span>` : ""}</p><p class="mt-0.5 text-[13px] leading-snug">${esc(t)}</p></div></div>`;
      const col = x.color || "#d6336c";
      return `<div class="cf" data-name="Comment thread" aria-hidden="true" style="${st}"><div class="flex items-start gap-2"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full rounded-bl-none text-sm font-medium text-white" style="background:${col}">${esc(String(x.author || "C").slice(0, 1).toUpperCase())}</span><div class="border border-line bg-bg shadow-md" style="width:260px">${msg(x.author || "Comment", x.text, col, x.time)}${(x.replies || []).map(r => msg(r.author, r.text, "#868e96")).join("")}<div class="mt-3 flex items-center justify-between border-t border-line px-3 py-2 text-xs text-mute"><span>Reply…</span><span class="inline-flex items-center gap-1" style="${x.resolved ? "color:#14ae5c" : ""}">${CHECK}${x.resolved ? "Resolved" : "Resolve"}</span></div></div></div>${H}</div>`;
    }
    if (x.type === "code") {
      const hl = l => { const s = esc(l), m = /^(\s+)([a-z-]+):\s(.*)$/.exec(s); return m ? `${m[1]}<span style="color:#79c0ff">${m[2]}</span>: <span style="color:#ffa657">${m[3]}</span>` : /\{$/.test(s) ? `<span style="color:#d2a8ff">${s}</span>` : s; };
      return `<div class="cf" data-name="CSS snippet" aria-hidden="true" style="${st}"><span class="cf-name">${esc(x.name || "Inspect · CSS")}</span><pre class="overflow-hidden px-4 py-3 text-[12px] shadow-md" style="width:${x.w || 270}px;margin:0;border-radius:8px;background:#14171f;color:#c9d1d9;line-height:19px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace">${String(x.text).split("\n").map(hl).join("\n")}</pre>${H}</div>`;
    }
    if (x.type === "status") { const s = STATUS[x.state] || STATUS.ready; return `<div class="cf" data-name="${esc(x.name || "Dev status")}" aria-hidden="true" style="${st}"><div class="border border-line bg-bg p-3 shadow-md" style="width:230px"><p class="text-xs text-mute">${esc(x.name || "Dev status")}</p><p class="mt-1.5 inline-flex items-center gap-1.5 rounded px-2 py-1 text-[13px] font-medium text-white" style="background:${s[1]}">${CHECK}${s[0]}</p><p class="mt-2 text-xs leading-snug text-mute">${esc(x.text || "")}</p></div>${H}</div>`; }
    if (x.type === "measure") { const w = x.w || 120; return `<div class="cf" aria-hidden="true" style="${st};pointer-events:none"><div style="position:relative;width:${w}px;height:30px;color:#f24e9a"><i style="position:absolute;left:0;top:6px;width:1px;height:18px;background:currentColor"></i><i style="position:absolute;right:0;top:6px;width:1px;height:18px;background:currentColor"></i><i style="position:absolute;left:0;right:0;top:14px;height:1px;background:currentColor"></i><span style="position:absolute;left:50%;top:-2px;transform:translateX(-50%);padding:3px 5px;border-radius:3px;background:currentColor;color:#fff;font-size:11px;line-height:1;white-space:nowrap">${esc(x.text ?? w)}</span></div></div>`; }
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

  let tx = 0, ty = 0, sc = 1, tool = "move", space = false, full = false, hover = false, focus = false, drag = null, zTop = 1, dev = false, touched = false;
  const apply = () => { world.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`; $("#zoom-readout").textContent = Math.round(sc * 100) + "%"; world.style.setProperty("--inv", 1 / sc); world.style.setProperty("--sc", sc); world.classList.toggle("low", sc < .6); };
  const zoomAt = (f, cx = cv.clientWidth / 2, cy = cv.clientHeight / 2) => {
    const n = Math.min(2, Math.max(0.05, sc * f));
    tx = cx - (cx - tx) * n / sc; ty = cy - (cy - ty) * n / sc; sc = n; apply();
  };
  // Fit = zoom out so every frame and layer on the page is in view. This is also the default view.
  const fit = () => {
    let x1 = 1e9, y1 = 1e9, x2 = -1e9, y2 = -1e9;
    $$(".cf", world).forEach(f => { x1 = Math.min(x1, f.offsetLeft); y1 = Math.min(y1, f.offsetTop); x2 = Math.max(x2, f.offsetLeft + f.offsetWidth); y2 = Math.max(y2, f.offsetTop + f.offsetHeight); });
    if (!cv.clientWidth || x2 < x1) return;
    sc = Math.min(1, (cv.clientWidth - 80) / (x2 - x1), (cv.clientHeight - 120) / (y2 - y1 + 24));
    tx = (cv.clientWidth - (x2 - x1) * sc) / 2 - x1 * sc;
    ty = (cv.clientHeight - (y2 - y1) * sc) / 2 - y1 * sc + 24 * sc;
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
    fit();
  };

  // Dev mode: outlines frames, dims the finished ones, and shows an inspector for the selected layer.
  const inspect = f => {
    const box = $("#dev-body");
    if (!box) return;
    if (!f) { box.innerHTML = '<p class="text-mute">Select a frame to see its size, status and CSS.</p>'; box.dataset.css = ""; return; }
    const p = f.dataset.i != null ? items[f.dataset.i] : null;
    const name = p ? p.title : (f.dataset.name || "Layer");
    const w = Math.round(f.offsetWidth), h = Math.round(f.offsetHeight), x = Math.round(f.offsetLeft), y = Math.round(f.offsetTop);
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "layer";
    const css = `.${slug} {\n  width: ${w}px;\n  height: ${h}px;\n  border: 1px solid var(--line);\n  background: var(--bg);\n}`;
    const st = p ? STATUS[stOf(p)] : null;
    const row = (k, v) => `<div class="flex items-center justify-between rounded border border-line px-2 py-1.5"><span class="text-mute">${k}</span><span>${v}</span></div>`;
    box.innerHTML = `
      <p class="truncate font-medium">${esc(name)}</p>
      ${st ? `<p class="mt-1.5 inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-white" style="background:${st[1]}">${CHECK}${st[0]}</p>` : ""}
      <div class="mt-3 grid grid-cols-2 gap-2">${row("W", w)}${row("H", h)}${row("X", x)}${row("Y", y)}</div>
      <div class="mt-3 flex items-center justify-between"><span class="font-medium">CSS</span><button type="button" data-copy class="text-xs underline">Copy</button></div>
      <pre class="mt-2 overflow-auto rounded p-3 text-[11px]" style="margin:0;background:#14171f;color:#c9d1d9;line-height:17px;font-family:ui-monospace,Menlo,monospace">${esc(css)}</pre>
      ${p && p.tags?.length ? `<p class="mt-3 text-mute">Stack</p><p class="mt-1 flex flex-wrap gap-1">${p.tags.map(t => `<span class="rounded border border-line px-1.5 py-0.5 text-xs">${esc(t)}</span>`).join("")}</p>` : ""}
      ${p && p.image ? `<p class="mt-3 text-mute">Asset</p><p class="mt-1 truncate text-xs">${esc(p.image)}</p>` : ""}
      ${p && p.repo && safeUrl(p.repo) ? `<a href="${esc(safeUrl(p.repo))}" target="_blank" rel="noopener noreferrer" class="mt-3 inline-block underline">Open repo ↗</a>` : ""}`;
    box.dataset.css = css;
  };
  const devSync = () => { if (dev) inspect($(".cf.on", world)); };
  const setDev = on => {
    dev = on;
    cv.classList.toggle("dev", on);
    $("[data-dev]", cv).setAttribute("aria-pressed", on);
    $("#dev-panel").classList.toggle("is-off", !on);
    if (on) inspect($(".cf.on", world));
  };
  $("#dev-panel").addEventListener("click", e => {
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    copyText($("#dev-body").dataset.css || "").then(ok => { b.textContent = ok ? "Copied" : "Copy failed"; setTimeout(() => { b.textContent = "Copy"; }, 1200); });
  });

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
    if (e.target.closest(".cv-bar, #dev-panel, [data-open]")) return;
    touched = true;
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
    devSync();
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
    devSync();
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
    touched = true;
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
    touched = true;
    if (b.dataset.tool) setTool(b.dataset.tool);
    else if (b.dataset.zoom) zoomAt(b.dataset.zoom > 0 ? 1.2 : 1 / 1.2);
    else if ("fit" in b.dataset) fit();
    else if ("dev" in b.dataset) setDev(!dev);
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
    else if (k === "d") setDev(!dev);
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
  document.fonts?.ready.then(() => { if (!touched && !full) fit(); });   // re-fit once fonts settle, unless the visitor already moved the canvas
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
            ${fig ? `<div class="relative mt-6 aspect-[4/3] w-full overflow-hidden border border-line"><div class="fig-load" aria-hidden="true"><svg class="cv-logo h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS.figma}</svg><div class="cv-prog"><i></i></div><p class="text-xs text-mute">Opening file…</p></div><iframe onload="this.previousElementSibling?.remove()" title="${esc(p.title)} in Figma" src="https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(fig)}" loading="lazy" allowfullscreen class="h-full w-full"></iframe></div>` : ""}
            ${p.tags?.length ? `<ul class="mt-6 flex flex-wrap gap-2">${p.tags.map(t => `<li class="rounded-md border border-line px-3 py-1 text-sm">${esc(t)}</li>`).join("")}</ul>` : ""}
            ${links.length ? `<div class="mt-8 flex flex-wrap gap-3">${links.map(([u, l], i) => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" class="${i ? fGhost : fPrimary}">${l}<span class="sr-only"> (opens in a new tab)</span></a>`).join("")}</div>` : ""}
          </div>
        </div>
      </div>`;
    modal.showModal();
    document.body.style.overflow = "hidden";
  };
  $("#grid-wrap").addEventListener("click", e => { const b = e.target.closest("[data-project]"); if (b) openProject(b.dataset.project, b); });
  modal.addEventListener("click", e => { if (e.target === modal || e.target.closest("[data-close]")) modal.close(); });
  modal.addEventListener("close", () => { document.body.style.overflow = ""; opener?.focus(); });
  initCanvas(openProject);
}

/* ==========================================================================
   Figma-style comment pins (CONFIG.comments)
   ========================================================================== */
function initComments() {
  const C = CONFIG.comments;
  if (!C || C.enabled === false || !Array.isArray(C.items)) return;
  const corners = ["tr", "br", "tl", "bl"];
  const hex = c => /^#[0-9a-f]{3,8}$/i.test(c || "") ? c : "#0b7285";
  const ini = n => esc(String(n || "?").trim().charAt(0).toUpperCase());
  const svg = d => `<svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const msg = (m, first) => `<div class="fcm-row"><span class="fcm-av" style="--cc:${m.color ? hex(m.color) : "rgb(var(--accent-rgb))"}" aria-hidden="true">${ini(m.author)}</span><div class="fcm-main"><div class="fcm-head"><b>${esc(m.author || "")}</b>${m.time ? `<span>${esc(m.time)}</span>` : ""}${first ? `<button type="button" class="fcm-res" data-fcm-res aria-pressed="false" aria-label="Mark as resolved" title="Resolve">${svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>')}</button>` : ""}</div><p class="fcm-text">${esc(m.text)}</p></div></div>`;

  C.items.forEach((t, i) => {
    if (!t?.text) return;
    let host = null;
    try { host = $(t.at || ""); } catch {}
    if (!host) return;
    if (getComputedStyle(host).position === "static") host.style.position = "relative";
    const replies = [].concat(t.replies || t.reply || []).filter(r => r?.text);
    const pin = document.createElement("span");
    pin.className = `fcm ${corners.includes(t.pin) ? t.pin : "tr"}`;
    pin.style.setProperty("--cc", hex(t.color));
    pin.style.setProperty("--d", String(i * 0.7));
    pin.innerHTML = `<button type="button" class="fcm-pin" aria-expanded="false" aria-haspopup="dialog" aria-label="Comment from ${esc(t.author || "someone")}: ${esc(t.text)}">${ini(t.author)}</button>
      <div class="fcm-pop" role="dialog" aria-label="Comment thread">${msg(t, true)}${replies.map(r => msg(r, false)).join("")}<button type="button" class="fcm-input" data-fcm-reply><span>Reply</span><span class="fcm-send" aria-hidden="true">${svg('<path d="M12 19V5M5 12l7-7 7 7"/>')}</span></button></div>`;
    host.appendChild(pin);
  });

  // keep the popover inside the screen
  const place = f => {
    const pop = $(".fcm-pop", f);
    pop.style.setProperty("--sx", "0px");
    const r = pop.getBoundingClientRect();
    const dx = r.left < 8 ? 8 - r.left : r.right > innerWidth - 8 ? innerWidth - 8 - r.right : 0;
    pop.style.setProperty("--sx", dx + "px");
  };
  const setOpen = (f, on) => { f.classList.toggle("open", on); $(".fcm-pin", f).setAttribute("aria-expanded", on); if (on) place(f); };
  const closeAll = except => $$(".fcm.open").forEach(f => { if (f !== except) setOpen(f, false); });

  document.addEventListener("click", e => {
    const f = e.target.closest?.(".fcm");
    closeAll(f);
    if (!f) return;
    if (e.target.closest(".fcm-pin")) return setOpen(f, !f.classList.contains("open"));
    const res = e.target.closest("[data-fcm-res]");
    if (res) {
      const on = !f.classList.contains("done");
      f.classList.toggle("done", on); res.setAttribute("aria-pressed", on);
      if (on) setOpen(f, false);
      return;
    }
    if (e.target.closest("[data-fcm-reply]")) { setOpen(f, false); $("[data-contact]")?.click(); }   // Reply opens the contact window
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });
  $$(".fcm").forEach(f => f.addEventListener("mouseenter", () => place(f)));
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
  renderChrome();
  $("#main").insertAdjacentHTML("beforeend", hero() + enabled.map(s => builders[s.id]?.() || "").join(""));
  initMenu();
  initProjects();
  initReveal();
  initDesignTools();
  initTheme();
  initSkills();
  initContact();
  initComments();
  initCursors();
  initScrollSpy();
}
init();