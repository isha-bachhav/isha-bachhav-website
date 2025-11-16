import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ishaProfile from "@/assets/0101.png";
import CyberBackground from "@/components/CyberBackground";
import SocialSidebar from "@/components/SocialSidebar";
import VideoBackground from "@/components/VideoBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const scaleHover = { scale: 1.1 };

// ✅ Typing effect (simplified + fixed)
const useTypingEffect = (lines, typingSpeed = 100, delayBetweenLines = 1000) => {
  const [text, setText] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setText((prev) => {
          const newText = [...prev];
          newText[lineIndex] = (newText[lineIndex] || "") + currentLine[charIndex];
          return newText;
        });
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (lineIndex < lines.length - 1) {
      const delay = setTimeout(() => {
        setText((prev) => [...prev, ""]);
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, delayBetweenLines);
      return () => clearTimeout(delay);
    }
  }, [charIndex, lineIndex, lines, typingSpeed, delayBetweenLines]);

  return text;
};

const Home = () => {
  const lines = [
    "Hi, I'm Isha Bachhav",
    "Cyber Specialist | Cloud Defender | Software Developer",
  ];

  const typedText = useTypingEffect(lines, 80, 700);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black pb-0">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden h-screen">
        <VideoBackground />
        <CyberBackground />
      </div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#001a00] via-[#002b00] to-black opacity-50"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "400% 400%" }}
      />

      <SocialSidebar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div>
                {/* Typing effect heading */}
                <h2 className="text-xl md:text-2xl font-light text-[#7FFF00] tracking-wider uppercase">
                  {typedText[0] || ""}
                  {typedText.length === 1 && (
                    <span className="animate-pulse text-[#7FFF00]">|</span>
                  )}
                </h2>

                {typedText[1] && (
                  <p className="text-[#f0f1ee] text-lg md:text-xl tracking-wide font-semibold uppercase mt-3">
                    {typedText[1]}
                    <span className="animate-pulse text-[#7FFF00]">|</span>
                  </p>
                )}
              </div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-black leading-snug tracking-tight space-y-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="block text-[#7FFF00] uppercase">
                  Provide The Best
                </span>
                <span className="block text-[#7FFF00] uppercase">Cyber</span>
                <span className="block text-white uppercase font-black">
                  Solutions
                </span>
                <span className="block text-white uppercase font-black">
                  For Your Security
                </span>
              </motion.h1>

              {/* Description */}
              <div className="border-l-4 border-[#7FFF00] pl-6">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl hover:text-[#7FFF00] transition-all duration-500">
                  I’m a passionate tech innovator blending creativity with
                  precision — from developing dynamic web and software solutions
                  to ensuring their security through ethical hacking and
                  testing. With a strong foundation in cybersecurity, software
                  development, and digital content creation, I aim to craft
                  technology that’s not just functional, but secure, efficient,
                  and future-ready.
                </p>
              </div>

              {/* Button */}
              <motion.div whileHover={scaleHover} className="pt-4">
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="group bg-[#7FFF00] text-black hover:bg-[#7FFF00]/90 transition-all duration-300 rounded-full px-8 py-6 text-lg font-bold tracking-wide shadow-2xl shadow-[#7FFF00]/30"
                  >
                    View All Works
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-[320px] h-[500px] md:w-[360px] md:h-[560px] overflow-hidden rounded-2xl border-4 border-[#7FFF00]/40 shadow-[0_0_60px_#7FFF00]/40 bg-black/20 flex items-center justify-center">
                <img
                  src={ishaProfile}
                  alt="Isha Bachhav - Cybersecurity Professional"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 👇 BELOW CONTENT SECTION (restored) */}
      <section className="relative bg-black py-20 px-6 text-gray-200">
        <div className="container mx-auto space-y-16">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#7FFF00] mb-4">
              About Me
            </h2>
           <p className="max-w-lg mx-auto text-gray-300 text-justify leading-relaxed tracking-normal px-4">
  From the moment I first explored how technology connects the world, I was fascinated by the unseen layer that keeps everything secure — cybersecurity. What began as simple curiosity soon turned into a passion for understanding how systems can be both powerful and vulnerable. I chose this path because I believe security isn’t just about protection, it’s about trust — building systems that people can rely on without fear. My journey has been about blending creativity with logic — developing solutions, breaking and fixing systems, and learning from every challenge. Through ethical hacking, research, and development, I aim to create a future where innovation and security go hand in hand — where technology empowers, not endangers.
</p>



          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#7FFF00] mb-8">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg font-semibold">
              <div className="bg-[#7FFF00]/10 border border-[#7FFF00]/30 py-4 rounded-lg">
             🛡️ Cyber Defender
              </div>
              <div className="bg-[#7FFF00]/10 border border-[#7FFF00]/30 py-4 rounded-lg">
               ☁️ Cloud Security Analyst
              </div>
              <div className="bg-[#7FFF00]/10 border border-[#7FFF00]/30 py-4 rounded-lg">
               💻 Software Developer  & Tester
              </div>
              <div className="bg-[#7FFF00]/10 border border-[#7FFF00]/30 py-4 rounded-lg">
              🎥 Digital Creator
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
