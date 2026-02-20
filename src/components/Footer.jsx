import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-rescnt-white border-t border-rescnt-gray-medium pt-24 pb-12 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">

                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <h2 className="font-heading font-black tracking-[0.2em] text-2xl text-rescnt-black mb-6">RESCNT</h2>
                    <p className="text-rescnt-gray-dark font-sans text-sm max-w-xs leading-relaxed">
                        Redefining the modern fragrance wardrobe. Minimalist approach, maximalist scent profiles.
                    </p>
                </div>

                {/* Links Columns */}
                <div className="col-span-1">
                    <h4 className="font-heading font-bold text-rescnt-black text-xs uppercase tracking-widest mb-6">Explore</h4>
                    <ul className="space-y-4 font-sans text-sm text-rescnt-gray-dark">
                        <li><a href="#" className="hover:text-rescnt-black transition-colors">All Fragrances</a></li>
                        <li><a href="#" className="hover:text-rescnt-black transition-colors">Discovery Sets</a></li>
                        <li><a href="#" className="hover:text-rescnt-black transition-colors">About the Lab</a></li>
                        <li><a href="#" className="hover:text-rescnt-black transition-colors">Journal</a></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h4 className="font-heading font-bold text-rescnt-black text-xs uppercase tracking-widest mb-6">Support</h4>
                    <ul className="space-y-4 font-sans text-sm text-rescnt-gray-dark">
                        <li><a href="#" className="hover:text-rescnt-black transition-colors">FAQ</a></li>
                        <li><a href="#" className="hover:text-rescnt-black transition-colors">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-rescnt-black transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-rescnt-black transition-colors">Track Order</a></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="col-span-1 md:col-span-1">
                    <h4 className="font-heading font-bold text-rescnt-black text-xs uppercase tracking-widest mb-6">Stay Informed</h4>
                    <p className="font-sans text-sm text-rescnt-gray-dark mb-4">Subscribe for early access to new releases.</p>
                    <form className="flex border-b border-rescnt-gray-dark pb-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-transparent focus:outline-none font-sans text-sm placeholder-rescnt-gray-dark text-rescnt-black"
                            required
                        />
                        <button type="submit" className="font-heading font-bold text-xs uppercase tracking-widest text-rescnt-black hover:text-rescnt-gray-dark transition-colors px-2">
                            Submit
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-rescnt-gray-dark font-sans border-t border-rescnt-gray-light pt-8">
                <p>&copy; {new Date().getFullYear()} RESCNT. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-rescnt-black transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-rescnt-black transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
