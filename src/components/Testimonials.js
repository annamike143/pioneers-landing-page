// --- src/components/Testimonials.js ---
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import './Testimonials.css';

// --- YOUR TESTIMONIAL DATA GOES HERE ---
// You can add as many as you like.
const testimonialsData = [
    {
        image: '/testimonial-5.jpg',
        quote: `"Grabe, life-changing talaga! Dati, 3 hours ako mag-reply. Ngayon, bago ko pa mabuksan ang Messenger, may sales na pumasok. Solid 'to!"`,
        name: 'Alyza R.',
        title: 'E-commerce Seller'
    },
    {
        image: '/testimonial-4.jpg',
        quote: `"As a real estate agent, time is money. SmartBot's AI qualifier saves me hours every week by filtering out non-serious inquiries. Now I only talk to clients who are ready to book a viewing."`,
        name: 'Anna L.',
        title: 'Real Estate Agent'
    },
    {
        image: '/testimonial-3.jpg',
        quote: `"The best part is how human it sounds. My clients feel like they're talking to a real person, which is so important for building trust in the coaching industry. Game-changer!"`,
        name: 'Coach Nel',
        title: 'Business Consultant'
    },
    {
        image: '/testimonial-1.jpg',
        quote: `"Smartbot Automations transformed our customer service! Response times have improved significantly, and our team can focus on more complex inquiries. "`,
        name: 'Mike',
        title: 'Marketer'
    },
    {
        image: '/testimonial-5.jpg',
        quote: `"Sales doubled because SmartBot replies faster than any human assistant."`,
        name: 'Allyzza',
        title: 'Ecommerce'
    },
    {
        image: '/testimonial-6.jpg',
        quote: `"Dumami customers namin dahil nasasagot na sila agad ng maayos at auto booking pa"`,
        name: 'Bob',
        title: 'Airconditioning Service'
    }
];

const Testimonials = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="testimonials-headline">Meet a Few of Our Founding Pioneers</h2>
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            {testimonialsData.map((testimonial, index) => (
                                <div className="embla__slide" key={index}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-image">
                                            <Image
                                                src={testimonial.image}
                                                alt={`Portrait of ${testimonial.name}`}
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <p className="testimonial-quote">{testimonial.quote}</p>
                                        <div className="testimonial-author">
                                            <span className="author-name">{testimonial.name}</span>
                                            <span className="author-title">{testimonial.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;