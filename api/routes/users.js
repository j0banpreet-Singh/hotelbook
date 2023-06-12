import express from "express";
const router = express.Router();
import { deleteUser, updateUser,getUser , getUsers} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// //UPDATE USER
// router.put("/:id",updateUser);

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("ur authenticated")
// })

// router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello you can delete your account")
// })

// router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("admin u can delete all accounts")
// })

//update user
router.put("/:id",verifyUser,updateUser)

//delete user
router.delete("/:id",verifyUser,deleteUser);

//get a specific user
router.get(":/id",verifyUser,getUser)

//get all users
router.get("/",verifyAdmin,getUsers)
export default router;