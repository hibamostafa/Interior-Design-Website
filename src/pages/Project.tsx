import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

// ==========================================
// 1. LOCAL IMAGE IMPORTS
// ==========================================

// --- INTERIOR PROJECTS ---
// 1. Elegant Walk-In Wardrobe (Note: .jpeg extensions)
import p1_1 from '../../Projects/Interior/1. Elegant Walk-In Wardrobe/1.jpeg';
import p1_2 from '../../Projects/Interior/1. Elegant Walk-In Wardrobe/2.jpeg';
import p1_3 from '../../Projects/Interior/1. Elegant Walk-In Wardrobe/3.jpeg';

// 2. Minimal Bedroom 1
import p2_1 from '../../Projects/Interior/2. Minimal Bedroom 1/1.jpg';
import p2_2 from '../../Projects/Interior/2. Minimal Bedroom 1/2.jpg';
import p2_3 from '../../Projects/Interior/2. Minimal Bedroom 1/3.jpg';

// 3. Minimal Bedroom 2
import p3_1 from '../../Projects/Interior/3. Minimal Bedroom 2/1.jpg';
import p3_2 from '../../Projects/Interior/3. Minimal Bedroom 2/2.jpg';
import p3_3 from '../../Projects/Interior/3. Minimal Bedroom 2/3.jpg';
import p3_4 from '../../Projects/Interior/3. Minimal Bedroom 2/4.jpg';

// 4. Contemporary living Room
import p4_1 from '../../Projects/Interior/4. Contemporary living Room/1.jpg';
import p4_2 from '../../Projects/Interior/4. Contemporary living Room/2.jpg';
import p4_3 from '../../Projects/Interior/4. Contemporary living Room/3.jpg';
import p4_4 from '../../Projects/Interior/4. Contemporary living Room/4.jpg';

// 5. Warm Minimal Kitchen
import p5_1 from '../../Projects/Interior/5. Warm Minimal Kitchen/1.jpg';
import p5_2 from '../../Projects/Interior/5. Warm Minimal Kitchen/2.jpg';
import p5_3 from '../../Projects/Interior/5. Warm Minimal Kitchen/3.jpg';
import p5_4 from '../../Projects/Interior/5. Warm Minimal Kitchen/4.jpg';

// 6. Minimal Entrance & Living
import p9_1 from '../../Projects/Interior/6. Minimal Entrance & Living/1.jpg';
import p9_2 from '../../Projects/Interior/6. Minimal Entrance & Living/2.jpg';
import p9_3 from '../../Projects/Interior/6. Minimal Entrance & Living/3.jpg';
import p9_4 from '../../Projects/Interior/6. Minimal Entrance & Living/4.jpg';


// --- EXTERIOR PROJECTS ---
// 1. Modern Symmetrical Cabins
import p6_1 from '../../Projects/Exterior/1. Modern Symmetrical Cabins/1.jpg';
import p6_2 from '../../Projects/Exterior/1. Modern Symmetrical Cabins/2.jpg';
import p6_3 from '../../Projects/Exterior/1. Modern Symmetrical Cabins/3.jpg';
import p6_4 from '../../Projects/Exterior/1. Modern Symmetrical Cabins/4.jpg';
import p6_5 from '../../Projects/Exterior/1. Modern Symmetrical Cabins/5.jpg';
import p6_6 from '../../Projects/Exterior/1. Modern Symmetrical Cabins/6.jpg';

// 2. CView Residential Complex
import p7_1 from '../../Projects/Exterior/2. CView Residential Complex/1.jpg';
import p7_2 from '../../Projects/Exterior/2. CView Residential Complex/2.jpg';
import p7_3 from '../../Projects/Exterior/2. CView Residential Complex/3.jpg';
import p7_4 from '../../Projects/Exterior/2. CView Residential Complex/4.jpg';
import p7_5 from '../../Projects/Exterior/2. CView Residential Complex/5.jpg';
import p7_6 from '../../Projects/Exterior/2. CView Residential Complex/6.jpg';
import p7_7 from '../../Projects/Exterior/2. CView Residential Complex/7.jpg';
import p7_8 from '../../Projects/Exterior/2. CView Residential Complex/8.jpg';
import p7_9 from '../../Projects/Exterior/2. CView Residential Complex/9.jpg';

// 3. Modern Luxury Villa – Sculptural (Imported 4 images)
import p90_1 from '../../Projects/Exterior/3. Modern Luxury Villa – Sculptural/1.jpg';
import p90_2 from '../../Projects/Exterior/3. Modern Luxury Villa – Sculptural/2.jpg';
import p90_3 from '../../Projects/Exterior/3. Modern Luxury Villa – Sculptural/3.jpg';
import p90_4 from '../../Projects/Exterior/3. Modern Luxury Villa – Sculptural/4.jpg';

// 4. Motel & Ground-Level Retail (Imported 4 images - 5 and 6 removed)
import p10_1 from '../../Projects/Exterior/4. Motel & Ground-Level Retail/1.jpg';
import p10_2 from '../../Projects/Exterior/4. Motel & Ground-Level Retail/2.jpg';
import p10_3 from '../../Projects/Exterior/4. Motel & Ground-Level Retail/3.jpg';
import p10_4 from '../../Projects/Exterior/4. Motel & Ground-Level Retail/4.jpg';

