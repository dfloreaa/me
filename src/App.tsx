import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  Main,
  Bio,
  Publications,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import AllProjects from "./components/AllProjects";
import Curriculum from "./components/Curriculum";
import FadeIn from './components/FadeIn';
import './index.scss';

// Component to scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [pathname]);
    
    return null;
}

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    return (
        <Router basename="/me">
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <ScrollToTop />
                <Routes>
                    {/* Home page route */}
                    <Route path="/" element={
                        <>
                            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                            <FadeIn transitionDuration={700}>
                                <Main/>
                                <Bio/>
                                <Publications/>
                                <Project/>
                                <Contact/>
                            </FadeIn>
                            <Footer />
                        </>
                    } />
                    
                    {/* All projects page route */}
                    <Route path="/projects" element={
                        <>
                            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                            <FadeIn transitionDuration={700}>
                                <AllProjects/>
                            </FadeIn>
                            <Footer />
                        </>
                    } />

                    {/* CV page route */}
                    <Route path="/cv" element={
                        <>
                            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                            <FadeIn transitionDuration={700}>
                                <Curriculum/>
                            </FadeIn>
                            <Footer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;