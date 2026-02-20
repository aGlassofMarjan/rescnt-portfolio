import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import MobileNav from './MobileNav';

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-rescnt-white/80 backdrop-blur-md border-b border-rescnt-gray-medium transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center relative">

                    {/* Left Links - Desktop (Hidden on mobile) */}
                    <div className="hidden lg:flex gap-8 text-sm tracking-widest font-heading uppercase text-rescnt-gray-dark flex-1">
                        <a href="#shop" className="hover:text-rescnt-black transition-colors">Shop</a>
                        <a href="#about" className="hover:text-rescnt-black transition-colors">About</a>
                    </div>

                    {/* Center Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <a href="#" className="font-heading font-black text-xl md:text-2xl tracking-[0.2em] text-rescnt-black">
                            RESCNT
                        </a>
                    </div>

                    {/* Right Icons (Hidden on mobile in favor of FAB) */}
                    <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
                        <button className="p-2 hover:bg-rescnt-gray-light rounded-full transition-colors hidden sm:block">
                            <User size={20} strokeWidth={1.5} />
                        </button>
                        <button className="p-2 hover:bg-rescnt-gray-light rounded-full transition-colors flex items-center gap-2">
                            <ShoppingCart size={20} strokeWidth={1.5} />
                            <span className="text-xs font-semibold bg-rescnt-black text-rescnt-white rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation FAB & Menu */}
            <MobileNav />
        </>
    );
};

export default Navbar;
