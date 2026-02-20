import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    "/images/bottles_in_the_shelf_at_sunrise.jpg",
    "/images/lab_table.jpg",
    "/images/three_bottles_with_roses.jpg"
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    // Minimal fade transition
    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
        exit: { opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }
    };

    return (
        <section className="relative w-full min-h-screen bg-rescnt-white flex flex-col md:flex-row pt-20">

            {/* Left Column: Typography & Intentional White Space */}
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <div className="max-w-md">
                    <p className="font-heading font-bold text-xs uppercase tracking-widest text-rescnt-gray-dark mb-4">Edition 01</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-rescnt-black mb-6 leading-tight">
                        Architecture <br />
                        For The Senses.
                    </h1>
                    <p className="font-sans text-rescnt-gray-dark text-sm leading-relaxed mb-10">
                        Rejecting the noise. We craft structural, minimalist fragrances designed to become the invisible foundation of your daily uniform.
                    </p>
                    <button
                        onClick={() => {
                            document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-rescnt-black text-rescnt-white px-8 py-3 rounded-full font-heading font-bold uppercase tracking-widest text-xs hover:bg-rescnt-gray-dark transition-colors"
                    >
                        Explore Collection
                    </button>
                </div>
            </div>

            {/* Right Column: Auto-playing Carousel */}
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full relative overflow-hidden bg-rescnt-gray-light">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentImage}
                        src={heroImages[currentImage]}
                        alt="Rescnt Signature Perfume Collection"
                        variants={fadeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </AnimatePresence>
            </div>

        </section>
    );
};

export default Hero;
