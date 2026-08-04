import { 
  ServiceItem, IndustryItem, PortfolioItem, Testimonial, 
  ProcessStep, BlogPost, FAQItem, 
  InstagramPost, YouTubeVideo 
} from '../types';

export const OFFICIAL_BRAND = {
  name: "Namami Creation House",
  tagline: "From Spiritual To Cinematic — We Create Everything",
  motto: "Ideas that inspire, creations that last.",
  phone: "+91 8815954802",
  phoneFormatted: "+91 88159 54802",
  email: "namamicreationhouse@gmail.com",
  instagramUrl: "https://www.instagram.com/namami_creation_house/?hl=en",
  instagramHandle: "@namami_creation_house",
  whatsAppNumber: "918815954802",
  whatsAppUrl: "https://wa.me/918815954802",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "content-creation",
    title: "Content Creation",
    category: "production",
    iconName: "Clapperboard",
    shortDesc: "End-to-end viral video shoots, creative concept planning, scripts, and storytelling.",
    fullDesc: "We craft captivating video shoots, creative concept planning, scriptwriting, and high-engagement content tailored for digital channels.",
    features: ["Creative Scripting", "Concept Storyboarding", "Multi-platform Direction", "High Retention Flow", "Viral Hook Crafting"],
    startingPrice: "Get Quote",
    deliveryTime: "3 - 5 Days",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    badge: "Core Service"
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "cinematic",
    iconName: "Film",
    shortDesc: "Hollywood & Bollywood grade color grading, spatial sound design, and precision cuts.",
    fullDesc: "Transform raw footage into cinematic masterpieces with precision editing, DaVinci Resolve color grading, audio mix, and motion accents.",
    features: ["4K Multi-cam Editing", "DaVinci Resolve LUTs", "Sound Design & Mix", "Motion Graphic Overlays", "Cinematic Transitions"],
    startingPrice: "Get Quote",
    deliveryTime: "2 - 4 Days",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller"
  },
  {
    id: "ai-video",
    title: "AI Video",
    category: "ai_studio",
    iconName: "Sparkles",
    shortDesc: "Next-gen text-to-video AI generation, hyper-realistic visuals, and synthetic scenes.",
    fullDesc: "Harness artificial intelligence to generate realistic video commercials, text-to-video, visual effects, and futuristic animations effortlessly.",
    features: ["Text-to-Video Models", "AI VFX & Simulations", "Hyper-real Visual Generation", "Multi-lingual Voice Synthesis", "Fast Rendering"],
    startingPrice: "Get Quote",
    deliveryTime: "24 - 48 Hours",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    badge: "AI Studio"
  },
  {
    id: "ai-avatar",
    title: "AI Avatar",
    category: "ai_studio",
    iconName: "Sparkles",
    shortDesc: "Custom realistic AI avatars, lip-synced multi-lingual presenters, and digital spokespersons.",
    fullDesc: "Generate digital AI presenters that talk naturally in over 40 languages with accurate lip sync and human expression.",
    features: ["Custom Presenter Avatars", "Perfect Lip Sync", "Multi-lingual Voiceover", "Studio Background Customization", "Brand Identity Match"],
    startingPrice: "Get Quote",
    deliveryTime: "24 Hours",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "design",
    iconName: "Palette",
    shortDesc: "High-converting posters, banners, YouTube thumbnails, social posts, and festival artwork.",
    fullDesc: "Empower your brand with eye-catching graphics, premium posters, high CTR YouTube thumbnails, and social media designs.",
    features: ["High CTR Thumbnails", "Festival Artwork", "Social Media Graphics", "Marketing Collateral", "Vector Illustrations"],
    startingPrice: "Get Quote",
    deliveryTime: "1 - 2 Days",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "branding",
    title: "Branding",
    category: "design",
    iconName: "Layers",
    shortDesc: "Luxury logo creation, brand guidelines decks, product packaging, and visual identity.",
    fullDesc: "Build an iconic brand identity with vector logos, color systems, typography rules, brand books, and luxury packaging.",
    features: ["Vector Logo Design", "Brand Style Guide", "Packaging Design", "Stationery & Cards", "Brand Strategy Deck"],
    startingPrice: "Get Quote",
    deliveryTime: "5 - 7 Days",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    category: "digital",
    iconName: "Share2",
    shortDesc: "360-degree organic channel management, content scheduling, reels, and audience engagement.",
    fullDesc: "Complete social media ecosystem management across Instagram, YouTube, Facebook, and LinkedIn with regular posting and analytics.",
    features: ["Content Calendar", "Reel & Post Publishing", "Grid Aesthetics", "Audience Interactions", "Monthly Performance Audit"],
    startingPrice: "Get Quote",
    deliveryTime: "Ongoing Retainer",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "digital",
    iconName: "TrendingUp",
    shortDesc: "ROI-focused Meta Ads, Google search campaigns, YouTube video ads, and growth funnels.",
    fullDesc: "Scale brand visibility and conversions through targeted Meta, Instagram, Google, and YouTube ad campaigns.",
    features: ["Meta & Instagram Ads", "Google Search & Display", "YouTube Video Campaigns", "Conversion Copywriting", "A/B Test Analytics"],
    startingPrice: "Get Quote",
    deliveryTime: "Campaign Based",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "website-development",
    title: "Website Development",
    category: "production",
    iconName: "Globe",
    shortDesc: "Ultra-fast custom responsive websites, landing pages, and interactive brand portals.",
    fullDesc: "Modern web applications built with React, Tailwind CSS, high-speed cloud architecture, and sleek glassmorphic luxury UI.",
    features: ["Custom React Architecture", "100/100 Lighthouse Performance", "Full Mobile Responsiveness", "SEO Head Optimization", "Smooth Motion Transitions"],
    startingPrice: "Get Quote",
    deliveryTime: "7 - 14 Days",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "web-application",
    title: "Web Application",
    category: "production",
    iconName: "Globe",
    shortDesc: "High-performance full-stack web applications, dashboard portals, and custom SaaS tools.",
    fullDesc: "Custom web software with dynamic user flows, cloud integrations, interactive tools, and database synchronization.",
    features: ["Full-Stack Architecture", "Dashboard UI", "API Integrations", "Secure Data Handling", "Custom User Dashboards"],
    startingPrice: "Get Quote",
    deliveryTime: "10 - 20 Days",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "app-development",
    title: "App Development",
    category: "production",
    iconName: "Globe",
    shortDesc: "iOS and Android mobile app development for brands, creators, and businesses.",
    fullDesc: "Native and cross-platform mobile apps for iOS and Android with intuitive interface design, push notifications, and fast performance.",
    features: ["Cross-Platform Mobile Apps", "Intuitive Mobile UX", "Push Notifications", "Offline Capability", "App Store Publishing"],
    startingPrice: "Get Quote",
    deliveryTime: "14 - 30 Days",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    category: "cinematic",
    iconName: "Box",
    shortDesc: "3D motion reveals, animated titles, VFX compositing, and visual logo reveals.",
    fullDesc: "Elevate your videos with Cinema 4D and After Effects motion graphics, 3D logo reveals, title overlays, and lower thirds.",
    features: ["3D Logo Reveal", "Animated Title Sequences", "Explainer Animations", "VFX Compositing", "Kinetic Typography"],
    startingPrice: "Get Quote",
    deliveryTime: "3 - 5 Days",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "corporate-videos",
    title: "Corporate Videos",
    category: "cinematic",
    iconName: "Video",
    shortDesc: "Executive brand profiles, company origin films, investor pitches, and summit documentation.",
    fullDesc: "High-end corporate documentary films showcasing leadership, facility tours, company values, and investor pitch presentations.",
    features: ["Executive Interviews", "Facility & Team B-Roll", "Investor Pitch Videos", "Company Culture Films", "Professional Narration"],
    startingPrice: "Get Quote",
    deliveryTime: "5 - 10 Days",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "commercial-ads",
    title: "Commercial Ads",
    category: "cinematic",
    iconName: "Video",
    shortDesc: "High-impact commercial films, TV ads, product launch trailers, and brand stories.",
    fullDesc: "Full studio commercial ad production using cinema cameras, professional lighting, sound scoring, and broadcast mastering.",
    features: ["Cinema Camera Shoot", "Professional Lighting", "Custom Audio Score", "DaVinci Color Master", "Broadcast Ready Delivery"],
    startingPrice: "Get Quote",
    deliveryTime: "7 - 14 Days",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "podcast-editing",
    title: "Podcast Editing",
    category: "cinematic",
    iconName: "Film",
    shortDesc: "Multi-cam video podcast editing, background noise reduction, and viral snippet clips.",
    fullDesc: "Complete audio-visual podcast post-production including multi-camera switching, audio leveling, intro/outro music, and short clips.",
    features: ["Multi-Cam Video Switching", "Audio Noise Clean-up", "Intro/Outro Graphic Intro", "Viral Short Snippets", "Full Episode Master"],
    startingPrice: "Get Quote",
    deliveryTime: "2 - 3 Days",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "photography",
    title: "Photography",
    category: "production",
    iconName: "Camera",
    shortDesc: "High-resolution commercial product photography, model shoots, and event coverage.",
    fullDesc: "High-grade commercial studio photography for e-commerce products, jewelry, architecture, events, and model portfolios.",
    features: ["Studio Product Photos", "E-Commerce Cutouts", "Architecture & Interior", "Retouching & Color Match", "High-Res RAW & JPEG"],
    startingPrice: "Get Quote",
    deliveryTime: "2 - 3 Days",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "drone-shoot",
    title: "Drone Shoot",
    category: "production",
    iconName: "Camera",
    shortDesc: "4K aerial drone videography for real estate, temples, events, and landscapes.",
    fullDesc: "Breathtaking 4K aerial shots taken with certified drone pilots for temple tirths, real estate properties, and grand events.",
    features: ["4K Aerial Videography", "Real Estate Walkthrough", "Temple Tirth Aerial Shots", "Landscape Cinematography", "Stabilized Raw Footage"],
    startingPrice: "Get Quote",
    deliveryTime: "1 - 3 Days",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "youtube-management",
    title: "YouTube Management",
    category: "digital",
    iconName: "Share2",
    shortDesc: "Channel growth, SEO optimization, high CTR thumbnails, retention editing, and publishing.",
    fullDesc: "Complete YouTube channel management focusing on video retention, SEO title/tags, eye-catching thumbnails, and subscriber growth.",
    features: ["SEO Title & Description", "High CTR Thumbnails", "Video Retention Edits", "End Screen & Cards Setup", "Analytics Review"],
    startingPrice: "Get Quote",
    deliveryTime: "Ongoing Retainer",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "instagram-management",
    title: "Instagram Management",
    category: "digital",
    iconName: "Share2",
    shortDesc: "Aesthetic grid layout, daily reel edits, story updates, bio optimization, and follower growth.",
    fullDesc: "Full-suite Instagram account management with daily reel posting, story graphics, aesthetic bio grid, and engagement strategies.",
    features: ["Daily Reel Edits", "Curated Feed Grid", "Story Graphics & Polls", "Hashtag & SEO Strategy", "Comment & Direct Lead Guidance"],
    startingPrice: "Get Quote",
    deliveryTime: "Ongoing Retainer",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "reels",
    title: "Reels",
    category: "cinematic",
    iconName: "Film",
    shortDesc: "Fast-paced short form video reels with animated captions, sound effects, and viral hooks.",
    fullDesc: "Engaging 15-60 second reels designed for Instagram and Facebook with dynamic captions, sound design, and visual pops.",
    features: ["Dynamic On-Screen Text", "Viral Sound SFX", "Pacing & Speed Ramps", "High Retention Cuts", "B-Roll Insertions"],
    startingPrice: "Get Quote",
    deliveryTime: "24 - 48 Hours",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "shorts",
    title: "Shorts",
    category: "cinematic",
    iconName: "Film",
    shortDesc: "YouTube Shorts optimized for algorithm retention, bold subtitles, and crisp pacing.",
    fullDesc: "Vertical short-form videos tailored specifically for YouTube Shorts algorithm mechanics and mobile viewing.",
    features: ["Vertical 9:16 Format", "Bold Subtitles", "Fast Hook Creation", "Call to Action Overlay", "High Completion Rate"],
    startingPrice: "Get Quote",
    deliveryTime: "24 - 48 Hours",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "jainism",
    name: "Jainism & Tirth",
    category: "Spiritual",
    iconName: "Flame",
    description: "Temple inaugurations, Panchkalyanak, Mahavir Jayanti, Muni Pravachan, and Jain Tirth documentation.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
    featuredWork: "Shri Sammed Shikharji Documentary & Daily Reels"
  },
  {
    id: "sanatan",
    name: "Sanatan & Temples",
    category: "Spiritual",
    iconName: "Sun",
    description: "Katha, Ram Mandir coverage, Bhajan music videos, Aarti broadcasts, and heritage storytelling.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    featuredWork: "Divine Aarti Series & Spiritual Music Films"
  },
  {
    id: "bollywood",
    name: "Bollywood & Cinema Style",
    category: "Entertainment",
    iconName: "Film",
    description: "Cinematic film trailers, music videos, actor showreels, movie promotions, and VFX sequences.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    featuredWork: "Celebrity Music Videos & Movie Promo Reels"
  },
  {
    id: "business-corporate",
    name: "Business & Corporate",
    category: "Commercial",
    iconName: "Building2",
    description: "Corporate profiles, investor pitch videos, company anthems, and executive branding.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    featuredWork: "Global Tech Summit Brand Film"
  },
  {
    id: "startups",
    name: "Startups & Tech",
    category: "Commercial",
    iconName: "Rocket",
    description: "Product explainer videos, AI demo walkthroughs, funding pitch decks, and digital ads.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    featuredWork: "FinTech App Launch Campaign"
  },
  {
    id: "real-estate",
    name: "Real Estate & Architecture",
    category: "Commercial",
    iconName: "Home",
    description: "3D architectural walkthroughs, luxury property drone tours, and sales pitch videos.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    featuredWork: "Luxury Villa Aerial & Interior Showcase"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Sanatan Divine Heritage Film",
    client: "Shri Mahaveer Swaroop Sansthan",
    category: "videos",
    thumbnail: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "A cinematic 4K spiritual documentary highlighting ancient temple architecture, sacred chants, and golden lighting design.",
    tags: ["Cinematic", "Spiritual", "4K Drone", "Color Graded"]
  },
  {
    id: "port-2",
    title: "Futuristic AI Avatar Brand Commercial",
    client: "Nexus AI Tech Solutions",
    category: "ai_videos",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Hyper-realistic text-to-video AI commercial with lip-synced multi-lingual avatar and 3D glowing background effects.",
    tags: ["AI Video", "Synthetic Avatar", "Voice Clone", "VFX"]
  },
  {
    id: "port-3",
    title: "Royal Gold Luxury Jewelry Branding",
    client: "Swarna Creation Jewellers",
    category: "branding",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Complete luxury brand identity deck including metallic gold embossed logo mark, packaging design, and catalog layout.",
    tags: ["Luxury Branding", "Gold Foil Logo", "Packaging Design", "Brand Book"]
  },
  {
    id: "port-4",
    title: "Jain Tirth Mahotsav Documentary & Reels",
    client: "Pavitra Tirth Trust",
    category: "reels",
    thumbnail: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Fast-paced 60-second viral Instagram reels campaign documenting 5-day Panchkalyanak mahotsav with divine sound mix.",
    tags: ["Jainism", "Reels", "Sound Design", "Viral Concept"]
  },
  {
    id: "port-5",
    title: "Namami Responsive Web App",
    client: "Namami Global Client",
    category: "websites",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    description: "High performance black and gold responsive web platform with smooth animations, dark mode, and interactive quick quote engine.",
    tags: ["React Website", "Tailwind CSS", "100/100 Lighthouse", "Glassmorphism"]
  },
  {
    id: "port-6",
    title: "Color Grading Before & After - Cinema Film",
    client: "Bollywood Production House",
    category: "videos",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
    beforeImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80&sat=-100",
    afterImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
    description: "DaVinci Resolve filmic color grading transformation from flat LOG raw clip to rich, warm golden cinematic tone.",
    tags: ["Color Grading", "DaVinci Resolve", "Before & After", "LOG to Rec709"]
  },
  {
    id: "port-7",
    title: "High-CTR YouTube Thumbnails Masterkit",
    client: "Top Creators",
    category: "graphics",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    description: "Custom high contrast Photoshop artwork featuring glow accents, 3D typography, cutouts, and emotional expressions.",
    tags: ["YouTube Thumbnails", "Graphic Design", "Photoshop", "High CTR"]
  },
  {
    id: "port-8",
    title: "Namami Brand Emblem & 3D Logo Reveal",
    client: "Namami Creation House",
    category: "logos",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "3D golden ribbon arch logo reveal animation with cinematic sparkles, metallic reflections, and deep bass impact.",
    tags: ["3D Logo", "Logo Motion", "Unreal Engine", "Metallic Gold"]
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Ashok Mehta",
    role: "Managing Trustee",
    company: "Shri Mahavir Sansthan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    comment: "Namami Creation House transformed our temple event documentation into a world-class cinematic experience! The devotion, quality of video editing, and golden aesthetic was unmatched.",
    type: "video",
    category: "Spiritual",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "test-2",
    name: "Rajesh Singhania",
    role: "Founder & CEO",
    company: "Singhania Luxury Real Estate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    comment: "Their AI video commercials and drone footage helped us launch our project with massive impact! Extremely fast delivery, professional team, and top tier branding.",
    type: "google",
    category: "Real Estate"
  },
  {
    id: "test-3",
    name: "Priya Sharma",
    role: "Digital Creator",
    company: "Priya Vlogs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    comment: "Working with Namami Creation House elevated my content quality immensely. Their sound editing, thumbnail designs, and reel cuts are pure gold!",
    type: "verified",
    category: "Creator"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: "Inquiry & Requirement", description: "You contact us via WhatsApp, Instagram, or our Quick Quote form with your vision.", duration: "Instant", iconName: "MessageSquare" },
  { step: 2, title: "Creative Consultation", description: "Our expert creative directors discuss your goals via WhatsApp or phone.", duration: "1 Hour", iconName: "PhoneCall" },
  { step: 3, title: "Concept & Planning", description: "We outline script concept, visual storyboards, mood board, and timeline.", duration: "1 Day", iconName: "FileText" },
  { step: 4, title: "Custom Quotation", description: "Clear, transparent quote with specified milestones and deliverables.", duration: "Same Day", iconName: "Receipt" },
  { step: 5, title: "Advance & Onboarding", description: "Seamless booking with advance payment confirmation and project channel creation.", duration: "Instant", iconName: "ShieldCheck" },
  { step: 6, title: "Production & AI Execution", description: "Our editors, designers, and AI specialists craft magic using state-of-the-art tools.", duration: "2 - 5 Days", iconName: "Cpu" },
  { step: 7, title: "Draft Review & Revisions", description: "Interactive review link provided for your feedback and fine-tuning adjustments.", duration: "1 Day", iconName: "CheckCircle2" },
  { step: 8, title: "Final 4K Delivery", description: "High-resolution master files delivered via secure cloud drive or WhatsApp.", duration: "Instant", iconName: "Download" },
  { step: 9, title: "Ongoing Support & Growth", description: "Post-delivery guidance, performance analytics, and long-term retainer support.", duration: "24/7", iconName: "Sparkles" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "How AI Video Avatars Are Revolutionizing Brand Commercials in 2026",
    category: "AI",
    excerpt: "Discover how text-to-video tools and synthetic AI avatars cut production timelines while dramatically boosting engagement.",
    content: "Artificial Intelligence has transitioned from simple photo editing to hyper-realistic 4K video generation. At Namami Creation House, we leverage AI models to generate localized video commercials in multiple languages effortlessly...",
    readTime: "4 min read",
    date: "Aug 01, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    author: "Namami AI Team"
  },
  {
    id: "blog-2",
    title: "The Art of Cinematic Color Grading: From FLAT LOG to Gold Standard",
    category: "Editing",
    excerpt: "A deep dive into node-based color correction, skin tone preservation, and cinematic LUT application in DaVinci Resolve.",
    content: "Color grading is the secret sauce behind every blockbuster film and high-end commercial. It sets the emotional atmosphere, directs viewer focus, and establishes brand prestige...",
    readTime: "6 min read",
    date: "Jul 28, 2026",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
    author: "Namami Color Team"
  },
  {
    id: "blog-3",
    title: "Spiritual Storytelling: Documenting Jainism & Sanatan Heritage for Youth",
    category: "Branding",
    excerpt: "How modern fast-paced editing and 4K aerial shots are reconnecting younger generations with ancient spiritual traditions.",
    content: "Preserving sacred culture requires meeting today's audience where they are — on short-form video feeds like Instagram Reels and YouTube Shorts...",
    readTime: "5 min read",
    date: "Jul 20, 2026",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    author: "Namami Editorial"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What makes Namami Creation House different from standard editing agencies?",
    answer: "We offer a complete 360° creative solution blending traditional cinematic film craft with spiritual reverence and cutting-edge AI video generation. Whether it's a 4K temple documentary or an AI avatar ad, we deliver world-class quality at ultra-fast speeds."
  },
  {
    id: "faq-2",
    category: "Services",
    question: "How do I place an order or get a custom quotation?",
    answer: "Clicking any 'Get Quote' or 'Chat on WhatsApp' button immediately opens a direct WhatsApp chat with our project leads (+91 8815954802)."
  },
  {
    id: "faq-3",
    category: "Turnaround",
    question: "What is your typical project delivery time?",
    answer: "Reels and graphic designs are delivered within 24–48 hours. Master cinematic video edits take 3–5 days, and full custom websites take 7–14 days. Express delivery is available for urgent campaigns."
  },
  {
    id: "faq-4",
    category: "Revisions",
    question: "Are revisions included?",
    answer: "Yes! All projects include dedicated revision rounds to guarantee 100% client satisfaction before final delivery."
  },
  {
    id: "faq-5",
    category: "Spiritual Content",
    question: "Do you specialize in Jainism & Sanatan devotional content?",
    answer: "Yes, spiritual content is our core legacy. We have created films, event documentaries, pravachan edits, and music videos for Jain & Sanatan organizations."
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    type: "reel",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80",
    likes: "Pure Sacred Craft",
    comments: "Spiritual",
    caption: "Spiritual Serenity ✨ Pure cinematic Jainism temple documentary shoot in 4K HDR. #Jainism #NamamiCreationHouse #Cinematic",
    url: OFFICIAL_BRAND.instagramUrl
  },
  {
    id: "ig-2",
    type: "reel",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    likes: "AI Studio Commercial",
    comments: "AI Innovation",
    caption: "Text-to-Video AI Commercial created in 12 hours! Future of digital marketing is here. 🔥 #AIVideo #NamamiAI",
    url: OFFICIAL_BRAND.instagramUrl
  },
  {
    id: "ig-3",
    type: "post",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    likes: "Gold Identity Design",
    comments: "Branding",
    caption: "Gold foil luxury logo reveal for Swarna Jewellers. Elegance redefined. 👑 #Branding #GoldDesign",
    url: OFFICIAL_BRAND.instagramUrl
  },
  {
    id: "ig-4",
    type: "reel",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80",
    likes: "DaVinci Color Grade",
    comments: "Colorist",
    caption: "RAW vs Color Graded DaVinci Resolve transformation. Drop a ❤️ if you love gold film tones! #VideoEditing",
    url: OFFICIAL_BRAND.instagramUrl
  }
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: "yt-1",
    title: "Namami Creation House — Showreel | From Spiritual To Cinematic",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
    duration: "2:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "yt-2",
    title: "Shri Sammed Shikharji Divine 4K Documentary & Sacred Chants",
    thumbnail: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    duration: "14:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "yt-3",
    title: "Creating High Retention Reels with AI & DaVinci Resolve Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    duration: "18:10",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const TRANSLATIONS = {
  en: {
    tagline: "From Spiritual To Cinematic",
    subtitle: "We Create Everything",
    exploreServices: "Explore Services",
    viewPortfolio: "View Portfolio",
    getQuote: "Get Quote",
    watchShowreel: "Watch Showreel",
    chatWhatsApp: "Chat on WhatsApp",
    followInstagram: "Follow Instagram",
    contactUs: "Contact Us",
    quickQuote: "Quick Quote",
    allServices: "All Creative Services",
    whyChooseUs: "Why Choose Us",
    workingProcess: "Working Process",
    testimonials: "Client Reviews",
    faq: "Frequently Asked Questions"
  }
};
