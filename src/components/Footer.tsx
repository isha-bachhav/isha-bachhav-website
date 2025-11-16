import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
   <footer className="bg-black border-t border-[#7FFF00]/30 mt-0 relative z-10 py-6">
  <div className="container mx-auto flex justify-between items-center">
    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} Isha Bachhav — All Rights Reserved
    </p>
    <div className="flex gap-6">
      {/* icons here */}
    </div>
  </div>
</footer>

  );
};

export default Footer;
