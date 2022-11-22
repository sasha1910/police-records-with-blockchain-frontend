import React from 'react'
import Navbar from '../../../Componenets/Navbar/Navbar'
import "../AddPolice/AddPolice.css"
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import Sidebaradmin from "../Sidebaradmin/Sidebaradmin"
import AddCaseForm from '../../../Componenets/Forms/CasesForm'
function AdminAddCase() {
  return (
    <div className='container-fluid'>
    <div>
<Navbar/>
    </div>

    <div className='main'>
        <div className='sidebar'><Sidebaradmin /></div>
        <div className='criminal'> <AddCaseForm/></div>
    </div>
</div>
  )
}

export default AdminAddCase