import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'

import "./AdminViewPrison.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
import PrisonList from "../../Prison/PrisonList/PrisonList"
function AdminViewPrison() {
  return (
    <div className='container-fluid'>
        <div>
    <Navbar/>
        </div>

        <div className='main'>
            <div className='sidebar'><Sidebaradmin/></div>
            <div className='criminal'> <PrisonList/></div>
        </div>
    </div>
  )
}

export default AdminViewPrison