import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import { florida, starrSunHome,triesteSunHome, vanSunHome, vivianParkHome } from "./res_images";

export default class ResidentialGalleryContainer extends Component {
    



render() {
  
    return(

        <div className='project-name-wrapper'  >         
            <div className='res-project-name'>            
                Florida Vacation Home
            </div>                  
                <ImageGallery items={florida} />

            <div className='project-name'>
                Starr Sundance Home
            </div>                  
                <ImageGallery items={starrSunHome} />

            <div className='project-name'>
                Trieste Sundance Home
            </div>                  
                <ImageGallery items={triesteSunHome} />   

            <div className='project-name'>
                VanWagonen Sundance Home
            </div>                  
                <ImageGallery items={vanSunHome} />

            <div className='project-name'>
                Vivian Park Home
            </div>                  
                <ImageGallery items={vivianParkHome} />            
        </div>        
        )
    }    
}