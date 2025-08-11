// --- src/components/Guarantee.js (v1.1 - LINT FIX) ---
'use client';
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Guarantee.css';

const Guarantee = ({ onCtaClick }) => {
    return (
        <section className="guarantee-section">
            <div className="container guarantee-container">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                    <div className="guarantee-box">
                        <FaShieldAlt className="guarantee-icon" />
                        <h3>My &quot;Pioneer&apos;s Promise&quot; To You</h3>
                        <p>If you use SmartBot and it doesn&apos;t save you time and make your life easier, you can leave the program at any time, no questions asked. There is absolutely zero risk to you.</p>
                    </div>
                    <button className="cta-button-main final-cta" onClick={onCtaClick}>SECURE MY FREE LIFETIME ACCOUNT NOW</button>
                </motion.div>
            </div>
        </section>
    );
};
export default Guarantee;