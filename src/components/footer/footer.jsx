import React from 'react';
import './footer.scss';
import { NavLink } from 'react-router-dom';
import CTACircles from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';
import Logo from '../../assets/shared/desktop/logo-light.png';
import Facebook from '../../assets/shared/desktop/icon-facebook.svg';
import YouTube from '../../assets/shared/desktop/icon-youtube.svg';
import Twitter from '../../assets/shared/desktop/icon-twitter.svg';
import Pintrest from '../../assets/shared/desktop/icon-pinterest.svg';
import Instagram from '../../assets/shared/desktop/icon-instagram.svg';

function Footer() {
    return (
<>
<div className="footer-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        
        <title>Designo Agency</title>
        </head>
        <div className="bottom-banner">
            <div className="banner-text-container">
            <h1 className="banner-heading">Let’s talk about your project</h1>
            <p className="banner-description">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <button className="banner-button">
            <NavLink className="cta-link" to="/contact">
            <h3 className="button-text">GET IN TOUCH</h3>
            </NavLink>
            </button>
            <div className="circles-container">
            <img src={CTACircles} alt="circles" className="cta-banner-circles" />
            </div>
        </div>
            <body className="footer-body">
        <div className="footer">
            <div className="top-footer">
                <img src={Logo} alt="Designo Logo" className="footer-logo" />
                <div className="footer-hr-md" />
                <ul className="links-container">
                    <NavLink to="/about">
                    <li className="link">OUR COMPANY</li>
                    </NavLink>
                    <NavLink to="/locations">
                    <li className="link">LOCATION</li>
                    </NavLink>
                    <NavLink to="/contact">
                    <li className="link">CONTACT</li>
                    </NavLink>
                </ul>
            </div>
            <div className="footer-hr" />
            <div className="bottom-footer">
                <div className="sub-container">
                    <div className="sub-text">
                        <h3 className="header">Designo Central Office</h3>
                        <p className="paragraph">3886 Wellington Street</p>
                        <p className="paragraph">Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="sub-text">
                        <h3 className="header">Contact Us (Central Office)</h3>
                        <p className="paragraph">P : +1 253-863-8967</p>
                        <p className="paragraph">M : contact@designo.co</p>
                    </div>
                </div>
                <div className="social-media-container">
                    <div className="icon-container">
                        <img src={Facebook} alt="Facebook Icon" className="icon" />
                        <img src={YouTube} alt="YouTube Icon" className="icon" />
                        <img src={Twitter} alt="Twitter Icon" className="icon" />
                        <img src={Pintrest} alt="Pinterest Icon" className="icon" />
                        <img src={Instagram} alt="Instagram Icon" className="icon" />
                    </div>
                </div>
            </div>

            </div>

            </body>
            </div>
</>
    )
}

export default Footer;
