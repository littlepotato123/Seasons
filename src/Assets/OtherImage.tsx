import React from 'react';
import CSS from 'csstype';
import You from './You';

type OtherImageProps = {
    styles: CSS.Properties
}

const OtherImage = ({ styles }: OtherImageProps) => {
    return (
        <div id="other">
            <You />
            <svg width="300" height="300" style={styles} className="other-img">
                <circle cx="150" cy="150" r="120" stroke="black" strokeWidth="2" fill="blue" />
            </svg>
        </div>
    )
}

export default OtherImage;