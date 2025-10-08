export interface Skill {
  name: string;
  level: number;
  category: "languages" | "frameworks" | "tools";
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "Java", level: 85, category: "languages" },
  { name: "JavaScript", level: 88, category: "languages" },
  { name: "HTML", level: 95, category: "languages" },
  { name: "CSS", level: 92, category: "languages" },
  { name: "SQL", level: 80, category: "languages" },
  
  // Frameworks & Concepts
  { name: "React", level: 90, category: "frameworks" },
  { name: "DSA", level: 85, category: "frameworks" },
  { name: "OOP", level: 88, category: "frameworks" },
  { name: "AI & ML", level: 82, category: "frameworks" },
  
  // Tools
  { name: "Git", level: 88, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
];
