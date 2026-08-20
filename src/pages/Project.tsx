import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

const BASE_URL = import.meta.env.VITE_API_URL || "https://nisrinedashboardbackend.onrender.com";
const API_URL = `${BASE_URL}/api/projects`;

const PortfolioPage = ({ isDarkMode, toggleTheme }: any) => {
  const [projects, setProjects] = useState([]); 
  const [filter, setFilter] = useState('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to load");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter((p: any) => p.category.toUpperCase() === filter);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Root Container: Adaptive colors */}
      <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#080808] text-zinc-900 dark:text-white transition-colors duration-700 selection:bg-amber-500/30 font-sans">
        
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main className="relative pt-44 pb-24 px-6 max-w-[1200px] mx-auto">
          
          <header className="mb-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Divider line adapts to mode */}
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-12 mx-auto" />
              
              <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight italic text-zinc-900 dark:text-white">
                Our Portfolio
              </h1>
              
              <p className="text-zinc-500 dark:text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-bold max-w-md mx-auto">
                {loading ? "Connecting ..." : "Curating spaces between light and shadow."}
              </p>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-16 border-b border-zinc-200 dark:border-white/5 w-full max-w-2xl mx-auto pb-4">
                {['ALL', 'INTERIOR', 'EXTERIOR', 'LANDSCAPES'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`text-[10px] tracking-[0.25em] transition-all duration-300 uppercase font-bold relative ${
                      filter === cat 
                        ? 'text-amber-600 dark:text-amber-500' 
                        : 'text-zinc-400 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white'
                    }`}
                  >
                    {cat}
                    {filter === cat && (
                      <motion.div 
                        layoutId="underline" 
                        className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-amber-600 dark:bg-amber-500" 
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </header>

          {loading ? (
            <div className="flex justify-center py-20">
               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-amber-500" />
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project: any) => (
                  <Link to={`/project/${project.id}`} key={project.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="group relative aspect-[3/4] overflow-hidden rounded-[4rem] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 cursor-pointer shadow-sm dark:shadow-none"
                    >
                      {/* Subtle lighting effect overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,_rgba(245,158,11,0.05)_0%,_transparent_70%)] z-10 pointer-events-none" />

                      <motion.img 
                        layoutId={`img-${project.id}`}
                        src={project.mainImage} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      />

                      {/* Card Info Box: Glassmorphism that adapts to light/dark */}
                      <div className="absolute bottom-6 left-6 right-6 z-20">
                        <div className="p-6 rounded-[2.5rem] bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 group-hover:border-amber-500/50 transition-all duration-500 shadow-xl dark:shadow-none">
                          <h3 className="text-lg font-serif text-zinc-900 dark:text-white/90 tracking-wide uppercase">
                            {project.title}
                          </h3>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-[9px] tracking-[0.2em] text-amber-600 dark:text-amber-500 font-bold">
                               {project.category}
                            </p>
                            <p className="text-[8px] tracking-[0.1em] text-zinc-400 dark:text-white/30 uppercase font-medium">
                               @{project.brand}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioPage;