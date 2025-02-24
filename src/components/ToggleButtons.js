import React, { useState, useEffect } from 'react';
import './ToggleButtons.css';

const ToggleButtons = () => {
    const [active, setActive] = useState('light');

    useEffect(() => {
        document.documentElement.className = active === 'light' ? 'light-theme' : 'dark-theme';
    }, [active]);

    return (
        <div className="toggle-buttons">
            <button className={active === 'light' ? 'active' : ''} onClick={() => setActive('light')}>Light</button>
            <button className={active === 'dark' ? 'active' : ''} onClick={() => setActive('dark')}>Dark</button>
        </div>
    );
};

export default ToggleButtons;