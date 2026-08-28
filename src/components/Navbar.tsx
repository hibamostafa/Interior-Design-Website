import React, { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import logo from "@/images/logo.png";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PROJECT", href: "/projects" },
    { label: "CONTACT", href: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 ${
      scrolled 
      ? "bg-transparent dark:bg-transparent backdrop-blur-md py-2" 
      : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" aria-label="Nisrine Masri home" className="relative group">
          <img
            src={logo} 
            alt="Nisrine Masri Logo" 
            className={`
              transition-all duration-500 ease-in-out
              h-14 md:h-20 w-auto object-contain hover:scale-105
              ${isDarkMode 
                ? "drop-shadow-md" // Soft, modern shadow for dark mode
                : "invert opacity-90 drop-shadow-none" // Turns white logo dark grey in light mode, no shadow!
              }
            `}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`
                text-[11px] tracking-[0.2em] font-bold transition-all duration-300
                hover:text-[#c5a059]
                ${isDarkMode 
                  ? "text-white drop-shadow-md" 
                  : "text-zinc-800 drop-shadow-none" // Dark text in light mode
                }
              `}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`
              p-2 rounded-full transition-all border-transparent bg-transparent
              ${isDarkMode 
                ? "text-white drop-shadow-md hover:text-[#c5a059]" 
                : "text-zinc-800 drop-shadow-none hover:text-[#c5a059]"
              }
            `}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden p-0 bg-transparent hover:bg-transparent">
              <Menu size={28} className={isDarkMode ? "text-white drop-shadow-md" : "text-zinc-800 drop-shadow-none"} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#F5F2ED] dark:bg-zinc-900 border-none">
            <div className="flex flex-col gap-8 mt-20 text-center uppercase tracking-[0.3em] font-bold">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    to={item.href}
                    className="text-xl text-zinc-900 dark:text-white hover:text-[#c5a059] transition-colors"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <Button 
                  onClick={toggleTheme} 
                  variant="outline" 
                  className="w-full rounded-none border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-white"
                >
                  {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;