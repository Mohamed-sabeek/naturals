import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Home, Info, BookOpen, Image as ImageIcon, Star, Mail, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/naturals-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle Scroll Transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Lock & iOS Touch Scroll Prevention
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Trap Focus / Escape Key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/#about', icon: Info },
    { name: 'Courses', href: '/#courses', icon: BookOpen },
    { name: 'Reviews', href: '/#reviews', icon: Star },
    { name: 'Contact', href: '/#contact', icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group relative z-[105]">
            <img src={logoImage} alt="Naturals Academy" className="h-12 md:h-14 lg:h-16 w-auto drop-shadow-sm transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`font-bold relative overflow-hidden group text-sm xl:text-base ${
                      scrolled ? 'text-gray-700' : 'text-gray-900 drop-shadow-sm'
                    }`}
                  >
                    <span className="group-hover:text-primary transition-colors">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-3 xl:gap-4 ml-4">
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition-all shadow-[0_4px_20px_rgb(139,92,246,0.3)] hover:shadow-[0_8px_25px_rgb(139,92,246,0.4)] hover:-translate-y-1">
                <span>Enquire Now</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden relative z-[105] p-2.5 rounded-xl transition-all ${
              mobileMenuOpen 
                ? 'bg-gray-100/50 text-gray-800' 
                : scrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/80 backdrop-blur-md text-gray-900 shadow-sm'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Premium Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] lg:hidden"
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.55)', backdropFilter: 'blur(8px)' }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.25, 0.1, 0.25, 1], duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 100 || velocity.x > 500) {
                  setMobileMenuOpen(false);
                }
              }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-white z-[100] lg:hidden shadow-[-10px_0_40px_rgba(0,0,0,0.15)] rounded-l-[32px] flex flex-col overflow-hidden"
            >
              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pt-24 pb-36 px-6">
                
                {/* Header inside drawer */}
                <div className="mb-6 flex flex-col items-center text-center">
                  <img src={logoImage} alt="Naturals Academy" className="h-12 w-auto mb-3" />
                  <p className="text-sm font-bold text-gray-900">
                    Naturals Training Academy <br />
                    <span className="text-primary font-extrabold">Pollachi</span>
                  </p>
                </div>



                {/* Menu Items */}
                <nav className="mb-8">
                  <ul className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-purple-50 text-gray-700 hover:text-primary transition-all group font-bold"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all group-hover:scale-110">
                            <link.icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                          </div>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>


                
                {/* Bottom Branding */}
                <div className="mt-8 text-center px-4">
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    Naturals Training Academy <br />
                    <a href="https://maps.app.goo.gl/ihj1S5ovwetszas3A" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      first floor, 04, palladam road, LIG Colony, <br />
                      Indra Nagar, Pollachi, Tamil Nadu 642002
                    </a> <br />
                    08460461849
                  </p>
                </div>
              </div>

              {/* Sticky Action Buttons */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-100 z-10">
                <div className="flex flex-col gap-2.5">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex justify-center items-center gap-2 w-full py-3.5 rounded-xl bg-primary text-white font-bold shadow-[0_4px_15px_rgb(139,92,246,0.3)] hover:bg-primary-hover transition-colors active:scale-[0.98]">
                    <span>Enquire Now</span>
                  </a>
                  <a href="https://wa.me/918903037766" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex justify-center items-center gap-2 w-full py-3.5 rounded-xl bg-green-50 text-green-600 font-bold hover:bg-green-100 transition-colors border border-green-100 active:scale-[0.98]">
                    <MessageCircle size={18} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
