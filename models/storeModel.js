import mongoose from 'mongoose'
const Schema = mongoose.Schema

const storeSchema = Schema({
    name: String,
    userId: Schema.Types.ObjectId,
    location:String
})

export default mongoose.model('storeModel', storeSchema)