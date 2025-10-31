import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "Java", "HTML", "CSS"],
      color: "bg-chart-1/10 text-chart-1 border-chart-1/20",
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
      color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT"],
      color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "JDBC"],
      color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    },
    {
      category: "Tools & Others",
      skills: ["Postman", "VS Code", "GitHub"],
      color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-center">Skills & Technologies</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable web applications
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-medium flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`${category.color} font-mono text-xs`}
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\./g, '-').replace(' ', '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
