import Background from './components/Background';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './components/styles/Home.css';
import './components/styles/About.css';
import './components/styles/Projects.css';
import './components/styles/Contact.css';
const App = () => {

  return (
    <div>
      <Navbar />
      <div className="sections">
        <Background />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;