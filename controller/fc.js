import jwt from "jsonwebtoken"


function createUserToken(data) {
    const token = jwt.sign({ user: data }, 'NIENLUAN_NGANH_KTPM')
    return token
}

function checkUserToken(accessToken) {
    const decoded = jwt.verify(accessToken, 'NIENLUAN_NGANH_KTPM')
    return decoded
}

function sum(obj, field) {
    let sum = 0;
    for (let et of obj) {
        sum += et[field]
    }
    console.log(sum)
    return sum
}

export {
    createUserToken,
    checkUserToken,
    sum,
}