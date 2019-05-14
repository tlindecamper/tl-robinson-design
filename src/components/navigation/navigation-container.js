import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }


render() {
    return (
        <div className='nav-wrapper'>
                <div className='left-side'>                    
                    <img className= 'logo' src ="assets/logo/leta-logo.png" /> 
                </div>
                <div className='right-side'>
                <div className = 'nav-link-wrapper'>
                    <NavLink className='link'exact to='/' activeClassName='nav-link-active'>
                      Home  
                    </NavLink> 

                    <NavLink className='link'to='/commercial' activeClassName='nav-link-active'>
                      Commercial 
                    </NavLink> 

                    <NavLink className='link'to='/residential' activeClassName='nav-link-active'>
                      Residential  
                    </NavLink>     

                    <NavLink className='link'to='/about' activeClassName='nav-link-active'>
                      About 
                    </NavLink> 

                    <NavLink className='link'to='/contact' activeClassName='nav-link-active'>
                      Contact  
                    </NavLink> 
                </div>
                </div>
                                  
                </div>
        )
    } 
}
