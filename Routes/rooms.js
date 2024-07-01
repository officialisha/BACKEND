import express from "express";
import {createRoom,  deleteRoom,getRoom,getRooms,updateRoom,} from "../controllers/room.js";
const router = express.Router();

import { createError } from "../utils/error.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

router.get("/:id", getRoom);
//POST

router.post("/", createRoom);

//UPDATE

router.put("/:id", updateRoom);

//UPDATE

router.delete("/:id/:hotelId", deleteRoom);

//GET ALL

router.get("/", getRooms);

export default router;
