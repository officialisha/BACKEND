import mongoose from "mongoose";
 const {Schema}=mongoose;

const feedbackSchema=new mongoose.Schema(
    {
        
           
             Email:{
                type:String,
                
        
                     },


                     Feedback:{
                        type:String,
                        
                
                             },


                        

                    //  feedbackNumbers:[{
                    //     number:Number,
                    //     unavailabledates:{type:[Date]},
                    //  }],
    
     
    }


);

export default mongoose.model("feedback",feedbackSchema)
