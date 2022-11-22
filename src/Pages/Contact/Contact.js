import React from "react"
import "./Contact.css"
import "../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
const Contact = () => {
  return (
    <>
     
      <section className='container'>
        <div className='container'>
          <div className='left row'>
          
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street,Nairobi Kenya</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> saumu@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+254712300458</p>
              </div>
            </div>

            <form action=''>
              <div className='input-group'>
                <input type='text' placeholder='Name' /><br></br>
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact