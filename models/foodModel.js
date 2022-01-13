import mongoose from 'mongoose'

const foodSchema = mongoose.Schema({
    name:String,
    description:String,
    price:0,
    image:String,
    area:{default:'ho-chi-minh',type:String},
    buyCount:{default:0,type:mongoose.Schema.Types.Number},
},{ timestamps: true })

export default  mongoose.model('foodModel',foodSchema)