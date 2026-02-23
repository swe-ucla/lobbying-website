import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar(){
    return (
        <header className='nav_bar'>
            <nav className='nav'>
                <ul>
                <li className='home'><Link to="/">Home</Link></li>
                <li className='about_us'><Link to="/about">About Us</Link></li>
                <li className='our_impact'><Link to="/bill_gallery">Our Impact (Bill Gallery)</Link></li>
                <li className='events'><Link to="/events">Events</Link></li>
                <li className='contact'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar
