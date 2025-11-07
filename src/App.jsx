// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ImpactSection from "./components/Impact.jsx";
import DonateSection from "./components/Donate.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./components/AboutPage.jsx";
import StruggleGallery from "./components/StruggleGallery.jsx";
import TeamSection from "./components/Team.jsx";
import GetInvolved from "./components/GetInvolved.jsx";

import useSmoothScroll from "./hooks/useSmoothScroll.js"; // ✅ smooth scroll hook

function App() {
  useSmoothScroll(); // enable smooth scrolling

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        <ImpactSection />
        <StruggleGallery />
        <AboutPage />
        <TeamSection />
        <GetInvolved />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
