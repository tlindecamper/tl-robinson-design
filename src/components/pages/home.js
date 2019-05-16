import React from 'react';


export default function Home() {
    return(
        <div className='home-page-wrapper'>
            <div className='home-page-quote'>
                <h1 className="quote">"A room may be decorated in the best of taste, with well-designed furniture, beautiful floor coverings, curtains, and upholstery, and have a harmonious color scheme, but it cannot and never will show individuality
                 or real interest unless it is furnished with the kind of tasteful accessories that relfect the personality of those who live it."</h1> 
                <div className="author">
                    <h2 >"Good Housekeeping Book of Home Decoration" </h2>
                </div>
            </div>
                <img className='homepagepic' src ="assets/homepagepic/roberto-nickson-364924-unsplash.jpg" /> 
        </div>
        
    );
}