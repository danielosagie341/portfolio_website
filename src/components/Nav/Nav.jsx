import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';

const sections = [
  { id: 'home', label: 'Home', icon: <AiOutlineHome />, href: '#' },
  { id: 'about', label: 'About', icon: <AiOutlineUser />, href: '#about' },
  { id: 'experience', label: 'Experience', icon: <BiBook />, href: '#experience' },
  { id: 'services', label: 'Services', icon: <RiServiceLine />, href: '#services' },
  { id: 'portfolio', label: 'Portfolio', icon: <RiServiceLine />, href: '#portfolio' },
  { id: 'contact', label: 'Contact', icon: <BiMessageSquareDetail />, href: '#contact' },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'home';
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop - 80 <= scrollY) {
          current = section.id;
        }
      });
      setActiveNav(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky-navbar">
      <div className="nav-logo">
        <a href="#" aria-label="Osagie Daniel Home" className="nav-logo-link">OSAGIE DANIEL</a>
      </div>
      <div className="nav-links">
        {sections.map((section) => (
          <a
            key={section.id}
            href={section.href}
            className={activeNav === section.id ? 'active' : ''}
            aria-label={section.label}
          >
            {section.icon}
            <span className="nav-label">{section.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;