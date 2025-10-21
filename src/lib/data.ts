import { BrainCircuit, Users, Sparkles, GitBranch } from 'lucide-react';

export const education = [
  {
    degree: "M.S. in Applied Artificial Intelligence",
    institution: "Stevens Institute of Technology",
    years: "2025–2026",
  },
  {
    degree: "B.Tech in AI & ML",
    institution: "Dayananda Sagar University",
    years: "2019–2024",
  },
];

export const personalityTraits = [
    {
      icon: Sparkles,
      title: "Curious",
      description: "Driven by a constant need to learn and explore new frontiers in AI.",
    },
    {
      icon: BrainCircuit,
      title: "Analytical",
      description: "Deconstructing complex problems into manageable, solvable parts.",
    },
    {
      icon: Users,
      title: "Team-Driven",
      description: "Believes that collaborative synergy leads to the most impactful innovations.",
    },
    {
      icon: GitBranch,
      title: "Adaptable",
      description: "Thrives in fast-paced environments and quickly masters new technologies.",
    },
];

export const skills = {
    "Languages": ["Python", "C++", "Java", "SQL", "C"],
    "AI/ML & Data Science": ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "LangChain", "Data Analysis", "Statistics & Probability"],
    "Data Tools & Viz": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Data Visualization", "Database Management"],
    "Dev & Leadership": ["HPC", "Distributed Computing", "Docker", "Git", "Firebase", "Leadership & Team Management", "Technical Communication"]
};

export const experience = [
  {
    role: "Prompt Engineer",
    company: "Outlier AI",
    period: "Jan 2024 – May 2024",
    logoId: "outlier-logo-1",
    description: [
      "Improved LLM accuracy by 12% through advanced prompt engineering.",
      "Designed and implemented robust evaluation pipelines for model performance.",
      "Benchmarked over 5 leading LLMs to identify optimal solutions.",
    ],
  },
  {
    role: "Technical Operations Intern",
    company: "Ziberr (SuperFone)",
    period: "Feb 2024 – Apr 2024",
    logoId: "ziberr-logo-1",
    description: [
      "Automated critical business integrations, boosting operational efficiency.",
      "Contributed to a 30% revenue boost via Shopify and a 40% engagement increase on Facebook.",
      "Managed and processed over 100,000 weekly transactions.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "CodeTown EdTech Pvt Ltd",
    period: "Sep 2023 – Nov 2023",
    logoId: "codetown-logo-1",
    description: [
      "Focused on Discord-based sales analytics, increasing sales growth by 20%.",
      "Collaborated with the co-founder to analyze and grow the community.",
      "Boosted user engagement and activity on Discord by 30%.",
    ],
  },
];

export const projects = [
  {
    title: "VIOLA: Multimodal AI Assistant",
    description: "An integrated AI assistant combining vision, speech, and language understanding.",
    details: "VIOLA is a multimodal AI assistant that leverages state-of-the-art models to create a seamless interactive experience. It integrates YOLOv8 for real-time object detection, OpenAI's Whisper for accurate speech-to-text, and GPT-4 for advanced natural language understanding and generation. This project was recognized for its innovative approach to human-computer interaction and its potential for social impact.",
    tags: ["Multimodal AI", "YOLOv8", "Whisper", "GPT-4", "Python", "PyTorch"],
    imageId: "viola-project-1",
    award: "Winner – Best AI for Social Impact",
    link: "https://github.com/Ramkasuru/VIOLA-Multimodal-AI-Assistant"
  },
  {
    title: "DASH (Personal Project)",
    description: "An evolution of the VIOLA multimodal AI, enhancing its core pipeline for superior performance.",
    details: "DASH represents the next step in my multimodal AI journey, building upon the foundations of VIOLA. This project focused on significant performance enhancements, boosting object detection accuracy from 90% to 98% and increasing contextual relevance to 95%. It showcases my continued growth and mastery in creating sophisticated, integrated AI systems.",
    tags: ["Multimodal AI", "Personal Project", "AI Enhancement", "YOLOv8", "GPT-4"],
    imageId: "dash-project-1",
    award: "Personal Endeavor 2025",
    link: "https://github.com/Ramkasuru"
  },
  {
    title: "ACURATE: AI-Powered Emergency Triage",
    description: "A rapid triage prediction system using ML to reduce patient evaluation time.",
    details: "ACURATE is an AI-powered triage system designed for emergency services. By leveraging LGBM, Random Forest, and SVM models, it rapidly predicts patient priority, reducing evaluation time by 60%. The system also improved the reliability of emergency documentation by 70%, ensuring faster and more accurate care.",
    tags: ["Healthcare AI", "Machine Learning", "SVM", "Random Forest", "LGBM"],
    imageId: "acurate-project-1",
    award: "",
    link: "https://github.com/Ramkasuru"
  },
    {
    title: "Brain Stroke Prediction Using ML",
    description: "A machine learning pipeline to predict brain strokes from MRI images with high accuracy.",
    details: "This project involved processing and augmenting 394 MRI images across four categories (glioma, meningioma, pituitary, and normal) to build a robust prediction model. The resulting machine learning pipeline achieved a 92% prediction accuracy, enhancing the potential for early stroke detection by 35% through model refinement.",
    tags: ["Machine Learning", "Healthcare AI", "Image Processing", "MRI"],
    imageId: "brain-stroke-project-1",
    award: "",
    link: "https://github.com/Ramkasuru/Brain-Stroke-Prediction"
  },
  {
    title: "Emergency Services App",
    description: "A comprehensive mobile app for GPS-enabled ambulance dispatch and real-time coordination.",
    details: "Developed a full-stack emergency services application featuring GPS-enabled ambulance dispatch, an admin dashboard for monitoring, and real-time hospital coordination. The system improved emergency request handling efficiency by 40-50% and included integrated push notifications to streamline communication between all parties.",
    tags: ["Mobile App", "Full-Stack Dev", "GPS", "Real-Time", "Healthcare"],
    imageId: "emergency-app-project-1",
    award: "",
    link: "https://github.com/Ramkasuru/Emergency_Services_App"
  },
  {
    title: "SLMs vs. LLMs: A Performance Benchmark",
    description: "A comprehensive thesis benchmarking the performance of compact SLMs against full-scale LLMs.",
    details: "This 2025 thesis investigates the trade-offs between Smaller Language Models (SLMs) like Phi-2 and Gemma versus Large Language Models (LLMs) such as Llama 3.1. The research focuses on performance metrics including accuracy, inference speed, and resource consumption across a variety of downstream tasks. The goal is to identify optimal use cases for each model class in resource-constrained environments.",
    tags: ["Thesis", "LLM", "SLM", "Benchmarking", "Phi-2", "Gemma", "Llama 3.1"],
    imageId: "slm-llm-project-1",
    award: "Upcoming Thesis 2025",
    link: "https://github.com/Ramkasuru/Masters-Thesis"
  },
];
