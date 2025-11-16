import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Network Security Scanner",
      description: "Automated tool for identifying vulnerabilities in network infrastructure",
      tech: ["Python", "Nmap", "Scapy"],
    },
    {
      title: "Web Application Firewall",
      description: "Custom WAF implementation with machine learning threat detection",
      tech: ["Go", "ML", "Docker"],
    },
    {
      title: "Encryption Library",
      description: "High-performance cryptographic library for secure communications",
      tech: ["C++", "OpenSSL", "AES"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
