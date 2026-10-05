export interface Project {
  id: number;
  title: string;
  category: 'shopify' | 'wix' | 'custom';
  categoryLabel: string;
  img: string;
  liveUrl: string;
  tagline: string;
  description: string;
  tags: string[];
  role: string;
  highlights: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
  tech: string[];
  accentColor?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  field: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Tanvir Khan",
  shortName: "Tanvir",
  role: "Front-End Developer & CMS Expert (Wix & Shopify)",
  subRole: "Specializing in Shopify (Liquid), Wix Studio & Modern React Frontend",
  currentCompany: "Betopia Group",
  currentRole: "Front-End Developer & CMS Expert at Betopia Group",
  location: "Dhaka, Bangladesh",
  email: "kmtanvir1111@gmail.com",
  backupEmail: "tanvirkhanbdcalling016@gmail.com",
  phone: "+880 1959-948542",
  whatsapp: "+8801959948542",
  github: "https://github.com/tanvirkhan00",
  linkedin: "https://www.linkedin.com/in/kmtanvir/",
  resumeUrl: "/Resume_Tanvir_Khan.pdf",
  avatarUrl: "/images/tanvir.jpg",
  projectsCompleted: "200+",
  status: "Available for high-impact projects & full-time roles",
  bioIntro: "Hello! I'm Tanvir Khan, a passionate Front-End Developer & CMS Expert (Wix & Shopify) at Betopia Group. With 200+ projects completed, I specialize in crafting ultra-responsive, visually rich, and conversion-focused websites.",
  aboutStory: [
    "I currently work as a Front-End Developer & CMS Expert at Betopia Group. Over my career, I have successfully delivered 200+ web and e-commerce projects for clients worldwide, specializing in custom Shopify Liquid themes, Theme OS 2.0 architectures, and responsive Wix Studio websites.",
    "My engineering background is grounded in a B.Sc. in Civil Engineering (graduated in 2023), which gave me an obsessive eye for detail, structural problem-solving, and mathematical precision. I brought that analytical rigor into modern web engineering.",
    "I love building high-performing, interactive web experiences where clean modern code meets colorful, memorable design aesthetics."
  ],
  quickStats: [
    { label: "Projects Completed", value: "200+" },
    { label: "Current Company", value: "Betopia Group" },
    { label: "Core Platforms", value: "Shopify & Wix Studio" },
    { label: "Frontend Stack", value: "React & Tailwind CSS" }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Simone Prince",
    category: "shopify",
    categoryLabel: "Shopify",
    img: "/images/ornamets_cover.png",
    liveUrl: "https://bysimoneprince.com/",
    tagline: "Elegant jewelry & ornaments e-commerce store",
    description: "Built a custom Shopify store for a luxury jewelry brand with tailored Liquid theme sections, interactive variant selectors, slide-out cart drawer, and custom engraving fields.",
    role: "Shopify Theme Customizer & Developer",
    tags: ["Shopify", "Liquid", "Theme OS 2.0", "Cart Drawer", "CSS3"],
    highlights: [
      "Custom product page layout with variant swatches",
      "Dynamic slide-out cart drawer with free shipping progress bar",
      "Liquid modifications for personalized engraving text inputs",
      "100% mobile-friendly responsive optimization"
    ]
  },
  {
    id: 2,
    title: "E-bike Horizon",
    category: "shopify",
    categoryLabel: "Shopify",
    img: "/images/Cover1.png",
    liveUrl: "https://ebikehorizon.com/",
    tagline: "Electric bike and urban mobility storefront",
    description: "Engineered a high-performance Shopify store for electric bikes featuring interactive technical specification tables, battery range comparison guides, and accessory bundling.",
    role: "Shopify Developer",
    tags: ["Shopify", "Liquid", "Specs Accordion", "Responsive UI"],
    highlights: [
      "Custom specification tabs for bike motor and battery details",
      "Accessories upsell section with one-click cart additions",
      "Responsive comparison grid between bike models",
      "Optimized imagery delivery for fast mobile browsing"
    ]
  },
  {
    id: 3,
    title: "Push BY Gigi",
    category: "shopify",
    categoryLabel: "Shopify",
    img: "/images/pushByGigi.png",
    liveUrl: "https://www.poshbygigi.com/",
    tagline: "Contemporary fashion and apparel boutique",
    description: "Developed a modern Shopify fashion boutique with dynamic lookbook sections, Instagram feed integration, sticky buy button on mobile, and curated collection filtering.",
    role: "Shopify Developer",
    tags: ["Shopify", "Liquid", "Fashion Apparel", "Sticky Buy"],
    highlights: [
      "Shoppable lookbook grid with product tag hotspots",
      "Sticky 'Add to Cart' bar on mobile screens for faster checkout",
      "Color swatches that switch product images smoothly",
      "Collection filtering by size, color, and price"
    ]
  },
  {
    id: 4,
    title: "Kalanda Steel",
    category: "shopify",
    categoryLabel: "Shopify",
    img: "/images/kalandulaSteel.png",
    liveUrl: "https://www.kalandulasteel.com/",
    tagline: "Industrial hardware & architectural steel supplies",
    description: "Customized Shopify store tailored for industrial steel products with bulk pricing tier options, dimension display tables, and custom quote inquiry forms.",
    role: "Shopify Developer",
    tags: ["Shopify", "Liquid", "B2B Catalog", "Custom Form"],
    highlights: [
      "Custom request-a-quote form integrated into product pages",
      "Volume tier pricing discount displays built with Liquid",
      "Technical PDF specification download links",
      "High-contrast, sturdy industrial design aesthetic"
    ]
  },
  {
    id: 5,
    title: "Blush & Babe",
    category: "shopify",
    categoryLabel: "Shopify",
    img: "/images/Blush & Babe.png",
    liveUrl: "https://www.blushandbabe.com/",
    tagline: "Clean skincare and organic cosmetics store",
    description: "Built a gentle, aesthetic beauty store on Shopify featuring ingredient breakdown accordions, customer photo reviews, and bundle discount mechanics.",
    role: "Shopify Developer",
    tags: ["Shopify", "Liquid", "Beauty & Care", "Reviews Integration"],
    highlights: [
      "Custom ingredient spotlight accordion modules",
      "Bundle savings calculator with visual progress indicator",
      "Customer photo review carousel integration",
      "Cross-sell product recommendations in cart drawer"
    ]
  },
  {
    id: 6,
    title: "Mathodology",
    category: "shopify",
    categoryLabel: "Shopify",
    img: "/images/Mathodology.png",
    liveUrl: "https://thinkmathematics.com/",
    tagline: "Educational math curriculum and teaching materials",
    description: "Developed a structured educational store on Shopify for teachers and schools with grade-level filtering, digital curriculum downloads, and license options.",
    role: "Shopify Developer",
    tags: ["Shopify", "Digital Downloads", "Catalog Filters", "Liquid"],
    highlights: [
      "Multi-level filtering by school grade and curriculum topic",
      "Automated digital file delivery integration",
      "School purchase order inquiry pathways",
      "Clear instructional typography and navigation structure"
    ]
  },
  {
    id: 7,
    title: "Listo Works",
    category: "wix",
    categoryLabel: "Wix Studio",
    img: "/images/Listo.png",
    liveUrl: "https://www.listo.works/",
    tagline: "Creative production and media agency portfolio",
    description: "Created a fluid responsive agency website using Wix Studio and Velo JavaScript. Implemented interactive project showreels, custom animated transitions, and dynamic inquiry forms.",
    role: "Wix Studio Developer",
    tags: ["Wix Studio", "Velo Code", "Fluid Responsive", "Animation"],
    highlights: [
      "Pixel-perfect responsive scaling across 4K, laptop, and mobile screens",
      "Interactive category filtering powered by Wix Velo database queries",
      "Multi-step inquiry form connected to CRM",
      "Optimized media showcase with zero playback lag"
    ]
  },
  {
    id: 8,
    title: "Yuriana Home",
    category: "wix",
    categoryLabel: "Wix Studio",
    img: "/images/yuriana.png",
    liveUrl: "https://yuriana15.wixsite.com/yurianahome",
    tagline: "Interior architecture and residential styling studio",
    description: "Crafted a clean interior styling portfolio on Wix with before/after makeover photo sliders, consultation booking calendar, and project galleries.",
    role: "Wix Developer",
    tags: ["Wix Studio", "Bookings", "Interior Design", "Masonry"],
    highlights: [
      "Interactive before-and-after slider for room transformations",
      "Integrated Wix Bookings calendar for design consultations",
      "High-resolution image masonry gallery",
      "Mobile-optimized contact and inquiry workflow"
    ]
  },
  {
    id: 9,
    title: "Cris T Ventures",
    category: "wix",
    categoryLabel: "Wix Studio",
    img: "/images/CrisTVentures.png",
    liveUrl: "https://www.cristventures.us/",
    tagline: "Venture capital and entrepreneurial advisory portal",
    description: "Designed and developed an executive corporate website on Wix featuring portfolio company directories, leadership team cards, and pitch deck submission pathways.",
    role: "Wix Developer",
    tags: ["Wix Studio", "Corporate", "Portfolio Directory"],
    highlights: [
      "Categorized directory of venture investments",
      "Investor contact and pitch submission form",
      "Clean executive typography with high contrast",
      "Fast worldwide load times with Wix global CDN"
    ]
  },
  {
    id: 10,
    title: "The Steak Shop",
    category: "wix",
    categoryLabel: "Wix Studio",
    img: "/images/Steak Shop.png",
    liveUrl: "https://www.thesteakshop.co.uk/",
    tagline: "Gourmet butcher & chilled meat delivery store (UK)",
    description: "Built an e-commerce website on Wix for a premium UK butcher featuring a temperature-controlled shipping date picker, cut-by-weight pricing, and recipes.",
    role: "Wix E-Commerce Developer",
    tags: ["Wix E-Commerce", "Date Picker", "UK Postal System"],
    highlights: [
      "Custom delivery date selector preventing transit delays",
      "Weight-based cut selection with real-time price updates",
      "Culinary recipe cards with one-click ingredient bundling",
      "Secure Stripe and PayPal checkout integration"
    ]
  },
  {
    id: 11,
    title: "Footy Friends United",
    category: "wix",
    categoryLabel: "Wix Studio",
    img: "/images/footy Friends United.png",
    liveUrl: "https://www.footyfriendsunited.co.uk/",
    tagline: "Grassroots football community club website",
    description: "Developed a community sports website on Wix with match fixtures, team schedules, training clinic registration forms, and photo gallery archives.",
    role: "Wix Developer",
    tags: ["Wix", "Sports Club", "Registration Forms"],
    highlights: [
      "Dynamic league table and match fixtures schedule",
      "Online player registration form with parent waiver",
      "Match recap photo gallery with lightbox",
      "Local sponsor logo showcase ribbon"
    ]
  },
  {
    id: 12,
    title: "Krist Ecommerce",
    category: "custom",
    categoryLabel: "Custom Code / React",
    img: "/images/krist e-commerce.png",
    liveUrl: "https://kristecommerce.netlify.app/",
    tagline: "Full-stack React & Firebase apparel web app",
    description: "Built a modern Single Page Application (SPA) e-commerce store with React, Tailwind CSS, Firebase authentication, dynamic REST API product loading, and cart state management.",
    role: "Frontend Engineer (Personal Project)",
    tags: ["React.js", "Firebase Auth", "REST API", "Tailwind CSS"],
    highlights: [
      "User authentication with Firebase (Email & passwordless)",
      "Persistent cart state using browser LocalStorage",
      "Live search, category tabs, and price range filtering",
      "Responsive checkout flow with order summary"
    ]
  },
  {
    id: 13,
    title: "Exclusive Ecommerce",
    category: "custom",
    categoryLabel: "Custom Code / React",
    img: "/images/Exclusive_Ecommerce.png",
    liveUrl: "https://exclusive-ecommerce-project.netlify.app/",
    tagline: "Electronics & lifestyle shopping application",
    description: "Developed a high-performance e-commerce prototype from scratch using React and modern CSS. Implemented a flash-sale countdown timer, product wishlist, and responsive cart.",
    role: "Frontend Engineer (Personal Project)",
    tags: ["React.js", "Tailwind CSS", "Flash Sale Timer", "Wishlist"],
    highlights: [
      "Real-time countdown timer for flash sales",
      "Wishlist state saved across browsing sessions",
      "Customer rating calculations and review cards",
      "Zero layout shift on mobile viewports"
    ]
  },
  {
    id: 14,
    title: "Woody Website",
    category: "custom",
    categoryLabel: "Custom Code",
    img: "/images/WoddyCover.png",
    liveUrl: "https://woodyagency.netlify.app/",
    tagline: "Minimalist wooden furniture showcase",
    description: "A clean, minimalist furniture landing page built with HTML5, Tailwind CSS, and vanilla JavaScript. Features smooth scroll animations and refined architectural spacing.",
    role: "Frontend Developer (Personal Project)",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Minimalism"],
    highlights: [
      "Clean aesthetic with generous whitespace and typography",
      "Subtle micro-interactions on hover and scroll",
      "Super-lightweight bundle without framework overhead",
      "Full mobile responsiveness"
    ]
  },
  {
    id: 15,
    title: "Interno Home",
    category: "custom",
    categoryLabel: "Custom Code",
    img: "/images/small-house-design-ideas.jpg",
    liveUrl: "https://internohome.netlify.app/",
    tagline: "Modern interior design & architecture website",
    description: "Created a responsive agency website for interior designers using semantic HTML, Tailwind CSS, and JavaScript. Showcases past renovation projects in a clean photo grid.",
    role: "Frontend Developer (Personal Project)",
    tags: ["Tailwind CSS", "JavaScript", "Grid Layout", "Interior"],
    highlights: [
      "Responsive grid gallery with photo previews",
      "Service cards with subtle hover elevations",
      "Clean contact form layout",
      "Smooth mobile drawer navigation"
    ]
  },
  {
    id: 16,
    title: "Delicious City",
    category: "custom",
    categoryLabel: "Custom Code",
    img: "/images/yummyFastFoods.png",
    liveUrl: "https://yummyfastfoods.netlify.app/",
    tagline: "Fast food restaurant menu & ordering interface",
    description: "Designed a responsive digital food menu and ordering interface with instant food category switching, modifier options, and interactive cart calculations.",
    role: "Frontend Developer (Personal Project)",
    tags: ["HTML5", "CSS3", "JavaScript", "Food Menu"],
    highlights: [
      "Instant category filtering without page reload",
      "Item customizations with add-on modifier pricing",
      "Live order summary drawer with total calculations",
      "Touch-friendly tap targets for smartphone use"
    ]
  },
  {
    id: 17,
    title: "Yummy Snacks",
    category: "custom",
    categoryLabel: "Custom Code",
    img: "/images/yummyBurger.png",
    liveUrl: "https://yummysnacks.netlify.app/",
    tagline: "Artisan burger & street food website",
    description: "Built a high-contrast culinary showcase website with HTML5, CSS3, and Tailwind CSS. Highlights special combo offers, customer ratings, and location directions.",
    role: "Frontend Developer (Personal Project)",
    tags: ["Tailwind CSS", "JavaScript", "Street Food", "Responsive"],
    highlights: [
      "Dark culinary aesthetic that highlights food photography",
      "Combo deal configurator with size selections",
      "Customer reviews and social media showcase ribbon",
      "Direct Google Maps location integration"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: "2025 - Present",
    role: "Front-End Developer & CMS Expert (Wix & Shopify)",
    company: "Betopia Group",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    accentColor: "from-cyan-500 via-indigo-500 to-fuchsia-500",
    description: "Lead CMS and Front-End engineering across international client portfolios, building high-conversion Shopify Liquid themes, dynamic Wix Studio architectures, and custom interactive web components.",
    bullets: [
      "Engineered and customized 50+ commercial Shopify stores utilizing Liquid, JSON templates, and Theme OS 2.0 modular blocks.",
      "Architected advanced fluid-responsive websites using Wix Studio and Velo (JavaScript), integrating CMS databases and automated workflows.",
      "Solved complex responsive layout challenges, mobile checkout friction, and cross-browser rendering bugs.",
      "Integrated third-party e-commerce APIs, upsell slide drawers, and payment gateways for global merchants.",
      "Collaborated with product teams and clients to drive 30%+ improvements in mobile speed and conversion metrics."
    ],
    tech: ["Shopify Liquid", "Theme OS 2.0", "Wix Studio", "Velo JS", "React.js", "Tailwind CSS", "JavaScript (ES6+)"]
  },
  {
    period: "2023 - 2024",
    role: "Front-End Development Trainee & Project Builder",
    company: "Wit-Institute",
    location: "Dhaka, Bangladesh",
    type: "Specialized Certification",
    accentColor: "from-amber-400 via-rose-500 to-purple-600",
    description: "Completed an intensive, rigorous front-end engineering program with hands-on development of production-grade React Single Page Applications, component systems, and cloud deployments.",
    bullets: [
      "Architected multiple full-featured web applications using React, Redux Toolkit, and modern JavaScript.",
      "Mastered component design patterns, custom hooks, asynchronous REST API integration, and client-side routing.",
      "Implemented Firebase authentication, real-time database, and cloud hosting for dynamic web apps.",
      "Engineered mobile-first responsive interfaces adhering to WCAG accessibility standards."
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Redux", "Firebase", "Git & GitHub"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    period: "2019 - 2023",
    degree: "B.Sc. in Civil Engineering",
    institution: "Z.H. Sikder University of Science and Technology",
    field: "Engineering",
    description: "Graduated with a Bachelor of Science degree. Developed strong analytical thinking, mathematical problem-solving skills, and systematic project management discipline that translate directly into clean code architecture and debugging."
  },
  {
    period: "2017 - 2019",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Siraj Sikder Degree College",
    field: "Science Department",
    description: "Built a solid academic foundation in mathematics, physics, and chemistry, developing the logical mindset essential for programming and software development."
  }
];

export const TECH_SKILLS = [
  {
    category: "CMS & E-Commerce",
    accent: "from-amber-400 to-orange-500",
    skills: [
      { name: "Shopify (Liquid & OS 2.0)", level: "Expert", desc: "Custom sections, templates, cart drawer, app integrations" },
      { name: "Wix Studio & Velo JS", level: "Expert", desc: "Fluid layouts, custom database collections, Velo scripting" },
      { name: "Theme Customization", level: "Expert", desc: "Adapting premium themes to unique brand aesthetics" },
      { name: "E-Commerce Integrations", level: "Advanced", desc: "Payment gateways, reviews, upsell apps, currency selectors" }
    ]
  },
  {
    category: "Front-End Engineering",
    accent: "from-cyan-400 to-blue-600",
    skills: [
      { name: "HTML5 & Semantic Markup", level: "Expert", desc: "Clean semantic markup, SEO best practices, accessibility" },
      { name: "CSS3 & Modern Animations", level: "Expert", desc: "Flexbox, CSS Grid, custom keyframes, glowing gradients" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "DOM manipulation, asynchronous fetch, array methods, modules" },
      { name: "React.js & Hooks", level: "Advanced", desc: "Functional components, custom hooks, state management" },
      { name: "Tailwind CSS", level: "Expert", desc: "Modern utility-first styling, glassmorphism, responsive design" }
    ]
  },
  {
    category: "Tools, Workflow & Cloud",
    accent: "from-fuchsia-400 to-purple-600",
    skills: [
      { name: "Git & GitHub Version Control", level: "Advanced", desc: "Branching, PRs, version control, repository management" },
      { name: "Firebase (Auth & Database)", level: "Proficient", desc: "User authentication, Firestore database, cloud hosting" },
      { name: "Page Speed & Core Web Vitals", level: "Advanced", desc: "Image compression, lazy loading, script optimization" },
      { name: "Cross-Device Responsive QA", level: "Expert", desc: "Testing across iPhones, Android, tablets, and wide screens" }
    ]
  }
];
