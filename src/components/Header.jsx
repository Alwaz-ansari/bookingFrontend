import React from 'react'
import{FaBed} from 'react-icons/fa'
import{BsFillAirplaneFill} from 'react-icons/bs'
import{BsTaxiFrontFill} from 'react-icons/bs'
import{AiFillCar}from 'react-icons/ai'
import {BsCalendar} from 'react-icons/bs'
// import {SlCalender} from 'react-icons/si'
import '../styles/header.css'
import {GiPerson} from 'react-icons/gi'
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
// import {useNavigate} from 'react'
import {useNavigate} from 'react-router-dom'



 export function Header({type}) {
  const[destination, setDestination] = useState('')
  const[openDate , setOpenDate] = useState(false);
  const[openOption ,setOpenOption] = useState(false);
  const[options, setOptions] = useState({
    adult : 1,
    children : 0,
    room:1
  })
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const handleoption = (name,operation)=>{
        setOptions(prev=>{
          return {
            ...prev, [name] : operation === 'i' ? options[name]+1: options[name]-1
          }
        })

      }

      const navigate = useNavigate()
      const search = ()=>{
        if(destination.length!==0 && openDate.length!==0 ){
          navigate('/hotelList',{state:{destination,state,options}})

        }
      }
    
  return (
       <div className='header'>
        {/* <div className='header-container'> */}
        <div className={type==="list"? "header-container listMode": "header-container"}>

        <div className='headerList'>
            <div className='headerListItem active'>
                <FaBed/>
                <span>Stay</span>
            </div>

            <div className='headerListItem'>
                <BsFillAirplaneFill/>
                <span>Stay</span>
            </div>

            <div className='headerListItem'>
                <BsTaxiFrontFill/>
                <span>Stay</span>
            </div>
            <div className='headerListItem'>
                <AiFillCar/>
                <span>Stay</span>
            </div>
        </div>

        {  
        type !== "list" &&
          
          <>

        
        <h1 className='headerTitle'>Find your next stay
</h1>
        <p className='headerDes'>Get rewareded for your travels unlock instant savings of 10% or more with a Booking account</p>
        <button className='headerbtn'>Sign In / Register</button>
        <div className='headersearch'>
        <div className='headersearchitem'>
        <FaBed className='headericon'/>
        <input type='text'
          placeholder='Where are you going?'
          className='headersearchinput'
          onChange={(e)=> setDestination(e.target.value)}
        />

        </div>
        <div className='headersearchitem'>
        <BsCalendar className='headericon'/>
          <span className='headersearchtext' onClick={()=> setOpenDate(!openDate)}>{`${format(state[0].startDate, "MM/dd/yyyy")} to ${format(state[0].startDate, "MM/dd/yyyy")}`}</span>
         {openDate && <DateRange
          className='date'
           editableDateInputs={true}
           onChange={item => setState([item.selection])}
           moveRangeOnFirstSelection={false}
           minDate={new Date()}

         ranges={state}/>}

        </div>

        <div className='headersearchitem'>
            <GiPerson className='headericon'/>

        <span className='headersearchtext' onClick={()=> setOpenOption(!openOption) }>{`${options.adult} adult . ${options.children} children .${options.room} room. `}</span>
        {openOption && 
            <div className='options'>
              <div className='optionItem'>
                <span className='optionText'>Adult</span>
                <div className='optionCounter'>

                <button  disabled={options.adult<=1} className="optionCount" onClick={()=>handleoption("adult","d")}>-</button>
                <span className='optionNumber'>{options.adult}</span>
                <button className="optionCount" onClick={()=>handleoption("adult","i")}>+</button>
                </div>

              </div>

              <div className='optionItem'>
                <span className='optionText'>Children</span>
                <div className="optionCounter">
                <button disabled={options.children<=1} className="optionCount" onClick={()=>handleoption("children","d")}>-</button>
                <span className='optionNumber'>{options.children}</span>
                <button  className="optionCount" onClick={()=>handleoption("children","i")}>+</button>
                </div>
                 </div>

              <div className='optionItem'>
                <span className='optionText'>Room</span>
                <div className="optionCounter">
                <button disabled={options.room<=1} className="optionCount" onClick={()=>handleoption("room","d")}>-</button>
                <span className='optionNumber'>{options.room}</span>
                <button  className="optionCount" onClick={()=>handleoption("room","i")}>+</button>
                </div>
              </div>
            </div>
        }
        </div>
        <div className='headersearchitem'>

         <button className='headerbtn' onClick={search}>Search </button>
        </div>

         </div>
         </> }
        </div>
      
    </div>

  )
}

