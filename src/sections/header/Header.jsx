import React from 'react';
import './header.css';
import pImage from '../../portfolio.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';


function Header() {
    return (
        <section id="about">
            <img src={pImage} alt=""/>
            <div className="about_content">

                <h1 className='name'>Ryan Vreeke</h1>
                <ul className="media_links">
                    <li>
                        <a href="https://www.github.com/Ryan-Vreeke"><FontAwesomeIcon icon={faGithub}
                                className='awesome_icon'/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ryan-vreeke-b2071815a/"><FontAwesomeIcon icon={faLinkedin}
                                className='awesome_icon'/></a>
                    </li>
                </ul>
                <div>
                    <a className='about_btns'>Resume</a>
                    <a className='about_btns' href='#contact'>Contact</a>
                </div>
            </div>

        </section>
    )
}

export default Header
