import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className="showcase">
        <div className="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
          <Link to="/" className="btn-header btn-rounded">
            Sign In
          </Link>
        </div>
        <div className="showcase-content">
          <h1>Unlimited Tv & Movie Shows</h1>
          <p>Watch Anytime & Anywhere</p>
          <Link to="/netflix-show-content" className="btn-header btn-xl">
            Watch with 30 days free trail
            <i className="fa fa-chevron-right btn-icon"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header