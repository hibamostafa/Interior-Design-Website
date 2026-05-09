import React from "react";
import { motion } from "framer-motion";

// Import the image directly from your src/images folder.
// Adjust the relative path ("../") depending on where this component file is located.
import heroBg from "../images/hero3.jpg";

const CtaSection = () => {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden ">
      {/* 1. Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-125" // Increased scale to hide blurred edges
        style={{ 
          backgroundImage: `url(${heroBg})`,
          filter: 'blur(7px) brightness(0.9)' // Increased blur for a softer, dreamier look
        }}
      />

      {/* 2. Visual Motif: The subtle gold arc/halo in the background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] border border-[#c5a059] rounded-full" />
      </div>

      {/* 3. Content Area */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        
        {/* Subtle top gold line decoration */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto mb-10"
        />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to Transform <br />
          <span className="italic text-[#c5a059] font-light">Your Space?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-zinc-400 text-sm md:text-base font-light tracking-wide max-w-lg mx-auto leading-relaxed"
        >
          Let's create something extraordinary together. Schedule a 
          private consultation to begin your design journey.
        </motion.p>
      </div>
    </section>
  );
};

export default CtaSection;