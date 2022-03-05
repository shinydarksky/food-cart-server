import mongoose, { Schema } from 'mongoose'

const storeSchema = Schema({
    name: String,
    userId: Schema.Types.ObjectId,
})

export default mongoose.model('storeModel', storeSchema)