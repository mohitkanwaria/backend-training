const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://mohitkanwaria_:IZ2vta9qwavx3n0S@cluster0.2byd2qy.mongodb.net/auth-1?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

// app.use(

// (req, res, next) => {
//     const token = req.headers["x-auth-token"]
//     if (!token) return res.send({ status: false, mes: "token is requried" })

//     const tokenValidator = jwt.verify(token, "gsqh-gcsh-hscc-jjch-gcck-cijie-jcue-ghcj-igjc")
//     if (!tokenValidator) return res.send("token in invalid")
//     next()
// })
// app.use('/users')     //semi globall middleware
app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});