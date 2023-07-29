import mongoose from "mongoose";

const userSchema  = new mongoose.Schema(
    
    {name:{
        type :String},
     email:{
      type :  String,
       require :[true,  `name is required`],
    },
     username :{
     type:String
     }
        
        
        
        });

export default mongoose.model("user",userSchema)