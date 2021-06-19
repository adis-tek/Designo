import React, {useState} from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/shared/desktop/logo-dark.png';
import Hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
import Close from '../../assets/shared/mobile/icon-close.svg';

function Nav() {
    const [hamburgerCheck, setHamburgerCheck] = useState(true);
    const [closeMenu, setCloseMenu] = useState(false);
    function hamburgerClick() {
        setHamburgerCheck(!hamburgerCheck);
        setCloseMenu(!closeMenu);
        console.log(hamburgerCheck);
        console.log(closeMenu);
    }
    return (
    <>
        <div className="nav-container">
            <div className="nav">
            <NavLink exact activeClassName="active" className="logo-link" to="/">
                <img src={Logo} alt="Design Logo" className="nav-logo" />
            </NavLink>
                <div className="nav-links-container">
                    <ul className="desktop-ul">
                    <NavLink exact activeClassName="active" to="/about">
                        <li className="desktop-li">OUR COMPANY</li>
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/locations">
                        <li className="desktop-li">LOCATIONS</li>
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/contact">
                        <li className="desktop-li">CONTACT</li>
                    </NavLink>
                    </ul>
                    <div className="mobile-menu">
                    {hamburgerCheck &&
                    <img src={Hamburger} alt="Menu Icon" className="hamburger" onClick={hamburgerClick} />
                    }
                    {closeMenu &&
                    <>
                    <img src={Close} alt="Close Menu" className="menu-close" onClick={hamburgerClick} />
                        </>
                    }
                    </div>
                </div>
            </div>
        </div>
        {closeMenu &&
        <div className="mobile-menu-modal">
            <ul className="mobile-ul">
            <NavLink exact activeClassName="active" to="/about">
                        <li className="mobile-li" onClick={hamburgerClick}>OUR COMPANY</li>
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/locations">
                        <li className="mobile-li" onClick={hamburgerClick}>LOCATIONS</li>
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/contact">
                        <li className="mobile-li" onClick={hamburgerClick}>CONTACT</li>
                    </NavLink>
            </ul>
        </div>
    }
    </>
    )
}

export default Nav;
