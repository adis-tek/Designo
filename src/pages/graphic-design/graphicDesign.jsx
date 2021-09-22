import React from 'react';
import './graphic-design.scss';
import { NavLink } from 'react-router-dom';
import CTACircles from '../../assets/web-design/desktop/bg-pattern-intro-web.svg';
import TwoCircles from '../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg';
import TimBrown from '../../assets/graphic-design/desktop/image-change.jpg';
import BoxedWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import Science from '../../assets/graphic-design/desktop/image-science.jpg';
import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';

function graphicDesign() {
    return (
        <>
        <div className="design-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        
        <title>App Design</title>
        </head>
        <body className="design-body">

        <div className="top-banner">
        <h1 className="banner-heading">Graphic Design</h1>
        <p className="banner-description">We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
        <div className="circles-container">
            <img src={CTACircles} alt="circles" className="cta-banner-circles" />
            <img src={TwoCircles} alt="circles" className="two-circles-mobile" />
        </div>
        </div>

        <div className="projects-container">

        <div className="row-container">
        <div class="card">
        <img src={TimBrown} alt="project" className="card-image" />
        <div className="text-container">
        <h3 className="card-title">Airfilter</h3>
        <p className="card-description">Solving the problem of poor indoor air quality by filtering the air</p>
        </div>
        </div>

        <div class="card">
        <img src={BoxedWater} alt="project" className="card-image" />
        <div className="text-container">
        <h3 className="card-title">Eyecam</h3>
        <p className="card-description">Product that lets you edit your favorite photos and videos at any time</p>
        </div>
        </div>

        <div class="card">
        <img src={Science} alt="project" className="card-image" />
        <div className="text-container">
        <h3 className="card-title">Faceit</h3>
        <p className="card-description">Get to meet your favorite internet superstar with the faceit app</p>
        </div>
        </div>

        </div>

        </div>

        <div className="page-images-container">

        <div className="app-design">
            <div className="image-text-container">
            <h1 className="image-text">App Design</h1>
            <NavLink to="/app-design">
            <h3 className="image-text">View Projects <img src={rightArrow} /></h3>
            </NavLink>
        </div>
        </div>
            
        <div className="web-design">
            <div className="image-text-container">
            <h1 className="image-text">Web Design</h1>
            <NavLink to="/web-design">
            <h3 className="image-text">View Projects <img src={rightArrow} /></h3>
            </NavLink>
        </div>
        </div>

        </div>
        </body>
    </div>
</>
    )
}

export default graphicDesign;
