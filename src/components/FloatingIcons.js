import React from 'react';
import './FloatingIcons.css';

const FloatingIcons = () => {
    return (
        <div className="floating-icons">
            {[...Array(20)].map((_, i) => (
                <div key={`left-${i}`} className="icon left" style={{ top: `${i * 50}vh` }}></div>
            ))}
            {[...Array(20)].map((_, i) => (
                <div key={`right-${i}`} className="icon right" style={{ top: `${i * 50}vh` }}></div>
            ))}
        </div>
    );
};

export default FloatingIcons;