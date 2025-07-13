import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Login from "./Login";
import { useNavigate } from 'react-router-dom';


export default function Navbar(){
const navigate= useNavigate();


const handelSubmit =()=>{
 
sessionStorage.removeItem("token");

navigate("/Login")

}
    




   const user = sessionStorage.token;

 
    return (
        <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">E-Learning Platform</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a href="/">Home</a>
        </li>
        <li className="nav-item">
         <a href="/Courses">Courses</a>
        </li>
     </ul>
      {
        !user ? (
        <div className="Login">
      <a href="/login"><button type="button" className="btn btn-primary">Login</button> </a>
     <a href="/Signup"> <button type="button"  className="btn btn-danger">SignUp</button></a> 
   </div>) :(
    <div style={{display:"flex"}}>
       
    <a href="/Dashboard" ><Avatar /> </a>
  
  
  
    <form onSubmit={handelSubmit}>
<button type="submit" style={{marginLeft:4}}>Log-out</button>
    </form>
      </div>
   
   )
}
 </div>
  


 </div>
   

       </nav> 

</div>
)
}




 



