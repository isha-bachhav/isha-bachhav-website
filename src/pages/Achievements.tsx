import { Trophy, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Bug Bounty Hall of Fame",
      description: "Recognized by multiple Fortune 500 companies for critical vulnerability discoveries",
    },
    {
      title: "CTF Competition Winner",
      description: "First place in National Cybersecurity Competition 2023",
    },
    {
      title: "Security Research Publication",
      description: "Published research on novel attack vectors in IEEE Security & Privacy",
    },
    {
      title: "Open Source Contributor",
      description: "Major contributions to security tools with 10k+ GitHub stars",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">Achievements</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
