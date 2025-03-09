import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            className="contact-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>
                Get in <motion.span whileHover={{ color: "#6c63ff" }}>Touch</motion.span>
            </h1>
            <p>
                Have any questions, feedback, or suggestions? Fill out the form below,
                and we’ll get back to you as soon as possible.
            </p>
            <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <motion.label whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                    />
                </motion.label>
                <motion.label whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                </motion.label>
                <motion.label whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Enter your message"
                    />
                </motion.label>
                <motion.button
                    type="submit"
                    className="submit-btn"
                    whileHover={{ scale: 1.1, backgroundColor: "#5546d1" }}
                    transition={{ duration: 0.3 }}
                >
                    Send Message
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default Contact;