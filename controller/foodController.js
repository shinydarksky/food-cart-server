import foodModel from "../models/foodModel.js"

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
        	const fileNames = Array(...files).map(item=>`http://localhost:8080/images/${item.filename}`)
        	const newData = {...req.body,images:fileNames}
            const newFood = new foodModel(newData)
            newFood.save()
        res.status(200).json({ success: true, results: newFood })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}

export const editFood = async (req, res) => {
    try {
        const { _id, name, description, price, area, image } = req.body
        const updateFood = await foodModel.findByIdAndUpdate(_id, { name: name, description: description, price: price, area: area, image, image })
        res.status(200).json({ success: true, results: {} })
    } catch (error) {
        res.status(500).json({ err: error, success: false })
    }
}
// $and:[{area:area},{name:`/${keyword}/`}]

export const areaFood = async (req, res) => {
    try {
        const { area, keyword } = req.body
        if (area == 'all') {
            foodModel.find({ name: { $regex: `${keyword}`, $options: 'i' } }).then((data) => {
                res.status(200).json({ success: true, results: data })
            }).catch((error) => {
                res.status(500).json({ err: error, success: false })
            })
        } else {
            const results = await foodModel.find({ area: area, name: { $regex: `${keyword}`, $options: 'i' } })
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