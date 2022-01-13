import express from 'express'
import { getFood, addFood, editFood, areaFood } from '../controller/foodController.js'

const router = express.Router()

router.post('/',getFood)

router.put('/',addFood)

router.post('/edit',editFood)

router.post('/area',areaFood)


export default router