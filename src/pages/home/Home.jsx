import React from 'react'
import './home.css'
import {Nav} from '../../components/Nav'
import {Header} from '../../components/Header'
import {Collapseone} from '../../components/Collapseone'
import {Feature} from '../../components/Feature'
import{Offers} from '../../components/Offers'
import {Add} from '../../components/Add'
import {Exploreindia} from '../../components/Exploreindia'
import {Travellers} from '../../components/Travellers'
import {Inspration} from '../../components/Inspration'
import {Footer} from '../../components/Footer'

export function Home() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Collapseone/>
      <Offers/>
        <Feature/>
        <Add/>
        <Exploreindia/>
       <Travellers/>
       <Inspration/>
       <Footer/>

    </div>
  )
}

