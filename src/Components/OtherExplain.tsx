import React from 'react';
import CSS from 'csstype';

type ExlainProps = {
    styles: CSS.Properties
}

const OtherExplain = ({ styles }: ExlainProps) => {
    return (
        <div className="key" style={styles}> 
            The seasons and the revolution of this other planet is not extremely different from earth, but is different. The rotation of the planet is <b>90 Degrees</b> and it might seem like a paradoxical rotation and extremely confusing, but really, it is just 0 degree rotation, but on the x-axis. Therefore, the seasons do not work much more different than a 0 degree rotation system. There are no seasons and the daylight hours stay 12 hours or is evenly split throughout the year. The poles of this planet would be on the horizontal plane instead of earth's which is on the vertical axis of the planet.
        </div>
    );
};

export default OtherExplain;