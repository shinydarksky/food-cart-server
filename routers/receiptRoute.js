import express from 'express'
import { createReceipt, getReceipt, shipperConfirmReceipt, shipperGetReceipt } from '../controller/receiptController.js'
const router = express.Router()

router.get('/',getReceipt)

router.post('/',createReceipt)

router.get('/confirm',shipperGetReceipt)

router.post('/confirm',shipperConfirmReceipt)

export default router