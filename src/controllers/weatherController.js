let axios = require("axios")

const weather = async (req, res) => {
    try {

        let link = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=a20b2648a57b4ad71921094cc91e6e18`
        }
        let result = await axios(link)

        res.status(200).send({ meg: result })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const onlyTemp = async (req, res) => {
    try {
       
        let link = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=a20b2648a57b4ad71921094cc91e6e18`
        }
        let result = await axios(link)
        let temp = { city_name: result.data.name, temp: result.data.main.temp }
        //console.log(result.data)
        res.status(200).send({ meg: temp })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



const tempByCities = async (req, res) => {
    try {
        const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let filter = []
        for (let i = 0; i < cities.length; i++) {
            let newObj = { city: cities[i] }
            let link = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a20b2648a57b4ad71921094cc91e6e18`

            }
            let result = await axios(link)
            newObj.temp = result.data.main.temp

            filter.push(newObj)
        }
        let sort = filter.sort((first, second) => first.temp - second.temp)

        res.status(200).send(sort)

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err })
    }
}

module.exports.weather = weather
module.exports.onlyTemp = onlyTemp
module.exports.tempByCities = tempByCities
