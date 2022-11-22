import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'
import "../AddPolice/AddPolice.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
import AddCriminalFrom from '../../../Componenets/Forms/CriminalForm'
import AddCourtForm from '../../../Componenets/Forms/CourtForm'

function AdminAddCourt() {
  return (


    <div className='container-fluid'>
    <div>
<Navbar/>
    </div>

    <div className='main'>
        <div className='sidebar'><Sidebaradmin/></div>
        <div className='criminal'> <AddCourtForm/></div>
    </div>
</div>
  )
}

export default AdminAddCourt