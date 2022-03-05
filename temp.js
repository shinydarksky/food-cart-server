import express from 'express'
import mongooose from 'mongoose'

const app = express()
const PORT = 8080
const URI_DB = 'mongodb://localhost:27017/food-cart'

mongooose.connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true }).
	then(() => {
		console.log("Connect database is success!");
	}).
	catch((err) => {
		console.log('Errors' + err)
	}
)

import inforModel from './models/inforModel.js'

const infor = new inforModel({
    userId: '6221bb1ee5ba484f89e520c2',
    phone:'0795856367',
    email:'shinydark.sky@gmail.com',
    gender:'male',
    birth:'09/21/2000'
})

console.log(infor)
// infor.save()

