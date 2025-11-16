import { Facebook, Instagram, Twitter, Linkedin, Globe, Github } from "lucide-react";

const SocialSidebar = () => {
  const socials = [
    {icon: Github,href: "https://github.com/isha-bachhav", label: "Github"},
    
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/isha_bachhav", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/isha-bachhav/", label: "LinkedIn" },
    { icon: Globe, href: "https://example.com", label: "Blog" },
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
