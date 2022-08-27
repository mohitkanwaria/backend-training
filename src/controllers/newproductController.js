const productModel = require("../models/productModel")

//1
const createProduct= async function (req, res) {
    let data= req.body
     let savedData= await productModel.create(data)
    res.send({msg: savedData})
}

module.exports.createProduct = createProduct;

