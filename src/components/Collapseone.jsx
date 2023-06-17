import React from 'react'
import { Collapse } from 'antd';
import '../styles/collapseone.css'
const { Panel } = Collapse;
const text = `Get the advice you need. Check the latest COVID-19 restrictions before you travel.

`;


export function Collapseone() {
  return (
    <div className='collapse-container'>
      <div className='collapse-mini'>     
        <Collapse defaultActiveKey={['1']}>
      <Panel className='panel' header="Coronavirus (COVID-19) Support" key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
    </div>
    </div>
  )
}

