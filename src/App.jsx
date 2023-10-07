import './App.css';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { useState } from 'react'
import Home from './Components/Home';
import Web from './Components/Web';
import Research from './Components/Research';
import Navbar from './Components/Navbar';
import Embedded from './Components/Embedded';
import Design from './Components/Design';
import About from './Components/About';
import Error from './Components/Error';
function App() {
  const [show,setShow]=useState(true); 
  const alv=()=>{if(show){setShow(false);alert("For proper view rotate your phone to landscape view🔄 however, PC 💻would be better😃");  }}
  return (
    <div className='main' onLoadCapture={()=>{alv();}}>
      <Router >
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='DigitalElectronics' element={<Design/>}/>
        <Route path='EmbeddedSystems' element={<Embedded/>}/>
        <Route path='WebDevelopment' element={<Web/>}/>
        <Route path='ScientificResearch' element={<Research/>}/>
    </Routes>
  </Router> 
    </div>
  );
}

export default App;
