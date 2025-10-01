import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState, useEffect } from "react";
import { Github, Link } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "CalmCare",
            description:
                "Web app delivering personalized mental health support via a machine-learning and chatbot, built for privacy and ease of use.",
            github: "https://github.com/Suja2004/mentalHealthChatbot",
            live: "https://mental-health-chatbot-zeta.vercel.app/",
            tech: ["MERN STACK", "DIALOGFLOW", "MACHINE-LEARNING"],
            image: "/projectsImg/CC.png",
        },
        {
            title: "Local Goods",
            description:
                "E-commerce solution empowering local businesses with online storefronts, inventory management, and customer outreach tools.",
            github: "https://github.com/Suja2004/LocalGoods",
            live: null,
            tech: ["PHP", "MySQL", "JavaScript"],
            image: "/projectsImg/LG.png",
        },
        {
            title: "TriviaTrail",
            description:
                "Real-time multiplayer quiz app for themed competitions, focusing on interactivity and instant user feedback.",
            github: "https://github.com/Suja2004/TriviaTrail-v2",
            live: "https://trivia-trail-quiz-app.vercel.app/",
            tech: ["MERN STACK"],
            image: "/projectsImg/TT.png",
        },
        {
            title: "Thoughts & Threads",
            description:
                "Feature-rich blog app supporting authentication, post creation, and community-driven discussions.",
            github: "https://github.com/Suja2004/Blog",
            live: "https://thoughts-and-threads.onrender.com/",
            tech: ["MERN STACK"],
            image: "/projectsImg/T&T.png",
        },
        {
            title: "Tic Tac Toe AI",
            description:
                "Modern Tic Tac Toe with AI-driven gameplay and multiple difficulty levels, offering both single and multiplayer modes.",
            github: "https://github.com/Suja2004/TicTacToe_2",
            live: "https://tic-tac-toe-2-alpha.vercel.app/",
            tech: ["React", "Node.js", "Express.js", "AI", "Minimax Algorithm"],
            image: "/projectsImg/TTT.png",
        },
        {
            title: "SAMS",
            description:
                "Java-based desktop app for automating student attendance tracking, with secure data handling and MySQL integration.",
            github: "https://github.com/suja2004/College.git",
            live: null,
            tech: ["JAVA", "MYSQL"],
            image: "/projectsImg/SAMS.png",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [frontIndex, setFrontIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => { setFrontIndex(prev => (prev + 1) % projects.length); }, 3000);
        return () => clearInterval(interval);
    }, [projects.length]);

    return (
        <section id="projects" className="projects">
            <div className="banner"
                onClick={() => setHoveredIndex(null)}
            >
                <div className="slider" style={{ "--quantity": projects.length }}>
                    {projects.map((proj, index) => (
                        <div
                            className="item"
                            style={{ "--position": index + 1 }}
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            <LazyLoadImage src={proj.image} effect="blur" alt={proj.title} />
                            <p>{proj.title}</p>

                        </div>
                    ))}
                </div>

                <div className="content">
                    <h1 data-content="PROJECTS">PROJECTS</h1>

                    {hoveredIndex !== null && (
                        <div className="project-info">
                            <h2>{projects[hoveredIndex].title}</h2>
                            <p>{projects[hoveredIndex].description}</p>
                            <div className="project-tech">
                                {projects[hoveredIndex].tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a
                                    href={projects[hoveredIndex].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                >
                                    <Github />
                                </a>
                                {projects[hoveredIndex].live && (
                                    <a
                                        href={projects[hoveredIndex].live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Live"
                                    >
                                        <Link />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;