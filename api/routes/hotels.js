import express from 'express'
import { 
    createHotel, 
    deleteHotel, 
    getAllHotels, 
    getByIdHotel, 
    updatedHotel, 
    countByCity, 
    countByType 
} from '../controllers/hotel.js'
import { createError } from '../utils/error.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updatedHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET BY ID
router.get("/find/:id", getByIdHotel)

//GET ALL
router.get("/", getAllHotels)

//GET BY FILTER
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)


export default router