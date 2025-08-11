// --- src/components/Scarcity.js ---
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LiveSlots from './LiveSlots'; // We are re-using our powerful component
import './Scarcity.css';

const Scarcity = () => {
    return (
        <section className="scarcity-section">
            <div className="container scarcity-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="price-drop">
                        <span className="strikethrough">₱50,000+</span>
                    </div>
                    <h3>Your Price Today: <span>Your Feedback & Your Success Story</span></h3>
                    <p className="scarcity-text">
                        I don't want your money. I want your ambition. For a limited time, I am giving away 100 Pioneer accounts in exchange for your honest feedback. When these 100 slots are gone, this offer will be replaced with a monthly subscription.
                    </p>
                    
                    {/* We embed the live data pod here for maximum impact */}
                    <div className="embedded-live-slots">
                        <LiveSlots />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Scarcity;