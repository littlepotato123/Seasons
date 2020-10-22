import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import { Point } from '../Assets/Points';
import { EarthPoints } from '../Assets/EarthPoints';
import OtherImage from '../Assets/OtherImage';
import SunImage from '../Assets/SunImage';

const Earth = () => {
    const [points, setPoints] = useState<Array<Point>>([]);
    const [styles, setStyles] = useState<CSS.Properties>({ top: "100px" });

    useEffect(() => {
        setPoints(EarthPoints);
        console.log(points);
    }, [])

    return (
        <div>
            <OtherImage styles={styles} />
            <SunImage />
        </div>
    )
}

export default Earth;