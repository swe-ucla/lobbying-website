import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar(){
    return (
        <header className='nav_bar'>
            <nav className='nav'>
                <ul>
                <li className='logo'>
                    <NavLink to="/" aria-label="Home">
                        <img src="/assets/new_lobbying_logo.svg" alt="Lobbying logo" className="nav-logo" />
                    </NavLink>
                </li>
                <li className='home'>
                    <NavLink to="/" end className="nav_link">
                        Home
                    </NavLink>
                </li>
                <li className='about_us'>
                    <NavLink to="/about" className="nav_link">
                        About Us
                    </NavLink>
                </li>
                <li className='our_impact'>
                    <NavLink to="/bill_gallery" className="nav_link">
                        Our Impact
                    </NavLink>
                </li>
                <li className='events'>
                    <NavLink to="/events" className="nav_link">
                        Events
                    </NavLink>
                </li>
                <li className='contact'>
                    <NavLink to="/contact" className="nav_link">
                        Contact
                    </NavLink>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar
