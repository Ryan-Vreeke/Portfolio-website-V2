import React from 'react';
import './header.css';
import About from '../About/About';
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects';
import RecentBlog from '../Blog/RecentBlog';
import Contact from '../Contact/Contact';


function Home() {
    return (
        <section id="home">
            <About/>
            <Skills/>
            <Projects/>
            <RecentBlog />
            <Contact />
        </section>
    )
}

export default Home
