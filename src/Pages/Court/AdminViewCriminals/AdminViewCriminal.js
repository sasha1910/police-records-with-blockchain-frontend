import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'
import CriminalList from '../../Criminals/CriminalList'
import "./AdminViewCriminal.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
function AdminViewCriminal() {
  return (
    <div className='container-fluid'>
        <div>
    <Navbar/>
        </div>

        <div className='main'>
            <div className='sidebar'><Sidebaradmin/></div>
            <div className='criminal'> <CriminalList/></div>
        </div>
    </div>
  )
}

export default AdminViewCriminal