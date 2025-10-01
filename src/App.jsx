import Loading from './components/Loading';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import './components/styles/Loading.css'
import './components/styles/Home.css';
import './components/styles/About.css';
import './components/styles/Projects.css';
import './components/styles/Contact.css';

import { useState, useEffect } from 'react';

const App = () => {
  const [enabled, setEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {enabled &&
        <Background />
      }

      {loading ? (
        <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <Loading />
        </div>
      ) : (
        <div>
          <Navbar setEnabled={setEnabled} enabled={enabled} />
          <div className="sections app-content fade-in">
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )
      }
    </>
  );
};

export default App;
