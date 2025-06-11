import { useState } from "react";

const Contact = () => {
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
            <div className="con">
                <h2 className="contact">CONTACT ME</h2>
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
                    <label htmlFor="uname" id="name">Name
                        :</label>
                    <input
                        type="text"
                        id="uname"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoFocus
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" id="email">
                        <i className="fa fa-solid fa-envelope"></i> Email Address
                        :</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject" id="subject">
                        <i className="fa-solid fa-phone"></i> Subject
                        :</label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="Enter the subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="msg" id="message">
                        Message
                        :</label>
                    <textarea
                        id="msg"
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    value={formData.botcheck}
                    onChange={handleChange}
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Contact;
