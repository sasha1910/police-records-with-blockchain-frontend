import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'
import "./AdminAddPolice.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
import AddPolice from '../AddPolice/AddPolice'

function AdminAddPolice() {
  return (
    <div className='container-fluid'>
    <div>
<Navbar/>
    </div>

    <div className='main'>
        <div className='sidebar'><Sidebaradmin/></div>
        <div className='criminal'> <AddPolice/></div>
    </div>
</div>
  )
}

export default AdminAddPolice