import mongoose from 'mongoose'
const Schema = mongoose.Schema
const addressSchema = mongoose.Schema({
    userId:Schema.Types.ObjectId,
    addressLocation:{type:String,default:'Hồ chính minh'},
    areaTitle:{type:String,default:'Hồ chí minh'},
    area:{type:String,default:'ho-chi-minh'},
},{ timestamps: true })

export default mongoose.model('addressModel',addressSchema)