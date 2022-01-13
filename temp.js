import jwt from "jsonwebtoken"
const token = { accessToken: jwt.sign({ userid: 'xxxxádxx' }, 'shhhhh') }

console.log(token)


jwt.verify(token.accessToken, 'shhhhh', function (err, decoded) {
    if (err) {
        console.log(err)
    }
    else {
        console.log(decoded);
    }
})

// 61dabf2dac3cb82f05276666
