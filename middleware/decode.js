const jwt = require("jsonwebtoken");
require('dotenv').config()
const decodeToken = async(req, res, next) => {

    const publicRoutes = ['/users/signup','/users/login']
    let url = req.url
    if(url.includes('/users/verify')){
        return next()
    }
    if(publicRoutes.includes(req.url)){
        return next()
    }
    let token = req.headers['authorization']
    if(token){
        try {
            token = token.split(' ')[1]
            let decode = await jwt.verify(token,process.env.private_key)
            req.user = decode
            next()
        } catch (error) {
            return res.status(403).send({ message: error.message });
        }
    }else{
        return res.status(403).send({ message: "You are not authorized" });
    }
}

module.exports = decodeToken;