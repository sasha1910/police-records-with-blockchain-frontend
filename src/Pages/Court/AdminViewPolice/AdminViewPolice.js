import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'

import "./AdminViewPolice.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
import PoliceList from '../../Police/PoliceList/PoliceList'
function AdminViewPolice() {
  return (
    <div className='container-fluid'>
        <div>
    <Navbar/>
        </div>

        <div className='main'>
            <div className='sidebar'><Sidebaradmin/></div>
            <div className='criminal'> <PoliceList/></div>
        </div>
    </div>
  )
}

export default AdminViewPolice