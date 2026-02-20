import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        title: "JOIN THE LAB.",
        description: "We are constantly looking for iconoclasts, noses, and creatives who believe that scent is the most intimate architecture. If you obsess over negative space as much as the notes themselves, we should talk.",
        buttonText: "View Openings",
        image: "/images/bottle_perfume_plank_and_leaf_setting.png"
    },
    {
        id: 2,
        title: "SOFT LAUNCH.",
        description: "Be the first to experience our inaugural physical outpost. An exercise in brutalist retail, designed to strip away the superfluous and focus entirely on the olfactory.",
        buttonText: "Join Waitlist",
        image: "/images/news_1_join_us_on_soft_launch.jpg"
    },
    {
        id: 3,
        title: "GITING NIGHT.",
        description: "An exclusive evening of sensory deprivation and kinetic art. We are hosting a temporary olfactory installation alongside local sound designers. Strictly limited capacity.",
        buttonText: "Get Tickets",
        image: "/images/news_2_gila_tingkah_night.jpeg"
    }
];

const NewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

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
        <section
            className="w-full bg-rescnt-white py-24 md:py-32 border-t border-rescnt-gray-medium overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

                {/* Left Column: Typography */}
                <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[350px]">
                    <h2 className="font-heading font-bold text-xs uppercase tracking-widest text-rescnt-gray-dark mb-8">
                        The Latest
                    </h2>

                    <div className="relative w-full flex-grow">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-full max-w-md"
                            >
                                <h3 className="text-3xl md:text-5xl font-heading font-black text-rescnt-black mb-6 leading-tight">
                                    {newsItems[currentIndex].title}
                                </h3>
                                <p className="font-sans text-rescnt-gray-dark text-xs md:text-base leading-relaxed mb-10">
                                    {newsItems[currentIndex].description}
                                </p>

                                <button className="group relative overflow-hidden flex items-center gap-3 bg-rescnt-black text-rescnt-white px-8 py-4 rounded-full font-heading font-bold uppercase tracking-widest text-xs hover:bg-rescnt-gray-dark transition-all active:scale-95">
                                    <span className="relative z-10">{newsItems[currentIndex].buttonText}</span>
                                    <ArrowUpRight size={16} strokeWidth={2} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-6 mt-12">
                        <button
                            onClick={prevSlide}
                            className="p-3 border border-rescnt-gray-medium rounded-full hover:border-rescnt-black hover:bg-rescnt-black hover:text-rescnt-white transition-all"
                            aria-label="Previous News"
                        >
                            <ChevronLeft size={20} strokeWidth={1} />
                        </button>

                        <div className="flex gap-2">
                            {newsItems.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-rescnt-black w-8' : 'bg-rescnt-gray-medium'}`}
                                    aria-label={`Go to news ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-3 border border-rescnt-gray-medium rounded-full hover:border-rescnt-black hover:bg-rescnt-black hover:text-rescnt-white transition-all"
                            aria-label="Next News"
                        >
                            <ChevronRight size={20} strokeWidth={1} />
                        </button>
                    </div>
                </div>

                {/* Right Column: Aesthetic Image Slider */}
                <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] overflow-hidden bg-rescnt-gray-light">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex}
                            src={newsItems[currentIndex].image}
                            alt={newsItems[currentIndex].title}
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
                </div>

            </div>
        </section>
    );
};

export default NewsCarousel;
