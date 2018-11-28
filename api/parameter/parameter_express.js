
const express = require('express')
const app = new express()
app.get('/code/:id', function(req, res) {
    res.send("hello: " + req.params.id);
});

app.get('/query', function (req, res) {
    let id = req.query.id;
    res.send(id);
})

app.get('/', function (req, res)  {
    res.send("hello world");
});

app.listen(3000)