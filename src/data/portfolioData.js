export const personalInfo = {
  name: "Pusala Kotesh",
  title: "Full-Stack Web Developer",
  subtitle: "AI Enthusiast | Software Engineer",
  summary: "Final-year Computer Science student with a strong foundation in software engineering, scalable application development, backend systems, and modern frontend technologies. Passionate about building impactful AI-powered products, solving complex algorithmic problems, and continuously learning emerging technologies. Currently seeking Software Development Engineer (SDE), Full-Stack Developer, and AI Engineer opportunities.",
  email: "pusalakotesh08@gmail.com",
  phone: "+91 8019291262",
  resumeUrl: "Resume.pdf", // Path in public folder
  socials: {
    github: "https://github.com/KoteshPusala",
    linkedin: "https://www.linkedin.com/in/pusala-kotesh-a1069a352/",
    leetcode: "https://leetcode.com/u/Pusalakotesh/",
    email: "mailto:pusalakotesh08@gmail.com",
  }
};

export const aboutStats = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Technologies Learned", value: 15, suffix: "+" },
  { label: "AI Projects & Models", value: 5, suffix: "+" },
  { label: "GitHub Contributions", value: 500, suffix: "+" }
];

export const skillsData = {
  programming: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 80 }
  ],
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 95 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 85 },
    { name: "FastAPI", level: 90 },
    { name: "REST APIs", level: 95 }
  ],
  databases: [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "Firebase Firestore", level: 80 }
  ],
  aiMl: [
    { name: "Scikit-learn", level: 75 },
    { name: "OpenCV", level: 75 },
    { name: "Groq LLM / Llama 3", level: 85 },
    { name: "CrewAI Orchestration", level: 80 }
  ],
  coreCs: [
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "Object-Oriented Programming", level: 90 },
    { name: "Operating Systems", level: 80 },
    { name: "DBMS", level: 85 },
    { name: "Computer Networks", level: 80 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Vercel / Render", level: 85 }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "NutriGuard AI",
    category: "AI + Machine Learning + Healthcare",
    description: "An AI-powered food safety and ingredient transparency platform. It allows users to scan barcodes or upload packaged food labels to run OCR ingredient analysis, cross-referencing harmful additives, calculating nutrition insights, and generating tailored dietary warnings.",
    highlights: [
      "OCR-based high-accuracy ingredient extraction",
      "Barcode scanning for rapid matching",
      "FastAPI backend with Groq LLM integration",
      "Response times optimized to under 2 seconds",
      "95% accuracy in ingredient analysis & classification"
    ],
    tags: ["Python", "FastAPI", "Next.js", "Machine Learning", "OpenCV", "Tesseract OCR", "Groq LLM", "Tailwind CSS"],
    github: "https://github.com/KoteshPusala/Food-Product-Transparency-Engine",
    live: "https://food-product-transparency-engine.vercel.app/",
    imageType: "healthcare" // Used for generating thematic SVG patterns inside the card
  },
  {
    id: 2,
    title: "SkillBridge AI",
    category: "Full Stack + Artificial Intelligence",
    description: "An AI-enabled service marketplace connecting clients with skilled independent professionals. It manages everything from user authentication and portfolio listings to AI-assisted project estimation and interactive guides.",
    highlights: [
      "Secure JWT-based multi-role authentication",
      "AI-driven project scope & timeline estimator",
      "Integrated Groq Llama 3.3 70B for guidance chats",
      "Scalable REST APIs using FastAPI",
      "MongoDB database structure optimized for quick queries"
    ],
    tags: ["Next.js", "FastAPI", "MongoDB", "JWT", "Groq AI", "Llama 3.3", "Tailwind CSS", "React"],
    github: "https://github.com/shashank1-2/ai4impact",
    live: "https://skillbridge-4nrz.onrender.com/",
    imageType: "marketplace"
  },
  {
    id: 3,
    title: "Taskflow Nexus",
    category: "Full Stack + Productivity",
    description: "A modern, collaborative task management and productivity application engineered to help teams and individuals organize, track, and execute tasks smoothly.",
    highlights: [
      "Interactive dashboard with category-based task filtering",
      "Secure client-side authentication and route protection",
      "Real-time state updates and persistent user sessions",
      "Responsive, minimalist interface optimized for fast workflows",
      "Fluid page transitions and intuitive drag-and-drop state indicators"
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
    github: "https://github.com/KoteshPusala/todo-app",
    live: "https://todofrontend-beryl.vercel.app/login",
    imageType: "taskflow"
  },
  {
    id: 4,
    title: "AI Quiz Platform",
    category: "AI + Full Stack + Education",
    description: "A production-ready, AI-powered learning and exam preparation platform enabling students, competitive aspirants, and lifelong learners to generate personalized quizzes, review performance analytics, and learn via AI explanations.",
    highlights: [
      "Google Gemini AI & Groq API for personalized quiz creation",
      "Interactive dashboard with learning statistics & accurate score tracking",
      "Secure JWT-based authentication & persistent session management",
      "Modular backend architecture with Node.js, Express, & PostgreSQL via Prisma"
    ],
    tags: ["React.js", "Vite", "React Router", "Tailwind CSS", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Google Gemini API"],
    github: "https://github.com/KoteshPusala/AI-Quiz-Platform",
    live: "https://ai-quiz-platform-tau.vercel.app/",
    imageType: "quiz"
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Edunet Foundation",
    location: "Remote / Hybrid",
    duration: "August 2025 – October 2025",
    type: "internship",
    description: "Designed and built a responsive Weather Analytics Platform targeting over 100,000 global locations, integrating real-time weather information and local caching.",
    points: [
      "Developed modular, reusable React components resulting in a 25% increase in developer efficiency.",
      "Integrated OpenWeatherMap API and Geolocation APIs for immediate local forecasts.",
      "Optimized React application rendering loops and minimized layout shifts (CLS).",
      "Implemented responsive layouts ensuring high performance across devices."
    ]
  },
  {
    id: 2,
    role: "Full Stack & AI Development Focus",
    company: "Personal Project Lab",
    location: "Hyderabad",
    duration: "October 2025 – Present",
    type: "journey",
    description: "Deepened practical exposure to AI-powered web applications and REST architecture. Formed project teams and participated in national hackathons.",
    points: [
      "Built NutriGuard AI, using OpenCV, OCR systems, and Groq LLMs to analyze food packaging.",
      "Collaborated on SkillBridge, an AI-powered service marketplace powered by FastAPI and MongoDB.",
      "Solved algorithmic problems on Leetcode, advancing core knowledge in Data Structures and Algorithms.",
      "Participated in 3 major hackathons, collaborating in cross-functional teams to prototype and build full-stack solutions."
    ]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering (B.E.)",
    major: "Computer Science and Engineering",
    school: "Chaitanya Bharathi Institute of Technology (CBIT)",
    location: "Hyderabad, India",
    duration: "September 2023 – May 2027",
    score: "8.10 CGPA",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "Compiler Design",
      "Artificial Intelligence",
      "Software Engineering"
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education (Class XII)",
    major: "MPC (Mathematics, Physics, Chemistry)",
    school: "TSWRSJC COE",
    location: "Kondapur, India",
    duration: "2021 – 2023",
    score: "96.6% Marks",
    courses: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Analytical Geometry",
      "Calculus"
    ]
  }
];

