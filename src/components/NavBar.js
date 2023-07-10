import React from 'react'
import logo from './PortfolioLogo.png'

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="logo" style={{ height: '75px', width: '100px' }} /> 
      </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick={() => setCurrentPage('About')}>About Me<span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => setCurrentPage('Portfolio')}>Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => setCurrentPage('Contact')}>Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => setCurrentPage('Resume')}>Resume</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar