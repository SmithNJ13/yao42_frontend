import React, { useState } from 'react';
import "./style.css"

const ScrollToTopButton = ({ season, handleScrollToTop }) => {
    const [hovered, setHovered] = useState(false);

    const hoverColor = {
        spring: '#A3CB62',
        summer: '#F0D013',
        autumn: '#E99700',
        winter: '#50B5DE',
    };

    const buttonStyle = {
        backgroundColor: 
            season === 'spring' ? '#BADC83' :
            season === 'summer' ? '#FFE448' :
            season === 'autumn' ? '#FEBB40' :
            season === 'winter' ? '#87CEEB' : '#D296EE',
    };

    return (
        <div id="BackToTopButton">
            <button
                style={{
                    ...buttonStyle,
                    backgroundColor: hovered ? hoverColor[season] : buttonStyle.backgroundColor
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handleScrollToTop}
            >
                Back to Top
            </button>
        </div>
    );
};

export default ScrollToTopButton;
