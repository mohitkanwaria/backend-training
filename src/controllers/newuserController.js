//2
// const { count } = require("console")
const userModel = require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let head = req.headers
    if (head.isfreeappuser === 'true') data.isFreeAppUser = true
    else data.isFreeAppUser = false
    // console.log(head.isfreeappuser)
    const newUser = await userModel.create(data)
    res.send(newUser)
}

module.exports.createUser = createUser
