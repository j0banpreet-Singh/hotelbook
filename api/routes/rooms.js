import express from "express";
import { createRoom, deleteRoom, updateRoom ,getRoom, getRooms,updateRoomAvailability} from "../controllers/room.js";
const router = express.Router();
import {verifyAdmin} from "../utils/verifyToken.js"

//CREATE ROOM
router.post("/:hotelId",verifyAdmin,createRoom)

//UPDATE ROOM
router.put("/:id",verifyAdmin,updateRoom)

//DELETE ROOM
router.delete("/:hotelId/:id",verifyAdmin,deleteRoom);

//GET ROOM 
router.get("/:id",getRoom)

//GET ALL ROOMS
router.get("/",getRooms)
//UPDATE AVAILIBILITY
router.put("/availability/:id",updateRoomAvailability)
export default router;