export const servicesData = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces using React, Next.js, and Tailwind CSS. Crafting interactive animations with Framer Motion.",
    icon: "Layout"
  },
  {
    title: "Backend Development",
    description: "Designing scalable servers, robust REST APIs, middleware architectures, and securing resources using JWT in FastAPI and Node.js/Express.",
    icon: "Server"
  },
  {
    title: "AI Integration",
    description: "Connecting web apps with Large Language Models (LLMs) like Groq/Llama, executing OCR text extraction, OpenCV image processing, and orchestrating multi-agent systems.",
    icon: "Cpu"
  },
  {
    title: "Database Design",
    description: "Structuring, optimizing, and querying databases using MongoDB (NoSQL) and MySQL (Relational) with a focus on data integrity and relational schemas.",
    icon: "Database"
  },
  {
    title: "Firebase Solutions",
    description: "Implementing real-time databases, Firestore databases, and serverless authentication workflows with rapid deployment models.",
    icon: "Flame"
  },
  {
    title: "Responsive UI/UX Engine",
    description: "Drafting state-of-the-art wireframes, modern layout hierarchies, mobile-first designs, grid/flexbox setups, and fluid layouts for any resolution.",
    icon: "Smartphone"
  }
];

export const achievementsData = [
  {
    title: "Flipkart Gridlock Hackathon 2.0",
    detail: "Placed in Top 1635 Teams in Prototype Phase out of tens of thousands of nationwide submissions.",
    metric: "Top 1635"
  },
  {
    title: "LeetCode & Problem Solving",
    detail: "Solved over 500 algorithmic problems across LeetCode and HackerRank, sharpening data structures efficiency.",
    metric: "500+ Solved"
  },
  {
    title: "Hackathon Competitor",
    detail: "Participated in 3 major hackathons, collaborating in teams to design and engineer solutions under tight deadlines.",
    metric: "3 Hackathons"
  },
  {
    title: "TS EAMCET 2023 State Exam",
    detail: "Secured state rank of 9945 out of more than 200,000 candidates who appeared for the exam.",
    metric: "Rank 9945"
  },
  {
    title: "JEE Advanced 2023 Qualification",
    detail: "Successfully qualified the highly competitive JEE Advanced exam for IIT admissions.",
    metric: "Qualified"
  },
  {
    title: "JEE Mains 2023 Percentile",
    detail: "Secured 85 percentile in JEE Mains entrance examination.",
    metric: "85 %tile"
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "2025",
    badge: "AI Associate"
  },
  {
    id: 2,
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    badge: "SQL Expert"
  },
  {
    id: 3,
    title: "Unsupervised Machine Learning",
    issuer: "Coursera (DeepLearning.AI)",
    date: "2024",
    badge: "ML Cert"
  },
  {
    id: 4,
    title: "Web Development Training",
    issuer: "Internshala Trainings",
    date: "2024",
    badge: "Web Dev"
  },
  {
    id: 5,
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2024",
    badge: "Python Basic"
  },
  {
    id: 6,
    title: "Data Science Certification",
    issuer: "Infosys Springboard",
    date: "2024",
    badge: "Data Science"
  }
];

export const testimonialsData = [
  {
    name: "Dr. K. Srinivas",
    role: "Professor & Project Guide, CBIT",
    text: "Kotesh stands out due to his excellent problem-solving ability. His academic background in Data Structures paired with his active interest in AI applications makes him an excellent asset for any technical project.",
    imageText: "KS"
  },
  {
    name: "Vikram R. Singhania",
    role: "Project Mentor, Edunet Foundation",
    text: "During his internship, Kotesh demonstrated exceptional engineering maturity. He built modular, high-performing weather analytics React components that solved responsiveness problems. He is a fast learner.",
    imageText: "VS"
  },
  {
    name: "Shashank G.",
    role: "Project Partner & Developer",
    text: "Collaborating with Kotesh on SkillBridge was a great experience. He architected the FastAPI backend with Groq LLM integrations, delivering 2-second response times. His focus on clean code is outstanding.",
    imageText: "SG"
  }
];
