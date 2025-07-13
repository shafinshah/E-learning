import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
export default function ShowCourse(){
    const {id}= useParams();
const[courses, setCourses]= useState([]);
 const navigate= useNavigate();


useEffect(()=>{
const Email = sessionStorage.getItem("token");

  axios.get(`http://localhost:8080/Courses/${id}`)
  .then(courses =>
  setCourses(courses.data))
  .catch(err =>
    console.log(err));
  
},[])

const handelDelet=()=>{
      axios.delete(`http://localhost:8080/Courses/${id}`)
 .then(result =>{
console.log(result)
if(result.data === "Success"){
   

         toast("Course Deleted");
       navigate("/")
} 
})
.catch(err =>{
console.log(err);
     toast("Some Error has ocurd");
     console.log(err)
     navigate("/")
})
}
let handelEnroll = ()=>{
 const Email = sessionStorage.getItem("token");
 console.log(Email);
  axios.post("http://localhost:8080/Enroll",{id,Email})
  navigate("/Dashboard")
}
 const Email = sessionStorage.getItem("token");
let owner = Email === courses.owner;



    return(
      <div className="card">
        <div className="card-top">
      <div className="card-image">
   
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={courses.imageUrl}
      />
    </div>
    <div  className="card-title">
<h1>{courses.title}</h1>
<br></br><br></br><br></br>
{
  Email?<Button variant="contained" color="success" onClick={handelEnroll}>Enroll</Button>:null
}
      
      {
      owner ? <Button variant="outlined" color="error" onClick={handelDelet}>Delete</Button> : <p>Owner: {courses.owner}</p>
      }


      </div>
   



    </div>
   
      <br></br>   <br></br>   
      <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br> 
        <br></br>  <br></br>   <br></br>   <br></br> 
      

 <div className="text">
 <h1>Description</h1>
      <p>{courses.description}</p>
      <br></br>
      <h2>Key Features</h2>
      <p>{courses.keyFeatures}</p>
   <br></br>
   <hr></hr>
   <p>Price:{courses.price} &#8377;</p>
   <p>Created At: {courses.createdAt}</p>
   </div>
    </div>



  );
};



        