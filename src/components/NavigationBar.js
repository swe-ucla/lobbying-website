import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='nav_bar'>
            <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
                <div className="nav-top">
                    <NavLink to="/" aria-label="Home" className="logo">
                        <img src="/assets/new_lobbying_logo.svg" alt="Lobbying logo" className="nav-logo" />
                    </NavLink>
                    <button
                        type="button"
                        className="nav-toggle"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((open) => !open)}
                    >
                        <span className="nav-toggle-bar" />
                        <span className="nav-toggle-bar" />
                        <span className="nav-toggle-bar" />
                    </button>
                </div>
                <ul className="nav-links">
                <li className='home'>
                    <NavLink to="/" end className="nav_link" onClick={() => setIsOpen(false)}>
                        Home
                    </NavLink>
                </li>
                <li className='about_us'>
                    <NavLink to="/about" className="nav_link" onClick={() => setIsOpen(false)}>
                        About Us
                    </NavLink>
                </li>
                <li className='our_impact'>
                    <NavLink to="/bill_gallery" className="nav_link" onClick={() => setIsOpen(false)}>
                        Our Impact
                    </NavLink>
                </li>
                <li className='events'>
                    <NavLink to="/events" className="nav_link" onClick={() => setIsOpen(false)}>
                        Events
                    </NavLink>
                </li>
                <li className='contact'>
                    <NavLink to="/contact" className="nav_link" onClick={() => setIsOpen(false)}>
                        Contact
                    </NavLink>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar
