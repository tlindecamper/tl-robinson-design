import React from 'react';
import CommercialGalleryContainer from '../gallery/commercial-gallery-container'

export default function Commercial() {
    return(
        <div className="commercial-header-wrapper">
            <div className="commercial-header">
                <h1>Commercial Portfolio</h1>
            </div>    
            <div className="commercial-quote">
                <h2>First impressions can make or break your business</h2>     
            </div>    
            <div className="comm-link">      
                <h3>Visit some of our other work </h3>
            </div>       
            <div className="sun-links">    
                <a href="https://www.sundanceresort.com/all-lodging/sunstone/">Sunstone</a>
                <a href="https://www.sundanceresort.com/all-lodging/aspen-spring-5-br/">Aspen Spring</a>
                <a href="https://www.sundanceresort.com/all-lodging/owl-spirit-3-br/">Owl Spirit</a>
                <a href="https://www.sundanceresort.com/all-lodging/dream-catcher-3-br/">Dream Catcher</a>       
                
            </div> 
            <div className="comm-gallery-container">
            <CommercialGalleryContainer />
            </div> 
        </div>
        );
}