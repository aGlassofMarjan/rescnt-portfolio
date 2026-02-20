import React from 'react';

const ShopGrid = () => {
    const products = [
        {
            id: 1,
            name: "L'Avenir",
            description: "Crisp, Bergamot, Vetiver",
            price: "$120",
            image: "/images/bottle_perfume_aventus.jpg",
            span: "md:col-span-2 md:row-span-2", // Large feature card
            tag: "Bestseller"
        },
        {
            id: 2,
            name: "Oud Noir",
            description: "Deep Wood, Smoke, Leather",
            price: "$145",
            image: "/images/perfume_bottle_1.jpg",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            id: 3,
            name: "Santal 33",
            description: "Sandalwood, Cardamom, Iris",
            price: "$135",
            image: "/images/perfume_bottle_2.jpg",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            id: 4,
            name: "The Discovery Set",
            description: "Explore the full collection",
            price: "$45",
            image: "/images/three_bottle_showcase.jpg",
            span: "md:col-span-2 md:row-span-2",
        },
        {
            id: 5,
            name: "Better Half.",
            description: "Kinetic duality in motion",
            price: "$160",
            image: "/images/better-half-perfume.gif",
            span: "md:col-span-1 md:row-span-2",
        }
    ];

    return (
        <section id="shop" className="w-full bg-rescnt-white py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl text-rescnt-black mb-4">CURATED ESSENTIALS</h2>
                    <p className="text-rescnt-gray-dark font-sans max-w-md text-sm md:text-base">Discover our signature blends, crafted for the modern individual who appreciates the space between notes.</p>
                </div>

                {/* Masonry-Style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`group relative overflow-hidden bg-rescnt-gray-light rounded-none cursor-pointer ${product.span}`}
                        >
                            {/* Product Image */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Optional Tag */}
                            {product.tag && (
                                <div className="absolute top-4 left-4 bg-rescnt-white text-rescnt-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-20">
                                    {product.tag}
                                </div>
                            )}

                            {/* Scrim/Overlay for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                            {/* Product Details (Hidden by default, shown on hover/always visible on mobile optionally, doing always visible clean style here) */}
                            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex justify-between items-end z-20">
                                <div>
                                    <h3 className="text-rescnt-white text-lg md:text-2xl font-bold uppercase tracking-tight mb-1">{product.name}</h3>
                                    <p className="text-rescnt-gray-light text-xs md:text-sm font-sans">{product.description}</p>
                                </div>
                                <div className="text-rescnt-white font-heading font-bold text-base md:text-lg">
                                    {product.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-4 text-center border-rescnt-gray-medium pt-4">
                    <button className="text-rescnt-black border-b border-rescnt-black pb-1 hover:text-rescnt-gray-dark hover:border-rescnt-gray-dark transition-colors font-heading tracking-widest uppercase text-sm font-bold">
                        View Full Collection
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ShopGrid;
