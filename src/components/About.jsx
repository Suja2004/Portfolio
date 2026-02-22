import myImg from "/assets/me2.png";

const skills = [
    { name: "HTML5", iconClass: "bx bxl-html5" },
    { name: "CSS3", iconClass: "bx bxl-css3" },
    { name: "JavaScript", iconClass: "bx bxl-javascript" },
    { name: "React", iconClass: "bx bxl-react" },
    { name: "Node.js", iconClass: "bx bxl-nodejs" },
    { name: "SQL", iconClass: "bx bxs-data" },
    { name: "C", image: "/assets/C.svg" },
    { name: "Java", iconClass: "bx bxl-java" },
    { name: "Python", iconClass: "bx bxl-python" },
];


const About = () => {
    return (
        <section id="about" className="about">
            <div className="img">
                <img src={myImg} alt="My image" />
            </div>

            <div className="content">
                <p>
                    A Computer Science Engineering student with a passion for software development and full-stack web technologies. Love transforming ideas into interactive, user-friendly applications. My curiosity drives me to explore new frameworks, solve real-world problems, and continuously grow as a developer. Whether it's building scalable web apps or writing clean, maintainable code, I enjoy the creative and logical aspects of software engineering. Always open to collaborating with fellow tech enthusiasts, mentors, or anyone excited about the world of engineering and innovation.
                </p>

                <div className="skills-carousel">
                    <div className="carousel-track">
                        {[...skills, ...skills].map((skill, index) => (
                            <div className="skill-card" key={index}>
                                <div className="skill-icon">
                                    {skill.iconClass ? (
                                        <i className={skill.iconClass}></i>
                                    ) : (
                                        <span>C</span>
                                    )}
                                </div>
                                <h3>{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
