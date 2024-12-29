import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav () {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Nav