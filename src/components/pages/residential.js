import React from 'react';
import ResidentialGalleryContainer from '../gallery/residential-gallery-container'

export default function Residential() {
    return(
        <div className="residential-header-wrapper">
            <div className="residential-header">
                <h1>Residential Portfolio</h1>
            </div>    
            <div className="residential-quote">
                <h2 >Function first, then add the spark of design</h2>
            </div>            
            <ResidentialGalleryContainer />
        </div>
        );
}
