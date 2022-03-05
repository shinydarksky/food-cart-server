import express from 'express'
import mongooose from 'mongoose'
import userModel from './models/userModel.js'
import inforModel from './models/inforModel.js'
import foodModel from './models/foodModel.js'
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


async function user(){
    userModel({
        username:'admin',
        password:'admin',
        role:'admin',
    }).save()

    for(let i=0;i<3;i++){
        userModel({
            username:'user'+i,
            password:'user'+i,
            role:'store',
        }).save()
    }
    for(let i=3;i<6;i++){
        userModel({
            username:'user'+i,
            password:'user'+i,
            role:'shipper',
        }).save()
    }
    for(let i=6;i<9;i++){
        userModel({
            username:'user'+i,
            password:'user'+i,
        }).save()
    }
}

async function food(){
    for(let i=30;i<40;i++){
        foodModel({
            name:'Bánh mẫu '+i,
            description:'Mô tả bánh '+i,
            image:'https://cdn.daylambanh.edu.vn/wp-content/uploads/2018/12/banh-tra-sua-tran-chau-duong-den.jpg',
            storeId:'62237c08763a68d31b8315ac',
            area:'can-tho'
        }).save()
    }
}

// user()
food()