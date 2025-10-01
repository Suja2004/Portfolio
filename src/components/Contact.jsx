import { useState, useEffect, useRef } from "react";

const Contact = () => {
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
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        botcheck: "",
    });

    const [isVisible, setIsVisible] = useState(false); // track visibility
    const sectionRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // optional: stop observing after first trigger
                }
            },
            { threshold: 0.2 } // trigger when 20% of the section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            className={`contact ${isVisible ? "visible" : "hidden"}`} // use classes for animations
            ref={sectionRef}
        >
            <div className="contact-container">
                <div className="connect">
                    <h2>Let’s Connect!</h2>
                    <p>
                        Have a project in mind, a question, or just want to say hello? I’d love to
                        hear from you! Whether it’s about web development, collaboration, or
                        opportunities, feel free to reach out using the form — I’ll get back to you
                        as soon as possible.
                    </p>
                    <div className="socials">
                        {socialLinks.map(({ href, iconClass, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={iconClass}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="contact-form"
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value="3e9b20d4-7199-48c1-a69f-2544e3319398"
                    />

                    <div className="form-group">
                        <label htmlFor="uname">Name</label>
                        <input
                            type="text"
                            id="uname"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group message">
                        <label htmlFor="msg">Message</label>
                        <textarea
                            id="msg"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button className="send-btn" type="submit">
                            <i className="bx bx-send"></i>
                        </button>
                    </div>

                    <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                        value={formData.botcheck}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </section>
    );
};

export default Contact;
