import React, { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Radio from '@mui/material/Radio';

export default function SignUp(){

  const navigate= useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
Instructor:'',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    let username = formData.username;
     let email = formData.email;
     let password = formData.password;
const Instructor = formData.Instructor?formData.Instructor:false;

    console.log(Instructor);
     axios.post('http://localhost:8080/Signup',{username, email , password,Instructor})

 .then(result =>{
console.log(result)
if(result.data === "Success"){
   

         toast("Successfuly Sign-UP");
       navigate("/Login")
} 
if(result.data=== "Exixt"){
     toast("User Already Exixt");
     navigate("/Signup")
}
})
.catch(err =>{
console.log(err);
     toast("Some Error has ocurd");
     navigate("/Signup")
})
 
        

      setFormData({ username: '', email: '', password: '' });
    }
  
     
return (
  <div className="signUpPage">
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label>Name</label>
          <input name="username" value={formData.username} onChange={handleChange} required/>
        
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} required/>
      </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
         
        </div>
<div>
   <label htmlFor='radio'>Sign-Up As a Instructor</label>
<input
type='radio'
name='Instructor'  
value={formData.Instructor}
onChange={()=>formData.Instructor=true}>
</input>
</div>

   
    
  


        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
}