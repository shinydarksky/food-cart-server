import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    role:{type:String,default:'customer'},
})

export default  mongoose.model('userModel',userSchema)