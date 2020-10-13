import React from 'react';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import './Header.css'

const Header = () => {
    return (
        <div className="headerBg">
            <div className="header-Container">
                <NavMenu />
                <Banner />
                <Business />
            </div>
        </div>
    );
};

export default Header;