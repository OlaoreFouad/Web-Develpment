const express = require('express');

const app = express()

const about_myself = `I am Fouad, a lover of <b>programming</b>, I also love video games, a lot. I really love building amazing stuff, and also a fan of debugging. I feel lazy to code. <em>I</em> am also a fan of <span style="color: lightblue; font-weight: bold">Real Madrid <i>(los galacticos)</i></span>`

app.get('/', (req, res) => {
    res.send('<h1 style=\"color: blue;\">Hello, express!</h1>')
});

app.get('/contact', (req, res) => {
    res.send('Contact foodie at olaorefouad565@gmail.com');
})

app.get('/about', (req, res) => {
    res.send(about_myself);
})

app.listen(3000, () => {
    console.log('Server started on port 3000!');
});