const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.post('/', (request, response) => {
    console.log(request.body)
})

app.listen(port, () => {
    console.log('Server listening at port', port)
})