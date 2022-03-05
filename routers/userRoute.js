import express from 'express'
const router = express.Router()
import {
    getUserController,
    updateUserController,
    getUserInforController,
    updateUserInforController
} from "../controller/userController.js";

router.get('/', getUserController)

router.post('/', updateUserController)

router.get('/infor', getUserInforController)

router.post('/infor', updateUserInforController)

export default router