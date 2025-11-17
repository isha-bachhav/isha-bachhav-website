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
    { name: "Workshops & Events", path: "/workshops" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-lg border-b border-[#7FFF00]/20 shadow-lg shadow-[#7FFF00]/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold tracking-wider"
            style={{ color: "#7FFF00", textShadow: "0 0 20px rgba(127,255,0,0.5)" }}
          >
            𝐃𝐞𝐜𝐫𝐲𝐩𝐭𝐢𝐧𝐠 𝐅𝐮𝐭𝐮𝐫𝐞..
          </Link>

          {/* DESKTOP NAV */}
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


            <Link to="/contact">
              <Button className="ml-2 bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90 font-bold tracking-wide px-6 shadow-lg shadow-[#7FFF00]/30">
                Contact Me
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-3 space-y-1 bg-black/95 rounded-lg shadow-lg">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg font-semibold ${
                  isActive(link.path)
                    ? "bg-[#7FFF00]/20 text-[#7FFF00]"
                    : "text-gray-200 hover:bg-[#7FFF00]/10 hover:text-[#7FFF00]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="px-4 pt-3 pb-1 text-gray-400 uppercase text-sm font-bold">
              Cyber Vault
            </div>

            {cyberVaultLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 text-gray-200 hover:text-[#7FFF00] hover:bg-[#7FFF00]/10 rounded-lg"
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-3 bg-[#7FFF00] text-black font-bold hover:bg-[#7FFF00]/80">
                Contact Me
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
