import React from 'react'

const Nav = () => {
  return (
    <div className= 'nav'>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#resume">Resume</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav