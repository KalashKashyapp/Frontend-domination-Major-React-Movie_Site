//Maine is about page ko acha banane ke liye ek library use kri hai "framer-motion".
//To install the library , use => npm install framer-motion.

import React from "react";
import { motion } from "framer-motion";


const About = () => {
    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // style={{ minHeight: "100vh", paddingBottom: "30px", backgroundColor: "#1F1E24" }}
        >
            {/* Profile Section */}
            <motion.div
                className="profile-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                style={{ textAlign: "center", 
                        marginBottom: "20px",
                        display: "flex",
                        justifyContent: "center", // Center horizontally
                        alignItems: "center", // Center vertically
                        flexDirection: "column",
                 }}
            >
                <motion.img
                    src="Mypic.jpg" // Add the path to your profile picture
                    alt="Kalash Kashyap"
                    className="profile-pic"
                    style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        marginBottom: "20px",
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                <motion.h2
                    whileHover={{ scale: 1.1, color: "#6c63ff" }}
                    transition={{ duration: 0.3 }}
                >
                    KALASH KASHYAP
                </motion.h2>
            </motion.div>

            <h1>
                Welcome to <motion.span whileHover={{ scale: 1.1, color: "#6c63ff" }}>OnAir</motion.span>
            </h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <strong>OnAir</strong> is your one-stop platform for exploring trending
                movies, TV shows, and celebrity insights. Whether you're here to
                discover new content or revisit timeless classics, we've got you
                covered.
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                This platform is the result of my dedication and passion for
                entertainment. As a solo creator, I have poured my heart into crafting
                an experience that brings joy and convenience to all movie lovers.
            </motion.p>

            <motion.div
                className="about-highlight"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Why OnAir?</h2>
                <ul>
                    <motion.li
                        whileHover={{ x: 10, color: "#6c63ff" }}
                        transition={{ duration: 0.3 }}
                    >
                        Trending Movies and Shows
                    </motion.li>
                    <motion.li
                        whileHover={{ x: 10, color: "#6c63ff" }}
                        transition={{ duration: 0.3 }}
                    >
                        User-Friendly Interface
                    </motion.li>
                    <motion.li
                        whileHover={{ x: 10, color: "#6c63ff" }}
                        transition={{ duration: 0.3 }}
                    >
                        Curated Collections
                    </motion.li>
                </ul>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                Thank you for being a part of <strong>OnAir</strong>. Stay tuned for
                exciting updates and new features!
            </motion.p>

            {/* Instagram Contact Section */}
            <motion.div
                className="contact-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ textAlign: "center", margin: "10px"
                }}
            >
                <motion.a
                    href="https://www.instagram.com/.kalash._/?igsh=MTAxcHlmdmN6OXc2Zg==" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta-link"
                    whileHover={{ scale: 1.1, color: "#6c63ff" }}
                    transition={{ duration: 0.3 }}
                    style={{
                        fontSize: "18px",
                        textDecoration: "none",
                        color: "#fff", 
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        justifyContent: "center"                     
                    }}
                >
                    <i className="ri-instagram-fill"></i>
                    Connect with me on Instagram
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default About;