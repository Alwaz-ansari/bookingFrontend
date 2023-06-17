import React, { useState } from 'react'
import {Nav} from '../../components/Nav'
import {Header} from '../../components/Header'
import './list.css'
import {BsCalendar} from 'react-icons/bs'
import {useLocation} from 'react-router-dom'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range'
import {Searchitem} from '../../components/Searchitem'



export function List() {
  const location = useLocation()
  const[openDate, setOpendate] = useState(false)
  const[destination ,setDestination] = useState(location.state.destination)
  const[date, setDate] = useState(location.state.state)
  const[time, setTime] = useState(location.state.options)
  console.log(location)


  return (
    <div>
      <Nav/>
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>

          <div className='listSearch'>
            <h1 className="lsTitle">Search</h1>
            <div className='lsItem'>
              <label htmlFor="">Destination</label>
              <input type="text" name="" id="" placeholder={destination} />
            </div>
            <div className='lsItem'>
              <label htmlFor="">Check-in date</label>
              <span onClick={()=>setOpendate(!openDate)}>
                {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
              </span>
              {openDate &&
              <DateRange
              onChange={(item)=>setDate([item.selection])}
              minDate={new Date()}
              ranges={date}

              />}

              <div className='lsItem'>
                <label htmlFor="">Options</label>
                <div className='lsOptionitem'>
                  <span className='lsOptiontext'>Min price <small>per night</small></span>
                  <input type="number" min={1} name="" id="" className='lsOptioninput'/>
                </div>

                <div className='lsOptionitem'>
                  <span className='lsOptiontext'>Min price <small>per night</small></span>
                  <input type="number" min={1} name="" id="" className='lsOptioninput'/>
                </div>

                <div className='lsOptionitem'>
                  <span className='lsOptiontext' placeholder=''>Adult</span>
                  <input type="number" min={1} name="" id="" className='lsOptioninput'/>
                </div>
                <div className='lsOptionitem'>
                  <span className='lsOptiontext'>Children</span>
                  <input type="number" min={0} name="" id="" className='lsOptioninput'/>
                </div>
                <div className='lsOptionitem'>
                  <span className='lsOptiontext' placeholder=''>Room</span>
                  <input type="number" min={1} name="" id="" className='lsOptioninput'/>
                </div>
              </div>
            </div>
            <button className='btn'>search</button>
          </div>
          <div className='listResult'>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>


            <Searchitem/>

          </div>
        </div>
      </div>
    </div>
  )
}

