const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
 
   
  
    email: {
        type: String,
        require: true
    },


   
    EnrolledCourse:[
      {
              type: Schema.Types.ObjectId,
                ref: "courses",
            },
  ],
   Instructor :{
      type:Boolean,
      require:true
    }

});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("user", userSchema);