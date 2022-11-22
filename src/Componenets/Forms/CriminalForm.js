
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import "../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"

const baseURL = "http://localhost:9000/api/v1/criminal";





export default function AddCriminalFrom() {
 
  const [no, setNo] = useState(0)
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState(0)
  const [station, setStation] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
 
 


  const onSubmitHandler=(e)=>{
    e.preventDefault();
    axios.post(baseURL,{
      no:no,
      fname:fname,
      lname:lname,
      age:age,
      gender:gender,
      station:station,
      email:email,
      phone:phone,
   
    }).then(()=>{
      alert(`registration: \n 
      for: ${fname} \n 
      SUBMITTED SUCCESFULLY`);
      console.log(fname)
      e.target.reset();
    })
    
  }
  
  

  

  return (
    
    <div className="container bg-dark">
     
      <h1 className="text-light">Add Police</h1>
      <form className="" onSubmit={ onSubmitHandler }>
        <div className="d-flex ">
          <div>
        <div className="newUserItem">
          <label>ID Number</label>
          <input className="form-control" type="text" required placeholder="1" onChange={(e)=>{setNo(e.target.value)}} />
        </div>
        
        <div className="newUserItem">
          <label>First Name</label>
          <input className="input" type="text" required placeholder="John Smith" onChange={(e)=>{setFname(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input className="input" type="text" required placeholder="John Smith" onChange={(e)=>{setLname(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input className="input" type="text" required placeholder="John Smith" onChange={(e)=>{setAge(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <input className="input" type="text" required placeholder="John Smith" onChange={(e)=>{setGender(e.target.value)}} />
        </div>
        </div>

        {/* second Column */}
        <div>
        <div className="newUserItem">
          <label>Station</label>
          <input className="input" type="text" required placeholder="John Smith" onChange={(e)=>{setStation(e.target.value)}} />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input className="input"
           type="email"
          name="email"
          onChange={(e)=>{setEmail(e.target.value)}}
          required placeholder="john@gmail.com" />
        </div>
      
      
        <div className="newUserItem">
          <label>Phone</label>
          <input className="input" type="text"required placeholder="0700000000" onChange={(e)=>{setPhone(e.target.value)}}/>
        </div>
        </div>
        </div>
        <button type="submit" className="newUserButton">submit</button>
      </form>
   
      
    </div>
  );
}