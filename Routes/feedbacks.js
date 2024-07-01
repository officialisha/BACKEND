import express from "express";
import {createfeedback,  deletefeedback,getfeedback,getfeedbacks,updatefeedback,} from "../controllers/feedback.js";
const router = express.Router();

import { createError } from "../utils/error.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

router.get("/:id", getfeedback);
//POST

router.post("/", createfeedback);

//UPDATE

router.put("/:id", updatefeedback);

//UPDATE

router.delete("/:id/:hotelId", deletefeedback);

//GET ALL

router.get("/", getfeedbacks);

export default router;
