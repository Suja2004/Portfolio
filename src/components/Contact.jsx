import { useState } from "react";

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="connect">
                    <h2>Let’s Connect!</h2>
                    <p> Have a project in mind, a question, or just want to say hello? I’d love to hear from you! Whether it’s about web development, collaboration, or opportunities, feel free to reach out using the form — I’ll get back to you as soon as possible.</p>
                    <div className="socials">
                        {socialLinks.map(({ href, iconClass, label, id }) => (
                            <a
                                key={label}
                                href={href}
                                id={id}
                                aria-label={label}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
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
                        <label htmlFor="uname">
                            Name
                        </label>
                        <input
                            type="text"
                            id="uname"
                            placeholder=""
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder=""
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder=""
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group message">
                        <label htmlFor="msg">
                            Message
                        </label>
                        <textarea
                            id="msg"
                            placeholder=""
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button className="send-btn" type="submit">
                            <i className='bx bx-send'></i>
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
    )
}

export default Contact;
