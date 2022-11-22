import React from 'react'

import "./Card.css"
function Card({title,icons,count,imgURL, description}) {
  return (
 <div className="card" >

  <div className="card-body">
  <img src={imgURL} alt=''>{icons}</img>
    <h4 className="text-light">{title}</h4>
    <h5 className="text-light">{count}</h5>
    <p className="card-text">{description}</p>
 
  </div>
    </div>
  )
}

export default Card