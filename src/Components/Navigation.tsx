import React from 'react';
import { 
    Link
} from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className="nav">
            <li><Link to="/"><span>Model</span></Link></li>
            <li><Link to="/explain"><span>Explain</span></Link></li>
        </ul>
    )
}

export default Navigation;