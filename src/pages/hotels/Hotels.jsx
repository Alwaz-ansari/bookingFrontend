import React,{useState} from "react";
import { Nav } from "../../components/Nav";
import { Header } from "../../components/Header";
import {Footer} from '../../components/Footer'
import "../../styles/hotel.css";
import { ImLocation } from "react-icons/im";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import{AiOutlineArrowRight} from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'
export function Hotels() {
  const [slider, setSlider] = useState(0)
  const[open, setOpen] = useState(false)
  const photos = [
    {
      img: "https://media.istockphoto.com/id/1163498940/photo/interior-of-a-modern-luxury-hotel-double-bed-bedroom.jpg?s=612x612&w=0&k=20&c=75KFjgY3RHrQq2yTV4boA4A89qMeccMQZotFKIMURS8=",
    },
    {
      img: "https://media.istockphoto.com/id/843823656/photo/hotel-room.jpg?s=612x612&w=0&k=20&c=8-ZNA52e5GlPuuQPXqZRgsTO9WRZwZgFtDotyC6CGHY=",
    },
    {
      img: "https://media.istockphoto.com/id/1066999762/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=kh1SoNvZYDdAFOadeKxPVssVKVzbMTIuOHQu-RBDoX0=",
    },
    {
      img: "https://i.pinimg.com/originals/6f/72/35/6f7235447ca2c37edf7df110269d363b.jpg",
    },
    {
      img: "https://i.pinimg.com/originals/35/5a/c8/355ac85bdfa81d6c514f06195dba5809.jpg",
    },{
      img: "https://i.pinimg.com/originals/6f/72/35/6f7235447ca2c37edf7df110269d363b.jpg",
    },
  ];

  const handleOpen = (index)=>{
    setSlider(index)
    setOpen(true)
  }
  return (
    <div>
      <Nav />
      <Header type="list" />

      <div className="hotelContainer">
        {open && <div className="slider">
          <ImCancelCircle onClick={()=> setOpen(false)}/>
          <AiOutlineArrowLeft/>
          <div className="sliderWrapper">
            <img src={photos[slider].img} alt="" className="sliderImg" />
          </div>
          <AiOutlineArrowRight/>

        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <ImLocation />
            <span>Elton St 123 Uk</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay $112 at this property and get a free airport texi
          </span>
          <div className="hotelImages">
            {photos.map((value,index) => {
              return (
                <>
                  <div className="hotelImgWrapper">
                    <img onClick={()=>handleOpen(index)} className="hotelImg" src={value.img} alt="img" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of UK</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae reprehenderit, ullam, eligendi minus odit illum
                minima facere deserunt earum corrupti animi! Incidunt, aliquam
                fuga repellat reiciendis, iste aspernatur laboriosam nobis eius
                at facilis quo ex debitis consequatur expedita veniam delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                beatae!
                
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1> Perfect for 9-night stay</h1>
              <span>
                Located in the real heart of UK, this property has an excellent location score of 9.8
              </span>
              <h2>
                <b>$567</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
}
