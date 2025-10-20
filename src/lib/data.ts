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
    "Languages": ["Python", "C++", "Java", "SQL"],
    "AI/ML Tools": ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "LangChain"],
    "Data & Visualization": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
    "Systems & Development": ["CUDA", "HPC", "Distributed Computing", "Docker", "Git", "Firebase"]
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
    company: "Ziberr",
    period: "Feb 2024 – Apr 2024",
    logoId: "ziberr-logo-1",
    description: [
      "Automated critical business integrations, boosting operational efficiency.",
      "Contributed to a 28% improvement in revenue through technical optimizations.",
      "Managed and processed over 100,000 weekly transactions.",
    ],
  },
];

export const projects = [
  {
    title: "SLMs vs. LLMs: A Performance Benchmark",
    description: "A comprehensive thesis benchmarking the performance of compact SLMs against full-scale LLMs.",
    details: "This 2025 thesis investigates the trade-offs between Smaller Language Models (SLMs) like Phi-2 and Gemma versus Large Language Models (LLMs) such as Llama 3.1. The research focuses on performance metrics including accuracy, inference speed, and resource consumption across a variety of downstream tasks. The goal is to identify optimal use cases for each model class in resource-constrained environments.",
    tags: ["Thesis", "LLM", "SLM", "Benchmarking", "Phi-2", "Gemma", "Llama 3.1"],
    imageId: "slm-llm-project-1",
    award: "Upcoming Thesis 2025",
    link: "https://github.com/Ramkasuru"
  },
  {
    title: "VIOLA: Multimodal AI Assistant",
    description: "An integrated AI assistant combining vision, speech, and language understanding.",
    details: "VIOLA is a multimodal AI assistant that leverages state-of-the-art models to create a seamless interactive experience. It integrates YOLOv8 for real-time object detection, OpenAI's Whisper for accurate speech-to-text, and GPT-4 for advanced natural language understanding and generation. This project was recognized for its innovative approach to human-computer interaction.",
    tags: ["Multimodal AI", "YOLOv8", "Whisper", "GPT-4", "Python", "PyTorch"],
    imageId: "viola-project-1",
    award: "Best AI for Social Impact 2024",
    link: "https://github.com/Ramkasuru"
  },
];
