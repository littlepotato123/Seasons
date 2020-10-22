import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import { Point } from '../Assets/Points';
import { EarthPoints } from '../Assets/EarthPoints';
import EarthImage from '../Assets/EarthImage';
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
            <EarthImage styles={styles} />
            <SunImage />
        </div>
    )
}

export default Earth;