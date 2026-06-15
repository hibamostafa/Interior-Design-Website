import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Fixed: Use react-router-dom for navigation
import { Button } from "./ui/button";

import hero1 from "@/images/hero1.jpeg";
import hero2 from "@/images/hero2.jpg";
import hero3 from "@/images/hero3.jpg";
import hero4 from "@/images/hero4.jpg";
import hero5 from "@/images/hero5.jpg";
import hero6 from "@/images/hero6.jpg";
import hero7 from "@/images/hero7.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" /> 
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#c5a059] text-[12px] tracking-[0.5em] uppercase mb-6 block font-bold"
        >
          Interior Architecture & 3D Visualization
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Crafting Spaces <br />
          <span className="font-light not-italic text-white/90">That Inspire</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-white/70 text-base md:text-lg font-light mb-10 max-w-2xl mx-auto"
        >
          Beirut-based Interior Architect specializing in photorealistic renderings. 
          We transform conceptual ideas into breathtaking reality.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Button 1: View Portfolio */}
          <Button 
            asChild
            className="bg-[#c5a059] hover:bg-white text-black rounded-none px-10 py-6 text-[11px] font-bold tracking-widest transition-all duration-300 border border-[#c5a059]"
          >
            <Link to="/project">VIEW PROJECTS</Link>
          </Button>

          {/* Button 2: Get In Touch */}
          {/* Note: Kept as white/transparent because the Hero is always a dark image */}
          <Button 
            asChild
            variant="outline" 
            className="border-white/30 text-white hover:bg-white hover:text-black rounded-none px-10 py-6 text-[11px] font-bold tracking-widest bg-transparent transition-all duration-300"
          >
            <Link to="/contact">GET IN TOUCH</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#c5a059] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;