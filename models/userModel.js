import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    isadmin:{type:Boolean,default:false},
    address:String,
    fullname:{ type:String, default: ''},
})

export default  mongoose.model('userModel',userSchema)