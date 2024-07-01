import { text } from "express";
import mongoose from "mongoose";
 const {Schema}=mongoose;

const HotelSchema=new mongoose.Schema(
    {
        verified:{
            type:String,
            default:"false"
    
        },
        status:{
            type:String,
            default:"active"
    
        },

        Trip_Number:{
            type:String,
            required:true
    
        },
        Trip_Password:{
            type:String,
            required:true
    
        },


        Creater_Name:{
                     type:String,
                     default:"Not defined by trip creater"

             },

        Creater_Mobile_number:{
                       type:String,
                       default:"not defined by trip creater"
        
                     },
                       
                     
        Creater_Email:{
                       type:String,
                       default:"not@gmail.com"
                    
                     },



        
        From:{
              type:String,
              required:true
    
            },

        To:{
                type:String,
                required:true
        
             },


        Date:{
                type:Date,
                required:true
        
            },

      

        MaxPeople:{
                    type:String,
                   default:"0"
            
                },

        AppxTripExpenses:{
                    type:Number,
                    default:0
            
                },

         AdditionalDetails:{
                    type:String,
                    default:"Additional details are not Defined by Creater"
            
                },
                Mode:{
                    type:String,
                    default:"Not yet decided"
            
                }






    //     distance:{
    //                     type:String,
    //                     required:true
                
    //              },
    //     photos:{
    //                 type:[String]
                    
            
    //          },

    //      disc:{
    //             type:String,
    //             required:true
        
    //      },

    //      rating:{
    //         type:Number,
    //         min:0,
    //         max:5
    //     },

    //     rooms:{
    //         type:[String],
    //         min:0,
    //         max:5
    //     },

    //     cheapestPrice:{
    //         type:Number,
    //         required:true
    //     },
    //     featured:{
    //         type:Boolean,
    //        default:false
    //     }
    
     
     }


);

export default mongoose.model("Hotel",HotelSchema)
