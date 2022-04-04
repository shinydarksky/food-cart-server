import mongoose from 'mongoose'
const  Schema = mongoose.Schema
const receiptSchema = Schema({
    userId:Schema.Types.ObjectId,
    listFood: Schema.Types.Array,
    shipperId:Schema.Types.ObjectId,
    discountCode:String,
    prices:Number,
    addressLocation:String,
    note:String,
    phone:String,
    status:{type:Number,default:0}
},{ timestamps: true })

export default mongoose.model('receiptModel', receiptSchema)