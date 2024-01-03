
import '../Asserts/Styles/Login.css';
import Footer from '../Components/Footer.js';
import { UserRound } from 'lucide-react';
import { KeyRound } from 'lucide-react';
function Login() {
  return (
    <>
    <div className='container'>  

<form >
    <div className="album">
      <center>
          <fieldset className="set1">
    <h1>   
      LOGIN
    </h1>
    <br></br>
        <UserRound color='black'/>
        <input type="email" placeholder="E-mail" className="input_txt"></input>
       <br></br>
      <br></br>
      <KeyRound color='black'/>
          <input type="password" placeholder="Password" className="input_txt"></input>
        <br></br>
        <br></br>  
        <span className="forgot-password"><a href="#">Forgot Password ?</a></span>  
        <br></br>  
        <br></br> 
        {/* <button>Login</button> */}
        <br></br>
        {/* <h3>Doesn't have an account</h3><a href="Signup.js">Signup</a> */}
        <input type="submit" value="Login" className="login-button"></input> 
        <br></br>
        <h3>New User? </h3><a href="Signup.js">Sign Up</a>
        </fieldset>
        </center>
     </div>
     </form>
     </div>
     <Footer />
     </>
   );
 }
 
 export default Login;