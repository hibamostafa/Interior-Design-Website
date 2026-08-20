import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Award, Box, PenTool, Layout, ChevronRight, 
  Cpu, GraduationCap, Microscope, Languages, Code2, Sparkles 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import nisrin from "@/images/nisrin.png";

const AboutDetailed = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Default to dark mode
    document.documentElement.classList.add('dark');
  }, []);

  const coreCompetencies = ["Spatial Planning", "Concept Development", "3D Modeling", "Architectural Visualization", "Technical Drawings", "Material Selection", "Client Presentations", "Interior Renovation", "Project Coordination"];
  const techSkills = ["3ds Max", "V-Ray Renderer", "Lumion", "AutoCAD", "Adobe Photoshop", "Microsoft Suite", "Digital Rendering", "3D Modeling", "Shop Drawings"];
  const softSkills = ["Problem-Solving", "Attention to Detail", "Client Communication", "Team Collaboration", "Time Management", "Adaptability"];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Root Container: Light bg: #F5F2ED | Dark bg: #050505 */}
      <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#050505] text-zinc-900 dark:text-white transition-colors duration-700 font-sans selection:bg-[#c5a059] selection:text-white">
        
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* --- 1. HERO SECTION --- */}
        <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 relative group"
            >
              <div className="aspect-[3/4] flex items-end justify-center">
                <div className="absolute inset-x-5 bottom-5 aspect-square bg-[#c5a059]/5 dark:bg-white/5 rounded-full blur-3xl" />
                <img 
                  src={nisrin} 
                  alt="Nisrine Masri" 
                  className="relative z-10 w-full h-[100%] object-contain object-bottom transition-all duration-1000"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-[#c5a059] text-xs font-bold tracking-[0.4em] uppercase block mb-4">Interior Architect</span>
                <h1 className="text-6xl md:text-8xl font-serif leading-none mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Nisrine <br /> <span className="italic font-light opacity-80">Masri</span>
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                  Creative and technically skilled Interior Architect with a Bachelor’s Degree and hands-on experience in 
                  high-fidelity 3D visualization and design execution. Proficient in transforming conceptual ideas into 
                  photorealistic renderings using <span className="text-[#c5a059] font-medium">3ds Max, V-Ray, and Lumion.</span>
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200 dark:border-white/10">
                <div>
                  <h4 className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">Location</h4>
                  <p className="font-medium">Ansar, Lebanon</p>
                </div>
                <div>
                  <h4 className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">Languages</h4>
                  <p className="font-medium">Arabic, English</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. COMPETENCIES --- */}
        <section className="py-24 bg-zinc-50/50 dark:bg-[#0a0a0a] border-y border-zinc-200 dark:border-zinc-900">
          <div className="container mx-auto px-6 max-w-7xl">
            <h3 className="text-center text-[10px] tracking-[0.6em] text-[#c5a059] uppercase font-bold mb-16">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {coreCompetencies.map((skill, i) => (
                <div key={i} className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs md:text-sm text-zinc-600 dark:text-zinc-300 font-medium hover:border-[#c5a059] hover:text-[#c5a059] transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. PROFESSIONAL EXPERIENCE --- */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-serif sticky top-32">Experience <br /> <span className="italic text-[#c5a059] font-light">& History</span></h2>
            </div>
            <div className="lg:col-span-8 space-y-20">
              {[
                {
                  company: "Masri Architek",
                  period: "April 2025 — Present",
                  role: "Interior Architect",
                  bullets: [
                    "Implement architectural concepts via detailed execution drawings.",
                    "High-fidelity 3D visualizations ensuring precision to clients.",
                    "Collaborate with project teams to refine aesthetic vision and functionality.",
                    "Presentation of photorealistic 3D renderings and material palettes."
                  ]
                },
                {
                  company: "AMD",
                  period: "Jan 2025 — March 2025",
                  role: "Interior Architect Intern",
                  bullets: [
                    "Translated design concepts into technical drawings and 3D visualizations.",
                    "Created detailed renderings that aided in successful client approvals.",
                    "Assisted in material selection and layout development for cohesive design solutions."
                  ]
                }
              ].map((job, idx) => (
                <div key={idx} className="relative pl-12 border-l border-zinc-200 dark:border-zinc-800">
                  <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-[#c5a059]" />
                  <span className="text-[10px] text-[#c5a059] font-bold tracking-widest uppercase mb-4 block">{job.period}</span>
                  <h4 className="text-3xl font-serif mb-2">{job.company}</h4>
                  <p className="text-zinc-500 mb-6 italic">{job.role}</p>
                  <ul className="space-y-3">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-3">
                        <ChevronRight size={14} className="mt-1 text-[#c5a059] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4. KEY PROJECTS (Now fully switchable) --- */}
        <section className="py-32 bg-zinc-50 dark:bg-[#080808] border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-700">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-20">
              <h2 className="text-5xl font-serif mb-4">Key Projects</h2>
              <p className="text-[#c5a059] uppercase tracking-widest text-[10px] font-bold">Case studies in 3D Realism</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { title: "Contemporary Residential", tech: "3ds Max, Lumion", date: "Jan 2026", desc: "Sophisticated facade with layered volumes." },
                 { title: "Modern Symmetrical Cabins", tech: "3ds Max, Lumion, AI", date: "Dec 2025", desc: "Strong geometric identity with full-height glazing." },
                 { title: "Residential Interior Renovation", tech: "3ds Max", date: "Oct 2025", desc: "Solving spatial challenges with non-parallel walls." },
               ].map((project, i) => (
                 <div key={i} className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-10 rounded-[2rem] hover:bg-[#c5a059] dark:hover:bg-[#c5a059] group transition-all duration-500 cursor-pointer">
                    <span className="text-[#c5a059] group-hover:text-white dark:group-hover:text-black text-[10px] font-bold block mb-4 tracking-widest uppercase">{project.date}</span>
                    <h4 className="text-2xl font-serif mb-4 dark:text-white group-hover:text-white dark:group-hover:text-black">{project.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-white/90 dark:group-hover:text-black/70 mb-6 font-light">{project.desc}</p>
                    <div className="pt-6 border-t border-zinc-100 dark:border-white/10 group-hover:border-white/20 dark:group-hover:border-black/10 flex items-center gap-2">
                       <Cpu size={14} className="text-zinc-400 group-hover:text-white dark:group-hover:text-black" />
                       <span className="text-[10px] text-zinc-400 group-hover:text-white dark:group-hover:text-black uppercase tracking-tighter font-bold">{project.tech}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- 5. EDUCATION & SKILLS --- */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-16">
                 <div>
                    <h3 className="text-2xl font-serif mb-10 flex items-center gap-4">
                      <GraduationCap className="text-[#c5a059]" /> Education
                    </h3>
                    <div className="p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-transparent rounded-3xl">
                       <p className="text-[#c5a059] font-bold text-xs mb-2">2020 — 2024</p>
                       <h4 className="text-xl mb-2">Bachelor’s Degree in Interior Architecture</h4>
                       <p className="text-sm text-zinc-500 mb-4 font-medium">Islamic University of Lebanon</p>
                       <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-md text-[10px] font-bold">
                          <Sparkles size={12} /> GRADUATED 1ST IN FINAL YEAR PROJECT
                       </div>
                    </div>
                 </div>

                 <div>
                    <h3 className="text-2xl font-serif mb-10 flex items-center gap-4">
                      <Award className="text-[#c5a059]" /> Training & Certificates
                    </h3>
                    <div className="grid gap-4">
                       {[
                         { name: "Shop Drawing", provider: "Art.ecture", date: "Present" },
                         { name: "Lumion", provider: "Basementex", date: "Nov 2025" },
                         { name: "3Ds Max", provider: "Ebda3 Academy", date: "Nov 2023" }
                       ].map((cert, i) => (
                         <div key={i} className="flex justify-between items-center p-4 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                            <div>
                               <p className="text-sm font-bold">{cert.name}</p>
                               <p className="text-[10px] text-zinc-500">{cert.provider}</p>
                            </div>
                            <span className="text-[10px] text-[#c5a059] font-mono font-bold">{cert.date}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12 bg-zinc-50 dark:bg-zinc-900/50 p-12 rounded-[3rem] border border-zinc-200 dark:border-zinc-800">
                 <div>
                    <h3 className="font-bold mb-8 tracking-widest uppercase text-[10px] text-zinc-400">Technical Arsenal</h3>
                    <div className="flex flex-wrap gap-2">
                       {techSkills.map((s, i) => (
                         <span key={i} className="px-3 py-1.5 bg-white dark:bg-zinc-800 text-[10px] font-bold text-zinc-600 dark:text-zinc-300 rounded shadow-sm border border-zinc-100 dark:border-zinc-700">
                            {s}
                         </span>
                       ))}
                    </div>
                 </div>
                 <div>
                    <h3 className="font-bold mb-8 tracking-widest uppercase text-[10px] text-zinc-400">Soft Skills</h3>
                    <div className="grid grid-cols-2 gap-4">
                       {softSkills.map((s, i) => (
                         <div key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" /> {s}
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- 6. FINAL QUOTE --- */}
        <section className="py-24 text-center border-t border-zinc-200 dark:border-zinc-900">
            <h3 className="text-5xl md:text-8xl font-serif text-[#c5a059] opacity-20 mb-8 italic">“</h3>
            <p className="text-2xl md:text-4xl font-serif italic font-light max-w-4xl mx-auto px-6 leading-relaxed">
                Eager to contribute fresh design perspectives and advanced modeling abilities to create 
                aesthetically compelling and functional spaces.
            </p>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutDetailed;