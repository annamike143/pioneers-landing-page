// --- src/components/Pain.js ---
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Pain.css';

const Pain = () => {
    return (
        <section className="pain-section">
            <div className="container pain-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>Does This Sound Familiar?</h2>
                    <p>
                        You left your 9-to-5 job to build a dream, but now you're trapped in a new kind of prison... your phone. The 'ping' of another Messenger inquiry feels less like an opportunity and more like a burden.
                    </p>
                    <p>
                        You're losing hours every day to the copy-paste grind. You're losing sales because you can't reply fast enough. You're burning out, and the dream feels further away than ever.
                    </p>
                    <p>
                        You've tried other chatbots, but they're either too expensive (like ManyChat) or too clunky and robotic (like Botcake), scaring away the very customers you need.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Pain;