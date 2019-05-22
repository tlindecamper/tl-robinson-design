import React from 'react';

export default function About() {
    return(
    <div className='about-wrapper'>     
            <div className="about-header">
                <h1 >About Us</h1>
            </div> 
            
                <h1  className="mission-statement">I want to earn my living by doing quality design work in a way that will serve my Client and Myself by
                     assisting them in developing the full potential of their surroundings through beauty, balance and individual uniqueness.</h1>
             
                <div className="about-pic">
                    <img className="pic-one" src="assets/about/img055.jpg" alt="hand painted art on the wall"/>
                    <img className="pic-two"   src="assets/about/img057.jpg" alt="hand painted art on the wall"/>
                </div>
                <h2  className="services" >We provide many services to meet all of your needs. <br/> 
                    Custom Drapery and Upholstery<br/> 
                    Unique yet functional Design Ideas for Home or Business <br/> 
                    Seasonal Decorating<br/> 
                    Custom Landscaping, Native Landscaping and Maintenance<br/> 
                    Re-Furbishing Furniture and Finishing Projects<br/>
                    Immediate to Long Range Planning

                </h2>
            
        </div>
    )
}