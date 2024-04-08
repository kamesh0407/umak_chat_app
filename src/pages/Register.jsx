import React from 'react';
// import '../style.scss';
import Add from '../images/addavatar.png';


const Register = () =>{
  return (
  <div className='formContainer'>

    <div className='formWrapper'> 
    <span className='logo'>Kreedify</span>
    <span className='title'>Register</span>
    <form>
       <input type='text' placeholder='display name' />
       <input type='email' placeholder='email' />
       <input type='password' placeholder='password' />
       <input style={{display:"none"}} type='file' id='file'/>
       <label htmlFor='file'>
        <img src={Add} alt="" />
          <span>Upload your Avatar</span>
       </label>
       <button>Sign up </button>
    </form>
    <p>Do you have an  account? Login</p>
    </div>
  </div>
    );
}

export default Register;