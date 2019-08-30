var fs = require('fs');
var content = '';

fs.readFile('./index.html', (err, data) => {
    content = data.toString();
});

fs.mkdir('pages');
fs.open('pages/index.html');
fs.writeFile('pages/index.html', content);

