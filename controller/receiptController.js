import receiptModel from '../models/receiptModel.js'

export const getReceipt = async (req, res) => {
    try {
        const listOrder = await receiptModel.find(req.query)
        res.status(200).json({ success: true, results: listOrder })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const createReceipt = (req, res) => {
    try {
        const { userId, addressLocation, listFood, prices } = req.body
        const newReceipt = new receiptModel({
            userId: userId,
            listFood: listFood,
            prices: prices,
            addressLocation: addressLocation
        })
        newReceipt.save()
        res.status(200).json({ success: true, message: 'Đặt hàng thành công' })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const shipperConfirmReceipt = async (req, res) => {
    try {
        const { _id } = req.body
        await receiptModel.findOneAndUpdate({ _id: _id }, req.body)
        res.status(200).json({ success: true, message: 'Cập nhật đơn hàng thành công thành công' })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const shipperGetReceipt = async (req, res) => {
    try {
        const { shipperId } = req.query
        const findReceipt = await receiptModel.find({ shipperId: shipperId }).$where('this.status>0 && this.status<3')
        res.status(200).json({ success: true, results: findReceipt })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}