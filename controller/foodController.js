import foodModel from "../models/foodModel.js"
import addressModel from "../models/addressModel.js"

export const getFood = async (req, res) => {
    try {
        const listFood = await foodModel.find(req.query)
        res.status(200).json({ success: true, results: listFood })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const addFood = (req, res) => {
    // const { name, description, price, area, image } = req.body
    try {
        const { files } = req
        const fileNames = Array(...files).map(item => `http://localhost:8080/images/${item.filename}`)
        const newData = { ...req.body, images: fileNames }
        const newFood = new foodModel(newData)
        newFood.save()
        res.status(200).json({ success: true, results: newFood })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const editFood = async (req, res) => {
    try {
        const { files } = req
        const { _id } = req.body
        const fileNames = Array(...files).map(item => `http://localhost:8080/images/${item.filename}`)
        const editData = { ...req.body, images: fileNames }
        const editFoodData = await foodModel.updateOne({ _id: _id }, editData)
        res.status(200).json({ success: true, results: editFoodData })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}
// $and:[{area:area},{name:`/${keyword}/`}]

export const areaFood = async (req, res) => {
    try {
        const { area, keyword, order } = req.body
        if (area == 'all') {
            foodModel.find({ name: { $regex: `${keyword}`, $options: 'i' } }).sort(order && { price: order }).then((data) => {
                res.status(200).json({ success: true, results: data })
            }).catch((error) => {
                res.status(500).json({ err: error, success: false })
            })
        } else {
            const addressArea = await addressModel.find({ area: area })
            let results = []
            for (let area of addressArea) {
                const dataFood = await foodModel.find({ area: area._id, name: { $regex: `${keyword}`, $options: 'i' } })
                results.push(...dataFood)
            }
            res.status(200).json({ success: true, results: results })
        }
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}


export const topicsFood = async (req, res) => {
    try {
        const { topic } = req.body

        if (area == 'all') {
            foodModel.find({ name: { $regex: `${keyword}`, $options: 'i' } }).then((data) => {
                res.status(200).json({ success: true, results: data })
            }).catch((error) => {
                res.status(500).json({ err: error, success: false })
            })
        }
        const results = await foodModel.find({ area: area, name: { $regex: `${keyword}`, $options: 'i' } })
        res.status(200).json({ success: true, results: results })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const storeFood = async (req, res) => {
    try {
        const listFood = await foodModel.find(req.query)
        res.status(200).json({ success: true, results: listFood })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const getFoodFromCart = async (req, res) => {
    try {
        const { listFoodId } = req.body || []
        let listFood = []

        for (let food of listFoodId) {
            let foodItem = await foodModel.findOne({ _id: food.foodId })
            listFood.push({
                _id: foodItem._id,
                name: foodItem.name,
                num: food.num,
                price: foodItem.price,
                storeId: foodItem.storeId,
                area: foodItem.area
            })
        }
        res.status(200).json({ success: true, results: listFood })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const getAddressFood = async (req, res) => {
    try {
        const { _id } = req.query
        const addressItem = await addressModel.findOne({ _id: _id })
        res.status(200).json({ success: true, results: addressItem })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}


export const getSpecialFood = async (req, res) => {
    try {
        const { cate, page,  num } = req.query
        let listFood = []

        if(cate==='dang-khuyen-mai'){
            listFood = await foodModel.find({}).sort({price:1})
        }else{
            listFood = await foodModel.find()
        }
        listFood = listFood.slice((page-1)*num,(page)*num)
        res.status(200).json({ success: true, results: listFood })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}
