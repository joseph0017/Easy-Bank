import React from 'react'
import desktop from '../images/bg-intro-desktop.svg'
import mobile from '../images/image-mockups.png'

const Section = () => {
    return (
        <div className="section-main">
        <div className = "section" >
            <div className="section-text">
                <h1> Next generation digital banking </h1>
            
            Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.

            <button className = "request-button" >Request Invite</button>
            
            </div>
            <div className="section-background">
                <img src={desktop} alt="intro" className="desktop" />
                <img src={mobile} alt="intro" className="phone" />
            </div>
        </div>
        </div>
    )
}

export default Section
