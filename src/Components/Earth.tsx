import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import { Point } from '../Assets/Points';
import { EarthPoints } from '../Assets/EarthPoints';
import EarthImage from '../Assets/EarthImage';
import SunImage from '../Assets/SunImage';
import Explain from './EarthExplain';
import Description from './Description';
import SunRay from '../Assets/SunRay';

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

    useEffect(() => {
        console.log(document.getElementById('earth')?.getBoundingClientRect());
    }, [])

    return (
        <div>
            <Explain styles={{ fontSize: "18px", width: "500px" }} />
            <EarthImage styles={styles} />
            <SunImage />
            <Description season={season} />
            <SunRay line={ray} />
        </div>
    );
};

export default Earth;