import { Terminal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tools = () => {
  const tools = [
    {
      name: "SecScan Pro",
      description: "Comprehensive network vulnerability scanner",
      category: "Network Security",
    },
    {
      name: "PasswordAudit",
      description: "Password strength analyzer and breach checker",
      category: "Authentication",
    },
    {
      name: "CryptoLib",
      description: "Secure encryption and decryption utilities",
      category: "Cryptography",
    },
    {
      name: "LogAnalyzer",
      description: "Security log analysis and threat detection",
      category: "Monitoring",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">Security Tools</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <Terminal className="h-8 w-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{tool.name}</h3>
                  <span className="text-sm text-primary">{tool.category}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{tool.description}</p>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
