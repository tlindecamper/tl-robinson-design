import React from 'react';
import CommercialGalleryContainer from '../gallery/commercial-gallery-container'

export default function Commercial() {
    return(
        <div className="commercial-header-wrapper">
            <div className="commercial-header">
                <h1>Commercial Portfolio</h1>
            </div>    
            <div className="commercial-quote">
                <h2>Making custom designs to enhance your business</h2>
            </div>   
            <div className="comm-gallery-container">
            <CommercialGalleryContainer />
            </div> 
        </div>
        );
}