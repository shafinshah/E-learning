import { useState } from "react";
import Course from "./Course" 
import axios from 'axios';
import { useEffect } from "react";
import React from "react";


export default function CoursesTab(){


const[courses, setCourses]= useState([]);
const[query, setQuery] = useState('');


useEffect(()=>{

   axios.get('http://localhost:8080/Courses')
.then(courses =>
  setCourses(courses.data))
  .catch(err =>
    console.log(err));
  
},[])


   


    return (

      <>  
        <div className="CoursesTab">
           <h1>Our Courses</h1>
           <p>Explore Our created courses to boost you skill and career. Whether you`re a beginner or an expert , We have something for everyone</p>
           <input type="text" placeholder="Search For Course" onChange={(e)=> setQuery(e.target.value.toLowerCase())} className="Search"></input>
        </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1" > 
        
             
              {
              courses.filter((course)=>{
                return query.toLowerCase() === ""
?
                course : course.title.toLowerCase().includes(query)}).map((course)=>{
return <Course course={course} key={1}/>
              })
              
             }
           
                    
                    </div>



                </> 
    
    )
}