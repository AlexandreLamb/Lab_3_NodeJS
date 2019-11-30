"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var metrics_1 = require("./metrics");
var path = require("path");
var bodyparser = require("body-parser");
var app = express();
var port = process.env.PORT || '8082';
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.set('views', __dirname + "/../views");
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.write('Hello world');
    res.end();
});
app.get('/hello/:name', function (req, res) {
    res.render('hello.ejs', { name: req.params.name });
});
var dbMet = new metrics_1.MetricsHandler('./leveldb');
app.post('/metrics/:id', function (req, res) {
    dbMet.save(req.params.id, req.body, function (err) {
        if (err)
            throw err;
        res.status(200).send("Ok");
        res.end();
    });
});
app.get('/metrics/:id', function (req, res) {
    dbMet.getOne(req.params.id, function (err, result) {
        if (err)
            throw err;
        res.status(200).send(result);
    });
});
app.get('/metrics', function (req, res) {
    dbMet.getAll(function (err, result) {
        if (err)
            throw err;
        res.status(200).send(result);
    });
});
app.delete('/metrics/:id', function (req, res) {
    dbMet.delete(req.params.id, function (err, result) {
        if (err)
            throw err;
        if (result) {
            res.status(200).send('ok');
        }
        else {
            res.status(200).send('not found the key');
        }
    });
});
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("Server is running on http://localhost:" + port);
});
