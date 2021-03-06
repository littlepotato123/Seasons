import React from'react';
import CSS from 'csstype';

type EarthImageProps = {
  styles: CSS.Properties
}

const EarthImage = ({ styles }: EarthImageProps) => {
  return (
    <div id="earth">
      <svg width="100" height="100" className="earth-img" style={styles}>
        <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="2" fill="green" />
        <rect width="10" height="10" x="35" y="40" />
      </svg>
    </div>
  );
};

export default EarthImage;