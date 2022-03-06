import jwt from "jsonwebtoken"


function createUserToken(data){
    const token = jwt.sign({user:data},'NIENLUAN_NGANH_KTPM') 
    return token
}

function checkUserToken(accessToken){
    const  decoded = jwt.verify(accessToken,'NIENLUAN_NGANH_KTPM')
    return decoded
}




export {
    createUserToken,
    checkUserToken,
}