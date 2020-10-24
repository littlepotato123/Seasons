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
    const [styles, setStyles] = useState<CSS.Properties>({});
    const [season, setSeason] = useState<string>("Summer");
    const [you, setYou] = useState<CSS.Properties>({ position: "relative", top: "25px", left: "40px", color: "white" });

    useEffect(() => {
        setPoints(EarthPoints);
        console.log(document.getElementById('earth')?.getBoundingClientRect());
    }, [])

    return (
        <div>
            <Explain styles={{ fontSize: "18px", width: "500px" }} />
            <EarthImage styles={styles} you={you} />
            <SunImage />
            <Description season={season} />
        </div>
    );
};

export default Earth;