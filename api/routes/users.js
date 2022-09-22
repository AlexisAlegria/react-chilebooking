import express from 'express'
import {updatedUser, deleteUser, getByIdUser, getAllUsers} from "../controllers/user.js"
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hi user, you are logged in")
})
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hi user, you are logged in and you can delete your account")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hi Admin, you are logged in and you can delete all accounts")
})

//UPDATE
router.put("/:id", verifyUser, updatedUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET BY ID
router.get("/:id", verifyUser, getByIdUser)

//GET ALL
router.get("/", verifyAdmin, getAllUsers)

export default router