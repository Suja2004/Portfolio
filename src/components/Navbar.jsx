import { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(id);
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#" onClick={() => scrollToSection('home')}>
                    Portfolio.
                </a>
            </div>
            <div className="links">
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}
                    className={activeLink === 'home' ? 'active' : ''}
                >
                    HOME
                </a>
                <a
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                    }}
                    className={activeLink === 'about' ? 'active' : ''}
                >
                    ABOUT
                </a>
                <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('projects');
                    }}
                    className={activeLink === 'projects' ? 'active' : ''}
                >
                    PROJECTS
                </a>
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                    className={activeLink === 'contact' ? 'active' : ''}
                >
                    CONTACT
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
