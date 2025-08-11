// --- src/components/Pain.js (v1.1 - LINT FIX) ---
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './Pain.css';

const Pain = () => {
    return (
        <section className="pain-section">
            <div className="container pain-container">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                    <h2>Does This Sound Familiar?</h2>
                    <p>You left your 9-to-5 job to build a dream, but now you&apos;re trapped in a new kind of prison... your phone. The &apos;ping&apos; of another Messenger inquiry feels less like an opportunity and more like a burden.</p>
                    <p>You&apos;re losing hours every day to the copy-paste grind. You&apos;re losing sales because you can&apos;t reply fast enough. You&apos;re burning out, and the dream feels further away than ever.</p>
                    <p>You&apos;ve tried other chatbots, but they&apos;re either too expensive (like ManyChat) or too clunky and robotic (like Botcake), scaring away the very customers you need.</p>
                </motion.div>
            </div>
        </section>
    );
};
export default Pain;