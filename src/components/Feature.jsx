import React from 'react'
import '../styles/feature.css'
import { Image, Space } from 'antd';
import { useState } from 'react';
import {Nextarrow} from './Nextarrow'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



export function Feature() {
    const [random, setRandom] = useState();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
    <div className='sliderContainer'>
        <div className='subContainer'>

     <h2>Homes guests love</h2>
        <Slider style={{color:'black'}} {...settings}>
          <div className='miniContainer'>
          <Space size={12}>

          <Image
        width={250}
        src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o='
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={250}
          />
        }
      />
</Space>
          <h3>Aparthotel Stare Miasto</h3>
          <p>Old Town, Poland, Kraków</p>
          <p>Starting from ₹ 12,970</p>
          </div>

          <div className='details'>
          <Space size={12}>
      <Image
      // style={{marginLeft:'5px'}}
        width={250}
        src='https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o='
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={250}
          />
        }
      />

          </Space>
          <h3>7Seasons Apartments Budapest</h3>
          <p>Terézváros, Hungary, Budapest</p>
          <p>Starting from₹ 12,277</p>
          </div>
          <div className='details'>
          <Space size={12}>
      <Image
      // style={{marginLeft:'5px'}}
        width={250}
        src='https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o='
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={250}
          />
        }
      />

          </Space>
          <h3>numa I Vita Apartments</h3>
          <p>Fortezza da Basso, Italy, Florence</p>
          <p>Starting from ₹ 29,266</p>

          </div>
          <div className='details'>
          <Space size={12}>
      <Image
      // style={{marginLeft:'5px'}}
        width={250}
        src='https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o='
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={250}
          />
        }
      />

          </Space>
          <h3>Cheval Three Quays at The Tower of London</h3>
          <p>City of London, United Kingdom, London</p>
          <p>Starting from ₹ 90,609</p>

          </div>
          <div className='details'>
          <Space size={12}>
      <Image
      // style={{marginLeft:'5px'}}
        width={250}
        src='https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o='
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={250}
          />
        }
      />

          </Space>
          <h3>The Apartments by The Sloane Club</h3>
          <p>Kensington and Chelsea, United Kingdom, London</p>
          <p>Starting from ₹ 66,761</p>

          </div>
          <div className='details'>
          <Space size={12}>
      <Image
      // style={{marginLeft:'5px'}}
        width={250}
        src='https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=b4f13731abc220a62dc44e8d52f2b5a843257fabeca40035d8b76d80ee523cf0&o='
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={250}
          />
        }
      />

          </Space>
          <h3>3 Epoques Apartments by Prague Residences</h3>
          <p>Prague 1, Czech Republic, Praha 1</p>
          <p>Starting from ₹ 11,8018</p>

          </div>
          <div className='details'>
          <Space size={12}>
      <Image
      // style={{marginLeft:'5px'}}
        width={250}
        src='https://cf.bstatic.com/xdata/images/hotel/square600/126708403.webp?k=a137138b895d53d9c0cd31f99f272b833b605441d0670a40c24007fdbb45bb70&o='
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={250}
          />
        }
      />

          </Space>
          <h3>P&J Luxury Apartments</h3>
          <p>Old Town, Poland, Kraków</p>
          <p>Starting from ₹ 5,949</p>


          </div>
          <div className='details'>
          <Space size={12}>
      <Image
      // style={{marginLeft:'5px'}}
        width={250}
        src='https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o='
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={250}
          />
        }
      />

          </Space>
          <h3>VIP Residence Budapest</h3>
          <p>Belváros - Lipótváros, Hungary, Budapest</p>
          <p>Starting from ₹ 37,561</p>

          </div>
        </Slider>
        </div>

    </div>
  )
}

