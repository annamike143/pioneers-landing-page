// --- src/app/page.js (v4.1 - DEFINITIVE FINAL ASSEMBLY) ---
'use client';

import React, { useState } from 'react';

// Import All Components with Corrected Paths & Names
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pain from '../components/Pain';
import Solution from '../components/Solution';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import ValueStack from '../components/ValueStack';
import Scarcity from '../components/Scarcity';
import Guarantee from '../components/Guarantee';
import Reminder from '../components/Reminder';
import SignupModal from '../components/SignupModal';

// Import All Stylesheets
import './globals.css';
import '../components/Header.css';
import '../components/Hero.css';
import '../components/LiveSlots.css';
import '../components/Pain.css';
import '../components/Solution.css';
import '../components/Benefits.css';
import '../components/Testimonials.css';
import '../components/ValueStack.css';
import '../components/Scarcity.css';
import '../components/Guarantee.css';
import '../components/Reminder.css';
import '../components/SignupModal.css';


export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onCtaClick={openModal} />
      
      <main>
        <Hero onCtaClick={openModal} />
        <Pain />
        <Solution />
        <Benefits />
        <Testimonials />
        <ValueStack />
        <Scarcity />
        <Guarantee onCtaClick={openModal} />
        <Reminder />
      </main>

      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}