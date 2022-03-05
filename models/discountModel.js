import mongoose, { Schema } from 'mongoose'

const discountSchema = Schema({
    discountCode:String,
    discountType:String,
    discountValue:String
},{ timestamps: true })

export default mongoose.model('discountModel', discountSchema)