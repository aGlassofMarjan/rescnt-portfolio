import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const WorkWithUs = () => {
    return (
        <section className="w-full bg-rescnt-white py-24 md:py-32 border-t border-rescnt-gray-medium overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

                {/* Left Column: Typography & Intentional White Space */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="max-w-md">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-heading font-black text-rescnt-black mb-6 leading-tight"
                        >
                            JOIN THE LAB.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-sans text-rescnt-gray-dark text-sm md:text-base leading-relaxed mb-10"
                        >
                            We are constantly looking for iconoclasts, noses, and creatives who believe that scent is the most intimate architecture. If you obsess over negative space as much as the notes themselves, we should talk.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="group flex items-center gap-3 bg-rescnt-black text-rescnt-white px-8 py-4 rounded-full font-heading font-bold uppercase tracking-widest text-xs hover:bg-rescnt-gray-dark transition-all active:scale-95"
                        >
                            <span>View Openings</span>
                            <ArrowUpRight size={16} strokeWidth={2} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </div>
                </div>

                {/* Right Column: Aesthetic Image */}
                <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] overflow-hidden bg-rescnt-gray-light">
                    <motion.img
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        src="/images/bottle_perfume_plank_and_leaf_setting.png"
                        alt="Rescnt Studio Environment"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </div>

            </div>
        </section>
    );
};

export default WorkWithUs;
