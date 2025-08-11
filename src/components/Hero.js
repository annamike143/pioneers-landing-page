// --- src/components/Hero.js (v1.1 - LINT FIX) ---
'use client';
import React from 'react';
import LiveSlots from './LiveSlots';
import './Hero.css';

const Hero = ({ onCtaClick }) => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <h1 className="hero-headline">ATTENTION: Filipino Entrepreneurs, Coaches & Marketers</h1>
                <h2 className="hero-subheadline">How To Get A &quot;Superhuman&quot; AI Sales Assistant That Clones You, Closes Sales 24/7, and Turns Your FB/IG Comments Into Customers... For FREE.</h2>
                <div className="intrigue-section">
                    <p className="intrigue-intro">In the next 3 minutes, you&apos;ll discover:</p>
                    <ul className="intrigue-list">
                        <li>The #1 reason &quot;robotic&quot; chatbots kill your sales... and the simple &quot;Human-Touch&quot; framework that builds instant trust and rapport.</li>
                        <li>How to ethically &quot;steal&quot; my proven sales closing script and install it directly into an AI that works for you while you sleep.</li>
                        <li>The secret to turning a simple Facebook comment into a qualified, paying customer... without ever touching your phone.</li>
                    </ul>
                </div>
                <button className="cta-button-main" onClick={onCtaClick}>CLAIM MY FREE PIONEER SLOT</button>
                <p className="urgency-snippet">(Warning: This is a limited invitation for only 100 founding pioneers. Slots are filling fast.)</p>
                <LiveSlots />
            </div>
        </section>
    );
};
export default Hero;