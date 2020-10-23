import React from 'react';
import CSS from 'csstype';

type ExlainProps = {
    styles: CSS.Properties
}

const OtherExplain = ({ styles }: ExlainProps) => {
    return (
        <div className="key" style={styles}>
            
        </div>
    );
};

export default OtherExplain;