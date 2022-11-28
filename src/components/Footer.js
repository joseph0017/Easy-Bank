import React from 'react'
import Logo  from '../images/logo.svg'
import facebook  from '../images/icon-facebook.svg'
import youtube  from '../images/icon-youtube.svg'
import twitter  from '../images/icon-twitter.svg'
import pinterest  from '../images/icon-pinterest.svg'
import instagram  from '../images/icon-instagram.svg'

const Footer = () => {
    return (
        <div className = "footer">
            <div className="socials">
            <img src = {Logo} className = "logo-social" alt = "logo" />
            <ul className = "social-media-icon">
            <img src = {facebook} className = "facebook" alt = "logo" />
            <img src = {youtube} className = "youtube" alt = "logo" />
            <img src = {twitter} className = "twitter" alt = "logo" />
            <img src = {pinterest} className = "pinterest" alt = "logo" />
            <img src = {instagram} className = "instagram" alt = "logo" />
            </ul>
            </div>
            <div className = "footer-container" >
                <ul className="footer-links">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className = "footer-container2">
                <ul className="footer-links2">
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className = "trademark">
                <button className = "btn"> Request Invite </button>
                <div className="copyright">
                © Easybank. All Rights Reserved
                </div>
            </div>
            
        </div>
    )
}

export default Footer
