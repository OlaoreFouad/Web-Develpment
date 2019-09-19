const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})

app.get('/contact', (req, res) => {
    res.send('Contact me at: olaorefouad565@gmail.com')
})

app.get('/about', (req, res) => {
    res.send('About Olaore Fouad. A Software Developer')
})

app.get('/hobbies', (req, res) => {
    res.send('<ul><li>Code</li><li>Football</li></ul>')
})

app.listen(port, () => {
    console.log('Server started on port: ', port)
})