import React from 'react';
import { 
    Link
} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/">Model</Link> <br />
            <Link to="/explain">Explain</Link>
        </div>
    )
}

export default Navigation;