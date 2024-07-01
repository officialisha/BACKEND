import mongoose from "mongoose";
 const {Schema}=mongoose;

const TripUserSchema=new mongoose.Schema(
    {
      Verified:{
        type:Boolean,
        default:false

      },

       FirstName:{

       },

       LastName:{

       },

       MobileNumber:{

       },
       Email:{

       },

       OtherDetailsofUser:{

       }


        


       
    
     
    }


);

export default mongoose.model("TripUser",TripUserSchema)
