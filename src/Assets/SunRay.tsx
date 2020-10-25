import React from 'react';

type SunRayProps = {
    line: { x1: number, x2: number, y1: number, y2: number } | null
}

const SunRay = ({ line }: SunRayProps) => {
    return (
        <div>
            <svg>
                <line x1={line?.x1} x2={line?.x2} y1={line?.y1} y2={line?.y2} />
            </svg>
        </div>
    );
};

export default SunRay;