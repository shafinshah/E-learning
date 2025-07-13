import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function NewCourse(){

  const navigate= useNavigate();
  
  const [formData, setFormData] = useState({
title:'',
description:'',
price:'',
imageUrl:'',
keyFeatures:''
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
let {title,description,price,imageUrl,keyFeatures} = formData;
        let owner = sessionStorage.getItem("token");

   
     axios.post('http://localhost:8080/newCourses',{title,description ,price,imageUrl,keyFeatures,owner})

 .then(result =>{
console.log(result)
if(result.data === "Success"){
   

         toast("New Course Created");
       navigate("/")
} 

})
.catch(err =>{
console.log(err);
     toast("Some Error has ocurd");
     console.log(err)
     navigate("/")
})
 
        

      setFormData({
title:'',
description:'',
price:'',
imageUrl:'',
keyFeatures:''
   });
    }
  
     
return (
    <div className="col-8 offset-2">
      <form className="mb-3" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div >
          <label className='form-label'>Title</label>
          <input name="title" value={formData.title} onChange={handleChange} className='form-control' required/>
        
        </div>

        <div >
          <label className='form-label'>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className='form-control' required/>
      </div>

        
<div >
          <label className='form-label'>Price</label>
          <input name="price" type='number' value={formData.price} onChange={handleChange} className='form-control' required/>
        
        </div>

<div >
          <label className='form-label'>Image-URL</label>
          <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} className='form-control' required/>
        
        </div>
   
    
     <div >
          <label className='form-label'>Key Features</label>
          <textarea name="keyFeatures" value={formData.keyFeatures} onChange={handleChange} className='form-control' required/>
      </div>



        <button type="submit" className='btn btn-dark' style={{width:90}}>Create</button>
      </form>
    </div>
  );
}