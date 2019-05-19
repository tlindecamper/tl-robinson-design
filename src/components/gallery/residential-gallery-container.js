import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import { florida, starrSunHome,triesteSunHome, vanSunHome, vivianParkHome, boydSunHome } from "./res_images";

export default class ResidentialGalleryContainer extends Component {
    



render() {
  
    return(

        <div className='res-project-name-wrapper'  >         
            <div className='res-project-name'>            
                Florida Vacation Home
            </div>                  
                <ImageGallery items={florida} alt="custom fabrics taken from a specific style of Designer "/>

            <div className='res-project-name'>
                Starr Sundance Home
            </div>                  
                <ImageGallery items={starrSunHome} />

            <div className='res-project-name'>
                Trieste Sundance Home
            </div>                  
                <ImageGallery items={triesteSunHome} alt="custom fabrics and refurbished furniture"/>   

            <div className='res-project-name'>
                VanWagonen Sundance Home
            </div>                  
                <ImageGallery items={vanSunHome}alt="custom landscaping" />

            <div className='res-project-name'>
                Vivian Park Home
            </div>                  
                <ImageGallery items={vivianParkHome}alt="custom fabrics and upholstery " />      
            <div className='res-project-name'>
                Boyd Sundance Home
            </div>                  
                <ImageGallery items={boydSunHome} alt="custom refurbishing " />                 
        </div>        
        )
    }    
}