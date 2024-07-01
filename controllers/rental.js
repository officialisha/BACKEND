import Rental from "../models/Rental.js";

export const createRental=async(req,res,next)=>{
    const newRental=new Rental(req.body)
    try{
          const savedRental=await newRental.save()
          res.status(200).json(savedRental)
    }
    catch(err){
        next(err)
        console.log(err)
    }
}


export const updateRental=async(req,res,next)=>{
    try{
        const updatedRental=await Rental.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    
        res.status(200).json(updatedRental)
  }
  catch(err){
      next(err)
  }
}

export const deleteRental=async(req,res,next)=>{
    try{
        const deleteRental=await Rental.findByIdAndDelete(req.params.id)
        res.status(200).json("Rental has been deleted")
  }
  catch(err){
      next(err);
  }
}


export const getRental=async(req,res,next)=>{
    try{
        const Htel=await Rental.findById(req.params.id);
        res.status(200).json(Htel)
  }
  catch(err){
     next(err)
  }
}


export const getRentals=async(req,res,next)=>{
    const {...others}=req.query;
    try{
        const Htl=await Rental.find({...others});
      
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
            return Rental.countDocuments({city:city})
        }))
        res.status(200).json(list)
  }
  catch(err){
      next(err);
  }
}


export const countByTypee=async(req,res,next)=>{
   
    
        try{
            const RentalCount =await Rental.countDocuments({type:"Rental"});
            const apartmentCount =await Rental.countDocuments({type:"apartments"});
            const resortCount =await Rental.countDocuments({type:"resorts"});
            const villaCount =await Rental.countDocuments({type:"villa"});
            const cabinCount =await Rental.countDocuments({type:"cabin"});


            res.status(200).json(
            
                [
                    
                   
                    {"typee":"Rental",count:55},
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