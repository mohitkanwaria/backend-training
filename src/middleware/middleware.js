const jwt = require('jsonwebtoken')

const mid = (req, res, next) => {
    try{
    const userId = req.params.userId
    const token = req.headers["x-auth-token"]
    if (!token) return res.status(401).send({ status: false, mes: "token is requried" })

    const tokenValidator = jwt.verify(token, "gsqh-gcsh-hscc-jjch-gcck-cijie-jcue-ghcj-igjc")
    // console.log(tokenValidator)
    if (tokenValidator.userId != userId) return res.status(403).send("access denied")
    
    next()
    } catch (err) {
        console.log("This is the error :", err.message)
          res.status(500).send({ msg: "Error", error: err.message })
      }
}
module.exports.mid = mid 