import { BrowserRouter,Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
// import Homeproduct from "./Homeproduct";
function Navbar(){
   
   <nav>
   <ul>
    <li>
        <Link to ='/'>Home</Link>
    </li>
    <li>
        <Link to ='/login'>Login</Link>
    </li>
    <li>
        <Link to='/signup'>Signup</Link>
    </li>
    <li>
        <Link to={`/about`}>About</Link>
    </li>

   </ul>
   </nav>
   {/* <Routes>
     <Route exact path='/' element={<Home />}/>
     <Route exact path='/login' element={<Login />}/>
     <Route exact path='/signup' element={<Signup />}/>
   </Routes> */}
  
}
export default Navbar;