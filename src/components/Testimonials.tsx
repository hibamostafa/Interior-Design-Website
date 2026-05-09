import React from "react";
import { motion } from "framer-motion";
import { Box, PenTool, Layers, Layout } from "lucide-react";

const services = [
  {
    id: "01",
    title: "3D Visualization",
    description: "High-fidelity, photorealistic renderings using 3ds Max, V-Ray, and Lumion to bring conceptual visions to life.",
    icon: <Box className="w-6 h-6 text-[#c5a059]" />,
  },
  {
    id: "02",
    title: "Interior Architecture",
    description: "Strategic spatial planning and concept development tailored to harmonize aesthetic vision with functionality.",
    icon: <PenTool className="w-6 h-6 text-[#c5a059]" />,
  },
  {
    id: "03",
    title: "Material Curation",
    description: "Expert selection of material palettes and finishes to ensure a cohesive and sophisticated design identity.",
    icon: <Layers className="w-6 h-6 text-[#c5a059]" />,
  },
  {
    id: "04",
    title: "Execution Drawings",
    description: "Precise shop drawings and construction documentation to ensure flawless transition from design to reality.",
    icon: <Layout className="w-6 h-6 text-[#c5a059]" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0B0A09] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
             <div className="w-12 h-[1px] bg-[#c5a059] mb-6 shadow-[0_0_8px_#c5a059]" />
             <h2 className="text-4xl md:text-5xl font-serif dark:text-white mb-6">Our Services</h2>
             <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed tracking-wide">
               A full spectrum of architectural visualization and interior design services 
               to elevate every corner of your world.
             </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Number (01, 02, etc) */}
              <span className="absolute top-4 right-6 text-7xl font-bold text-zinc-200 dark:text-zinc-800/40 group-hover:text-[#c5a059]/10 transition-colors duration-500 select-none">
                {service.id}
              </span>

              {/* Icon Box */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 mb-8 transition-colors group-hover:border-[#c5a059]/50">
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-serif dark:text-white mb-4 group-hover:text-[#c5a059] transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c5a059] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;