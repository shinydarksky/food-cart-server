import mongoose from 'mongoose'
const Schema = mongoose.Schema

const foodSchema = mongoose.Schema({
    name: String,
    description: String,
    price: { default: 0, type: mongoose.Schema.Types.Number },
    image: String,
    area: { default: 'ho-chi-minh', type: String },
    buyCount: { default: 0, type: mongoose.Schema.Types.Number },
    storeId:Schema.Types.ObjectId,
}, { timestamps: true })

export default mongoose.model('foodModel', foodSchema)