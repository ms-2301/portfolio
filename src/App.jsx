import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PebbleGate from "./components/PebbleGate"; 


export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [started, setStarted] = useState(false);

  if (!unlocked) {
    return <PebbleGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
