import Myimage from "../assets/smile-png.webp"
import Autocomplete from '@mui/material/Autocomplete';

import { useState } from "react";
import Course from "./Course" 
import axios from 'axios';
import { useEffect } from "react";
import Button from '@mui/material/Button';

export default function Hero(){
    const[courses, setCourses]= useState([]);



useEffect(()=>{

   axios.get('http://localhost:8080/Courses')
.then(courses =>
  setCourses(courses.data))
  .catch(err =>
    console.log(err));
  
},[])

return(
    <>
 <div className="Hero">
        <div className="Hero-text">
            <div>
<h1 >Explore Our <span className="span">40000+</span> <br></br>Online Courses For All </h1>
<p>Learn Anywhere, Anytime," "Unlock Your Potential Online," and "Education at Your Fingertips.</p>

</div>
<div>

</div>
        </div>
        <div className="photo" >
       <img src={Myimage} ></img>
        </div>
   
    </div>
     <div className="CoursesTab">
           <h1>Our Courses</h1>
           <p>Explore Our created courses to boost you skill and career. Whether you`re a beginner or an expert , We have something for everyone</p>
            </div>
   
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1" > 
        
             
              {
              courses.slice(0,6).map((course)=>{
return <Course course={course} key={1}/>
              })
              
             }
           
                 <a href="/Courses"> <Button color="secondary">Show All Courses</Button> </a> 
                    </div>
  


 
        </>
)
}