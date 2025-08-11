// --- src/components/Solution.js (v1.1 - LINT FIX) ---
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './Solution.css';

const Solution = () => {
    return (
        <section className="solution-section">
            <div className="container solution-grid">
                <motion.div className="founder-image-container" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                    <Image src="/founder-portrait.jpg" alt="Mike Salazar, Founder of SmartBot" width={500} height={500} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </motion.div>
                <motion.div className="founder-story" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }}>
                    <h2>Finally, There&apos;s a Smarter Way.</h2>
                    <p>My name is Mike Salazar, and I&apos;ve been in your shoes. From the factory floor to becoming a top affiliate marketer, I learned one thing: <strong>you can&apos;t scale your business if you&apos;re the bottleneck.</strong></p>
                    <p>I didn&apos;t just find a solution; I perfected one. I took a powerful automation engine and fused it with a <strong>master-level sales framework</strong> I developed over years of closing deals.</p>
                    <p>The result is SmartBot.</p>
                </motion.div>
            </div>
        </section>
    );
};
export default Solution;