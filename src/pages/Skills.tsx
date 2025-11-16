import { Shield, Code, Database, Network, Lock, Bug } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Cyber Exploration",
      skills: ["Malware & Phishing", "Password & Data Protection", "Security Tools (Shodan, Nmap)", "Network & System Security"],
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["C", "C++ ","Java", "Python", "Android","Web Development Languages"],
    },
    {
      icon: Network,
      title: "Networking",
      skills: ["OSI & TCP/IP Models", "Firewalls", "VPN", "IDS/IPS","Wireshark","SSH,Proxy & NAT"],
    },
    {
      icon: Database,
      title: "Systems",
      skills: ["Linux", "Windows", "MySQL, SQL", "XAMPP"," GitHub" ]
    },
    {
      icon: Lock,
      title: "Cryptography",
      skills: ["Encryption & Decryption", "Symmetric vs Asymmetric Cryptography", "Hashing Algorithms", "Digital Signatures"],
    },
    {
      icon: Bug,
      title: " Testing",
      skills: ["Web App Testing", "Network Scanning", "Social Engineering", "Software Testing"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 pb-20 overflow-hidden relative">
      {/* 💠 Blue Glowing Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.1)_0%,transparent_80%)] animate-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      {/* 🔹 Floating Glow Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#00BFFF] rounded-full blur-[2px] opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float-${i % 5} ${5 + Math.random() * 5}s ease-in-out infinite`,
          }}
        ></div>
      ))}

      <div className="container mx-auto relative z-10">
        {/* 💫 Main Heading */}
        <h1 className="text-5xl font-extrabold mb-16 text-center text-[#00BFFF] drop-shadow-[0_0_20px_#00BFFF] animate-pulse tracking-wide">
          Skills & Expertise
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative bg-[#0A0A0A]/90 p-8 rounded-2xl border border-[#00BFFF]/30 
                         hover:border-[#00BFFF]/70 transition-all duration-500 
                         hover:shadow-[0_0_25px_#00BFFF]/40 group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 💡 Soft Blue Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Icon */}
              <category.icon className="h-10 w-10 text-[#39e6f2] mb-4 transition-transform group-hover:scale-110 duration-300 drop-shadow-[0_0_8px_#00BFFF]" />

              {/* Category Title */}
              <h3 className="text-2xl font-semibold mb-4 text-[#8cd9ff] drop-shadow-[0_0_12px_#00BFFF]/40 tracking-wide">
                {category.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-[#b9e6ff] flex items-center text-base hover:text-[#00BFFF] transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-[#00BFFF] rounded-full mr-3 shadow-[0_0_6px_#00BFFF]/50"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Floating Animations Keyframes */}
      <style>{`
        @keyframes float-0 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes float-1 { 0%, 100% { transform: translateY(10px); } 50% { transform: translateY(-15px); } }
        @keyframes float-2 { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(15px); } }
        @keyframes float-3 { 0%, 100% { transform: translateY(5px); } 50% { transform: translateY(-10px); } }
        @keyframes float-4 { 0%, 100% { transform: translateX(-5px); } 50% { transform: translateX(10px); } }
      `}</style>
    </div>
  );
};

export default Skills;
