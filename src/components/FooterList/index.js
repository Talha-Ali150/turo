import React from 'react'
import './index.css'

export default function footerList(props) {

  return (
    <div className='footerListContainer'>
      <ul className='footerListContentContainer'>
        <p className='footerListHeading'>
          {props.heading}
        </p>
        {props.listItems.map((item) => {
          return <li className='footerListContent'>{item.item}</li>
        })}</ul>
    </div>
  )
}
