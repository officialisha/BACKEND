import mongoose from "mongoose";
 const {Schema}=mongoose;

const UserSchema=new mongoose.Schema(
    {
        username:{
        type:String,
        required:true,
        unique:true

             },
    
        password:{
        type:String,
        required:true,
   
                },
        isAdmin:{
        type:Boolean,
        default:false
               
                },        
   
    }


    ,{timestamp:true}

) ;

export default mongoose.model("User",UserSchema)
