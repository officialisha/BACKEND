import { text } from "express";
import mongoose from "mongoose";
 const {Schema}=mongoose;

const RentalSchema=new mongoose.Schema(
    {
        
    //     cheapestPrice:{
    //         type:Number,
    //         required:true
    //     },
          
     Rental_Type:{
        type:String,
        default:"Not Decided"
     },
     Location:{
        type:String,
        default:"Not Decided"
     },

     Owner_Name:{
        type:String,
        default:"Not Decided"
     },
     Owner_Mobile:{
        type:String,
        default:"Not Decided"
     },
     Vehicle_Nuber:{
        type:String,
        default:"Not Decided"
     },
     Capacity:{
        type:String,
        default:"Not Decided"
     }

    
     
     }


);

export default mongoose.model("Rental",RentalSchema)
