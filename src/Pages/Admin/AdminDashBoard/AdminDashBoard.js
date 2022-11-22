import { Person } from '@material-ui/icons'
import React from 'react'
import Card from '../../../Componenets/Card'
import Navbar from '../../../Componenets/Navbar/Navbar'
import Sidebaradmin from '../../../Pages/Admin/Sidebaradmin/Sidebaradmin'
import "./AdminDashBoard.css"

function AdminDashBoard({title,icon,count ,description}) {
  return (
    <div className='container-fluid'>
        <div className='top'>
        <Navbar/>
        </div>


    <div className='content'>
        <div>
        <Sidebaradmin/>
        </div>
        <div className='cards'>
        <Card
      
    title="Criminals"
    icon={Person}
    count={12}
   

    />
        <Card
    title="Police"
    icon={Person}
    count={12}
   

    />
        <Card
    title="Courts"
    icon={Person}
    count={12}
   

    />
        </div>
   

    
    </div>
   
    </div>
  )
}

export default AdminDashBoard