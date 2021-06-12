import React from 'react';
import './home.scss';
import phone from '../../assets/home/desktop/image-hero-phone.png';
import darkCircle from '../../assets/home/desktop/bg-pattern-hero-home.svg';
import passionate from '../../assets/home/desktop/illustration-passionate.svg';
import resourceful from '../../assets/home/desktop/illustration-resourceful.svg';
import friendly from '../../assets/home/desktop/illustration-friendly.svg';

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

            <div className="page-images-container">

            <div className="web-design">
            Web Design
            View Projects
            </div>
            
            <div className="app-design">
            App Design
            View Projects
            </div>
            
            <div className="graphic-design">
            Graphic Design
            View Projects
            </div>

            </div>
            
            <div className="image-section-container">

            <div className="section">
            <img src={passionate} alt="Designer At Work" />
            <h3 className="header">Passionate</h3>
            <p className="description">Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
            art, design, and technology into exciting new solutions.</p>
            </div>
            
            <div className="section">
            <img src={resourceful} alt="Designer At Work" />
            <h3 className="header">Resourceful</h3>
            <p className="description">Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
            collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
            </div>
            
            <div className="section">
            <img src={friendly} alt="Designer At Work" />
            <h3 className="header">Friendly</h3>
            <p className="description">We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
            strive to give them the best experience a company can provide.</p>
            </div>

            </div>

            
            Let’s talk about your project
            Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            Get in touch
            
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
