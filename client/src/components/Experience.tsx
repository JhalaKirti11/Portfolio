import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "MERN Stack Developer",
      company: "Web N Soft Solutions",
      period: "Feb 2025 - Oct 2025 (9 months)",
      achievements: [
        "Contributed to full-stack web application development using React.js, Node.js, Express.js, and MongoDB",
        "Integrated RESTful APIs, improving data handling and communication between frontend and backend systems",
        "Optimized component rendering and enhanced UI performance, reducing load times by 25%",
        "Participated in code reviews to improve development efficiency",
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      type: "training",
      icon: GraduationCap,
      title: "Full-Stack Development Training",
      company: "InfoBeans Foundation",
      period: "May 2024 - Feb 2025",
      achievements: [
        "Learned Java fundamentals and MERN stack development through project-based learning",
        "Applied best practices in clean coding, debugging, and version control",
        "Collaborated in team projects, improving communication and problem-solving skills",
        "Built a strong understanding of end-to-end web application architecture",
      ],
      skills: ["Java", "MERN Stack"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-center">Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My professional journey and continuous growth in software development
        </p>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="md:ml-20">
                  <div className="absolute left-8 -translate-x-1/2 hidden md:block">
                    <div className="w-16 h-16 rounded-full bg-card border-4 border-background flex items-center justify-center">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <Card className="p-6 hover-elevate transition-shadow" data-testid={`card-experience-${index}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs font-mono">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
