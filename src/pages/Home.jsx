import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Courses from '../components/Courses';
import Reviews from '../components/Reviews';
import Highlights from '../components/Highlights';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Courses />
      <Reviews />
      <Highlights />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;
