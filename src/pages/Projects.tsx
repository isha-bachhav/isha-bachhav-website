import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Animal Welfare Association",
      description: "Animal Welfare Association (AWA) is dedicated to protecting and caring for animals in need. Through rescue, rehabilitation, adoption, and community education, we strive to create a compassionate world where every animal is safe, loved, and respected.",
      tech: ["HTML", "CSS", "JS","PHP"],
      github: "https://github.com/isha-bachhav/animal-welfare-association",
      demo: "https://animal-welfare-association.vercel.app/",
    },
    {
      title: "NASA ",
      description: "Astro-Bio Quest is an exciting and interactive platform that blends the wonders of space with the science of life. Embark on a journey through the cosmos, explore celestial bodies, and uncover the mysteries of biology beyond Earth. Designed for curious mindS.",
      tech: ["REACT", "TAILWIND CSS", "HTML 5"],
      github: "https://github.com/isha-bachhav/astro-bio-quest-NASA",
      demo: "https://astro-bio-quest.lovable.app/",
    },
    {
      title: "Web-linked CHMS",
      description: "Web‑Linked Centralized Hospital Management System is a cloud-based platform designed to unify and streamline all hospital operations in one place. From patient registration, appointments, and electronic health records (EHR) to billing, inventory, labs, and pharmacy ",
      tech: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/isha-bachhav/weblinked-chms",
      demo: "https://weblinked-chms.vercel.app/",
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full flex justify-center items-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="w-full flex justify-center items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
