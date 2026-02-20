import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User, Info, Grid } from 'lucide-react';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { id: 1, label: 'Shop', icon: <Grid size={16} strokeWidth={1.5} />, href: '#shop' },
        { id: 2, label: 'About', icon: <Info size={16} strokeWidth={1.5} />, href: '#about' },
        { id: 3, label: 'Account', icon: <User size={16} strokeWidth={1.5} />, href: '#' },
        { id: 4, label: 'Cart (0)', icon: <ShoppingBag size={16} strokeWidth={1.5} />, href: '#' },
    ];

    // Variants for the menu container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1, // Stagger from bottom to top
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: 1, // Stagger top to bottom when closing
            }
        }
    };

    // Variants for individual items
    const itemVariants = {
        hidden: { opacity: 0, y: 15, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
        exit: { opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.2 } }
    };

    return (
        <div className="md:hidden fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col gap-3"
                    >
                        {menuItems.slice().map((item) => (
                            <motion.a
                                key={item.id}
                                variants={itemVariants}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 bg-rescnt-white/95 backdrop-blur-md border border-rescnt-gray-medium text-rescnt-black px-5 py-3 rounded-full shadow-lg"
                            >
                                <span className="font-heading font-bold text-xs tracking-widest uppercase">{item.label}</span>
                                {item.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger FAB */}
            <button
                onClick={toggleMenu}
                className="w-14 h-14 bg-rescnt-black text-rescnt-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:bg-rescnt-gray-dark transition-colors active:scale-95 z-20"
                aria-label="Toggle Mobile Menu"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X size={24} strokeWidth={1.5} />
                        </motion.div>
                    ) : (
                        <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <Menu size={24} strokeWidth={1.5} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
};

export default MobileNav;
