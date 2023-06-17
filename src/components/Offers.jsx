import React from 'react'
import '../styles/offer.css'
import { Button, Space } from 'antd';


export function Offers() {
  return (
    <div className='offerContainer'>
        <div className='offerMini'>
         <h3 >Offers</h3>
         <p>Promotions, deals and special offers for you</p>
         <div className='cardHolder'>
            <div className='cards'>
             <p>Fly away to your dream vacation</p>
             <div className='text'>
              <p>Get inspired – compare and book flights <br/> with flexibility</p>
              <img style={{position:"absolute",top:'105%', left:"35%"}} src="https://r-xx.bstatic.com/xdata/images/xphoto/150x150/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=" alt="" />
             </div>
             <Button className='antBtn' type="primary">Search for flights</Button>

            {/* <h4>Fly away to your dream holiday</h4>
            <div className='cardsText'>
            <p>Get inspired, compare and book flights with more flexibility</p>
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/150x150/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=" alt="" /> */}
            {/* </div> */}
            {/* <Button type="primary">Primary Button</Button> */}

            </div>
            <div className='cards1'>
            <h4>Escape for a while</h4>
            <p>Enjoy the freedom of a monthly stay <br/> on Booking.com</p>
            <Button className='antBtn' type="primary">Discover monthly stays</Button>

            </div>
         </div>
        </div>
    </div>
  )
}

