import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const combos = [
    {
        id: 1,
        title: "DESIREE X SAVAGE",
        description: "A daring collision of delicate floral sweetness and raw, unbridled amber. This combination creates a tension that is both intoxicating and deeply grounding. Perfect for the transition from golden hour to midnight.",
        image: "/images/combo_1.jpg"
    },
    {
        id: 2,
        title: "DESIREE X SECRET SCANDAL",
        description: "Unapologetically bold. The ethereal high notes of Desiree melt into the dark, spiced undercurrents of Secret Scandal. An olfactory signature designed to leave an unforgettable, lingering trail.",
        image: "/images/combo_2.jpg"
    },
    {
        id: 3,
        title: "AVENTUS X SAVAGE",
        description: "The ultimate power clash. Crisp, dominating bergamot meets visceral, smoky leather. This is a high-contrast pairing for those who command the room without saying a word.",
        image: "/images/combo_3.jpg"
    },
    {
        id: 4,
        title: "PINK CHIFFON X BLACK OPIA",
        description: "Sweet innocence immediately subverted by dark roast coffee and vanilla bean. A gourmand dream that plays with expectations, balancing soft, pillowy sugar with sharp, roasted depth.",
        image: "/images/combo_4.jpg"
    }
];

const ComboCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextCombo = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % combos.length);
    };

    const prevCombo = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + combos.length) % combos.length);
    };

    // Framer Motion variants for the sliding image
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    // Framer Motion variants for the fading text
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <section id="explore" className="w-full bg-rescnt-white py-24 md:py-32 overflow-hidden border-t border-rescnt-gray-medium">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

                {/* Left Column: Anchored Typography */}
                <div className="w-full md:w-5/12 flex flex-col justify-center min-h-[300px] md:min-h-[400px]">
                    <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-rescnt-gray-dark mb-8">
                        The Pairings
                    </h2>

                    <div className="relative w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-full"
                            >
                                <h3 className="text-3xl md:text-5xl font-heading font-black text-rescnt-black mb-6 leading-tight tracking-tighter">
                                    {combos[currentIndex].title}
                                </h3>
                                <p className="font-sans text-rescnt-gray-dark text-sm md:text-base leading-relaxed mb-10 max-w-md">
                                    {combos[currentIndex].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-6 mt-auto">
                        <button
                            onClick={prevCombo}
                            className="p-3 border border-rescnt-gray-medium rounded-full hover:border-rescnt-black hover:bg-rescnt-black hover:text-rescnt-white transition-all"
                            aria-label="Previous Combo"
                        >
                            <ChevronLeft size={20} strokeWidth={1} />
                        </button>

                        <div className="flex gap-2">
                            {combos.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-rescnt-black w-8' : 'bg-rescnt-gray-medium'}`}
                                    aria-label={`Go to combo ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextCombo}
                            className="p-3 border border-rescnt-gray-medium rounded-full hover:border-rescnt-black hover:bg-rescnt-black hover:text-rescnt-white transition-all"
                            aria-label="Next Combo"
                        >
                            <ChevronRight size={20} strokeWidth={1} />
                        </button>
                    </div>
                </div>

                {/* Right Column: Image Carousel */}
                <div className="w-full md:w-7/12 relative aspect-[4/5] md:aspect-[3/4] bg-rescnt-gray-light overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex}
                            src={combos[currentIndex].image}
                            alt={combos[currentIndex].title}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </AnimatePresence>

                    {/* Index Indicator overlay */}
                    <div className="absolute top-6 right-6 font-heading font-black text-rescnt-white text-xl drop-shadow-md mix-blend-difference z-10 opacity-70">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(combos.length).padStart(2, '0')}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ComboCarousel;
