import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to database")
    } catch (error) {
        throw error;
    }
}

app.use("/api/auth",authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/users",usersRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
    console.log(err.message)
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        stack:err.stack,
        message:err.message
    })
})
app.listen(8001, () => {
    connect();
    console.log("connected")
})