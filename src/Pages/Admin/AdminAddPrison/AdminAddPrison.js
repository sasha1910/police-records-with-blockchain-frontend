import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'

import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"

import AddPrisonForm from '../../../Componenets/Forms/PrisonForm'

function AdminAddPrison() {
  return (
    <div className='container-fluid'>
    <div>
<Navbar/>
    </div>

    <div className='main'>
        <div className='sidebar'><Sidebaradmin/></div>
        <div className='criminal'> <AddPrisonForm/></div>
    </div>
</div>
  )
}

export default AdminAddPrison