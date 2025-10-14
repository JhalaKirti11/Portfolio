import { Card } from "@/components/ui/card";
import { Code2, Users, Zap } from "lucide-react";

export function About() {
  const stats = [
    { icon: Code2, label: "Months Experience", value: "9" },
    { icon: Zap, label: "Projects Completed", value: "5+" },
    { icon: Users, label: "Technologies", value: "10+" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center">About Me</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">From Commerce to Code</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With a unique background in Bachelor of Commerce, I discovered my passion for technology and made a bold transition into full-stack development. This journey has equipped me with a distinctive perspective that combines business acumen with technical expertise.
              </p>
              <p>
                After comprehensive training at InfoBeans Foundation in Java and MERN stack development, I joined Web N Soft Solutions as a MERN Stack Developer. There, I contributed to building robust web applications, optimized UI performance by 25%, and collaborated with cross-functional teams.
              </p>
              <p>
                I'm driven by the challenge of creating efficient, user-friendly applications that solve real-world problems. My approach emphasizes clean code, best practices, and continuous learning to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover-elevate transition-shadow">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1" data-testid={`text-stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
