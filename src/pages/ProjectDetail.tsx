import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Tag } from 'lucide-react';
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

// 6. Villa Renovation – Refined Horizontal Composition (Typo corrected from "Renoration" to "Renovation")
import p11_1 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/1.jpg';
import p11_2 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/2.jpg';
import p11_3 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/3.jpg';
import p11_4 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/4.jpg';
import p11_5 from '../../Projects/Exterior/6. Villa Renovation – Refined Horizontal Composition/5.jpg';


// ==========================================
// 2. STATIC DATA SETUP WITH DETAILED METADATA
// ==========================================
const PROJECTS_DATA = [
  // --- INTERIOR CATEGORY ---
  {
    id: "elegant-walk-in-wardrobe",
    title: "Elegant Walk-In Wardrobe",
    category: "INTERIOR",
    brand: "Nisrine Design",
    description: "A meticulously crafted walk-in closet space featuring warm ambient lighting, custom timber cabinetry, and functional design lines that harmonize storage and sophistication.",
    location: "Lebanon",
    year: "2025",
    images: [p1_1, p1_2, p1_3]
  },
  {
    id: "minimal-bedroom-1",
    title: "Minimal Bedroom 1",
    category: "INTERIOR",
    brand: "Nisrine Design",
    description: "A sanctuary of peace designed around organic textures, low-profile oak furniture, and soft linen drapes that filter natural daylight.",
    location: "Lebanon",
    year: "2026",
    images: [p2_1, p2_2, p2_3]
  },
  {
    id: "minimal-bedroom-2",
    title: "Minimal Bedroom 2",
    category: "INTERIOR",
    brand: "Nisrine Design",
    description: "An alternate approach to clean living, featuring floating structural elements, monolithic side tables, and integrated headboard lighting.",
    location: "Lebanon",
    year: "2026",
    images: [p3_1, p3_2, p3_3, p3_4]
  },
  {
    id: "contemporary-living-room",
    title: "Contemporary Living Room",
    category: "INTERIOR",
    brand: "Nisrine Design",
    description: "A spacious lounge area seamlessly blending concrete finishes, custom textured bouclé seating, and striking bronze accents.",
    location: "Lebanon",
    year: "2025",
    images: [p4_1, p4_2, p4_3, p4_4]
  },
  {
    id: "warm-minimal-kitchen",
    title: "Warm Minimal Kitchen",
    category: "INTERIOR",
    brand: "Nisrine Design",
    description: "An open-plan kitchen combining premium marble countertops, hidden handleless oak storage, and architectural task lighting.",
    location: "Lebanon",
    year: "2025",
    images: [p5_1, p5_2, p5_3, p5_4]
  },
  {
    id: "minimal-entrance-living",
    title: "Minimal Entrance & Living",
    category: "INTERIOR",
    brand: "Nisrine Design",
    description: "Soft ambient lighting and subtle monolithic columns define this residential transition, creating an instantly welcoming entrance foyer.",
    location: "Lebanon",
    year: "2025",
    images: [p9_1, p9_2, p9_3, p9_4]
  },

  // --- EXTERIOR CATEGORY ---
  {
    id: "modern-symmetrical-cabins",
    title: "Modern Symmetrical Cabins",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    description: "A striking series of symmetrically aligned architectural cabins. Clean vertical lines and natural cladding allow these structures to sit quietly in their environment.",
    location: "Lebanon",
    year: "2025",
    images: [p6_1, p6_2, p6_3, p6_4, p6_5, p6_6]
  },
  {
    id: "cview-residential-complex",
    title: "CView Residential Complex",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    description: "An expansive, terraced multi-family development utilizing glass banisters and concrete planes to prioritize sea views for every individual unit.",
    location: "Lebanon",
    year: "2026",
    images: [p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p7_7, p7_8, p7_9]
  },
  {
    id: "modern-luxury-villa-sculptural",
    title: "Modern Luxury Villa – Sculptural",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    description: "Curvilinear, sculptural forms meet robust structural spans. This luxury villa explores the intersections of concrete panels and expansive window openings.",
    location: "Lebanon",
    year: "2025",
    images: [p90_1, p90_2, p90_3, p90_4]
  },
  {
    id: "motel-ground-level-retail",
    title: "Motel & Ground-Level Retail",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    description: "A mixed-use hospitality and retail destination that features street-level boutique glass store fronts topped with minimalist motel units.",
    location: "Lebanon",
    year: "2025",
    images: [p10_1, p10_2, p10_3, p10_4] // Excludes 5.jpg and 6.jpg
  },
  {
    id: "villa-renovation-refined-horizontal-composition",
    title: "Villa Renovation – Refined Horizontal Composition",
    category: "EXTERIOR",
    brand: "Nisrine Design",
    description: "A comprehensive structural remodel focused on low, sweeping horizontal concrete planes, open floor layouts, and custom stone-clad feature walls.",
    location: "Lebanon",
    year: "2025",
    images: [p11_1, p11_2, p11_3, p11_4, p11_5]
  }
];

const ProjectDetail = ({ isDarkMode, toggleTheme }: any) => {
  // Match the dynamic route parameter used by App.tsx:
  // /projects/:projectId and /project/:projectId
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Resolve canonical slugs as well as slugs generated from project titles.
  const project = PROJECTS_DATA.find((p) => {
    if (!projectId) return false;
    const normalize = (value: string) => {
      let decoded = value;
      try {
        decoded = decodeURIComponent(value);
      } catch {
        // Use the raw URL value if it contains malformed encoding.
      }

      return decoded
        .toLowerCase()
        .replace(/[\u2013\u2014]/g, '-')
        .replace(/[^a-z0-9]/g, '');
    };

    const cleanId = normalize(projectId.split('/').pop() || projectId);
    const cleanProjId = normalize(p.id);
    const cleanTitle = normalize(p.title);

    return cleanProjId === cleanId ||
           cleanTitle === cleanId ||
           cleanProjId.includes(cleanId) ||
           cleanTitle.includes(cleanId) ||
           cleanId.includes(cleanProjId);
  });
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project && project.images.length > 0) {
      setActiveImage(project.images[0]);
    }
  }, [projectId, project]);

  if (!project) return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-[#FDFCFB] dark:bg-[#080808] min-h-screen text-zinc-900 dark:text-white flex items-center justify-center font-serif italic transition-colors duration-700">
        Project could not be found.
      </div>
    </div>
  );

  return (
    <div className={isDarkMode ? 'dark' : ''}>
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
                {project.images.map((photo: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(photo)}
                    aria-label={`View image ${index + 1}`} 
                    className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl border transition-all duration-300 overflow-hidden bg-zinc-100 dark:bg-zinc-900
                      ${activeImage === photo 
                        ? 'border-amber-500 scale-95 shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
                        : 'border-zinc-200 dark:border-white/5 opacity-60 hover:opacity-100'}
                    `}
                  >
                    <img src={photo} className="w-full h-full object-cover" alt="" />
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