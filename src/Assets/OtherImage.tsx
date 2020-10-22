import React from 'react';
import CSS from 'csstype';

type OtherImageProps = {
    styles: CSS.Properties
}

const OtherImage = ({ styles }: OtherImageProps) => {
    return (
        <svg width="300" height="300" style={styles}>
            <circle cx="150" cy="150" r="120" stroke="black" stroke-width="2" fill="blue" />
        </svg>
    )
}

export default OtherImage;