import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    role:{type:String,default:'customer'},
    address:String,
    fullname:{ type:String, default: ''},
})

export default  mongoose.model('userModel',userSchema)