const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

// const mongoose =require('mongoose')

mongoose.connect("mongodb+srv://mohitkanwaria_:IZ2vta9qwavx3n0S@cluster0.2byd2qy.mongodb.net/?retryWrites=true&w=majority",{
    useNewurlparser:true})
      
.then( ()=> console.log("Mongodb is connected"))
.catch(  err => console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});