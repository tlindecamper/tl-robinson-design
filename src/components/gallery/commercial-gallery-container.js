import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import {boat, centerfwomen, joevera, weddCat} from './comm_images';


export default class CommercialGalleryContainer extends Component {
    constructor() {
        super();
    }


render() {

 
    return(
        

        <div className='project-name-wrapper'  >   
            <div className='project-name'>
                Boat Shop
            </div>                  
                <ImageGallery items={boat} />

            <div className='project-name'>
                Center for Women and Children in Crisis
            </div>                  
                <ImageGallery items={centerfwomen} />

            <div className='project-name'>
                Joe Vera's
            </div>                  
                <ImageGallery items={joevera} />   

            <div className='project-name'>
                Weddings and Catering
            </div>                  
                <ImageGallery items={weddCat} />          

        </div>        
        )
    }    
}