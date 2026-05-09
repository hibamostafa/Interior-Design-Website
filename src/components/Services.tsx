import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Layers, ShieldCheck } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const AboutNisrine: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    // This wrapper ensures that if the prop is true, the dark classes trigger
    <div className={isDarkMode ? "dark" : ""}>
      <section 
        className="py-32 px-6 transition-colors duration-700 selection:bg-[#c5a059]/30 bg-[#FDFCFB] dark:bg-[#080808] text-zinc-900 dark:text-white"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* TOP SECTION: Name & Philosophy */}
          <div className="grid lg:grid-cols-12 gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#c5a059]" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-black">
                  Profile Overview
                </span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-serif leading-[0.85] mb-10 tracking-tighter">
                About 
                <span className="italic font-light text-zinc-300 dark:text-zinc-700 ml-4">Me</span>
              </h2>

              <p className="text-xl md:text-2xl font-light leading-tight max-w-2xl text-zinc-500 dark:text-zinc-400">
                Interior Architect specializing in <span className="text-zinc-900 dark:text-white font-medium">photorealistic storytelling</span>. 
                Bridging the gap between conceptual intent and technical execution with mathematical precision.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4 flex flex-col justify-end border-l border-zinc-200 dark:border-white/10 pl-8 hidden lg:flex"
            >
              <div className="space-y-6">
                <Compass className="text-[#c5a059] mb-4" size={32} />
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold leading-relaxed text-zinc-400 dark:text-zinc-500">
                  Based in Beirut, LB <br />
                  Available Worldwide
                </p>
                <div className="h-20 w-[1px] bg-gradient-to-b from-[#c5a059] to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* MIDDLE SECTION: The "Blueprint" Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-3xl overflow-hidden mb-24 transition-colors duration-500 shadow-xl bg-zinc-200 dark:bg-white/10 border-zinc-200 dark:border-white/10 shadow-zinc-200/50 dark:shadow-black/50">
            
            <AboutCard 
              icon={<Award size={20} />}
              title="Academic Standing"
              value="Class Valedictorian"
              desc="Graduated 1st in the Final Year Project at the Islamic University of Lebanon (2024)."
            />

            <AboutCard 
              icon={<Layers size={20} />}
              title="Core Expertise"
              value="High-Fidelity 3D"
              desc="Specialized in 3ds Max and V-Ray workflows to create renders indistinguishable from reality."
            />

            <AboutCard 
              icon={<ShieldCheck size={20} />}
              title="Technical Arsenal"
              value="Execution Ready"
              desc="Expertise in spatial planning and shop drawings, ensuring designs are physically buildable."
            />

          </div>

          {/* BOTTOM SECTION: Specification Table */}
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Skills Legend */}
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-[10px] tracking-[0.4em] uppercase font-black text-zinc-400 dark:text-zinc-600">
                Software Ecosystem
              </h3>
              <div className="space-y-4">
                <SkillBar label="3ds Max + V-Ray" level="95%" />
                <SkillBar label="Lumion" level="90%" />
                <SkillBar label="AutoCAD" level="85%" />
                <SkillBar label="Adobe Photoshop" level="80%" />
              </div>
            </div>

            {/* Quick Facts List */}
            <div className="lg:col-span-7">
              <div className="rounded-[2.5rem] p-10 transition-all duration-700 border bg-white dark:bg-white/[0.02] border-zinc-200 dark:border-white/5 shadow-lg shadow-zinc-200/20 dark:shadow-none">
                <div className="grid sm:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[#c5a059] text-[10px] tracking-widest uppercase font-black mb-4">Competencies</h4>
                    <ul className="space-y-3 text-sm font-light text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#c5a059]"/> Spatial Architecture</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#c5a059]"/> Interior Renovation</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#c5a059]"/> Concept Development</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#c5a059]"/> Material Curation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#c5a059] text-[10px] tracking-widest uppercase font-black mb-4">Communication</h4>
                    <ul className="space-y-3 text-sm font-light text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#c5a059]"/> English (Professional)</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#c5a059]"/> Arabic (Native)</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#c5a059]"/> Project Coordination</li>
                      <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#c5a059]"/> Client Presentation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-white/10 flex justify-between items-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 dark:text-zinc-600">
                    Nisrine Masri — Architek 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const AboutCard = ({ icon, title, value, desc }: any) => (
  <div className="p-10 space-y-6 transition-all duration-500 group cursor-default bg-white dark:bg-[#0B0B0B] hover:bg-[#fafafa] dark:hover:bg-[#121212]">
    <div className="text-[#c5a059] transition-transform duration-500 group-hover:scale-110">
      {icon}
    </div>
    <div>
      <p className="text-[9px] uppercase tracking-[0.3em] font-black mb-2 text-zinc-400 dark:text-zinc-600">
        {title}
      </p>
      <h4 className="text-2xl font-serif italic mb-4 text-zinc-900 dark:text-white">
        {value}
      </h4>
      <p className="text-xs leading-relaxed font-light transition-colors text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400">
        {desc}
      </p>
    </div>
  </div>
);

const SkillBar = ({ label, level }: { label: string, level: string }) => (
  <div className="group">
    <div className="flex justify-between items-end mb-2">
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold transition-colors text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white">
        {label}
      </span>
      <span className="text-[9px] font-bold text-zinc-300 dark:text-zinc-700">
        {level}
      </span>
    </div>
    <div className="h-[2px] w-full bg-zinc-200 dark:bg-white/5">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: level }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-full bg-[#c5a059]" 
      />
    </div>
  </div>
);

export default AboutNisrine;