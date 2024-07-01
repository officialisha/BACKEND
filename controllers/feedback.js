import feedback from "../models/Feedback.js";

export const createfeedback=async(req,res,next)=>{
    const newfeedback=new feedback(req.body)
    try{
          const savedfeedback=await newfeedback.save()
          res.status(200).json(savedfeedback)
    }
    catch(err){
        next(err)
        console.log(err)
    }
}


export const updatefeedback=async(req,res,next)=>{
    try{
        const updatedfeedback=await feedback.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedfeedback)
  }
  catch(err){
      next(err)
  }
}

export const deletefeedback=async(req,res,next)=>{
    try{
        const deletefeedback=await feedback.findByIdAndDelete(req.params.id)
        res.status(200).json("feedback has been deleted")
  }
  catch(err){
      next(err);
  }
}


export const getfeedback=async(req,res,next)=>{
    try{
        const Htel=await feedback.findById(req.params.id);
        res.status(200).json(Htel)
  }
  catch(err){
     next(err)
  }
}


export const getfeedbacks=async(req,res,next)=>{
    const {...others}=req.query;
    try{
        const Htl=await feedback.find({...others});
        // const Htl=await feedback.find({...others,cheapestPrice:{$lt:max||9999}});
        res.status(200).json(Htl)
  }
  catch(err){
      next(err);
  }
}

export const countByCity=async(req,res,next)=>{
const cities =req.query.cities.split(",")

    try{
        const list=await Promise.all(cities.map(city=>{
            return feedback.countDocuments({city:city})
        }))
        res.status(200).json(list)
  }
  catch(err){
      next(err);
  }
}


export const countByTypee=async(req,res,next)=>{
   
    
        try{
            const feedbackCount =await feedback.countDocuments({type:"feedback"});
            const apartmentCount =await feedback.countDocuments({type:"apartments"});
            const resortCount =await feedback.countDocuments({type:"resorts"});
            const villaCount =await feedback.countDocuments({type:"villa"});
            const cabinCount =await feedback.countDocuments({type:"cabin"});


            res.status(200).json(
            
                [
                    // {"data":44,
                    // "type":"kuchh bhi"}
                   
                    {"typee":"feedback",count:55},
                    {"typee":"apartments",count:apartmentCount},
                    {"typee":"resorts",count:resortCount},
                    {"typee":"villas",count:villaCount},
                    {"typee":"cabins",count:cabinCount}
                ]
                
            );
      }
      catch(err){
          next(err);
      }
    }