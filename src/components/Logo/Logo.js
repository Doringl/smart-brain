import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import AILogo from './artificial-intelligence.png';

const Logo = () => {
    return(
        <div id="responsive-logo" className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 44 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3"><img style={ { paddingTop: '40px', width: '120px', height: '120px' }} src={ AILogo } alt="logo"></img></div>
            </Tilt>
        </div>
    );
}

export default Logo;