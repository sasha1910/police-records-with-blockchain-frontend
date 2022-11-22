
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import "../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"

const baseURL = "http://localhost:9000/api/v1/case";





export default function AddCaseForm() {
 
  const [no, setNo] = useState(0)
  const [complainant, setComplainant] = useState('')
  const [accused, setAccused] = useState('')
  const [reported, setReported] = useState('')
  const [status, setStatus] = useState('')
  

 
 


  const onSubmitHandler=(e)=>{
    e.preventDefault();
    axios.post(baseURL,{
      no:no,
      complainant:complainant,
      reported:reported,
      accused:accused,
      status:status

    
   
    }).then(()=>{
      alert(`registration: \n 
      for: ${no} \n 
      SUBMITTED SUCCESFULLY`);
      console.log(no)
      e.target.reset();
    })
    
  }
  
  

  

  return (
    
    <div className="container bg-dark">
     
      <h1 className="text-light">Record a new case</h1>
      <form className="" onSubmit={ onSubmitHandler }>
        <div className="d-flex ">
        
        <div className="newUserItem">
          <label>Case Number</label>
          <input className="form-control" type="text" required placeholder="1" onChange={(e)=>{setNo(e.target.value)}} />
        </div>
        
        <div className="newUserItem">
          <label> Complainant</label>
          <input className="input" type="text" required placeholder="machakos" onChange={(e)=>{setComplainant(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Accused</label>
          <input className="input" type="text" required placeholder="machakos" onChange={(e)=>{setAccused(e.target.value)}} />
        </div>
        <div className="newUserItem">
          <label>Reported Date</label>
          <input className="input" type="text" required placeholder="machakos" onChange={(e)=>{setReported(e.target.value)}} />
        </div>
      
     
        </div>
        <button type="submit" className="newUserButton">submit</button>
      </form>
   
      
    </div>
  );
}