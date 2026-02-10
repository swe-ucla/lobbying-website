import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar(){
    return (
        <header className='nav_bar'>
            <nav className='nav'>
                <ul>
                <li className='home'><Link to="/">Home</Link></li>
                <li className='about_us'><Link to="/">About Us</Link></li>
                <li className='our_impact'><Link to="/">Our Impact (Bill Gallery)</Link></li>
                <li className='events'><Link to="/events">Events</Link></li>
                <li className='resources'><Link to="/">Resources</Link></li>
                <li className='contact'><Link to="/">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar
