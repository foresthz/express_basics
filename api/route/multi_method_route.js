/**
 * Created by jack on 2018/1/5.
 */

let express = require('express')
let app = express()

app.get('/multi_method', [method1, method2, method3])

function method1(req, res, next) {
    console.info('method 1');
    next();
}

function method2(req, res, next) {
    console.info('method 2');
    //res.send('M2');
    next();
}

function method3(req, res) {
    console.info('method 3');
    res.send('M3');
}

app.listen(4000)