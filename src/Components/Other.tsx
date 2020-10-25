import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import OtherImage from '../Assets/OtherImage';
import SunImage from '../Assets/SunImage';
import Explain from './OtherExplain';
import Description from './Description';

const Earth = () => {
    const [box, setBox] = useState<CSS.Properties>({});
    const [styles, setStyles] = useState<CSS.Properties>({});
    const [season, setSeason] = useState('Top View');

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