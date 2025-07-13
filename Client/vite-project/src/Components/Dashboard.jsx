
import { useEffect, useState } from "react";
import Course from "./Course";
import axios from 'axios';
import profileImg from "../assets/profile.png"

export default function Dashboard(){
const[user,setUser]= useState([]);
const[courses,setCourses] = useState([])



    useEffect(()=>{
      
 const Email = sessionStorage.getItem("token");

 console.log("email:"+Email);
  axios.get(`http://localhost:8080/user/${Email}`)
  .then((users) => {
    setUser(users.data)

  })
  .catch(err =>
    console.log(err));

  
},[])


useEffect(()=>{

   axios.get('http://localhost:8080/Courses')
.then(courses =>
  setCourses(courses.data))
  .catch(err =>
    console.log(err));
  
},[])
  





    return(
        <div>
        <div className="profile">
          <div className="profile-img">
            <img src={profileImg}></img>
         
            <div>
                <h1>Welcome, {user.username}</h1>
                <p>Email: {user.email}</p>
            
                         
                {
            user.Instructor ? <div><p>Role: Instructor</p> <a href="/Create"> <button >Create New Course</button> </a></div>
       : <p>Role: Student</p> 
    
            }
            </div>
        
        </div>    </div>
         
          <hr style={{color:"black"}}></hr>
          
     


        
          
          
       {
          
        
       user.Instructor? <div className="profile-note">
   <h4>Dear{"["+user.username+"]"}</h4>
   <p>Your expertise in online Education in environment  and your dedication to education are highly valued, and we are confident that your guidance will greatly enrich the learning experience of our students. We look forward to your insights, teaching style, and the impact you will make in shaping minds and inspiring growth.

Thank you for being part of this journey. We are excited to collaborate with you and wish you a rewarding and successful course ahead.</p> 
  </div>    
  :<div className="profle-course">
            <h4>Enrolled Courses</h4>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
          {
                       courses?.map((course)=>{
             for (let i = 0; i < user.EnrolledCourse.length; i++) {
               if(course._id === user.EnrolledCourse[i]){
            return <Course course={course} key={1}/>
                          
                        }
             }
                       
                         })
                        }
                        </div>
                       
   </div>
}
    
</div>
    )
  }