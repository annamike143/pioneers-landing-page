// --- src/components/Reminder.js (v1.1 - LINT FIX) ---
'use client';
import React from 'react';
import './Reminder.css';

const Reminder = () => {
    return (
        <footer className="reminder-section">
            <div className="container reminder-container">
                <p><strong>Warning:</strong> You can ignore this invitation and continue the daily grind... or you can claim your spot and become one of the 100 entrepreneurs who get to shape the future of automation. The choice is yours, but the clock is ticking.</p>
                <p><strong>P.S.</strong> Remember, you&apos;re getting lifetime access to a tool valued at over ₱50,000. All we ask in return is your feedback. This is a one-time opportunity that will disappear once the final pioneer slot is claimed. Don&apos;t miss out.</p>
            </div>
        </footer>
    );
};
export default Reminder;