import React from 'react';
import CSS from 'csstype';

type OtherImageProps = {
    styles: CSS.Properties,
    you: CSS.Properties
}

const OtherImage = ({ styles, you }: OtherImageProps) => {
    return (
        <div id="other">
            <svg width="300" height="300" style={styles} className="other-img">
                <circle cx="150" cy="150" r="120" stroke="black" strokeWidth="2" fill="blue" />
            </svg>
            <p style={you}>You</p>
        </div>
    )
}

export default OtherImage;