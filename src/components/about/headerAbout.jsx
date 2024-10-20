// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './headerAbout.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPyTtmAGS8-AUiyq7xpQxrLEau49u7mpi2LfvKHr2wOuG83kAV" alt="FlagX Logo" />
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
