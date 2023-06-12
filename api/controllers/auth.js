import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) return res.status(404).json("Wrong password or username")

        const { isAdmin, password, ...otherDetails } = user._doc;

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ ...otherDetails });

    } catch (err) {
        next(err);
    }
}