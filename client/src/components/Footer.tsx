import { Github, Mail } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="border-t bg-card">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kirti Jhala</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Full-Stack Developer passionate about building efficient and user-friendly applications.
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-footer-github"
              >
                <a href="https://github.com/JhalaKirti11" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-footer-linkedin"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-footer-email"
              >
                <a href="mailto:kirtijhala1110@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Feel free to reach out for collaborations or opportunities.
            </p>
            <a
              href="mailto:kirtijhala1110@gmail.com"
              className="text-sm text-primary hover:underline"
              data-testid="link-footer-email-text"
            >
              kirtijhala1110@gmail.com
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kirti Jhala. Built with React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
}
