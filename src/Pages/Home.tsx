import { setUncaughtExceptionCaptureCallback } from 'process';
import React, { useEffect, useState } from 'react';
import Earth from '../Components/Earth';
import Other from '../Components/Other';

const Home = () => {
    const [show, setShow] = useState(true);
    const [text, showText] = useState('Other Planet');

    let display;

    useEffect(() => {
        if(show) {
            showText('Other Planet');
        } else {
            showText('Earth');
        }
    })

    return (
        <div>
            <button onClick={() => setShow(!show)}>{text}</button>
            {
                show ? 
                <Earth />
                : 
                <Other />
            }
        </div>
    )
}

export default Home;