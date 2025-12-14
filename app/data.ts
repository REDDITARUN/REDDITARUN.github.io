type Project = {
  name: string
  description: string
  read_link: string
  code_link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  description: string
  start: string
  end: string
  link: string
  id: string
  tag: 'edu' | 'work' | 'present'
}

type Publications = {
  title: string
  description: string
  link: string
  uid: string
}

type BlogPosts = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Skills = {
  type: string
  skills: string[]
}

export const PROJECTS: Project[] = [
  {
    name: 'DEPTHS - Depth and Proximity Tracking for Human Support',
    description:
      'Real-time spatial awareness tool for the visually impaired, delivering depth and object tracking under 4ms, 15–25x faster than leading models.',
    read_link: 'https://medium.com/@teendifferent/real-time-vision-aid-for-the-blind-depth-and-proximity-tracking-under-4ms-2a2c09a4d211',
    code_link: '',
    id: 'project5',
  },
  {
    name: 'F.E.A.S.T - Food & Ingredient AI Suggestion Technology',
    description:
      'Real-time ingredient detection recipe generation with nutritional information. Cuts costs, saves time, and inspires home cooking.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/F.E.A.S.T',
    id: 'project1',
  },
  {
    name: 'PEFT',
    description:
      'Guide on efficient fine-tuning adapters using multi-class image datasets. Ideal for researchers seeking high-impact, low-resource model optimization.',
    read_link: 'https://medium.com/predict/battle-of-the-adapters-efficient-fine-tuning-methods-compared-e9fac9e4f10d',
    code_link: 'https://github.com/REDDITARUN/P_E_F_T',
    id: 'project2',
  },
  {
    name: 'Face Recognition Using Meta-Learning',
    description:
      'Efficient facial recognition using Prototypical & Siamese Networks. High-accuracy recognition with limited data for secure verification systems.',
    read_link: 'https://medium.com/@teendifferent/beyond-deep-learning-meta-learning-with-prototypical-networks-for-efficient-ai-56503b642c06',
    code_link: 'https://github.com/REDDITARUN/Meta_ML',
    id: 'project3',
  },
  {
    name: 'RxRovers: Roaming for Rapid Relief',
    description:
      'Optimizes medical supply delivery in hospitals using RL. Ensures timely delivery of medical supplies, enhancing patient care.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/RxRover-Roaming-for-Rapid-Relief',
    id: 'project4',
  },
  {
    name: 'DINO Annotator',
    description:
      'Auto-annotate custom datasets for object detection using Grounding DINO. Speeds up box labeling with zero-shot detection for rare or unseen objects.',
    read_link: 'https://medium.com/predict/simplifying-object-detection-annotate-your-custom-dataset-with-grounding-dino-148576d497da',
    code_link: 'https://github.com/REDDITARUN/DINO_Annotator?tab=readme-ov-file',
    id: 'project6',
  },
  {
    name: 'IntelliRAG',
    description:
      'A personalized AI assistant with RAG (Retrieval-Augmented Generation). Answers questions based on personal documents, uses vector stores for fast and accurate retrieval.',
    read_link: 'https://medium.com/@teendifferent/unlocking-ai-superpowers-with-rag-smarter-answers-from-your-personal-data-c6accabf013c',
    code_link: 'https://github.com/REDDITARUN/RAG-Personalized-AI/blob/main/README.md',
    id: 'project7',
  },
  {
    name: 'NEXUS',
    description:
      'A solution hub for NEWS classification, Image Analysis, and Anamaly Detection.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/N.E.X.U.S',
    id: 'project8',
  },
  {
    name: 'Deep RL',
    description:
      'A hub for Deep Reinforcement Learning models for dynamic problem-solving. Ideal for autonomous control, gaming, and robotics.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/DeepRL',
    id: 'project9',
  },
  {
    name: 'Green AI',
    description:
      'Carbon footprint analysis and reduction tools for tech and AI model training. Helps to make eco-friendly choices, optimize energy, and reduce emissions.',
    read_link: 'https://medium.com/@teendifferent/green-computing-harnessing-ai-for-a-sustainable-future-0626cc94efaa',
    code_link: 'https://github.com/REDDITARUN/Carbon-Footprint',
    id: 'project10',
  },
  {
    name: 'Crimson Eye: Data-Driven Crime Analysis',
    description:
      'Enhances predictive policing by analyzing crime data. Optimizes law enforcement resource allocation.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/Predictive-Crime-Analysis',
    id: 'project11',
  },
  {
    name: 'Tiny LLM',
    description:
      'Tested lightweight LLMs for local personal assistance with minimal resources.',
    read_link: 'https://medium.com/@teendifferent/exploring-tiny-llms-as-your-personal-assistant-llama-3-2-codegemma-and-more-679f5455c8c4',
    code_link: 'https://github.com/REDDITARUN/tiny_llm',
    id: 'project12',
  },
  {
    name: 'AI at Play',
    description:
      'RL in Squirrel Maze & Stock Trader for strategic learning and decision-making. Perfect for testing RL in real-world-inspired scenarios.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/AI_at_play_SquirrelMaze_StockTrader_RL/tree/main',
    id: 'project13',
  },
  {
    name: 'Music Vision',
    description:
      'Genre classification with ANN, CNN, and Transfer Learning on Mel spectrograms. Ideal for exploring deep learning in complex audio classification.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/Music_Genre_Classification_CNN/tree/main',
    id: 'project14',
  },
  {
    name: 'Privileged Identity Management - Intune',
    description:
      'Implements data loss prevention and privileged identity management. Ensures compliance and security.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/Intune-PCI-Compliance',
    id: 'project15',
  },
  {
    name: 'CrowdSec Deployment Guide: Enhancing Cybersecurity',
    description:
      'Deployment steps for CrowdSec, an SOAR basedintrusion prevention system. Enhances collective security.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/CrowdSec-Deployment-Guide',
    id: 'project16',
  },
  {
    name: 'Gear Shift DB',
    description:
      'Custom DBMS for Formula 1 data management. Enhances efficiency and decision-making powered by PostgreSQL.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/GearShift-DB',
    id: 'project17',
  },
  {
    name: 'Pintos',
    description:
      'Programmed essential OS components like threading, synchronization, scheduling, and system calls.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/Pintos-Projects',
    id: 'project18',
  },
  {
    name: 'SnapShift',
    description:
      'Efficient Python tool for bulk image scraping from Bing. Perfect for ML, web dev, and research projects needing large image datasets.',
    read_link: '',
    code_link: 'https://github.com/REDDITARUN/Snap_Swift',
    id: 'project19',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Makora (Formerly Mako)',
    title: 'AI Engineer',
    description: 'Working on Fine-tuning LLMs (SFT/RFT), agentic workflows for kernel gen across CUDA/HIP/Triton.',
    start: 'Aug 2025',
    end: 'Present',
    link: 'https://www.linkedin.com/in/tarunreddi/',
    id: 'work7',
    tag: 'present',
  },
  {
    company: 'University at Buffalo, SUNY',
    title: 'Research & Teaching Assistant',
    description: 'Led CV/DL research (2 papers published, Best Research Award), mentored 200+ students on Big Data/Spark.',
    start: 'Aug 2024',
    end: 'Aug 2025',
    link: 'https://www.linkedin.com/in/tarunreddi/',
    id: 'work6',
    tag: 'work',
  },
  {
    company: 'Scoleaf',
    title: 'Founder',
    description: 'Built AI tutor (1K+ users); implemented agentic orchestration, async streaming, and multimodal stacks.',
    start: 'Dec 2024',
    end: 'Aug 2025',
    link: 'https://www.linkedin.com/in/tarunreddi/',
    id: 'work5',
    tag: 'work',
  },
  {
    company: '9thGen AI',
    title: 'Contributor',
    description: 'Contributed to the development of commercial agentic AI voice agents.',
    start: 'Feb 2025',
    end: 'May 2025',
    link: 'https://www.linkedin.com/in/tarunreddi/',
    id: 'work4',
    tag: 'work',
  },
  {
    company: 'University at Buffalo, SUNY',
    title: 'Master of Science in Computer Science (3.8 / 4.0)',
    description: '',
    start: 'Aug 2023',
    end: 'Jan 2025',
    link: 'https://www.linkedin.com/in/tarunreddi/',
    id: 'work3',
    tag: 'edu',
  },
  {
    company: 'Vellore Institute of Technology',
    title: 'Research Assistant',
    description: 'Published journal on email spoofing/vulnerabilities analyzed malware exploits and created 11 mitigation plans.',
    start: '2022',
    end: '2023',
    link: 'https://www.linkedin.com/in/tarunreddi/',
    id: 'work2',
    tag: 'work',
  },
  {
    company: 'Vellore Institute of Technology',
    title: 'B.Tech in Computer Science and Engineering (8.7 / 10)',
    description: '',
    start: '2019',
    end: '2023',
    link: 'https://www.linkedin.com/in/tarunreddi/',
    id: 'work1',
    tag: 'edu',
  },
]

