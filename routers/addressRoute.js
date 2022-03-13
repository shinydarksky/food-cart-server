import express from 'express'
import addressModel from '../models/addressModel.js'
const router = express.Router()

router.get('/', async function (req, res) {
    try {
        const listAddress = await addressModel.find(req.query)
        res.status(200).json({ success: true, results: listAddress })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})

router.post('/', async function (req, res) {
    try {
        const newAddress = addressModel(req.body)
        newAddress.save()
        res.status(200).json({ success: true, results: newAddress })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})


router.put('/', async function (req, res) {
    try {
        const { _id } = req.body
        await addressModel.findOneAndUpdate({_id:_id},req.body)
        res.status(200).json({ success: true, message: 'Cập nhật thành công' })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})

export default router
