import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>Questions ? Call - +91 AAA BBB CCC</p>
        <div className="footer-cols">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Netflix Originals</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Content</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Show List</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Jobs</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer