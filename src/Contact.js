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
                            placeholder="First Name"
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
                            placeholder="Last Name"
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
                            placeholder="email@example.com"
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
                            placeholder="(123) 456-7890"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        </div>

                        <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Type your message here..."
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
                </div>

                <div className="right-column">
                    <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6819.131921544982!2d-118.44928034074297!3d34.070376816410196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc85f05c0f65%3A0x25a993585c134837!2sUniversity%20of%20California%2C%20Los%20Angeles!5e0!3m2!1sen!2sus!4v1770659714465!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    </div>

                    <div className="info-card">
                    <div className="info-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6665 3.33325H3.33317C2.4127 3.33325 1.6665 4.07944 1.6665 4.99992V14.9999C1.6665 15.9204 2.4127 16.6666 3.33317 16.6666H16.6665C17.587 16.6666 18.3332 15.9204 18.3332 14.9999V4.99992C18.3332 4.07944 17.587 3.33325 16.6665 3.33325Z" stroke="#C10007" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.3332 5.83325L10.8582 10.5833C10.6009 10.7444 10.3034 10.8299 9.99984 10.8299C9.69624 10.8299 9.39878 10.7444 9.1415 10.5833L1.6665 5.83325" stroke="#C10007" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                        <p className="info-label">Email</p>
                        <a href="mailto:swelobbying@gmail.com">
                            swelobbying@gmail.com
                        </a>
                        </div>
                    </div>

                    <div className="info-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6668 8.33341C16.6668 12.4942 12.051 16.8276 10.501 18.1659C10.3566 18.2745 10.1808 18.3332 10.0002 18.3332C9.8195 18.3332 9.64373 18.2745 9.49933 18.1659C7.94933 16.8276 3.3335 12.4942 3.3335 8.33341C3.3335 6.5653 4.03588 4.86961 5.28612 3.61937C6.53636 2.36913 8.23205 1.66675 10.0002 1.66675C11.7683 1.66675 13.464 2.36913 14.7142 3.61937C15.9645 4.86961 16.6668 6.5653 16.6668 8.33341Z" stroke="#C10007" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z" stroke="#C10007" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                        <p className="info-label">Location</p>
                        <p>University of California, Los Angeles</p>
                        <p>Los Angeles, CA 90095</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z" stroke="#C10007" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div>
                        <p className="info-label">Phone</p>
                        <p>(310) 555-1234</p>
                        </div>
                    </div>

                    <div className="info-divider"></div>

                    <div className="follow-us">
                        <p className="info-label">Follow Us</p>
                        <div className="social-icons">
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="social-btn"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3335 6.66675C14.6596 6.66675 15.9313 7.19353 16.869 8.13121C17.8067 9.0689 18.3335 10.3407 18.3335 11.6667V17.5001H15.0002V11.6667C15.0002 11.2247 14.8246 10.8008 14.512 10.4882C14.1994 10.1757 13.7755 10.0001 13.3335 10.0001C12.8915 10.0001 12.4675 10.1757 12.155 10.4882C11.8424 10.8008 11.6668 11.2247 11.6668 11.6667V17.5001H8.3335V11.6667C8.3335 10.3407 8.86028 9.0689 9.79796 8.13121C10.7356 7.19353 12.0074 6.66675 13.3335 6.66675Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.99984 7.5H1.6665V17.5H4.99984V7.5Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.33317 5.00008C4.25365 5.00008 4.99984 4.25389 4.99984 3.33341C4.99984 2.41294 4.25365 1.66675 3.33317 1.66675C2.4127 1.66675 1.6665 2.41294 1.6665 3.33341C1.6665 4.25389 2.4127 5.00008 3.33317 5.00008Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="social-btn"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1665 1.66675H5.83317C3.53198 1.66675 1.6665 3.53223 1.6665 5.83341V14.1667C1.6665 16.4679 3.53198 18.3334 5.83317 18.3334H14.1665C16.4677 18.3334 18.3332 16.4679 18.3332 14.1667V5.83341C18.3332 3.53223 16.4677 1.66675 14.1665 1.66675Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.3333 9.47501C13.4361 10.1685 13.3176 10.8769 12.9947 11.4992C12.6718 12.1215 12.1609 12.6262 11.5346 12.9414C10.9083 13.2566 10.1986 13.3663 9.50641 13.255C8.81419 13.1436 8.17472 12.8167 7.67895 12.321C7.18318 11.8252 6.85636 11.1857 6.74497 10.4935C6.63359 9.8013 6.74331 9.09159 7.05852 8.46532C7.37374 7.83905 7.87841 7.32812 8.50074 7.00521C9.12307 6.68229 9.83138 6.56383 10.5249 6.66667C11.2324 6.77158 11.8873 7.10123 12.393 7.60693C12.8987 8.11263 13.2283 8.76757 13.3333 9.47501Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.5835 5.41675H14.5918" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>   
    )
}

export default Contact;
