import 'boxicons/css/boxicons.min.css';
import ShinyText from './ShinyText';
import GradientText from './GradientText'

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/sujan-kumar-k164",
        iconClass: "bx bxl-linkedin",
        label: "LinkedIn",
    },
    {
        href: "https://github.com/suja2004",
        iconClass: "bx bxl-github",
        label: "GitHub",
    },
    {
        href: "#mail",
        iconClass: "bx bxl-gmail",
        label: "Email",
        id: "btn2",
    },
    {
        href: "/assets/myResume (1).pdf",
        iconClass: "bx bx-download",
        label: "Resume",
        isDownload: true,
    },
];

const roles = [
    "Full Stack Developer",
    "Software Developer",
    "Tech Enthusiast",
    "CSE Undergraduate",
    "Passionate Coder"
];

const repeatedRoles = [...roles, ...roles];

const Home = () => {
    return (
        <section id="home" className='home'>
            <div className="main-content">
                <div className="profile-info">

                    <div className="text-info">
                        <h2>Hi, I'm </h2>
                        <h1>
                            <ShinyText text="Sujan Kumar K" disabled={false} speed={3} className='custom-class' /></h1>

                    </div>
                </div>

                <div className="user-bio">
                    <div className="text-animation">
                        <div className="words">
                            {repeatedRoles.map((role, index) => (
                                <span key={index}>{role}</span>
                            ))}
                        </div>
                    </div>

                    <GradientText
                        colors={["#3cf", "#cf3", "#3cf", "#cf3"]}
                        animationSpeed={10}
                        showBorder={false}
                        className="custom-class"
                    >
                        <p>
                            I'm a passionate Computer Science Engineering student who enjoys building web
                            applications and solving real-world problems through code.
                        </p>
                    </GradientText>

                    <div className="contact">
                        <div className="socials">
                            {socialLinks.map(({ href, iconClass, label, id, isDownload }) => (
                                <a
                                    key={label}
                                    href={href}
                                    id={id}
                                    aria-label={label}
                                    target={href.startsWith("http") && !isDownload ? "_blank" : undefined}
                                    rel={href.startsWith("http") && !isDownload ? "noopener noreferrer" : undefined}
                                    download={isDownload ? true : undefined}
                                >
                                    <i className={iconClass}></i>
                                </a>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Home;
