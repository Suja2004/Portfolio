import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
    const projects = [
        {
            title: "CalmCare",
            description: `Web app delivering personalized mental health support via a machine-learning and chatbot, built for privacy and ease of use.`,
            github: "https://github.com/Suja2004/mentalHealthChatbot",
            live: "https://mental-health-chatbot-zeta.vercel.app/",
            tech: ["MERN STACK", "DIALOGFLOW", "MACHINE-LEARNING"],
            image: "/projectsImg/CC.png",
        },
        {
            title: "Local Goods",
            description: `E-commerce solution empowering local businesses with online storefronts, inventory management, and customer outreach tools.`,
            github: "https://github.com/Suja2004/LocalGoods",
            live: null,
            tech: ["PHP", "MySQL", "JavaScript"],
            image: "/projectsImg/LG.png",
        },
        {
            title: "TriviaTrail",
            description: `Real-time multiplayer quiz app for themed competitions, focusing on interactivity and instant user feedback.`,
            github: "https://github.com/Suja2004/TriviaTrail-v2",
            live: "https://trivia-trail-quiz-app.vercel.app/",
            tech: ["MERN STACK"],
            image: "/projectsImg/TT.png",
        },
        {
            title: "Thoughts & Threads",
            description: `Feature-rich blog app supporting authentication, post creation, and community-driven discussions.`,
            github: "https://github.com/Suja2004/Blog",
            live: "https://thoughts-and-threads.onrender.com/",
            tech: ["MERN STACK"],
            image: "/projectsImg/T&T.png",
        },
        {
            title: "Tic Tac Toe AI",
            description: `Modern Tic Tac Toe with AI-driven gameplay and multiple difficulty levels, offering both single and multiplayer modes.`,
            github: "https://github.com/Suja2004/TicTacToe_2",
            live: "https://tic-tac-toe-2-alpha.vercel.app/",
            tech: [
                "React",
                "Node.js",
                "Express.js",
                "Minimax Algorithm",
                "AI",
            ],
            image: "/projectsImg/TTT.png",
        },
        {
            title: "SAMS",
            description: `Java-based desktop app for automating student attendance tracking, with secure data handling and MySQL integration.`,
            github: "https://github.com/suja2004/College.git",
            live: null,
            tech: ["JAVA", "MYSQL"],
            image: "/projectsImg/SAMS.png",
        }
    ]


    return (
        <section id="projects" className="projects">
            <div className="main-content">
                <h1>PROJECTS</h1>
                <div className="project-list">
                    {projects.map((proj, index) => (
                        <div className="project" id={`project${index + 1}`} key={index}>
                            <div className="visible-content" id={`content${index + 1}`}>

                                <div className="content">
                                    <LazyLoadImage src={proj.image} alt={proj.title} effect="blur"
                                    />
                                </div>
                                <h3>{proj.title}</h3>
                                <div className="project-tech">
                                    {proj.tech.map((tech, i) => (
                                        <p key={i}> {tech} </p>
                                    ))}
                                </div>
                            </div>

                            <div className="project-description">
                                <p>{proj.description}</p>
                                <div className="links">
                                    <div className="git">

                                        <a href={proj.github} target="_blank" rel="noopener noreferrer"
                                            className="project-link github">
                                            <i className="bx bxl-github">
                                            </i>
                                        </a>
                                    </div>

                                    {proj.live && (
                                        <div className="live">

                                            <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                                                <i className="bx bx-world">

                                                </i>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;