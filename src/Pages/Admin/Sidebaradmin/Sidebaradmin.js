import { People, Person } from "@material-ui/icons";
import { useState } from "react";
import "./Sidebaradmin.css";
import "../../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
import {Link } from "react-router-dom";
const Sidebar = () => {
  const onPressLogout = () => setAddress("");
  const [address, setAddress] = useState("");
  return (
    <div >
    <div className="sidebar">
      <hr />
      <div className="center">
      
        
       
        <ul>

          <li>
          
          <Link to="/admindashboard" className="navbar-items text-decoration-none mt-3 "> Dashboard</Link>
          </li>
         
            <li>
              <Link to="/adminviewcriminals" className="navbar-items text-decoration-none mt-3 ">Criminals</Link>
            </li>
            <li>
            <Link to="/adminviewpolice" className="navbar-items text-decoration-none mt-3 ">Police</Link>
            </li>
            <li>
            <Link to="/adminviewcoart" className="navbar-items text-decoration-none mt-3 ">Court</Link>
            </li>
            <li>
            <Link to="/adminviewprison" className="navbar-items text-decoration-none mt-3 ">Prison</Link>
            </li>
            <li>
            <Link to="/adminviewStation" className="navbar-items text-decoration-none mt-3 ">Police Station</Link>
            </li>
            <li>
            <Link to="/adminviewCases" className="navbar-items text-decoration-none mt-3  ">Cases</Link>
            </li>
         
        </ul>
        <div>
        <Link to="/">
        <button className="admin-sidebar-btn"   onPressLogout={onPressLogout}>LogOut</button>
        </Link>
        </div>
      </div>
    
    </div>
  
    </div>
  );
};

export default Sidebar;