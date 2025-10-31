import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import profileImage from "@assets/stock_images/professional_headsho_f10c26d8.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center mx-auto px-6 w-full md:w-1/2 text-center ">
        <div className="space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-2 animate-fade-in">Hi, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-in">
              Kirti Jhala
            </h1>
            <p className="text-xl lg:text-2xl text-primary font-medium animate-fade-in">
              Full-Stack Developer | MERN Stack Specialist | Problem Solver
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Passionate about building efficient and user-friendly applications. Experienced in React.js, Node.js, Express.js, and MongoDB with a focus on creating seamless digital experiences.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 animate-scale-in">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center items-center gap-4 animate-fade-in">
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-github"
            >
              <a href="https://github.com/JhalaKirti11" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-linkedin"
            >
              <a href="https://linkedin.com/in/jhalakirti11/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-email"
            >
              <a href="mailto:kirtijhala1110@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
