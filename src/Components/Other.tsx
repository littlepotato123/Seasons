import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import { Point } from '../Assets/Points';
import { EarthPoints } from '../Assets/EarthPoints';
import OtherImage from '../Assets/OtherImage';
import SunImage from '../Assets/SunImage';
import Explain from './OtherExplain';
import Description from './Description';
import SunRay from '../Assets/SunRay';

const Earth = () => {
    const [points, setPoints] = useState<Array<Point>>([]);
    const [box, setBox] = useState<CSS.Properties>({});
    const [styles, setStyles] = useState<CSS.Properties>({});
    const [season, setSeason] = useState('Top View');

    useEffect(() => {
        setPoints(EarthPoints);
        console.log(document.getElementById('other')?.getBoundingClientRect());
    }, [])

    return (
        <div>
            <Explain styles={{ fontSize: "18px", width: "550px" }} />
            <OtherImage styles={styles} />
            <SunImage />
            <Description season={season} />
        </div>
    )
}

export default Earth;