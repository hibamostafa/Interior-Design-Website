import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ContactPageProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ContactPage = ({ isDarkMode, toggleTheme }: ContactPageProps) => {
  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-[#0B0A09] transition-colors duration-700`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* --- HERO SECTION --- */}
      <main className="pt-44 pb-32 px-6 max-w-5xl mx-auto text-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="w-16 h-[2px] bg-[#c5a059] mb-8 mx-auto" />
          <h1 className="text-6xl md:text-8xl font-serif text-zinc-900 dark:text-white leading-tight mb-8">
            Get in <span className="italic font-light opacity-70">Touch</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            I am always open to discussing new design frontiers, collaborative opportunities, 
            or specific architectural inquiries. Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* --- CONTACT DETAILS GRID --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-zinc-100 dark:border-zinc-800"
        >
          <ContactMethod 
            icon={<Mail size={24} />} 
            label="Email" 
            value="nisrinemasri28@gmail.com" 
            href="mailto:nisrinemasri28@gmail.com" 
          />
          <ContactMethod 
            icon={<Phone size={24} />} 
            label="Phone" 
            value="+961 71 478 329" 
            href="tel:+96171478329" 
          />
          <ContactMethod 
            icon={<MapPin size={24} />} 
            label="Studio" 
            value="Beirut, Lebanon" 
          />
          <ContactMethod 
            icon={<Linkedin size={24} />} 
            label="LinkedIn" 
            value="Nisrine Masri" 
            href="https://www.linkedin.com/in/nisrinemasri" 
          />
        </motion.div>
        
        {/* Availability Status */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500 text-[10px] tracking-[0.3em] font-bold uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open for new design collaborations
        </motion.div>
      </main>

   

      <Footer />
    </div>
  );
};

// Helper Component for Contact Info
const ContactMethod = ({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-16 h-16 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-[#c5a059] mb-6 bg-zinc-50 dark:bg-zinc-900/40 group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/5 transition-all duration-500">
      {icon}
    </div>
    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.25em] font-bold mb-2">{label}</p>
    {href ? (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-lg text-zinc-900 dark:text-white hover:text-[#c5a059] transition-colors font-serif italic"
      >
        {value}
      </a>
    ) : (
      <p className="text-lg text-zinc-900 dark:text-white font-serif italic">{value}</p>
    )}
  </div>
);

export default ContactPage;