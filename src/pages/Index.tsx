import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Defaulting to Dark for Luxury feel

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
  <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500">
    {/* 1. Navigation */}
    <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    
    {/* 2. Premium Fading Hero */}
    <Hero />

    {/* 3. Architectural Services - FIXED: Added isDarkMode prop */}
    <Services isDarkMode={isDarkMode} />

    {/* 4. Professional Experience */}
    <Experience />

    {/* 5. Client Testimonials */}
    <Testimonials />

    {/* 6. Footer */}
    <Footer />
  </div>
);
};

export default Index;