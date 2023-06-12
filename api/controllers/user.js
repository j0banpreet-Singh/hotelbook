import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updatedUser);

    } catch (err) {
        next(err)
    }
}

export const deleteUser = async(req,res,next)=>{
    try {
        await User.findOneAndDelete(req.params.id);
        res.status(200).json("User has been successfully deleted")
    }
    catch (err) {
        next(err)
    }
}

export const getUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(User);
    } catch (error) {
        next(error)
    }
}

export const getUsers = async(req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);

    } catch (err) {
        next(err)
    }
}