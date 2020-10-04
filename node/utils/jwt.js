let jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt')
function createToken(data) {
    console.log("createToken invoked");

    payload = data
    return jwt.sign(
        payload,
        jwtConfig.secret, {
            expiresIn: 600
        });
}

function verifyToken(token){
    console.log("verifyToken invoked");

    return jwt.verify(token, config.secret);
}

module.exports = {
    createToken,
    verifyToken
}