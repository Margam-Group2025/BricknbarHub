import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'                                                                                                                                                                                                                                                                                               
import WhyChoose from './components/WhyChoose'
import PlatformSection from './components/PlatfromSection'
import Process from './components/Process'
import BrandSection from './components/BrandSection'
import Footer from './components/Footer'
import Contact from './components/Contact'

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
        <BrandSection/>
        <Process/>
        <Contact />
      </section>
      
      {/* Add a placeholder for contact if needed */}
      <section id="contact" className="py-20 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to build with BricknBar?
        </h2>
        <a 
          href="mailto:info@bricknbar.com" 
          className="inline-block bg-orange-600 text-white mt-5 px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
    <Footer/>
    </main>
  )
}
export default App