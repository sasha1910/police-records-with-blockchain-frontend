
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Sidebar from './Componenets/Sidebar/Sidebar';
import AdminDashBoard from './Pages/Admin/AdminDashBoard/AdminDashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './Pages/NoPage';
import PoliceDashboard from './Pages/Police/PoliceDashboard/PoliceDashboard';
import CriminalList from './Pages/Criminals/CriminalList';
import AdminViewCriminal from './Pages/Admin/AdminViewCriminals/AdminViewCriminal';
import AdminViewPolice from './Pages/Admin/AdminViewPolice/AdminViewPolice';
import AdminViewCourt from './Pages/Admin/AdminViewCourt/AdminViewCourt';
import AdminViewStation from './Pages/Admin/AdminViewStation/AdminViewStation';
import AdminViewPrison from './Pages/Admin/AdminViewPrison/AdminViewPrison';
import AdminViewCases from './Pages/Admin/AdminViewCases/AdminViewCases';
import AddPolice from './Pages/Admin/AddPolice/AddPolice';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AdminAddPolice from './Pages/Admin/AdminAddPolice/AdminAddPolice';
import AdminAddCase from './Pages/Admin/AdminAddCases/AdminAddCase';
import AdminAddPrison from './Pages/Admin/AdminAddPrison/AdminAddPrison';
import AdminAddCriminal from './Pages/Admin/AdminAddCriminal/AdminAddCriminal';
import AdminAddStation from './Pages/Admin/AdminAddStation/AdminAddStation';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="/policedashboard" element={<PoliceDashboard />} />
          <Route exact path="/adminviewcriminals" element={<AdminViewCriminal />} />
          <Route path="/criminalList" element={<CriminalList/>} />
          <Route path="/adminviewpolice" element={<AdminViewPolice/>} />

          <Route path="/adminaddpolice" element={<AdminAddPolice/>} />
          <Route path="/adminaddcourt" element={<AdminAddCase/>} />
          <Route path="/adminaddprison" element={<AdminAddPrison/>} />
          <Route path="/adminaddstation" element={<AdminAddStation/>} />
          <Route path="/adminaddcase" element={<AdminAddCase/>} />
          <Route path="/adminaddcriminal" element={<AdminAddCriminal/>} />
         

          <Route path="/admindashboard" element={<AdminDashBoard/>} />
          <Route path="/adminviewcoart" element={<AdminViewCourt/>} />
          <Route path="/adminviewprison" element={<AdminViewPrison/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/adminviewStation" element={<AdminViewStation/>} />
          <Route path="/adminviewCases" element={<AdminViewCases/>} />
          <Route path="/adminviewCases" element={<AdminViewCases/>} />

          {/* FORMS */}
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




