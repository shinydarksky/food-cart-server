import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongooose from 'mongoose'
import authRoute from './routers/authRoute.js'
import homeRoute from './routers/homeRoute.js'
import foodRoute from './routers/foodRoute.js'
import userRoute from './routers/userRoute.js'
const app = express()
const PORT = 8080
const URI_DB = 'mongodb://localhost:27017/food-cart'
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))

mongooose.connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true }).
	then(() => {
		console.log("Connect database is success!");
	}).
	catch((err) => {
		console.log('Errors' + err)
	}
	)

app.listen(PORT, () => {
	console.log(`Server running with PORT: ${PORT}`)
})

app.use('/', homeRoute)

app.use('/auth', authRoute)

app.use('/user', userRoute)

app.use('/food', foodRoute)



// 




