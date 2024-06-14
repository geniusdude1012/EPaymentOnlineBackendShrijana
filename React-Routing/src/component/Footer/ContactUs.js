import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'; // Make sure to import the CSS file
import back1 from "./../assets/pic1.webp"
import back2 from "./../assets/back6.avif"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(form.current.checkValidity()) {

    emailjs
      .sendForm('service_ys281yb', 'template_cfqzsal', form.current, {
        publicKey: 'tFsAnUSN74Gsx95yj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your message has been sent successfully");
          form.current.reset();//clears the filled form data
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("There was an error sending your message.Please try again");
        },
      );
    }
    else{
      alert("PLease fill out the required fields");
    }
  };

  return (
    <div className="form-container1"  style={{  backgroundImage: `url(${back2})`, backgroundSize: 'cover' }}>
      <div className="form-content">
        <div className='photo'  style={{  backgroundImage: `url(${back1})`, backgroundSize: 'cover' }}>
        <h1>Contact Us</h1>
        <p>Feel free to drop us a line below!</p>
        </div>
        <div className="form-header">
        <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
          <label>Full Name</label>
          <input type="text" name="from_name" placeholder="Enter full name" required />
          <label>Email</label>
          <input type="email" name="from_email" placeholder="Enter valid email address" required/>
          <label>Message</label>
          <textarea name="message" placeholder="Your Comment..." required></textarea>
          <input type="submit" value="Submit" />
        </form>
        </div>
        
        
      </div>
    </div>
  );
};
