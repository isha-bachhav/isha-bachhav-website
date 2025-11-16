import React from "react";
import { motion } from "framer-motion";

// ✅ Import all images directly from src/assets/certificates
import tata from "@/assets/certificates/tatacyber.png";
import ceh from "@/assets/certificates/ec-council.png";
import aws from "@/assets/certificates/generativeai.png";
import googleCyber from "@/assets/certificates/pythonwithai.png";
import azure from "@/assets/certificates/badge1.png";
import ibmAI from "@/assets/certificates/cyberxplore.png";
import cisco from "@/assets/certificates/ciscocyber.png";
import googleCloud from "@/assets/certificates/thetechunique.png";
import python from "@/assets/certificates/javaprogforbeginners.png";
import testing from "@/assets/certificates/badge2.png";
import ai from "@/assets/certificates/iso.png";
import cloud from "@/assets/certificates/greatlearning.png";
import threatIntel from "@/assets/certificates/googlecloudgenerativeai.png";

interface Certificate {
  id: number;
  title: string;
  image: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Tata Cybersecurity Analyst Job Simulation ",
    image: tata,
    description:
      "Completed the Tata Cybersecurity Analyst Virtual Job Simulation, gaining hands-on experience in IAM strategy, custom security solutions, and platform integration",
  },
  {
    id: 2,
    title: "EC-Council Certificate",
    image: ceh,
    description:
      "Completed EC-Council’s course on the Dark Web, Anonymity, and Cryptocurrency, gaining insights into hidden networks and cyber anonymity concepts.",
  },
  {
    id: 3,
    title: "Introduction to Prompt Engineering For Generative AI",
    image: aws,
    description:
      "Completed LinkedIn Learning’s course on Prompt Engineering for Generative AI, mastering AI prompting and effective interaction design for advanced AI models.",
  },
  {
    id: 4,
    title: "Python Using AI",
    image: googleCyber,
    description:
      "Completed the AI For Techies ‘Python Using AI’ workshop, developing skills in AI-assisted coding, debugging, and data visualization with Python.",
  },
  {
    id: 5,
    title: "ISO/IEC 27001 Information Security Associate badge",
    image: azure,
    description:
      "Earned the ISO/IEC 27001 Information Security Associate badge, demonstrating knowledge of global information security standards, risk management, and compliance best practices.",
  },
  {
    id: 6,
    title: "CyberExplore Bootcamp",
    image: ibmAI,
    description:
      "Completed the 14-day Cyber Xplore Bootcamp, gaining hands-on experience in ethical hacking, digital forensics, OSINT, and web application security through expert-led training.",
  },
  {
    id: 7,
    title: "Cisco Introduction to Cybersecurity",
    image: cisco,
    description:
      "Developed understanding of cybersecurity principles, network protection, and digital forensics fundamentals.",
  },
  {
    id: 8,
    title: "Workshop On Cyber-Security",
    image: googleCloud,
    description:
      "Received a Certificate of Appreciation from Thetechunique Academy for outstanding achievement and participation in cybersecurity.",
  },
  {
    id: 9,
    title: "Java Programming Certification",
    image: python,
    description:
      "Completed hands-on Python training focusing on automation, scripting, and data analysis.",
  },
  {
    id: 10,
    title: "Introduction to CyberSecurity Badge",
    image: testing,
    description:
      "Earned the Introduction to Cybersecurity badge, demonstrating foundational knowledge of cybersecurity principles, network defense, and online threat protection",
  },
  {
    id: 11,
    title: "ISO/IEC 27001 Information Security Associate Certificate"
,
    image: ai,
    description:
      "Earned the ISO/IEC 27001 Information Security Associate badge, demonstrating knowledge of global information security standards, risk management, and compliance best practices.",
  },
  {
    id: 12,
    title: "Introduction to Ethical Hacking",
    image: cloud,
    description:
      "Completed the Introduction to Ethical Hacking course, gaining hands-on understanding of penetration testing, vulnerability assessment, and ethical hacking methodologies",
  },
  {
    id: 13,
    title: "Google Cloud Generative AI Studio",
    image: threatIntel,
    description:
      "Completed Google Cloud’s Generative AI Studio training, mastering the use of AI tools for model creation, prompt design, and innovation with generative technologies.",
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01040f] via-[#0b1320] to-black text-white py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Certifications
      </motion.h1>

      <div className="flex flex-col gap-12 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8 bg-[#0b1120] rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-xl object-contain w-full max-h-72 border border-gray-700 shadow-md"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">{cert.title}</h2>
              <p className="text-gray-300 leading-relaxed">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
