import React from 'react'
import '../styles/searchitem.css'
import {AiFillStar} from 'react-icons/ai'
import{BsHandThumbsUpFill} from 'react-icons/bs'
import {RiLeafLine} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'

export function Searchitem() {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/209192616.jpg?k=2854e63694c06d32213b861364bc62711a7eb0d755f3234d9e1799a26d3fec16&o=&hp=1" alt="" className='siImg' />
        <div className='siDesc'>
            <div className='heading'>
                <h1>Ramada khajuraho</h1>
                <AiFillStar className='star'/>
                <AiFillStar className='star'/>
                <AiFillStar className='star'/>
                <AiFillStar className='star'/>
                <AiFillStar className='star'/>
                <BsHandThumbsUpFill className='star'/>
                 </div>
                 <div className='para'>
                    <p> Sevagram, KhajurāhoShow on map1.8 km from centre</p>
                    <p><RiLeafLine/>  Travel Sustainable property</p>
                    <p>A 5-minute drive from Khajuraho Airport, the 5-star Ramada Khajuraho is surrounded by greenery and boasts an inviting outdoor pool, a jogging track and luxurious, modern rooms.</p>
                    <button>Show price</button>
            </div>
            </div>
    </div>
  )
}

