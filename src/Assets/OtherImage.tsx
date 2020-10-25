import React from 'react';
import CSS from 'csstype';

type OtherImageProps = {
    styles: CSS.Properties
}

const OtherImage = ({ styles }: OtherImageProps) => {
    return (
        <div id="other">
            <svg width="300" height="300" style={styles} className="other-img">
                <circle cx="150" cy="150" r="120" stroke="black" strokeWidth="2" fill="blue" />
                <rect width="15" height="15" x="200" y="200" />
            </svg>
        </div>
    )
}

export default OtherImage;