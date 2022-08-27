const mongoose =require("mongoose");
const moment =require("moment")
const orderSchema = mongoose.Schema(
   {
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'New_User'
        },
        productId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'New_product'
        },
        amount : Number,

        isFreeAppUser : Boolean,

        date : {
            type : String,
            default : moment().format('DD/MM/YYYY')
        }
    },
    {timestamps : true}
);

module.exports = mongoose.model('New_order',orderSchema);