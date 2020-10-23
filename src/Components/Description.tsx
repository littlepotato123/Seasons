import React from 'react';

type DescriptionProps = {
    season: string
}

const Description = ({ season}: DescriptionProps) => {
    return (
        <div className="desc">
            {season}
        </div>
    )
}

export default Description;