import React from 'react'
import {} from '../styles/app.css'
import { Button, Space } from 'antd';

export function Add() {
  return (
    <div className='addvertise'>
        <div className='mini-addvertise'>
            <div className='image'>
                <img src="https://t-cf.bstatic.com/design-assets/assets/v3.68.0/illustrations-traveller/GlobeGeniusBadge.png" alt="" />
            </div>
                <div className='text'>
                    <h2>Get instant discounts</h2>
                    <p>Simply sign into your Booking.com account and look for the <br/> blue Genius logo to save</p>
                    <Space wrap>
                    <Button style={{borderColor:'rgba(9, 112, 144, 0.569)', color:'rgba(9, 112, 144, 0.569)', fontweight:'700'}} className='btn'>Sign in</Button>
                    <Button style={{color:'rgba(9, 112, 144, 0.569)'}} type="text">Register</Button>


                   </Space>
                </div>

        </div>
      
    </div>
  )
}

