import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [mode, setMode] = useState('Dark');

    useEffect(() => {
        document.documentElement.classList.add('Dark');
        setMode('Dark');
    }, []);

    const closeMenu = (e) => {
        if (navbarOpen && !e.target.closest('.navbar-links') && !e.target.closest('.hamburger')) {
            setNavbarOpen(false);
        }
    };

    useEffect(() => {
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }
    }, []);


    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView();
            }
        }
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            section.addEventListener('click', closeMenu);
        });

        return () => {
            sections.forEach(section => {
                section.removeEventListener('click', closeMenu);
            });
        };
    }, [navbarOpen]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(id);
        }
    };

    const handleToggleNavbar = () => {
        if (navbarOpen) {
            setIsClosing(true);
            setNavbarOpen(false);
            setIsClosing(false);
        } else {
            setNavbarOpen(true);
        }
    };

    const handleModeToggle = () => {
        const root = document.documentElement;
        if (mode === 'Dark') {
            root.classList.add('Light');
            root.classList.remove('Dark');
            setMode('Light');
        } else {
            root.classList.add('Dark');
            root.classList.remove('Light');
            setMode('Dark');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.pageYOffset;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop - 100) {
                    const id = section.getAttribute('id');
                    setActiveLink(id);
                }
            });
        }; window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className="logo">
                <a onClick={() => scrollToSection('home')}>
                    <svg width="597" height="68" viewBox="0 0 597 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77.632 24.8C77.632 29.216 76.544 33.248 74.368 36.896C72.256 40.48 69.376 43.36 65.728 45.536C62.08 47.712 58.048 48.8 53.632 48.8H15.04V39.296H53.632C56.32 39.296 58.752 38.656 60.928 37.376C63.104 36.032 64.832 34.272 66.112 32.096C67.392 29.856 68.032 27.424 68.032 24.8C68.032 22.112 67.392 19.68 66.112 17.504C64.832 15.328 63.104 13.6 60.928 12.32C58.752 11.04 56.32 10.4 53.632 10.4H9.664V68H0.0640006V0.799995H53.632C58.048 0.799995 62.08 1.888 65.728 4.064C69.376 6.176 72.256 9.056 74.368 12.704C76.544 16.352 77.632 20.384 77.632 24.8ZM148.776 41.504C148.776 46.368 147.752 50.816 145.704 54.848C143.72 58.816 140.904 62.016 137.256 64.448C133.608 66.816 129.352 68 124.488 68H107.784C102.92 68 98.6323 66.816 94.9203 64.448C91.2723 62.016 88.4243 58.816 86.3763 54.848C84.3923 50.816 83.4003 46.368 83.4003 41.504C83.4003 36.64 84.3923 32.224 86.3763 28.256C88.4243 24.288 91.2723 21.12 94.9203 18.752C98.6323 16.384 102.92 15.2 107.784 15.2H124.488C129.352 15.2 133.608 16.384 137.256 18.752C140.904 21.12 143.72 24.288 145.704 28.256C147.752 32.224 148.776 36.64 148.776 41.504ZM139.176 41.504C139.176 38.432 138.6 35.616 137.448 33.056C136.296 30.496 134.6 28.48 132.36 27.008C130.184 25.472 127.56 24.704 124.488 24.704H107.784C104.712 24.704 102.056 25.472 99.8163 27.008C97.6403 28.48 95.9443 30.496 94.7283 33.056C93.5763 35.616 93.0003 38.432 93.0003 41.504C93.0003 44.576 93.5763 47.392 94.7283 49.952C95.9443 52.512 97.6403 54.56 99.8163 56.096C102.056 57.632 104.712 58.4 107.784 58.4H124.488C127.56 58.4 130.184 57.632 132.36 56.096C134.6 54.56 136.296 52.512 137.448 49.952C138.6 47.392 139.176 44.576 139.176 41.504ZM221.524 68H208.468L193.492 53.696H174.004V44.192H200.596C203.284 44.192 205.556 43.232 207.412 41.312C209.332 39.328 210.292 37.024 210.292 34.4C210.292 31.712 209.332 29.44 207.412 27.584C205.556 25.664 203.284 24.704 200.596 24.704H169.012V68H159.412V15.2H200.596C204.18 15.2 207.412 16.064 210.292 17.792C213.172 19.52 215.476 21.856 217.204 24.8C218.932 27.68 219.796 30.88 219.796 34.4C219.796 37.28 219.188 40 217.972 42.56C216.82 45.056 215.188 47.232 213.076 49.088C211.028 50.88 208.66 52.16 205.972 52.928L221.524 68ZM259.94 68H250.34V24.704H224.9V15.2H285.284V24.704H259.94V68ZM348.487 24.704H302.983V68H293.287V15.008H348.487V24.704ZM342.247 46.112H307.495V36.416H342.247V46.112ZM418.308 41.504C418.308 46.368 417.284 50.816 415.236 54.848C413.252 58.816 410.436 62.016 406.788 64.448C403.14 66.816 398.884 68 394.02 68H377.316C372.452 68 368.164 66.816 364.452 64.448C360.804 62.016 357.956 58.816 355.908 54.848C353.924 50.816 352.932 46.368 352.932 41.504C352.932 36.64 353.924 32.224 355.908 28.256C357.956 24.288 360.804 21.12 364.452 18.752C368.164 16.384 372.452 15.2 377.316 15.2H394.02C398.884 15.2 403.14 16.384 406.788 18.752C410.436 21.12 413.252 24.288 415.236 28.256C417.284 32.224 418.308 36.64 418.308 41.504ZM408.708 41.504C408.708 38.432 408.132 35.616 406.98 33.056C405.828 30.496 404.132 28.48 401.892 27.008C399.716 25.472 397.092 24.704 394.02 24.704H377.316C374.244 24.704 371.588 25.472 369.348 27.008C367.172 28.48 365.476 30.496 364.26 33.056C363.108 35.616 362.532 38.432 362.532 41.504C362.532 44.576 363.108 47.392 364.26 49.952C365.476 52.512 367.172 54.56 369.348 56.096C371.588 57.632 374.244 58.4 377.316 58.4H394.02C397.092 58.4 399.716 57.632 401.892 56.096C404.132 54.56 405.828 52.512 406.98 49.952C408.132 47.392 408.708 44.576 408.708 41.504ZM479.439 68H428.943V15.2H438.543V58.4H479.439V68ZM497.135 68H487.631V15.2H497.135V68ZM573.183 41.504C573.183 46.368 572.159 50.816 570.111 54.848C568.127 58.816 565.311 62.016 561.663 64.448C558.015 66.816 553.759 68 548.895 68H532.191C527.327 68 523.039 66.816 519.327 64.448C515.679 62.016 512.831 58.816 510.783 54.848C508.799 50.816 507.807 46.368 507.807 41.504C507.807 36.64 508.799 32.224 510.783 28.256C512.831 24.288 515.679 21.12 519.327 18.752C523.039 16.384 527.327 15.2 532.191 15.2H548.895C553.759 15.2 558.015 16.384 561.663 18.752C565.311 21.12 568.127 24.288 570.111 28.256C572.159 32.224 573.183 36.64 573.183 41.504ZM563.583 41.504C563.583 38.432 563.007 35.616 561.855 33.056C560.703 30.496 559.007 28.48 556.767 27.008C554.591 25.472 551.967 24.704 548.895 24.704H532.191C529.119 24.704 526.463 25.472 524.223 27.008C522.047 28.48 520.351 30.496 519.135 33.056C517.983 35.616 517.407 38.432 517.407 41.504C517.407 44.576 517.983 47.392 519.135 49.952C520.351 52.512 522.047 54.56 524.223 56.096C526.463 57.632 529.119 58.4 532.191 58.4H548.895C551.967 58.4 554.591 57.632 556.767 56.096C559.007 54.56 560.703 52.512 561.855 49.952C563.007 47.392 563.583 44.576 563.583 41.504ZM596.586 60.8C596.586 62.784 595.882 64.48 594.474 65.888C593.066 67.296 591.37 68 589.386 68C587.402 68 585.706 67.296 584.298 65.888C582.89 64.48 582.186 62.784 582.186 60.8C582.186 58.816 582.89 57.12 584.298 55.712C585.706 54.304 587.402 53.6 589.386 53.6C591.37 53.6 593.066 54.304 594.474 55.712C595.882 57.12 596.586 58.816 596.586 60.8Z" fill="white" />
                    </svg>

                </a>
            </div>

            <div className={`links ${navbarOpen ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
                {['home', 'about', 'projects', 'contact'].map((id, i) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(id);
                        }}
                        className={activeLink === id ? 'active' : ''}
                        style={{ '--delay': `${(i + 2) * 0.4}s` }}
                    >
                        {id.toUpperCase()}
                    </a>
                ))}
            </div>
            <div className="buttons">
                <div className="hamburger">
                    <button
                        className="hamburger-button"
                        onClick={handleToggleNavbar}
                    >
                        <span className={navbarOpen ? 'active' : ' '}></span>
                        <span className={navbarOpen ? 'active' : ' '}></span>
                        <span className={navbarOpen ? 'active' : ' '}></span>
                    </button>
                </div>
                <div className="modes">
                    <button onClick={handleModeToggle}>{mode == "Light" ?
                        <i id="ie" class='bx bxs-sun' /> : <i id="ie" class='bx bxs-moon' />}
                    </button>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
