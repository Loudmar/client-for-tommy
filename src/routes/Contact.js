import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaRegEnvelope,
  FaRegCommentAlt,
  FaNewspaper,
  FaFacebook,
  FaInstagram,
  FaGlasses
} from "react-icons/fa";
import './Contact.css';

function Contact() {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataInput = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value
    }
    alert("tadaaa!: \n" + JSON.stringify(dataInput) + "Your data 😎")
  }

  return (
    <div className='contact contact-bg'>
      <div className="contact-container">
        <h2>Contact me</h2>
        <p>If you would like to get in touch, please e-mail me below, or alternatevely via my social media. Links also below. </p>
        <div className="contact-social">
          <a target="_blank" href="https://facebook.com/tommy.bento.7/"><FaFacebook /></a>
          <a target="_blank" href="https://www.instagram.com/tommybento/"><FaInstagram /></a>
        </div>
        <div className="form-container">
          <form action="" onSubmit={handleSubmit} className="form" id="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter your full name" 
                id="name" 
                name="name" 
                minlength="3" 
                tabIndex="1"
                ref={nameRef}
                required 
              />
                <FaUser />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                className="form-input" 
                placeholder="Enter your email" 
                id="email" 
                name="email" 
                tabIndex="2"
                ref={emailRef}
                required 
              />
                <FaRegEnvelope />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                id="subject" 
                name="subject" 
                placeholder="Subject" 
                tabIndex="3"
                ref={subjectRef}
                required 
              />
                <FaNewspaper />
            </div>
            <div className="form-group">
              <textarea 
                required 
                className="form-input form-textarea" 
                id="message" 
                name="message"
                placeholder="How may I help you?" 
                minlength="15"
                tabIndex="4"
                ref={messageRef}
              >            
              </textarea>
              <FaRegCommentAlt />  
            </div>
            <div className="form-group buttons">
              <button type="submit" className="btn btn-primary">
                SEND
              </button>
              <button type="reset" className="btn btn-primary">
                CANCEL
              </button>                 
            </div>
          </form>
        </div>
        <div className='contact-admin'>
        <a href='login'><FaGlasses /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
