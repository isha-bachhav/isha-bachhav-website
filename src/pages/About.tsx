import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Shield, Cpu, Code, Brain, Lock, Award } from "lucide-react";

// ✅ Counter Component (Animated Numbers)
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = React.useState(from);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [to]);

  return (
    <motion.span className="text-[#7FFF00] font-semibold">
      {display}
      {suffix}
    </motion.span>
  );
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* 🟢 Background Glow (less intense now) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,255,0,0.03)_0%,transparent_80%)]" />

      {/* ✨ Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#7FFF00] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.15 + Math.random() * 0.4,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [0, Math.random() * -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ⚡ Main Container */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-40 pb-32 text-center">
        {/* 💥 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-[#7FFF00] tracking-wide drop-shadow-[0_0_10px_#7FFF00]/70"
        >
          “Access Granted: <span className="text-white">Inside Isha’s Code</span>”
        </motion.h1>

        {/* 🧠 Sub animated tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-2 text-[#7FFF00]/70 text-sm md:text-base font-mono tracking-widest uppercase"
        >
          <span className="animate-pulse">&gt; system initialization complete...</span>
        </motion.p>

        {/* 💬 Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-300 text-lg mt-6 max-w-3xl leading-relaxed"
        >
          From curiosity to creation — my journey through technology has been about
          exploring how things break, how they can be secured, and how innovation
          can coexist with protection.
        </motion.p>

        {/* 🧠 Digital Identity Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-20 max-w-4xl w-full bg-[#0a0a0a]/80 border border-[#7FFF00]/20 rounded-2xl p-10 shadow-[0_0_20px_#7FFF00]/10"
        >
          <h2 className="text-3xl font-bold text-[#7FFF00] mb-8 uppercase tracking-wider">
            Digital Identity
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { label: "Name", value: "Isha Prashant Bachhav" },
              {
                label: "Role",
                value:
                  "Cybersecurity Enthusiast | Cloud Security Analyst | Software Tester & Developer",
              },
              { label: "Education", value: "B.E. Computer Engineering, Sapkal Knowledge Hub" },
              {
                label: "Interests",
                value:
                  "AI & Cyber Security, Technical Writing, Research Communication, Music & Gaming for strategic thinking",
              },
              { label: "Email", value: "ishabachhav.official@email.com" },
              { label: "Portfolio", value: "ishabachhav.vercel.app" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-[#0c0c0c]/50 rounded-lg border border-[#7FFF00]/20 hover:border-[#7FFF00]/40 transition-all"
              >
                <h4 className="text-[#7FFF00]/90 font-semibold text-sm tracking-wide uppercase">
                  {item.label}
                </h4>
                <p className="text-gray-300 mt-1">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ⚙️ Professional Snapshot with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-32 max-w-5xl"
        >
          <h2 className="text-4xl font-bold text-[#7FFF00] mb-8 uppercase drop-shadow-[0_0_6px_#7FFF00]/60">
            Professional Snapshot
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            A developer who codes like a hacker and thinks like an engineer. My work
            combines creativity and security — building smart, secure, and scalable
            systems that push innovation forward.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <Code />, title: "Projects", count: 5, suffix: "+", desc: "Built across web, AI, and cybersecurity." },
              { icon: <Shield />, title: "Certifications", count: 10, suffix: "+", desc: "In cybersecurity & software testing." },
              { icon: <Award />, title: "Internships", count: 6, suffix: "+", desc: "Hands-on experience across 6 tech domains." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0c0c0c] border border-[#7FFF00]/20 rounded-xl p-8 w-72 shadow-[0_0_15px_#7FFF00]/10 hover:shadow-[0_0_25px_#7FFF00]/20 transition-all"
              >
                <div className="flex justify-center mb-4 text-[#7FFF00]/90">{stat.icon}</div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { delay: i * 0.3 } }}
                  className="text-5xl font-bold text-[#7FFF00]/90 mb-2"
                >
                  <Counter from={0} to={stat.count} suffix={stat.suffix} />
                </motion.h3>
                <h4 className="text-xl font-semibold text-white mb-2">{stat.title}</h4>
                <p className="text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🎓 Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-40 max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold text-[#7FFF00]/90 mb-12 uppercase drop-shadow-[0_0_6px_#7FFF00]/60">
            Educational Timeline
          </h2>

          <div className="relative border-l-4 border-[#7FFF00]/30 pl-8 space-y-12 text-left mx-auto max-w-2xl">
            {[
              {
                year: "2020",
                place: "St. Xavier's High School",
                desc: "Best Foundation and my First Step Towards a Successful Life",
              },
              {
                year: "2024",
                place: "M.S Gosavi Polytechnic, Nashik",
                desc: "Diploma in Computer Engineering — mastering fundamentals of coding, networking, and systems.",
              },
              {
                year: "2027",
                place: "Sapkal Knowledge Hub, BE Computer Engineering",
                desc: "Expanding horizons in cybersecurity with interests in Ethical Hacking and Cloud Security.",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative bg-[#0a0a0a]/70 border border-[#7FFF00]/20 rounded-xl p-6 shadow-[0_0_15px_#7FFF00]/10 hover:shadow-[0_0_25px_#7FFF00]/20 transition-all"
              >
                <div className="absolute -left-4 top-6 w-3 h-3 bg-[#7FFF00]/80 rounded-full shadow-[0_0_6px_#7FFF00]/50" />
                <h4 className="text-[#7FFF00]/90 font-bold text-lg">{edu.year}</h4>
                <h3 className="text-white text-xl font-semibold">{edu.place}</h3>
                <p className="text-gray-400 text-sm mt-2">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ⚡ Signature Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-32"
        >
          <p className="text-2xl md:text-3xl text-[#7FFF00]/90 font-bold italic drop-shadow-[0_0_8px_#7FFF00]/50 animate-pulse">
            “Building systems that don’t just work — they think, defend, and evolve.”
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
