// ============================================================
// portfolioData.js — Centralized configuration for Amal Srivastava's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Amal Srivastava",
  firstName: "Amal",
  brandName: "Amal Srivastava",
  title: "Full-Stack & AI Developer",
  location: "Prayagraj, Uttar Pradesh, India",
  phone: "", // Keep blank if not in resume
  emails: {
    primary: "amalsrivastava1200@gmail.com",
    secondary: "amalsrivastava1200@gmail.com",
  },
  summary:
    "Aspiring software engineer and Mechanical Engineering student at NIT Jamshedpur with strong expertise in full-stack development, AI student co-pilots, and real-time commerce software. Winner of the IIT Kharagpur Platinum Jubilee Innovation Challenge.",
  resumeUrl: "/Portfolio/Amal_Intern.pdf",
};

export const socialLinks = {
  github: "https://github.com/Amal043",
  linkedin: "https://www.linkedin.com/in/amal-srivastava-061798329/",
  instagram: "", // Left blank as not in resume
};

export const heroContent = {
  greeting: "Hi, I'm Amal Srivastava",
  titleHighlight: "Full-Stack & AI Developer",
  subtitle:
    "Turning ideas into impactful solutions, I develop modern web applications, intelligent AI solutions, and data-driven systems that are scalable, efficient, and built to make a difference.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Portfolio/Amal_Intern.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Amal Srivastava</span>, an aspiring Software Engineer and Mechanical Engineering student at NIT Jamshedpur. I am passionate about Full-Stack Web Development, Artificial Intelligence & Machine Learning (AI/ML), and Data Analytics. I enjoy building scalable web applications, developing intelligent AI-powered solutions, and transforming data into actionable insights. By combining engineering problem-solving with modern software technologies, I strive to create innovative, efficient, and impactful digital solutions.`,
  techStack: ["Python", "React", "Node.js"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data for Amal
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Full Stack & Web Dev",
      skills: [
        { name: "ReactJs", level: 92 },
        { name: "NodeJs / ExpressJs", level: 88 },
        { name: "HTML / CSS", level: 95 },
        { name: "TailwindCSS", level: 90 }
      ]
    },
    {
      title: "Databases & AI Tools",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "LangGraph / LangChain", level: 80 },
        { name: "FastAPI / Vertex AI", level: 82 }
      ]
    },
    {
      title: "Developer Tools & Cloud",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git & GitHub", level: 90 },
        { name: "Google Cloud Platform", level: 80 },
        { name: "Render / Vercel", level: 88 }
      ]
    }
  ]
};

