import React from 'react'
import Navbar from './sections/navbar/Navbar'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import Skills from './sections/skills/Skills'
import FAQ from './sections/faqs/FAQ'
import Contact from './sections/contacts/Contact'
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={About} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/portfolio' Component={Portfolio} />
        </Routes>
      </Router>
      
      <Skills />
      <Services/>
      <FAQ/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}

export default App