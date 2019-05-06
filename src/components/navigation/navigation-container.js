import React, { Component } from 'react';
import { Navlink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }


render() {
    return (
        <div className='nav-wrapper'>
            <div className='left-side'>
                TLRobinson logo
            </div>

            <div className='right-side'>
                <div className='nav-link-wrapper'>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact </div>
                </div> 
            </div>    
        
        </div>
    )
} 
}
