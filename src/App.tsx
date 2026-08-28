import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your pages from the src/pages folder
import Index from './pages/Index'; 
import ProjectPage from './pages/Project'; 
import ProjectDetail from './pages/ProjectDetail'; // Imported the details page
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  // Theme state shared across pages
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* 1. Homepage */}
        <Route 
          path="/" 
          element={<Index />} 
        />

        {/* 2. Portfolio / Projects Gallery Page */}
        <Route 
          path="/projects" 
          element={<ProjectPage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} 
        />

        {/* 3. Unique project details route (Fixed to render ProjectDetail) */}
        <Route
          path="/projects/:projectId"
          element={<ProjectDetail isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        />

        {/* 4. Backward-compatible singular project details route (Fixed to render ProjectDetail) */}
        <Route
          path="/project/:projectId"
          element={<ProjectDetail isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        />

        {/* 5. About Page */}
        <Route 
          path="/about" 
          element={<About />} 
        />

        {/* 6. Contact Page */}
        <Route 
          path="/contact" 
          element={<Contact isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} 
        />

        {/* 7. Fallback 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;