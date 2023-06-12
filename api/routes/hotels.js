import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel,countByCity, countByType,getHotelRooms } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE HOTEL API
router.post("/",verifyAdmin,createHotel)

//UPDATE HOTEL USING ID
router.put("/:id",verifyAdmin, updateHotel)

//DELETE HOTEL BY ID
router.delete("/:id",verifyAdmin,deleteHotel)

//GET A SPECIFIC HOTEL USING ID
router.get("/find/:id",getHotel)

//GET ALL HOTELS
router.get("/", getHotels)

//COUNT BY CITY
router.get("/countByCity",countByCity)

//COUNT BY TYPE
router.get("/countByType",countByType)
//GET ALL ROOMS
router.get("/room/:id",getHotelRooms)
export default router;