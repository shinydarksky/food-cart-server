import express from 'express'
import { loginController, registerController, getUserController } from '../controller/authController.js'

const router = express.Router()

router.post('/', loginController)

router.put('/', registerController)

router.post('/user', getUserController)


export default router