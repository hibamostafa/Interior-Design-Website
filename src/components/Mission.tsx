import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// FIX: Pointing to your live Render backend
const BASE_URL = import.meta.env.VITE_API_URL || "https://nisrinedashboardbackend-1.onrender.com";
const API_URL = `${BASE_URL}/api/projects`;

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // --- FETCH DATA FROM SUPABASE VIA RENDER ---
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading featured projects:", error);
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  // Duplicate projects for the infinite scroll effect
  const infiniteProjects = [...projects, ...projects];

  return (
    <section className="py-24 bg-[#F5F2ED] dark:bg-[#121110] transition-colors duration-700 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif leading-none tracking-tight mb-4 text-[#2D2926] dark:text-[#F5F2ED]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Latest <br/> <span className="italic font-light opacity-80 text-[#c5a059]">Creations</span>
            </h2>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0 }} 
             whileInView={{ opacity: 1 }}
             className="flex items-center gap-6 text-[10px] tracking-[0.4em] uppercase text-[#8C867E] dark:text-[#A69F95] font-bold"
          >
            <span>{loading ? "Connecting..." : "Live Collection"}</span>
            <div className="w-10 h-[1px] bg-[#c5a059] animate-pulse" />
            <Link to="/portfolio" className="hover:text-[#c5a059] transition-colors flex items-center gap-2 group">
                Browse All <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative flex">
        {loading ? (
            <div className="w-full text-center py-20 text-zinc-400 text-[10px] tracking-widest uppercase">
                Loading Visuals...
            </div>
        ) : (
            <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: projects.length * 10, // Adjust speed based on number of projects
                ease: "linear",
                },
            }}
            whileHover={{ animationPlayState: "paused" }}
            >
            {infiniteProjects.map((project, index) => (
                <ProjectCard key={`${project.id}-${index}`} project={project} />
            ))}
            </motion.div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/project/${project.id}`}>
        <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-w-[320px] md:min-w-[420px] aspect-[4/5.5] rounded-[3rem] overflow-hidden group cursor-pointer border border-[#E5E1DA] dark:border-white/5 shadow-xl md:shadow-none hover:shadow-2xl transition-all duration-700"
        >
        <motion.img 
            src={project.mainImage} 
            alt={project.title} 
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover transition-all grayscale-[20%] group-hover:grayscale-0"
        />

        {/* Top Floating UI */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
            <div className="px-4 py-1.5 rounded-full border border-white/30 backdrop-blur-md bg-white/10 dark:bg-black/10 text-[9px] tracking-widest uppercase font-bold text-[#c5a059]">
            {project.category}
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <Heart size={16} />
            </div>
        </div>

        {/* Bottom Main Content Box */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-20">
            <div className="bg-white/40 dark:bg-[#2D2926]/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 overflow-hidden shadow-lg">
            
            <h3 className="text-[#2D2926] dark:text-[#F5F2ED] text-2xl md:text-3xl font-serif tracking-tight mb-2 leading-tight uppercase">
                {project.title}
            </h3>
            <div className="flex items-center gap-2 text-[#5C5751] dark:text-zinc-400 mb-4">
                <MapPin size={12} className="text-[#c5a059]" />
                <span className="text-[10px] tracking-[0.3em] font-medium uppercase italic">
                {project.location}
                </span>
            </div>

            <AnimatePresence>
                {isHovered && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="pt-4 border-t border-[#2D2926]/10 dark:border-white/10"
                >
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-2 italic">
                        {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-[#8C867E] dark:text-zinc-500 italic">Studio {project.brand} • {project.year}</span>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-[#c5a059] tracking-widest uppercase group/btn">
                            View <div className="p-1 rounded-full border border-[#c5a059] group-hover/btn:bg-[#c5a059] group-hover/btn:text-white transition-all"><ArrowUpRight size={12} /></div>
                        </div>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>

        <motion.div 
            animate={{ x: isHovered ? ["-100%", "200%"] : "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-10"
        />
        </motion.div>
    </Link>
  );
};

export default FeaturedProjects;