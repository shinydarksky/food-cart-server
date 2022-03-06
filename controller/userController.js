import userModel from "../models/userModel.js"
import inforModel from '../models/inforModel.js'

export const getUserController = async (req, res) => {
    try {
        const { type } = req.query
        if(type){
            const listUser = await userModel.find({role:type})
            if (listUser) {
                res.status(200).json({ success: true, results: listUser })
            }
            else throw 'List user is empty'
        }else{
            const listUser = await userModel.find()
            if (listUser) {
                res.status(200).json({ success: true, results: listUser })
            }
            else throw 'List user is empty'
        }
      
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}

export const updateUserController = async (req, res) => {
    try {
        const { _id, data } = req.body
        await userModel.updateOne({ _id: _id }, data).then((data) => {
            res.status(200).json({ success: true, message: 'Cập nhật thành công' })
        }).catch((error) => {
            res.status(500).json({ success: false, message: error })
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}

export const getUserInforController = async (req, res) => {
    try {
        const { id } = req.query
        const userInfor = await inforModel.findOne({ userId: id })
        if (userInfor) {
            res.status(200).json({ success: true, results: userInfor })
        }
        else {
            const newInfor = new inforModel({
                userId: id
            }).save()
            res.status(200).json({ success: true, results: newInfor })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}

export const updateUserInforController = async (req, res) => {
    try {
        const { _id, data } = req.body
        await inforModel.updateOne({ _id: _id }, data).then((data) => {
            res.status(200).json({ success: true, message: 'Cập nhật thành công' })
        }).catch((error) => {
            res.status(500).json({ success: false, message: error })
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}