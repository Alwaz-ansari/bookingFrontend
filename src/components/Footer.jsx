import React from 'react'
import '../styles/footer.css'
export function Footer() {
  return (
    <>

    <div className='footerContainer'>
        <div className='footerMini'>
            <div className='footerText'>
                <h2>Save time, save money!</h2>
                <p>Sign up and we'll send the best deals to you</p>
            </div>
            <div className='emailText'>
                <input type="text" name="" id="" placeholder='Your email address' />
                <button>Subscribe</button>
            </div>
        </div>
      
    </div>


    <div className='subFooter'>
        <div className='subFooter1'>
            <button>List your property</button>

        </div>
    </div>
        <div className='hrLine'>
            <button>click me</button>
            <button>List your property</button>
            <button>List your property</button>
            <button>List your property</button>
            <button>List your property</button>

        </div>

         <div className='countries'>
            <div className='miniList'>
            <div className='list'>
                <ul>
                    <li>Countries</li>
                    <li>Regions</li>
                    <li>Cities</li>
                    <li>Districts</li>
                    <li>Airports</li>
                    <li>Hotels</li>
                    <li>Hotels</li>
                </ul>
            </div>
            <div className='list'>
            <ul>
                    <li>Homes</li>
                    <li>Apartments</li>
                    <li>Resorts</li>
                    <li>Villas</li>
                    <li>Hostels</li>
                    <li>B&B</li>
                    <li>Guest house</li>
                </ul>

            </div>
            <div className='list'>
            <ul>
                    <li>Unique places to stay</li>
                    <li>All destinations</li>
                    <li>All fights destination</li>
                    <li>All car hire location</li>
                    <li>Discover</li>
                    <li>Reviews</li>
                    <li>Discover monthly stay</li>
                    <li>Unpacked: Travel articles</li>
                    <li>Seasonal and holiday deals</li>
                    <li>Travellers Review Awards</li>
                </ul>

            </div>
            <div className='list'>
                <ul>
                     <li>Car hire</li>
                    <li>Flight finder</li>
                    <li>Restaurant reservations</li>
                    <li>Booking.com for travel agents</li>
                    <li>Hostels</li>
                    </ul>
            </div>
            <div className='list'>
                {/* <ul>
                    <li>Coronavirus (COVID-19)FAQs</li>
                    <li>About Booking.com</li>
                    <li>Customer service help</li>
                    <li>Partner help</li>
                    <li>Careers</li>
                    <li>Sustainability</li>
                    <li>Press dispute</li>

                </ul> */}
            </div>

            </div>
        </div>

        <div className='buttomFooter'>
            <div className='miniBottom'>
                <p>Copyright © 1996–2023 Booking.com™. All rights reserved.</p>
                <p style={{marginLeft:'27%',fontSize:'12px',marginTop:'40px'}}>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
</p>
            </div>

            </div>

            <div className='logoContainer'>
                <div className='miniLogo'>
                <div className='logo'>
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" alt="" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" alt="" />

            </div>


                </div>
            </div>

    </>
  )
}

