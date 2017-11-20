'use strict';

const fs = require('fs');
var express = require('express');

var port = 3000;

var app = express();
app.get('/', function(req, res) {
    const index = fs.readFileSync('./index.html');
    res.end(index);
});
app.get('/Lightbulb.png', function(req, res) {
    const img = fs.readFileSync('./Lightbulb.png');
    res.end(img);
});
app.get('/default.css', function(req, res) {
    const css = fs.readFileSync('./default.css');
    res.end(css);
});
app.listen(port);