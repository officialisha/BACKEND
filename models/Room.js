import mongoose from "mongoose";
 const {Schema}=mongoose;

const RoomSchema=new mongoose.Schema(
    {
        Full_Name:{
        type:String,
      

             },
           
             Email:{
                type:String,
                
        
                     },


                     Reason:{
                        type:String,
                        
                
                             },


                        

                    //  roomNumbers:[{
                    //     number:Number,
                    //     unavailabledates:{type:[Date]},
                    //  }],
    
     
    }


);

export default mongoose.model("Room",RoomSchema)
