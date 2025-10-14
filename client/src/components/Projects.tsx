import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import project1 from "@assets/stock_images/web_application_dash_b66a79fb.jpg";
import project2 from "@assets/stock_images/web_application_dash_b04c9b43.jpg";
import project3 from "@assets/stock_images/web_application_dash_aee29e23.jpg";
import project4 from "@assets/stock_images/technology_coding_pr_02f210a3.jpg";
import project5 from "@assets/stock_images/technology_coding_pr_8fa5cb27.jpg";

export function Projects() {
  const projects = [
    {
      title: "CrickLink",
      description: "A full-stack web application connecting local cricket players, teams, and tournament organizers for better coordination and engagement.",
      image: project1,
      highlights: [
        "Secure JWT authentication with role-based access",
        "Dynamic dashboards for tournament management",
        "RESTful APIs for team registration and player search",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "JWT"],
    },
    {
      title: "Jukebox",
      description: "Console-based Java music streaming application with JDBC connectivity for organizing songs and managing playlists.",
      image: project5,
      highlights: [
        "MySQL database integration",
        "User-friendly interface for music management",
        "Persistent playlist management",
      ],
      tech: ["Java", "MySQL", "JDBC"],
    },
    {
      title: "CasinoTop",
      description: "Clean and user-friendly UI for an online gaming platform with interactive features and seamless user experience.",
      image: project3,
      highlights: [
        "Interactive UI with modals and form validations",
        "Component reusability focus",
        "Cross-browser compatibility",
      ],
      tech: ["React.js", "Next.js", "JavaScript", "Bootstrap"],
    },
    {
      title: "Gondli",
      description: "Fitness & wellness platform offering yoga, meditation, diet plans, and exercise routines with engaging UI components.",
      image: project4,
      highlights: [
        "REST API integration for dynamic content",
        "SSR/CSR implementation with Next.js",
        "Optimized frontend performance",
      ],
      tech: ["Next.js", "React.js", "RESTful APIs"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my work spanning web applications, e-commerce platforms, and innovative solutions
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`card-project-${index}`}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Button size="icon" variant="ghost" data-testid={`button-project-${index}-link`}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
