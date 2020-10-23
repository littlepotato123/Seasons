import React from 'react';
import CSS from 'csstype';

type ExplainProps = {
    styles: CSS.Properties
}

const EarthExplain = ({ styles }: ExplainProps) => {
    return (
        <div className="key" style={styles}>
            In this scenario, the green circle is the eath and the yellow circle is the sun. <strong>Note that this is not drawn to scale at all. </strong> Since the earth has a 23 degree tilt, the planet's direct sunlight is distributed throughout the year to different regions. Also, you can see a small red region, that is you guys! You will notice that this red region doesn't always have direct sunlight, but neither does it get no sunlight. <strong>This shows that the tilt of the earth distributes the direct sunlight, so you get direct sunlight sometimes, but others get it also. </strong>
        </div>
    )
}

export default EarthExplain;