const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
 
    title:{
        type:String,
        require:true
    },
    description:{
type:String,
require:true
    },
     price:{
        type:Number,
require:true
    },
 
   
    imageUrl:{
      type:String,
require:true
    },
     owner: {
    type: String,

    required: true
  },
     keyFeatures:{
type:String,
require:true
     },
    createdAt: {
    type: Date,
    default: Date.now.toString(),
  }
    });

    
    module.exports = mongoose.model("courses", courseSchema);