import express from 'express'
import { createReceipt, getReceipt, shipperConfirmReceipt, shipperGetReceipt,getChartStore } from '../controller/receiptController.js'
const router = express.Router()

router.get('/',getReceipt)

router.post('/',createReceipt)

router.get('/confirm',shipperGetReceipt)

router.post('/confirm',shipperConfirmReceipt)

router.get('/chart',getChartStore)

export default router