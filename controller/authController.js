import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"

function createUserToken(data){
    const token = jwt.sign({user:data},'NIENLUAN_NGANH_KTPM') 
    return token
}

function checkUserToken(accessToken){
    const  decoded = jwt.verify(accessToken,'NIENLUAN_NGANH_KTPM')
    return decoded
}

export const loginController = async (req, res) => {
    try {
        const { username, password } = req.body
        const userData = await userModel.findOne({username:username,password:password})
        if(userData){
            const accessToken = createUserToken(userData)
            res.status(200).json({ success: true, accessToken })
        }
        else throw 'user is error'
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }

}

export const registerController = (req, res) => {
    try {
        const { username, password } = req.body
        const newUser = new userModel({
            username:username,
            password:password
        })
        newUser.save()

    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }

}

export const getUserController = (req, res) => {
    try {
        const {accessToken} = req.body
        const userData = checkUserToken(accessToken)
        res.status(200).json({ success: true, results:userData })

    } catch (error) {
        res.status(401).json({ success: false, message: error })
    }
}
