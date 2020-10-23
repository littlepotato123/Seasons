import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import { Point } from '../Assets/Points';
import { EarthPoints } from '../Assets/EarthPoints';
import OtherImage from '../Assets/OtherImage';
import SunImage from '../Assets/SunImage';
import Explain from './OtherExplain';
import Description from './Description';

const Earth = () => {
    const [points, setPoints] = useState<Array<Point>>([]);
    const [styles, setStyles] = useState<CSS.Properties>({});
    const [season, setSeason] = useState('Summer');

    useEffect(() => {
        setPoints(EarthPoints);
        console.log(points);
    }, [])

    return (
        <div>
            <Explain styles={{}} />
            <OtherImage styles={styles} />
            <SunImage />
            <Description season={season} />
        </div>
    )
}

export default Earth;