import React from 'react';
import './about.scss';
import BannerImage from '../../assets/about/desktop/image-about-hero.jpg';
import DarkCircle from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import Talent from '../../assets/about/desktop/image-world-class-talent.jpg';
import TwoCircles from '../../assets/shared/desktop/bg-pattern-two-circles.svg';
import RealDeal from '../../assets/about/desktop/image-real-deal.jpg';

function about() {
    return (
        <>
        <div className="about-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        
        <title>Designo Agency</title>
        </head>
        <body className="about-body">
        
<div className="top-banner">

    <div className="text-container">
        <img src={DarkCircle} alt="dark circle" className="dark-circle" />
        <h1 className="header">About Us</h1>
        <p className="description">Founded in 2010, we are a creative agency that produces lasting results for our clients. 
        We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
        that make real impact. We’re always looking forward to creating brands, products, and 
        digital experiences that connect with our clients' audiences.</p>
    </div>
    <img src={BannerImage} alt="Team Working Together" className="banner-image" />
    </div>

    <div className="talent-container">
        <img src={Talent} alt="artist" className="talent-image" />
        <div className="text-and-image-container">
            <img src={TwoCircles} alt="two circles" className="two-circles" />
        <div className="talent-text-container">
            <h1 className="talent-heading">World-class talent</h1>
            <p className="talent-description">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
            crafted from concept to launch, ensuring success in its given market. We are constantly updating 
            our skills in a myriad of platforms.</p>
            <p className="talent-description">Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
            are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
            Clients have always been impressed with our high-quality outcomes that encapsulates their 
            brand’s story and mission.</p>
        </div>
    </div>
</div>

<div className="talent-container2">
        <img src={RealDeal} alt="artist" className="talent-image" />
        <div className="text-and-image-container">
            <img src={TwoCircles} alt="two circles" className="two-circles" />
        <div className="talent-text-container">
            <h1 className="talent-heading">The real deal</h1>
            <p className="talent-description">As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
            Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
            opportunity. We make design and technology more accessible and give you tools to measure success.</p>
            <p className="talent-description">We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
we inspire audiences to take action and drive real results.</p>
        </div>
    </div>
</div>
    

        </body>
        </div>
        </>
    )
}

export default about
