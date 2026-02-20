import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComboCarousel from './components/ComboCarousel';
import ShopGrid from './components/ShopGrid';
import NewsCarousel from './components/NewsCarousel';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen bg-rescnt-white text-rescnt-black font-sans selection:bg-rescnt-black selection:text-rescnt-white">
      <Navbar />

      <main>
        {/* Generous whitespace between sections is handled within the components themselves (e.g., py-32) */}
        <Hero />
        <ComboCarousel />
        <ShopGrid />
        <NewsCarousel />
      </main>

      <Footer />
    </div>
  );
}

export default App;
