import React from 'react';


export default function Home() {
    return(
        <div className='home-page-wrapper'>
            <div className='home-page-quote'>
                <h1 className="quote">"A room may be decorated in the best of taste, with well-designed furniture, beautiful floor coverings, curtains, and upholstery, and have a harmonious color scheme, but it cannot and never will show individuality
                 or real interest unless it is furnished with the kind of tasteful accessories that relfect the personality of those who live in it."</h1> 
                <div className="author">
                    <h2 >"Good Housekeeping, Book of Home Decoration" </h2>
                </div>
            </div>
                <img className='homepagepic' src ="assets/homepagepic/25572599174_42d6e1d250_z.jpg" alt="custom fabrics and unique decorating" /> 
        </div>
        
    );
}