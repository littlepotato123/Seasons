import React from'react';
import CSS from 'csstype';
import You from './You';

type EarthImageProps = {
  styles: CSS.Properties
}

const EarthImage = ({ styles }: EarthImageProps) => {
  return (
    <div id="earth">
      <You />
      <svg width="100" height="100" className="earth-img" style={styles}>
        <circle cx="50" cy="50" r="40" stroke="yellow" strokeWidth="2" fill="green" />
      </svg>
    </div>
  );
};

export default EarthImage;