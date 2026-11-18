import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - padding;
    window.scrollTo({ top, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
    els.forEach((el) => el.classList.add('in'));
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <Experience />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
