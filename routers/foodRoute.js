import express from 'express'
import { getFood, addFood, editFood, areaFood,storeFood } from '../controller/foodController.js'

const router = express.Router()

router.get('/',getFood)

router.put('/',addFood)

router.post('/edit',editFood)

router.post('/area',areaFood)

router.get('/store',storeFood)


export default router