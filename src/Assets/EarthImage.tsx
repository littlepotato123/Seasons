import React from'react';
import CSS from 'csstype';

type EarthImageProps = {
  styles: CSS.Properties
}

const EarthImage = ({ styles }: EarthImageProps) => {
  return (
    <svg width="100" height="100" className="earth-img" style={styles}>
      <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="2" fill="green" />
    </svg>
  );
};

export default EarthImage;