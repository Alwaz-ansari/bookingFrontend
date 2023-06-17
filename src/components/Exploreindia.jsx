import React from 'react'
import '../styles/explore.css'
import Slider from "react-slick";

import {hotelDetails} from './data'

 export function Exploreindia() {
    console.log(hotelDetails)
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        initialSlide: 0,
        // nextArrow:<Nextarrow/>,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='exploreContainer'>
        <div className='exploreMini'>
         <h1>Explore India</h1>
         <p>These popular destinations have a lot to offer</p>

         <div className='imageCard'>
         <Slider {...settings}>
            {
               hotelDetails.map((data, id)=>{
                return (
                    <div className='Result' key={id}>
                        <img src={data.img} alt="img" />
                        <h4>{data.city}</h4>
                        <p>{data.properties} properties</p>
                    </div>
                )
               })
                  
            }
        </Slider>


         </div>
         
        </div>
      
    </div>
  )
}

// export default Exploreindia
