/* Importing the required modules */
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmiCalculator', (req, res) => {
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)

    var bmi = weight / height*height
    res.send(`The Body Mass Index (BMI) is: ${bmi}`)
})

app.listen(port, () => {
    console.log('Application started!')
})