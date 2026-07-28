import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import StatsBanner from "./components/StatsBanner";
import ServiceIcons from "./components/ServiceIcons";
import ExpertSolutions from "./components/ExpertSolutions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
        <StatsBanner />
        <ServiceIcons />
        <ExpertSolutions />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
