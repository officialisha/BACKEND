import express from "express";
import { createRental, deleteRental, getRental, getRentals, updateRental } from "../controllers/rental.js";
const router =express.Router();


router.get("/bbb",(req,res)=>{
    res.send("Hello , this is Rentals end-point1")
})



// router.get("/find/:id",getRental);
router.get("/find",getRentals)


router.post("/",createRental);




 router.put("/edit/:id",updateRental);




router.delete("/:id" ,deleteRental);
















export default router;
