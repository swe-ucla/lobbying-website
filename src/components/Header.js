import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
    return (
        <div className='header'>
            <img src="/assets/swe_lobbying_logo.png" className="header_logo" />
            <h1>SWE Lobbying Committee</h1>
        </div>
    )
}

export default Header
