
const express = require('express')
const app = new express()
app.get('/', function(req, res){
    res.send('Hello World xx');
    console.info('process')
}).listen(3000, ()=> {
    console.info('Hello World App is called')
})