export const SKILLS: Skills[] = [
  {
    type: 'I start with',
    skills: ['Python', 'Java', 'SQL', 'git', 'C++'], // Added C++ (good for low-level research)
  },
  {
    type: 'I build with',
    skills: [
      'PyTorch', 'TensorFlow', 'Transformers', 'Hugging Face',
      'Scikit-learn', 'Pandas', 'WandB', 
      'LangChain', 'Gymnasium', 'NumPy', 'Matplotlib'
    ],
  },
  {
    type: '& I deliver',
    skills: [
      'Model Architectures', 'Agentic Workflows', 
      'Model Training/Fine-tuning (SFT/RFT)', 'Distributed Training', 'Quantization & Optimization',
      'Inference & Deployment',
    ],
  },
]

export const PUBLICATIONS: Publications[] = [
  {
    title: 'Adaptive Driver Assistance: Context-based Approach to Pedestrian Safety',
    description: 'Submitted for review | Preprint - TechRxiv',
    link: 'https://www.techrxiv.org/doi/full/10.36227/techrxiv.174495400.07758247',
    uid: 'publication-1',
  },
  {
    title: 'Mapping Crime Dynamics: Integrating Textual, Spatial, and Temporal Perspectives',
    description:'IEEE UEMCON 2024',
    link: 'https://ieeexplore.ieee.org/document/10754762',
    uid: 'publication-2',
  },
  {
    title: 'A comprehensive examination of email spoofing: Issues and prospects for email security',
    description:'Computers & Security Journal (Elsevier) 2023',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0167404823005102',
    uid: 'publication-3',
  },
  {
    title: 'A Traffic Control System',
    description: 'Patent 2023',
    link: 'https://drive.google.com/file/d/1fkZByjlH_fKrEhoGkK7CIwObRMzPKOLu/view',
    uid: 'publication-4',
  },
]

export const BLOG_POSTS: BlogPosts[] = [
  {
    title: 'Sample-Tuned Rank-Augmented Weights',
    description: 'An experiment in making neural networks rewrite themselves for every single input.',
    link: 'https://teendifferent.substack.com/p/sample-tuned-rank-augmented-weights',
    uid: 'blog-2',
  },
  {
    title: 'Your Features Aren’t What You Think They Are',
    description: 'Evaluating Local Feature Attribution and Decision Fidelity in Deep Vision Models via Perturbed Inputs',
    link: 'https://teendifferent.substack.com/p/your-features-arent-what-you-think',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Blog',
    link: 'https://teendifferent.substack.com/',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/REDDITARUN',
  },
  {
    label: 'Hugging Face',
    link: 'https://huggingface.co/Teen-Different',
  },
  {
    label: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=c7nnCtUAAAAJ&hl=en'
  },
  {
    label: 'X',
    link: 'https://x.com/_TeenDifferent'
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tarunreddi/',
  },
  {
    label: 'Medium (Old Articles)',
    link: 'https://medium.com/@teendifferent',
  },
];


export const EMAIL = 'iamtarunreddi@gmail.com'
