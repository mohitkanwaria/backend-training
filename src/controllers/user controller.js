//controller can contain all the container.

const UserModel = require("../Modals/userModel")


//this is the post api
const createUser = async function (req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)  //data = entry ,create = it will create a entry inside my data base with following (data).
    res.send({ msg: savedData })
}
//this is the get api
const getUsersData = async function (req, res) {
    let allUsers = await UserModel.find()  //in this hey usermodel  go into the data base and find all the entries inside that user collection in the data base.
    res.send({ msg: allUsers })
}

module.exports.getUsersData = getUsersData
module.exports.createUser = createUser
