
//  import './App.css';
 import Login from './Components/Login';
  import Home from './Components/Home';
 import Navbar from './Components/Navbar';
 import Signup from './Components/Signup';
 import Nav from './Components/Nav';
import Footer from './Components/Footer';
import About from './Components/About';
// import Contact from './Components/Contact';
import { Routes,Route } from 'react-router-dom';
import Homeproduct from './Components/Homeproduct';

import React from "react";
function App() {
  return (
    <div>

        {/* <Home/> */}
       
      <Routes>
      <Route exact path='/' element={<Home />}/> 
     <Route exact path='/login' element={<Login />}/>
     <Route exact path='/signup' element={<Signup />}/>
     <Route exact path='/about' element={<About />}/>
     
     {/* <Route exact path='/contact' element={<Contact />}/> */}

   </Routes>
    </div>
  );
}

export default App;