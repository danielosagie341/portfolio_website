import React, { useState, useEffect } from 'react';
import '../index.css';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('dark'); 

    useEffect(() => {
        document.documentElement.className = theme + '-mode';
    }, [theme]);

    return (
        <div className="theme-switcher">
            <div>
                <button
                onClick={() => setTheme('light')}
                className={`themeBtn btn-light ${theme === 'light' ? 'active' : ''}`}
            >
                </button>
                Light
            </div>
            
            <div>
                <button
                    onClick={() => setTheme('dark')}
                    className={`themeBtn btn-dark ${theme === 'dark' ? 'active' : ''}`}
                >
                </button>
                Dark
            </div>
            
            <div>
                <button
                onClick={() => setTheme('extra')}
                className={`themeBtn btn-extra ${theme === 'extra' ? 'active' : ''}`}
            >
                </button>
                Warm
            </div>
        </div>
    );
};

export default ThemeSwitcher;
