// --- src/components/SignupModal.js ---
'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SignupModal.css';

const SignupModal = ({ isOpen, onClose }) => {
    // This effect prevents the body from scrolling when the modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // This is the HTML code for your Brevo form.
    // I have created a placeholder here. You will replace this.
    const brevoFormHtml = `
<div class="sib-form" style="text-align: center; background-color: white;">
    <div id="sib-form-container" class="sib-form-container">
        <div id="error-message" class="sib-form-message-panel" style="display: none;"></div>
        <div id="success-message" class="sib-form-message-panel" style="display: none;"></div>
        <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:white; max-width:540px; border:none;">
            <form id="sib-form" method="POST" action="https://01ae843a.sibforms.com/serve/MUIFAOKM1QyfcIhrsdecLFaypRBRG1UzYCLGWdBDB_paQUKbJmAxNZVU4LW2TJ2jLFBC6lG19YdKNq3cLMmQjXYtfy20LMO1KVqwcZhEJlleFF6UT2CqBbn4mpGf3y7phaoE5IRvI9Il5GHPimH_sKmNKsqGmR-aZ3Fx2vPVxRgsdu_7IhPo8LoTHZm8LlQBHyteDIqKiDuOUI8F" data-type="subscription">
                <div class="sib-form-block sib-image-form-block" style="text-align: center; margin-bottom: 1rem;">
                    <img src="https://img.mailinblue.com/9723734/images/content_library/original/68984ab634f9b49bf408ca35.png" style="width: 220px; height: auto;" alt="SmartBot Logo" />
                </div>
                <div class="sib-form-block" style="font-size:22px; text-align:center; font-weight:700; font-family:'Poppins', sans-serif; color:#3C4858;">
                    <p>Claim Your FREE Pioneer Slot</p>
                </div>
                <div class="sib-form-block" style="font-size:15px; text-align:center; font-family:'Inter', sans-serif; color:#6a737d; margin-bottom: 1.5rem;">
                    <p>You're just one step away. Fill out the details below to secure your free account.</p>
                </div>
                <div class="form-group-wrapper">
                    <label for="FIRSTNAME">Your First Name*</label>
                    <input class="input" type="text" id="FIRSTNAME" name="FIRSTNAME" autocomplete="off" placeholder="e.g. Juan" data-required="true" required />
                </div>
                <div class="form-group-wrapper">
                    <label for="LASTNAME">Your Last Name*</label>
                    <input class="input" type="text" id="LASTNAME" name="LASTNAME" autocomplete="off" placeholder="e.g. Dela Cruz" data-required="true" required />
                </div>
                <div class="form-group-wrapper">
                    <label for="EMAIL">Your Best Email Address*</label>
                    <input class="input" type="email" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="e.g. juan@email.com" data-required="true" required />
                </div>
                <div class="form-group-wrapper">
                    <label for="BUSINESSPAGE">Your FB/IG Business Page Name*</label>
                    <input class="input" type="text" id="BUSINESSPAGE" name="BUSINESSPAGE" autocomplete="off" placeholder="e.g. Juan's Online Store" data-required="true" required />
                </div>
                <div style="padding-top: 1rem;">
                    <button class="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
                        SECURE MY FREE SLOT NOW
                    </button>
                </div>
                <input type="text" name="email_address_check" value="" style="display:none;">
                <input type="hidden" name="locale" value="en">
            </form>
        </div>
    </div>
</div>
    `;
    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: -50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: -50 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
                    >
                        <button className="close-button" onClick={onClose}>&times;</button>
                        {/* This safely injects your Brevo form HTML into the component */}
                        <div dangerouslySetInnerHTML={{ __html: brevoFormHtml }} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SignupModal;