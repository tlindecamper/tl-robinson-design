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
                    <i className="fas fa-dragon"></i>
                </div>

                <div className='right-side'>                    
                    <NavLink exact to='/' activeClassName='nav-link-active'>
                      Home  
                    </NavLink> 

                    <NavLink to='/about' activeClassName='nav-link-active'>
                      About 
                    </NavLink> 

                    <NavLink to='/contact' activeClassName='nav-link-active'>
                      Contact  
                    </NavLink>  

                </div> 
            </div>           
        </div>
    )
    } 
}
