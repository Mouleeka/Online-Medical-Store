import '../Asserts/Styles/Signup.css';
import Footer from '../Components/Footer.js';

function Signup() {
  return (
    <>
      <div className='body1'>

<form>
    <div className="album">
      <center>
    <h1> Thank You Visit Again..!!</h1>
     
      <fieldset className="set">
    <h1>   
      Sign Up
    </h1>
    <br></br>
        <input type="text" placeholder="Firstname" className='input_txt'></input>
       <br></br>
       <br></br>
        <input type="text" placeholder="Lastname" className='input_txt'></input>
     <br></br>
       <br></br>
       {/* <MailOpen /> */}
          <input type="email" placeholder="E-mail" className='input_txt'></input>
       <br></br>
        <br></br>
          <input type="text" placeholder="Phone Number" className='input_txt'></input>
       <br></br>
        <br></br>
          <input type="password" placeholder="Password" className='input_txt'></input>
       <br></br>
        <br></br>
          <input type="password" placeholder="Confirm password" className='input_txt'></input>
      <br></br>
        <br></br>
        <input type="checkbox" name="Remember me" required></input>
        <label>Remember me</label>
        <br></br>
        <br></br>
        <button className='signup_button'>Sign Up</button>
        <h3>Already having Account</h3><a href="Login.js">Login</a>
        </fieldset>
        </center>
     </div>
     </form>
     </div>
    <Footer />
     </>
    
   );
 }
 
 export default Signup;