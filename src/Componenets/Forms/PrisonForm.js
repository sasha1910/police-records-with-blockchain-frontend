
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import "../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"

const baseURL = "http://localhost:9000/api/v1/prison";





export default function AddPrisonForm() {
 
  const [no, setNo] = useState(0)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')

 
 


  const onSubmitHandler=(e)=>{
    e.preventDefault();
    axios.post(baseURL,{
      no:no,
      name:name,
      location:location,
    
   
    }).then(()=>{
      alert(`registration: \n 
      for: ${name} \n 
      SUBMITTED SUCCESFULLY`);
      console.log(name)
      e.target.reset();
    })
    
  }
  
  

  

  return (
    
    <div className="container bg-dark">
     
      <h1 className="text-light">Add Prison</h1>
      <form className="" onSubmit={ onSubmitHandler }>
        <div className="d-flex ">
        
        <div className="newUserItem">
          <label>Number</label>
          <input className="form-control" type="text" required placeholder="1" onChange={(e)=>{setNo(e.target.value)}} />
        </div>
        
        <div className="newUserItem">
          <label> Name</label>
          <input className="input" type="text" required placeholder="machakos" onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input className="input" type="text" required placeholder="machakos" onChange={(e)=>{setLocation(e.target.value)}} />
        </div>
     
        </div>
        <button type="submit" className="newUserButton">submit</button>
      </form>
   
      
    </div>
  );
}