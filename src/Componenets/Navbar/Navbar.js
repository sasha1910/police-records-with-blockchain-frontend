import React from 'react'
import "./Navbar.css"
import "../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"

function Navbar() {
  return (
    <div className='navbar'>
   <p className='m-4 text-center'> Police Records Management System</p>
    <div className="dropdown">
  <button className="dropbtn"><img src="../../Assets/images/adminphoto.jpg"></img></button>
  <div className="dropdown-content">
    <a href="#">Profile</a>
    <a href="#">Logout</a>
  </div>
</div>
    </div>
  )
}

export default Navbar