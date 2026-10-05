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
  current?: boolean;
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
  role: "Front-End Developer & CMS Expert",
  specialization: "Wix Studio & Shopify Liquid",
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
  status: "Available for freelance projects & full-time roles",
  tagline: "Building high-converting Shopify stores, fluid Wix websites, and responsive modern frontend experiences.",
  shortBio: "I'm a Front-End Developer and CMS Expert specializing in custom Shopify Liquid themes, Wix Studio, and modern React architectures. With over 200+ projects completed, I combine clean code with pixel-perfect responsive design to help brands succeed online.",
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Simone Prince",
    category: "shopify",
    categoryLabel: "Shopify Store",
    img: "/images/ornamets_cover.png",
    liveUrl: "https://bysimoneprince.com/",
    tagline: "Luxury jewelry & fine ornaments e-commerce boutique",
    description: "Custom Shopify store built for an upscale jewelry brand featuring tailored Liquid theme sections, interactive variant selectors, slide-out cart drawer, and personalized engraving fields.",
    role: "Shopify Theme Developer",
    tags: ["Shopify", "Liquid", "Theme OS 2.0", "Cart Drawer", "CSS3"],
    highlights: [
      "Custom product page layout with variant swatches",
      "Dynamic slide-out cart drawer with free shipping progress bar",
      "Liquid modifications for personalized engraving inputs",
      "100% mobile-friendly responsive optimization"
    ]
  },
  {
    id: 2,
    title: "E-bike Horizon",
    category: "shopify",
    categoryLabel: "Shopify Store",
    img: "/images/Cover1.png",
    liveUrl: "https://ebikehorizon.com/",
    tagline: "Electric bike and urban mobility storefront",
    description: "High-performance Shopify storefront for electric bikes with technical specification tables, battery comparison matrix, and accessory bundling.",
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
    categoryLabel: "Shopify Store",
    img: "/images/pushByGigi.png",
    liveUrl: "https://www.poshbygigi.com/",
    tagline: "Contemporary fashion and apparel boutique",
    description: "Modern Shopify fashion boutique featuring dynamic lookbook sections, Instagram feed integration, sticky buy button on mobile, and curated collection filtering.",
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
    categoryLabel: "Shopify Store",
    img: "/images/kalandulaSteel.png",
    liveUrl: "https://www.kalandulasteel.com/",
    tagline: "Industrial hardware & architectural steel supplies",
    description: "Customized Shopify store tailored for industrial steel products with bulk pricing tier options, dimension tables, and custom quote inquiry forms.",
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
    categoryLabel: "Shopify Store",
    img: "/images/Blush & Babe.png",
    liveUrl: "https://www.blushandbabe.com/",
    tagline: "Clean skincare and organic cosmetics store",
    description: "Aesthetic skincare e-commerce website on Shopify featuring ingredient breakdown accordions, customer photo reviews, and bundle discount mechanics.",
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
    categoryLabel: "Shopify Store",
    img: "/images/Mathodology.png",
    liveUrl: "https://thinkmathematics.com/",
    tagline: "Educational math curriculum and teaching materials",
    description: "Structured educational store on Shopify for teachers and schools with grade-level filtering, digital curriculum downloads, and license options.",
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
    description: "Fluid responsive agency website built with Wix Studio and Velo JavaScript. Implemented interactive project showreels, custom transitions, and dynamic inquiry forms.",
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
    description: "Clean interior styling portfolio on Wix with before/after makeover sliders, consultation booking calendar, and project galleries.",
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
    description: "Executive corporate website on Wix featuring portfolio company directories, leadership team cards, and pitch deck submission pathways.",
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
    description: "E-commerce website on Wix for a premium UK butcher featuring a temperature-controlled shipping date picker, cut-by-weight pricing, and recipes.",
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
    description: "Community sports website on Wix with match fixtures, team schedules, training clinic registration forms, and photo gallery archives.",
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
    description: "Single Page Application (SPA) e-commerce store with React, Tailwind CSS, Firebase authentication, dynamic REST API product loading, and cart state management.",
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
    description: "High-performance e-commerce prototype from scratch using React and modern CSS. Implemented flash-sale countdown timer, product wishlist, and responsive cart.",
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
    description: "Clean, minimalist furniture landing page built with HTML5, Tailwind CSS, and vanilla JavaScript. Features smooth scroll animations and refined architectural spacing.",
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
    description: "Responsive agency website for interior designers using semantic HTML, Tailwind CSS, and JavaScript. Showcases past renovation projects in a clean photo grid.",
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
    description: "Responsive digital food menu and ordering interface with instant food category switching, modifier options, and interactive cart calculations.",
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
    description: "High-contrast culinary showcase website with HTML5, CSS3, and Tailwind CSS. Highlights special combo offers, customer ratings, and location directions.",
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
    role: "Front-End Developer & CMS Expert",
    company: "Betopia Group",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    current: true,
    description: "Leading CMS development and front-end engineering for client storefronts. Designing and developing high-converting Shopify Liquid themes and responsive Wix Studio web solutions.",
    bullets: [
      "Built and customized 50+ commercial Shopify stores with Liquid, Theme OS 2.0 sections, and custom cart mechanics.",
      "Engineered fluid-responsive websites using Wix Studio and Velo (JavaScript) with custom database collections.",
      "Resolved complex responsive layout bugs, mobile checkout issues, and cross-browser rendering inconsistencies.",
      "Integrated third-party apps for reviews, upsells, cart drawers, and payment gateways with zero site bloat."
    ],
    tech: ["Shopify Liquid", "Theme OS 2.0", "Wix Studio", "Velo JS", "React.js", "Tailwind CSS", "JavaScript"]
  },
  {
    period: "2023 - 2024",
    role: "Front-End Development Trainee",
    company: "Wit-Institute",
    location: "Dhaka, Bangladesh",
    type: "Certification",
    description: "Completed intensive frontend engineering training, building production-grade Single Page Applications using React.js, Tailwind CSS, and cloud backends.",
    bullets: [
      "Built full-stack React applications with component state management, hooks, and REST APIs.",
      "Implemented Firebase authentication, real-time database, and cloud hosting.",
      "Applied strict mobile-first design principles using modern CSS and Tailwind."
    ],
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "Firebase", "Git"]
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
    category: "Tools & Workflow",
    accent: "from-fuchsia-400 to-purple-600",
    skills: [
      { name: "Git & GitHub Version Control", level: "Advanced", desc: "Branching, PRs, version control, repository management" },
      { name: "Firebase (Auth & Database)", level: "Proficient", desc: "User authentication, Firestore database, cloud hosting" },
      { name: "Page Speed & Core Web Vitals", level: "Advanced", desc: "Image compression, lazy loading, script optimization" },
      { name: "Cross-Device Responsive QA", level: "Expert", desc: "Testing across iPhones, Android, tablets, and wide screens" }
    ]
  }
];
