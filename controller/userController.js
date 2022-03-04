import userModel from "../models/userModel.js"


export const getUserController = async (req, res) => {
    try {
        const listUser = await userModel.find()
        if(listUser){
            res.status(200).json({ success: true, results:listUser})
        }
        else throw 'user is error'
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}

export const updateUserController = async (req, res) => {
    try {
        const {_id,data} = req.body
        await userModel.updateOne({_id:_id},data).then((data)=>{
            res.status(200).json({ success: true, message:'Cập nhật thành công' })
        }).catch((error)=>{
            res.status(500).json({ success: false, message: error })
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
}