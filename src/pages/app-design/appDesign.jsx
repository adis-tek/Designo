import React from 'react';
import './app-design.scss';
import { NavLink } from 'react-router-dom';
import leaf from '../../assets/shared/desktop/bg-pattern-leaf.svg';
import CTACircles from '../../assets/web-design/desktop/bg-pattern-intro-web.svg';
import Airfilter from '../../assets/app-design/desktop/image-airfilter.jpg';
import Eyecam from '../../assets/app-design/desktop/image-eyecam.jpg';
import Faceit from '../../assets/app-design/desktop/image-faceit.jpg';
import Todo from '../../assets/app-design/desktop/image-todo.jpg';
import LoopStudios from '../../assets/app-design/desktop/image-loopstudios.jpg';
import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';

function appDesign() {
    return (
        <>
        <div className="design-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        
        <title>App Design</title>
        </head>
        <img src={leaf} className="background-leaf-one" />
        <body className="design-body">

        <div className="top-banner">
        <h1 className="banner-heading">App Design</h1>
        <p className="banner-description">Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
        <div className="circles-container">
            <img src={CTACircles} alt="circles" className="cta-banner-circles" />
        </div>
        </div>

        <div className="projects-container">

        <div className="row-container">
        <div class="card">
        <img src={Airfilter} alt="project" className="card-image" />
        <h3 className="card-title">Airfilter</h3>
        <p className="card-description">Solving the problem of poor indoor air quality by filtering the air</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Airfilter</h3>
        <p className="tablet-card-description">Solving the problem of poor indoor air quality by filtering the air</p>
        </div>
        </div>

        <div class="card">
        <img src={Eyecam} alt="project" className="card-image" />
        <h3 className="card-title">Eyecam</h3>
        <p className="card-description">Product that lets you edit your favorite photos and videos at any time</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Eyecam</h3>
        <p className="tablet-card-description">Product that lets you edit your favorite photos and videos at any time</p>
        </div>
        </div>

        <div class="card">
        <img src={Faceit} alt="project" className="card-image" />
        <h3 className="card-title">Faceit</h3>
        <p className="card-description">Get to meet your favorite internet superstar with the faceit app</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Faceit</h3>
        <p className="tablet-card-description">Get to meet your favorite internet superstar with the faceit app</p>
        </div>
        </div>

        </div>

        <div className="row-container">
        <div class="card">
        <img src={Todo} alt="project" className="card-image" />
        <h3 className="card-title">Todo</h3>
        <p className="card-description">A todo app that features cloud sync with light and dark mode</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Todo</h3>
        <p className="tablet-card-description">A todo app that features cloud sync with light and dark mode</p>
        </div>
        </div>

        <div class="card">
        <img src={LoopStudios} alt="project" className="card-image" />
        <h3 className="card-title">Loopstudios</h3>
        <p className="card-description">A VR experience app made for Loopstudios</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Loopstudios</h3>
        <p className="tablet-card-description">A VR experience app made for Loopstudios</p>
        </div>
        </div>

        </div>

        </div>

        <div className="page-images-container">

        <div className="web-design">
            <div className="image-text-container">
            <h1 className="image-text">Web Design</h1>
            <NavLink to="/web-design">
            <h3 className="image-text-link">View Projects <img src={rightArrow} /></h3>
            </NavLink>
        </div>
        </div>
            
        <div className="graphic-design">
            <div className="image-text-container">
            <h1 className="image-text">Graphic Design</h1>
            <NavLink to="/graphic-design">
            <h3 className="image-text-link">View Projects <img src={rightArrow} /></h3>
            </NavLink>
        </div>
        </div>

        </div>
        </body>
    </div>
</>
    )
}

export default appDesign;
