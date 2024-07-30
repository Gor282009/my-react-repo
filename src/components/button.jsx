import ".././App.css"
import React from 'react'

export default function Button(props) {
  return ( 
    <div className="box">
        <button className='printery-btn'>{props.name}</button>
    </div>
  )
}
