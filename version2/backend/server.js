var express = require('express')
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*', limit: '50mb' }))

app.use(express.static('images'))

app.post('/upics', (req, res) => {
    var extension = req.query.ext.split('.').pop();
    var randomString = '' +  Math.floor(Math.random() * 10000000)
    var randomFilename = randomString + '.' + extension
    fs.writeFileSync('images/' +  randomFilename, req.body);
    res.send(randomFilename)
})

app.listen(5000);
