import './Footer.css';

function Footer(){
    return (
        <div className='footer'>
            <div className="footer-container">
                
                {/* About Us */}
                <div className="footer-column">
                    <div className="footer-title">About SWE Lobbying @ UCLA</div>
                    <p>
                        The Society of Women Engineers Lobbying Committee advocates for
                        legislation impacting STEM education, technology policy, and
                        women in engineering.
                    </p>
                </div>

                {/* Contact Us */}
                <div className="footer-column">
                    <div className="footer-title">Contact Us</div>
                    {/* Email */}
                    <div className="contact-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6665 3.33325H3.33317C2.4127 3.33325 1.6665 4.07944 1.6665 4.99992V14.9999C1.6665 15.9204 2.4127 16.6666 3.33317 16.6666H16.6665C17.587 16.6666 18.3332 15.9204 18.3332 14.9999V4.99992C18.3332 4.07944 17.587 3.33325 16.6665 3.33325Z" 
                                stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                            />
                            <path d="M18.3332 5.83325L10.8582 10.5833C10.6009 10.7444 10.3034 10.8299 9.99984 10.8299C9.69624 10.8299 9.39878 10.7444 9.1415 10.5833L1.6665 5.83325" 
                                stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                        <span>swelobbying@gmail.com</span>
                    </div>
                    {/* Phone Number */}
                    <div className="contact-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z" 
                                stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                        <span>(310) 555-1234</span>
                    </div>
                    {/* Location */}
                    <div className="contact-item">
                        <svg className="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6668 8.33341C16.6668 12.4942 12.051 16.8276 10.501 18.1659C10.3566 18.2745 10.1808 18.3332 10.0002 18.3332C9.8195 18.3332 9.64373 18.2745 9.49933 18.1659C7.94933 16.8276 3.3335 12.4942 3.3335 8.33341C3.3335 6.5653 4.03588 4.86961 5.28612 3.61937C6.53636 2.36913 8.23205 1.66675 10.0002 1.66675C11.7683 1.66675 13.464 2.36913 14.7142 3.61937C15.9645 4.86961 16.6668 6.5653 16.6668 8.33341Z" 
                                stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                            />
                            <path d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z" 
                                stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                        <span>UCLA, Los Angeles, CA 90095</span>
                    </div>
                </div>

                {/* Follow Us */}
                <div className="footer-column">
                <div className="footer-title">Follow Us</div>
                    <div className="social-icons">
                        {/* Linkedin */}
                        <a
                            href="https://www.linkedin.com/company/swe-ucla/"
                            aria-label="LinkedIn"
                            className="social-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3335 6.66675C14.6596 6.66675 15.9313 7.19353 16.869 8.13121C17.8067 9.0689 18.3335 10.3407 18.3335 11.6667V17.5001H15.0002V11.6667C15.0002 11.2247 14.8246 10.8008 14.512 10.4882C14.1994 10.1757 13.7755 10.0001 13.3335 10.0001C12.8915 10.0001 12.4675 10.1757 12.155 10.4882C11.8424 10.8008 11.6668 11.2247 11.6668 11.6667V17.5001H8.3335V11.6667C8.3335 10.3407 8.86028 9.0689 9.79796 8.13121C10.7356 7.19353 12.0074 6.66675 13.3335 6.66675Z" 
                                    stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                />
                                <path d="M4.99984 7.5H1.6665V17.5H4.99984V7.5Z" 
                                    stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                />
                                <path d="M3.33317 5.00008C4.25365 5.00008 4.99984 4.25389 4.99984 3.33341C4.99984 2.41294 4.25365 1.66675 3.33317 1.66675C2.4127 1.66675 1.6665 2.41294 1.6665 3.33341C1.6665 4.25389 2.4127 5.00008 3.33317 5.00008Z" 
                                    stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/uclaswelobbying?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            aria-label="Instagram"
                            className="social-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1665 1.66675H5.83317C3.53198 1.66675 1.6665 3.53223 1.6665 5.83341V14.1667C1.6665 16.4679 3.53198 18.3334 5.83317 18.3334H14.1665C16.4677 18.3334 18.3332 16.4679 18.3332 14.1667V5.83341C18.3332 3.53223 16.4677 1.66675 14.1665 1.66675Z" 
                                    stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                />
                                <path d="M13.3333 9.47501C13.4361 10.1685 13.3176 10.8769 12.9947 11.4992C12.6718 12.1215 12.1609 12.6262 11.5346 12.9414C10.9083 13.2566 10.1986 13.3663 9.50641 13.255C8.81419 13.1436 8.17472 12.8167 7.67895 12.321C7.18318 11.8252 6.85636 11.1857 6.74497 10.4935C6.63359 9.8013 6.74331 9.09159 7.05852 8.46532C7.37374 7.83905 7.87841 7.32812 8.50074 7.00521C9.12307 6.68229 9.83138 6.56383 10.5249 6.66667C11.2324 6.77158 11.8873 7.10123 12.393 7.60693C12.8987 8.11263 13.2283 8.76757 13.3333 9.47501Z" 
                                    stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                />
                                <path d="M14.5835 5.41675H14.5918" 
                                    stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/swe.ucla/"
                            aria-label="Facebook"
                            className="social-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2502 2H14.3752C13.1043 2 11.8856 2.52678 10.9869 3.46447C10.0883 4.40215 9.5835 5.67392 9.5835 7V10H6.7085V14H9.5835V22H13.4168V14H16.2918L17.2502 10H13.4168V7C13.4168 6.73478 13.5178 6.48043 13.6975 6.29289C13.8772 6.10536 14.121 6 14.3752 6H17.2502V2Z" 
                                    stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
            <p>© 2026 Society of Women Engineers Lobbying Committee. All rights reserved.</p>
            <p className="footer-quote">To invest in engineering is to invest in our students, our future.</p>
        </div>
    </div>
    )
}

export default Footer
