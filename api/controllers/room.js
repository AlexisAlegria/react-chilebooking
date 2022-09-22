import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}})
        } catch(err){
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (err) {
        next(err)
    }
}

//UPDATE
export const updatedRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true }
            )
        res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)
    }
}

//DELETE
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid

    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id},
            })
        } catch (err){
            next(err)
        }
        res.status(200).json("message: Room was deleted successfully")
    } catch (err) {
        next(err)
    }
}

//GET BY ID
export const getByIdRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}

//GET ALL
export const getAllRooms = async (req, res, next) => {
    try {
        const Rooms = await Room.find()
        res.status(200).json(Rooms)
    } catch (err) {
        next(err)
    }
}