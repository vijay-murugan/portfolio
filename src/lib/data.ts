export const SKILLS = {
  "Backend": ["Java", "Spring Boot", "Spring","Python", "C", "REST APIs", "FastAPI", "Flask"],
  "AI & Machine Learning": ["TensorFlow", "PyTorch", "scikit-learn", "GenAI", "NLP", "Computer Vision"],
  "Databases": ["DynamoDB", "PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD"],
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  "Monitoring & Logging": ["Splunk", "Sumo Logic", "Telemetry-Kibana"],
  "Soft Skills": ["Problem Solving", "Team Collaboration", "Agile Methodologies", "Effective Communication", "Mentoring", "Leadership", "Scrum", "Kanban"],
};

export const PROJECTS = [
  {
    id: "proj-1",
    title: "Company Logo Search & Flowchart Builder ",
    summary: "Engineered a scalable React.js application with Firebase authentication serving 250+ users at 99% reliability, integrating Google Favicon API, MongoDB storage, and canvas-based development tools to build flow-charts with company logos.",
    tags: ["React", "MongoDB", "NGINX", "Firebase"],
    repoUrl: "https://github.com/vijay-murugan/logolego",
    liveUrl: null,
  },
  {
    id: "proj-2",
    title: "Smart Movie Recommendation",
    summary: "Built a personalized movie recommendation system by training a hybrid ML model combining K-means and cosine similarity. Deployed with Fast API backend, TypeScript frontend, and Firebase authentication to deliver over 90% accurate suggestions.",
    tags: ["Python", "Fast API", "ML", "TypeScript", "Firebase"],
    repoUrl: "https://github.com/vijay-murugan/movie-recommendation",
    liveUrl: null,
  }
];
