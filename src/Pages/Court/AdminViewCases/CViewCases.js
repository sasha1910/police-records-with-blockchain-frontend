import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'

import "./AdminViewCases.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
import Station from '../../Station/Station'
import Cases from '../../Cases/Cases'

function AdminViewCases() {
  return (
    <div className='container-fluid'>
        <div>
    <Navbar/>
        </div>

        <div className='main'>
            <div className='sidebar'><Sidebaradmin/></div>
            <div className='criminal'> <Cases/></div>
        </div>
    </div>
  )
}

export default AdminViewCases