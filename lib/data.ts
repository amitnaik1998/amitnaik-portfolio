export const personal = {
  name: "Amit Annappa Naik",
  nameShort: "Amit Naik",
  role: "Full Stack Engineer",
  tagline: "I ship production mobile and web apps that feel fast.",
  location: "Bangalore, India",
  email: "gaamitnaik@gmail.com",
  phone: "+91 9663741473",
  linkedin: "https://www.linkedin.com/in/amit-annappa-naik",
  github: "", // add if you have one
  website: "https://amitnaik.xyz",
  available: "Open to Full Stack / React Native roles",
};

export const about = {
  body: `Full Stack Engineer with 5+ years building production-grade mobile and web applications. Sole mobile engineer behind GTR.Trade, a multi-chain DeFi trading platform shipped to App Store and Google Play. End-to-end ownership across React Native, Next.js, and Node.js — from co-designing backend architecture to shipping real products to real users. Deep expertise in real-time WebSocket systems, cross-chain blockchain infrastructure, and high-performance mobile architecture. Comfortable wearing multiple hats in small, fast-moving teams.`,
  keywords: [
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "WebSockets",
    "Solana",
    "EVM",
    "Performance",
    "MongoDB",
    "Full Stack",
  ],
};

export const metrics = [
  {
    value: 33,
    suffix: "%",
    label: "Cold start reduction",
    detail: "3s → 2s on GTR.Trade",
  },
  {
    value: 60,
    suffix: "%",
    label: "Faster screen loads",
    detail: "2s → 800ms on search",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years shipping production",
    detail: "Mobile & web across fintech, Web3, edtech",
  },
];

export const marqueeKeywords = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Node.js",
  "WebSockets",
  "Solana",
  "EVM",
  "MongoDB",
  "Expo",
  "Zustand",
  "Redux",
  "GraphQL",
  "AWS",
  "Firebase",
  "Tamagui",
  "Web3",
  "DeFi",
  "Real-time",
  "Performance",
  "Full Stack",
];

export const featuredProject = {
  name: "GTR.Trade",
  subtitle: "Multi-Chain DeFi Trading Platform",
  url: "https://gtr.trade",
  role: "Sole mobile engineer · Co-architect (backend & web)",
  description:
    "A unified mobile trading experience across crypto perpetuals, RWA perpetuals, and on-chain DEX trading. Shipped to App Store and Google Play from zero.",
  highlights: [
    "Reduced cold start 33% (3s → 2s), search screen load 60% (2s → 800ms), tab-switch latency 50%+ via FlatList optimization, memoization, lazy loading, and navigation architecture improvements.",
    "Built real-time trading infrastructure integrating multiple simultaneous WebSocket streams (Hyperliquid, Ostium, on-chain DEX) in one app.",
    "Integrated cross-chain swap infra (Jupiter, Relay.link, Mayan.finance, Debridge) across Solana and EVM networks.",
    "Reverse-engineered Ostium's Python SDK (no docs) to build the full RWA perpetuals workflow on mobile and web.",
    "Co-designed the backend (Node, Express, MongoDB) and co-built the Next.js web frontend — leading trading UI architecture.",
    "Designed referral/clan rewards ecosystem, live trading competitions, and leaderboard systems.",
  ],
  stack: ["React Native", "Expo", "TypeScript", "Next.js", "Node.js", "MongoDB", "WebSockets", "Solana", "EVM"],
};

export const experience = [
  {
    company: "RLC Labs Ltd",
    location: "Dubai · Remote",
    period: "Jan 2024 — Present",
    titles: ["Lead Full Stack Developer"],
    blurb:
      "Early-stage Web3 startup (2→3 engineering team). Co-designed the backend architecture, owned the full React Native codebase as sole mobile engineer, co-built the Next.js web frontend.",
    projects: [
      {
        name: "GTR.Trade · Multi-chain DeFi trading",
        bullets: [
          "Shipped React Native app to App Store & Google Play from zero.",
          "33% cold start improvement, 60% faster search, 50%+ lower tab-switch latency.",
          "Real-time WebSocket streams across Hyperliquid, Ostium, and on-chain DEX.",
          "Cross-chain swaps via Jupiter, Relay.link, Mayan.finance, Debridge.",
        ],
      },
      {
        name: "Follows.app · Social trading platform",
        bullets: [
          "Built backends indexing smart contract events across EVM and Solana in real time.",
          "Transaction parsing engine syncing on-chain Solana data with backend logic.",
          "Integrated Privy, GetStream, 100ms.live, OneSignal, AWS S3.",
          "Shipped the Next.js marketing homepage.",
        ],
      },
    ],
  },
  {
    company: "Robosoft Technologies",
    location: "Udupi",
    period: "Sep 2020 — Dec 2023",
    titles: ["Software Engineer", "Associate Software Engineer", "Junior Software Engineer"],
    blurb:
      "Product engineering services. Small cross-functional teams (2–4 engineers) collaborating directly with enterprise clients across multiple mobile projects.",
    projects: [
      {
        name: "Invesco · Mutual fund investment app",
        bullets: [
          "Stepped up as de facto project lead after the senior lead resigned.",
          "Guided two junior developers; ensured on-time delivery.",
          "Built Add New Investor module with multi-screen form validation.",
          "Shipped SIP / SWP / STP calculators and Firebase push with deep linking.",
        ],
      },
      {
        name: "Learning Islands · Disney",
        bullets: [
          "Built 4–5 interactive islands with level-based progression.",
          "Layered Lottie + SVG animations with dynamic scaling across phones to tablets.",
          "Drag-and-drop, quiz, and memory-match games with animated buddy characters.",
          "Offline content download with progress tracking; Firebase Analytics.",
        ],
      },
      {
        name: "Nihon · Reliance Nippon Life Insurance",
        bullets: [
          "Led refactor of files exceeding 8,000+ lines for maintainability and performance.",
          "Benefit Illustrator with expandable cards, search/filter, multi-type inputs.",
          "Performance Coaching module with custom tabs and dynamic charts.",
          "Retrofitted full tablet support across the near-complete app.",
        ],
      },
    ],
  },
];

export const skills = {
  Mobile: ["React Native (Expo & Bare)", "TypeScript", "Tamagui", "Zustand", "Redux"],
  Frontend: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "SCSS"],
  Backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "REST", "GraphQL", "WebSockets"],
  "Cloud & DevOps": ["AWS (EC2, S3)", "Digital Ocean", "CI/CD", "App Store & Play deployment", "Analytics", "Crashlytics"],
  Tools: ["Git", "Figma", "Cursor", "Google Antigravity", "Lottie", "Postman", "Jira", "Notion", "Linear"],
};

export const education = {
  degree: "B.E. in Computer Science & Engineering",
  school: "PESITM, Shimoga",
  period: "Aug 2016 — Aug 2020",
  cgpa: "7.8 / 10",
};

export const languages = ["English", "Kannada", "Hindi"];
