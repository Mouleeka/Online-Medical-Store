
import '../Asserts/Styles/Nav.css';
import { Truck } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Backpack } from 'lucide-react';
import { UserRound } from 'lucide-react';
// import { LogIn } from 'lucide-react';
// import { LogOut } from 'lucide-react';
 import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
//  import l1 from '../Asserts/Images/logo.png'
function Nav() {
 
  return (
    <>
    <div className='free'>
        <div className='icon'>
          <Truck />
          </div>
          <p> FREE Shipping when shopping upto $1000</p>
      </div>
      <div className='main_header'>
        <div className='cantainer'>
           <div className='logo'>
               {/* <img src={l1} alt='logo'></img>  */}
          </div> 
          <center>
          <div className='search_box'>
            <input type='text' defaultValue='' placeholder='Enter The Product Name'></input>
                <button>Search</button>
                </div>
            </center> 
                <div className='icon'>
                  <div className='account'>
                    <div className='user_icon'>
                         <UserRound/>
                    </div>
                    <p>Hello,user</p>
                  </div>
                  <div className='second_icon'>
                    <Link to="/" className='link'><Heart /></Link>
                    <p>Edit your Wishlist </p>
                    <Link to="/ cart" className='link'><Backpack /></Link>
                    <p>Add to cart</p>
                  </div>
                </div>
          </div>
        </div>
       <div className='header'>
        
        <div className='cantainer'>
          <div className='nav'>
          <ul>
            <li>
              <Link to='/' className='link'>Home</Link>
            </li>
            <li>
              <Link to='/product' className='link'>Products</Link>
            </li>
            <li>
              <Link to='/about' className='link'>About</Link>
            </li>
            <li>
              <Link to='/Contact' className='link'>Contact</Link>
            </li>
            <li>
              <Link to='/login' className='link'>Login</Link>
            </li>
            <li>
              <Link to='/signup' className='link'>Sign Up</Link>
            </li>
          </ul>
          </div>
          {/* <div className='auth'>
          <button><LogIn /></button>
          <button> <LogOut /></button>
          </div> */}
        </div>
        {/* <Routes>
     <Route exact path='/' element={<Home />}/>
     <Route exact path='/login' element={<Login />}/>
     <Route exact path='/signup' element={<Signup />}/>
   </Routes> */}
      </div> 
      </>
  );
}
export default Nav;