
const dot = require('dotenv');

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const passport = require("passport");
const LocalStrategy = require("passport-local");
const UserModel = require('./models/user');
const session = require("express-session");
const user = require("./models/user");
app.use(express.urlencoded({extended:true}));
const CourseModel = require("./models/courses");
const bodyParser = require("body-parser");

dot.config().parsed;
const AtlasUrl = process.env.AtlasUrl;


const MONGO_URL = "mongodb://127.0.0.1:27017/E-learning";

app.use(bodyParser.json());

main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(AtlasUrl);
    
}

const port = 8080;

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
  saveUninitialized: true,
  cookie: {
    expires : Date.now() + 0 * 0 * 0 * 0 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};



app.use(session(sessionOptions));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(UserModel.authenticate()));

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());








 
  
    
  

  


//courses new UserModel({email, username, password,Instructor});
app.post("/newCourses",async(req,res)=>{
    try{
    let {title,description ,price,imageUrl,keyFeatures,owner}= req.body;

    let createdAt = Date.now().toString();
    console.log(createdAt)


 const couser = new CourseModel({title,description,price,imageUrl,keyFeatures,owner,createdAt});
      await couser.save();
res.json("Success");
    }
    catch(err){
             console.log(err)
res.json(err);
    }
})

app.get("/Courses",async(req,res)=>{
CourseModel.find()
.then(couses => res.json(couses))
    .catch(err => res.json(err));
})

app.get("/Courses/:id",(req,res)=>{
    let {id}= req.params;
  
    CourseModel.findById(id)
    
    .then(course => res.json(course))
    .catch(err => res.json(err));
})

app.delete("/Courses/:id",async(req,res)=>{
  let {id}= req.params;
 let deteted = await CourseModel.findByIdAndDelete(id)
 .then(
    res.json("Success"))
    .catch(err=>res.json(err));
 console.log(deteted);
})

app.post("/Enroll",async(req,res)=>{
    let {id,Email}= req.body;
  let course = await CourseModel.findById(id);
  let user = await UserModel.findOne({username:Email});
  console.log(user);
 await user.EnrolledCourse.push(course);

console.log(user);
user.save();
}
)

app.get("/user/:Email",async(req,res)=>{
let {Email} = req.params;
    console.log("app emailS   "+ Email);
        UserModel.findOne({username: Email}).
then((user)=>{ 
        res.json(user)
   
    })
    .catch(err=> res.json(err));



})




app.post("/Signup",async(req,res)=>{
    try{
    let {username,email,password,Instructor} = req.body;
const newUser = new UserModel({email, username,Instructor});
const registerUser = UserModel.register(newUser, password);
console.log(registerUser);

    
return res.json("Success");
    

 } catch(error){
        console.log(error)
        res.json("Exixt")
    }
});




app.post("/Login", 
    passport.authenticate("local",{
        failureRedirect: "/Login",
        failureFlash: true,
        failureMessage: true,
  
    }),
    async(req,res)=>{
    
       res.json("Success")
    }
   
);

app.get("/Logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            res.json(err);
        }
       res.json("Success");
    })
});




app.listen(port,() => {
    console.log("app listen");
});