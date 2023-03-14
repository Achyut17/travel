import React, { useState } from 'react'
import './navbar.css'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import AppsIcon from '@mui/icons-material/Apps';

const Navbar = () => {
  const [active, setActive] = useState('navbar')

  const showNav = () => {
    setActive('navbar activeNavbar')
  }
  const removeNav = () => {
    setActive('navbar')
  }
  return (
    <section className='navBarsection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='/' className='logo flex'>
            <h1><TravelExploreIcon sx={{fontSize:'25px',color:'hsl(199, 100%, 33%)',transform: 'translateY(5px)'}}/>Travel</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#home" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#packages" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#shop" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#about" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#pages" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#news" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink">Contact</a>
            </li>
            <button className='btn'>
              <a href='#login'>BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <CancelRoundedIcon sx={{fontSize:'25px',cursor:'pointer'}}/>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <AppsIcon sx={{fontSize:'25px',cursor:'pointer',color:' hsl(199, 100%, 33%)',":hover":{color:' hsl(187, 85%, 43%)'}}}/>
        </div>
      </header>
    </section>
  )
}

export default Navbar