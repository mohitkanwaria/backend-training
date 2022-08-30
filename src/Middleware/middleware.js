const jwt = require('jsonwebtoken')

const mid = (req, res, next) => {
    const userId = req.params.userId
    const token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, mes: "token is requried" })

    const tokenValidator = jwt.verify(token, "gsqh-gcsh-hscc-jjch-gcck-cijie-jcue-ghcj-igjc")
    // console.log(tokenValidator)
    if (tokenValidator.userId != userId) return res.send("access denied")
    
    next()
}
module.exports.mid = mid 