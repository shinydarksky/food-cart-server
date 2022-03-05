import mongoose from 'mongoose'
const Schema = mongoose.Schema
const inforSchema = mongoose.Schema({
    userId:Schema.Types.ObjectId,
    fullname:{type:String,default:'Khách hàng LTSHIP'},
    phone:String,
    email:String,
    gender:String,
    birth:Schema.Types.Date,
},{ timestamps: true })

export default mongoose.model('inforModel',inforSchema)