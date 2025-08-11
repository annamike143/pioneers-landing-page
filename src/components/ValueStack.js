// --- src/components/ValueStack.js ---
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './ValueStack.css';

const ValueStack = () => {
    return (
        <section className="value-stack-section">
            <div className="container value-stack-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>Become a Founding Pioneer & Get The "Unfair Advantage" Stack</h2>
                    <div className="value-stack-box">
                        <div className="value-item">
                            <span>Lifetime Access to the SmartBot Core Engine</span>
                            <span>(Value: ₱35,000)</span>
                        </div>
                        <div className="value-item">
                            <span>My Personal "Human-Touch" Sales Framework</span>
                            <span>(Value: ₱10,000)</span>
                        </div>
                        <div className="value-item">
                            <span>Exclusive Access to the Pioneer's Strategy Group</span>
                            <span>(Value: ₱5,000)</span>
                        </div>
                        <div className="value-item">
                            <span>Direct Influence on Future Product Development</span>
                            <span>(Priceless!)</span>
                        </div>
                        <div className="total-value">
                            <span>TOTAL VALUE:</span>
                            <span>₱50,000+</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ValueStack;