import React, {useState} from 'react'
import Logo  from '../images/logo.svg'
import { ReactComponent as CloseMenu } from "../images/icon-close.svg";
import { ReactComponent as MenuIcon } from "../images/icon-hamburger.svg";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav>
            <img src = {Logo} className = "logo" alt = "logo" />
            <div className= {click ? "navigation-active" : "navigation"}>
              <div className="nav-background">
                <ul className="navlinks">
                <li onClick = {closeMobileMenu} className = "home">Home</li>
                <li onClick = {closeMobileMenu} className = "about">About</li>
                <li onClick = {closeMobileMenu} className = "contact">Contact</li>
                <li onClick = {closeMobileMenu} className = "blog">Blog</li>
                <li onClick = {closeMobileMenu} className = "career">Careers </li>
                </ul>
                </div>
            </div>
            <button className = "nav-btn"> Request Invite </button>
            <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="close-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
        </nav>
    )
}

export default Navbar
