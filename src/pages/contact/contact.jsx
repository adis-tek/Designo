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
    {/* */}
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");
    {/* */}
    // const [nameValue, setNameValue] = useState(name.value.trim());
    // const [emailValue, setEmailValue] = useState(email.value.trim());
    // const [phoneValue, setPhoneValue] = useState(phone.value.trim());
    // const [textValue, setTextValue] = useState(text.value.trim());
    const [formJson, setFormJson] = useState({
        Name: {name},
        Email: {email},
        Phone: {phone},
        Message: {text},
    })

    setTimeout(() => {
        const formData = JSON.parse(localStorage.getItem("form"));

        console.log(formData);
    }, 300);

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
        setErrorTextMessage("error-text-message");
        setInputMessage("input-error");
    }

    const isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    // const handleForminput = (e) => {
    //     switch (e.target.id) {
    //         case ("name") :
    //             setName(e.target.value);
    //             break;
    //         case ("email") :
    //             setEmail(e.target.value);
    //             break;
    //         case ("phone") :
    //             setPhone(e.target.value);
    //             break;
    //         case ("text") :
    //             setText(e.target.value);
    //             break;
    //     }
    // }

    const checkInputs = (e) => { 
        e.preventDefault();

        let formChecks = 0;


        if (name === "") {
            console.log("Name Error");
        } else {
            formChecks++;
        }
        if (email === "") {
            console.log("Email Error");
        } else {
            formChecks++;
        }
        if (phone === "") {
            console.log("Phone Error");
        } else {
            formChecks++;
        }
        if (text === "") {
            console.log("Text Error");
        } else {
            formChecks++;
        }

        if (formChecks === 4) {
            console.log("Form Check Verified")
            return true;
        }

        // if ()
    // window.onbeforeunload = function() {
    //     localStorage.setItem("form", JSON.stringify({formJson}));
    // }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = checkInputs();
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
            <form className="form" onSubmit={onSubmit}>
                <div className="input-container">
                <input className={inputName} type="text" id="name" name="name" placeholder="Name" required onChange={(e) => {setName(e.target.value)}} onClick={toggleNameError}></input>
                <span class={errorTextName}></span>
                </div>
                <div className="input-container">
                <input className={inputEmail} type="text" id="email" name="email" placeholder="Email" required onChange={(e) => {setEmail(e.target.value)}} onClick={toggleEmailError}></input>
                <span class={errorTextEmail}></span>
                </div>
                <div className="input-container">
                <input className={inputPhone} type="tel" id="phone" name="phone" placeholder="Phone" required onChange={(e) => {setPhone(e.target.value)}} onClick={togglePhoneError}></input>
                <span class={errorTextPhone}></span>
                </div>
                <div className="input-container">
                <textarea className={inputMessage} type="text" id="text" name="text" placeholder="Message" required onChange={(e) => {setText(e.target.value)}} onClick={toggleMessageError}></textarea>
                <span class={errorTextMessage}></span>
                </div>
                <button className="banner-button">
                    <h3 className="button-text" onClick={checkInputs}>SUBMIT</h3>
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
