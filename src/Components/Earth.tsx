import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import EarthImage from '../Assets/EarthImage';
import SunImage from '../Assets/SunImage';
import Explain from './EarthExplain';
import Description from './Description';

interface line {
    x1: number,
    x2: number,
    y1: number,
    y2: number
}

const Earth = () => {
    const [styles, setStyles] = useState<CSS.Properties>({});
    const [season, setSeason] = useState<string>("Top View");
    const [ray, setRay] = useState<line | null>(null);

    return (
        <div>
            <Explain styles={{ fontSize: "18px", width: "500px" }} />
            <EarthImage styles={styles} />
            <EarthImage styles={{ top: "1000px", left: "1900px" }} />
            <SunImage />
            <Description season={season} />
        </div>
    );
};

export default Earth;