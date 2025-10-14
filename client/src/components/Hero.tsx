import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, ChevronDown } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building efficient & user-friendly applications";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
          Kirti Jhala
        </h1>
        
        <div className="h-16 mb-8">
          <p className="text-xl lg:text-2xl text-muted-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Full-Stack Developer specializing in MERN stack. Passionate about creating innovative solutions and continuously learning new technologies.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-scale-in">
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
            Get in Touch
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-4 animate-fade-in">
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  );
}
