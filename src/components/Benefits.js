// --- src/components/Benefits.js ---
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaBullseye, FaHandshake, FaChartLine } from 'react-icons/fa';
import './Benefits.css';

const benefitsData = [
    {
        icon: <FaClock />,
        title: "Save 3-5 Hours Per Day",
        description: "Stop the copy-paste grind. Automate repetitive inquiries and follow-ups so you can focus on scaling your business."
    },
    {
        icon: <FaBullseye />,
        title: "Never Miss Another Lead",
        description: "Our AI works 24/7 to capture, engage, and qualify leads from your posts and DMs, ensuring no opportunity is ever lost."
    },
    {
        icon: <FaHandshake />,
        title: "Convert 3x More Inquiries",
        description: "By providing instant, human-like responses, you build trust and guide prospects to a sale before they look elsewhere."
    },
    {
        icon: <FaChartLine />,
        title: "Build a Loyal Following",
        description: "Engage every single commenter automatically, making your audience feel heard and valued, turning casual fans into loyal customers."
    }
];

const Benefits = () => {
    return (
        <section className="benefits-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="benefits-headline">Here's What SmartBot Will Do For You:</h2>
                    <div className="benefits-grid">
                        {benefitsData.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Benefits;