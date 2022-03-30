import express from 'express'
import {
    getFood,
    addFood,
    editFood,
    areaFood,
    storeFood,
    getFoodFromCart,
    getAddressFood 
} from '../controller/foodController.js'
import { upload } from '../middleware/uploadFile.js'

const router = express.Router()

router.get('/', getFood)

router.post('/', upload.array('images'), addFood)


router.put('/', upload.array('images'), editFood)

router.put('/edit', editFood)

router.post('/area', areaFood)

router.get('/store', storeFood)

router.post('/cart', getFoodFromCart)

router.get('/address', getAddressFood )

export default router