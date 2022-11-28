import React from 'react'
import currency from '../images/image-currency.jpg';
import restaurant from '../images/image-restaurant.jpg';
import plane from '../images/image-plane.jpg';
import confetti from '../images/image-confetti.jpg';

const Articles = () => {
    return (
        <div className = 'mid-article'>
            <div className="latest-articles">
                <h1> Latest Articles </h1>
            </div>
            <ul className="articles">
                <div>
                    <img src = {currency} alt = "online-banking" className = "currency" />
                    <h4> By Claire Robinson </h4>
                    <h2> Receive money in any currency with no fees </h2>
                    <div>    
                    The world is getting smaller and we’re becoming more mobile. So why should you be 
                    forced to only receive money in a single …
                    </div>
                </div>
                <div>
                    <img src = {restaurant} alt = "restaurant" className = "restaurant" />
                    <h4> By Wilson Hutton </h4>
                    <h2> Treat yourself without worrying about money </h2>
                    <div>
                    Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …
                    </div>
                </div>
                <div>
                    <img src = {plane} alt = "plane" className = "plane" />
                    <h4> By Wilson Hutton </h4>
                    <h2> Take your Easybank card wherever you go </h2>
                    <div>
                    
                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …
                    </div>
                </div>
                <div>
                    <img src = {confetti} alt = "confetti" className = "confetti"/>
                    <h4> By Claire Robinson </h4>
                    <h2> Our invite-only Beta accounts are now live! </h2>
                    <div>
                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ...
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Articles
