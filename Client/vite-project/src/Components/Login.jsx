 import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Login(){
  
const navigate= useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
      let username = formData.username;
         let password = formData.password;

           
     axios.post('http://localhost:8080/Login',{username , password})

    .then(result => {console.log(result)
if(result.data === "Success"){
  toast("Successfuly Login")
  
   sessionStorage.setItem("token",formData.username);
 
  navigate("/")
}

  })
        .catch(err => {console.log(err)
        toast("Username & Password Is Inccorect")
          navigate("/Login")

  });

setFormData({
username: "",
password:"",
})

  
}


   



     
    
 

  return (
    <div className="loginPage">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Enter Username</label>
          <input
            name="username"
            type="string"
            value={formData.username}
            onChange={handleChange}
            required
          />
    
        </div>

        <div className="form-group">
          <label>Enter Password</label>
          <input
            name="password"
            type="string"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
        </div>

        <button type="submit">Login</button>
        <p className="signup-link">
          Don’t have an account? <a href="/Signup">Sign up</a>
        </p>
      </form>
    </div>
    </div>
  );
};



