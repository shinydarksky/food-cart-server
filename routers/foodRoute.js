import express from 'express'
import { getFood, addFood, editFood, areaFood,storeFood } from '../controller/foodController.js'
import { upload } from '../middleware/uploadFile.js'

const router = express.Router()

router.get('/',getFood)

router.post('/',upload.array('images'),addFood)

router.put('/edit',editFood)

router.post('/area',areaFood)

router.get('/store',storeFood)

export default router