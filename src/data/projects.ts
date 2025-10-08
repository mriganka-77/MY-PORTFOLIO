export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "splitsmart",
    title: "SplitSmart",
    description: "Smart expense tracker for splitting bills and tracking group balances with real-time calculations",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/mriganka-77/SplitSmart.git",
  },
  {
    id: "weather-now",
    title: "Weather Now",
    description: "Real-time weather application with animated UI and location-based forecasts",
    tech: ["JavaScript", "API Integration", "CSS Animations"],
    github: "https://github.com/mriganka-77/Weather-Now.git",
  },
  {
    id: "n-queens",
    title: "N-Queens Visualizer",
    description: "Interactive backtracking algorithm visualizer for the classic N-Queens problem",
    tech: ["JavaScript", "Algorithms", "Visualization"],
    github: "https://github.com/mriganka-77/N-QUEENS.git",
  },
  {
    id: "oop-projects",
    title: "OOP Projects",
    description: "Collection of object-oriented programming examples and design patterns in Java/C++",
    tech: ["Java", "C++", "OOP", "Design Patterns"],
    github: "https://github.com/mriganka-77/OBJECT-ORIENTED-PROGRAMMING.git",
  },
  {
    id: "movie-recommender",
    title: "Hybrid Movie Recommendation System",
    description: "Intelligent movie recommender using hybrid collaborative and content-based filtering",
    tech: ["Python", "Machine Learning", "Pandas", "scikit-learn"],
    github: "https://github.com/mriganka-77/HYBRID-MOVIE-RECOMMENDATION-SYSTEM.git",
  },
  {
    id: "python-projects",
    title: "Python Projects",
    description: "Collection of mini Python projects showcasing automation, algorithms, and data processing",
    tech: ["Python", "Automation", "Data Science"],
    github: "https://github.com/mriganka-77/PYTHON-PROJECTS.git",
  },
];
