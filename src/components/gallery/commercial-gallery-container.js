import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import {boat, centerfwomen, joevera, weddCat, carDealer} from './comm_images';


export default class CommercialGalleryContainer extends Component {
    constructor() {
        super();
    }


render() {

 
    return(
        

        <div className='comm-project-name-wrapper'  >   
            <div className='com-project-name'>
                Boat Shop
            </div>                  
                <ImageGallery items={boat} alt="custom design custom artwork"/>

            {/* <div className='com-project-name'>
                Center for Women and Children in Crisis
            </div>                  
                <ImageGallery items={centerfwomen}alt="custom design space management" /> */}

            <div className='com-project-name'>
                Joe Vera'
            </div>                  
                <ImageGallery items={joevera} alt="custom design"/>   

            {/* <div className='com-project-name'>
                Weddings and Catering
            </div>                  
                <ImageGallery items={weddCat}alt="custom design" />     */}

            <div className='com-project-name'>            
                Car Dealership
            </div>                  
                <ImageGallery items={carDealer}alt="custom art work" />       
        </div>        
        )
    }    
}