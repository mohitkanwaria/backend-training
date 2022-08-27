//2
// const { count } = require("console")
const userModel = require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let head = req.headers
    data.isFreeAppUser = head.isfreeappuser
    // console.log(head.isfreeappuser)
    const newUser = await userModel.create(data)
    res.send(newUser)
}

module.exports.createUser = createUser
