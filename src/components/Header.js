// --- src/components/Header.js ---
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

const Header = ({ onCtaClick }) => { // We pass down the function to open the modal
    return (
        <header className="header">
            <div className="container header-container">
                <Link href="/">
                    <Image
                        src="/logo-wordmark.png"
                        alt="SmartBot Logo"
                        width={160}
                        height={40}
                        className="logo"
                    />
                </Link>
                <nav className="header-nav">
                    <Link href="https://app.smartbot.ph" target="_blank" className="login-button">
                        Login
                    </Link>
                    <button onClick={onCtaClick} className="cta-button-header">
                        Claim Your FREE Slot
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;