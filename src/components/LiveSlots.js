// --- src/components/LiveSlots.js (v1.4 - LINT FIX) ---
'use client'; 
import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';

const ClientOnly = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => { setHasMounted(true); }, []);
    if (!hasMounted) { return null; }
    return children;
};

const AnimatedCounter = ({ value }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    useEffect(() => {
        const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
        return controls.stop;
    }, [value, count]); // Added 'count' to the dependency array
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
                <ClientOnly>
                    <AnimatedCounter value={availableSlots} />
                </ClientOnly>
            </div>
            <p className="live-slots-label">PIONEER SLOTS REMAINING</p>
            <Link href="https://status.smartbot.ph" target="_blank" className="live-slots-link">
                This is not fake scarcity. See the Live Status Hub here.
            </Link>
        </div>
    );
};
export default LiveSlots;