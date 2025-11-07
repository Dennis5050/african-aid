import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6 py-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg"
        >
           Bringing Hope and Dignity to Africa’s Communities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow"
        >
          Across Africa, millions struggle for access to clean water, food, shelter, and education.  
  Together, we can change lives — one community at a time.
        </motion.p>

        <motion.a
          href="#donate"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-4 rounded-xl font-bold shadow-xl shadow-red-800/50 uppercase tracking-wider"
        >
          Donate Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
