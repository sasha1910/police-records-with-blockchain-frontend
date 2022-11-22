import React from 'react'
import {Link } from "react-router-dom";
import{ useState ,useEffect} from 'react'
import axios from 'axios';

const baseURL = "http://localhost:9000/api/v1/police";





function PoliceList() {

  const [police,setPolice]=useState([]);

     //DELETE
     const deletePolice=(id,e)=>{
      e.preventDefault();
      axios.delete(`http://localhost:9000/api/v1/police/${id}`).then(()=>{
        alert(`item with ID ${id} deleted successfully`);
      })
      
    }
  
    //UPDATE
   const updatePolice=(e,id) =>{
      e.preventDefault();
      const user = {
          name: user.name,
          no: user.no,
          
      }
      axios.put(`/${id}`)
      .then(res => alert("clicked"));
  }
    
  
  
    //FECH DATA
    useEffect(() => {
      axios.get(baseURL).then((response) => {
       
        const data=response.data.police;
        console.log(data)
        
        setPolice(data); 
      });
  
    }, []);


  return (
    <div className='container'>
    <h3 className='text-light'>Police</h3>
    <Link to="/adminaddpolice" className="btn btn-success"> Add Police</Link>
   <table className="table">
    
<thead>
  <tr>
    <th className='text-light'>ID No</th>
    <th className='text-light'>First Name</th>
    <th className='text-light'>Last Name</th>
    <th className='text-light'>Age</th>
    <th className='text-light'>Gender</th>
    <th className='text-light'>Station</th>
    <th className='text-light'>email</th>
    <th className='text-light'>phone</th>
    
    
   
   
  </tr>
</thead>
<tbody>
{police.map((item) => (
          <tr className='tr' key={item.id}>
          
            <td className='text-light' >{item.no}</td>
            <td className='text-light' >{item.fname}</td>
            <td className='text-light' >{item.lname}</td>
            <td className='text-light' >{item.age}</td>
            <td className='text-light' >{item.gender}</td>
            <td className='text-light' >{item.station}</td>
            <td className='text-light' >{item.email}</td>
            <td className='text-light' >{item.phone}</td>
          
        <td >
        <button className='btn btn-success'  onClick={(e)=>updatePolice(police._id,e)}>edit</button>
        <button className='btn btn-danger' onClick={(e)=>deletePolice(police._id,e)}>delete</button>
        </td>
            
          </tr>
        ))}
  
</tbody>
</table>
</div>
  )
}

export default PoliceList