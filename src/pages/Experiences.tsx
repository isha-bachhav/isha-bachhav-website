import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ExternalLink, X } from "lucide-react";

// 🖼️ Internship images
import cyberXplore from "@/assets/offerletter/zoblik.png";
import tata from "@/assets/offerletter/application square.jpg";
import thetechunique from "@/assets/offerletter/amigos.png";
import aifortechies from "@/assets/offerletter/skillhorizon.jpeg";
import forage from "@/assets/offerletter/proxenix.jpeg";
import ecCouncil from "@/assets/offerletter/oxanto(1).jpg";

const internships = [
  {
    id: 1,
    company: "Web Developement Intern",
    role: "Application Square Infotech",
    period: "July 2023",
    description:"Successfully completed my Web Development Internship at Application Square! Gained hands-on experience with HTML, CSS, Bootstrap, and PHP, building dynamic and responsive web applications.",
    image: tata,
  },
  {
    id: 2,
    company: "Sponsorship For Project",
    role: "Oxanto Life Sciences",
    period: "Sept 2023",
    description:
      "Received an official Project Sponsorship Letter from Oxanto Life Sciences for our Web-Linked Hospital Management System project — a step toward integrating technology with healthcare efficiency. ",
    image: ecCouncil,
  },
  {
    id: 3,
    company: "Web Application Security",
    role: "Skill Horizon Next Gen",
    period: "Feb 2025",
    description:
      "Successfully completed my Digital Marketing Internship at Zoblik International! Grateful for the opportunity to work on real projects, explore AI-driven marketing, and grow my skills in a dynamic environment.",
    image: aifortechies,
  },
  {
    id: 4,
    company: "Digital Marketing Intern",
    role: "Zoblik International",
    period: "Dec 2024",
    description:
      "Successfully completed my Digital Marketing Internship at Zoblik International! Grateful for the opportunity to work on real projects, explore AI-driven marketing, and grow my skills in a dynamic environment.",
    image: cyberXplore,
  },
  {
    id: 5,
    company: "Content Creator Intern",
    role: "InAmigos Foundation",
    period: "Oct 2025",
    description:
      "Wrapped up my Content Writing Internship at InAmigos Foundation! A short yet insightful journey into storytelling, creativity, and purposeful communication",
    image: thetechunique,
  },
  {
    id: 6,
    company: "Web Developement Intern",
    role: "Proxenix",
    period: "June 2025",
    description:"Wrapped up an incredible Web Development Internship at Proxenix.A journey full of code, creativity, and continuous learning — turning ideas into interactive experiences.",


    image: forage,
  },
];

const Experiences = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 🚫 Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 pb-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h1
          className="text-5xl font-extrabold mb-16 text-center text-[#7FFF00] drop-shadow-[0_0_15px_#7FFF00]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Internship Experience
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {internships.map((intern, index) => (
            <motion.div
              key={intern.id}
              className="bg-[#0A0A0A]/90 rounded-2xl border border-[#7FFF00]/20 hover:border-[#7FFF00]/60 
                         hover:shadow-[0_0_25px_#7FFF00]/30 transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden bg-[#050505]/80">
                <div className="absolute inset-0 flex items-center justify-center text-[#7FFF00]/70 font-semibold text-lg">
                  <Briefcase className="h-8 w-8 mr-2" /> Internship Experience At:
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-1">{intern.role}</h3>
                <p className="text-[#7FFF00]/80 text-sm mb-1 font-medium">{intern.company}</p>
                <p className="text-gray-400 text-sm mb-4">{intern.period}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{intern.description}</p>

                {/* 🚫 No anchor tag to avoid navigation */}
                <button
                  onClick={() => setSelectedImage(intern.image)}
                  className="inline-flex items-center gap-2 text-[#7FFF00] hover:text-white 
                             transition-all duration-300 font-semibold group"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🟢 MODAL for Certificate View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // click outside closes modal
          >
            <motion.div
              onClick={(e) => e.stopPropagation()} // prevent click-through
              className="relative w-[90%] max-w-3xl bg-[#0a0a0a] rounded-2xl border border-[#7FFF00]/40 p-4 shadow-[0_0_30px_#7FFF00]/30"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-[#7FFF00] hover:text-white transition-all"
              >
                <X className="h-6 w-6" />
              </button>
              <motion.img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto rounded-xl object-contain"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experiences;
