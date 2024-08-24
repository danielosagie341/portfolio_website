import React, { useState, useEffect } from 'react';
import '../index.css';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark'); 

    useEffect(() => {
        document.documentElement.className = theme + '-mode';
    }, [theme]);

    return (
        <div className="theme-switcher">
            <button
                onClick={() => setTheme('light')}
                className={`btn btn-light ${theme === 'light' ? 'active' : ''}`}
            >
                Light Mode
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`btn btn-dark ${theme === 'dark' ? 'active' : ''}`}
            >
                Dark Mode
            </button>
            <button
                onClick={() => setTheme('extra')}
                className={`btn btn-extra ${theme === 'extra' ? 'active' : ''}`}
            >
                Warm Mode
            </button>
        </div>
    );
};

export default ThemeSwitcher;
