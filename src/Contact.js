import "./Contact.css";
import NavigationBar from "./components/NavigationBar";

import React, { useState } from "react";


function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thanks! Your message has been sent.');

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
    };
    
    return (
        <div className="contact-page">
            <NavigationBar />
            <section className="contact-hero-image-only">
                <img
                    src="/assets/Contact Us Hero.svg"
                    alt="Contact us hero"
                    className="contact-hero-image"
                />
            </section>
            <div className="contact-card">
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <p className="subtitle">
                        Complete the form below and send your message to us.
                    </p>

                    <form className="contact-form" onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit
                    </button>

                    </form>
                </div> 

                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6819.131921544982!2d-118.44928034074297!3d34.070376816410196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc85f05c0f65%3A0x25a993585c134837!2sUniversity%20of%20California%2C%20Los%20Angeles!5e0!3m2!1sen!2sus!4v1770659714465!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        style={{ border:0 }}
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div> 

            <footer className="contact-footer">
                <div className="footer-content">
                    <div className="footer-email">
                    <a href="mailto:lobbying.swe.ucla@gmail.com">
                        lobbying.swe.ucla@gmail.com
                    </a>
                    </div>

                    <div className="footer-icons">
                    <a href="#" aria-label="Instagram">◎</a>
                    <a href="#" aria-label="Facebook">f</a>
                    <a href="#" aria-label="LinkedIn">in</a>
                    </div>
                </div>
            </footer>

        </div>   
    )
}

export default Contact;
