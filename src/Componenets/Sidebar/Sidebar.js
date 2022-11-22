import { People } from "@material-ui/icons";
import "./Sidebar.css";
import "../../Assets/bootstrap-5.0.2-dist/css/bootstrap.min.css"
const Sidebar = () => {
  return (
    <div >
    <div className="sidebar">
      <hr />
      <div className="center">
      
          <img src="" alt="Admin Image"></img>
       
        <ul>

          <li>
            <People/>
            <span className="navbar-items">Dashboard</span>
          </li>
         
            <li>
              <span className="navbar-items">Criminals</span>
            </li>
            <li>
              <span className="navbar-items">Police</span>
            </li>
            <li>
              <span className="navbar-items">Crime</span>
            </li>
            <li>
              <span className="navbar-items">Punishments</span>
            </li>
            <li>
              <span className="navbar-items">Court</span>
            </li>
            <li>
              <span className="navbar-items">Prisons</span>
            </li>
          <li>
            <span className="navbar-items">Logout</span>
          </li>
        </ul>
      </div>
    
    </div>
  
    </div>
  );
};

export default Sidebar;