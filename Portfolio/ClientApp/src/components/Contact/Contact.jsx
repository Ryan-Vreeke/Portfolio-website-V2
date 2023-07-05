import React from 'react'
import { useState } from 'react'
import './contact.css'

function Contact() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', nameValue, '\t email: ', emailValue);
  }

  return (
    <section id='#contact'>
      <div className="contact_container">
        <div id="left"><h1 className='section_title'>Contact Me</h1></div>
        <form onSubmit={handleSubmit} id='right'>
          <label htmlFor='nameField'>Name:</label>
          <input type="text" value={nameValue} onChange={handleNameChange} id='nameField' />
          <label htmlFor='emailField'>Email:</label>
          <input type="text" value={emailValue} onChange={handleEmailChange} id='emailField' />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
