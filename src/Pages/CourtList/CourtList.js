import React from 'react'
import {Link } from "react-router-dom";
import{ useState ,useEffect} from 'react'
import axios from 'axios';


const baseURL = "http://localhost:9000/api/v1/court";





function CourtList() {

  const [criminal,setCriminal]=useState([]);

     //DELETE
     const deletePolice=(id,e)=>{
      e.preventDefault();
      axios.delete(`/${id}`).then(()=>{
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
       
        const data=response.data.court;
        console.log(data)
        
        setCriminal(data); 
      });
  
    }, []);


  return (
    <div className='container'>
    <h3 className='text-light'>Courts</h3>
    <Link to="/adminaddcourt" className="btn btn-success"> Add Court</Link>
   <table className="table">
    
<thead>
  <tr>
    <th className='text-light'>Court Number</th>
    <th className='text-light'> Name</th>
    <th className='text-light'>Location</th>
    
  
    
    
   
   
  </tr>
</thead>
<tbody>
{criminal.map((item) => (
          <tr className='tr' key={item.id}>
          
            <td className='text-light' >{item.no}</td>
            <td className='text-light' >{item.fname}</td>
            <td className='text-light' >{item.lname}</td>
          
        
          
        <td >
        <button className='btn btn-success'  onClick={(e)=>updatePolice(criminal._id,e)}>edit</button>
        <button className='btn btn-danger' onClick={(e)=>deletePolice(criminal._id,e)}>delete</button>
        </td>
            
          </tr>
        ))}
  
</tbody>
</table>
</div>
  )
}

export default CourtList