// 6. Villa Renovation – Refined Horizontal Composition
import p11_1 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/1.jpg';
import p11_2 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/2.jpg';
import p11_3 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/3.jpg';
import p11_4 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/4.jpg';
import p11_5 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/5.jpg';


// ==========================================
// 2. STATIC DATA SETUP (No Backend Calls)
// ==========================================
const PROJECTS_DATA = [
  // --- INTERIOR CATEGORY ---
  {
    id: "elegant-walk-in-wardrobe",
    title: "Elegant Walk-In Wardrobe",
    category: "INTERIOR",
    brand: "Nisrine Design",
    mainImage: p1_1,
    images: [p1_1, p1_2, p1_3]
  },
  {
    id: "minimal-bedroom-1",
    title: "Minimal Bedroom 1",
    category: "INTERIOR",
    brand: "Nisrine Design",
    mainImage: p2_1,
    images: [p2_1, p2_2, p2_3]
  },
  {
    id: "minimal-bedroom-2",
    title: "Minimal Bedroom 2",
    category: "INTERIOR",
    brand: "Nisrine Design",
    mainImage: p3_1,
    images: [p3_1, p3_2, p3_3, p3_4]
  },
  {
    id: "contemporary-living-room",
    title: "Contemporary Living Room",
    category: "INTERIOR",
    brand: "Nisrine Design",
    mainImage: p4_1,
    images: [p4_1, p4_2, p4_3, p4_4]
  },
  {
    id: "warm-minimal-kitchen",
    title: "Warm Minimal Kitchen",
    category: "INTERIOR",
    brand: "Nisrine Design",
    mainImage: p5_1,
    images: [p5_1, p5_2, p5_3, p5_4]
  },
  {
    id: "minimal-entrance-living",
    title: "Minimal Entrance & Living",
    category: "INTERIOR",
    brand: "Nisrine Design",
    mainImage: p9_1,
    images: [p9_1, p9_2, p9_3, p9_4]
  },

  // --- EXTERIOR CATEGORY ---
  {
    id: "modern-symmetrical-cabins",
    title: "Modern Symmetrical Cabins",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    mainImage: p6_1,
    images: [p6_1, p6_2, p6_3, p6_4, p6_5, p6_6]
  },
  {
    id: "cview-residential-complex",
    title: "CView Residential Complex",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    mainImage: p7_1,
    images: [p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p7_7, p7_8, p7_9]
  },
  {
    id: "modern-luxury-villa-sculptural",
    title: "Modern Luxury Villa – Sculptural",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    mainImage: p90_1,
    images: [p90_1, p90_2, p90_3, p90_4]
  },
  {
    id: "motel-ground-level-retail",
    title: "Motel & Ground-Level Retail",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    mainImage: p10_1,
    images: [p10_1, p10_2, p10_3, p10_4] // Excludes 5.jpg and 6.jpg
  },
  {
    id: "villa-renovation-refined-horizontal-composition",
    title: "Villa Renovation – Refined Horizontal Composition",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    mainImage: p11_1,
    images: [p11_1, p11_2, p11_3, p11_4, p11_5]
  }
];

// Dynamically generate navigation filter tabs based on existing categories in PROJECTS_DATA
const PROJECT_CATEGORIES = [
  'ALL',
  ...Array.from(new Set(PROJECTS_DATA.map((project) => project.category)))
];

const ProjectPage = ({ isDarkMode, toggleTheme }: any) => {
  const [filter, setFilter] = useState('ALL');

  // Filter local project array dynamically
  const filteredProjects = filter === 'ALL' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter((p) => p.category.toUpperCase() === filter);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#080808] text-zinc-900 dark:text-white transition-colors duration-700 selection:bg-amber-500/30 font-sans">
        
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main className="relative pt-44 pb-24 px-6 max-w-[1200px] mx-auto">
          
          <header className="mb-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-12 mx-auto" />
              
              <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight italic text-zinc-900 dark:text-white">
                Our Portfolio
              </h1>
              
              <p className="text-zinc-500 dark:text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-bold max-w-md mx-auto">
                Curating spaces between light and shadow.
              </p>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-16 border-b border-zinc-200 dark:border-white/5 w-full max-w-2xl mx-auto pb-4">
                {PROJECT_CATEGORIES.map((cat) => (
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

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <Link to={`/project/${project.id}`} key={project.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="group relative aspect-[3/4] overflow-hidden rounded-[4rem] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 cursor-pointer shadow-sm dark:shadow-none"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,_rgba(245,158,11,0.05)_0%,_transparent_70%)] z-10 pointer-events-none" />

                    <motion.img 
                      layoutId={`img-${project.id}`}
                      src={project.mainImage} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

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
        </main>
        <Footer />
      </div>
    </div>
  );
};

export { ProjectPage };
export default ProjectPage;