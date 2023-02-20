import React from 'react';
import { useState } from 'react';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='Navbar'>
      <Link to='/'><img className='logo' src='/logo1.jpg' alt='logo' onClick={closeMobileMenu}></img></Link>
      <div className='nav-left'>
        <ul className={click ? 'nav-list active' : 'nav-list'}>
          <li><NavLink to='/' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>Home</NavLink></li>
          <li><NavLink to='about' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>About</NavLink></li>
          <li><NavLink to='poems' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>Poems</NavLink></li>
          <li><NavLink to='projects' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>Projects</NavLink></li>
          <li><NavLink to='contact' className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>Contact</NavLink></li>
        </ul> 
        <div className='menu-icon' onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
        </div>     
      </div>
    </nav>

  )
}
//https://www.youtube.com/watch?v=23BHwAFIZmk 15:00
export default Navbar
