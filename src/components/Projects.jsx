const Projects = () => {
    const projects = [
        {
            title: "Local Goods",
            description: `Local Goods is a scalable e-commerce platform developed to empower local businesses by offering a comprehensive online storefront solution. The platform enables shop owners to showcase their products, manage inventory, and reach a broader customer base through a user-friendly web interface.`,
            github: "https://github.com/Suja2004/LocalGoods",
            live: null,
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            image: "/projectsImg/LG.png",
        },
        {
            title: "CalmCare",
            description: `CalmCare is a web application designed to provide accessible mental health support for individuals experiencing PTSD. The platform integrates a conversational chatbot powered by machine learning and Dialogflow, delivering personalized guidance and resources in a secure environment.`,
            github: "https://github.com/Suja2004/mentalHealthChatbot",
            live: "https://mental-health-chatbot-zeta.vercel.app/",
            tech: ["MERN STACK", "DIALOGFLOW", "MACHINE-LEARNING"],
            image: "/projectsImg/CC.png",
        },
        {
            title: "TriviaTrail",
            description: `TriviaTrail is an interactive, real-time multiplayer quiz application that allows users to join themed trivia rooms, compete with others, and track their progress. The platform is built for engaging, seamless user experiences with instant feedback and dynamic content.`,
            github: "https://github.com/Suja2004/TriviaTrail-v2",
            live: "https://trivia-trail-quiz-app.vercel.app/",
            tech: ["MERN STACK"],
            image: "/projectsImg/TT.png",
        },
        {
            title: "Thoughts & Threads",
            description: `Thoughts & Threads is a feature-rich blogging application that supports user authentication, post creation, and interactive discussions. Designed to foster community engagement, this platform enables users to share ideas, comment, and connect with like-minded individuals.`,
            github: "https://github.com/Suja2004/Blog",
            live: "https://thoughts-and-threads.onrender.com/",
            tech: ["MERN STACK"],
            image: "/projectsImg/T&T.png",
        },
        {
            title: "Tic Tac Toe AI",
            image: "/projectsImg/TTT.png",
            description: `A modern Tic Tac Toe game featuring AI-powered gameplay and multiple difficulty levels, utilizing the Minimax algorithm. The application offers both single and multiplayer modes, robust backend logic, and a responsive, intuitive user interface.`,
            github: "https://github.com/Suja2004/TicTacToe_2",
            live: "https://tic-tac-toe-2-alpha.vercel.app/",
            tech: [
                "React",
                "Node.js",
                "Express.js",
                "Minimax Algorithm",
                "AI",
            ],
        },
        {
            title: "Eventure",
            image: "/projectsImg/E.png",
            description: `Developed as a prototype during the COMEDKares Social Innovation Through Field Visit program, EVENTURE is a tourism website dedicated to promoting the Karavali region. The platform categorizes destinations by type, provides detailed insights, and offers interactive features to help users discover and plan their trips efficiently.`,
            github: "https://github.com/Suja2004/EVENTURE",
            live: "https://innov8ors-eventure.netlify.app/",
            tech: [
                "HTML5",
                "CSS",
                "API",
            ],
        },
        {
            title: "SAMS",
            description: `The Student Attendance Management System is a Java-based desktop application designed to automate and streamline attendance tracking for educational institutions. The system features secure data handling, user-friendly interfaces, and seamless integration with MySQL databases.`,
            github: "https://github.com/suja2004/College.git",
            live: null,
            tech: ["JAVA", "MYSQL"],
            image: "/projectsImg/SAMS.png",
        },
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
                                    <img src={proj.image} alt={proj.title} />
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