import express from 'express'
import { createRoom, deleteRoom, getAllRooms, getByIdRoom, updatedRoom } from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom)

//UPDATE
router.put("/:id", verifyAdmin, updatedRoom)

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

//GET BY ID
router.get("/:id", getByIdRoom)

//GET ALL
router.get("/", getAllRooms)

export default router