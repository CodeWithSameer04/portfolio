import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './pages/Project'
import Footer from './components/Footer'
import Skills from './components/Skills'
import CallToAction from './components/CallToAction'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
