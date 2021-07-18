import React, { useState } from 'react';
import './contact.scss';
import DarkCircle from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import Canada from '../../assets/shared/desktop/illustration-canada.svg';
import Australia from '../../assets/shared/desktop/illustration-australia.svg';
import UnitedKingdom from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import Error from '../../assets/contact/desktop/icon-error.svg';

function Contact() {
    const [errorTextName, setErrorTextName] = useState("error-text-initialized");
    const [errorTextEmail, setErrorTextEmail] = useState("error-text-initialized");
    const [errorTextPhone, setErrorTextPhone] = useState("error-text-initialized");
    const [errorTextMessage, setErrorTextMessage] = useState("error-text-initialized");
    {/* */}
    const [inputName, setInputName] = useState("input-initialized");
    const [inputEmail, setInputEmail] = useState("input-initialized");
    const [inputPhone, setInputPhone] = useState("input-initialized");
    const [inputMessage, setInputMessage] = useState("input-initialized");

    const toggleNameError = () => {
        setErrorTextName("error-text");
        setInputName("input-error");
    }

    const toggleEmailError = () => {
        setErrorTextEmail("error-text");
        setInputEmail("input-error");
    }

    const togglePhoneError = () => {
        setErrorTextPhone("error-text");
        setInputPhone("input-error");
    }

    const toggleMessageError = () => {
        setErrorTextMessage("error-text");
        setInputMessage("input-error");
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
                <input className={inputName} type="text" name="name" placeholder="Name" required onClick={toggleNameError}></input>
                <span class={errorTextName}></span>
                </div>
                <div className="input-container">
                <input className={inputEmail} type="text" name="email" placeholder="Email" required onClick={toggleEmailError}></input>
                <span class={errorTextEmail}></span>
                </div>
                <div className="input-container">
                <input className={inputPhone} type="tel" name="phone" placeholder="Phone" required onClick={togglePhoneError}></input>
                <span class={errorTextPhone}></span>
                </div>
                <div className="input-container">
                <input className={inputMessage} type="text" name="text" placeholder="Message" required onClick={toggleMessageError}></input>
                <span class={errorTextMessage}></span>
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
