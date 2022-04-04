import receiptModel from '../models/receiptModel.js'
import foodModel from '../models/foodModel.js'
import { sum } from './fc.js'
export const getReceipt = async (req, res) => {
    try {
        const { status } = req.query
        let listOrder = []
        if (status) {
            listOrder = await receiptModel.find(req.query)
        } else {
            listOrder = await receiptModel.find(req.query).$where('this.status>=0 && this.status<3')
        }
        res.status(200).json({ success: true, results: listOrder })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const createReceipt = (req, res) => {
    try {
        const { userId, addressLocation, listFood, prices, discountCode,phone } = req.body
        const newReceipt = new receiptModel({
            userId: userId,
            listFood: listFood,
            prices: prices,
            addressLocation: addressLocation,
            phone:phone
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



export const getChartStore = async (req, res) => {
    try {
        const { storeId } = req.query
        const listFood = await foodModel.find({storeId:storeId})
        const listReceipt = await receiptModel.find({status:3})
        let rawFoodReceipt = []
        for(let receiptItem of listReceipt){
            rawFoodReceipt.push(...receiptItem.listFood)
        }
        rawFoodReceipt = rawFoodReceipt.flat(2)
        let results = []
        for(let foodItem of listFood){
            const item = rawFoodReceipt.filter(item=>item._id==foodItem._id)
            if(item.length>0){
                let price = sum([...item],'price') || 0
                results.push({...item[0],num:item.length,price:price})
            }
        }
        res.status(200).json({ success: true, results: results })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

