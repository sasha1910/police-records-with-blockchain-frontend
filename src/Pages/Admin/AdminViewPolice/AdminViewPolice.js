import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'
import PoliceList from "../../Police/PoliceList/PoliceList"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
function AdminViewPolice() {
  return (
    <div className='container-fluid'>
        <div>
    <Navbar/>
        </div>

        <div className='main'>
            <div className='sidebar'><Sidebaradmin /></div>
            <div className='criminal'> <PoliceList/></div>
        </div>
    </div>
  )
}

export default AdminViewPolice