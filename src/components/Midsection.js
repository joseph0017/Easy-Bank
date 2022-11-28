import React from 'react';
import OnlineBanking from '../images/icon-online.svg';
import Budgeting from '../images/icon-budgeting.svg';
import Onboarding from '../images/icon-onboarding.svg';
import Api from '../images/icon-api.svg';

const Midsection = () => {
    return (
        <div className = 'mid-section'>
            <div className="easybank">
                <h1> Why choose Easybank? </h1>
                <div className="easybank-text">
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.
                </div>
            </div>
            <ul className="mid-columns">
                <div>
                    <img src = {OnlineBanking} alt = "online-banking"/>
                    <h2> Online Banking </h2>
                    <div>
                    Our modern web and mobile applications allow you to keep track of your finances 
                    wherever you are in the world.
                    </div>
                </div>
                <div>
                    <img src = {Budgeting} alt = "online-banking"/>
                    <h2> Simple Budgeting </h2>
                    <div>
                    See exactly where your money goes each month. Receive notifications when you’re 
                    close to hitting your limits.
                    </div>
                </div>
                <div>
                    <img src = {Onboarding} alt = "online-banking"/>
                    <h2> Fast Onboarding</h2>
                    <div>
                    We don’t do branches. Open your account in minutes online and start taking control 
                    of your finances right away.
                    </div>
                </div>
                <div>
                    <img src = {Api} alt = "online-banking"/>
                    <h2> Open API </h2>
                    <div>
                    Manage your savings, investments, pension, and much more from one account. Tracking 
                    your money has never been easier.
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Midsection
