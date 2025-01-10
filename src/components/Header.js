import React from 'react';
import ToggleButtons from './ToggleButtons'; // Import ToggleButtons
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="avatar-wrapper">
                <Link to = "/">
                <img src="./aruj.jpeg" alt="Your Avatar" className="avatar" />
                
                <div className="popup-dialogue">
                    Hi ! {/* Replace this with desired popup content */}
                </div>
                </Link>
            </div>
            <ToggleButtons /> {/* Add ToggleButtons here */}
            <span className="menu">☰</span>
        </header>
    );
};

export default Header;
