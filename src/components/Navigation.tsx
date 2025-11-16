import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Experiences", path: "/experiences" },
  ];

  const cyberVaultLinks = [
    { name: "Blog", path: "/blog" },
    { name: "Achievements", path: "/achievements" },
    { name: "Workshops & Events", path: "/workshops" },
    { name: "Security Tools", path: "/tools" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-[#7FFF00]/20 shadow-lg shadow-[#7FFF00]/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-3xl font-bold tracking-wider" style={{ color: '#7FFF00', textShadow: '0 0 20px rgba(127, 255, 0, 0.5)' }}>
        𝐃𝐞𝐜𝐫𝐲𝐩𝐭𝐢𝐧𝐠 𝐅𝐮𝐭𝐮𝐫𝐞..
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold tracking-wide ${
                  isActive(link.path)
                    ? "text-[#7FFF00] bg-[#7FFF00]/10 border border-[#7FFF00]/30"
                    : "text-gray-300 hover:text-[#7FFF00] hover:bg-[#7FFF00]/5"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-1 text-gray-300 hover:text-[#7FFF00] font-semibold tracking-wide"
                >
                  Cyber Vault <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/95 border-[#7FFF00]/30">
                {cyberVaultLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="cursor-pointer text-gray-300 hover:text-[#7FFF00] focus:text-[#7FFF00]">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact">
              <Button 
                className="ml-2 bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90 font-bold tracking-wide px-6 shadow-lg shadow-[#7FFF00]/30"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-primary/20 text-primary"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
              Cyber Vault
            </div>
            {cyberVaultLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-8 py-2 rounded-lg text-foreground hover:bg-secondary transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2">Contact Me</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
