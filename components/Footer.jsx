import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="navbar-background text-white p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="h5 font-weight-bold">Greenery- An Online Nursery</h2>
        <div className="d-flex">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaFacebook className="h4 mx-1" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaInstagram className="h4 mx-1" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaTwitter className="h4 mx-1" />
          </a>
        </div>
      </div>
      <p className="mt-3">&copy; 2023 Greenery. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;