import React from 'react';
import {Link} from 'react-router-dom';


function Navigation(props) {
    return (
        <>
        <Link to="/"><h6>Concept</h6></Link>
        
        <Link to="/presentation">  <h6>Présentation</h6></Link>
      
        <Link to="/contact">  <h6>Contact</h6></Link>
            </>
    );
}

export default Navigation;