// Custom Achievements & Highlights
export const contentCreation = {
  badge: "Key Achievements",
  heading: "Competitions & Project Milestones",
  description: "Highlights of my competitive wins, academic journey, and key software projects.",
  categories: [
    {
      title: "IIT Kharagpur Challenge Winner",
      description: "Won top honors at the flagship Platinum Jubilee Innovation Challenge with FinAgent — an AI money co-pilot.",
      stats: "1st Place Winner",
      icon: "🏆",
      details: "FinAgent is an AI-powered student money co-pilot built for the IIT Kharagpur Platinum Jubilee Innovation Challenge. It helps students automate budgeting, track expenses, and make smarter financial decisions using a conversational AI interface backed by Google Cloud Vertex AI. The system was designed to be commercially viable — complete with user authentication, personalized dashboards, and multi-agent financial analysis. This project won 1st place among hundreds of competing teams at one of India's most prestigious engineering institutions.",
      techStack: ["React", "Node.js", "MongoDB", "Google Cloud Vertex AI", "LangChain"],
      demoLink: "https://github.com/Amal043",
      githubLink: "https://github.com/Amal043"
    },
    {
      title: "Multi-Agent AI Platform",
      description: "Developed QuickStyle, a real-time fashion delivery platform with LangGraph and Vertex AI negotiator agents.",
      stats: "LangGraph & Gemini",
      icon: "⚡",
      details: "QuickStyle is a 30-minute quick-commerce fashion delivery platform that uses a sophisticated multi-agent AI system. A Stylist Agent recommends outfits based on hyperlocal trends (scraped via Tavily), while an Anti-Return Agent negotiates in real-time to reduce return rates. Users can shop through a voice-to-commerce flow, track deliveries live on Google Maps, and get personalized fashion recommendations. The platform is built with a React/TypeScript frontend, FastAPI backend, LangGraph for agent orchestration, and Vertex AI Gemini for AI reasoning.",
      techStack: ["React", "TypeScript", "FastAPI", "LangGraph", "Google Vertex AI", "MongoDB", "Redis", "Zustand"],
      demoLink: "https://quick-style-ten.vercel.app",
      githubLink: "https://github.com/Amal043"
    },
    {
      title: "Premium Media Platform",
      description: "Designed Sonoria, a Spotify-style music streaming application with a live wave visualizer and audio/video switching.",
      stats: "Modern Web Stack",
      icon: "🎵",
      details: "Sonoria is a premium web-based music streaming platform that provides access to a massive library of songs and music videos. Its standout feature is a seamless one-click switch between audio-only streaming (with a live canvas-based wave visualizer) and high-quality video playback — all within the same interface. The platform includes user registration & login via MongoDB, liked tracks management, persistent playlists, and a beautiful dark-mode UI inspired by Spotify and Apple Music.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Node.js", "Express", "MongoDB"],
      demoLink: "https://amal043.github.io/Sonoria/",
      githubLink: "https://github.com/Amal043/Sonoria"
    },
    {
      title: "Opportunity Finder Portal",
      description: "Built EduPortal, a platform to recommend scholarships, hackathons, and internships based on states.",
      stats: "Full-Stack Node/Mongo",
      icon: "🎓",
      details: "EduPortal is a responsive Educational Opportunities Portal designed to help students across India discover relevant scholarships, hackathons, workshops, and internship opportunities tailored to their state location. The platform features secure session-based authentication, a smart recommendation engine based on state filtering, and a modern glassmorphism UI with light/dark mode support. Built with a full Node.js/Express backend and MongoDB database, it is deployed on Render for reliable cloud hosting.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB", "Render"],
      demoLink: "https://amal043.github.io/EduPortal/",
      githubLink: "https://github.com/Amal043/EduPortal"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Team Lead — FinAgent Development",
    description: "Led a multi-disciplinary team during the IIT Kharagpur challenge, managing product architecture, AI integration, and pitch presentation.",
    role: "Project Leader",
    badge: "Leadership"
  },
  {
    title: "Open-Source & Developer Engagement",
    description: "Sharing open-source web application code on GitHub, and supporting students in learning full-stack web and AI systems.",
    role: "Developer",
    badge: "Community"
  },
  {
    title: "NIT Jamshedpur Technical Seminars",
    description: "Active participation in coding hackathons, technical events, and bootcamps at the National Institute of Technology.",
    role: "Student Coordinator",
    badge: "Technical"
  }
];

