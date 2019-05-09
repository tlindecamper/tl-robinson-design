import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'

export default class GalleryContainer extends Component {
    constructor() {
        super();
    }



render() {

    const images = [
        {
          original: 'http://lorempixel.com/800/400/nature/1/',
          thumbnail: 'http://lorempixel.com/150/50/nature/1/',
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
                Sundance Home
            </div>
                  
                <ImageGallery items={images} />
        </div>        
        )
    }    
}