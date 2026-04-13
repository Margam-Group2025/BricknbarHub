import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import PlatformSection from './components/PlatfromSection'

function App() {
  return (
    <main className="bg-white">
      <Header />
      {/* Each component needs an ID that matches your Header links */}
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="why-us">
        <WhyChoose />
        <PlatformSection/>
      </section>
      {/* Add a placeholder for contact if needed */}
      <section id="contact" className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to build with BricknBar?</h2>
      </section>
    </main>
  )
}

export default App