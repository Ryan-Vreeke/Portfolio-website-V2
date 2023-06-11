import React from 'react'
import Navbar from './sections/navbar/Navbar'
import About from './sections/about/About'
import Skills from './sections/skills/Skills'
import Footer from './sections/footer/Footer'
import Header from './sections/header/Header'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './sections/projects/Projects'

const App = () => {
  return (
    <main>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={Header}/>
          <Route exact path='/about' Component={About} />
          <Route exact path='/portfolio' Component={Skills} />
        </Routes>
      </Router>
      <Skills />
      <Projects/>
      <Footer/>
    </main>
  )
}

export default App