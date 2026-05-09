import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Project from "./pages/Project";
import ProjectDetail from './pages/ProjectDetail';
import Contact from "./pages/Contact";

function App() {
  // 1. Initialize state from localStorage so it remembers user preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // Default to dark mode
  });

  // 2. Global Effect: Apply/Remove 'dark' class on the <html> tag
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // 3. Helper to pass props easily
  const themeProps = { isDarkMode, toggleTheme };

  return (
    <Router>
      <Routes>
        {/* Pass themeProps to EVERY route so the Navbar inside them works */}
        <Route path="/" element={<Index />} />
        
        <Route path="/about" element={<About  />} />
        
        <Route path="/project" element={<Project  />} />
        
        <Route path="/project/:id" element={<ProjectDetail />} />
        
        <Route path="/contact" element={<Contact {...themeProps} />} />
      </Routes>
    </Router>
  );
}

export default App;