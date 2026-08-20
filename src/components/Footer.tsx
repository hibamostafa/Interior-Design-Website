import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

// IMPORTANT: Adjust this path and filename to match your actual logo file
import logo from "../images/logo.png"; 

export default function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-white pt-20 pb-10 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                    
                    {/* Brand / Logo Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <a href="/">
                                <img 
                                    src={logo} 
                                    alt="Masri Architek Logo" 
                                    className="h-14 w-auto object-contain" // Adjust height (h-14) as needed
                                />
                            </a>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed font-light max-w-sm">
                            Transforming spaces into extraordinary experiences. We blend
                            artistry with functionality to create high-fidelity 3D visualizations
                            that tell your unique story.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-6">
                        <h4
                            className="text-lg font-serif"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-4 text-zinc-600 dark:text-zinc-500 text-sm font-light uppercase tracking-widest">
                            <li>
                                <a href="/" className="hover:text-[#c5a059] dark:hover:text-[#c5a059] transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-[#c5a059] dark:hover:text-[#c5a059] transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/project" className="hover:text-[#c5a059] dark:hover:text-[#c5a059] transition-colors">
                                    Project
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-[#c5a059] dark:hover:text-[#c5a059] transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div className="space-y-6">
                        <h4
                            className="text-lg font-serif"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Contact
                        </h4>
                        <ul className="space-y-4 text-zinc-600 dark:text-zinc-500 text-sm font-light">
                            <li className="flex items-center gap-3">
                                <Mail size={14} className="text-[#c5a059]" />
                                <a
                                    href="mailto:nisrinemasri28@gmail.com"
                                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                                >
                                    nisrinemasri28@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={14} className="text-[#c5a059]" />
                                <span>+961 71 478 329</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={14} className="text-[#c5a059]" />
                                <span>Ansar, Lebanon</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] tracking-[0.2em] text-zinc-500 dark:text-zinc-600 uppercase">
                        © {new Date().getFullYear()} Nisrine Masri Architek. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-zinc-500 dark:text-zinc-400">
                        <a href="https://www.linkedin.com/in/nisrinemasri" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-all transform hover:scale-110">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}