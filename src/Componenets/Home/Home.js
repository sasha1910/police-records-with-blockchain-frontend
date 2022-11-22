import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div className='Home-top'>
    <div>Name</div>
    <div>
        <ul>
            <li></li>
            <button className='btn btn-success mr-3'>Sign In</button>
            <button className='btn-sign-up'>Sign Up</button>
        </ul>
    </div>
    </div>
  )
}

export default Home