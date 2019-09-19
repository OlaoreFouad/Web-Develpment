const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    var crypto = req.body.crypto
    var fiat = req.body.fiat

    var baseUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var finalUrl = baseUrl + crypto + fiat

    request(finalUrl, (error, response, body) => {
        var data = JSON.parse(body)
        console.log(data)
        var last = data.last;
        var timestamp = data.display_timestamp

        res.write(`<p>The current timestamp is ${ timestamp }</p>`)
        res.write(`<h1>The price of ${ crypto } in ${ fiat } is ${ last }${ fiat }</h1>`)

        res.send()

    })
})

app.listen(port, () => {
    console.log('Server listening at port', port)
})