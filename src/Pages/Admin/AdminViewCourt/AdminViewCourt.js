import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'
import CriminalList from '../../Criminals/CriminalList'
import "./AdminViewCourt.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
import CourtList from '../../CourtList/CourtList'
function AdminViewCourt() {
  return (
    <div className='container-fluid'>
        <div>
    <Navbar/>
        </div>

        <div className='main'>
            <div className='sidebar'><Sidebaradmin/></div>
            <div className='criminal'> <CourtList/></div>
        </div>
    </div>
  )
}

export default AdminViewCourt