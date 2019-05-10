import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'

export default class CommercialGalleryContainer extends Component {
    constructor() {
        super();
    }



render() {

  const images = [
    {
      original: 'assets/commercial-gallery/joe-vera/joe-vera.jpeg',
      thumbnail: 'assets/commercial-gallery/joe-vera/joe-vera.jpeg',
    },
    {
      original: 'http://lorempixel.com/800/400/nature/2/',
      thumbnail: 'http://lorempixel.com/150/50/nature/2/'
    },
    {
      original: 'http://lorempixel.com/800/400/nature/3/',
      thumbnail: 'http://lorempixel.com/150/50/nature/3/'
    },
        
      ]
    return(
        

        <div className='project-name-wrapper'  >   
            <div className='project-name'>
                Boat Shop
            </div>                  
                <ImageGallery items={images} />

            <div className='project-name'>
                Center for Women and Children in Crisis
            </div>                  
                <ImageGallery items={images} />

            <div className='project-name'>
                Joe Vera's
            </div>                  
                <ImageGallery items={images} />   

            <div className='project-name'>
                Weddings and Catering
            </div>                  
                <ImageGallery items={images} />          

        </div>        
        )
    }    
}