// Development & Project Experience
export const internshipsList = [
  {
    organization: "FinAgent (IIT Kharagpur Challenge)",
    role: "Lead AI Engineer & Developer",
    duration: "Oct 2025 (Competition Winner)",
    skills: ["AI student money co-pilot", "Budgeting automation", "Commercially viable design", "Full-Stack Development"],
    tech: ["React", "Node.js", "MongoDB", "GCP Vertex AI"]
  },
  {
    organization: "Quick Style (Self-Directed)",
    role: "Full-Stack & AI Agent Developer",
    duration: "May 2025 - June 2025",
    skills: ["Multi-agent negotiations", "Voice-to-commerce purchase", "Hyperlocal trend scraping", "Maps directions integration"],
    tech: ["React", "FastAPI", "LangGraph", "Vertex AI", "MongoDB", "Zustand"]
  },
  {
    organization: "Sonoria & EduPortal (Open Source)",
    role: "Frontend & Backend Developer",
    duration: "Jan 2025 - April 2025",
    skills: ["Audio-only/video switching", "Live wave visualizer", "MongoDB auth", "Opportunities recommendation system"],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, architecting solutions, and coordinating hackathon project deliverables." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex financial and commercial logic into simple, scalable code." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to master new frameworks like LangGraph, Vertex AI, or full-stack web tech." },
  { name: "Collaboration", icon: "🤝", desc: "Coordinating across teams and academic branches to deliver high-quality platforms." }
];

export const projects = [
  {
    id: "quickstyle",
    number: "01",
    badge: "🚀 Flagship AI Project",
    title: "Quick Style",
    description:
      "A real-time, 30-minute quick-commerce fashion delivery platform utilizing a multi-agent AI system (LangGraph & Vertex AI Gemini) where Stylist and Anti-Return agents negotiate in real-time. Features voice-to-commerce flow, hyperlocal trend intelligence via web scraping (Tavily), and real-time package delivery tracking using the Google Maps and Directions API.",
    techTags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "FastAPI",
      "LangGraph",
      "Google Vertex AI",
      "MongoDB",
      "Redis",
    ],
    links: {
      github: "https://github.com/Amal043",
      demo: "https://quick-style-ten.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "sonoria",
    number: "02",
    badge: "🎵 Premium Streaming",
    title: "Sonoria",
    description:
      "A modern, premium web-based music streaming platform designed to give access to a massive library of songs and music videos. Features a seamless one-click switch between audio-only streaming (with a live wave visualizer) and high-quality video playback, user registration, liked tracks, and persistent playlists.",
    techTags: ["JavaScript", "HTML5", "CSS3", "Node.js", "MongoDB", "Express"],
    links: {
      github: "https://github.com/Amal043/Sonoria",
      demo: "https://amal043.github.io/Sonoria/",
    },
    isFlagship: false,
  },
  {
    id: "eduportal",
    number: "03",
    badge: "🎓 Educational Portal",
    title: "EduPortal",
    description:
      "A responsive Educational Opportunities Portal that helps users discover scholarships, hackathons, workshops, and internships through state-based opportunity recommendations. Built with secure session authentication and modern light/dark mode UI with glassmorphism effects.",
    techTags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB", "Render"],
    links: {
      github: "https://github.com/Amal043/EduPortal",
      demo: "https://amal043.github.io/EduPortal/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "NIT Jamshedpur Mechanical Eng. Student",
      issuer: "NIT Jamshedpur",
      icon: "🎓",
    },
    {
      name: "Winner - Platinum Jubilee Innovation Challenge",
      issuer: "IIT Kharagpur",
      icon: "🏆",
    },
    {
      name: "Class XII Excellence (95.8%)",
      issuer: "Vishnu Bhagwan Public School",
      icon: "🏅",
    },
    {
      name: "Class X Excellence (94.8%)",
      issuer: "Vishnu Bhagwan Public School",
      icon: "🎗️",
    },
  ],
  viewAllUrl: "/Certificates.pdf", // User can upload Certificates.pdf here
};

export const education = {
  degree: "B.Tech – Mechanical Engineering",
  institution: "National Institute Of Technology Jamshedpur",
  cgpa: "8.78",
  graduation: "2028",
  twelfth: "12th CBSE – 95.8%",
  tenth: "10th CBSE – 94.8%",
};

export const footerContent = {
  taglines: [
    "Full-Stack & AI Engineering",
    "Python · React · Node.js",
    "Intelligent Software Platforms",
  ],
  credential: "B.Tech ME · CGPA 8.78 · NIT Jamshedpur",
  copyright: `© ${new Date().getFullYear()} Amal Srivastava | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
