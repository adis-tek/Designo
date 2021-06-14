import React from 'react';
import './locations.scss';
import TwoCircles from '../../assets/shared/desktop/bg-pattern-two-circles.svg';
import CanadaMap from '../../assets/locations/desktop/image-map-canada.png';
import AustraliaMap from '../../assets/locations/desktop/image-map-australia.png';
import UnitedKingdomMap from '../../assets/locations/desktop/image-map-united-kingdom.png';

function locations() {
    return (
            <>
        <div className="locations-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        
        <title>Locations</title>
        </head>
        <body className="locations-body">

        <div className="location-cards-container">
            <div className="location-card">
                <div className="location-text-container">
                <img src={TwoCircles} alt="Two Circles" className="two-circles" />
                    <h1 className="header">Canada</h1>
                    <div className="sub-info-container">
                    <div className="sub-info">
                    <p className="sub-header">Designo Central Office</p>
                    <p className="description">3886 Wellington Street</p>
                    <p className="description">Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="sub-info">
                    <p className="sub-header">Contact</p>
                    <p className="description">P : +1 253-863-8967</p>
                    <p className="description">M : contact@designo.co</p>
                    </div>
                    </div>
                </div>
                <img src={CanadaMap} alt="Map Location" className="map-image" />
            </div>

            <div className="location-card2">
                <div className="location-text-container">
                <img src={TwoCircles} alt="Two Circles" className="two-circles" />
                    <h1 className="header">Australia</h1>
                    <div className="sub-info-container">
                    <div className="sub-info">
                    <p className="sub-header">Designo AU Office</p>
                    <p className="description">19 Balonne Street</p>
                    <p className="description">New South Wales 2443</p>
                    </div>
                    <div className="sub-info">
                    <p className="sub-header">Contact</p>
                    <p className="description">P : (02) 6720 9092</p>
                    <p className="description">M : contact@designo.au</p>
                    </div>
                    </div>
                </div>
                <img src={AustraliaMap} alt="Map Location" className="map-image" />
            </div>

            <div className="location-card">
                <div className="location-text-container">
                <img src={TwoCircles} alt="Two Circles" className="two-circles" />
                    <h1 className="header">United Kingdom</h1>
                    <div className="sub-info-container">
                    <div className="sub-info">
                    <p className="sub-header">Designo UK Office</p>
                    <p className="description">13 Colorado Way</p>
                    <p className="description">Rhyd-y-fro SA8 9GA</p>
                    </div>
                    <div className="sub-info">
                    <p className="sub-header">Contact</p>
                    <p className="description">P : 078 3115 1400</p>
                    <p className="description">M : contact@designo.uk</p>
                    </div>
                    </div>
                </div>
                <img src={UnitedKingdomMap} alt="Map Location" className="map-image" />
            </div>
        </div>
        </body>
    </div>
            </>
    )
}

export default locations;