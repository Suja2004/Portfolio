import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
const App = () => {

  return (
    <div>
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
export default App;