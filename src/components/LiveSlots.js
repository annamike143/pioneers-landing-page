// --- src/components/LiveSlots.js (Corrected Path) ---
'use client'; 

import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; // This path is now correct
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';

// ... (rest of the component code is the same)
const AnimatedCounter = ({ value }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    useEffect(() => {
        const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
        return controls.stop;
    }, [value]);
    return <motion.span>{rounded}</motion.span>;
};

const LiveSlots = () => {
    const [availableSlots, setAvailableSlots] = useState(0);
    useEffect(() => {
        const statusRef = ref(database, 'liveStatus');
        const unsubscribe = onValue(statusRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const slots = data.totalCapacity - data.totalPioneers;
                setAvailableSlots(slots);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="live-slots-container">
            <div className="live-slots-data">
                <AnimatedCounter value={availableSlots} />
            </div>
            <p className="live-slots-label">PIONEER SLOTS REMAINING</p>
            <Link href="https://status.smartbot.ph" target="_blank" className="live-slots-link">
                This is not fake scarcity. See the Live Status Hub here.
            </Link>
        </div>
    );
};
export default LiveSlots;