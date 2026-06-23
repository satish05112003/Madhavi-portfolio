import { PortfolioData } from "./types";

/* ------------------------------------------------------------------ */
/*  All portfolio content, extracted from the JSON profile backup.     */
/*  This is the single source of truth for the entire site.           */
/* ------------------------------------------------------------------ */

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "CH. Yudaya Madhavi",
    headline: "Gen AI Engineer & ML Developer",
    bio: `I'm CH. Yudaya Madhavi, currently a Gen AI Intern at Amdocs. I completed my B.Tech in Electronics and Communication Engineering at NIT Agartala. I build AI-powered solutions, LLM-based applications, intelligent agents, and automation systems using modern technologies such as LangChain, LangGraph, Hugging Face, Agent SDKs, and FastAPI.

My passion lies in Generative AI, Agentic AI, Machine Learning, and Software Development. I enjoy designing multi-agent systems, developing RAG-based applications, integrating AI workflows, and building scalable products that solve real-world problems.

Beyond technical skills, I bring strong problem-solving, teamwork, leadership, and communication abilities. As an active student leader and continuous learner, I thrive in collaborative environments and enjoy transforming complex ideas into impactful products.`,
    currentRole: "Gen AI Intern",
    currentCompany: "Amdocs",
    city: "Kakinada",
    state: "Andhra Pradesh",
    country: "India",
    yearsOfExperience: "0.5",
    email: "yudaya2004@gmail.com",
    phone: "+91-9177904194",
    linkedinUrl:
      "https://www.linkedin.com/in/chelluri-yudayamadhavi-462b16290/",
    githubUrl: "https://github.com/Yudaya3006",
  },

  education: [
    {
      institution: "National Institute of Technology, Agartala",
      degree: "Bachelor of Technology",
      field: "Electronics & Communication Engineering",
      cgpa: "7.69",
      percentage: null,
      startYear: 2022,
      endYear: 2026,
      isCurrent: false,
      type: null,
    },
    {
      institution: "Sri Chaitanya Junior College, Kakinada",
      degree: "Senior Secondary (XII)",
      field: "MPC",
      cgpa: null,
      percentage: "93.5",
      startYear: 2019,
      endYear: 2021,
      isCurrent: false,
      type: "HIGH_SCHOOL",
    },
  ],

  experience: [
    {
      company: "Amdocs",
      role: "Gen AI Intern",
      type: "Internship",
      location: "Pune",
      duration: "Jan 2026 – Present",
      description:
        "Building LLM-powered AI agents, multi-agent systems, MCP-enabled applications, and agentic workflows using LangChain, LangGraph, Agent SDKs, Platform SDKs, and Hugging Face. Developing RAG applications, intelligent automation pipelines, conversational AI solutions, and tool-integrated systems with memory management, vector databases, tool calling, and enterprise APIs.",
      skills: [
        "LangChain",
        "LangGraph",
        "Hugging Face",
        "RAG",
        "AI Agents",
        "FastAPI",
      ],
      isCurrent: false,
    },
    {
      company: "Technohacks EduTech",
      role: "Machine Learning Intern",
      type: "Internship",
      location: "Remote",
      duration: "July 2024 – August 2024",
      description:
        "Developed machine learning models for predictive analytics.\n\nPerformed data preprocessing, feature engineering, and model evaluation.\n\nWorked with Python, Pandas, NumPy, Scikit-Learn, and data visualization tools.\n\nImproved understanding of end-to-end ML workflows and deployment concepts.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Machine Learning",
      ],
      isCurrent: false,
    },
  ],

  projects: [
    {
      name: "Pulse Monitor",
      description:
        "Production-ready uptime monitoring platform that continuously tracks website health, response latency, and availability.",
      techStack: ["React", "Vite", "FastAPI", "PostgreSQL", "Docker", "Nginx"],
      projectUrl: "https://github.com/Yudaya3006/PulseMonitor",
      githubUrl: "https://github.com/Yudaya3006/PulseMonitor",
      label: "UPTIME MONITORING // 01",
      tagLine: "Monitor website health, response latency, and availability in real time through an active monitor dashboard.",
      problemStatement: "Traditional monitoring solutions are slow to alert, complex to set up, and resource-heavy, leaving developers in the dark during critical site outages.",
      overview: "A production-ready uptime platform running a background event loop that dispatches ping probes, records latency metrics in PostgreSQL, and delivers webhook notifications under 15ms.",
      features: [
        "✓ Asynchronous background sweeps",
        "✓ Dynamic latency tracking",
        "✓ Sub-15ms webhook dispatch",
        "✓ Dockerized microservice scale",
      ],
    },
    {
      name: "Customer Churn Prediction",
      description:
        "Developed a customer churn prediction ML model, including data preprocessing, feature engineering, and training on 2,000+ records.",
      techStack: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy"],
      projectUrl: "https://github.com/Yudaya3006/Customer_churn_prediction",
      githubUrl: "https://github.com/Yudaya3006/Customer_churn_prediction",
      label: "AI & MACHINE LEARNING // 02",
      tagLine: "Predict customer retention risks using explainable machine learning models and intelligent analytics.",
      problemStatement: "Subscription-based digital platforms struggle to identify customer drop-off indicators, resulting in high churn rates.",
      overview: "An end-to-end classification pipeline built on 2,000+ customer records. Features interactive threshold adjustments and SHAP values for model explainability.",
      features: [
        "✓ Real-time predictions",
        "✓ Explainable AI using SHAP",
        "✓ Interactive analytics dashboard",
        "✓ Automated feature engineering",
      ],
    },
    {
      name: "Health Fitness App",
      description:
        "Engineered a multi-model fitness system using Random Forest to personalize workout and diet plans.",
      techStack: ["Python", "Scikit-Learn", "FastAPI", "ChromaDB"],
      projectUrl: "https://github.com/Yudaya3006/Health-fitness-app",
      githubUrl: "https://github.com/Yudaya3006/Health-fitness-app",
      label: "PREDICTIVE WELLNESS // 03",
      tagLine: "Forecast personal wellness trends and customize workouts using machine learning models.",
      problemStatement: "Generic fitness routines fail to adapt to a user's day-to-day recovery parameters, leading to higher injury rates and stagnant progress.",
      overview: "An adaptive recommendation engine using Random Forest regression to forecast 7-day wellness trends and query ChromaDB for personalized workouts.",
      features: [
        "✓ Dynamic exercise recommendations",
        "✓ 7-day metric recovery index",
        "✓ FastAPI model inference",
        "✓ ChromaDB vector search index",
      ],
    },
  ],

  skills: [
    { name: "Python", category: "Programming Languages", proficiency: "INTERMEDIATE" },
    { name: "C++", category: "Programming Languages", proficiency: "INTERMEDIATE" },
    { name: "C", category: "Programming Languages", proficiency: "INTERMEDIATE" },
    { name: "JavaScript", category: "Programming Languages", proficiency: "INTERMEDIATE" },
    { name: "SQL", category: "Programming Languages", proficiency: "INTERMEDIATE" },
    { name: "HTML", category: "Programming Languages", proficiency: "INTERMEDIATE" },
    { name: "CSS", category: "Programming Languages", proficiency: "INTERMEDIATE" },
    { name: "Generative AI", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "Machine Learning", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "LLMs", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "NLP", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "AI Agents", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "Multi-Agent Systems", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "RAG", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "Fine-Tuning", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "Model Evaluation", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "NumPy", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "Pandas", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "Scikit-Learn", category: "AI & ML", proficiency: "INTERMEDIATE" },
    { name: "LangChain", category: "Frameworks", proficiency: "INTERMEDIATE" },
    { name: "LangGraph", category: "Frameworks", proficiency: "INTERMEDIATE" },
    { name: "FastAPI", category: "Frameworks", proficiency: "INTERMEDIATE" },
    { name: "React", category: "Frameworks", proficiency: "INTERMEDIATE" },
    { name: "Hugging Face Transformers", category: "Frameworks", proficiency: "INTERMEDIATE" },
    { name: "PostgreSQL", category: "Databases", proficiency: "INTERMEDIATE" },
    { name: "MySQL", category: "Databases", proficiency: "INTERMEDIATE" },
    { name: "MongoDB", category: "Databases", proficiency: "INTERMEDIATE" },
    { name: "ChromaDB", category: "Databases", proficiency: "INTERMEDIATE" },
    { name: "Qdrant", category: "Databases", proficiency: "INTERMEDIATE" },
    { name: "Docker", category: "DevOps & Tools", proficiency: "INTERMEDIATE" },
    { name: "Git", category: "DevOps & Tools", proficiency: "INTERMEDIATE" },
    { name: "GitHub", category: "DevOps & Tools", proficiency: "INTERMEDIATE" },
    { name: "Linux", category: "DevOps & Tools", proficiency: "INTERMEDIATE" },
    { name: "Websockets", category: "DevOps & Tools", proficiency: "INTERMEDIATE" },
    { name: "Data Structures & Algorithms", category: "Core CS", proficiency: "INTERMEDIATE" },
    { name: "Object-Oriented Programming", category: "Core CS", proficiency: "INTERMEDIATE" },
    { name: "DBMS", category: "Core CS", proficiency: "INTERMEDIATE" },
    { name: "Computer Networks", category: "Core CS", proficiency: "INTERMEDIATE" },
    { name: "Operating Systems", category: "Core CS", proficiency: "INTERMEDIATE" },
    { name: "REST APIs", category: "Core CS", proficiency: "INTERMEDIATE" },
  ],

  achievements: [
    {
      type: "AWARD",
      title: "JEE Mains 2022",
      description:
        "Secured a position in the top 5.2 percentile globally in the Joint Entrance Examination (JEE Mains) 2022 among over 1 million candidates.",
      issuer: "",
      date: null,
    },
    {
      type: "AWARD",
      title: "Foundation For Excellence Scholar",
      description:
        "Selected to receive a scholarship from the Foundation for Excellence (FFE) in recognition of outstanding academic performance and potential.",
      issuer: "",
      date: null,
    },
    {
      type: "AWARD",
      title: "Training & Placement Coordinator",
      description:
        "Appointed as Training and Placement Representative for the Academic Year 2025-26, representing approximately 950-1000 students and coordinating with recruiters.",
      issuer: "",
      date: null,
    },
    {
      type: "AWARD",
      title: "Inter-NIT Badminton Captain",
      description:
        "Led the institute team in the All India Inter-NIT Badminton Tournament (2024-2025) held at NIT Trichy, demonstrating leadership, teamwork, and discipline.",
      issuer: "",
      date: "2025-01-01",
    },
  ],

  resumes: [
    {
      name: "Madhavi",
      type: "AI_ML",
      parsedText: "",
    },
  ],

  skillsByCategory: {},
};

