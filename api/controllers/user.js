import User from '../models/User.js'

//UPDATE
export const updatedUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
            )
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

//DELETE
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("message: User was deleted successfully")
    } catch (err) {
        next(err)
    }
}

//GET BY ID
export const getByIdUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

//GET ALL
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await Hotel.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}