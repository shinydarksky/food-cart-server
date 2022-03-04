import express from 'express'
const router = express.Router()
import { getUserController, updateUserController } from "../controller/userController.js";

router.get('/',getUserController)

router.post('/',updateUserController)

export default router