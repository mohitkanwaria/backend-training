const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://mohitkanwaria_:IZ2vta9qwavx3n0S@cluster0.2byd2qy.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);

app.use (
    function (req, res, next) {
        // console.log ("inside GLOBAL MW");
        let obj =
        {
            "name": "mohit",
            "city": "Dabwali",
            "address-pincode": "125104" ,
            // "age" : "23"
        }
        // obj.age =12,  //agr obj ke ander value nhi hai to hum usko bahar lekh ke usko obj ke ander ase add karwa sakte hai.
        // obj["age"] =12,

        console.log(obj.name)
        console.log(obj["name"])
        console.log(obj.city)
        console.log(obj["city"])
        console.log(obj.address-pincode)
        console.log(obj["address-pincode"])
        console.log(obj.age)
        console.log(obj["age"])

        res.send({msg:"done"})
  }
  );


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
