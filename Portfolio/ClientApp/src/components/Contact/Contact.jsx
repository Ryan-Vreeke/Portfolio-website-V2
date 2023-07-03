import React from 'react'
import { useState } from 'react'
import './contact.css'

function Contact() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', inputValue);
    }

    return (
        <section id='#contact'>
            <div className="contact_container">
                <div id="left"><h1 className='section_title'>Contact Me</h1></div>
                <form onSubmit={handleSubmit} id='right'>
                    <label htmlFor='nameField'>Name:</label>
                    <input type="text" value={inputValue} onChange={handleChange} id='nameField' />
                    <label htmlFor='emailField'>Email:</label>
                    <input type="text" value={inputValue} onChange={handleChange} id='emailField' />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact