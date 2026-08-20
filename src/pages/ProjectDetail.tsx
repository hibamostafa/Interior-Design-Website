import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

const BASE_URL = import.meta.env.VITE_API_URL || "https://nisrinedashboardbackend.onrender.com";
const API_URL = `${BASE_URL}/api/projects`;

const ProjectDetail = ({ isDarkMode, toggleTheme }: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [project, setProject] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Project not found");
        
        const data = await response.json();
        setProject(data);
        setActiveImage(data.mainImage); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project:", error);
        setLoading(false);
      }
    };

    if (id) fetchProjectDetails();
  }, [id]);

  if (loading) return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#080808] flex items-center justify-center transition-colors duration-700">
        <div className="text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.4em] text-[10px] animate-pulse font-bold">
          Opening Studio Vault...
        </div>
      </div>
    </div>
  );

  if (!project) return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-[#FDFCFB] dark:bg-[#080808] min-h-screen text-zinc-900 dark:text-white flex items-center justify-center font-serif italic transition-colors duration-700">
        Project could not be found.
      </div>
    </div>
  );

  const allPhotos = [
    { url: project.mainImage }, 
    ...(project.projectImages || [])
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Main Wrapper */}
      <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#080808] text-zinc-900 dark:text-white transition-colors duration-700 selection:bg-amber-500/30">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-amber-600 dark:hover:text-amber-500 transition-colors mb-10 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Back to Collection</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* PHOTO SECTION */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative aspect-[4/5] md:aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] border border-zinc-200 dark:border-white/5 overflow-hidden flex items-center justify-center group shadow-xl dark:shadow-2xl transition-colors duration-700">
                {/* Subtle Ambient Light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,_rgba(245,158,11,0.05)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_70%,_rgba(245,158,11,0.1)_0%,_transparent_70%)]" />
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    src={activeImage}
                    alt={project.title}
                    className="w-full h-full object-cover z-10"
                  />
                </AnimatePresence>
              </div>

              {/* THUMBNAIL STRIP */}
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {allPhotos.map((photo: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(photo.url)}
                    aria-label={`View image ${index + 1}`} 
                    className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl border transition-all duration-300 overflow-hidden bg-zinc-100 dark:bg-zinc-900
                      ${activeImage === photo.url 
                        ? 'border-amber-500 scale-95 shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
                        : 'border-zinc-200 dark:border-white/5 opacity-60 hover:opacity-100'}
                    `}
                  >
                    <img src={photo.url} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            </div>

            {/* DETAILS SECTION */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 rounded-[2.5rem] p-8 md:p-10 space-y-8 backdrop-blur-sm shadow-xl dark:shadow-2xl transition-all duration-700">
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span className="text-amber-600 dark:text-amber-500 text-[10px] tracking-[0.4em] font-black uppercase block mb-4">
                    {project.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-serif italic mb-6 leading-tight text-zinc-900 dark:text-white">
                    {project.title}
                  </h1>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-sm">
                    {project.description}
                  </p>
                </motion.div>

                {/* Metadata List */}
                <div className="grid grid-cols-1 gap-6 pt-8 border-t border-zinc-100 dark:border-white/10">
                  <div className="flex items-center gap-4">
                    <MapPin size={16} className="text-amber-600 dark:text-amber-500" />
                    <div>
                      <p className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-widest uppercase font-bold">Location</p>
                      <p className="text-sm font-medium dark:text-white/90">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Calendar size={16} className="text-amber-600 dark:text-amber-500" />
                    <div>
                      <p className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-widest uppercase font-bold">Project Year</p>
                      <p className="text-sm font-medium dark:text-white/90">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Tag size={16} className="text-amber-600 dark:text-amber-500" />
                    <div>
                      <p className="text-[9px] text-zinc-400 dark:text-zinc-500 tracking-widest uppercase font-bold">Studio</p>
                      <p className="text-sm font-medium dark:text-white/90">{project.brand}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-5 bg-amber-500 text-black text-[10px] tracking-[0.3em] font-black uppercase rounded-full hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 shadow-xl shadow-amber-500/10">
                  Inquire Project Details
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;