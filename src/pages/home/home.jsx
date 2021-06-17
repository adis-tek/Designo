import React from 'react';
import './home.scss';
import phone from '../../assets/home/desktop/image-hero-phone.png';
import darkCircle from '../../assets/home/desktop/bg-pattern-hero-home.svg';
import passionate from '../../assets/home/desktop/illustration-passionate.svg';
import resourceful from '../../assets/home/desktop/illustration-resourceful.svg';
import friendly from '../../assets/home/desktop/illustration-friendly.svg';
import CTACircles from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';
import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';

function home() {
    return (
        <>
    <div className="home-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        
        <title>Designo Agency</title>
        </head>
            <body className="home-body">
            <div className="home-banner">
            <img src={phone} alt="iPhone" className="iphone" />
            <img src={darkCircle} alt="Dark Circle" className="dark-circle" />
            <div className="text-container">
            <h1 className="banner-header">Award-winning custom designs and digital branding solutions</h1>
            <p className="banner-description">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
            and engaging brand experiences. Find out more about our services.</p>
            <button className="banner-button"><h4 className="button-text">LEARN MORE</h4></button>
            </div>
            </div>

            <div className="white-space"></div>

            <div className="page-images-container">

            <div className="web-design">
            <div className="image-text-container">
            <h1 className="image-text">Web Design</h1>
            <h3 className="image-text">View Projects <img src={rightArrow} /></h3>
            </div>
            </div>
            
            <div className="app_and-graphic-container">
            <div className="app-design">
            <div className="image-text-container">
            <h1 className="image-text">App Design</h1>
            <h3 className="image-text">View Projects <img src={rightArrow} /></h3>
            </div>
            </div>
            
            <div className="graphic-design">
            <div className="image-text-container">
            <h1 className="image-text">Graphic Design</h1>
            <h3 className="image-text">View Projects <img src={rightArrow} /></h3>
            </div>
            </div>
            </div>

            </div>
            
            <div className="image-section-container">

            <div className="section">
            <div className="designer-container">
            <img src={darkCircle} alt="Dark Circle" className="circle1" />
            <img src={passionate} alt="Designer At Work" className="section-image" />
            </div>
            <div className="section-text-container">
            <h3 className="header">PASSIONATE</h3>
            <p className="description">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
            art, design, and technology into exciting new solutions.</p>
            </div>
            </div>
            
            <div className="section">
            <div className="designer-container">
            <img src={darkCircle} alt="Dark Circle" className="circle2" />
            <img src={resourceful} alt="Designer At Work" className="section-image" />
            </div>
            <div className="section-text-container">
            <h3 className="header">RESOURCEFUL</h3>
            <p className="description">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
            collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
            </div>
            </div>
            
            <div className="section">
            <div className="designer-container">
            <img src={darkCircle} alt="Dark Circle" className="circle3" />
            <img src={friendly} alt="Designer At Work" className="section-image" />
            </div>
            <div className="section-text-container">
            <h3 className="header">FRIENDLY</h3>
            <p className="description">We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
            strive to give them the best experience a company can provide.</p>
            </div>
            </div>

            </div>

            <div className="bottom-banner">
            <div className="banner-text-container">
            <h1 className="banner-heading">Let’s talk about your project</h1>
            <p className="banner-description">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <button className="banner-button">
            <h3 className="button-text">GET IN TOUCH</h3>
            </button>
            <div className="circles-container">
            <img src={CTACircles} alt="circles" className="cta-banner-circles" />
            </div>
            </div>
            
            Our company
            Locations
            Contact
            
            Designo Central Office
            3886 Wellington Street
            Toronto, Ontario M9C 3J5
            
            Contact Us (Central Office)
            P : +1 253-863-8967
            M : contact@designo.co
            </body>
    </div>
</>
    )
}

export default home;
