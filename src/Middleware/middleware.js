const jwt = require('jsonwebtoken')

const mid = (req, res, next) => {
    const token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, mes: "token is requried" })

    const tokenValidator = jwt.verify(token, "gsqh-gcsh-hscc-jjch-gcck-cijie-jcue-ghcj-igjc")
    if (!tokenValidator) return res.send("token in invalid")
    next()
}
module.exports.mid = mid 