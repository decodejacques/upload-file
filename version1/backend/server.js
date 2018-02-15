var express = require('express')
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

app.post('/upics', (req, res) => {
    fs.writeFileSync('foo.jpg', req.body);
    res.send('file uploaded')
})

app.listen(5000);
