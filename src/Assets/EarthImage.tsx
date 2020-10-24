import React from'react';
import CSS from 'csstype';

type EarthImageProps = {
  styles: CSS.Properties,
  you: CSS.Properties
}

const EarthImage = ({ styles, you }: EarthImageProps) => {
  return (
    <div id="earth">
      <svg width="100" height="100" className="earth-img" style={styles}>
        <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="2" fill="green" />
      </svg>
      <p style={you}>You</p>
    </div>
  );
};

export default EarthImage;