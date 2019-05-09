import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }


render() {
    return (
        <div className='nav-wrapper'>
            <div className = 'nav-link-wrapper'>
                <div className='left-side'>                    
                    <img className= 'logo' src ={"../logo/leta-logo.png"} /> 
                   
                    <NavLink className='link'exact to='/' activeClassName='nav-link-active'>
                      Home  
                    </NavLink> 

                    <NavLink className='link'to='/about' activeClassName='nav-link-active'>
                      About 
                    </NavLink> 

                    <NavLink className='link'to='/contact' activeClassName='nav-link-active'>
                      Contact  
                    </NavLink>                     
                </div>

                <div className='right-side'>                    
                    

                </div> 
            </div>           
        </div>
        )
    } 
}
