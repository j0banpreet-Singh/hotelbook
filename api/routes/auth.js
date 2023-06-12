import express from "express";
import { register ,login} from "../controllers/auth.js";
const router = express.Router();

//register user endpoint
router.post("/register",register);

//Login endpoint
router.post("/login",login);

export default router;