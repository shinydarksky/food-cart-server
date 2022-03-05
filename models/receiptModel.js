import mongoose, { Schema } from 'mongoose'

const receiptSchema = Schema({
    userId:Schema.Types.ObjectId,
    listFood: Schema.Types.Array,
    shipperId:Schema.Types.ObjectId,
    discountCode:String,
    prices:Number,
    location:String
},{ timestamps: true })

export default mongoose.model('receiptModel', receiptSchema)