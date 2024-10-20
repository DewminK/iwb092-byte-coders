// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './headerCompare.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
      <img src="/src/assets/logo.jpeg" alt="FlagX Logo" />
      </div>
      <nav className="navbar-links">
        <Link to="/">HOME</Link>
        <Link to="/brands">BRANDS</Link>
        <Link to="/compare">COMPARE</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/cart">CART</Link>
        <div className="search-container">
          <input type="text" placeholder="SEARCH" />
          <button>🔍</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
