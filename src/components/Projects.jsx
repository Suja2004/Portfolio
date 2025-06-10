const Projects = () => {
    const projects = [
        {
            title: "LOCAL GOODS",
            description: `"Local Goods" is an e-commerce platform designed to support local shops by providing them with a robust online presence.`,
            github: "https://github.com/Suja2004/LocalGoods",
            live: null,
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            image: "/projectsImg/LG.png",
        },
        {
            title: "CalmCare",
            description: `"CalmCare" is a web app that provides mental health support for individuals with PTSD.`,
            github: "https://github.com/Suja2004/mentalHealthChatbot",
            live: "https://mental-health-chatbot-zeta.vercel.app/",
            tech: ["MERN-STACK", "DIALOGFLOW", "MACHINE-LEARNING"],
            image: "/projectsImg/CC.png",
        },
        {
            title: "TriviaTrail",
            description: `"TriviaTrail" is an interactive quiz app with real-time multiplayer trivia rooms.`,
            github: "https://github.com/Suja2004/TriviaTrail-v2",
            live: "https://trivia-trail-quiz-app.vercel.app/",
            tech: ["MERN-STACK"],
            image: "/projectsImg/TT.png",
        },
        {
            title: "T & T",
            description: `"Thoughts & Threads" is a blogging app with user authentication and interaction features.`,
            github: "https://github.com/Suja2004/Blog",
            live: "https://thoughts-and-threads.onrender.com/",
            tech: ["MERN STACK"],
            image: "/projectsImg/T&T.png",
        },
        {
            title: "SAMS",
            description: `"Student Attendance Management System" is a Java desktop app for attendance automation.`,
            github: "https://github.com/suja2004/College.git",
            live: null,
            tech: ["JAVA", "MYSQL"],
            image: "/projectsImg/SAMS.png",
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="main-content">
                <h1>PROJECTS</h1>
                <div className="project-list">
                    {projects.map((proj, index) => (
                        <div className="project" id={`project${index + 1}`} key={index}>
                            <div className="visible-content">

                                <div className="links">
                                    <img src={proj.image} alt={proj.title} />
                                </div>
                                <h3>{proj.title}</h3>
                                {proj.tech.map((tech, i) => (
                                    <span key={i}> {tech} </span>
                                ))}
                            </div>

                            <div className="project-description">
                                <p>{proj.description}</p>
                                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                                    <i className="bx bxl-github"></i>
                                </a>
                                {proj.live && (
                                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                                        <i className="bx bx-world"></i>
                                    </a>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;