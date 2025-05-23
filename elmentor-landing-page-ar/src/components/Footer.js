import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="mailto:hello@elmentor.org" className="footer-link">Contact</a>
          <a href="https://elmentor.org/join" target="_blank" rel="noopener noreferrer" className="footer-link">Join</a>
        </div>
        <div className="footer-copy">&copy; {new Date().getFullYear()} Elmentor Program</div>
      </div>
    </footer>
  );
};

export default Footer;
