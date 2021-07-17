import React, { useState } from 'react';
import './contact.scss';
import DarkCircle from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import Canada from '../../assets/shared/desktop/illustration-canada.svg';
import Australia from '../../assets/shared/desktop/illustration-australia.svg';
import UnitedKingdom from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import Error from '../../assets/contact/desktop/icon-error.svg';

function Contact() {
    const [errorTextClass, setErrorTextClass] = useState("error-text-initialized");

    const toggleNameError = () => {
        setErrorTextClass("error-text");
    }

    const toggleEmailError = () => {
        setErrorTextClass("error-text");
    }

    const togglePhoneError = () => {
        setErrorTextClass("error-text");
    }

    const toggleMessageError = () => {
        setErrorTextClass("error-text");
    }

    return (
<>
<div className="contact-container">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
    
    <title>Contact Us</title>
    </head>
    <body className="contact-body">

        <div className="form-container">
            <div className="text-container">
                <img src={DarkCircle} alt="Dark Circle" className="form-image" />
                <h1 className="heading">Contact Us</h1>
                <p className="description">Ready to take it to the next level? Let’s talk about your project or idea and find out how 
                we can help your business grow. If you are looking for unique digital experiences that’s 
                relatable to your users, drop us a line.</p>
            </div>
            <div className="form-outer">
            <div className="form-inner">
            <form className="form">
                <div className="input-container">
                <input className="name-input" type="text" name="name" placeholder="Name" required onClick={toggleNameError}></input>
                <span class={errorTextClass}></span>
                </div>
                <div className="input-container">
                <input className="email-input" type="text" name="email" placeholder="Email" required onClick={toggleEmailError}></input>
                <span class="error-text"></span>
                </div>
                <div className="input-container">
                <input className="phone-input" type="tel" name="phone" placeholder="Phone" required onClick={togglePhoneError}></input>
                <span class="error-text"></span>
                </div>
                <div className="input-container">
                <input className="message-input" type="text" name="text" placeholder="Message" required onClick={toggleMessageError}></input>
                <span class="error-text"></span>
                </div>
                <button className="banner-button">
                    <h3 className="button-text" type="submit">SUBMIT</h3>
                </button>
            </form>
            </div>
        </div>
    </div>

    <div className="image-section-container">

    <div className="section">
    <div className="designer-container">
    <img src={DarkCircle} alt="Dark Circle" className="circle1" />
    <img src={Canada} alt="Designer At Work" className="section-image" />
    </div>
    <h3 className="header">CANADA</h3>
    <button className="banner-button">
        <h3 className="button-text">SEE LOCATION</h3>
    </button>
    </div>

    <div className="section">
    <div className="designer-container">
    <img src={DarkCircle} alt="Dark Circle" className="circle2" />
    <img src={Australia} alt="Designer At Work" className="section-image" />
    </div>
    <h3 className="header">AUSTRALIA</h3>
    <button className="banner-button">
        <h3 className="button-text">SEE LOCATION</h3>
    </button>
    </div>

    <div className="section">
    <div className="designer-container">
    <img src={DarkCircle} alt="Dark Circle" className="circle3" />
    <img src={UnitedKingdom} alt="Designer At Work" className="section-image" />
    </div>
    <h3 className="header">UNITED KINGDOM</h3>
    <button className="banner-button">
        <h3 className="button-text">SEE LOCATION</h3>
    </button>
    </div>

    </div>
    </body>
</div>
</>
    )
}

export default Contact;
