import React from 'react'
import "./About.css"

function About() {
  return (
    <div>
      <header  className="header" >
        <p>POLICE RECORDS MANAGEMENT SYSTEM</p>
     <div className="header_content">
     <a href="/" className="about">Home</a>
        <a href="/about" className="about">About</a>
        <a href="/contact" className="about">Contact</a>
        
      
        
  
        </div>
        
       
      </header>
      <div className = "about-wrapper">
      <div className = "about-left">
        <div className = "about-left-content">
          <div>
            <div className = "shadow">
              <div className = "about-img">
                
              </div>
            </div>

            <h2>Police Records Management system</h2>
            <h3>With Blockchain Technology</h3>
          </div>

          <ul className = "icons">
            <li><i className = "fab fa-facebook-f"></i></li>
            <li><i className = "fab fa-twitter"></i></li>
            <li><i className = "fab fa-linkedin"></i></li>
            <li><i className = "fab fa-instagram"></i></li>
          </ul>
        </div>
        
      </div>

      <div className = "about-right">
        <h2>About<span>!</span></h2>
        <h2>Here's who I am & what I do</h2>
       

        <div className = "about-para">
          <p>Criminal records are highly sensitive public records.
         By incorporating criminal records in a blockchain,
          authenticity and rigidity of records can be maintained;
           which also helps to keep the data safe from adversaries.
            A peer to peer cloud network enables the decentralization of data. 
            It helps prevent unlawful changes in the data.
             This project introduces a criminal record storage system by
              implementing blockchain technology to store the data,
               which helps to attain integrity and security</p>
      
        </div>
       
      </div>
    </div>
   
    </div>
    
  )
}

export default About