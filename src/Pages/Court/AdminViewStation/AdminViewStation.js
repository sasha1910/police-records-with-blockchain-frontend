import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'

import "./AdminViewStation.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
import Station from '../../Station/Station'

function adminviewStation() {
  return (
    <div className='container-fluid'>
        <div>
    <Navbar/>
        </div>

        <div className='main'>
            <div className='sidebar'><Sidebaradmin/></div>
            <div className='criminal'> <Station/></div>
        </div>
    </div>
  )
}

export default adminviewStation