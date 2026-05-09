import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
 // Create this or use your footer code
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
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

    {/* 4. Mission & Vision - Add prop if Mission component needs it */}
    <Mission />

    {/* 5. Professional Experience - Add prop if Experience component needs it */}
    <Experience  />

    {/* 7. Client Testimonials - Add prop if Testimonials component needs it */}
    <Testimonials />

    {/* 9. Footer - Added isDarkMode prop */}
    <Footer  />
  </div>
);
};

export default Index;