import React from 'react';
// import '../style.scss';
// import Add from '../images/addavatar.png';


const Login = () =>{
  return (
  <div className='formContainer'>

    <div className='formWrapper'> 
    <span className='logo'>Kreedify</span>
    <span className='title'>Login</span>
    <form>
      
       <input type='email' placeholder='email' />
       <input type='password' placeholder='password' />
      
       <button>Sign in </button>
    </form>
    <p>You don't have an  account? Register</p>
    </div>
  </div>
    );
}

export default Login;