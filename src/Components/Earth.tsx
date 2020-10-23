import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import { Point } from '../Assets/Points';
import { EarthPoints } from '../Assets/EarthPoints';
import EarthImage from '../Assets/EarthImage';
import SunImage from '../Assets/SunImage';
import Explain from './EarthExplain';
import Description from './Description';

const Earth = () => {
    const [points, setPoints] = useState<Array<Point>>([]);
    const [styles, setStyles] = useState<CSS.Properties>({ top: "150px" });
    const [season, setSeason] = useState<string>("Summer");

    useEffect(() => {
        setPoints(EarthPoints);
        console.log(points);
    }, [])

    return (
        <div>
            <Explain styles={{ fontSize: "18px", width: "500px" }} />
            <EarthImage styles={styles} />
            <SunImage />
            <Description season={season} />
        </div>
    );
};

export default Earth;