// Build the skillsByCategory map
const categoryMap: Record<string, typeof portfolioData.skills> = {};
for (const skill of portfolioData.skills) {
  if (!categoryMap[skill.category]) {
    categoryMap[skill.category] = [];
  }
  categoryMap[skill.category].push(skill);
}
portfolioData.skillsByCategory = categoryMap;

export const navItems = [
  { label: "Homepage", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Product Showcase", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills & Technologies", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Resume", href: "#resume" },
  { label: "Get in Touch", href: "#contact" },
];

// Category display order for skills section
export const skillCategoryOrder = [
  "AI & ML",
  "Programming Languages",
  "Frameworks",
  "Databases",
  "DevOps & Tools",
  "Core CS",
];

// Certifications from resume parsed text
export const certifications = [
  {
    title: "SQL Certificate",
    issuer: "HackerRank",
    description:
      "Earned SQL (Basic) Certification demonstrating strong foundational skills in querying, filtering, and managing relational databases.",
  },
  {
    title: "SAWIT.AI Learnathon",
    issuer: "HCLTech, Google Women Techmakers, NASSCOM",
    description:
      "Completed a program focused on the fundamentals of Generative AI, supported by HCLTech, Google Women Techmakers, and NASSCOM FutureSkills Prime.",
  },
];
